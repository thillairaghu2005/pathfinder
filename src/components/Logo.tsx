import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'compact';
  theme?: 'dark' | 'light' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  className = '',
  size = 'md'
}) => {
  const dimensionMap = {
    sm: { icon: 30, textPrimary: 'text-sm', textSub: 'text-[9px]' },
    md: { icon: 36, textPrimary: 'text-base', textSub: 'text-[10px]' },
    lg: { icon: 46, textPrimary: 'text-xl', textSub: 'text-xs' },
  };

  const { icon: iconSize, textPrimary, textSub } = dimensionMap[size];

  const primaryTextColor = theme === 'light' ? 'text-white' : 'text-[#14213D]';
  const subTextColor = theme === 'light' ? 'text-[#C5A880]' : 'text-[#8C6D3B]';

  return (
    <div className={`inline-flex items-center space-x-2.5 select-none ${className}`}>
      {/* Official Pathfinders Emblem: The Ladder ascending through the Globe */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105 shrink-0"
        aria-label="Pathfinders Emblem"
      >
        <defs>
          <linearGradient id="globeGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#14213D" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DFC088" />
            <stop offset="50%" stopColor="#C5A880" />
            <stop offset="100%" stopColor="#9E7D47" />
          </linearGradient>
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#C5A880" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Circular Astrolabe / Meridian Ring */}
        <circle cx="32" cy="32" r="30" stroke="url(#goldGrad)" strokeWidth="1.25" opacity="0.6" />
        <circle cx="32" cy="32" r="28" fill="url(#globeGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />

        {/* Globe Latitude & Longitude Arcs */}
        <ellipse cx="32" cy="32" rx="20" ry="27" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.45" />
        <ellipse cx="32" cy="32" rx="10" ry="27" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.35" />
        <line x1="4" y1="32" x2="60" y2="32" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.4" />
        <line x1="8" y1="20" x2="56" y2="20" stroke="url(#goldGrad)" strokeWidth="0.6" opacity="0.3" />
        <line x1="8" y1="44" x2="56" y2="44" stroke="url(#goldGrad)" strokeWidth="0.6" opacity="0.3" />

        {/* The Ladder (Rising to meet the globe it supports) */}
        <g filter="url(#subtleGlow)">
          <path d="M25 54 L28 12" stroke="url(#goldGrad)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M39 54 L36 12" stroke="url(#goldGrad)" strokeWidth="2.2" strokeLinecap="round" />

          <line x1="25.4" y1="48" x2="38.6" y2="48" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="26.0" y1="41" x2="38.0" y2="41" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="26.6" y1="34" x2="37.4" y2="34" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="27.1" y1="27" x2="36.9" y2="27" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="27.6" y1="20" x2="36.4" y2="20" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
          <line x1="28.0" y1="14" x2="36.0" y2="14" stroke="url(#goldGrad)" strokeWidth="1.75" strokeLinecap="round" />
        </g>

        {/* Top North Star / Compass Star of Guidance */}
        <polygon points="32,7 33.5,10.5 37,12 33.5,13.5 32,17 30.5,13.5 27,12 30.5,10.5" fill="url(#goldGrad)" />
      </svg>

      {/* Typography Wordmark in Clean Geist Sans */}
      {variant !== 'mark' && (
        <div className="flex flex-col text-left">
          <span className={`font-heading font-bold ${textPrimary} ${primaryTextColor} tracking-tight leading-none`}>
            PATHFINDERS
          </span>
          <span className={`font-sans ${textSub} tracking-[0.25em] font-medium uppercase mt-0.5 ${subTextColor} leading-none`}>
            The Guide
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
