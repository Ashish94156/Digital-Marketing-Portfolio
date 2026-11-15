"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Cpu, Globe, Search, BarChart3 } from "lucide-react";
import { PROFILE } from "@/lib/constants";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay: React.FC<OverlayProps> = ({ scrollYProgress }) => {
  // Section 1: Hero (0% - 22%)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -80]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.95]);

  // Section 2: "I engineer digital growth" (25% - 52%) - Left Aligned
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.3, 0.44, 0.52],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.22, 0.34, 0.52],
    [70, 0, -70]
  );
  const s2X = useTransform(scrollYProgress, [0.22, 0.34], [-40, 0]);

  // Section 3: "Bridging marketing and engineering" (55% - 82%) - Right Aligned
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.53, 0.62, 0.74, 0.82],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.53, 0.65, 0.82],
    [70, 0, -70]
  );
  const s3X = useTransform(scrollYProgress, [0.53, 0.65], [40, 0]);

  // Section 4: Transition to Projects (84% - 100%) - Center Bottom
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.83, 0.92, 1],
    [0, 1, 1]
  );
  const s4Y = useTransform(scrollYProgress, [0.83, 0.95], [50, 0]);

  return (
    <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none flex items-center justify-center">
      {/* SECTION 1: 0% - Center Hero */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6 border-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-300" />
          <span>Digital Marketer &amp; Growth Specialist • LPU CSE &apos;24</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-5xl">
          {PROFILE.name.toUpperCase()}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-cyan-200 to-cyan-400 text-glow-cyan font-light mt-2 text-2xl sm:text-4xl md:text-5xl">
            DIGITAL MARKETING • SEO • WORDPRESS
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Driving organic visibility, high-converting Google &amp; Meta ad campaigns, and modern WordPress web platforms backed by a technical engineering foundation.
        </p>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-zinc-400 font-mono text-[11px] tracking-widest uppercase">
          <div className="w-5 h-9 rounded-full border border-zinc-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
            />
          </div>
          <span className="text-zinc-400 text-[10px] mt-1">Scroll to scrub sequence</span>
        </div>
      </motion.div>

      {/* SECTION 2: 30% - Left Aligned */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y, x: s2X }}
        className="absolute left-6 md:left-12 lg:left-20 max-w-xl text-left"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>01 // GROWTH STRATEGY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          I build digital{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            growth.
          </span>
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed">
          From technical SEO audits that conquer Google rankings to multi-platform ad funnels across Meta and Google Ads. Transforming impressions into verified revenue.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 pointer-events-auto">
          {["On-Page & Off-Page SEO", "Google Ads & PPC", "Social Media Marketing", "WordPress Architecture", "Content Marketing"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md glass-panel text-xs font-mono text-zinc-300 border-zinc-700/60 hover:border-cyan-400/40 transition-colors"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </motion.div>

      {/* SECTION 3: 60% - Right Aligned */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y, x: s3X }}
        className="absolute right-6 md:right-12 lg:right-20 max-w-xl text-right flex flex-col items-end"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-purple-400 mb-3">
          <span>02 // ENGINEERING FOUNDATION</span>
          <Cpu className="w-3.5 h-3.5" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          Bridging design and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            engineering.
          </span>
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed text-right">
          Armed with a B.Tech in Computer Science &amp; Engineering from LPU, I don&apos;t just run ad campaigns—I analyze algorithms, optimize crawl budgets, write schema data, and build lightning-fast web experiences.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-panel border-purple-500/20 text-xs font-mono text-zinc-300">
          <BarChart3 className="w-4 h-4 text-purple-400" />
          <span>DATA-DRIVEN ROI • CORE WEB VITALS OPTIMIZATION</span>
        </div>
      </motion.div>

      {/* SECTION 4: 85% - 100% - Bottom Guiding Transition */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute bottom-16 flex flex-col items-center text-center px-4"
      >
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          03 // CASE STUDIES
        </div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          EXPLORE CAMPAIGNS &amp; BUILDS
        </h3>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-4 p-2 rounded-full glass-panel border-white/10 text-cyan-400"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Overlay;
