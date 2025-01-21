/*
  # Add phone verification columns and policies
  
  1. Changes
    - Add phone verification columns if they don't exist
    - Add trigger for verification code expiry
    - Add policy for verification updates (with existence check)
  
  2. New Columns
    - phone_verified (boolean)
    - verification_code (text)
    - verification_code_expires_at (timestamptz)
*/

-- Add new columns to user_profiles
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS phone_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS verification_code text,
ADD COLUMN IF NOT EXISTS verification_code_expires_at timestamptz;

-- Create function to handle verification code expiry
CREATE OR REPLACE FUNCTION handle_verification_code_expiry()
RETURNS trigger AS $$
BEGIN
  NEW.verification_code_expires_at := NOW() + interval '5 minutes';
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS set_verification_code_expiry ON user_profiles;

-- Create trigger for verification code expiry
CREATE TRIGGER set_verification_code_expiry
  BEFORE UPDATE OF verification_code ON user_profiles
  FOR EACH ROW
  WHEN (NEW.verification_code IS DISTINCT FROM OLD.verification_code)
  EXECUTE FUNCTION handle_verification_code_expiry();

-- Add policy if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'user_profiles' 
    AND policyname = 'Users can update their own verification code'
  ) THEN
    CREATE POLICY "Users can update their own verification code"
      ON user_profiles
      FOR UPDATE
      TO authenticated
      USING (auth.uid() = id)
      WITH CHECK (auth.uid() = id);
  END IF;
END $$;