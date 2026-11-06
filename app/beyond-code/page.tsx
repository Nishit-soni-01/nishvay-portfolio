import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import BeyondCode from "@/components/home/BeyondCode";
import Poetry from "@/components/home/Poetry";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Beyond Code | Nishit Soni",
  description:
    "Explore my creative side through art, sketching, guitar, poetry, and content creation.",
};

export default function BeyondCodePage() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal y={12}>
            <Link
              href="/"
              className="group glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Home
            </Link>
          </Reveal>
        </div>

        <BeyondCode />
        <Poetry />
      </main>
    </>
  );
}
