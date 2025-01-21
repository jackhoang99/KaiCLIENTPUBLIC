import { supabase } from '../../lib/supabase';
import type { VerificationData } from './types';

export async function saveVerificationCode(phoneNumber: string, code: string, expiryDate: Date): Promise<void> {
  const { error } = await supabase
    .from('user_profiles')
    .update({ 
      verification_code: code,
      verification_code_expires_at: expiryDate.toISOString(),
      phone_verified: false
    })
    .eq('phone', phoneNumber);

  if (error) throw error;
}

export async function getVerificationData(phoneNumber: string): Promise<VerificationData> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('verification_code, verification_code_expires_at')
    .eq('phone', phoneNumber)
    .single();

  if (error) throw error;
  if (!data) throw new Error('No verification data found');

  return data;
}

export async function markPhoneAsVerified(phoneNumber: string): Promise<void> {
  const { error } = await supabase
    .from('user_profiles')
    .update({ 
      phone_verified: true,
      verification_code: null,
      verification_code_expires_at: null
    })
    .eq('phone', phoneNumber);

  if (error) throw error;
}