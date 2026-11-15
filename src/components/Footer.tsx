"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Terminal, Sparkles, Heart } from "lucide-react";
import { PROFILE } from "@/lib/constants";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 w-full py-16 px-6 md:px-12 bg-[#05080e] border-t border-white/5 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-zinc-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span>{PROFILE.name.toUpperCase()}</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="text-zinc-400">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED • B.TECH CSE (LPU &apos;24)
          </span>
        </div>

        {/* Live Terminal Clock & Engine Info */}
        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 rounded-full glass-panel border-white/5 text-zinc-400 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>LOCAL: {timeString || "00:00:00 UTC"}</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-zinc-400 text-[11px]">
            <span>EXPERTISE:</span>
            <span className="text-cyan-400 font-semibold">SEO &amp; GROWTH OPS</span>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-zinc-400 hover:text-white hover:border-cyan-400/40 transition-all select-none"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1 text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
