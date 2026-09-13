import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Plus,
  Sparkles,
  Star,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { articles, processSteps, projects, services, testimonials } from "@/lib/site-data";

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const rect = el.getBoundingClientRect();
    // If element is comfortably within or above current viewport, leave visible
    if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
      return;
    }

    // Element is below viewport, arm for entrance reveal
    setRevealed(false);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 80px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${revealed ? "revealed" : "unrevealed"} ${className}${delay ? ` delay-${delay}` : ""}`}
    >
      {children}
    </div>
  );
}

/* ---------- Page hero ---------- */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <div className="site-container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="section-title" style={{ maxWidth: 1050 }}>
            {title}
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: "1rem" }}>
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={1}>
          <p className="lead">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------- Marquee ---------- */
const brands = [
  "Auralis Sound",
  "Seneschal Horology",
  "Velocity Capital",
  "Nexus Collective",
  "Lumen Botanicals",
  "Terra Mobility",
  "Halcyon Hotels",
  "Meridian Biosystems",
  "Kroma Audio",
  "Vesper Studio",
];

export function BrandMarquee() {
  const row = [...brands, ...brands];
  return (
    <div className="marquee-section" aria-label="Trusted by ambitious brands">
      <div className="site-container marquee-header">
        <span className="eyebrow">Trusted by ambitious brands worldwide</span>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {row.map((brand, i) => (
            <span key={`${brand}-${i}`} className="marquee-item" aria-hidden={i >= brands.length}>
              <span className="marquee-text">{brand}</span>
              <span className="marquee-separator" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Interactive Services (Desktop List + Mobile Accordion) ---------- */
export function ServicesAccordion() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="services-showcase">
      <div className="services-list" role="tablist" aria-label="Agency capabilities">
        {services.map((service, i) => {
          const isOpen = active === i;
          return (
            <div
              key={service.number}
              className={`service-row${isOpen ? " active" : ""}`}
              onMouseEnter={() => setActive(i)}
            >
              <button
                type="button"
                className="service-toggle"
                role="tab"
                id={`service-tab-${service.number}`}
                aria-selected={isOpen}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${service.number}`}
                onClick={() => setActive(isOpen ? -1 : i)}
              >
                <span className="num">{service.number}</span>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-icon-indicator" aria-hidden>
                  <ArrowUpRight className="service-arrow" />
                  <Plus className="service-plus" />
                </div>
              </button>

              <div
                id={`service-panel-${service.number}`}
                role="tabpanel"
                aria-labelledby={`service-tab-${service.number}`}
                className="service-description"
              >
                <div className="service-body">
                  <p className="service-desc-text">{service.description}</p>

                  <div className="service-deliverables">
                    <span className="service-deliverables-title">
                      Key Capabilities & Deliverables
                    </span>
                    <div className="deliverable-tags">
                      {service.deliverables.map((d) => (
                        <span key={d} className="deliverable-tag">
                          <Check size={13} className="deliverable-check" />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-footer-cta">
                    <Button asChild variant="outline" size="sm" className="service-inquire-btn">
                      <Link to="/contact">
                        Inquire about {service.title} <ArrowUpRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Project card ---------- */
export function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const to = "/case-studies/$slug";

  return (
    <Reveal className={`project-card-wrapper ${featured ? "featured" : ""}`}>
      <Link
        to={to}
        params={{ slug: project.slug }}
        className="project-card"
        data-cursor="view"
        aria-label={`${project.client} — ${project.description}`}
      >
        <div className="project-media">
          <img
            src={project.image}
            alt={`${project.client} — ${project.industry} project`}
            loading="lazy"
            width={1280}
            height={960}
          />
          <div className="project-badge-row">
            <span className="project-result">{project.result}</span>
            <span className="project-accent-tag">{project.accent}</span>
          </div>

          <div className="project-overlay-view" aria-hidden>
            <span className="view-pill">
              View Case Study <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        <div className="project-info">
          <div className="project-meta">
            <span className="project-industry">{project.industry}</span>
            <span className="project-services-tag">{project.services}</span>
          </div>

          <div className="project-title-row">
            <h3 className="project-client-name">{project.client}</h3>
            <span className="project-action-link" aria-hidden>
              View Case Study <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="project-desc">{project.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Count-up results band ---------- */
const boldMetrics = [
  { value: 120, suffix: "+", label: "Brands Transformed", sub: "Global launches & reinventions" },
  {
    value: 250,
    suffix: "M+",
    label: "Impressions Generated",
    sub: "Organic & paid across channels",
  },
  {
    value: 3.8,
    suffix: "X",
    label: "Average ROAS",
    sub: "Sustained return on media spend",
    decimals: 1,
  },
  { value: 95, suffix: "%", label: "Client Retention", sub: "Partner relationships > 18 months" },
];

function CountUp({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number | undefined;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = (v: number) => {
      el.textContent = `${decimals > 0 ? v.toFixed(decimals) : Math.round(v)}${suffix}`;
    };

    if (reduced || !("IntersectionObserver" in window)) {
      render(value);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1600;

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - p, 3);
          render(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, decimals]);

  return <strong ref={ref}>0{suffix}</strong>;
}

export function ResultsBand() {
  return (
    <section className="results section">
      <div className="site-container">
        <SectionHead
          eyebrow="Commercial Velocity"
          title="Numbers that compound."
          lead="Every engagement is engineered around commercial outcomes — never vanity metrics or applause."
        />
        <div className="stats">
          {boldMetrics.map((stat, i) => (
            <Reveal key={stat.label} className="stat-card" delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="stat-number-wrap">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-sub">{stat.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Interactive process experience ---------- */
export function ProcessInteractive() {
  const [active, setActive] = useState(0);
  const activeStep = processSteps[active] ?? processSteps[0]!;

  return (
    <div className="process-experience">
      <div className="process-nav" role="tablist" aria-label="Interactive engagement timeline">
        {processSteps.map((step, i) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-controls={`process-panel-${i}`}
            className={`process-step-btn${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="step-num-bubble">0{i + 1}</div>
            <div className="step-info">
              <strong className="step-title">{step.title}</strong>
              <span className="step-hint">{step.deliverables[0]}</span>
            </div>
            <ArrowRight className="step-arrow" size={18} aria-hidden />
          </button>
        ))}
      </div>

      <div className="process-stage">
        <div className="progress-bar-track" aria-hidden>
          <div
            className="progress-bar-fill"
            style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
          />
        </div>

        <div id={`process-panel-${active}`} role="tabpanel" className="process-detail-card">
          <div className="process-header">
            <span className="eyebrow">Phase 0{active + 1} of 05</span>
            <span className="process-step-tag">Phase Blueprint</span>
          </div>

          <h3 className="process-step-heading">{activeStep.title}</h3>
          <p className="process-tagline">{activeStep.tagline}</p>
          <p className="process-description-text">{activeStep.description}</p>

          <div className="process-deliverables-box">
            <span className="deliverables-heading">Phase Deliverables & Milestones:</span>
            <ul className="process-deliverables-list">
              {activeStep.deliverables.map((item) => (
                <li key={item}>
                  <Check size={14} className="check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="process-nav-buttons">
            <Button
              variant="outline"
              size="sm"
              disabled={active === 0}
              onClick={() => setActive((v) => Math.max(0, v - 1))}
            >
              <ArrowLeft size={14} /> Previous Phase
            </Button>
            <Button
              variant="ink"
              size="sm"
              disabled={active === processSteps.length - 1}
              onClick={() => setActive((v) => Math.min(processSteps.length - 1, v + 1))}
            >
              Next Phase <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Testimonials carousel ---------- */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = testimonials.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const active = testimonials[index] ?? testimonials[0]!;

  return (
    <div
      className="testimonial-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        if (touch) touchX.current = touch.clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const touch = e.changedTouches[0];
        if (touch) {
          const dx = touch.clientX - touchX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        }
        touchX.current = null;
      }}
    >
      <div className="testimonial-card" aria-live="polite">
        <div className="testimonial-header">
          <div className="stars" aria-label="Five star verified review">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={15} fill="currentColor" aria-hidden />
            ))}
          </div>
          <span className="testimonial-result-pill">{active.stats}</span>
        </div>

        <blockquote key={index} className="testimonial-quote reveal">
          “{active.quote}”
        </blockquote>

        <div className="testimonial-client">
          <div className="client-avatar" style={{ backgroundColor: active.avatarBg }} aria-hidden>
            {active.initials}
          </div>
          <div>
            <strong className="client-name">{active.name}</strong>
            <div className="client-role">
              {active.role} · <span className="client-company">{active.company}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-controls">
        <div className="dots" role="tablist" aria-label="Select testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}: ${t.name}`}
              onClick={() => go(i)}
              className={`dot-button${i === index ? " active" : ""}`}
            >
              <i />
            </button>
          ))}
        </div>

        <div className="testimonial-arrows">
          <Button
            variant="outline"
            size="iconLg"
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
          >
            <ArrowLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="iconLg"
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
          >
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Article card ---------- */
export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Reveal>
      <Link
        to="/insights/$slug"
        params={{ slug: article.slug }}
        className="article-card"
        data-cursor="view"
      >
        <div className="article-media">
          <img
            src={article.image}
            alt={`Editorial visual for “${article.title}”`}
            loading="lazy"
            width={1280}
            height={960}
          />
          <span className="article-category-badge">{article.category}</span>
        </div>

        <div className="article-content">
          <div className="article-meta-row">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.time} read</span>
          </div>

          <h3 className="article-title">{article.title}</h3>
          <p className="article-desc">{article.description}</p>

          <span className="article-read-more">
            Read Essay <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCta() {
  return (
    <section className="final-cta section">
      <div className="final-cta-ambient-glow" aria-hidden />
      <div className="site-container relative-z">
        <Reveal>
          <span className="eyebrow cta-eyebrow">
            <Sparkles size={14} className="cta-sparkle" /> Let's collaborate
          </span>
          <h2 className="section-title cta-title">Have a bold idea? Let's make it happen.</h2>
          <p className="cta-lead">
            Tell us what you're building, and let's create something people remember.
          </p>
          <div className="cta-button-group">
            <Button asChild variant="ink" size="pill" className="cta-btn-primary">
              <Link to="/contact">
                Start a Conversation <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="pill" className="cta-btn-secondary">
              <Link to="/work">Explore Selected Work</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
