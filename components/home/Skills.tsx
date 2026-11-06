import {
  Code2,
  BrainCircuit,
  Database,
  BarChart3,
  Cloud,
  Terminal,
  Cpu,
  Layers,
  Flame,
  Globe,
  Boxes,
  Workflow,
  Server,
  DatabaseZap,
  LineChart,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

// Enhanced skill groups with specific icons for each tech badge
const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    span: "lg:col-span-5",
    featured: false,
    skills: [
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: Globe },
      { name: "Java", icon: Code2 },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
      { name: "R", icon: BarChart3 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Full-Stack Development",
    icon: Layers,
    span: "lg:col-span-7",
    featured: false,
    skills: [
      { name: "React", icon: Layers },
      { name: "Redux Toolkit", icon: Workflow },
      { name: "Zustand", icon: Boxes },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Terminal },
      { name: "Tailwind CSS", icon: Flame },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    span: "lg:col-span-7",
    featured: true,
    skills: [
      { name: "Regression", icon: LineChart },
      { name: "KNN", icon: BrainCircuit },
      { name: "SVM", icon: Cpu },
      { name: "Clustering", icon: Layers },
      { name: "ANN", icon: BrainCircuit },
      { name: "CNN", icon: Code2 },
      { name: "NLP", icon: Terminal },
      { name: "TensorFlow", icon: Flame },
      { name: "PyTorch", icon: Cpu },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    span: "lg:col-span-5",
    featured: false,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: DatabaseZap },
      { name: "NeonDB", icon: Cloud },
      { name: "BigQuery", icon: Database },
      { name: "SQL Server", icon: Server },
      { name: "Mongoose", icon: Database },
      { name: "Prisma", icon: Layers },
      { name: "Drizzle", icon: Flame },
    ],
  },
  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    span: "lg:col-span-5",
    featured: false,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Tableau", icon: LineChart },
      { name: "Pandas", icon: Terminal },
      { name: "NumPy", icon: Cpu },
      { name: "Scikit-learn", icon: BrainCircuit },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: LineChart },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    span: "lg:col-span-7",
    featured: false,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "EC2", icon: Server },
      { name: "Elastic Beanstalk", icon: Layers },
      { name: "Docker", icon: Boxes },
      { name: "Azure", icon: Cloud },
      { name: "Snowflake", icon: Database },
      { name: "Git", icon: Workflow },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="Technical expertise"
        title="My technical toolkit."
        description="Technologies and tools I use to build applications, develop intelligent systems, and work with data."
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <StaggerItem
              key={group.title}
              className={`sm:col-span-1 ${group.span}`}
            >
              <SpotlightCard className="h-full p-6 md:p-7 relative overflow-hidden group/card">
                {group.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/25 blur-3xl animate-pulse"
                  />
                )}

                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-500 group-hover/card:-rotate-3 group-hover/card:scale-110 shadow-sm">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>

                  <span className="font-mono text-xs font-medium rounded-full bg-accent/10 px-2.5 py-1 text-accent">
                    {group.skills.length} techs
                  </span>
                </div>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="group/pill inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-foreground/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/10 hover:text-foreground hover:shadow-md cursor-default"
                      >
                        <SkillIcon size={13} className="text-muted transition-colors group-hover/pill:text-accent" />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}