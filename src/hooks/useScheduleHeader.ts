import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface ScheduleHeader {
  id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const useScheduleHeader = () => {
  const [image, setImage] = useState<ScheduleHeader | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaderImage = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('schedule_header')
          .select('*')
          .limit(1)
          .maybeSingle();

        if (fetchError) throw fetchError;
        setImage(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching schedule header image:', err);
        setError('Failed to load header image');
      } finally {
        setLoading(false);
      }
    };

    fetchHeaderImage();

    // Subscribe to changes
    const channel = supabase
      .channel('schedule_header_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'schedule_header' },
        () => {
          fetchHeaderImage();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return { image, loading, error };
};