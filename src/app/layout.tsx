import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PROFILE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PROFILE.name} — Digital Marketing Specialist, SEO & Growth Engineer`,
  description:
    "Data-driven digital marketing portfolio of Ashish Singh. Specializing in Search Engine Optimization (SEO), Social Media Marketing, Google Ads, Meta Ads, and WordPress web architecture with a B.Tech CSE foundation.",
  keywords: [
    "Ashish Singh",
    "Digital Marketing",
    "SEO Specialist",
    "Search Engine Optimization",
    "Social Media Marketing",
    "WordPress Developer",
    "Google Ads",
    "Meta Ads",
    "Content Marketing",
    "Lovely Professional University",
    "LPU CSE",
    "Growth Marketing",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} — Digital Marketing & SEO Portfolio`,
    description:
      "Explore high-performance SEO campaigns, paid ad funnels, and WordPress web architecture by Ashish Singh (LPU CSE '24).",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070b12] text-[#e6edf3] min-h-screen antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
