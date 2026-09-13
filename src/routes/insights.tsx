import { Link, createFileRoute } from "@tanstack/react-router";
import { ArticleCard, FinalCta, PageHero, Reveal } from "@/components/sections";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | KINETIC Atelier" },
      { name: "description", content: "Essays on brand strategy, growth, and culture from the KINETIC Atelier team — practical thinking from the people behind the work." },
      { property: "og:title", content: "Insights | KINETIC Atelier" },
      { property: "og:description", content: "Essays on brand, growth, and culture from the strategists behind the work." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking, in public."
        lead="Essays on brand, growth, and culture — the same thinking we bring to client work, published for anyone building a brand."
      />
      <section className="section">
        <div className="site-container">
          <Reveal>
            <Link to="/insights/$slug" params={{ slug: featured.slug }} className="article-feature" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={featured.image} alt={`Editorial image for “${featured.title}”`} width={1280} height={960} />
              <div>
                <span className="eyebrow">{featured.category} — Featured</span>
                <h2>{featured.title}</h2>
                <p>{featured.description}</p>
                <footer><span>{featured.date}</span><span>{featured.time} read</span></footer>
              </div>
            </Link>
          </Reveal>
          <div className="article-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", display: "grid", marginTop: "1rem" }}>
            {rest.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
