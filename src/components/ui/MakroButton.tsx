import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MakroButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
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
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  showIcon = true,
}) => {
  const content = text || children;

  const sizeClasses = {
    sm: 'py-2 px-4 text-xs gap-2',
    md: 'py-2.5 px-5 text-sm gap-3',
    lg: 'py-3.5 px-7 text-base gap-3.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#101828] text-white border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-white/25 hover:shadow-[0_6px_25px_rgba(0,0,0,0.7)]',
    secondary:
      'bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:text-white',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border border-transparent',
  }[variant];

  const baseClasses = `
    group relative inline-flex items-center justify-center font-medium rounded-full
    transition-all duration-300 ease-out cursor-pointer select-none
    active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses} ${sizeClasses} ${className}
  `;

  const renderedIcon = icon || (
    <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-[#d9ff5c] text-[#101828] transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:bg-[#1aff75] shadow-[0_0_12px_rgba(217,255,92,0.4)]">
      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
        <span className="tracking-wide">{content}</span>
        {showIcon && renderedIcon}
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
      <span className="tracking-wide">{content}</span>
      {showIcon && renderedIcon}
    </button>
  );
};
