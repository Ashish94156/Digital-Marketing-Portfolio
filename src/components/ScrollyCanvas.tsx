"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, motion, MotionValue } from "framer-motion";
import { FRAME_COUNT, getFramePath } from "@/lib/constants";
import { Overlay } from "./Overlay";

interface ScrollyCanvasProps {
  children?: React.ReactNode | ((progress: MotionValue<number>) => React.ReactNode);
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastRenderedIndexRef = useRef<number>(-1);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState<boolean>(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);

  // Scroll mapping across 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for organic scrubbing feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 38,
    restDelta: 0.0005,
  });

  // Render a specific frame index with object-fit: cover logic
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const images = imagesRef.current;
    let img = images[index];

    // Fallback to nearest loaded frame if target frame isn't ready
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const prev = images[index - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = images[index + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    lastRenderedIndexRef.current = index;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Fill background with exact matching hex to guarantee zero seam
    ctx.fillStyle = "#070b12";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // High quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // "object-fit: cover" mathematics
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let renderWidth = canvasWidth;
    let renderHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (Desktop panoramic)
      renderWidth = canvasWidth;
      renderHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - renderHeight) / 2;
    } else {
      // Canvas is taller than image (Mobile portrait)
      renderHeight = canvasHeight;
      renderWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  // Update canvas size matching viewport & device pixel ratio
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Re-render current frame on resize
    const currentIndex = Math.max(0, lastRenderedIndexRef.current);
    renderFrame(currentIndex);
  }, [renderFrame]);

  // Preload all frames in sequence
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;

    // Load Frame 0 first with highest priority
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      loadedImages[0] = firstImg;
      loadedCount++;
      setIsFirstFrameReady(true);
      resizeCanvas();
      renderFrame(0);
    };

    // Load all remaining frames
    for (let i = 0; i < FRAME_COUNT; i++) {
      if (i === 0) continue;
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (!isMounted) return;
        loadedImages[i] = img;
        loadedCount++;
        const progress = Math.round((loadedCount / FRAME_COUNT) * 100);
        setLoadingProgress(progress);

        if (loadedCount >= FRAME_COUNT) {
          setIsFullyLoaded(true);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
      };
    }

    imagesRef.current = loadedImages;

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      isMounted = false;
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [renderFrame, resizeCanvas]);

  // Scrub frames on scroll
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const targetFrame = Math.min(
        FRAME_COUNT - 1,
        Math.floor(clamped * (FRAME_COUNT - 1))
      );

      if (targetFrame !== lastRenderedIndexRef.current) {
        requestAnimationFrame(() => renderFrame(targetFrame));
      }
    });

    return () => unsubscribe();
  }, [smoothProgress, renderFrame]);

  return (
    <section
      ref={containerRef}
      id="scrolly-hero"
      className="relative w-full h-[500vh] bg-[#070b12]"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block pointer-events-none"
        />

        {/* Ambient Dark Blending Gradients (Edge Vignette for seamless merge) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-[#070b12]/80 opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070b12]/60 via-transparent to-[#070b12]/60 opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#070b12_100%)] opacity-75" />

        {/* Parallax Overlays */}
        <div className="relative z-10 w-full h-full pointer-events-none">
          {typeof children === "function" ? (
            children(scrollYProgress)
          ) : children ? (
            children
          ) : (
            <Overlay scrollYProgress={scrollYProgress} />
          )}
        </div>

        {/* Cinematic HUD Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-zinc-400 select-none"
        >
          <div className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isFullyLoaded
                  ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                  : "bg-cyan-400 animate-ping"
              }`}
            />
            <span>{isFullyLoaded ? "BUFFERED 73 FRAMES" : `CACHING ${loadingProgress}%`}</span>
          </div>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">CANVAS COVER</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollyCanvas;
