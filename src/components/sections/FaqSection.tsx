import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/faqData';
import { MakroButton } from '../ui/MakroButton';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Questions & Réponses</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Questions Fréquentes.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/60">
          Tout ce que vous devez savoir sur la méthodologie de travail, les révisions, les délais et les modalités de paiement.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#101828] border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                  : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-[#d9ff5c] text-[#101828]'
                      : 'bg-white/5 text-white/60'
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 sm:px-8 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Custom CTA Box under FAQ as specifically requested */}
      <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#101828] to-[#0c121e] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#d9ff5c] uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Échange personnalisé</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Vous avez un projet particulier ou une question spécifique ?
          </h3>
          <p className="text-xs sm:text-sm text-white/60">
            Je réponds généralement en moins de 24h ouvrées avec une analyse claire de vos besoins.
          </p>
        </div>

        <div className="flex-shrink-0">
          <MakroButton
            size="md"
            text="Poser ma question"
            href="#contact"
          />
        </div>
      </div>
    </section>
  );
};
