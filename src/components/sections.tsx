import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { articles, processSteps, projects, services, testimonials } from "@/lib/site-data";

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: 0 | 1 | 2 }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { show(); return; }
    const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { show(); io.disconnect(); } }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${className}${delay ? ` delay-${delay}` : ""}`} style={{ opacity: 0 }}>{children}</div>;
}

/* ---------- Page hero ---------- */
export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <section className="page-hero">
      <div className="site-container">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Reveal delay={1}><h1 className="section-title" style={{ maxWidth: 1000 }}>{title}</h1></Reveal>
        <Reveal delay={2}><p className="lead">{lead}</p></Reveal>
      </div>
    </section>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <div className="section-head">
      <Reveal><span className="eyebrow">{eyebrow}</span><h2 className="section-title" style={{ marginTop: "1rem" }}>{title}</h2></Reveal>
      {lead ? <Reveal delay={1}><p className="lead">{lead}</p></Reveal> : null}
    </div>
  );
}

/* ---------- Marquee ---------- */
const brands = ["Auralis Sound", "Seneschal", "Velocity Capital", "Nexus Coffee", "Lumen Botanicals", "Terra Mobility", "Halcyon Hotels", "Meridian Labs"];
export function BrandMarquee() {
  const row = [...brands, ...brands];
  return (
    <div className="marquee-wrap" aria-label="Brands we have worked with">
      <div className="marquee">{row.map((brand, i) => <span key={`${brand}-${i}`} aria-hidden={i >= brands.length}>{brand}</span>)}</div>
    </div>
  );
}

/* ---------- Services accordion ---------- */
export function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="services-list">
      {services.map((service, i) => {
        const isOpen = open === i;
        return (
          <div key={service.number} className={`service-row${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="service-toggle"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${service.number}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="num">{service.number}</span>
              <h3>{service.title}</h3>
              <Plus aria-hidden />
            </button>
            <div id={`service-panel-${service.number}`} className="service-description">
              <div>
                <p>{service.description}</p>
                <small>{service.detail}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Project card ---------- */
export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const to = project.slug ? "/case-studies/$slug" : "/case-studies";
  return (
    <Reveal className="project-card">
      <Link to={to} {...(project.slug ? { params: { slug: project.slug } } : {})} className="project-card" data-cursor aria-label={`${project.client} — ${project.description}`}>
        <div className="project-media">
          <img src={project.image} alt={`${project.client} — ${project.industry} project`} loading="lazy" width={1280} height={960} />
          <span className="project-result">{project.result}</span>
        </div>
        <div className="project-info">
          <div className="project-meta"><span>{project.industry}</span><span>{project.services}</span></div>
          <h3>{project.client}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- Count-up results band ---------- */
const stats = [
  { value: 214, suffix: "%", label: "Average direct revenue lift" },
  { value: 3.2, suffix: "×", label: "Average return on ad spend", decimals: 1 },
  { value: 38, suffix: "", label: "Brands launched and scaled" },
  { value: 96, suffix: "%", label: "Clients who stay beyond year one" },
];
function CountUp({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const render = (v: number) => { el.textContent = `${v.toFixed(decimals)}${suffix}`; };
    if (reduced || !("IntersectionObserver" in window)) { render(value); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        render(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix, decimals]);
  return <strong ref={ref}>0{suffix}</strong>;
}
export function ResultsBand() {
  return (
    <section className="results section">
      <div className="site-container">
        <SectionHead eyebrow="Proof, not promises" title="Results that compound." lead="Every engagement is measured against commercial outcomes — not impressions or applause." />
        <div className="stats">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="stat">
              <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Interactive process ---------- */
export function ProcessInteractive() {
  const [active, setActive] = useState(0);
  return (
    <div className="process">
      <div className="process-list" role="tablist" aria-label="Our process">
        {processSteps.map((step, i) => (
          <button key={step.title} type="button" role="tab" aria-selected={active === i} aria-controls="process-panel" className="process-button" onClick={() => setActive(i)}>
            <span>0{i + 1}</span>
            <strong>{step.title}</strong>
            <ArrowRight aria-hidden style={{ opacity: active === i ? 1 : 0.3, color: active === i ? "var(--primary)" : undefined, transition: ".25s" }} />
          </button>
        ))}
      </div>
      <div>
        <div id="process-panel" role="tabpanel" className="process-panel">
          <strong>Phase 0{active + 1}</strong>
          <h3>{processSteps[active].title}</h3>
          <p>{processSteps[active].description}</p>
        </div>
        <div className="progress-line" aria-hidden><i style={{ width: `${((active + 1) / processSteps.length) * 100}%` }} /></div>
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

  const active = testimonials[index];
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="testimonial" aria-live="polite">
        <div className="stars" aria-label="Five star rating">
          {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={14} fill="currentColor" aria-hidden />)}
        </div>
        <blockquote key={index} className="reveal">“{active.quote}”</blockquote>
        <footer>
          <strong>{active.name}</strong>
          <span style={{ color: "var(--muted-foreground)", fontSize: ".85rem" }}> {active.role}, {active.company}</span>
        </footer>
      </div>
      <div className="testimonial-controls">
        <div className="dots" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button key={t.name} type="button" role="tab" aria-selected={i === index} aria-label={`Testimonial ${i + 1}: ${t.name}`} onClick={() => go(i)} style={{ background: "none", border: 0, padding: 0, cursor: "pointer" }}>
              <i className={i === index ? "active" : ""} style={{ display: "block" }} />
            </button>
          ))}
        </div>
        <div>
          <Button variant="outline" size="iconLg" aria-label="Previous testimonial" onClick={() => go(index - 1)}><ArrowLeft /></Button>
          <Button variant="outline" size="iconLg" aria-label="Next testimonial" onClick={() => go(index + 1)}><ArrowRight /></Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Article card ---------- */
export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Reveal>
      <Link to="/insights/$slug" params={{ slug: article.slug }} className="article-card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
        <img src={article.image} alt={`Editorial image for “${article.title}”`} loading="lazy" width={1280} height={960} />
        <span className="eyebrow">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <footer><span>{article.date}</span><span>{article.time} read</span></footer>
      </Link>
    </Reveal>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCta() {
  return (
    <section className="final-cta section">
      <div className="site-container">
        <Reveal>
          <span className="eyebrow" style={{ color: "var(--primary-foreground)" }}>Start something</span>
          <h2 className="section-title" style={{ marginTop: "1rem" }}>Have an ambitious brief? We have the team for it.</h2>
          <p>Tell us where you want the business to go. We will show you the sharpest route there — with the strategy, creative, and media to make it happen.</p>
          <Button asChild variant="ink" size="pill"><Link to="/contact">Start a project <ArrowUpRight /></Link></Button>
        </Reveal>
      </div>
    </section>
  );
}
