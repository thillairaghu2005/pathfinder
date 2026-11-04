import React from 'react';
import heroBgImage from '../assets/image.png';
import Orb from './Orb';

interface HeroBackgroundProps {
  scale?: number;
  translateX?: string;
  translateY?: string;
  opacity?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
  orbScale?: number;
  orbTranslateX?: string;
  orbTranslateY?: string;
  orbHue?: number;
  orbHoverIntensity?: number;
  orbRotateOnHover?: boolean;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  scale = 0.8,
  translateX = '30%',
  translateY = '0%',
  opacity = 0.95,
  objectFit = 'contain',
  orbScale = 0.62,
  orbTranslateX = '30%',
  orbTranslateY = '0%',
  orbHue = 0, // Natural luminous cyan/teal glowing aura
  orbHoverIntensity = 0.45,
  orbRotateOnHover = true,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      {/* 1. Luminous Glowing Orb - Feathered circular mask with 100% transparent boundaries (no square box) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-auto transition-all duration-500 z-0 flex items-center justify-center overflow-hidden"
        style={{
          transform: `translate(${orbTranslateX}, ${orbTranslateY}) scale(${orbScale})`,
          transformOrigin: 'center center',
          maskImage: 'radial-gradient(circle at center, black 62%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 62%, transparent 72%)',
        }}
      >
        <Orb
          hoverIntensity={orbHoverIntensity}
          rotateOnHover={orbRotateOnHover}
          hue={orbHue}
          forceHoverState={false}
          backgroundColor="#FAF8F5"
        />
      </div>

      {/* 2. Foreground Image Layer */}
      <img
        src={heroBgImage}
        alt="Pathfinders Hero Emblem Artwork"
        className="absolute inset-0 w-full h-full transition-all duration-700 pointer-events-none z-10"
        style={{
          objectFit: objectFit,
          objectPosition: 'center center',
          transform: `translate(${translateX}, ${translateY}) scale(${scale})`,
          transformOrigin: 'center center',
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default HeroBackground;
