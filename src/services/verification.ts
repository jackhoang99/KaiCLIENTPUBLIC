import { supabase } from '../lib/supabase';

export async function sendVerificationCode(userId: string): Promise<string> {
  // Generate a random 6-digit code
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  const { error } = await supabase
    .from('user_profiles')
    .update({
      verification_code: verificationCode
    })
    .eq('id', userId);

  if (error) throw error;
  
  // In production, integrate with SMS service here
  console.log('Verification code:', verificationCode);
  
  return verificationCode;
}

export async function verifyCode(userId: string, code: string): Promise<void> {
  const { data, error: verifyError } = await supabase
    .from('user_profiles')
    .select('verification_code, verification_code_expires_at')
    .eq('id', userId)
    .single();

  if (verifyError) throw verifyError;

  if (!data?.verification_code) {
    throw new Error('No verification code found');
  }

  if (new Date(data.verification_code_expires_at) < new Date()) {
    throw new Error('Verification code has expired');
  }

  if (data.verification_code !== code) {
    throw new Error('Invalid verification code');
  }

  const { error: updateError } = await supabase
    .from('user_profiles')
    .update({
      phone_verified: true,
      verification_code: null,
      verification_code_expires_at: null
    })
    .eq('id', userId);

  if (updateError) throw updateError;
}