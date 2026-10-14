import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Volume2, VolumeX, Play } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

const ROTATING_WORDS = [
  'Sites Web',
  'Web Apps',
  'Identités Visuelles',
  'Montages Vidéo',
];

// Avatars / Brand logos for the rotating cloud marquee
const ROTATING_AVATARS = [
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop', label: 'Créateur' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop', label: 'Fruithé' },
  { img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop', label: 'BioGroup' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop', label: 'Phénix' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop', label: 'Ella' },
  { img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=120&auto=format&fit=crop', label: 'HavJob' },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#0a0a0a]"
    >
      {/* 🔴 Constant Ambient Red Light Moving in Background (CreatorCut signature) */}
      <div className="absolute -top-24 right-0 md:right-10 w-[600px] h-[550px] bg-gradient-to-br from-[#ff2222]/25 via-[#ff1414]/10 to-transparent blur-[140px] pointer-events-none rounded-full animate-ambient-beam" />
      <div className="absolute top-1/2 left-[-100px] w-[450px] h-[450px] bg-[#ff2222]/[0.08] blur-[150px] pointer-events-none rounded-full animate-pulse-glow" />
      
      {/* Subtle subtle diagonal light beam across the top-right */}
      <div className="absolute top-0 right-0 w-2/3 h-96 bg-gradient-to-bl from-red-600/[0.12] via-transparent to-transparent pointer-events-none" />

      {/* Main 2-Columns Grid Layout matching CreatorCut */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Texts, Dynamic Swapping Keyword, Buttons, Revolving Social Proof */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Top Badge: "Hurry, only 3 spots left." */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-white/10 text-xs font-medium text-white/90 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1aff75] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1aff75]" />
            </span>
            <span>Hurry, only 3 spots left.</span>
          </div>

          {/* Main Huge Headline with Vertical Sliding Dynamic Keyword */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-black tracking-tight text-white leading-[1.08]">
            Des Expériences{' '}
            <span className="block relative overflow-hidden h-[1.18em] my-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[currentIndex]}
                  initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -50, opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] whitespace-nowrap"
                >
                  {ROTATING_WORDS[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            Qui Convertissent.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl font-normal leading-relaxed">
            Sites web vitrines, applications web SaaS et montages vidéo courts (TikTok & Reels) taillés pour la rétention et la conversion.
          </p>

          {/* CTA Buttons: MakroButton with lime circle on left (image 2) + See Pricing */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <MakroButton
              size="lg"
              variant="signature"
              text="Book a Service"
              href="#contact"
            />

            <a
              href="#tarifs"
              className="px-6 py-3.5 rounded-full bg-[#161616] hover:bg-[#222222] border border-white/10 text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-md active:scale-[0.98]"
            >
              See Pricing
            </a>
          </div>

          {/* Social Proof: Revolving Logos / Avatars with Edge Cloud Blur + Stars */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5">
            {/* The Revolving Avatar Cloud Container with Left & Right Gradient Fog Masks */}
            <div className="relative w-44 h-12 overflow-hidden flex items-center">
              {/* Left Fog/Cloud Mask */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              {/* Right Fog/Cloud Mask */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              {/* Continuously Rotating / Scrolling Logos */}
              <div className="flex items-center gap-2 animate-marquee w-max">
                {[...ROTATING_AVATARS, ...ROTATING_AVATARS, ...ROTATING_AVATARS].map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden border-2 border-[#121216] shadow-sm"
                  >
                    <img
                      src={avatar.img}
                      alt={avatar.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* +95 circle badge inside the carousel flow */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white text-[#101828] font-bold text-xs flex items-center justify-center border-2 border-[#121216]">
                  +95
                </div>
              </div>
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/90 mt-0.5">
                Worked with 100+ Creators
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Video Frame (Exact CreatorCut frame with looping video) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[430px] aspect-[4/5] rounded-[34px] overflow-hidden border border-red-500/30 bg-[#0d0d10] shadow-[0_0_50px_rgba(255,34,34,0.22)] group">
            
            {/* Subtle red outline glow inside border */}
            <div className="absolute inset-0 rounded-[34px] border-2 border-red-500/20 pointer-events-none z-20" />

            {/* Looping Showcase Video */}
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
            >
              {/* High quality creator / tech video */}
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                type="video/mp4"
              />
            </video>

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-10" />

            {/* CreatorCut Dynamic Subtitle / Text Overlay */}
            <div className="absolute inset-x-0 bottom-12 z-20 flex flex-col items-center text-center px-4 pointer-events-none">
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 mb-1">
                Shorts & Reels Performance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] italic">
                EVERYTHING
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 font-extrabold">
                  TO COME OUT
                </span>
              </h3>
            </div>

            {/* Video Controls (Audio Toggle & Live Indicator) */}
            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>SHOWCASE LIVE</span>
              </div>

              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                title={isMuted ? 'Activer le son' : 'Couper le son'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-red-400" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
