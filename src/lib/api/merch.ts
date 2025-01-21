// Move merch-related API calls here
import { supabase } from '../supabase';
import type { MerchItem } from '@/types/merch';

export async function getMerchItems(): Promise<MerchItem[]> {
  const { data, error } = await supabase
    .from('merch')
    .select('*')
    .eq('available', true)
    .order('order');

  if (error) throw error;
  return data || [];
}