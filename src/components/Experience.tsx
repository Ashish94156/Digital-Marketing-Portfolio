"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  TrendingUp,
  Users,
  Eye,
  Camera,
  Star,
} from "lucide-react";

/* ─── Photo Data ────────────────────────────────────────────────────── */
const PHOTOS = [
  {
    src: "/experience/exp_01.jpg",
    caption: "Campaign Management",
    platform: "Instagram",
    icon: Instagram,
    color: "#e1306c",
    span: "col-span-2 row-span-2", // hero card
  },
  {
    src: "/experience/exp_02.jpg",
    caption: "Brand Strategy",
    platform: "Facebook",
    icon: Facebook,
    color: "#1877f2",
    span: "",
  },
  {
    src: "/experience/exp_03.jpg",
    caption: "Growth Analytics",
    platform: "LinkedIn",
    icon: Linkedin,
    color: "#0a66c2",
    span: "",
  },
  {
    src: "/experience/exp_04.jpg",
    caption: "Content Creation",
    platform: "Instagram",
    icon: Instagram,
    color: "#e1306c",
    span: "",
  },
  {
    src: "/experience/exp_05.jpg",
    caption: "Audience Engagement",
    platform: "Facebook",
    icon: Facebook,
    color: "#1877f2",
    span: "",
  },
  {
    src: "/experience/exp_06.jpg",
    caption: "SEO & Visibility",
    platform: "LinkedIn",
    icon: Linkedin,
    color: "#0a66c2",
    span: "",
  },
  {
    src: "/experience/exp_07.jpg",
    caption: "Performance Reports",
    platform: "Instagram",
    icon: Instagram,
    color: "#e1306c",
    span: "",
  },
  {
    src: "/experience/exp_08.jpg",
    caption: "Digital Outreach",
    platform: "LinkedIn",
    icon: Linkedin,
    color: "#0a66c2",
    span: "",
  },
];

/* ─── Stats ─────────────────────────────────────────────────────────── */
const STATS = [
  { icon: TrendingUp, value: "120%", label: "Avg. Reach Growth", color: "#00f0ff" },
  { icon: Users,     value: "50K+", label: "Audience Built",    color: "#a855f7" },
  { icon: Eye,       value: "2M+",  label: "Impressions",       color: "#10b981" },
  { icon: Star,      value: "4.9",  label: "Client Rating",     color: "#f59e0b" },
];

/* ─── Animation Variants ─────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Photo Card ─────────────────────────────────────────────────────── */
function PhotoCard({
  photo,
  index,
}: {
  photo: (typeof PHOTOS)[number];
  index: number;
}) {
  const Icon = photo.icon;
  return (
    <motion.div
      variants={item}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.span}`}
      style={{ aspectRatio: photo.span ? "1/1" : "1/1" }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Platform badge */}
      <div
        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-xs font-mono font-semibold backdrop-blur-md border border-white/20"
        style={{ background: `${photo.color}33` }}
      >
        <Icon size={10} style={{ color: photo.color }} />
        {photo.platform}
      </div>

      {/* Number index */}
      <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-mono text-white/60">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium leading-tight">{photo.caption}</p>
        <div
          className="mt-1.5 h-0.5 w-8 rounded-full"
          style={{ background: photo.color }}
        />
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${photo.color}66` }}
      />
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[#070b12] overflow-hidden py-28 px-6"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-400/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Camera size={12} />
              Professional Experience
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
              SOCIAL MEDIA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                HEAD.
              </span>
            </h2>
            <p className="md:max-w-xs text-zinc-400 text-sm leading-relaxed">
              Real campaigns, real growth. Here's a glimpse into my hands-on
              experience managing brands across Instagram, Facebook & LinkedIn.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-transparent" />
        </motion.div>

        {/* ── Stats Row ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={item}
                className="glass-panel rounded-2xl p-5 flex flex-col gap-2 group hover:border-white/15 transition-colors duration-300"
              >
                <Icon size={18} style={{ color: stat.color }} />
                <p
                  className="text-3xl font-black tracking-tight"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Photo Grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]"
        >
          {PHOTOS.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} index={i} />
          ))}
        </motion.div>

        {/* ── Experience Tags ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {[
            "Instagram Marketing",
            "Facebook Ads",
            "LinkedIn Management",
            "Content Strategy",
            "Brand Voice",
            "Analytics & Reporting",
            "Community Growth",
            "Paid Social",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full glass-panel text-xs font-mono text-zinc-400 border border-white/5 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
