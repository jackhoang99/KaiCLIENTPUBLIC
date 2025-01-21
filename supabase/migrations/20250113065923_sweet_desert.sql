-- Update about table data with Supabase storage URLs
DO $$ 
BEGIN
  -- Only proceed if table exists and is empty
  IF EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_name = 'about'
  ) AND NOT EXISTS (
    SELECT 1 FROM about
  ) THEN
    INSERT INTO about (image_url, "order") VALUES
      ('https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/about1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvYWJvdXQxLmpwZyIsImlhdCI6MTcwNTEyMDAwMCwiZXhwIjoxODYyODAwMDAwfQ.example', 1),
      ('https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/about2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvYWJvdXQyLmpwZyIsImlhdCI6MTcwNTEyMDAwMCwiZXhwIjoxODYyODAwMDAwfQ.example', 2),
      ('https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/about3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvYWJvdXQzLmpwZyIsImlhdCI6MTcwNTEyMDAwMCwiZXhwIjoxODYyODAwMDAwfQ.example', 3),
      ('https://toimygjblkpsemgbpwvo.supabase.co/storage/v1/object/sign/img/about4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvYWJvdXQzLmpwZyIsImlhdCI6MTcwNTEyMDAwMCwiZXhwIjoxODYyODAwMDAwfQ.example', 4);
  END IF;
END $$;