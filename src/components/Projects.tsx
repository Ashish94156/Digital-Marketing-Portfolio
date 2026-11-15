"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/lib/constants";
import {
  ExternalLink,
  Layers,
  Sparkles,
  X,
  Cpu,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Target,
  BarChart,
} from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Search Engine Optimization",
    "Paid Advertising & PPC",
    "WordPress & Web Optimization",
    "Social Media & Content Strategy",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative z-20 w-full py-32 px-6 md:px-12 bg-[#070b12]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED GROWTH CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              CAMPAIGNS &amp; PLATFORMS.
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl text-base md:text-lg">
              Data-backed marketing funnels, technical SEO keyword dominance, and high-performance WordPress systems built for maximum user acquisition and retention.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "glass-panel text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat === "All" ? "All Works (4)" : cat.split(" & ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-panel p-8 transition-all duration-500 hover:border-cyan-400/30 overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle ambient card glow */}
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: project.gradient }}
              />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">
                      {project.year}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm font-mono text-zinc-400 mt-1 mb-4">
                  {project.subtitle}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 my-6 bg-white/[0.01] rounded-lg px-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-left">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-mono font-semibold text-white mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl glass-panel text-xs font-mono text-white font-medium hover:bg-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                  >
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>INSPECT CAMPAIGN ARCHITECTURE</span>
                  </button>

                  <a
                    href="#contact"
                    className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
                    title="Inquire about this project"
                  >
                    <Activity className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-10 border-white/10 shadow-[0_0_80px_rgba(0,240,255,0.15)] bg-[#090d16]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-panel text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>STRATEGY &amp; PERFORMANCE BREAKDOWN</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400 mt-1 mb-6">
                {selectedProject.subtitle} • {selectedProject.year}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-zinc-300 leading-relaxed text-sm">
                {selectedProject.description}
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Strategic Execution &amp; Results:
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {selectedProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                  >
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">
                      {m.label}
                    </div>
                    <div className="text-base font-mono font-bold text-cyan-400 mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies / Tools */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  Growth &amp; Tech Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl glass-panel text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  DISMISS
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-xs font-mono hover:opacity-90 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-opacity"
                >
                  DISCUSS SIMILAR CAMPAIGN
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
