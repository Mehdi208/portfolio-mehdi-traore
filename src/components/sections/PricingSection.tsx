import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="tarifs" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d9ff5c]/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tarifs Clairs & Sans Surprise</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Des formules adaptées à votre ambition.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/60">
          Chaque projet est unique. Choisissez la formule qui correspond à votre stade de développement et obtenez un accompagnement d’excellence.
        </p>

        {/* Billing Switch for Subscriptions / Annual discount */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              !isYearly ? 'bg-white text-[#101828] font-bold shadow-sm' : 'text-white/60 hover:text-white'
            }`}
          >
            Facturation Mensuelle
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
              isYearly ? 'bg-[#d9ff5c] text-[#101828] font-bold shadow-sm' : 'text-white/60 hover:text-white'
            }`}
          >
            <span>Facturation Annuelle</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#101828] text-[#d9ff5c] font-mono">
              -2 mois offerts
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid (4 Formules exactes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* Formule 1 — Site Web Vitrine / Landing Page */}
        <div className="relative rounded-3xl border border-white/10 bg-[#101828]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
                Formule 01
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] text-white/50">
                Forfait Unique
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-3">
              Site Web Vitrine & Landing Page
            </h3>
            <p className="text-xs text-white/60 mt-1.5 min-h-[36px]">
              Idéal pour présenter votre activité avec prestige et générer des prises de contact continues.
            </p>

            <div className="mt-6 pb-6 border-b border-white/10">
              <span className="text-xs text-white/50 block">À partir de</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white tracking-tight">
                  350.000
                </span>
                <span className="text-xs font-mono text-white/60">FCFA</span>
              </div>
              <span className="text-[11px] text-white/40 block mt-1">
                Sur devis selon fonctionnalités
              </span>
            </div>

            {/* Inclusions */}
            <ul className="mt-6 space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Design UI/UX 100% sur-mesure</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Responsive parfait mobile & desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>SEO technique & vitesse ultra-optimisée</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Nom de domaine + Hébergement 1 an</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Formation admin & support 30 jours</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <MakroButton
              size="sm"
              text="Choisir cette formule"
              href="#contact"
              className="w-full justify-center"
            />
          </div>
        </div>

        {/* Formule 2 — Web Application / SaaS (POPULAIRE) */}
        <div className="relative rounded-3xl border-2 border-[#d9ff5c] bg-[#101828] p-6 flex flex-col justify-between shadow-[0_0_40px_rgba(217,255,92,0.15)] group">
          {/* Popular Tag */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#d9ff5c] text-[#101828] text-[11px] font-black uppercase tracking-wider shadow-md">
            Recommandé • Plus Populaire
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
                Formule 02
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#d9ff5c]/10 text-[10px] font-semibold text-[#d9ff5c]">
                {isYearly ? 'Économisez 60.000 FCFA' : 'Abonnement Cloud'}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-3">
              Web Application & Solutions SaaS
            </h3>
            <p className="text-xs text-white/60 mt-1.5 min-h-[36px]">
              Plateformes métiers interactives, portails clients et automatisation de processus complexes.
            </p>

            <div className="mt-6 pb-6 border-b border-white/10">
              <span className="text-xs text-white/50 block">Tarification</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white tracking-tight">
                  {isYearly ? '300.000' : '30.000'}
                </span>
                <span className="text-xs font-mono text-white/60">
                  FCFA {isYearly ? '/ an' : '/ mois'}
                </span>
              </div>
              <span className="text-[11px] text-[#d9ff5c] block mt-1 font-medium">
                {isYearly ? '2 mois offerts inclus' : 'Engagement flexible sans friction'}
              </span>
            </div>

            {/* Inclusions */}
            <ul className="mt-6 space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Base de données temps réel scalable</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Authentification sécurisée (Email, Google)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Espace administrateur & analytics sur-mesure</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Maintenance technique & sauvegardes continues</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Intégrations d'API (WhatsApp, Paiements)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <MakroButton
              size="sm"
              text="Développer mon SaaS"
              href="#contact"
              className="w-full justify-center bg-[#d9ff5c] text-[#101828] hover:bg-[#1aff75] font-bold"
            />
          </div>
        </div>

        {/* Formule 3 — Community Management & Création de Contenu */}
        <div className="relative rounded-3xl border border-white/10 bg-[#101828]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
                Formule 03
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] text-white/50">
                Abonnement Mensuel
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-3">
              Community Management & Contenu
            </h3>
            <p className="text-xs text-white/60 mt-1.5 min-h-[36px]">
              Pour booster votre visibilité organique, vos followers et votre rétention sur TikTok & Instagram.
            </p>

            <div className="mt-6 pb-6 border-b border-white/10">
              <span className="text-xs text-white/50 block">À partir de</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white tracking-tight">
                  150.000
                </span>
                <span className="text-xs font-mono text-white/60">FCFA / mois</span>
              </div>
              <span className="text-[11px] text-white/40 block mt-1">
                Volume de vidéos adaptable à vos objectifs
              </span>
            </div>

            {/* Inclusions */}
            <ul className="mt-6 space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Tournage & montage de Reels / TikToks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Calendrier éditorial & stratégie de hashtags</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Hooks psychologiques à haute rétention</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Modération & réponses aux commentaires</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Reporting mensuel complet des performances</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <MakroButton
              size="sm"
              text="Booster mes réseaux"
              href="#contact"
              className="w-full justify-center"
            />
          </div>
        </div>

        {/* Formule 4 — Conception Visuelle & Graphisme */}
        <div className="relative rounded-3xl border border-white/10 bg-[#101828]/70 backdrop-blur-md p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d9ff5c]">
                Formule 04
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] text-white/50">
                Sur Devis
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-3">
              Conception Visuelle & Graphisme
            </h3>
            <p className="text-xs text-white/60 mt-1.5 min-h-[36px]">
              Identités visuelles marquantes, chartes graphiques complètes et supports publicitaires percutants.
            </p>

            <div className="mt-6 pb-6 border-b border-white/10">
              <span className="text-xs text-white/50 block">À partir de</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white tracking-tight">
                  200.000
                </span>
                <span className="text-xs font-mono text-white/60">FCFA</span>
              </div>
              <span className="text-[11px] text-white/40 block mt-1">
                Selon le pack d'éléments requis
              </span>
            </div>

            {/* Inclusions */}
            <ul className="mt-6 space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Logotype vectoriel complet & déclinaisons</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Charte graphique complète & typographies</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Affiches publicitaires & bannières web</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Déclinaisons réseaux sociaux & formats print</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d9ff5c] flex-shrink-0 mt-0.5" />
                <span>Fichiers sources HD (AI, PSD, Figma)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <MakroButton
              size="sm"
              text="Créer mon identité"
              href="#contact"
              className="w-full justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
