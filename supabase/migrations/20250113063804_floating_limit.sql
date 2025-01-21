/*
  # Add order columns to pricing tables
  
  1. Changes
    - Add "order" column to first_timer_bundles table
    - Add "order" column to memberships table 
    - Add "order" column to ala_carte_packages table
    - Update existing records with order values
*/

-- Add order columns
ALTER TABLE first_timer_bundles 
ADD COLUMN IF NOT EXISTS "order" integer DEFAULT 0;

ALTER TABLE memberships
ADD COLUMN IF NOT EXISTS "order" integer DEFAULT 0;

ALTER TABLE ala_carte_packages 
ADD COLUMN IF NOT EXISTS "order" integer DEFAULT 0;

-- Update first timer bundles order
UPDATE first_timer_bundles
SET "order" = CASE title
  WHEN 'SINGLE CLASS' THEN 1
  WHEN 'UNLIMITED 1 WEEK' THEN 2
  WHEN 'UNLIMITED 1 MONTH' THEN 3
  ELSE "order"
END;

-- Update memberships order
UPDATE memberships
SET "order" = CASE title
  WHEN 'SILVER' THEN 1
  WHEN 'FOUNDERS' THEN 2
  WHEN 'PLATINUM' THEN 3
  ELSE "order"
END;

-- Update ala carte packages order
UPDATE ala_carte_packages
SET "order" = CASE title
  WHEN '1 CLASS' THEN 1
  WHEN '5 CLASSES' THEN 2
  WHEN '10 CLASSES' THEN 3
  WHEN '20 CLASSES' THEN 4
  ELSE "order"
END;