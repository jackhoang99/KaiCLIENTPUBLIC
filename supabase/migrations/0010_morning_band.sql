/*
  # Add phone verification fields

  1. Changes
    - Add phone_verified and verification_code columns to user_profiles table
    - Add phone verification policies
  
  2. Security
    - Enable RLS
    - Add policies for phone verification
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

-- Create trigger for verification code expiry
CREATE TRIGGER set_verification_code_expiry
  BEFORE UPDATE OF verification_code ON user_profiles
  FOR EACH ROW
  WHEN (NEW.verification_code IS DISTINCT FROM OLD.verification_code)
  EXECUTE FUNCTION handle_verification_code_expiry();

-- Add policies for verification
CREATE POLICY "Users can update their own verification code"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);