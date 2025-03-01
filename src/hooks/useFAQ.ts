import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { FAQ } from '../types/faq';

export const useFAQ = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('faqs')
          .select('*')
          .order('order');

        if (fetchError) throw fetchError;

        setFaqs(data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQ data');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return { faqs, loading, error };
};