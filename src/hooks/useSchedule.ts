import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { ClassSession } from '../types/schedule';

export const useSchedule = () => {
  const [classes, setClasses] = useState<ClassSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('class_sessions')
          .select(`
            *,
            class:class_id(*),
            instructor:instructor_id(*)
          `)
          .gte('start_time', new Date().toISOString())
          .order('start_time');

        if (fetchError) throw fetchError;
        setClasses(data || []);
      } catch (err) {
        console.error('Error fetching classes:', err);
        setError('Failed to load schedule');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();

    // Subscribe to changes
    const channel = supabase
      .channel('class_sessions_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'class_sessions' },
        () => {
          fetchClasses();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return { classes, loading, error };
};