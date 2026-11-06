import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2 } from "lucide-react";
import { projectCategories } from "@/data/projects";
import ArchitectureDiagram from "@/components/home/ArchitectureDiagram";
import ProjectLinks from "@/components/home/ProjectLinks";
import RiverflowArchitectureDiagram from "@/components/home/RiverflowArchitectureDiagram";
import VideTubeArchitectureDiagram from "@/components/home/VideTubeArchitectureDiagram";
import VideTubeDatabaseDiagram from "@/components/home/VideTubeArchitectureDiagram";
import SentinelArchitectureDiagram from "@/components/home/SentinelArchitectureDiagram";
import LoanDefaultArchitectureDiagram from "@/components/home/LoanDefaultArchitectureDiagram";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectCategories.flatMap((category) =>
    category.projects
      .filter((project) => project.slug)
      .map((project) => ({
        slug: project.slug!,
      }))
  );
}

function ProjectLoading() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 md:px-12">
      <div className="animate-pulse space-y-6">
        <div className="h-5 w-32 rounded bg-card" />
        <div className="h-12 w-2/3 rounded bg-card" />
        <div className="h-5 w-1/2 rounded bg-card" />
        <div className="aspect-video rounded-2xl bg-card" />
      </div>
    </main>
  );
}

async function ProjectDetailsContent({ params }: PageProps) {
  const { slug } = await params;

  const project = projectCategories
    .flatMap((category) => category.projects)
    .find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 md:px-12">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
      >
        <ArrowLeft size={17} />
        Back to projects
      </Link>

      <div className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Project showcase
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-xl text-accent">
          {project.subtitle}
        </p>

        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          {project.description}
        </p>

        <div className="mt-6">
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 ? (
        <div className="mt-12 grid gap-5">
          {project.gallery.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1600}
                height={900}
                priority={index === 0 && project.slug === "loan-default-analysis"}
                loading={index === 0 && project.slug === "loan-default-analysis" ? "eager" : "lazy"}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : project.image ? (
        <div className="relative mt-12 aspect-video overflow-hidden rounded-2xl border border-border">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={project.slug === "loan-default-analysis"}
            loading={project.slug === "loan-default-analysis" ? "eager" : "lazy"}
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="mt-12 flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card text-muted">
          <Code2 size={40} className="text-accent" />
          <p>{project.title} preview</p>
        </div>
      )}

      {project.slug === "authify" && (
        <div className="mt-14">
          <ArchitectureDiagram />
        </div>
      )}

      {project.slug === "riverflow" && (
        <RiverflowArchitectureDiagram />
      )}

      {project.slug === "videotube-api" && (
        <VideTubeArchitectureDiagram />
      )}

      {project.slug === "videotube-api" && (
        <VideTubeDatabaseDiagram />
      )}

      {project.slug === "sentinel-ai" && (
        <SentinelArchitectureDiagram />
      )}

      {project.slug === "loan-default-analysis" && (
        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-bold">Data Architecture</h2>
          <LoanDefaultArchitectureDiagram />
        </section>
      )}

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_280px]">
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Project overview</h2>
            <p className="mt-4 leading-8 text-muted">
              {project.overview ?? project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h2 className="text-2xl font-bold">Key features</h2>

              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-muted">
                    <span className="text-accent">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold">
                API Documentation
              </h2>

              <p className="mt-3 leading-7 text-muted">
                Selected REST API endpoints implemented in the VideTube
                backend, covering authentication, video management,
                and user interactions.
              </p>

              <div className="mt-6 space-y-3">
                {project.apiEndpoints.map((endpoint, index) => (
                  <div
                    key={`${endpoint.method}-${endpoint.path}-${index}`}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-md px-3 py-1 text-xs font-bold ${
                          endpoint.method === "GET"
                            ? "bg-blue-500/15 text-blue-500"
                            : endpoint.method === "POST"
                              ? "bg-green-500/15 text-green-500"
                              : endpoint.method === "PUT"
                                ? "bg-orange-500/15 text-orange-500"
                                : "bg-purple-500/15 text-purple-500"
                        }`}
                      >
                        {endpoint.method}
                      </span>

                      <code className="break-all text-sm font-medium">
                        {endpoint.path}
                      </code>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {endpoint.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold">
                Project Metrics
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Key quantitative results and performance markers for this project.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <p className="text-2xl font-bold text-accent">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-xs text-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div>
              <h2 className="text-2xl font-bold">Technical challenges</h2>

              <ul className="mt-5 space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 text-muted">
                    <span className="text-accent">↗</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">Technology stack</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-2 text-xs text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}

export default function ProjectDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}