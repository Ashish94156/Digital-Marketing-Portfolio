"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AudioAmbient } from "./AudioAmbient";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";
import { PROFILE } from "@/lib/constants";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Monogram */}
        <motion.a
          href="#scrolly-hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel text-white hover:border-cyan-400/40 transition-all group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#00f0ff]" />
          <div className="font-mono text-xs font-bold tracking-widest uppercase">
            {PROFILE.name.toUpperCase()}
            <span className="text-zinc-500 font-normal ml-2 hidden sm:inline">
              // GROWTH &amp; SEO
            </span>
          </div>
        </motion.a>

        {/* Center Nav Links (Desktop) */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel border-white/5"
        >
          <a
            href="#scrolly-hero"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            CANVAS
          </a>
          <a
            href="#work"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            CAMPAIGNS
          </a>
          <a
            href="#experience"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            EXPERIENCE
          </a>
          <a
            href="#tech"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            SKILLS MATRIX
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            CONTACT
          </a>
        </motion.nav>

        {/* Right Actions: Availability Badge + Audio Toggle + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="pointer-events-auto flex items-center gap-2 sm:gap-3"
        >
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
            <span>OPEN FOR ROLES</span>
          </div>

          <AudioAmbient />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-mono font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            <span>CONNECT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto md:hidden mt-3 p-4 rounded-2xl glass-panel bg-[#090d16]/95 border-white/10 flex flex-col gap-3 font-mono text-sm"
        >
          <a
            href="#scrolly-hero"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-zinc-300 hover:text-cyan-400"
          >
            01 // SCROLL EXPERIENCE
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-zinc-300 hover:text-cyan-400"
          >
            02 // CASE STUDIES
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-zinc-300 hover:text-cyan-400"
          >
            03 // EXPERIENCE
          </a>
          <a
            href="#tech"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-zinc-300 hover:text-cyan-400"
          >
            04 // SKILLS &amp; TOOLS
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-zinc-300 hover:text-cyan-400"
          >
            05 // CONTACT
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
