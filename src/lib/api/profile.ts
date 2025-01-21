// Move profile-related API calls here
import { supabase } from '../supabase';
import type { UserProfile } from '@/types/profile';

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function updateUserProfile(profile: Partial<UserProfile>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .update(profile)
      .eq('id', profile.id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error updating profile:', error);
    return false;
  }
}