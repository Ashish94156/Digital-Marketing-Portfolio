"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Terminal,
  Sparkles,
  ArrowUpRight,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { PROFILE } from "@/lib/constants";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-20 w-full py-32 px-6 md:px-12 bg-[#070b12] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries & Details (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-cyan-400 mb-4 border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMISSION &amp; ROLES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              LET&apos;S ACCELERATE YOUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                DIGITAL GROWTH.
              </span>
            </h2>

            <p className="mt-5 text-zinc-400 text-base leading-relaxed">
              Available for full-time Digital Marketing, SEO Specialist, and Growth Marketing roles, as well as high-impact client campaigns and WordPress optimizations.
            </p>

            {/* Contact Details Stack */}
            <div className="mt-8 space-y-3">
              {/* Email Quick Copy Box */}
              <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">
                      PRIMARY EMAIL
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate font-semibold">
                      {PROFILE.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl glass-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400/40 transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Quick Copy Box */}
              <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">
                      PHONE / WHATSAPP
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate font-semibold">
                      {PROFILE.phone}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-2 rounded-xl glass-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-400/40 transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-3.5 rounded-2xl glass-panel border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    BASE OF OPERATIONS
                  </div>
                  <div className="text-xs font-mono text-zinc-200">
                    {PROFILE.location} • Available for Remote &amp; On-Site Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Profiles */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LINKEDIN PROFILE</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-300" />
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Glass Contact Terminal (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 sm:p-10 border-white/10 relative overflow-hidden bg-[#080d16]">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>INQUIRY_PROTOCOL.TS // ASHISH_SINGH</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  MESSAGE DISPATCHED
                </h3>
                <p className="mt-2 text-zinc-400 text-sm max-w-md mx-auto font-mono">
                  Thank you. Your message has been routed directly to Ashish Singh&apos;s
                  inbox ({PROFILE.email}). Expect a reply shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded-xl glass-panel text-xs font-mono text-zinc-300 hover:text-white"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    YOUR NAME OR COMPANY
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma / Nexus Media"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 text-sm font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    CONTACT EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 text-sm font-sans transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    PROJECT GOALS / ROLE OPPORTUNITY
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your SEO, social media, paid ads, or WordPress requirements..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400/50 text-sm font-sans transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 text-black font-semibold text-xs font-mono tracking-wider uppercase hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
