import React from 'react';
import { Sparkles } from 'lucide-react';

const CLIENTS = [
  { name: 'Restaurant Fruithé', category: 'Food & Hospitality' },
  { name: 'BioGroup Africa', category: 'Health & Medical' },
  { name: 'Phénix Real Estate', category: 'Luxury Living' },
  { name: 'HavJob Platform', category: 'Tech & Recruitment' },
  { name: 'BDE IFRAN', category: 'Education & Events' },
  { name: 'Ella Brown', category: 'Creative Studio' },
  { name: 'DMC Bâtiment', category: 'Construction & BTP' },
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full py-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden select-none">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* Render twice for continuous loop */}
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mx-6 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-[#d9ff5c]/30 hover:bg-white/[0.05] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#d9ff5c]/60 group-hover:bg-[#d9ff5c] group-hover:shadow-[0_0_8px_#d9ff5c] transition-all" />
            <span className="text-sm font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
              {client.name}
            </span>
            <span className="text-xs text-white/30 uppercase tracking-widest font-mono">
              / {client.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
