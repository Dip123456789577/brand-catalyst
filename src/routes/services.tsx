import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Clock, Layers, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FinalCta,
  PageHero,
  ProcessInteractive,
  Reveal,
  SectionHead,
  ServicesAccordion,
} from "@/components/sections";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Capabilities | KINETIC Atelier" },
      {
        name: "description",
        content:
          "Brand strategy, creative direction, performance marketing, social media systems, SEO, and web development — one senior team with zero handoffs.",
      },
      { property: "og:title", content: "Services & Capabilities | KINETIC Atelier" },
      {
        property: "og:description",
        content:
          "Seven integrated disciplines practiced by one senior team. Discover our capabilities and engagement models.",
      },
    ],
  }),
  component: ServicesPage,
});

const outcomes = [
  {
    value: "1 Team",
    label: "From strategy workshop to code deployment — zero handoffs or translation loss",
  },
  {
    value: "6–12 Wks",
    label: "Average timeline from engagement kickoff to live market deployment",
  },
  { value: "100%", label: "Engagements led directly by founding partners and practice directors" },
  { value: "3.8X", label: "Average sustained ROAS delivered across our active client roster" },
];

const engagementModels = [
  {
    num: "01",
    title: "Strategic Brand Sprint",
    duration: "4 to 6 Weeks",
    lead: "Rapid market diagnostic, core positioning platform, and executive messaging framework.",
    fit: "Ideal for growth-stage companies preparing for Series A/B fundraising or a major category pivot.",
    deliverables: [
      "Market whitespace audit",
      "Brand positioning blueprint",
      "Verbal identity & messaging guide",
      "Executive pitch deck",
    ],
  },
  {
    num: "02",
    title: "Full Brand & Flagship Flagship",
    duration: "8 to 12 Weeks",
    lead: "Comprehensive visual identity, digital flagship architecture, design systems, and launch campaign.",
    fit: "Ideal for established companies undergoing enterprise reinvention or launching new flagship verticals.",
    deliverables: [
      "Complete visual identity & guidelines",
      "Figma design system & prototypes",
      "High-performance web flagship",
      "Launch media & PR choreography",
    ],
  },
  {
    num: "03",
    title: "Embedded Growth & Creative Engine",
    duration: "Ongoing Retainer",
    lead: "Dedicated multidisciplinary team running continuous creative testing, media allocation, and CRO.",
    fit: "Ideal for ambitious brands requiring high-velocity omni-channel scale without the overhead of hiring in-house.",
    deliverables: [
      "Weekly creative sprint production",
      "Omni-channel paid media optimization",
      "Landing page conversion optimization",
      "Custom executive attribution dashboard",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities & Disciplines"
        title="Everything a category leader needs, under one roof."
        lead="We deliberately maintain seven core disciplines led by the same senior practitioners. The strategy you approve is the exact work that ships to market."
      />

      {/* Interactive Capabilities Showcase */}
      <section className="section">
        <div className="site-container">
          <SectionHead
            eyebrow="Core Disciplines"
            title="Explore our capabilities."
            lead="Hover or click any discipline to review core positioning, strategic scope, and concrete deliverables."
          />
          <Reveal>
            <ServicesAccordion />
          </Reveal>
        </div>
      </section>

      {/* Operating Velocity Metrics */}
      <section className="section results">
        <div className="site-container">
          <SectionHead
            eyebrow="Operating Cadence"
            title="Engineered for pace and commercial precision."
            lead="We strip out agency bureaucracy, client-servicing bloat, and endless meetings, focusing 100% of our energy on market velocity."
          />
          <div className="stats">
            {outcomes.map((o) => (
              <Reveal key={o.label} className="stat-card">
                <div className="stat-number-wrap">
                  <strong style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)" }}>{o.value}</strong>
                </div>
                <p className="stat-sub" style={{ marginTop: "1rem" }}>
                  {o.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="button-row center-aligned" style={{ marginTop: "4rem" }}>
              <Button
                asChild
                variant="ink"
                size="pill"
                style={{ background: "#fff", color: "#000" }}
              >
                <Link to="/contact">
                  Initiate a Project Brief <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section">
        <div className="site-container">
          <SectionHead
            eyebrow="Collaboration Structures"
            title="How we partner with ambitious teams."
            lead="Transparent engagement frameworks tailored to your company's growth stage and strategic urgency."
          />
          <div
            className="principles-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
          >
            {engagementModels.map((model, idx) => (
              <Reveal key={model.title} className="principle-card" delay={(idx % 3) as 0 | 1 | 2}>
                <div className="principle-header">
                  <span className="principle-num">{model.num}</span>
                  <span
                    className="meta-pill"
                    style={{ display: "inline-flex", alignItems: "center", gap: ".3rem" }}
                  >
                    <Clock size={12} /> {model.duration}
                  </span>
                </div>
                <h3 className="principle-title">{model.title}</h3>
                <strong className="principle-lead">{model.lead}</strong>
                <p className="principle-copy" style={{ marginBottom: "1.25rem" }}>
                  {model.fit}
                </p>
                <div
                  className="process-deliverables-box"
                  style={{ padding: "1rem", marginTop: "auto", marginBottom: "1.5rem" }}
                >
                  <span className="deliverables-heading" style={{ fontSize: ".65rem" }}>
                    Included Deliverables
                  </span>
                  <ul className="process-deliverables-list" style={{ gap: ".5rem" }}>
                    {model.deliverables.map((d) => (
                      <li key={d} style={{ fontSize: ".85rem" }}>
                        <CheckCircle2 size={13} className="check-icon" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Link to="/contact">
                    Inquire for {model.title} <ArrowUpRight size={14} />
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="The Method"
            title="How the work gets made."
            lead="The same five structured phases power every engagement, whether it is a targeted campaign or an end-to-end brand relaunch."
          />
          <Reveal>
            <ProcessInteractive />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
