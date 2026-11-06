"use client";

import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Award, Code2, Flame, Layers } from "lucide-react";

const stats = [
  {
    icon: <Code2 className="size-5 text-accent" />,
    value: "25+",
    label: "Projects Completed",
    description: "Web apps, AI/ML & databases",
  },
  {
    icon: <Flame className="size-5 text-amber-500" />,
    value: "365+",
    label: "LeetCode Streak",
    description: "Knight Badge Rating",
  },
  {
    icon: <Award className="size-5 text-purple-400" />,
    value: "Finalist",
    label: "Hack Genesis '25",
    description: "International level hackathon",
  },
  {
    icon: <Layers className="size-5 text-emerald-400" />,
    value: "Full-Stack",
    label: "End-to-End Systems",
    description: "Next.js, Node & ESP32",
  },
];

export default function AnimatedStats() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 md:px-12">
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <StaggerItem key={idx}>
            <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
              />
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl border border-border/60 bg-accent/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {stat.icon}
                </span>
                <span className="text-2xl font-black tracking-tight text-foreground">
                  {stat.value}
                </span>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-sm text-foreground/90">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {stat.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}