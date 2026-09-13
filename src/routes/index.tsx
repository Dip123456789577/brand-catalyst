import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Compass,
  Globe,
  Layers,
  MessageSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArticleCard,
  BrandMarquee,
  FinalCta,
  ProcessInteractive,
  ProjectCard,
  ResultsBand,
  Reveal,
  SectionHead,
  ServicesAccordion,
  Testimonials,
} from "@/components/sections";
import { articles, assets, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KINETIC Atelier | We Build Brands That Move People" },
      {
        name: "description",
        content:
          "We combine strategy, creativity, technology and performance marketing to help ambitious brands grow.",
      },
      { property: "og:title", content: "KINETIC Atelier | We Build Brands That Move People" },
      {
        property: "og:description",
        content:
          "We combine strategy, creativity, technology and performance marketing to help ambitious brands grow.",
      },
    ],
  }),
  component: HomePage,
});

const heroPillars = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "Identity & Strategy",
    metric: "+184% Equity",
    desc: "Positioning and visual systems that make difference undeniable.",
    icon: Compass,
    color: "#3b82f6",
  },
  {
    id: "campaigns",
    title: "Digital Campaigns",
    subtitle: "Omni-Channel Media",
    metric: "3.8X ROAS",
    desc: "Targeted, cinematic campaigns built to earn attention at scale.",
    icon: Layers,
    color: "#8b5cf6",
  },
  {
    id: "websites",
    title: "Websites",
    subtitle: "Interactive Flagships",
    metric: "2.7X Conv.",
    desc: "Speed-obsessed digital flagships engineered for conversion.",
    icon: Globe,
    color: "#06b6d4",
  },
  {
    id: "social",
    title: "Social Media",
    subtitle: "Content Systems",
    metric: "4.8X Reach",
    desc: "Platform-native storytelling that turns followers into advocates.",
    icon: MessageSquare,
    color: "#f59e0b",
  },
  {
    id: "analytics",
    title: "Marketing Analytics",
    subtitle: "Real-Time Attribution",
    metric: "99.4% Precision",
    desc: "Continuous telemetry connecting brand signals to revenue.",
    icon: BarChart3,
    color: "#10b981",
  },
];

function HomePage() {
  const [activePillar, setActivePillar] = useState(0);
  const currentPillar = heroPillars[activePillar] ?? heroPillars[0]!;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-viewport section-tight">
        <div className="site-container">
          <Reveal>
            <div className="hero-eyebrow-wrap">
              <span className="eyebrow hero-pill-eyebrow">
                <Sparkles size={13} className="inline-sparkle" /> Independent Creative & Growth
                Agency
              </span>
              <span className="hero-location-badge">New York · London · Worldwide</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="display hero-display">
              We Build Brands That <span className="hero-gradient-text">Move People.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="lead hero-copy">
              We combine strategy, creativity, technology and performance marketing to help
              ambitious brands grow.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="button-row hero-actions">
              <Button asChild variant="ink" size="pill" className="hero-primary-btn">
                <Link to="/contact">
                  Start a Project <ArrowUpRight className="cta-icon" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="pill" className="hero-secondary-btn">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Sophisticated Interactive Visual Area */}
        <div className="site-container hero-visual-container">
          <Reveal delay={1} className="hero-showcase-wrapper">
            {/* Interactive 5-Pillar Tabs */}
            <div className="hero-pillars-bar" role="tablist" aria-label="Our core agency pillars">
              {heroPillars.map((p, idx) => {
                const Icon = p.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`pillar-tab${isSelected ? " active" : ""}`}
                    onClick={() => setActivePillar(idx)}
                    onMouseEnter={() => setActivePillar(idx)}
                  >
                    <Icon size={15} className="pillar-tab-icon" />
                    <span className="pillar-tab-title">{p.title}</span>
                    <span className="pillar-tab-metric">{p.metric}</span>
                  </button>
                );
              })}
            </div>

            {/* Visual Canvas with Studio Imagery & Live Floating Telemetry Cards */}
            <div className="hero-media-card">
              <img
                src={assets.heroStudio}
                alt="KINETIC Atelier design studio and strategic creative directors collaborating"
                width={1920}
                height={1080}
                fetchPriority="high"
                className="hero-media-img"
              />
              <div className="hero-media-backdrop-gradient" aria-hidden />

              {/* Floating Interactive Telemetry Card */}
              <div className="hero-floating-card top-right-card" aria-live="polite">
                <div className="floating-card-header">
                  <span className="floating-card-badge">Pillar 0{activePillar + 1}</span>
                  <span className="floating-metric-glow">{currentPillar.metric}</span>
                </div>
                <h4 className="floating-card-title">{currentPillar.title}</h4>
                <p className="floating-card-desc">{currentPillar.desc}</p>
                <div className="floating-card-progress">
                  <span className="progress-label">Active Performance Vector</span>
                  <div className="progress-bar-thin">
                    <div
                      className="progress-bar-fill-accent"
                      style={{ width: `${(activePillar + 1) * 20}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div className="hero-floating-card bottom-left-card">
                <div className="studio-status-indicator">
                  <span className="pulse-dot">
                    <span className="ping" />
                    <span className="dot" />
                  </span>
                  <span>Currently directing flagship campaigns for Q4</span>
                </div>
              </div>

              {/* Featured Case Study Label */}
              <div className="media-overlay">
                <span className="glass-label">Featured Work — Auralis Spatial Audio</span>
                <span className="glass-label">2026 Archive</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator" aria-hidden>
              <a href="#trusted-section" className="scroll-link">
                <span className="scroll-label">Scroll to explore</span>
                <ArrowDown size={14} className="scroll-arrow" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted By Section */}
      <section id="trusted-section">
        <BrandMarquee />
      </section>

      {/* Interactive Services Section */}
      <section className="section" id="services-section">
        <div className="site-container">
          <SectionHead
            eyebrow="Capabilities & Disciplines"
            title="Creativity + Strategy + Technology + Results."
            lead="Seven integrated disciplines, practiced by one senior team. Zero handoffs, zero translation loss between strategy and market execution."
          />
          <Reveal>
            <ServicesAccordion />
          </Reveal>
        </div>
      </section>

      {/* Selected Work Portfolio Section */}
      <section className="section portfolio-section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <div className="section-head-with-action">
            <SectionHead
              eyebrow="Portfolio of Impact"
              title="Selected Work"
              lead="Engagements engineered to transform market perception and drive verifiable commercial outcomes."
            />
            <div className="section-action-desktop">
              <Button asChild variant="outline" size="pill">
                <Link to="/work">
                  View All 6 Case Studies <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="project-grid-editorial">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.client}
                project={project}
                featured={idx === 0 || idx === 3}
              />
            ))}
          </div>

          <Reveal>
            <div className="button-row center-aligned" style={{ marginTop: "4rem" }}>
              <Button asChild variant="ink" size="pill">
                <Link to="/work">
                  Explore Full Portfolio Archive <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results Band Section */}
      <ResultsBand />

      {/* About Agency Story Section */}
      <section className="section about-agency-section">
        <div className="site-container">
          <div className="story-grid">
            <Reveal>
              <span className="eyebrow">Agency Story & Philosophy</span>
              <h2 className="story-headline" style={{ marginTop: "1.25rem" }}>
                Strategy with imagination.{" "}
                <span className="text-highlight">Creativity with purpose.</span>
              </h2>
              <p className="story-tagline">
                We believe brand building is not decorative — it is the single greatest multiplier
                of enterprise value.
              </p>
            </Reveal>

            <Reveal delay={1}>
              <div className="story-copy">
                <p>
                  KINETIC Atelier was founded on a simple conviction: the advertising and design
                  industry has spent too long separating strategic rigor from artistic excellence.
                  When strategists don't understand craft, ideas feel sterile. When designers don't
                  understand commercial reality, work becomes self-indulgent.
                </p>
                <p>
                  We built an independent studio where strategy, creative direction, engineering,
                  and performance media are handled by the same senior practitioners. No junior
                  handoffs. No bureaucratic layers. Just seasoned partners who are personally
                  invested in the commercial trajectory of your brand.
                </p>

                <div className="story-pillars-summary">
                  <div className="story-pillar-item">
                    <strong>Strategy First</strong>
                    <span>Deep market research & ruthless commercial clarity</span>
                  </div>
                  <div className="story-pillar-item">
                    <strong>Craft Obsessed</strong>
                    <span>World-class art direction, typography & interactive code</span>
                  </div>
                  <div className="story-pillar-item">
                    <strong>Results Driven</strong>
                    <span>Transparent attribution, ROAS tracking & compound growth</span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="ink"
                  size="pill"
                  style={{ justifySelf: "start", marginTop: "1rem" }}
                >
                  <Link to="/about">
                    Read Our Full Philosophy <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="media-frame" style={{ marginTop: "4.5rem" }}>
              <img
                src={assets.aboutStudio}
                alt="Inside the KINETIC Atelier studio during a strategic brand review session"
                loading="lazy"
                width={1920}
                height={1280}
              />
              <div className="media-frame-caption">
                <span>Collaborative Strategic Review · Manhattan Studio</span>
                <span>KINETIC Atelier</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="Operating Methodology"
            title="A process built for momentum."
            lead="From initial diagnostic to post-launch optimization — five structured phases that turn ambition into undeniable market reality."
          />
          <Reveal>
            <ProcessInteractive />
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHead
            eyebrow="Client Testimonials"
            title="Trusted by the leaders who sign the briefs."
            lead="Hear from founders, CMOs, and brand directors who have partnered with KINETIC Atelier to scale their organizations."
          />
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <div className="section-head-with-action">
            <SectionHead
              eyebrow="Editorial & Essays"
              title="Thinking, in public."
              lead="Strategic essays on brand positioning, organic demand generation, and modern growth marketing."
            />
            <div className="section-action-desktop">
              <Button asChild variant="outline" size="pill">
                <Link to="/insights">
                  Read All Insights <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="article-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />
    </>
  );
}
