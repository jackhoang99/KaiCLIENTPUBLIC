-- Create merch categories enum
CREATE TYPE merch_category AS ENUM ('apparel', 'accessories', 'equipment');

-- Create merch table
CREATE TABLE merch (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  category merch_category NOT NULL,
  image_url text NOT NULL,
  available boolean DEFAULT true,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE merch ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to merch"
  ON merch
  FOR SELECT
  TO public
  USING (true);

-- Insert initial merch data
INSERT INTO merch (name, description, price, category, image_url, "order") VALUES
  (
    'Studio Grip Gloves',
    'Premium workout gloves with enhanced grip for equipment stability.',
    28,
    'accessories',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600&h=600',
    1
  ),
  (
    'Performance Tank',
    'Breathable, moisture-wicking fabric for intense workouts.',
    48,
    'apparel',
    'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&q=80&w=600&h=600',
    2
  ),
  (
    'High-Rise Leggings',
    'Sculpting compression fabric with four-way stretch.',
    88,
    'apparel',
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=600&h=600',
    3
  ),
  (
    'Stainless Steel Water Bottle',
    'Double-walled insulation keeps drinks cold for 24 hours.',
    35,
    'accessories',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600&h=600',
    4
  ),
  (
    'Premium Yoga Mat',
    'Extra-thick, non-slip exercise mat for optimal comfort.',
    68,
    'equipment',
    'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=600&h=600',
    5
  );