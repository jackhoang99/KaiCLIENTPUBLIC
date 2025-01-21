// Move FAQ-related API calls here
import { supabase } from '../supabase';
import type { FAQ } from '@/types/faq';

export async function getFAQs(): Promise<FAQ[]> {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('order');

  if (error) throw error;
  return data || [];
}