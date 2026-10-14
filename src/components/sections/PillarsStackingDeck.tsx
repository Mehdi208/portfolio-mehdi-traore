import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, Video, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
  tools: string[];
  mobileTop: string;
  desktopTop: string;
  bgGradient: string;
  image: string;
}

const PILIERS: Pillar[] = [
  {
    number: '01',
    title: 'Conception Web & Landing Pages Haute Conversion',
    tagline: 'Transformez vos visiteurs curieux en clients engagés.',
    description:
      'Création de sites internet vitrines et e-commerce sur-mesure (WordPress, React, Webflow). Architecture pensée pour la vitesse, le SEO et la persuasion psychologique afin de maximiser votre retour sur investissement.',
    icon: <Globe className="w-6 h-6 text-[#d9ff5c]" />,
    deliverables: [
      'Design sur-mesure sous Figma & validation avant code',
      'Intégration responsive 100% mobile, tablette & desktop',
      'Optimisation SEO technique & Google PageSpeed 90+',
      'Hébergement sécurisé & nom de domaine inclus',
    ],
    tools: ['React', 'Next.js', 'Tailwind', 'WordPress', 'Figma'],
    mobileTop: 'top-[70px]',
    desktopTop: 'md:top-[85px]',
    bgGradient: 'from-[#101828] to-[#0c121e]',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
  },
  {
    number: '02',
    title: 'Web Applications & Outils Métiers sur-mesure',
    tagline: 'Automatisez vos opérations avec des SaaS fluides et scalables.',
    description:
      'Développement de plateformes web interactives, portails clients et back-offices d’administration (React, Node, Firebase). Des outils sécurisés qui simplifient votre quotidien et propulsent vos processus internes.',
    icon: <Code2 className="w-6 h-6 text-[#d9ff5c]" />,
    deliverables: [
      'Bases de données temps réel & Authentification sécurisée',
      'Tableaux de bord d’administration intuitifs',
      'Intégration d’API tierces (Paiements, CRM, WhatsApp)',
      'Maintenance évolutive & monitoring en continu',
    ],
    tools: ['React', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL'],
    mobileTop: 'top-[95px]',
    desktopTop: 'md:top-[120px]',
    bgGradient: 'from-[#121623] to-[#0d101a]',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
  },
  {
    number: '03',
    title: 'Création Vidéo (Reels / Shorts) & Social Growth',
    tagline: 'Captez l’attention dès les 3 premières secondes et devenez viral.',
    description:
      'Community management, direction éditoriale et montage vidéo dynamique pour TikTok, Instagram Reels et YouTube Shorts. Des formats natifs calibrés pour la rétention algorithmique et l’engagement de communauté.',
    icon: <Video className="w-6 h-6 text-[#d9ff5c]" />,
    deliverables: [
      'Scripts & hooks psychologiques à forte rétention',
      'Montage dynamique avec sound design & sous-titres animés',
      'Calendrier éditorial mensuel & stratégie de diffusion',
      'Reporting précis des statistiques d’engagement',
    ],
    tools: ['CapCut Pro', 'Premiere Pro', 'After Effects', 'TikTok Studio'],
    mobileTop: 'top-[120px]',
    desktopTop: 'md:top-[155px]',
    bgGradient: 'from-[#141829] to-[#0e111d]',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=900&auto=format&fit=crop',
  },
  {
    number: '04',
    title: 'Identité Graphique & Direction Artistique',
    tagline: 'Une signature visuelle mémorable qui inspire confiance.',
    description:
      'Direction artistique, chartes graphiques complètes, logos vectoriels et affiches publicitaires percutantes (Photoshop, Figma, Illustrator). Une cohérence visuelle qui positionne votre marque parmi les leaders de son secteur.',
    icon: <Palette className="w-6 h-6 text-[#d9ff5c]" />,
    deliverables: [
      'Logotype vectoriel complet & déclinaisons multi-formats',
      'Charte typographique, palette de couleurs & règles d’usage',
      'Affiches publicitaires, bannières web & packaging',
      'Templates réseaux sociaux prêts à l’emploi',
    ],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'Blender 3D'],
    mobileTop: 'top-[145px]',
    desktopTop: 'md:top-[190px]',
    bgGradient: 'from-[#151a2d] to-[#101424]',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=900&auto=format&fit=crop',
  },
];

export const PillarsStackingDeck: React.FC = () => {
  return (
    <section id="piliers" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
          Missions & Savoir-faire
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          Les 4 Piliers de mon expertise.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/60">
          Une approche 360° combinant rigueur technique du développement web, créativité visuelle et puissance des formats vidéo modernes.
        </p>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative pb-24 space-y-8">
        {PILIERS.map((pilier, idx) => (
          <div
            key={pilier.number}
            className={`sticky ${pilier.mobileTop} ${pilier.desktopTop} rounded-3xl border border-white/10 bg-gradient-to-br ${pilier.bgGradient} p-6 sm:p-10 shadow-[0_-12px_35px_rgba(0,0,0,0.85),0_25px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300`}
            style={{ zIndex: idx + 10 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Number, Title, Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {pilier.icon}
                    </div>
                    <span className="text-xs font-mono tracking-widest text-[#d9ff5c] uppercase">
                      Pilier {pilier.number}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-white/15 font-mono">
                    #{pilier.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {pilier.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#d9ff5c]/90 font-medium mt-1">
                    {pilier.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-white/65 mt-3 leading-relaxed">
                    {pilier.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {pilier.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tools & CTA */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pilier.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-white/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <MakroButton
                    size="sm"
                    text="Démarrer ce pilier"
                    href="#contact"
                    className="text-xs"
                  />
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:col-span-5 h-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
                  <img
                    src={pilier.image}
                    alt={pilier.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono text-[#d9ff5c] uppercase">
                      Livrable garanti
                    </span>
                    <p className="text-xs text-white font-medium mt-0.5">
                      Qualité studio & suivi continu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
