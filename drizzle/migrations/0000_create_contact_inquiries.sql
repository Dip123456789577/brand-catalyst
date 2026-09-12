CREATE TABLE public.contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 120),
  phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 40),
  project_type text NOT NULL CHECK (project_type IN ('Branding','Website','Social Media','SEO','Performance Marketing','Full Marketing Campaign','Other')),
  budget_range text NOT NULL CHECK (budget_range IN ('Under $2,000','$2,000–$5,000','$5,000–$10,000','$10,000+')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 20 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_inquiries TO anon, authenticated;
GRANT ALL ON public.contact_inquiries TO service_role;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a project inquiry"
ON public.contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
CREATE INDEX contact_inquiries_created_at_idx ON public.contact_inquiries (created_at DESC);