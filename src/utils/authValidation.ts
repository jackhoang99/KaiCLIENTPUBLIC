import { supabase } from "../lib/supabase";

export const isEmailRegistered = async (
  email: string
): Promise<{ exists: boolean; message: string }> => {
  try {
    // Query the `user_profiles` table to check if the email exists
    const { data, error } = await supabase
      .from("user_profiles")
      .select("email")
      .eq("email", email);

    if (error) {
      console.error("Error checking user_profiles email:", error);
      return {
        exists: false,
        message: "An error occurred while checking the email.",
      };
    }

    if (data && data.length > 0) {
      return {
        exists: true,
        message:
          "This email is already registered. Please use a different email.",
      };
    }

    return { exists: false, message: "" };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { exists: false, message: "An unexpected error occurred." };
  }
};
