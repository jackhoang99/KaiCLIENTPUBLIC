-- First drop auth.users related items
DROP TRIGGER IF EXISTS trigger_otp ON auth.users;
DROP FUNCTION IF EXISTS trigger_otp();
DROP FUNCTION IF EXISTS cleanup_expired_otps();

-- Drop the temporary OTP table
DROP TABLE IF EXISTS public.tmp_otp_trigger;

-- Drop verification triggers first
DROP TRIGGER IF EXISTS set_verification_code_expiry ON user_profiles;
DROP FUNCTION IF EXISTS handle_verification_code_expiry();

-- Now safe to remove verification columns
ALTER TABLE user_profiles 
  DROP COLUMN IF EXISTS phone_verified,
  DROP COLUMN IF EXISTS verification_code,
  DROP COLUMN IF EXISTS verification_code_expires_at;