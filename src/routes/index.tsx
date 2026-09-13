import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ArticleCard, BrandMarquee, FinalCta, ProcessInteractive, ProjectCard,
  ResultsBand, Reveal, SectionHead, ServicesAccordion, Testimonials,
} from "@/components/sections";
import { articles, assets, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KINETIC Atelier | Strategy, Design & Growth Agency" },
      { name: "description", content: "KINETIC Atelier is an independent agency building brands that move markets — strategy, creative, digital products, and performance media for ambitious companies." },
      { property: "og:title", content: "KINETIC Atelier | Strategy, Design & Growth Agency" },
      { property: "og:description", content: "Independent strategy, design, and growth partners for ambitious brands." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero section-tight">
        <div className="site-container">
          <Reveal><span className="eyebrow">Independent agency — New York · London</span></Reveal>
          <Reveal delay={1}>
            <h1 className="display">We build brands that <em>move markets.</em></h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead hero-copy">
              Strategy, creative, and performance media under one roof — a senior team that turns commercial ambition into work people remember and results you can measure.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="button-row">
              <Button asChild variant="ink" size="pill"><Link to="/contact">Start a project <ArrowUpRight /></Link></Button>
              <Button asChild variant="outline" size="pill"><Link to="/work">See the work</Link></Button>
            </div>
          </Reveal>
        </div>
        <div className="site-container">
          <div className="hero-media">
            <img src={assets.heroStudio} alt="KINETIC Atelier studio — designers reviewing a brand campaign" width={1920} height={1200} fetchPriority="high" />
            <div className="media-overlay">
              <span className="glass-label">Featured — Auralis Sound flagship</span>
              <span className="glass-label">2026</span>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* Services */}
      <section className="section">
        <div className="site-container">
          <SectionHead
            eyebrow="What we do"
            title="One team, every discipline that matters."
            lead="Strategy through execution, without handoffs. Expand a discipline to see how we work inside it."
          />
          <Reveal><ServicesAccordion /></Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="Selected work"
            title="Work that earned its keep."
            lead="A selection of recent engagements — each one measured against the commercial outcome it was built to move."
          />
          <div className="project-grid">
            {projects.slice(0, 4).map((project) => <ProjectCard key={project.client} project={project} />)}
          </div>
          <Reveal><div className="button-row" style={{ justifyContent: "center", marginTop: "4rem" }}>
            <Button asChild variant="outline" size="pill"><Link to="/work">View all work <ArrowUpRight /></Link></Button>
          </div></Reveal>
        </div>
      </section>

      <ResultsBand />

      {/* Story */}
      <section className="section">
        <div className="site-container">
          <div className="story-grid">
            <Reveal>
              <span className="eyebrow">Who we are</span>
              <p className="story-quote" style={{ marginTop: "1.5rem" }}>An agency built for the <em>long compounding</em> of great brands.</p>
            </Reveal>
            <Reveal delay={1}>
              <div className="story-copy">
                <p>KINETIC began with a frustration: the industry's best strategic thinking and its best craft rarely sat at the same table. We built a studio where they are the same people.</p>
                <p>Today we are strategists, designers, writers, and media specialists working as one senior team — deliberately small, deliberately senior, and personally accountable for what the work achieves.</p>
                <Button asChild variant="ink" size="pill" style={{ justifySelf: "start", marginTop: ".5rem" }}><Link to="/about">Our story <ArrowUpRight /></Link></Button>
              </div>
            </Reveal>
          </div>
          <Reveal><div className="media-frame"><img src={assets.aboutStudio} alt="The KINETIC Atelier team collaborating in the studio" loading="lazy" width={1920} height={1280} /></div></Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="How we work"
            title="A process built for momentum."
            lead="Five phases, one team, no lost time between thinking and making. Select any phase to see what happens inside it."
          />
          <Reveal><ProcessInteractive /></Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead eyebrow="Client voices" title="Trusted by the people who sign the briefs." />
          <Reveal><Testimonials /></Reveal>
        </div>
      </section>

      {/* Insights preview */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="Insights"
            title="Thinking, in public."
            lead="Essays on brand, growth, and culture from the strategists behind the work."
          />
          <div className="article-grid">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
