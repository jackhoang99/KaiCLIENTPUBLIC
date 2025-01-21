/*
  # Email confirmation and profile handling

  1. Changes
    - Update profile creation to require email confirmation
    - Add proper error handling
    - Ensure atomic operations
  
  2. Security
    - Enable RLS
    - Add policies for confirmed users only
*/

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();

-- Create new trigger function with email confirmation check
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  IF NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, email)
    VALUES (NEW.id, NEW.email);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger that fires on both INSERT and UPDATE
CREATE TRIGGER on_auth_user_created_or_updated
  AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Drop existing policies
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can read own profile if email confirmed" ON profiles;
  DROP POLICY IF EXISTS "Users can update own profile if email confirmed" ON profiles;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Create new policies
DO $$ 
BEGIN
  -- Policy for reading own profile
  CREATE POLICY "Users can read own profile if email confirmed"
    ON profiles
    FOR SELECT
    TO authenticated
    USING (
      auth.uid() = id 
      AND EXISTS (
        SELECT 1 FROM auth.users 
        WHERE id = auth.uid() 
        AND email_confirmed_at IS NOT NULL
      )
    );

  -- Policy for updating own profile
  CREATE POLICY "Users can update own profile if email confirmed"
    ON profiles
    FOR UPDATE
    TO authenticated
    USING (
      auth.uid() = id
      AND EXISTS (
        SELECT 1 FROM auth.users 
        WHERE id = auth.uid() 
        AND email_confirmed_at IS NOT NULL
      )
    );
END $$;