import { supabase } from '../lib/supabase';

const TWILIO_VERIFY_URL = 'https://verify.twilio.com/v2/Services/YOUR_SERVICE_ID';
const TWILIO_AUTH_TOKEN = process.env.VITE_TWILIO_AUTH_TOKEN;

export async function sendVerificationCode(phoneNumber: string): Promise<void> {
  try {
    // In production, this would call Twilio's API
    // For demo, we'll simulate by storing a code in Supabase
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    const { error } = await supabase
      .from('user_profiles')
      .update({ 
        verification_code: verificationCode,
        phone_verified: false
      })
      .eq('phone', phoneNumber);

    if (error) throw error;

    // In production, this would send SMS via Twilio
    console.log('Verification code:', verificationCode);
  } catch (error) {
    console.error('Error sending verification code:', error);
    throw new Error('Failed to send verification code');
  }
}

export async function verifyPhoneNumber(phoneNumber: string, code: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('verification_code, verification_code_expires_at')
      .eq('phone', phoneNumber)
      .single();

    if (error) throw error;
    if (!data) throw new Error('Verification code not found');

    const isValid = data.verification_code === code;
    const isExpired = new Date(data.verification_code_expires_at) < new Date();

    if (!isValid || isExpired) {
      throw new Error('Invalid or expired verification code');
    }

    // Update verification status
    const { error: updateError } = await supabase
      .from('user_profiles')
      .update({ 
        phone_verified: true,
        verification_code: null,
        verification_code_expires_at: null
      })
      .eq('phone', phoneNumber);

    if (updateError) throw updateError;

    return true;
  } catch (error) {
    console.error('Error verifying phone number:', error);
    throw error;
  }
}