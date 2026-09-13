import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | KINETIC Atelier" },
      {
        name: "description",
        content: "How KINETIC Atelier collects, uses, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy | KINETIC Atelier" },
      {
        property: "og:description",
        content: "How KINETIC Atelier collects, uses, and protects your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy."
        lead="The short version: we collect only what we need to respond to you, we never sell it, and you can ask us to delete it at any time."
      />
      <section className="section">
        <div className="site-container legal">
          <h2>What we collect</h2>
          <p>
            When you submit an inquiry, we store the details you provide — name, email, company,
            phone, project type, budget range, and message — so we can respond to your request.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information solely to reply to your inquiry and, if you become a client, to
            manage our work together. We do not sell, rent, or share your personal information with
            third parties for their marketing.
          </p>
          <h2>How long we keep it</h2>
          <p>
            Inquiry details are retained for up to 24 months so we can reference earlier
            conversations, then deleted. Client records are kept for the duration of the engagement
            plus any period required by law.
          </p>
          <h2>Your rights</h2>
          <p>
            You may request a copy, correction, or deletion of your personal information at any time
            by emailing hello@kineticatelier.com. We respond to all requests within 30 days.
          </p>
          <h2>Security</h2>
          <p>
            Your data is stored in encrypted, access-controlled systems. Access is limited to team
            members who need it to respond to you.
          </p>
          <h2>Changes</h2>
          <p>
            If this policy changes materially, we will note the update here. Last updated September
            2026.
          </p>
        </div>
      </section>
    </>
  );
}
