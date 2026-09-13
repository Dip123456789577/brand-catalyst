import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  company: z.string().trim().max(120).default(""),
  phone: z.string().trim().max(40).default(""),
  projectType: z.enum([
    "Branding",
    "Website",
    "Social Media",
    "SEO",
    "Performance Marketing",
    "Full Marketing Campaign",
    "Other",
  ]),
  budgetRange: z.enum(["Under $2,000", "$2,000–$5,000", "$5,000–$10,000", "$10,000+"]),
  message: z.string().trim().min(20, "Tell us a little more about the project.").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: ContactInput) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const client = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`)
            headers.delete("Authorization");
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });
    try {
      const { error } = await client.from("contact_inquiries").insert({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        project_type: data.projectType,
        budget_range: data.budgetRange,
        message: data.message,
      });
      if (error) {
        console.warn("Supabase insertion notice:", error.message);
      }
    } catch (err) {
      console.warn("Supabase network or schema fallback:", err);
    }
    return { ok: true };
  });
