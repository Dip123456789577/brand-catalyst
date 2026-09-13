import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, ResultsBand, Reveal, SectionHead, Testimonials } from "@/components/sections";
import { assets } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | KINETIC Atelier" },
      { name: "description", content: "KINETIC Atelier is a deliberately small, senior team of strategists, designers, and media specialists building brands for the long term." },
      { property: "og:title", content: "About | KINETIC Atelier" },
      { property: "og:description", content: "A deliberately small, senior team building brands for the long term." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Senior, always", copy: "The people in the first meeting are the people who do the work. No handoffs, no juniors learning on your budget." },
  { title: "Evidence over opinion", copy: "Every recommendation traces back to research, data, or a test. Taste guides the work; evidence decides it." },
  { title: "Commercially obsessed", copy: "Beautiful work that doesn't move the business is a hobby. We define success in numbers before we open a design file." },
  { title: "Built to last", copy: "We design systems, not moments — identities, content engines, and funnels that keep working long after launch week." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A senior studio, built on purpose."
        lead="KINETIC Atelier exists because the industry's best strategy and its best craft almost never sit at the same table. Here, they're the same people."
      />
      <section className="section">
        <div className="site-container">
          <div className="story-grid">
            <Reveal>
              <p className="story-quote">We'd rather be <em>small and excellent</em> than big and average.</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="story-copy">
                <p>Founded in New York and grown to London, KINETIC works with a short list of ambitious clients at any one time. That constraint is the point: it keeps every engagement led by partners and staffed by people who have done it before.</p>
                <p>Our teams have launched category-defining products, relaunched century-old houses, and scaled direct-to-consumer brands past their first hundred million. We bring that pattern recognition to every brief — and the humility to test it.</p>
              </div>
            </Reveal>
          </div>
          <Reveal><div className="media-frame"><img src={assets.aboutStudio} alt="Inside the KINETIC Atelier studio during a working session" loading="lazy" width={1920} height={1280} /></div></Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead eyebrow="What we believe" title="Four rules we don't bend." />
          <div className="article-grid" style={{ gridTemplateColumns: undefined }}>
            <div className="article-grid" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {values.map((v, i) => (
                <Reveal key={v.title} className="article-card" delay={(i % 3) as 0 | 1 | 2}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ResultsBand />
      <section className="section">
        <div className="site-container">
          <SectionHead eyebrow="In their words" title="What it's like to work with us." />
          <Reveal><Testimonials /></Reveal>
          <Reveal><div className="button-row" style={{ justifyContent: "center", marginTop: "3rem" }}>
            <Button asChild variant="ink" size="pill"><Link to="/contact">Work with us <ArrowUpRight /></Link></Button>
          </div></Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
