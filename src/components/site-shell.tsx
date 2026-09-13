import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Case Studies", "/case-studies"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-container header-inner">
        <Link to="/" className="brand" aria-label="KINETIC Atelier home">
          <span className="brand-mark" aria-hidden>
            <span className="brand-dot" />
          </span>
          <span className="brand-text">
            KINETIC <em>Atelier</em>
          </span>
        </Link>

        <div className="availability">
          <span className="pulse-dot">
            <span className="ping" />
            <span className="dot" />
          </span>
          Available for Q4 projects
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              activeProps={{ className: "nav-link active" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Button asChild variant="ink" size="pill" className="header-cta">
            <Link to="/contact">
              Let's Talk <ArrowUpRight className="cta-icon" />
            </Link>
          </Button>

          <button
            type="button"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="site-container mobile-menu-inner">
          <div className="mobile-menu-status">
            <span className="pulse-dot">
              <span className="ping" />
              <span className="dot" />
            </span>
            <span>Currently taking on selective Q4 client briefs</span>
          </div>

          <nav aria-label="Mobile navigation">
            {links.map(([label, to], index) => (
              <Link key={to} to={to} className="mobile-nav-link" onClick={() => setOpen(false)}>
                <span className="mobile-link-num">0{index + 1}</span>
                <span className="mobile-link-label">{label}</span>
                <ArrowUpRight className="mobile-link-arrow" size={24} />
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <Button
              asChild
              variant="ink"
              size="pill"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
            <div className="mobile-contact-direct">
              <a href="mailto:hello@kineticatelier.com">hello@kineticatelier.com</a>
              <span>New York · London</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const capabilities = [
  "Brand Strategy",
  "Creative & Design",
  "Social Media Marketing",
  "Performance Marketing",
  "SEO & Authority",
  "Web Design & Development",
  "Content Marketing",
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Link to="/" className="brand inverse" aria-label="KINETIC Atelier">
              <span className="brand-mark inverse" aria-hidden>
                <span className="brand-dot" />
              </span>
              <span className="brand-text">
                KINETIC <em>Atelier</em>
              </span>
            </Link>
            <p className="footer-lead">
              Independent strategy, design, and growth partners for ambitious brands that refuse to
              be ignored.
            </p>
          </div>
          <div className="footer-status">
            <span className="pulse-dot">
              <span className="ping" />
              <span className="dot" />
            </span>
            Accepting selected client briefs for Q4 2026
          </div>
        </div>

        <div className="footer-grid">
          <nav className="footer-col" aria-label="Footer navigation">
            <span className="eyebrow muted-light">Navigation</span>
            <ul className="footer-links">
              {links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Services">
            <span className="eyebrow muted-light">Capabilities</span>
            <ul className="footer-links">
              {capabilities.map((label) => (
                <li key={label}>
                  <Link to="/services" className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <span className="eyebrow muted-light">Start Something</span>
            <a href="mailto:hello@kineticatelier.com" className="footer-email">
              hello@kineticatelier.com
            </a>
            <span className="footer-location">New York · London · Global Remote</span>
            <div className="socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon-link"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon-link"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 KINETIC Atelier. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(renderLoop);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isView = Boolean(target.closest("[data-cursor='view']"));
      const isAction = Boolean(
        target.closest("a, button, [data-cursor], input, select, textarea, .clickable"),
      );

      ring.classList.toggle("active", isAction);
      ring.classList.toggle("view-mode", isView);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" aria-hidden />
      <div className="cursor-ring" aria-hidden>
        <span className="cursor-view-text">VIEW</span>
      </div>
    </>
  );
}
