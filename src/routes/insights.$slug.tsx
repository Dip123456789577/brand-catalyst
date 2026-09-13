import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FinalCta, Reveal } from "@/components/sections";
import { getArticle, nextArticle } from "@/lib/article-data";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | KINETIC Atelier` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const next = nextArticle(article.slug);
  return (
    <>
      <article className="section">
        <div className="site-container">
          <div className="prose">
            <Reveal>
              <div className="case-breadcrumb" style={{ marginBottom: "2rem" }}>
                <Link to="/insights" className="back-link">
                  <ArrowLeft size={14} aria-hidden /> All Essays
                </Link>
                <span className="separator">/</span>
                <span className="current">{article.category}</span>
              </div>
              <span className="eyebrow">{article.category}</span>
              <h1
                className="section-title"
                style={{ fontSize: "clamp(2.4rem, 4.8vw, 4.4rem)", marginTop: "1rem" }}
              >
                {article.title}
              </h1>
              <div className="article-meta" style={{ margin: "1.5rem 0 2.5rem" }}>
                <span className="meta-pill">{article.date}</span>
                <span className="meta-pill">{article.time} read</span>
                <span className="meta-pill">Published by KINETIC Atelier</span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border)",
                marginBottom: "3.5rem",
              }}
            >
              <img
                className="article-hero-image"
                src={article.image}
                alt={`Editorial visual for “${article.title}”`}
                width={1920}
                height={1080}
                style={{ marginBottom: 0, width: "100%", maxHeight: 640, objectFit: "cover" }}
              />
            </div>
          </Reveal>
          <div className="prose">
            <Reveal>
              <p
                style={{
                  color: "var(--foreground)",
                  fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)",
                  lineHeight: 1.6,
                  fontWeight: 500,
                  borderLeft: "3px solid var(--primary)",
                  paddingLeft: "1.5rem",
                  margin: "0 0 3rem",
                }}
              >
                {article.description}
              </p>
            </Reveal>
            {article.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} style={{ marginTop: i > 0 ? "1rem" : undefined }}>
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
            <Reveal>
              <div className="next-case-study-wrap" style={{ marginTop: "5rem" }}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: next.slug }}
                  className="next-link"
                  aria-label={`Next article: ${next.title}`}
                >
                  <div>
                    <span className="eyebrow">Next Strategic Essay</span>
                    <h3 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}>{next.title}</h3>
                    <span className="next-sub">
                      {next.category} · {next.time} read
                    </span>
                  </div>
                  <div className="next-arrow-circle" aria-hidden>
                    <ArrowRight size={24} />
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
      <FinalCta />
    </>
  );
}
