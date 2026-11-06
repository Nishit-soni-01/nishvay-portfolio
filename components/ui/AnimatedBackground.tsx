"use client";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Light Mode Video Background (Full Sharpness) */}
      <div className="absolute inset-0 dark:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-100"
        >
          <source src="/day-bg.mp4" type="video/mp4" />
        </video>
        {/* Subtle top/bottom vignette only — keeps the center crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
      </div>

      {/* Dark Mode Video Background */}
      <div className="hidden absolute inset-0 dark:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-85"
        >
          <source src="/night-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}