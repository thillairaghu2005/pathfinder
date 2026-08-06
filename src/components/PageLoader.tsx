import React from 'react';
import { Compass } from 'lucide-react';

interface PageLoaderProps {
  isLoading: boolean;
  pageName?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, pageName }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-[#14213D]/95 backdrop-blur-md flex flex-col items-center justify-center px-4 animate-fadeIn">
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden z-[160]">
        <div className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 animate-pulse w-full" />
      </div>

      <div className="flex flex-col items-center space-y-5 text-center">
        {/* Glowing Spinning Ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-white/15 border-t-sky-400 border-r-indigo-400 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <Compass className="w-6 h-6 text-sky-400 animate-pulse" />
          </div>
        </div>

        {/* Page Title & Subtitle */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-sky-400 block font-heading">
            Pathfinders The Guide
          </span>
          <h4 className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">
            {pageName ? `Loading ${pageName}...` : 'Loading...'}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
