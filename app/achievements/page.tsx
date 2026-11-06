import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Reveal from "@/components/ui/Reveal";

type Credential = {
  title: string;
  file: string;
  type: "image" | "pdf";
  category: string;
};

const credentials: Credential[] = [
  // Hackathons and competitions
  {
    title: "Hack Genesis '25 — International Finalist",
    file: "CERTIFICATE of Finalist in International level Hackthon Hack Gensis'25.png",
    type: "image",
    category: "Hackathons",
  },
  {
    title: "Hackamania — Finalist",
    file: "CERTIFICATE_of_Finalist_in_Hackamania_By_MicroSoft.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Young Turks 2025 — Certificate of Merit",
    file: "young_turks25_achievement.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "NextGen Hackathon 2025",
    file: "NextGen Hackathon2025 Participation Certificate-028[1].pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Biz Tech Ideathon 2025",
    file: "Biz Tech Ideathon 2025.pdf",
    type: "pdf",
    category: "Hackathons",
  },
  {
    title: "Cognizant Technoverse 2026",
    file: "Technoverse Hackathon 2026 by Cognizant.pdf",
    type: "pdf",
    category: "Hackathons",
  },

  // LeetCode
  {
    title: "50 Days Badge — 2025",
    file: "50 Days badge 2025.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "50 Days Badge — 2026",
    file: "50 Days badge 2026.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "100 Days Badge",
    file: "100 Day Badge.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "200 Days Badge",
    file: "200daysnew.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "365 Days Badge",
    file: "365days.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "SQL 50 Badge",
    file: "50 SQL Badge.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "October Daily Coding Challenge",
    file: "10oct.png",
    type: "image",
    category: "LeetCode",
  },
  {
    title: "Introduction to Pandas — LeetCode",
    file: "Introduction to Pandas.png",
    type: "image",
    category: "LeetCode",
  },

  // CodeChef
  {
    title: "50 Days Coding Streak — Gold",
    file: "CodeChefBadge 50 day strike gold.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "100 Days Coding Streak",
    file: "CodeChefBadge 100 day stike.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "250 Problems Solved — Silver",
    file: "CodeChefBadge 250 problem sliver.png",
    type: "image",
    category: "CodeChef",
  },
  {
    title: "Contest Contender — Bronze",
    file: "CodeChefBadge contentes bronze.png",
    type: "image",
    category: "CodeChef",
  },

  // Courses and certifications
  {
    title: "Complete Web Development",
    file: "Complete Web Development.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Machine Learning A-Z: AI, Python & R",
    file: "Machine Learning A-Z, Al, Python & R + ChatGPT Prize by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "The Ultimate MySQL Bootcamp",
    file: "The Ultimate MySQL Bootcamp Go from SQL Beginner to Expert by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Complete Data Analyst Bootcamp",
    file: "Complete Data Analyst Bootcamp From Basics To Adavance by Udemy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Data Science, Machine Learning, Deep Learning & NLP",
    file: "Complete Data Science,Machine Learning,DL,NLP Bootcamp.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Introduction to Data Science — Cisco",
    file: "introduction-to-data-science (1).png",
    type: "image",
    category: "Certifications",
  },
  {
    title: "Introduction to Data Science — Certificate",
    file: "IntrotoDataScienceUpdate20260414-31-kchbgl.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Python Essentials 1 — Cisco",
    file: "python-essentials-1.1 (1).png",
    type: "image",
    category: "Certifications",
  },
  {
    title: "Python Essentials 1 — Certificate",
    file: "PythonEssentials1Update20260414-31-h9acqy.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Python Pandas Basics",
    file: "Python Pandas Basics Course by simpliylearn.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    file: "GenAI Powered Data Analytics Job Simulation by TATA.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Prompt Engineering for Everyone",
    file: "Prompt Engineering by IBMSkillsNetwork.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Practice Rust",
    file: "Practice Rust.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "Practice Go",
    file: "nishit_2004-Practice Go.pdf",
    type: "pdf",
    category: "Certifications",
  },
  {
    title: "500 Difficulty Rating",
    file: "nishit_2004-500 difficulty rating.pdf",
    type: "pdf",
    category: "Certifications",
  },
];

const sections = [
  {
    name: "Hackathons",
    description: "Hackathon, ideathon and competition recognitions.",
  },
  {
    name: "LeetCode",
    description: "Coding streaks and problem-solving milestones.",
  },
  {
    name: "CodeChef",
    description: "Problem-solving, streak and contest badges.",
  },
  {
    name: "Certifications",
    description: "Courses and technical learning credentials.",
  },
];

function CredentialCard({ item }: { item: Credential }) {
  const fileUrl = `/certificates/${encodeURIComponent(item.file)}`;

  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5">
      {item.type === "image" ? (
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-black/5 p-4 dark:bg-white/5"
        >
          <div className="relative h-56 w-full">
            <Image
              src={fileUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </a>
      ) : (
        <div className="relative h-56 overflow-hidden bg-white/90 dark:bg-zinc-900/90">
          <iframe
            src={`${fileUrl}#page=1&toolbar=0&navpanes=0&view=FitH`}
            title={`${item.title} preview`}
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-grow flex-col justify-between border-t border-border/60 p-6">
        <h3 className="font-semibold leading-snug">{item.title}</h3>

        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80 hover:underline"
        >
          {item.type === "image" ? "View full image" : "View certificate"}
          <ExternalLink size={15} />
        </a>
      </div>
    </article>
  );
}

export default function AchievementsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 pt-32 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-5 py-2.5 text-sm font-medium text-muted backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-foreground"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>
          </Reveal>

          <header className="mb-16">
            <Reveal>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Recognition & Growth
                </p>
                <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-6xl">
                  Achievements & <span className="text-muted">Certifications.</span>
                </h1>
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                A collection of my hackathon recognitions, coding milestones,
                professional certifications and continuous learning journey.
              </p>

              <p className="mt-4 text-sm font-medium text-accent">
                {credentials.length} credentials across {sections.length} categories
              </p>
            </Reveal>
          </header>

          {sections.map((section) => {
            const items = credentials.filter(
              (item) => item.category === section.name
            );

            if (items.length === 0) return null;

            return (
              <Reveal key={section.name} className="mb-20">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {section.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <CredentialCard key={item.file} item={item} />
                  ))}
                </div>
              </Reveal>
            );
          })}

          <div className="border-t border-border/80 pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft size={15} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}