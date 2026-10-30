import React from 'react';

interface LogoProps {
  variant?: 'full' | 'emblem-only' | 'stacked';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  // Dimensions for the vector emblem
  const dimensions = {
    sm: { box: 38, icon: 38, text: 'text-base', sub: 'text-[9px]' },
    md: { box: 44, icon: 44, text: 'text-lg sm:text-xl', sub: 'text-[9px] sm:text-[10px]' },
    lg: { box: 72, icon: 72, text: 'text-xl sm:text-2xl', sub: 'text-[11px] sm:text-xs' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Precision SVG Restaurant Emblem */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="Shareef Family Hotel Emblem"
      >
        <defs>
          {/* Antique Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF7D" />
            <stop offset="50%" stopColor="#C5A15B" />
            <stop offset="100%" stopColor="#9A7B39" />
          </linearGradient>

          {/* Deep Charcoal Background Gradient */}
          <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2A2420" />
            <stop offset="100%" stopColor="#141312" />
          </radialGradient>
        </defs>

        {/* Outer Circular Heritage Border */}
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="url(#darkBg)"
          stroke="url(#goldGradient)"
          strokeWidth="1.75"
        />

        {/* Inner Dotted Decorative Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke="#C5A15B"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          opacity="0.8"
        />

        {/* Traditional Chinioti Architectural Arch Motif */}
        <path
          d="M 28 58 C 28 36, 40 24, 50 18 C 60 24, 72 36, 72 58 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.25"
          opacity="0.45"
        />

        {/* Upper Dining Cloche / Royal Crown Accent */}
        <path
          d="M 44 26 C 44 23, 56 23, 56 26 L 50 22 Z"
          fill="#C5A15B"
        />
        <circle cx="50" cy="20" r="1.75" fill="#DFBF7D" />

        {/* Flanking Stars */}
        <polygon points="50,29 51,32 54,32 51.5,33.5 52.5,36 50,34 47.5,36 48.5,33.5 46,32 49,32" fill="#C5A15B" transform="scale(0.7) translate(21, 6)" />
        <circle cx="36" cy="36" r="1.2" fill="#C5A15B" opacity="0.8" />
        <circle cx="64" cy="36" r="1.2" fill="#C5A15B" opacity="0.8" />

        {/* SFH Monogram Central Lettering */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="url(#goldGradient)"
          fontFamily="'Cinzel', serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="1.5"
        >
          SFH
        </text>

        {/* Traditional Laurel Leaves at Bottom */}
        <path
          d="M 33 67 C 38 72, 45 74, 50 74 C 55 74, 62 72, 67 67"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
        />
        <circle cx="50" cy="74" r="1.8" fill="#DFBF7D" />

        {/* Tiny Heritage Year or Location Indicator */}
        <text
          x="50"
          y="84"
          textAnchor="middle"
          fill="#F8F1E5"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="5.5"
          fontWeight="600"
          letterSpacing="2"
          opacity="0.9"
        >
          CHINIOT
        </text>
      </svg>

      {/* Brand Typography Lockup */}
      {variant !== 'emblem-only' && (
        <div className={`flex flex-col ${variant === 'stacked' ? 'items-center text-center mt-2' : ''}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif-luxury font-bold tracking-tight text-[#F8F1E5] leading-none ${dimensions.text}`}
            >
              Shareef
            </span>
            <span
              className={`font-serif-luxury font-normal italic text-[#C5A15B] leading-none ${dimensions.text}`}
            >
              Family Hotel
            </span>
          </div>
          <span
            className={`uppercase tracking-[0.22em] text-[#C5A15B]/90 font-medium mt-1 leading-none ${dimensions.sub}`}
          >
            Chiniot · Jhang Road
          </span>
        </div>
      )}
    </div>
  );
};
