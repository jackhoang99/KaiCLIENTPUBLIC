-- Add unique constraint to email column
ALTER TABLE user_profiles
ADD CONSTRAINT user_profiles_email_unique UNIQUE (email);

-- Create function to check email uniqueness
CREATE OR REPLACE FUNCTION check_email_uniqueness()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE email = NEW.email 
    AND id != NEW.id
  ) THEN
    RAISE EXCEPTION 'Email already registered';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to enforce email uniqueness
CREATE TRIGGER enforce_email_uniqueness
  BEFORE INSERT OR UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION check_email_uniqueness();