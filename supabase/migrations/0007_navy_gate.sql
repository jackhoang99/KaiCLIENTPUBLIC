/*
  # Add FAQ Table
  
  1. New Tables
    - `faqs`
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Add policy for public read access
*/

-- Create FAQ table
CREATE TABLE faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to FAQs"
  ON faqs
  FOR SELECT
  TO public
  USING (true);

-- Insert initial FAQ data
INSERT INTO faqs (question, answer, "order") VALUES
  (
    'How old do you have to be to attend class?',
    'We welcome guests ages 16 and older. However, anyone under 18 must have a legal guardian sign an in-studio waiver.',
    1
  ),
  (
    'Do I need prior fitness experience to join a class?',
    'No prior fitness experience is needed to join a Lagree class! Our workouts are beginner-friendly, and our instructors provide modifications to suit all fitness levels. Whether you''re new to exercise or an experienced athlete, you''ll enjoy an engaging and effective workout.',
    2
  ),
  (
    'What should I wear to a Lagree class?',
    'Wear comfortable activewear to allow for easy movement. Grip socks are required for safety and stability on the MegaPro—we offer free grip socks for Silver and Platinum members, and they''re also available for purchase if you don''t have a pair or forget yours.',
    3
  ),
  (
    'What can I expect during my first class?',
    'For your first Lagree class, arrive 10-15 minutes early to meet your instructor, who will walk you through the class, how to operate the MegaPro, and what to expect during class. Get ready for a low-impact workout that focuses on slow, controlled movements to enhance your muscle control and core strength.',
    4
  ),
  (
    'How is Lagree different from other workouts?',
    'Lagree is unique because it combines elements of strength training, cardio, and flexibility into one high-intensity workout, all while using the Megaformer. Unlike traditional Pilates, which focuses on slower movements, Lagree emphasizes continuous movement and muscle engagement, leading to a more challenging and dynamic experience.',
    5
  ),
  (
    'Are there modifications for injuries or limitations?',
    'At our Lagree studio, our instructors are trained to provide modifications for various injuries and limitations. Before class, feel free to discuss any concerns with your instructor, and they will help ensure you can participate safely and effectively. Your health and safety is our priority!',
    6
  );