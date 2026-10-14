import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

export const CardReveal3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  // 3D Tilt & Reveal transformations
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.85, 0.25, 0]);
  const veilBlur = useTransform(scrollYProgress, [0, 1], ['12px', '0px']);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-6 overflow-hidden flex flex-col items-center"
      style={{ perspective: '1200px' }}
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d9ff5c]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Création Signature en Vedette</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          L'impact visuel dans chaque détail.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/60">
          Chaque projet est pensé comme une pièce maîtresse : fluidité, typographie calibrée et conversions maximisées.
        </p>
      </div>

      {/* 3D Tilting & Veiled Card */}
      <motion.div
        style={{
          rotateX,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-[#101828] shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(217,255,92,0.15)] group"
      >
        {/* Dynamic Cloud / Mist Veil that dissipates on scroll */}
        <motion.div
          style={{
            opacity: veilOpacity,
            backdropFilter: `blur(${veilBlur})`,
          }}
          className="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent pointer-events-none flex items-center justify-center"
        >
          <div className="px-5 py-2.5 rounded-full bg-black/60 border border-white/10 text-xs text-white/70 flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#d9ff5c]" />
            <span>Faites défiler pour révéler la création</span>
          </div>
        </motion.div>

        {/* Card Content & Showcase Visual */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop"
            alt="Showcase Reveal"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-[#101828]/40 to-transparent z-10" />

          {/* Floating UI Elements inside Card */}
          <div className="absolute top-6 left-6 z-15 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-[#d9ff5c]">
              Projet Star • 2026
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white">
              Food & Hospitality
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
                Étude de Cas
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Restaurant Fruithé — Écosystème Web & Rétention
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2 line-clamp-2">
                Conception d'une plateforme de commande interactive avec menu dynamique et production de capsules vidéo TikTok/Reels (+185% de conversion de tables).
              </p>
            </div>

            <div className="flex-shrink-0">
              <MakroButton
                size="sm"
                text="Découvrir le cas"
                href="#projets"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
