/*
  # Create Booking Tables

  1. New Tables
    - `first_timer_bundles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `price` (numeric)
      - `description` (text)
      - `features` (text[])
      - `stripe_link` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `memberships`
      - `id` (uuid, primary key)
      - `title` (text)
      - `price` (numeric)
      - `description` (text)
      - `features` (text[])
      - `perks` (text[])
      - `stripe_link` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `ala_carte_packages`
      - `id` (uuid, primary key)
      - `title` (text)
      - `price` (numeric)
      - `description` (text)
      - `features` (text[])
      - `stripe_link` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
*/

-- First Timer Bundles Table
CREATE TABLE first_timer_bundles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL,
  stripe_link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Memberships Table
CREATE TABLE memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL,
  perks text[],
  stripe_link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Ala Carte Packages Table
CREATE TABLE ala_carte_packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price numeric NOT NULL,
  description text NOT NULL,
  features text[] NOT NULL,
  stripe_link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE first_timer_bundles ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE ala_carte_packages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to first timer bundles"
  ON first_timer_bundles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to memberships"
  ON memberships
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to ala carte packages"
  ON ala_carte_packages
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO first_timer_bundles (title, price, description, features, stripe_link) VALUES
  ('SINGLE CLASS', 35, 'Try your first class', 
   ARRAY['Buy 1 $35 class, get one FREE for next time', 'Valid for one month', 'One month starts day of purchase'],
   'https://buy.stripe.com/test_4gw16I3ytgpG40w3cd'),
  ('UNLIMITED 1 WEEK', 150, 'Unlimited access for a week',
   ARRAY['Valid for 1 month upon attending first class', 'Unlimited classes for 7 days', 'Access to all class times'],
   'https://buy.stripe.com/test_8wM16I7KJ0yI40w5km'),
  ('UNLIMITED 1 MONTH', 500, 'Full month of unlimited classes',
   ARRAY['Valid for 1 month upon attending first class', 'Unlimited classes for 30 days', 'Access to all class times'],
   'https://buy.stripe.com/test_5kA7vY3yt8bm40w9AB');

INSERT INTO memberships (title, price, description, features, perks, stripe_link) VALUES
  ('SILVER', 205, 'Monthly Membership',
   ARRAY['8 Classes per month', '3 Month commitment', 'No roll over to next month', 'Early cancellation fee $205'],
   ARRAY['FREE grip socks & 1 free waiver for late cancelation/no show'],
   'https://buy.stripe.com/test_9AQ02A3yt0yI40w5kl'),
  ('PLATINUM', 350, 'Unlimited Classes',
   ARRAY['Unlimited classes (1 per day)', '6 Month commitment', 'Early cancellation fee $350'],
   ARRAY['FREE grip socks & merch bundle', '1 guest pass per month', '1 free waiver for late cancellation/no show'],
   'https://buy.stripe.com/test_eVa02Aghdchu40weUU'),
  ('FOUNDERS', 295, 'Limited Time Offer',
   ARRAY['8 Classes per month', '6 Month commitment', 'No roll over to next month', 'Early cancellation fee $205'],
   ARRAY['FREE grip socks & 1 free waiver for late cancelation/no show'],
   'https://buy.stripe.com/test_3cs16I0ml4P2gNm9AB');

INSERT INTO ala_carte_packages (title, price, description, features, stripe_link) VALUES
  ('1 CLASS', 35, 'Perfect for trying out our studio',
   ARRAY['Late Cancellation Fee: $14 (less than 12 hours before class)', 'No Show Fee: $20'],
   'https://buy.stripe.com/test_eVa02Aghdchu40weUU'),
  ('5 CLASSES', 170, 'Great for occasional visits',
   ARRAY['Late Cancellation Fee: $14 (less than 12 hours before class)', 'No Show Fee: $20', '1 Month Expiration'],
   'https://buy.stripe.com/test_14kaHec0X4P2bsY8wx'),
  ('10 CLASSES', 300, 'Our most popular package',
   ARRAY['Late Cancellation Fee: $14 (less than 12 hours before class)', 'No Show Fee: $20', '3 Month Expiration'],
   'https://buy.stripe.com/test_28o16I3yt8bm40w7st'),
  ('20 CLASSES', 560, 'Best value for regular clients',
   ARRAY['Late Cancellation Fee: $14 (less than 12 hours before class)', 'No Show Fee: $20', '6 Month Expiration'],
   'https://buy.stripe.com/test_5kA7vY3yt4P2bsY4gh');