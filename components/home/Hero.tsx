"use client";

import Image from "next/image";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20">

      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7">

            {/* Availability Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-950 backdrop-blur-md dark:text-emerald-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to opportunities
              </div>
            </Reveal>

            {/* Greeting & Main Name */}
            <Reveal delay={0.1}>
              <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-slate-950 dark:text-accent">
                Hello, I&apos;m
              </p>

              <h1 className="mt-2 text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">
                Nishit<span className="text-accent">.</span>
              </h1>
            </Reveal>

            {/* Professional Title */}
            <Reveal delay={0.2}>
              <h2 className="mt-3 text-xl font-extrabold text-slate-950 dark:text-slate-200 md:text-2xl">
                AI/ML Engineer &amp; Software Developer
              </h2>
            </Reveal>

            {/* Introduction */}
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-base font-bold leading-relaxed text-slate-900 dark:text-slate-300 sm:text-lg">
                I am an aspiring AI/ML Engineer and Software Developer
                passionate about building intelligent systems and scalable
                applications. I enjoy solving real-world problems through
                machine learning, data science, and full-stack development.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.4} className="mt-10">
              <div className="flex flex-wrap items-center gap-4">

                {/* Explore Projects */}
                <Magnetic>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background shadow-xl shadow-accent/10 transition-all duration-300 hover:opacity-90 active:scale-95"
                  >
                    <span>Explore my work</span>
                    <ArrowUpRight size={18} />
                  </a>
                </Magnetic>

                {/* Contact */}
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-bold text-slate-950 backdrop-blur-xl transition-all duration-300 hover:border-accent hover:text-accent active:scale-95 dark:text-white"
                  >
                    Get in touch
                  </a>
                </Magnetic>

                {/* Resume */}
                <Magnetic>
                  <a
                    href="/resume.pdf"
                    download="Nishit-Soni-Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-bold text-slate-950 backdrop-blur-xl transition-all duration-300 hover:border-accent hover:text-accent active:scale-95 dark:text-white"
                  >
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                </Magnetic>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Animated Profile Image */}
          <div className="flex justify-center lg:col-span-5">
            <Reveal delay={0.2} className="relative w-full max-w-md">

              <div className="relative mx-auto flex size-72 items-center justify-center md:size-88">

                {/* Outer Dashed Orbit Ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-accent/40 dark:border-purple-400/30"
                />

                {/* Secondary Counter-Rotating Geometric Ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-5 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-pink-500/30 border-t-accent"
                />

                {/* Top-Left Diamond */}
                <div
                  aria-hidden="true"
                  className="absolute -top-3 left-6 size-3 rotate-45 animate-bounce border-2 border-accent bg-background"
                />

                {/* Top-Right Circle Node */}
                <div
                  aria-hidden="true"
                  className="absolute -right-2 top-4 size-4 animate-pulse rounded-full border-2 border-pink-500 bg-background"
                />

                {/* Bottom-Left Geometric Node */}
                <div
                  aria-hidden="true"
                  className="absolute -left-3 bottom-6 size-3.5 rotate-12 animate-pulse border-2 border-indigo-500 bg-indigo-500/20"
                />

                {/* Bottom-Right Concentric Ring Accent */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 right-10 flex size-6 items-center justify-center rounded-full border border-accent/60"
                >
                  <div className="size-2 animate-ping rounded-full bg-accent" />
                </div>

                {/* Ambient Backlight Glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-purple-600/40 via-pink-500/30 to-indigo-600/40 blur-2xl"
                />

                {/* Profile Image & Glass Backplate */}
                <div className="relative size-full overflow-hidden rounded-full border-2 border-slate-950/20 bg-background/80 p-1.5 shadow-2xl backdrop-blur-md dark:border-white/20">

                  <div className="relative size-full overflow-hidden rounded-full border border-border">
                    <Image
                      src="/profile.jpeg"
                      alt="Nishit Soni"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 280px, 340px"
                    />
                  </div>

                </div>

                {/* AI & ML Floating Badge */}
                <div className="absolute -right-4 top-10 animate-bounce transition-transform duration-500 hover:scale-110">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg backdrop-blur-xl dark:text-white">
                    <span className="size-2 animate-pulse rounded-full bg-accent" />
                    AI &amp; ML
                  </div>
                </div>

                {/* Software Development Floating Badge */}
                <div className="absolute -bottom-2 -left-6 transition-transform duration-500 hover:scale-110">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg backdrop-blur-xl dark:text-white">
                    <span className="size-2 animate-pulse rounded-full bg-purple-400" />
                    Software Development
                  </div>
                </div>

                {/* Royal Lavender Sparkle */}
                <div
                  aria-hidden="true"
                  className="absolute -top-5 left-12 animate-pulse text-[#C4B5FD] drop-shadow-[0_0_12px_rgba(196,181,253,0.7)] dark:drop-shadow-[0_0_16px_rgba(196,181,253,0.9)]"
                >
                  <Sparkles size={26} strokeWidth={1.8} />
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}