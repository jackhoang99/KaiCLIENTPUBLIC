import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { AboutImage } from '../types/about';

export const useAbout = () => {
  const [images, setImages] = useState<AboutImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching about images...'); // Debug log
        const { data, error: fetchError } = await supabase
          .from('about')
          .select('*')
          .order('order');

        console.log('Supabase response:', { data, error: fetchError }); // Debug log

        if (fetchError) throw fetchError;

        setImages(data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching about images:', err);
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // Subscribe to changes
    const channel = supabase.channel('about_changes');
    
    channel
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'about' }, 
        (payload) => {
          console.log('Received change:', payload); // Debug log
          fetchImages();
        }
      )
      .subscribe((status) => {
        console.log('Subscription status:', status); // Debug log
      });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return { images, loading, error };
};