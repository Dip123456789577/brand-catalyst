import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | KINETIC Atelier" },
      { name: "description", content: "In-depth case studies from KINETIC Atelier — the challenge, the strategy, the execution, and the measurable results behind each engagement." },
      { property: "og:title", content: "Case Studies | KINETIC Atelier" },
      { property: "og:description", content: "Challenge, strategy, execution, and measurable results — the full story behind the work." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const studies = projects.filter((p) => p.slug !== null);
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The full story behind the numbers."
        lead="Not highlight reels — honest accounts of the challenge we inherited, the strategy we chose, the work we made, and what it achieved."
      />
      <section className="section">
        <div className="site-container">
          <div className="project-grid">
            {studies.map((project) => <ProjectCard key={project.client} project={project} />)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
