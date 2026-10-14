import React from 'react';
import { Sparkles } from 'lucide-react';
import { MakroButton } from '../ui/MakroButton';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto my-12">
      <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#101828] via-[#0d121e] to-[#080b12] p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#d9ff5c]/10 blur-[90px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Votre futur commence ici</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Prêt à propulser votre présence digitale au niveau supérieur ?
          </h2>

          <p className="text-sm sm:text-base text-white/65 leading-relaxed">
            Ne laissez pas votre business avec une image amateur. Offrez-vous une identité web et vidéo qui inspire immédiatement confiance et génère du chiffre d'affaires.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <MakroButton
              size="lg"
              text="Lancer mon projet"
              href="#contact"
            />
            <MakroButton
              size="lg"
              variant="secondary"
              text="Voir tous les projets"
              href="/projets"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
