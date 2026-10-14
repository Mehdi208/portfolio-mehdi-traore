import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Volume2, VolumeX } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

const ROTATING_WORDS = [
  'Sites Web',
  'Web Apps',
  'Identités Visuelles',
  'Montages Vidéo',
];

// Avatars des clients / marques pour le ruban défilant avec flou nuageux
const ROTATING_AVATARS = [
  { img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop', label: 'Client 1' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop', label: 'Client 2' },
  { img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop', label: 'Client 3' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop', label: 'Client 4' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop', label: 'Client 5' },
  { img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=120&auto=format&fit=crop', label: 'Client 6' },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-[#0a0a0a]"
    >
      {/* 🔴 Faisceau rouge constant en mouvement dans le fond (Signature CreatorCut) */}
      <div className="absolute -top-20 right-0 md:right-12 w-[550px] h-[500px] bg-gradient-to-br from-[#ff2222]/22 via-[#ff1414]/10 to-transparent blur-[140px] pointer-events-none rounded-full animate-ambient-beam" />
      <div className="absolute top-1/2 left-[-80px] w-[400px] h-[400px] bg-[#ff2222]/[0.06] blur-[150px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-1/2 h-80 bg-gradient-to-bl from-red-600/[0.1] via-transparent to-transparent pointer-events-none" />

      {/* Grille 2 Colonnes — Dimensions fidèles à la template CreatorCut */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* COLONNE GAUCHE : Textes, Mot dynamique en couleur, Boutons MakroButton & Social proof */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
          
          {/* Badge de disponibilité adapté au profil */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-white/10 text-xs font-medium text-white/90 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1aff75] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1aff75]" />
            </span>
            <span>Disponible • Plus que 3 créneaux ce mois-ci</span>
          </div>

          {/* Grand Titre : Mot permutant en couleur rouge vive avec fondu vertical */}
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black tracking-tight text-white leading-[1.12] font-display">
            Des Expériences{' '}
            <span className="block relative overflow-hidden h-[1.22em] my-0.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[currentIndex]}
                  initial={{ y: 45, opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -45, opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ff3838] via-[#ff2222] to-[#ff6666] drop-shadow-[0_0_30px_rgba(255,34,34,0.45)] whitespace-nowrap"
                >
                  {ROTATING_WORDS[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            Qui Convertissent.
          </h1>

          {/* Sous-titre en Français */}
          <p className="text-sm sm:text-base text-white/60 max-w-lg font-normal leading-relaxed">
            Sites web vitrines, applications web SaaS et montages vidéo courts (TikTok & Reels) taillés pour la rétention et la conversion.
          </p>

          {/* Boutons Signatures : Même taille, même design system, pastille et flèche animée vers la droite */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <MakroButton
              size="md"
              variant="signature"
              text="Lancer un projet"
              href="#contact"
            />

            <MakroButton
              size="md"
              variant="secondary"
              text="Consulter les tarifs"
              href="#tarifs"
            />
          </div>

          {/* Preuve Sociale : Avatars resserrés + défilement rapide + nuage + texte en Français */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Conteneur d'avatars resserrés avec masque dégradé nuageux aux extrémités */}
            <div className="relative w-40 h-11 overflow-hidden flex items-center">
              {/* Voile flou / nuage gauche */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
              {/* Voile flou / nuage droite */}
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              {/* Ruban rapide d'avatars resserrés */}
              <div className="flex items-center -space-x-1.5 animate-marquee-fast w-max">
                {[...ROTATING_AVATARS, ...ROTATING_AVATARS, ...ROTATING_AVATARS].map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm"
                  >
                    <img
                      src={avatar.img}
                      alt={avatar.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {/* Pastille +95 */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#101828] font-bold text-[10px] flex items-center justify-center border border-white/20 shadow-sm">
                  +95
                </div>
              </div>
            </div>

            {/* Étoiles & Texte en Français */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/90 mt-0.5 whitespace-nowrap">
                +95 projets livrés avec succès
              </p>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : Cadre Vidéo Carré conforme à CreatorCut */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square rounded-[30px] overflow-hidden border border-red-500/30 bg-[#0d0d10] shadow-[0_0_50px_rgba(255,34,34,0.25)] group">
            
            {/* Liseré néon rouge intérieur */}
            <div className="absolute inset-0 rounded-[30px] border border-red-500/20 pointer-events-none z-20" />

            {/* Vidéo de démonstration en boucle */}
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                type="video/mp4"
              />
            </video>

            {/* Dégradé sombre pour lisibilité du titre */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30 pointer-events-none z-10" />

            {/* Titre et sous-titres animés en Français */}
            <div className="absolute inset-x-0 bottom-8 z-20 flex flex-col items-center text-center px-4 pointer-events-none">
              <span className="text-[11px] font-mono uppercase tracking-widest text-red-400 mb-1">
                Formats Courts & Conversion
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] italic">
                TOUT POUR
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-amber-300 font-extrabold">
                  FAIRE CONVERTIR
                </span>
              </h3>
            </div>

            {/* Contrôles audio & Statut live */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>SHOWCASE EN DIRECT</span>
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
