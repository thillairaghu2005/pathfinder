import React, { ReactNode } from "react";
import { BorderGlow } from "./BorderGlow";

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
  backgroundColor?: string;
  colors?: string[];
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  onClick,
  glowColor = "217 91 60",
  backgroundColor = "#FFFFFF",
  colors = ["#1D4ED8", "#3B82F6", "#60A5FA"],
}) => {
  return (
    <BorderGlow
      onClick={onClick}
      glowColor={glowColor}
      backgroundColor={backgroundColor}
      colors={colors}
      className={`${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="p-6 md:p-8 h-full flex flex-col justify-between text-foreground">
        {children}
      </div>
    </BorderGlow>
  );
};

export default GlowCard;
