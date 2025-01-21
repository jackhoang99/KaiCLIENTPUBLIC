/*
  # Add About Table
  
  1. New Tables
    - `about`
      - `id` (uuid, primary key)
      - `image_url` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `about` table
    - Add policy for public read access
*/

-- Create about table
CREATE TABLE about (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE about ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to about images"
  ON about
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO about (image_url, "order") VALUES
  ('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000', 1),
  ('https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1000', 2),
  ('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000', 3),
  ('https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&q=80&w=1000', 4);