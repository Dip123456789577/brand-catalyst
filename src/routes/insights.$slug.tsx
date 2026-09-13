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
    meta: loaderData ? [
      { title: `${loaderData.title} | KINETIC Atelier` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "article" },
    ] : [],
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
              <Link to="/insights" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", color: "var(--muted-foreground)", textDecoration: "none", font: "500 .68rem var(--font-mono)", textTransform: "uppercase", marginBottom: "2rem" }}>
                <ArrowLeft size={14} aria-hidden /> All insights
              </Link>
              <span className="eyebrow">{article.category}</span>
              <h1 className="section-title" style={{ fontSize: "clamp(2.2rem,4.5vw,4rem)", marginTop: "1rem" }}>{article.title}</h1>
              <div className="article-meta"><span>{article.date}</span><span>{article.time} read</span><span>KINETIC Atelier</span></div>
            </Reveal>
          </div>
          <Reveal><img className="article-hero-image" src={article.image} alt={`Editorial image for “${article.title}”`} width={1280} height={960} /></Reveal>
          <div className="prose">
            <Reveal><p style={{ color: "var(--ink-soft)", fontSize: "1.25rem", lineHeight: 1.6, fontWeight: 500 }}>{article.description}</p></Reveal>
            {article.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </Reveal>
            ))}
            <Reveal>
              <div style={{ marginTop: "4rem" }}>
                <Link to="/insights/$slug" params={{ slug: next.slug }} className="next-link" aria-label={`Next article: ${next.title}`}>
                  <div><span className="eyebrow">Next article</span><h3 style={{ fontSize: "clamp(1.3rem,2.4vw,2rem)" }}>{next.title}</h3></div>
                  <ArrowRight size={28} aria-hidden style={{ color: "var(--primary)", flexShrink: 0 }} />
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
