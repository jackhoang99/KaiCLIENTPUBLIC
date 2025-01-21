-- Add email column to user_profiles if it doesn't exist
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS email text;

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);

-- Update existing profiles with email from auth.users
UPDATE user_profiles
SET email = (
  SELECT email 
  FROM auth.users 
  WHERE users.id = user_profiles.id
)
WHERE user_profiles.email IS NULL;