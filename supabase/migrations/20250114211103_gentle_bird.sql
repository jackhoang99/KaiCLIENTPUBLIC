-- Add phone verification columns
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS phone_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS verification_code text,
ADD COLUMN IF NOT EXISTS verification_code_expires_at timestamptz;

-- Create function to handle verification code expiry
CREATE OR REPLACE FUNCTION handle_verification_code_expiry()
RETURNS trigger AS $$
BEGIN
  IF NEW.verification_code IS DISTINCT FROM OLD.verification_code THEN
    NEW.verification_code_expires_at := NOW() + interval '5 minutes';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for verification code expiry
DROP TRIGGER IF EXISTS set_verification_code_expiry ON user_profiles;
CREATE TRIGGER set_verification_code_expiry
  BEFORE UPDATE OF verification_code ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_verification_code_expiry();