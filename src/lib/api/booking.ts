// Move booking-related API calls here
import { supabase } from '../supabase';
import type { Package } from '@/types/booking';

export async function getFirstTimerBundles(): Promise<Package[]> {
  const { data, error } = await supabase
    .from('first_timer_bundles')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getMemberships(): Promise<Package[]> {
  const { data, error } = await supabase
    .from('memberships')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getAlaCartePackages(): Promise<Package[]> {
  const { data, error } = await supabase
    .from('ala_carte_packages')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}