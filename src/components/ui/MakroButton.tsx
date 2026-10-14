import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MakroButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'signature' | 'red' | 'secondary' | 'ghost';
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

  const sizeClasses = {
    sm: 'py-2 pl-2 pr-5 text-xs gap-3',
    md: 'py-2.5 pl-2.5 pr-6 text-sm gap-3.5',
    lg: 'py-3.5 pl-3 pr-8 text-base gap-4',
  }[size];

  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  }[size];

  const arrowSizes = {
    sm: 'w-3.5 h-3.5 stroke-[2.5]',
    md: 'w-4 h-4 stroke-[2.5]',
    lg: 'w-5 h-5 stroke-[2.5]',
  }[size];

  const variantClasses = {
    // Exact signature design from user image: Dark pill, lime circle on the LEFT with right arrow
    signature:
      'bg-[#121216] text-white border border-white/10 shadow-[0_6px_25px_rgba(0,0,0,0.6)] hover:border-white/25 hover:shadow-[0_8px_30px_rgba(217,255,92,0.2)]',
    // CreatorCut Red variant
    red:
      'bg-[#ff2222] text-white border border-red-500/40 shadow-[0_6px_25px_rgba(255,34,34,0.35)] hover:bg-[#e61b1b] hover:shadow-[0_8px_35px_rgba(255,34,34,0.5)]',
    secondary:
      'bg-[#1a1a1f] text-white/90 border border-white/10 hover:bg-white/10 hover:text-white',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent',
  }[variant];

  const baseClasses = `
    group relative inline-flex items-center justify-center font-bold rounded-full
    transition-all duration-300 ease-out cursor-pointer select-none
    active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses} ${sizeClasses} ${className}
  `;

  // Circle with arrow positioned on the LEFT as shown in screenshot
  const renderedIcon = icon || (
    <span
      className={`relative flex items-center justify-center rounded-full ${
        variant === 'red' ? 'bg-white text-[#ff2222]' : 'bg-[#d9ff5c] text-[#101828]'
      } transition-all duration-300 ease-out group-hover:translate-x-1 shadow-md ${iconSizes}`}
    >
      <ArrowRight className={arrowSizes} />
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
