import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { MerchItem } from '../types/merch';

export const useMerch = () => {
  const [items, setItems] = useState<MerchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('merch')
          .select('*')
          .eq('available', true)
          .order('order');

        if (fetchError) throw fetchError;

        setItems(data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching merch:', err);
        setError('Failed to load merch data');
      } finally {
        setLoading(false);
      }
    };

    fetchMerch();
  }, []);

  return { items, loading, error };
};