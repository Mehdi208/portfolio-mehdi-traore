import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSize = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* CreatorCut Red Emblem Icon */}
      <div
        className={`${iconSize} rounded-xl bg-gradient-to-br from-[#ff2e2e] to-[#cc1414] p-1.5 flex items-center justify-center shadow-[0_0_20px_rgba(255,46,46,0.4)] group-hover:shadow-[0_0_25px_rgba(255,46,46,0.6)] transition-all flex-shrink-0`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Stylized Filmstrip & Code M monogram */}
          <rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M7 8L12 13L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="16" r="1.5" fill="currentColor" />
          <circle cx="17" cy="16" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Styled Brand Typography (Point rouge retiré selon instruction) */}
      <div className="flex flex-col leading-tight">
        <div className={`font-extrabold tracking-tight text-white flex items-center ${textSize}`}>
          <span>Méhdi</span>
          <span className="ml-1.5 text-white/95">Traoré</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-white/50 mt-0.5 whitespace-nowrap">
          Concepteur Web & Créatif Digital
        </span>
      </div>
    </div>
  );
};
