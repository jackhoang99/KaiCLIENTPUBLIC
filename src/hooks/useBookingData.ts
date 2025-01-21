import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Package } from '../types/booking';

interface UseBookingDataReturn {
  firstTimerBundles: Package[];
  memberships: Package[];
  alaCartePackages: Package[];
  loading: boolean;
  error: string | null;
}

export const useBookingData = (): UseBookingDataReturn => {
  const [firstTimerBundles, setFirstTimerBundles] = useState<Package[]>([]);
  const [memberships, setMemberships] = useState<Package[]>([]);
  const [alaCartePackages, setAlaCartePackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: firstTimerData, error: firstTimerError },
          { data: membershipData, error: membershipError },
          { data: alaCarteData, error: alaCarteError }
        ] = await Promise.all([
          supabase.from('first_timer_bundles').select('*').order('order', { ascending: true }),
          supabase.from('memberships').select('*').order('order', { ascending: true }),
          supabase.from('ala_carte_packages').select('*').order('order', { ascending: true })
        ]);

        if (firstTimerError) throw firstTimerError;
        if (membershipError) throw membershipError;
        if (alaCarteError) throw alaCarteError;

        setFirstTimerBundles(firstTimerData?.map(item => ({
          ...item,
          id: item.id,
          type: 'first-timer',
          stripeLink: item.stripe_link
        })) || []);

        setMemberships(membershipData?.map(item => ({
          ...item,
          id: item.id,
          type: 'membership',
          stripeLink: item.stripe_link
        })) || []);

        setAlaCartePackages(alaCarteData?.map(item => ({
          ...item,
          id: item.id,
          type: 'class',
          stripeLink: item.stripe_link
        })) || []);

        setError(null);
      } catch (err) {
        console.error('Error fetching booking data:', err);
        setError('Failed to load booking packages');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    firstTimerBundles,
    memberships,
    alaCartePackages,
    loading,
    error
  };
};