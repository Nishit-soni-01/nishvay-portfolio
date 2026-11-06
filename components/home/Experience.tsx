import Image from "next/image";
import {
  BriefcaseBusiness,
  ExternalLink,
  Trophy,
  CalendarDays,
  Award,
  Check,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const achievements = [
  {
    title: "Hackamania 2025",
    description:
      "Achieved finalist position in Hackamania, organized by The Elites.",
    year: "2025",
  },
  {
    title: "Hack Genesis '25",
    description:
      "Selected as an international-level finalist in the Hack Genesis hackathon.",
    year: "2025",
  },
];

const responsibilities = [
  "Contributed to full-stack web development initiatives.",
  "Implemented interactive application features.",
  "Optimized user interface workflows.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="My journey"
        title="Experience & Recognition."
        description="My professional experience, milestones, and achievements along the way."
      />

      {/* Internship + certificate */}
      <Stagger className="mt-12 grid gap-4 lg:grid-cols-5">
        <StaggerItem className="lg:col-span-3">
          <SpotlightCard className="h-full p-6 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
                  <BriefcaseBusiness size={24} />
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Web Development Intern
                  </h3>
                  <p className="text-sm text-muted">
                    Gray India Consulting Private Limited
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                <Check size={13} />
                Completed
              </span>
            </div>

            <div className="relative mt-6 flex items-center gap-2 text-sm text-muted">
              <CalendarDays size={16} />
              10 June 2026 – 10 July 2026
            </div>

            <ul className="relative mt-6 space-y-3 text-sm leading-7 text-muted">
              {responsibilities.map((line) => (
                <li key={line} className="flex gap-3">
                  <Check
                    size={16}
                    className="mt-1.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </StaggerItem>

        <StaggerItem className="lg:col-span-2">
          <SpotlightCard className="flex h-full flex-col p-4 md:p-5">
            <div className="mb-4 flex items-center gap-2 px-1">
              <Award className="text-accent" size={20} />
              <h4 className="font-semibold">Internship Certificate</h4>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-foreground/[0.03] p-2">
              <Image
                src="/certificates/gray-india-internship.jpeg"
                alt="Nishit Soni's Gray India Consulting internship certificate"
                width={1400}
                height={1100}
                className="h-auto w-full rounded-xl object-contain shadow-sm transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <a
              href="/certificates/gray-india-internship.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-semibold text-accent"
            >
              View full certificate
              <ExternalLink
                size={16}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </SpotlightCard>
        </StaggerItem>
      </Stagger>

      {/* Achievements */}
      <div className="mt-20">
        <Reveal className="mb-7 flex items-center gap-3">
          <Trophy className="text-accent" size={24} />
          <h3 className="text-2xl font-semibold tracking-tight">
            Achievements
          </h3>
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-3">
          {achievements.map((item) => (
            <StaggerItem key={item.title}>
              <SpotlightCard className="h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold">{item.title}</h4>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted">
                    {item.year}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </SpotlightCard>
            </StaggerItem>
          ))}

          <StaggerItem>
            <SpotlightCard
              href="/achievements"
              className="flex h-full min-h-40 flex-col justify-between p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 size-48 rounded-full bg-accent/25 blur-3xl"
              />
              <ArrowUpRight
                size={22}
                className="relative self-end text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              />
              <span className="relative text-lg font-semibold tracking-tight">
                View All Achievements
              </span>
            </SpotlightCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
