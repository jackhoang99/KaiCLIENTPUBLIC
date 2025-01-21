/*
  # Update merch data for consistency

  1. Changes
    - Add "Available in store" flag to all items
    - Add more merch items
    - Ensure consistent pricing display
    - Add stock status
*/

-- Add stock_status column
ALTER TABLE merch ADD COLUMN IF NOT EXISTS stock_status text NOT NULL DEFAULT 'Available in store';

-- Update existing items
UPDATE merch SET stock_status = 'Available in store';

-- Add more merch items
INSERT INTO merch (name, description, price, category, image_url, stock_status, "order") VALUES
  (
    'Sports Bra',
    'High-impact support with moisture-wicking technology.',
    54,
    'apparel',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600&h=600',
    'Available in store',
    6
  ),
  (
    'Microfiber Towel Set',
    'Quick-dry towels with antimicrobial treatment, set of 2.',
    32,
    'accessories',
    'https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?auto=format&fit=crop&q=80&w=600&h=600',
    'Available in store',
    7
  ),
  (
    'Resistance Band Set',
    'Set of 5 bands with varying resistance levels.',
    45,
    'equipment',
    'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?auto=format&fit=crop&q=80&w=600&h=600',
    'Available in store',
    8
  ),
  (
    'Quarter-Zip Pullover',
    'Lightweight technical pullover for pre/post workout.',
    85,
    'apparel',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600&h=600',
    'Available in store',
    9
  ),
  (
    'Recovery Massage Ball',
    'Deep tissue massage ball for muscle recovery.',
    25,
    'equipment',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600&h=600',
    'Available in store',
    10
  );