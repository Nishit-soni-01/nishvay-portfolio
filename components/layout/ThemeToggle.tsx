"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Same footprint as the real button so the navbar doesn't shift on hydrate
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="size-10 rounded-full"
        aria-label="Change theme"
      />
    );
  }

  // resolvedTheme maps "system" to the actual light/dark value
  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.88 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="grid size-10 place-items-center overflow-hidden rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
