import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | KINETIC Atelier" },
      { name: "description", content: "The terms that govern use of the KINETIC Atelier website." },
      { property: "og:title", content: "Terms of Use | KINETIC Atelier" },
      { property: "og:description", content: "The terms that govern use of the KINETIC Atelier website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use." lead="The ground rules for using this website — kept plain and readable on purpose." />
      <section className="section">
        <div className="site-container legal">
          <h2>Use of this site</h2>
          <p>This website is provided for general information about KINETIC Atelier and our services. You may browse and share links freely. You may not scrape, copy, or republish site content for commercial use without written permission.</p>
          <h2>Intellectual property</h2>
          <p>All content on this site — text, design, imagery, and case studies — is the property of KINETIC Atelier or our clients and is protected by applicable intellectual property law. Client work is shown with permission.</p>
          <h2>No professional advice</h2>
          <p>Articles and insights are published for general information and do not constitute professional advice for your specific situation. Engagements with KINETIC Atelier are governed by individual contracts, not by this site.</p>
          <h2>Accuracy</h2>
          <p>We work to keep information accurate and current, but make no warranties about completeness. Case study results reflect specific client contexts and are not a guarantee of future outcomes.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: hello@kineticatelier.com. Last updated September 2026.</p>
        </div>
      </section>
    </>
  );
}
