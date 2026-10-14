import React from 'react';

interface BadgeProps {
  children?: React.ReactNode;
  text?: string;
  dotColor?: string;
  pulse?: boolean;
  className?: string;
  variant?: 'dark' | 'lime' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  text,
  dotColor = 'bg-[#1aff75]',
  pulse = true,
  className = '',
  variant = 'dark',
}) => {
  const content = text || children;

  const variantStyles = {
    dark: 'bg-[#101828]/80 text-white/90 border-white/10 backdrop-blur-md',
    lime: 'bg-[#d9ff5c]/10 text-[#d9ff5c] border-[#d9ff5c]/20',
    outline: 'bg-transparent text-white/70 border-white/10',
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border shadow-sm ${variantStyles} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}
          ></span>
        </span>
      )}
      <span>{content}</span>
    </div>
  );
};
