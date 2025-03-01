import { useState } from 'react';
import type { Package } from '../types/booking';

interface UseStripeReturn {
  loading: boolean;
  error: string | null;
  processPayment: (pkg: Package) => Promise<void>;
}

export const useStripe = (): UseStripeReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (pkg: Package) => {
    setLoading(true);
    setError(null);

    try {
      // Redirect to the package's Stripe payment link
      window.location.href = pkg.stripeLink;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      console.error('Payment error:', { message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    processPayment,
  };
};