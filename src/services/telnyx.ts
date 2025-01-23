import { supabase } from "../lib/supabase";

const TELNYX_API_KEY = import.meta.env.VITE_TELNYX_API_KEY;
const VERIFY_PROFILE_ID = import.meta.env.VITE_TELNYX_VERIFY_PROFILE_ID;
const TELNYX_API_URL = "https://api.telnyx.com/v2";

if (!TELNYX_API_KEY || !VERIFY_PROFILE_ID) {
  throw new Error("Missing Telnyx environment variables");
}

// Normalize phone number to E.164 format (+1XXXXXXXXXX)
function normalizePhoneNumber(phone: string): string {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, "");

  // If it starts with 1, treat it as a country code
  const nationalNumber = digits.startsWith("1") ? digits.slice(1) : digits;

  // Ensure we have exactly 10 digits for US numbers
  if (nationalNumber.length !== 10) {
    throw new Error(
      "Invalid phone number format. Please enter a 10-digit US phone number."
    );
  }

  // Return in E.164 format
  return `+1${nationalNumber}`;
}

async function checkPhoneNumberUniqueness(
  phoneNumber: string
): Promise<boolean> {
  // Normalize the phone number we're checking
  const normalizedPhone = normalizePhoneNumber(phoneNumber);

  const { data, error } = await supabase
    .from("user_profiles")
    .select("id")
    .or(`phone.eq.${normalizedPhone},phone.eq.${normalizedPhone.slice(1)}`)
    .eq("phone_verified", true)
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 is "no rows returned"
    throw error;
  }

  return !data; // Return true if no verified user found with this phone number
}

export async function sendVerificationCode(phoneNumber: string): Promise<void> {
  try {
    // Normalize the phone number
    const formattedPhone = normalizePhoneNumber(phoneNumber);

    // Check if phone number is already verified by another user
    const isUnique = await checkPhoneNumberUniqueness(formattedPhone);
    if (!isUnique) {
      throw new Error("This phone number is already verified by another user");
    }

    const response = await fetch(`${TELNYX_API_URL}/verifications/sms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TELNYX_API_KEY}`,
      },
      body: JSON.stringify({
        phone_number: formattedPhone,
        verify_profile_id: VERIFY_PROFILE_ID,
        type: "sms",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.errors?.[0]?.detail || "Failed to send verification code"
      );
    }

    // Get the user's auth ID
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("No authenticated user");

    // Update the user profile with the normalized phone number
    const { error: upsertError } = await supabase
      .from("user_profiles")
      .update({
        phone: formattedPhone,
        phone_verified: false,
      })
      .eq("id", user.id);

    if (upsertError) throw upsertError;
  } catch (error) {
    console.error("Error sending verification code:", error);
    throw error instanceof Error
      ? error
      : new Error("Failed to send verification code");
  }
}

export async function verifyPhoneNumber(
  phoneNumber: string,
  code: string
): Promise<boolean> {
  try {
    // Normalize the phone number
    const formattedPhone = normalizePhoneNumber(phoneNumber);

    // Check if phone number is already verified by another user
    const isUnique = await checkPhoneNumberUniqueness(formattedPhone);
    if (!isUnique) {
      throw new Error("This phone number is already verified by another user");
    }

    const response = await fetch(
      `${TELNYX_API_URL}/verifications/by_phone_number/${formattedPhone}/actions/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TELNYX_API_KEY}`,
        },
        body: JSON.stringify({
          code,
          verify_profile_id: VERIFY_PROFILE_ID,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || result.data?.response_code !== "accepted") {
      throw new Error("Invalid verification code");
    }

    // Get the user's auth ID
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;
    if (!user) throw new Error("No authenticated user");

    // Update the user profile to mark phone as verified
    const { error: updateError } = await supabase
      .from("user_profiles")
      .update({
        phone_verified: true,
      })
      .eq("id", user.id);

    if (updateError) throw updateError;

    return true;
  } catch (error) {
    console.error("Error verifying phone number:", error);
    throw error instanceof Error ? error : new Error("Verification failed");
  }
}
