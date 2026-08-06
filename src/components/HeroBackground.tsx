import React from 'react';
import heroBgImage from '../assets/image.png';
import Orb from './Orb';

interface HeroBackgroundProps {
  scale?: number;
  translateX?: string;
  translateY?: string;
  opacity?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
  // Orb positioning & scaling props
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
  opacity = 1,
  objectFit = 'contain',
  orbScale = 0.6,
  orbTranslateX = '30%',
  orbTranslateY = '0%',
  orbHue = 0,
  orbHoverIntensity = 0.42,
  orbRotateOnHover = false,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
      {/* 1. Last Layer in Z-Axis: WebGL Interactive Orb */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-auto transition-all duration-500 z-0"
        style={{
          transform: `translate(${orbTranslateX}, ${orbTranslateY}) scale(${orbScale})`,
          transformOrigin: 'center center',
        }}
      >
        <Orb
          hoverIntensity={orbHoverIntensity}
          rotateOnHover={orbRotateOnHover}
          hue={orbHue}
          forceHoverState={false}
          backgroundColor="#ffffff"
        />
      </div>

      {/* 2. Foreground Image Layer */}
      <img
        src={heroBgImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full transition-all duration-500 pointer-events-none z-10"
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
