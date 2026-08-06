import React, { useEffect, useState } from 'react';
import StrokeText from './StrokeText';

interface LoadingScreenProps {
  isLoading?: boolean;
  onComplete?: () => void;
  pageKey?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading = true, 
  onComplete,
  pageKey = 'initial' 
}) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [fontSize, setFontSize] = useState(128);
  const [letterSpacing, setLetterSpacing] = useState(-4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize(48);
        setLetterSpacing(-2);
      } else if (window.innerWidth < 1024) {
        setFontSize(84);
        setLetterSpacing(-3);
      } else {
        setFontSize(128);
        setLetterSpacing(-4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setFading(true);
      setRemoved(true);
      return;
    }

    setFading(false);
    setRemoved(false);

    const isInitial = pageKey === 'initial';
    const fadeDelay = isInitial ? 2500 : 1100;
    const removeDelay = isInitial ? 3100 : 1500;

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, fadeDelay);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
      if (onComplete) onComplete();
    }, removeDelay);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [pageKey, isLoading, onComplete]);

  if (removed || !isLoading) return null;

  return (
    <div
      key={pageKey}
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center px-4 transition-all duration-500 ease-in-out ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="w-full max-w-5xl flex flex-col items-center justify-center space-y-4">
        <StrokeText
          key={pageKey}
          text="Pathfinders"
          strokeColor="#ffffff"
          fillColor="#F8FAFC"
          strokeWidth={1.4}
          drawDuration={pageKey === 'initial' ? 1.8 : 0.9}
          fillDelay={0.1}
          stagger={0.03}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          fontSize={fontSize}
          fontWeight={800}
          letterSpacing={letterSpacing}
          reverse={false}
        />

        <div className="flex flex-col items-center animate-fadeIn">
          <span className="text-xs md:text-sm tracking-[0.35em] text-white/80 uppercase font-heading font-medium">
            THE GUIDE • ACADEMIC EXCELLENCE
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
