-- Add complete_onboarding column to user_profiles
ALTER TABLE user_profiles 
ADD COLUMN complete_onboarding boolean DEFAULT false;