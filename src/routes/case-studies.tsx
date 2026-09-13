import { createFileRoute } from "@tanstack/react-router";
import { FinalCta, PageHero, ProjectCard } from "@/components/sections";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | KINETIC Atelier" },
      {
        name: "description",
        content:
          "In-depth case studies from KINETIC Atelier — the challenge, the strategy, the execution, and the measurable results behind each engagement.",
      },
      { property: "og:title", content: "Case Studies | KINETIC Atelier" },
      {
        property: "og:description",
        content:
          "Challenge, strategy, execution, and measurable results — the full story behind the work.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const studies = projects;
  return (
    <>
      <PageHero
        eyebrow="In-Depth Case Studies"
        title="The strategic story behind the numbers."
        lead="Not glossy highlight reels — rigorous accounts of the market challenges we inherited, the contrarian strategies we deployed, the systems we built, and the verifiable commercial impact achieved."
      />
      <section className="section">
        <div className="site-container">
          <div className="project-grid-editorial">
            {studies.map((project, idx) => (
              <ProjectCard
                key={project.client}
                project={project}
                featured={idx === 0 || idx === 3}
              />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
