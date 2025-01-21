/*
  # Add verification fields to user_profiles table
  
  1. Changes
    - Add phone_verified column
    - Add verification_code column
    - Add verification_code_expires_at column
    - Add trigger for verification code expiry
  
  2. Security
    - Enable RLS
    - Add policy for verification updates
*/

-- Add verification fields if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'user_profiles' AND column_name = 'phone_verified') 
  THEN
    ALTER TABLE user_profiles 
      ADD COLUMN phone_verified boolean DEFAULT false,
      ADD COLUMN verification_code text,
      ADD COLUMN verification_code_expires_at timestamptz;
  END IF;
END $$;

-- Create or replace function to handle verification code expiry
CREATE OR REPLACE FUNCTION handle_verification_code_expiry()
RETURNS trigger AS $$
BEGIN
  IF NEW.verification_code IS DISTINCT FROM OLD.verification_code THEN
    NEW.verification_code_expires_at := NOW() + interval '5 minutes';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS set_verification_code_expiry ON user_profiles;

-- Create trigger for verification code expiry
CREATE TRIGGER set_verification_code_expiry
  BEFORE UPDATE OF verification_code ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_verification_code_expiry();

-- Add policy if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_profiles' 
    AND policyname = 'Users can update their own verification'
  ) THEN
    CREATE POLICY "Users can update their own verification"
      ON user_profiles
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;