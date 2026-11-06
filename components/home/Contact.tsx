import { Mail, MapPin, ArrowUpRight, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const links = [
  {
    name: "Email",
    note: "Let's connect",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ns2004.soni@gmail.com",
    icon: <Mail size={22} />,
    span: "sm:col-span-2 lg:col-span-4",
    featured: true,
  },
  {
    name: "GitHub",
    note: "Explore my code",
    href: "https://github.com/Nishit-soni-01",
    icon: <Code2 size={22} />,
    span: "lg:col-span-2",
    featured: false,
  },
  {
    name: "LinkedIn",
    note: "Connect professionally",
    href: "https://www.linkedin.com/in/nishit-soni-in/",
    icon: <span className="text-lg font-bold">in</span>,
    span: "lg:col-span-2",
    featured: false,
  },
  {
    name: "X (Twitter)",
    note: "Follow my updates",
    href: "https://x.com/NishitSoni_042",
    icon: <span className="text-lg font-bold">𝕏</span>,
    span: "lg:col-span-2",
    featured: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 relative"
    >
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's work together."
        description="Have an opportunity, a project idea, or just want to connect? I'd love to hear from you."
      />

      <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {links.map((link) => (
          <StaggerItem key={link.name} className={link.span}>
            <SpotlightCard
              href={link.href}
              external
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-card/40 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 ${
                link.featured ? "min-h-56 md:p-8" : "min-h-40"
              }`}
            >
              {link.featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-accent/30 blur-3xl animate-pulse"
                />
              )}

              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/20 bg-accent/10 text-accent shadow-inner transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  {link.icon}
                </span>

                <div className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/40 group-hover:text-accent">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="relative mt-8">
                <p
                  className={`font-bold tracking-tight text-foreground transition-colors group-hover:text-accent ${
                    link.featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {link.name}
                </p>
                <p className="mt-1.5 text-sm font-medium text-muted">
                  {link.note}
                </p>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}

        {/* Location Card */}
        <StaggerItem className="lg:col-span-2">
          <SpotlightCard className="group relative flex h-full min-h-40 flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-card/40 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-accent/60 hover:shadow-2xl">
            <span className="grid size-12 place-items-center rounded-2xl border border-white/20 bg-accent/10 text-accent shadow-inner transition-transform duration-500 group-hover:scale-110">
              <MapPin size={22} />
            </span>

            <div className="mt-8">
              <p className="text-xl font-bold tracking-tight text-foreground">
                Location
              </p>
              <p className="mt-1.5 text-sm font-medium text-muted leading-relaxed">
                Ghaziabad, Uttar Pradesh, India
              </p>
            </div>
          </SpotlightCard>
        </StaggerItem>
      </Stagger>

      <Reveal>
        <p className="mt-20 text-center text-xs font-medium text-muted">
          © 2026 Nishit Soni. Built with Next.js, Tailwind CSS and Framer Motion.
        </p>
      </Reveal>
    </section>
  );
}