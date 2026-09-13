import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FinalCta, PageHero, ProjectCard, Reveal } from "@/components/sections";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | KINETIC Atelier" },
      {
        name: "description",
        content:
          "Selected brand, digital, and growth work from KINETIC Atelier — consumer technology, luxury, fintech, hospitality, and more.",
      },
      { property: "og:title", content: "Work | KINETIC Atelier" },
      {
        property: "og:description",
        content: "Selected engagements, each measured against the outcome it was built to move.",
      },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.industry === filter);
  return (
    <>
      <PageHero
        eyebrow="Selected Portfolio"
        title="Every engagement, accountable to a result."
        lead="From global identity transformations to conversion-obsessed digital flagships — a selection of engagements across categories, each built to move a commercial number that matters."
      />
      <section className="section">
        <div className="site-container">
          <Reveal>
            <div className="portfolio-toolbar">
              <div className="filters" role="group" aria-label="Filter projects by industry">
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`filter-btn${filter === f ? " active" : ""}`}
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <span className="project-count-badge">
                Showing {visible.length} of {projects.length} Case Studies
              </span>
            </div>
          </Reveal>
          <div className="project-grid-editorial" aria-live="polite">
            {visible.map((project, idx) => (
              <ProjectCard
                key={project.client}
                project={project}
                featured={filter === "All" && (idx === 0 || idx === 3)}
              />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
