-- Add verification columns to user_profiles
ALTER TABLE user_profiles
  ADD COLUMN phone_verified boolean DEFAULT false,
  ADD COLUMN verification_code text,
  ADD COLUMN verification_code_expires_at timestamptz;

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
CREATE TRIGGER set_verification_code_expiry
  BEFORE UPDATE OF verification_code ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_verification_code_expiry();