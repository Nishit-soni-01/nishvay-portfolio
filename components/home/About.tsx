import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, Brain, Lightbulb, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building responsive applications and practical software solutions.",
    span: "md:col-span-2",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent systems, predictive models and automation.",
    span: "md:col-span-2",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning ideas and real-world challenges into meaningful solutions.",
    span: "md:col-span-2",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="About me"
        title={
          <>
            Curious mind. <span className="text-muted">Builder at heart.</span>
          </>
        }
      />

      <Stagger className="mt-12 grid gap-4 md:grid-cols-6">
        {/* Intro: tall tile */}
        <StaggerItem className="md:col-span-4 md:row-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between p-7 md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl"
            />

            <div className="relative">
              <p className="text-lg leading-8 md:text-xl md:leading-9">
                I&apos;m Nishit, an aspiring AI/ML Engineer and Software
                Developer passionate about building intelligent applications
                and solving real-world problems through technology.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-muted">
                I enjoy exploring machine learning, software development and
                emerging technologies while continuously improving my
                technical and problem-solving skills.
              </p>
            </div>

            <Link
              href="#projects"
              className="group/link relative mt-10 inline-flex w-fit items-center gap-2 font-semibold text-accent"
            >
              Explore my work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1"
              />
            </Link>
          </SpotlightCard>
        </StaggerItem>

        {/* Visual Profile Card Tile with Larger Location Widget & Tech Badge */}
        <StaggerItem className="md:col-span-2 md:row-span-2">
          <div className="group relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-border/80 bg-card/40 p-3 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 flex flex-col justify-between">
            
            {/* Optional Floating Top Badge */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md shadow-lg">
              <Sparkles size={12} className="text-accent animate-pulse" />
              <span>Open to Work</span>
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/50 flex-1">
              <Image
                src="/Professional.png"
                alt="Nishit Soni"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              
              {/* Larger, Bolder Location Widget */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/80 p-4 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:border-accent/40">
                <div className="flex items-center gap-3.5">
                  {/* Animated Live Status Dot */}
                  <span className="relative flex size-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3.5 rounded-full bg-emerald-500" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">
                      Nishit Soni
                    </p>
                    <p className="text-xs font-medium text-slate-300 flex items-center gap-1 mt-0.5">
                      <MapPin size={12} className="text-accent" /> Ghaziabad, India
                    </p>
                  </div>
                </div>

                {/* Timezone / Status Tag */}
                <div className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                  IST
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Highlights Row */}
        {highlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <StaggerItem key={highlight.title} className={highlight.span}>
              <SpotlightCard className="flex h-full flex-col justify-between p-6">
                <div>
                  <span className="mb-4 grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110">
                    <Icon size={22} />
                  </span>

                  <h3 className="font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {highlight.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}