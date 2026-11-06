
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Beyond Code", href: "/beyond-code" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b transition-all duration-300
        ${
          scrolled
            ? "border-slate-900/10 bg-white/85 py-3 shadow-lg shadow-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/85"
            : "border-slate-900/5 bg-white/30 py-4 backdrop-blur-md dark:border-white/5 dark:bg-zinc-950/20"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

        
       {/* Brand Logo */}
<Link
  href="/"
  onClick={closeMobileMenu}
  aria-label="Nishit Soni - Home"
  className="group flex shrink-0 items-center gap-2"
>
  <div
    className="
      relative grid size-10 place-items-center
      rounded-xl
      bg-slate-950 text-white
      shadow-md shadow-black/15
      transition-all duration-300
      group-hover:scale-105
      group-hover:shadow-lg
      dark:bg-white
      dark:text-slate-950
      dark:shadow-white/10
    "
  >
    <span className="text-base font-black tracking-wider">
      NS
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative whitespace-nowrap
                  text-sm font-bold tracking-tight
                  text-slate-950
                  transition-colors duration-300
                  hover:text-indigo-700
                  dark:text-white
                  dark:hover:text-indigo-400

                  after:absolute after:-bottom-1.5 after:left-0
                  after:h-0.5 after:w-0
                  after:rounded-full after:bg-indigo-600
                  after:transition-all after:duration-300
                  hover:after:w-full
                  dark:after:bg-indigo-400
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4 border-l border-slate-900/15 pl-5 dark:border-white/15">
            <ThemeToggle />

            {/* Let's Talk Button */}
            <Link
              href="#contact"
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-slate-950 px-6 py-3
                text-sm font-bold text-white
                shadow-lg shadow-slate-950/15
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-indigo-700
                hover:shadow-indigo-500/25
                active:scale-95
                dark:bg-white
                dark:text-slate-950
                dark:hover:bg-indigo-200
              "
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="
              rounded-xl
              border border-slate-900/15
              bg-white/80 p-2.5
              text-slate-950
              shadow-sm backdrop-blur-xl
              transition-all duration-300
              hover:border-indigo-500
              hover:text-indigo-700
              dark:border-white/15
              dark:bg-zinc-900/80
              dark:text-white
              dark:hover:text-indigo-400
            "
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="
            absolute left-0 right-0 top-full
            border-b border-slate-900/10
            bg-white/95 p-6
            shadow-xl shadow-black/5
            backdrop-blur-2xl
            dark:border-white/10
            dark:bg-zinc-950/95
            lg:hidden
          "
        >
          <nav aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                    rounded-xl px-4 py-3
                    text-base font-bold
                    text-slate-950
                    transition-all duration-200
                    hover:bg-indigo-50
                    hover:text-indigo-700
                    dark:text-white
                    dark:hover:bg-white/10
                    dark:hover:text-indigo-400
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Let's Talk CTA */}
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="
              mt-5 inline-flex w-full items-center
              justify-center gap-2
              rounded-full
              bg-slate-950 py-3.5
              text-sm font-bold text-white
              shadow-lg
              transition-all duration-300
              hover:bg-indigo-700
              active:scale-95
              dark:bg-white
              dark:text-slate-950
              dark:hover:bg-indigo-200
            "
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      )}
    </header>
  );
}
