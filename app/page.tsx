import Link from "next/link";
import { ArrowUpRight, Music2, Palette, PenLine } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AnimatedStats from "@/components/home/AnimatedStats";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Magnetic from "@/components/ui/Magnetic";

const creativeIcons = [Palette, Music2, PenLine];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AnimatedStats />
        <About />

        {/* Beyond Technology Callout Banner */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <Reveal>
            <SpotlightCard className="p-7 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-1/4 size-64 rounded-full bg-accent/15 blur-3xl"
              />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-medium text-accent">
                    Beyond technology
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    There&apos;s more to me than code.
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted md:text-base">
                    Discover my creative side through art, sketching,
                    guitar, poetry and content creation.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-5 md:items-end">
                  <div aria-hidden="true" className="flex gap-2">
                    {creativeIcons.map((Icon, i) => (
                      <span
                        key={i}
                        className="grid size-10 place-items-center rounded-xl border border-border bg-foreground/[0.03] text-accent transition-transform duration-500 group-hover:-translate-y-1"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <Icon size={18} />
                      </span>
                    ))}
                  </div>

                  <Magnetic strength={0.3}>
                    <Link
                      href="/beyond-code"
                      className="group/cta inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                    >
                      Explore Beyond Code
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                      />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}