import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, Reveal } from "@/components/sections";
import { getCaseStudy, nextCaseStudy } from "@/lib/case-study-data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.client} Case Study | KINETIC Atelier` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.client} — ${loaderData.summary}` },
      { property: "og:description", content: `How KINETIC Atelier helped ${loaderData.client}: ${loaderData.results[0].value} ${loaderData.results[0].label.toLowerCase()}.` },
    ] : [],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();
  const next = nextCaseStudy(study.slug);
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <Reveal>
            <div className="article-meta">
              <span>{study.industry}</span><span>{study.year}</span><span>{study.services}</span>
            </div>
          </Reveal>
          <Reveal delay={1}><h1 className="section-title" style={{ maxWidth: 1000 }}>{study.client}</h1></Reveal>
          <Reveal delay={2}><p className="lead">{study.summary}</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <Reveal>
            <div className="media-frame" style={{ marginTop: 0 }}>
              <img src={study.image} alt={`${study.client} — campaign imagery`} width={1280} height={960} fetchPriority="high" />
            </div>
          </Reveal>
          <div className="case-layout" style={{ marginTop: "4rem" }}>
            <div className="case-body">
              {([["The challenge", study.challenge], ["The strategy", study.strategy], ["The execution", study.execution]] as const).map(([heading, paragraphs]) => (
                <Reveal key={heading} className="case-block">
                  <h2>{heading}</h2>
                  {paragraphs.map((p, i) => <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>{p}</p>)}
                </Reveal>
              ))}
            </div>
            <Reveal delay={1}>
              <div>
                <span className="eyebrow">Results</span>
                <div className="case-results" style={{ marginTop: "1.25rem" }}>
                  {study.results.map((r) => (
                    <div key={r.label}><strong>{r.value}</strong><span style={{ color: "var(--muted-foreground)", fontSize: ".85rem" }}>{r.label}</span></div>
                  ))}
                </div>
                <Button asChild variant="ink" size="pill" style={{ marginTop: "2rem" }}><Link to="/contact">Get results like these <ArrowUpRight /></Link></Button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div style={{ marginTop: "5rem" }}>
              <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="next-link" aria-label={`Next case study: ${next.client}`}>
                <div><span className="eyebrow">Next case study</span><h3>{next.client}</h3></div>
                <ArrowRight size={32} aria-hidden style={{ color: "var(--primary)", flexShrink: 0 }} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
