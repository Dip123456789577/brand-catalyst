import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal } from "@/components/sections";
import { contactSchema, submitInquiry, type ContactInput } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | KINETIC Atelier" },
      {
        name: "description",
        content:
          "Start a project with KINETIC Atelier. Tell us about your goals and we'll respond within one business day.",
      },
      { property: "og:title", content: "Contact | KINETIC Atelier" },
      {
        property: "og:description",
        content: "Tell us about your project — we respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const initial: ContactInput = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "Branding",
  budgetRange: "$2,000–$5,000",
  message: "",
};

const projectTypes = [
  "Branding",
  "Website",
  "Social Media",
  "SEO",
  "Performance Marketing",
  "Full Marketing Campaign",
  "Other",
] as const;
const budgetRanges = ["Under $2,000", "$2,000–$5,000", "$5,000–$10,000", "$10,000+"] as const;

function ContactPage() {
  const [values, setValues] = useState<ContactInput>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (status === "submitting") return;
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("submitting");
    try {
      await submitInquiry({ data: parsed.data });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you want to go."
        lead="Share a few details about your project and a partner — not a bot — will reply within one business day."
      />
      <section className="section">
        <div className="site-container contact-layout">
          <Reveal>
            <div>
              <span className="eyebrow">Reach us directly</span>
              <div className="contact-points">
                <div>
                  <Mail
                    size={18}
                    style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:hello@kineticatelier.com" style={{ color: "var(--ink-soft)" }}>
                      hello@kineticatelier.com
                    </a>
                  </div>
                </div>
                <div>
                  <Clock
                    size={18}
                    style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <strong>Response time</strong>
                    <br />
                    <span style={{ color: "var(--ink-soft)" }}>Within one business day</span>
                  </div>
                </div>
                <div>
                  <MapPin
                    size={18}
                    style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <strong>Studios</strong>
                    <br />
                    <span style={{ color: "var(--ink-soft)" }}>
                      New York · London · Remote everywhere
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            {status === "success" ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={32} style={{ color: "var(--primary)" }} aria-hidden />
                <h2
                  className="section-title"
                  style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", margin: "1rem 0 .5rem" }}
                >
                  Thank you — we've got it.
                </h2>
                <p style={{ color: "var(--ink-soft)" }}>
                  Your inquiry is with our team. A partner will reply from hello@kineticatelier.com
                  within one business day.
                </p>
                <Button
                  variant="outline"
                  size="pill"
                  style={{ marginTop: "1.5rem" }}
                  onClick={() => {
                    setValues(initial);
                    setStatus("idle");
                  }}
                >
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={set("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p className="field-error" id="name-error">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p className="field-error" id="email-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={values.company}
                      onChange={set("company")}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={set("phone")}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="projectType">Project type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={set("projectType")}
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="budgetRange">Budget range *</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={values.budgetRange}
                      onChange={set("budgetRange")}
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="message">About the project *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What are you building, launching, or trying to change?"
                      value={values.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p className="field-error" id="message-error">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                {status === "error" && (
                  <p className="field-error" role="alert" style={{ marginTop: "1rem" }}>
                    We couldn't send your inquiry. Please try again, or email us directly at
                    hello@kineticatelier.com.
                  </p>
                )}
                <Button
                  type="submit"
                  variant="ink"
                  size="pill"
                  disabled={status === "submitting"}
                  style={{ marginTop: "1.75rem", width: "100%" }}
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send inquiry <ArrowUpRight />
                    </>
                  )}
                </Button>
                <p
                  style={{ marginTop: "1rem", color: "var(--muted-foreground)", fontSize: ".8rem" }}
                >
                  By submitting, you agree to our{" "}
                  <a href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>
                    privacy policy
                  </a>
                  . We never share your details.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
