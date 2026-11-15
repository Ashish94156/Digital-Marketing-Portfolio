"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const AudioAmbient: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<OscillatorNode[]>([]);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Generative ethereal ambient chord frequencies (D minor 9th: D3, F3, A3, C4, E4)
      const freqs = [146.83, 174.61, 220.0, 261.63, 329.63];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((f) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        // Individual panner & filter
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.08, ctx.currentTime);

        osc.connect(filter);
        filter.connect(subGain);
        subGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscsRef.current = oscs;
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    if (!isPlaying) {
      gainNodeRef.current?.gain.setTargetAtTime(
        0.08,
        audioCtxRef.current.currentTime,
        1.5
      );
      setIsPlaying(true);
    } else {
      gainNodeRef.current?.gain.setTargetAtTime(
        0.0001,
        audioCtxRef.current.currentTime,
        0.5
      );
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-mono text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all select-none"
      title="Toggle Generative Ambient Soundscape (Web Audio API)"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-cyan-400">SOUND [ON]</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
          <span>SOUND [OFF]</span>
        </>
      )}
    </button>
  );
};

export default AudioAmbient;
