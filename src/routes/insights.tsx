import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";
import { ArticleCard, FinalCta, PageHero, Reveal } from "@/components/sections";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Essays | Thinking, in public | KINETIC Atelier" },
      {
        name: "description",
        content:
          "Strategic essays on brand positioning, organic reach, full-funnel marketing, and category creation from the practitioners at KINETIC Atelier.",
      },
      { property: "og:title", content: "Insights & Essays | KINETIC Atelier" },
      {
        property: "og:description",
        content:
          "Essays on brand strategy, growth, and culture from the strategists behind the work.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((a) => a.category === selectedCategory);

  const [featured, ...rest] = filteredArticles;

  return (
    <>
      <PageHero
        eyebrow="Editorial & Essays"
        title="Thinking, in public."
        lead="Essays on brand, growth, unit economics, and culture — the exact strategic models we deploy for clients, published openly for ambitious leaders."
      />

      <section className="section">
        <div className="site-container">
          {/* Category Filter Pills */}
          <Reveal>
            <div className="portfolio-toolbar">
              <div className="filters" role="group" aria-label="Filter essays by category">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`filter-btn${selectedCategory === c ? " active" : ""}`}
                    aria-pressed={selectedCategory === c}
                    onClick={() => setSelectedCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <span className="project-count-badge">
                <BookOpen
                  size={13}
                  style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}
                />
                {filteredArticles.length} Published Essays
              </span>
            </div>
          </Reveal>

          {/* Featured Article Card */}
          {featured ? (
            <Reveal>
              <Link
                to="/insights/$slug"
                params={{ slug: featured.slug }}
                className="article-feature"
                style={{ textDecoration: "none", color: "inherit", marginBottom: "3.5rem" }}
              >
                <div
                  style={{ overflow: "hidden", borderRadius: 8, border: "1px solid var(--border)" }}
                >
                  <img
                    src={featured.image}
                    alt={`Editorial visual for “${featured.title}”`}
                    width={1280}
                    height={960}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div>
                  <span className="eyebrow" style={{ marginBottom: ".75rem" }}>
                    {featured.category} · Featured Essay
                  </span>
                  <h2>{featured.title}</h2>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      color: "var(--ink-soft)",
                      margin: "1rem 0 1.5rem",
                    }}
                  >
                    {featured.description}
                  </p>
                  <footer>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.time} read</span>
                    <span>·</span>
                    <span
                      style={{
                        color: "var(--primary)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      Read Essay <ArrowUpRight size={14} />
                    </span>
                  </footer>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {/* Additional Articles Grid */}
          {rest.length > 0 ? (
            <div
              className="article-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                display: "grid",
                gap: "2rem",
              }}
            >
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
