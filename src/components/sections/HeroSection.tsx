import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MakroButton } from '../ui/MakroButton';

const ROTATING_WORDS = [
  'Sites Web',
  'Web Apps',
  'Identités Visuelles',
  'Montages Vidéo',
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background radial gradients for CreatorCut aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d9ff5c]/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <Badge text="Disponible pour de nouvelles missions" />
        </motion.div>

        {/* Dynamic Heading with Vertical Swapping Keyword */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Je conçois vos{' '}
          <span className="inline-flex relative overflow-hidden align-baseline h-[1.15em] w-auto min-w-[200px] sm:min-w-[320px] md:min-w-[420px] justify-center items-baseline px-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[currentIndex]}
                initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -50, opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute text-[#d9ff5c] drop-shadow-[0_0_25px_rgba(217,255,92,0.3)] whitespace-nowrap"
              >
                {ROTATING_WORDS[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br className="hidden sm:inline" />
          qui captivent & convertissent.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl font-normal leading-relaxed"
        >
          Créatif Digital & Concepteur Web basé à Abidjan. J’accompagne les marques, entreprises et créateurs dans la création d'expériences numériques sur-mesure à fort impact commercial.
        </motion.p>

        {/* Double Signature CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MakroButton
            size="lg"
            text="Explorer mes projets"
            href="#projets"
          />
          <MakroButton
            size="lg"
            variant="secondary"
            text="Consulter les tarifs"
            href="#tarifs"
          />
        </motion.div>

        {/* Social Proof Avatars & Trust Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 py-3 px-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md"
        >
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
              alt="Client"
              className="w-10 h-10 rounded-full border-2 border-[#101828] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
              alt="Client"
              className="w-10 h-10 rounded-full border-2 border-[#101828] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop"
              alt="Client"
              className="w-10 h-10 rounded-full border-2 border-[#101828] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
              alt="Client"
              className="w-10 h-10 rounded-full border-2 border-[#101828] object-cover"
            />
            <div className="w-10 h-10 rounded-full bg-[#101828] border-2 border-[#101828] flex items-center justify-center text-xs font-bold text-[#d9ff5c]">
              +95
            </div>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1 text-[#d9ff5c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d9ff5c]" />
              ))}
              <span className="text-xs font-bold text-white ml-1.5">5.0 / 5</span>
            </div>
            <p className="text-xs text-white/60">
              <span className="text-white font-semibold">+95 projets réalisés</span> pour des marques & créateurs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
