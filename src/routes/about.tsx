import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FinalCta,
  PageHero,
  ResultsBand,
  Reveal,
  SectionHead,
  Testimonials,
} from "@/components/sections";
import { assets } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Strategy with imagination. Creativity with purpose. | KINETIC Atelier" },
      {
        name: "description",
        content:
          "KINETIC Atelier is an independent strategy, creative, and performance agency building brands that move markets and compound enterprise value.",
      },
      {
        property: "og:title",
        content: "About KINETIC Atelier | Strategy with imagination. Creativity with purpose.",
      },
      {
        property: "og:description",
        content:
          "Our story, mission, philosophy, and approach: why ambitious brands partner with KINETIC Atelier.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Target,
    number: "01",
    title: "Strategy with Imagination",
    lead: "Rigorous commercial logic married with radical creative intuition.",
    copy: "We reject the false dichotomy between analytical precision and artistic bravery. The strongest commercial ideas are born when mathematical attribution meets emotional resonance.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Senior Hands on Every Brief",
    lead: "No pitch teams that vanish. No juniors practicing on your budget.",
    copy: "The strategists, creative directors, and media specialists who lead our first briefing session are the exact individuals designing your assets, writing your copy, and tuning your campaigns.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Commercially Accountable",
    lead: "Aesthetic brilliance is our baseline; business velocity is our metric.",
    copy: "Beautiful design that fails to generate market share is mere art. We define success in commercial units — CAC reduction, pipeline velocity, direct revenue lift, and sustained equity.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Built for Compounding Returns",
    lead: "Creating enduring brand moats, not fleeting viral stunts.",
    copy: "We construct design systems, content engines, and acquisition funnels engineered to grow more efficient over time, establishing an unfair competitive advantage for years to come.",
  },
];

const whyChooseUs = [
  {
    title: "Unified Brand + Performance",
    desc: "Most agencies build pretty websites OR run performance ads. We unify brand equity and direct-response math into one cohesive engine.",
  },
  {
    title: "Zero Bureaucracy, Pure Pace",
    desc: "We operate as an agile SWAT team. Complex multi-channel campaigns that take traditional holding companies 9 months are shipped in 6 to 8 weeks.",
  },
  {
    title: "Direct Access to Principals",
    desc: "You have direct Slack and phone access to our founders and practice leads. Decisive feedback loops replace layers of account managers.",
  },
  {
    title: "Radical Transparency",
    desc: "Real-time client telemetry dashboards. You see every media dollar, every creative split-test, and every attribution signal as it happens.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Principles"
        title="Strategy with imagination. Creativity with purpose."
        lead="We combine market research, editorial craft, and engineering precision to build brands that capture imagination and command market leadership."
      />

      {/* Agency Story */}
      <section className="section">
        <div className="site-container">
          <div className="story-grid">
            <Reveal>
              <span className="eyebrow">The Agency Story</span>
              <p className="story-quote" style={{ marginTop: "1.25rem" }}>
                We built the agency we wished we could hire when we were on the brand side.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="story-copy">
                <p>
                  KINETIC Atelier began with a stark observation: the marketing agency model was
                  broken. Large holding companies had become bloated bureaucracies where senior
                  talent pitched and junior staff executed. Meanwhile, boutique studios offered
                  stunning aesthetics without an understanding of commercial funnels or unit
                  economics.
                </p>
                <p>
                  Founded in New York and now operating across London and global remote hubs,
                  KINETIC Atelier was intentionally designed as a senior-only collective. We
                  deliberately limit our active roster to a curated handful of ambitious clients
                  each quarter.
                </p>
                <p>
                  This disciplined focus ensures every partner receives our undivided creative
                  horsepower, decades of hard-won pattern recognition, and obsessive attention to
                  detail.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="media-frame" style={{ marginTop: "4.5rem" }}>
              <img
                src={assets.aboutStudio}
                alt="The KINETIC Atelier strategy and design team collaborating in the studio"
                loading="lazy"
                width={1920}
                height={1280}
              />
              <div className="media-frame-caption">
                <span>KINETIC Atelier Flagship Studio · Strategic Brand Working Session</span>
                <span>Established 2020</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="Mission & Philosophy"
            title="Four core tenets that govern everything we create."
            lead="Our operating code is unapologetically demanding. These non-negotiable principles guide every strategic recommendation and creative asset we deliver."
          />
          <div className="principles-grid">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  className="principle-card"
                  delay={(idx % 4) as 0 | 1 | 2 | 3}
                >
                  <div className="principle-header">
                    <span className="principle-num">{item.number}</span>
                    <div className="principle-icon-wrap" aria-hidden>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="principle-title">{item.title}</h3>
                  <strong className="principle-lead">{item.lead}</strong>
                  <p className="principle-copy">{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach & Methodology */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <div className="approach-block">
            <div className="approach-left">
              <Reveal>
                <span className="eyebrow">Our Strategic Approach</span>
                <h2 className="section-title" style={{ marginTop: "1rem" }}>
                  How we turn commercial tension into cultural momentum.
                </h2>
                <p className="lead" style={{ marginTop: "1.5rem" }}>
                  Every category has an accepted convention. Ambitious growth doesn't come from
                  incremental improvements to that convention — it comes from overturning it.
                </p>
                <div className="button-row" style={{ marginTop: "2rem" }}>
                  <Button asChild variant="ink" size="pill">
                    <Link to="/contact">
                      Schedule a Strategic Diagnostic <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="approach-right">
              <div className="why-grid">
                {whyChooseUs.map((w) => (
                  <Reveal key={w.title} className="why-card">
                    <div className="why-header">
                      <CheckCircle2 size={18} className="why-check" />
                      <h4>{w.title}</h4>
                    </div>
                    <p>{w.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Results */}
      <ResultsBand />

      {/* Testimonials */}
      <section className="section">
        <div className="site-container">
          <SectionHead
            eyebrow="Client Endorsements"
            title="What partners say about working alongside us."
            lead="Direct feedback from founders and executive leaders who have scaled category-defining brands with our guidance."
          />
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </>
  );
}
