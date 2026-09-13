import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, ProcessInteractive, Reveal, SectionHead, ServicesAccordion } from "@/components/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | KINETIC Atelier" },
      { name: "description", content: "Brand strategy, creative and design, social media, performance marketing, SEO, web development, and content — one senior team from strategy through execution." },
      { property: "og:title", content: "Services | KINETIC Atelier" },
      { property: "og:description", content: "Seven disciplines, one senior team, zero handoffs between strategy and execution." },
    ],
  }),
  component: ServicesPage,
});

const outcomes = [
  { value: "1 team", label: "From first workshop to final launch — no handoffs, no translation loss" },
  { value: "6–12 wks", label: "Typical time from engagement to launched work in market" },
  { value: "100%", label: "Engagements led directly by senior practitioners, not handed down" },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a growing brand needs, under one roof."
        lead="We deliberately keep the offer focused: seven disciplines, practiced by the same senior team, so the strategy you approve is the work that ships."
      />
      <section className="section">
        <div className="site-container">
          <Reveal><ServicesAccordion /></Reveal>
        </div>
      </section>
      <section className="section results">
        <div className="site-container">
          <SectionHead eyebrow="How engagements run" title="Built for pace and precision." />
          <div className="stats">
            {outcomes.map((o) => (
              <Reveal key={o.label} className="stat"><strong style={{ fontSize: "clamp(2rem,4.5vw,4rem)" }}>{o.value}</strong><span>{o.label}</span></Reveal>
            ))}
          </div>
          <Reveal><div className="button-row" style={{ marginTop: "3.5rem" }}>
            <Button asChild variant="ink" size="pill"><Link to="/contact">Discuss your brief <ArrowUpRight /></Link></Button>
          </div></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <SectionHead
            eyebrow="The method"
            title="How the work gets made."
            lead="The same five phases power every engagement, whether it's a single campaign or a full brand relaunch."
          />
          <Reveal><ProcessInteractive /></Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
