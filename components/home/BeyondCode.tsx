import Image from "next/image";
import { ArrowUpRight, Palette, Music2, PenLine } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";

const creativeInterests = [
  {
    title: "Art & Sketching",
    description:
      "I enjoy drawing and sketching, turning ideas and imagination into visual art.",
    icon: Palette,
    span: "md:col-span-3",
    wide: false,
  },
  {
    title: "Music & Guitar",
    description: "Exploring music and learning guitar, one chord at a time.",
    icon: Music2,
    span: "md:col-span-2",
    wide: false,
  },
  {
    title: "Poetry & Writing",
    description:
      "Expressing thoughts, emotions, and experiences through poetry and words.",
    icon: PenLine,
    span: "md:col-span-5",
    wide: true,
  },
];

const artworks = [
  { file: "art-01.jpeg", title: "Expressive Portrait" },
  { file: "art-02.jpeg", title: "Charcoal Figure Study" },
  { file: "art-03.jpeg", title: "Ink Character Illustration" },
  { file: "art-04.jpeg", title: "A Quiet Window" },
  { file: "art-05.jpeg", title: "Traditional Portrait" },
  { file: "art-06.jpeg", title: "Dark Fantasy" },
  { file: "art-07.jpeg", title: "Warrior Illustration" },
  { file: "art-08.jpeg", title: "Mythical Character" },
  { file: "art-09.jpeg", title: "Bird Study" },
  { file: "art-10.jpeg", title: "Expressive Eyes" },
  { file: "art-11.jpeg", title: "Abstract Ink Art" },
];

const platforms = [
  {
    name: "Instagram",
    description: "Explore my artwork and sketches",
    href: "https://www.instagram.com/integrals_of_shades/",
  },
  {
    name: "YouTube",
    description: "Watch my creative work",
    href: "https://www.youtube.com/@integralsofshades",
  },
  {
    name: "Pinterest",
    description: "Discover my art collection",
    href: "https://in.pinterest.com/Nishit_soni/",
  },
];

/**
 * Spans for the 4-column desktop grid (11 items, no gaps with dense flow):
 * one 2x2 feature, one tall tile, one wide tile.
 */
function artworkSpan(index: number) {
  if (index === 0) return "lg:col-span-2 lg:row-span-2";
  if (index === 6) return "lg:row-span-2";
  if (index === 10) return "lg:col-span-2";
  return "";
}

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12"
    >
      <SectionHeading
        eyebrow="Beyond technology"
        title="Beyond the Code."
        description="Beyond technology, I find my expression through art, music, and words. Whether it is sketching something meaningful, learning guitar, or writing poetry, creativity has always been a part of who I am."
      />

      {/* Interests */}
      <Stagger className="mt-12 grid gap-4 md:grid-cols-5">
        {creativeInterests.map((item) => {
          const Icon = item.icon;

          return (
            <StaggerItem key={item.title} className={item.span}>
              <SpotlightCard
                className={`flex h-full flex-col p-6 md:p-7 ${
                  item.wide ? "md:flex-row md:items-center md:gap-6" : ""
                }`}
              >
                <span
                  className={`mb-5 grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-accent/10 text-accent transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110 ${
                    item.wide ? "md:mb-0" : ""
                  }`}
                >
                  <Icon size={24} />
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Artwork */}
      <div className="mt-24">
        <SectionHeading
          level="h3"
          eyebrow="A glimpse of my creativity"
          title="My Artwork."
          description="A collection of sketches and illustrations created with imagination, patience, and a little ink."
        />

        <Stagger
          stagger={0.06}
          className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-3 lg:auto-rows-[280px] lg:grid-cols-4 lg:grid-flow-dense"
        >
          {artworks.map((artwork, index) => (
            <StaggerItem key={artwork.file} className={artworkSpan(index)}>
              <div className="glass-card group relative h-full">
                <Image
                  src={`/artwork/${artwork.file}`}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-12 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">
                    {artwork.title}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Platforms */}
      <div className="mt-24">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-tight">
            Explore my creative space
          </h3>
        </Reveal>

        <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
          {platforms.map((platform) => (
            <StaggerItem key={platform.name}>
              <SpotlightCard
                href={platform.href}
                external
                className="flex h-full items-center justify-between gap-4 p-5"
              >
                <div>
                  <h4 className="font-semibold">{platform.name}</h4>
                  <p className="mt-1 text-sm text-muted">
                    {platform.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
