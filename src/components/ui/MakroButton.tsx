import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MakroButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'signature' | 'secondary' | 'red' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

export const MakroButton: React.FC<MakroButtonProps> = ({
  children,
  text,
  href,
  onClick,
  type = 'button',
  className = '',
  variant = 'signature',
  size = 'md',
  disabled = false,
  icon,
  showIcon = true,
}) => {
  const content = text || children;

  // Strict uniform sizes and padding ensuring identical height across all button types
  const sizeClasses = {
    sm: 'h-10 pl-2 pr-4 text-xs gap-2.5',
    md: 'h-12 pl-2.5 pr-6 text-sm gap-3.5',
    lg: 'h-14 pl-3 pr-7 text-sm sm:text-base gap-4',
  }[size];

  const iconCircleSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
  }[size];

  const arrowSizes = {
    sm: 'w-3.5 h-3.5 stroke-[2.5]',
    md: 'w-4 h-4 stroke-[2.5]',
    lg: 'w-4 h-4 stroke-[2.5]',
  }[size];

  const variantClasses = {
    // Exact signature design from user image: Dark pill, lime circle on the LEFT with sliding arrow
    signature:
      'bg-[#121216] text-white border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:border-white/25 hover:shadow-[0_6px_25px_rgba(217,255,92,0.2)]',
    // Secondary matching dark design with same height and dimensions
    secondary:
      'bg-[#19191e] text-white/90 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-[#222228] hover:border-white/20 hover:text-white',
    // CreatorCut Red variant
    red:
      'bg-[#ff2222] text-white border border-red-500/40 shadow-[0_6px_25px_rgba(255,34,34,0.35)] hover:bg-[#e61b1b] hover:shadow-[0_8px_35px_rgba(255,34,34,0.5)]',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent',
  }[variant];

  const circleColorClasses = {
    signature: 'bg-[#d9ff5c] text-[#101828]',
    secondary: 'bg-white/10 text-white group-hover:bg-white/20',
    red: 'bg-white text-[#ff2222]',
    ghost: 'bg-white/10 text-white',
  }[variant];

  const baseClasses = `
    group relative inline-flex items-center justify-center font-bold rounded-full
    transition-all duration-300 ease-out cursor-pointer select-none
    active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses} ${sizeClasses} ${className}
  `;

  // Circle with arrow positioned on the LEFT as shown in screenshot with smooth right slide
  const renderedIcon = icon || (
    <span
      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ease-out flex-shrink-0 shadow-sm ${circleColorClasses} ${iconCircleSizes}`}
    >
      <ArrowRight className={`${arrowSizes} transition-transform duration-300 ease-out group-hover:translate-x-1`} />
    </span>
  );

  if (href) {
    const isAnchor = href.startsWith('#');
    const isExternal = href.startsWith('http');

    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {showIcon && renderedIcon}
        <span className="tracking-wide whitespace-nowrap">{content}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {showIcon && renderedIcon}
      <span className="tracking-wide whitespace-nowrap">{content}</span>
    </button>
  );
};
