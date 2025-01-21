import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51QZO1GKrHAHZud6z24OoxXAYZvcPN9lmFMupcoIQJH9PUzPaaTGi0bbhVbnfr1wVL0y9OdRavWeoXyn0fIAq3nnj00FSIainN9';

if (!STRIPE_PUBLISHABLE_KEY) {
  throw new Error('Missing Stripe publishable key');
}

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);