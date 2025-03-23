import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface HeroImage {
  id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const useHero = () => {
  const [image, setImage] = useState<HeroImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('hero')
          .select('*')
          .limit(1)
          .maybeSingle();

        if (fetchError) throw fetchError;
        setImage(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching hero image:', err);
        setError('Failed to load hero image');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImage();

    // Subscribe to changes
    const channel = supabase
      .channel('hero_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'hero' },
        () => {
          fetchHeroImage();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return { image, loading, error };
};