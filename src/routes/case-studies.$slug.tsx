import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
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
    meta: loaderData
      ? [
          { title: `${loaderData.client} Case Study | KINETIC Atelier` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.client} — ${loaderData.summary}` },
          {
            property: "og:description",
            content: loaderData.results[0]
              ? `How KINETIC Atelier transformed ${loaderData.client}: ${loaderData.results[0].value} ${loaderData.results[0].label.toLowerCase()}.`
              : loaderData.summary,
          },
        ]
      : [],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const study = Route.useLoaderData();
  const next = nextCaseStudy(study.slug);

  return (
    <>
      {/* Header Breadcrumb & Hero */}
      <section className="page-hero case-study-hero">
        <div className="site-container">
          <Reveal>
            <div className="case-breadcrumb">
              <Link to="/case-studies" className="back-link">
                <ArrowLeft size={15} /> All Case Studies
              </Link>
              <span className="separator">/</span>
              <span className="current">{study.client}</span>
            </div>

            <div className="article-meta" style={{ marginTop: "1rem" }}>
              <span className="meta-pill">{study.industry}</span>
              <span className="meta-pill">Year {study.year}</span>
              <span className="meta-pill">{study.services}</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="section-title case-title" style={{ maxWidth: 1050 }}>
              {study.client}
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="lead case-summary">{study.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* Hero Media Showcase */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="site-container">
          <Reveal>
            <div className="media-frame hero-case-frame" style={{ marginTop: 0 }}>
              <img
                src={study.image}
                alt={`${study.client} — brand campaign and digital experience showcase`}
                width={1920}
                height={1080}
                fetchPriority="high"
              />
              <div className="media-frame-caption">
                <span>Client: {study.client}</span>
                <span>Services: {study.services}</span>
              </div>
            </div>
          </Reveal>

          {/* Core Case Study Narrative: Challenge, Strategy, Execution, Results */}
          <div className="case-layout" style={{ marginTop: "4.5rem" }}>
            <div className="case-body">
              {/* Challenge */}
              <Reveal className="case-block">
                <div className="case-block-header">
                  <span className="case-phase-num">01 / DIAGNOSTIC</span>
                  <h2>The Challenge</h2>
                </div>
                {study.challenge.map((p, i) => (
                  <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* Strategy */}
              <Reveal className="case-block">
                <div className="case-block-header">
                  <span className="case-phase-num">02 / INTERVENTION</span>
                  <h2>The Strategy</h2>
                </div>
                {study.strategy.map((p, i) => (
                  <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>
                    {p}
                  </p>
                ))}
              </Reveal>

              {/* Execution */}
              <Reveal className="case-block">
                <div className="case-block-header">
                  <span className="case-phase-num">03 / REALIZATION</span>
                  <h2>The Execution</h2>
                </div>
                {study.execution.map((p, i) => (
                  <p key={i} style={i > 0 ? { marginTop: "1rem" } : undefined}>
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>

            {/* Sidebar Results Card */}
            <div className="case-sidebar">
              <Reveal delay={1} className="case-results-card">
                <div className="results-card-header">
                  <span className="eyebrow">Measurable Commercial Impact</span>
                  <span className="results-verified-badge">Verified Telemetry</span>
                </div>

                <div className="case-results-grid">
                  {study.results.map((r) => (
                    <div key={r.label} className="result-metric-item">
                      <strong className="result-value">{r.value}</strong>
                      <span className="result-label">{r.label}</span>
                    </div>
                  ))}
                </div>

                <div className="case-sidebar-cta">
                  <p className="sidebar-cta-text">
                    Ready to achieve category-defining velocity for your brand?
                  </p>
                  <Button
                    asChild
                    variant="ink"
                    size="pill"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Link to="/contact">
                      Discuss a Similar Brief <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Next Case Study Navigation */}
          <Reveal>
            <div className="next-case-study-wrap" style={{ marginTop: "6rem" }}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: next.slug }}
                className="next-link"
                aria-label={`Next case study: ${next.client}`}
              >
                <div>
                  <span className="eyebrow">Next Case Study</span>
                  <h3 className="next-client-name">{next.client}</h3>
                  <span className="next-sub">{next.services}</span>
                </div>
                <div className="next-arrow-circle" aria-hidden>
                  <ArrowRight size={24} />
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
