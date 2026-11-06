import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Nishit Soni | AI/ML Engineer & Full-Stack Developer",
    template: "%s | Nishit Soni",
  },
  description:
    "Explore Nishit Soni's portfolio featuring AI/ML projects, full-stack development, machine learning models, data analytics, technical skills and software engineering work.",
  applicationName: "Nishit Soni Portfolio",
  authors: [{ name: "Nishit Soni" }],
  creator: "Nishit Soni",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden antialiased">
        <ThemeProvider>
          {/* Active background rendering day.jpg / night.jpg */}
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}