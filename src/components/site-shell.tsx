import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [["Work", "/work"], ["Services", "/services"], ["About", "/about"], ["Case Studies", "/case-studies"], ["Insights", "/insights"], ["Contact", "/contact"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="site-container header-inner">
      <Link to="/" className="brand" aria-label="KINETIC Atelier home">KINETIC <span>Atelier</span></Link>
      <div className="availability"><i />Available for Q4 projects</div>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, to]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link active" }}>{label}</Link>)}</nav>
      <Button asChild variant="ink" size="pill" className="header-cta"><Link to="/contact">Let's Talk <ArrowUpRight /></Link></Button>
      <Button variant="outline" size="iconLg" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
      <nav className="site-container" aria-label="Mobile navigation">{links.map(([label, to], index) => <Link key={to} to={to}><span>0{index + 1}</span>{label}<ArrowUpRight /></Link>)}</nav>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="site-container">
    <div className="footer-top"><div><Link to="/" className="brand inverse">KINETIC <span>Atelier</span></Link><p>Independent strategy, design, and growth partners for ambitious brands.</p></div><div className="footer-status"><i /> Accepting selected projects for Q4 2026</div></div>
    <div className="footer-grid"><div><span className="eyebrow muted-light">Navigate</span>{links.map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</div><div><span className="eyebrow muted-light">Capabilities</span>{["Brand Strategy","Creative Direction","Digital Products","Performance Media","Content Systems"].map(x => <Link key={x} to="/services">{x}</Link>)}</div><div><span className="eyebrow muted-light">Start something</span><a href="mailto:hello@kineticatelier.com">hello@kineticatelier.com</a><span>New York · London · Everywhere</span><div className="socials"><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></div></div></div>
    <div className="footer-bottom"><span>© 2026 KINETIC Atelier</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div>
  </div></footer>;
}

export function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring) return;
    const move = (event: MouseEvent) => { dot.style.transform = `translate(${event.clientX}px,${event.clientY}px)`; ring.animate({ transform: `translate(${event.clientX}px,${event.clientY}px)` }, { duration: 350, fill: "forwards" }); };
    const over = (event: MouseEvent) => ring.classList.toggle("active", Boolean((event.target as Element).closest("a,button,[data-cursor]")));
    window.addEventListener("mousemove", move); window.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
  }, []);
  return <><div className="cursor-dot" /><div className="cursor-ring"><span>View</span></div></>;
}