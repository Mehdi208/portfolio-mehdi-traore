import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { MarqueeTicker } from '../components/sections/MarqueeTicker';
import { CardReveal3D } from '../components/sections/CardReveal3D';
import { PillarsStackingDeck } from '../components/sections/PillarsStackingDeck';
import { InteractiveShowcase5s } from '../components/sections/InteractiveShowcase5s';
import { SelectedProjectsGrid } from '../components/sections/SelectedProjectsGrid';
import { PricingSection } from '../components/sections/PricingSection';
import { FaqSection } from '../components/sections/FaqSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d9ff5c] selection:text-[#101828]">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeTicker />
        <CardReveal3D />
        <PillarsStackingDeck />
        <InteractiveShowcase5s />
        <SelectedProjectsGrid />
        <PricingSection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};
