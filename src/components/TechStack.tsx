"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SKILLS_MATRIX, PROFILE } from "@/lib/constants";
import { Cpu, Terminal, TrendingUp, GraduationCap, CheckCircle2, Award } from "lucide-react";

export const TechStack: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particleCount, setParticleCount] = useState<number>(80);

  // Real-time Canvas 2D interactive generative wave simulator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouse = { x: canvas.width / 2, y: canvas.height / 2, radius: 100 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.03;
      ctx.fillStyle = "rgba(7, 11, 18, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const rows = 12;
      const cols = particleCount;
      const spacingX = canvas.width / (cols + 1);
      const spacingY = canvas.height / (rows + 1);

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const x = (c + 1) * spacingX;
          const baseY = (r + 1) * spacingY;

          // Wave equation simulating algorithmic audience traffic vectors
          const wave =
            Math.sin(time + c * 0.15 + r * 0.25) * 18 +
            Math.cos(time * 0.8 + c * 0.08) * 12;

          const dx = mouse.x - x;
          const dy = mouse.y - (baseY + wave);
          const dist = Math.sqrt(dx * dx + dy * dy);
          let displace = 0;
          if (dist < 120) {
            displace = (1 - dist / 120) * -35;
          }

          const y = baseY + wave + displace;

          if (c === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        const alpha = 0.15 + (r / rows) * 0.4;
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount]);

  return (
    <section id="tech" className="relative z-20 w-full py-28 px-6 md:px-12 bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>GROWTH ARSENAL &amp; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            SKILLS &amp; ACADEMICS.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl text-base md:text-lg">
            Engineering mindset applied to modern search algorithms, paid ad channels, high-converting copy, and custom WordPress web development.
          </p>
        </div>

        {/* Education Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl glass-panel border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 via-blue-950/10 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                ACADEMIC CREDENTIAL
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {PROFILE.education.institution}
              </h3>
              <p className="text-zinc-300 text-sm font-mono mt-0.5">
                {PROFILE.education.degree} • Graduated {PROFILE.education.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-mono text-zinc-300 border-white/10 shrink-0">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>ENGINEERING BACKGROUND + MARKETING MASTERY</span>
          </div>
        </div>

        {/* Two-Column Grid: Skills Matrix + Live Interactive Canvas Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Breakdown (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS_MATRIX.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl glass-panel hover:border-cyan-400/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Canvas Traffic Vector Simulator (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl glass-panel p-6 border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ALGORITHMIC TRAFFIC VECTOR SIM</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE 60 FPS
                </span>
              </div>

              <div className="text-sm font-mono text-zinc-400 mb-4">
                Harmonic wave simulation modeling digital audience search volumes and conversion vector fields. Hover mouse over canvas to disrupt flow.
              </div>

              {/* Canvas viewport */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 bg-[#05080e]">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full block cursor-crosshair"
                />
                <div className="pointer-events-none absolute bottom-2 left-2 px-2 py-1 rounded bg-black/60 text-[10px] font-mono text-zinc-400">
                  AUDIENCE VECTORS (12 x {particleCount})
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setParticleCount(40)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    particleCount === 40
                      ? "bg-cyan-400 text-black font-semibold"
                      : "glass-panel text-zinc-400"
                  }`}
                >
                  LOW
                </button>
                <button
                  onClick={() => setParticleCount(80)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    particleCount === 80
                      ? "bg-cyan-400 text-black font-semibold"
                      : "glass-panel text-zinc-400"
                  }`}
                >
                  BALANCED
                </button>
                <button
                  onClick={() => setParticleCount(120)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                    particleCount === 120
                      ? "bg-cyan-400 text-black font-semibold"
                      : "glass-panel text-zinc-400"
                  }`}
                >
                  HIGH-DENSITY
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-500">
                DYNAMIC FIELD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
