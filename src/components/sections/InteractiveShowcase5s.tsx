import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, TrendingUp, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

interface ShowcaseItem {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  tags: string[];
  image: string;
  color: string;
  link: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'fruithe',
    client: 'Restaurant Fruithé',
    title: 'Plateforme Digitale & Social Growth',
    category: 'Food, Hospitality & Viral Reels',
    description:
      'Refonte globale de la présence en ligne : menu digital responsive avec système de commande optimisé, et création de vidéos TikTok/Reels à forte rétention ayant propulsé l’établissement.',
    metric: '+185% de réservations en ligne',
    tags: ['React', 'Tailwind', 'Figma', 'TikTok/Reels'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    color: '#d9ff5c',
    link: '#contact',
  },
  {
    id: 'biogroup',
    client: 'BioGroup Africa',
    title: 'Portail Médical Panafricain',
    category: 'Health, MedTech & Cloud SaaS',
    description:
      'Conception d’une interface institutionnelle robuste pour un groupe médical leader. Prise de rendez-vous en ligne, espace sécurisé pour les résultats d’analyses et UI épurée.',
    metric: '99.9% d’uptime & +10 000 patients',
    tags: ['React', 'TypeScript', 'Node.js', 'Figma'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    color: '#38bdf8',
    link: '#contact',
  },
  {
    id: 'phenix',
    client: 'Phénix Real Estate',
    title: 'Portail Immobilier de Prestige',
    category: 'Luxury Living & Visites Interactives',
    description:
      'Une expérience web sombre et élégante pour la commercialisation de villas d’exception à Abidjan et Assinie. Visuels cinématiques, fiches PDF dynamiques et conversion WhatsApp.',
    metric: '+45% de leads qualifiés',
    tags: ['React', 'Framer Motion', 'Dark Luxe UI'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    color: '#fbbf24',
    link: '#contact',
  },
];

const DURATION_SECONDS = 5;

export const InteractiveShowcase5s: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const intervalTime = 50; // update every 50ms for smooth 60fps
    const step = 100 / ((DURATION_SECONDS * 1000) / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % SHOWCASE_ITEMS.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeProject = SHOWCASE_ITEMS[activeIndex];

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section
      id="showcase"
      className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] via-[#050507] to-[#040405] text-white overflow-hidden transition-colors duration-1000"
    >
      {/* Dark Immersion Atmosphere & Subtle Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#d9ff5c]/[0.025] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Interactif 360°</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Des résultats mesurables pour des marques ambitieuses.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            Découvrez comment mes créations transforment l'image et accélèrent la croissance de mes partenaires.
          </p>
        </div>

        {/* Split 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Tabs with 5s Progress Gauge */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectTab(idx)}
                  className={`relative p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#101828]/90 border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono tracking-widest uppercase text-[#d9ff5c]">
                      {item.client}
                    </span>
                    <span className="text-[11px] font-mono text-white/40">
                      0{idx + 1} / 0{SHOWCASE_ITEMS.length}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/60 mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  {/* GPU-Accelerated 5s Animated Progress Gauge */}
                  {isActive && (
                    <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#d9ff5c] rounded-full transition-all ease-linear will-change-transform"
                        style={{
                          width: `${progress}%`,
                          boxShadow: '0 0 10px #d9ff5c',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Docked Showcase Preview Card */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative flex-1 rounded-3xl overflow-hidden border border-white/15 bg-[#101828] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828] via-[#101828]/40 to-transparent" />

                  {/* Metric Floating Badge */}
                  <div className="absolute top-5 right-5">
                    <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 shadow-lg flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#d9ff5c]" />
                      <span className="text-xs font-bold text-white">
                        {activeProject.metric}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                      Client
                    </span>
                    <h4 className="text-2xl font-black text-white tracking-tight">
                      {activeProject.client}
                    </h4>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#d9ff5c] tracking-wider uppercase">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-3 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Tags & Action Button */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-white/70 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <MakroButton
                      size="sm"
                      text="Explorer ce cas"
                      href="#contact"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
