import { projectCategories } from "@/data/projects";
import ProjectSection from "./ProjectSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const categoryLabels: Record<string, string> = {
  "web-development": "Web Development",
  "ai-ml": "AI & ML",
  "data-analytics": "Data Analytics",
  database: "Database",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that solve problems."
        description="Exploring software engineering, artificial intelligence, machine learning, databases and business intelligence through practical projects."
      />

      <Reveal delay={0.1} className="mb-12 mt-10">
        <nav
          aria-label="Project categories"
          className="flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="glass rounded-full px-4 py-2 text-sm text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
            >
              {categoryLabels[category.id]}
            </a>
          ))}
        </nav>
      </Reveal>

      {projectCategories.map((category) => (
        <ProjectSection key={category.id} category={category} />
      ))}
    </section>
  );
}
