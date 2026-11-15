import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-[#070b12] text-white selection:bg-cyan-400 selection:text-black">
      {/* High-end custom interactive cursor */}
      <CustomCursor />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* 500vh Sticky Scrollytelling Sequence Canvas + Parallax Text Overlay */}
      <ScrollyCanvas />

      {/* Post-scroll Featured Case Studies Grid (Glassmorphism + Technical Modals) */}
      <Projects />

      {/* Social Media Head Experience Gallery */}
      <Experience />

      {/* Interactive Canvas Compute Simulator & Technical Stack Matrix */}
      <TechStack />

      {/* Commission & Direct Inquiry Terminal */}
      <ContactSection />

      {/* Modern Terminal Footer with Live Clock */}
      <Footer />
    </main>
  );
}
