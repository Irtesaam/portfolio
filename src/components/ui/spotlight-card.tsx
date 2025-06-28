import { useRef, useState, ReactNode, MouseEvent } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255,255,255,0.35)" }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords(null);
  };

  return (
    <div
      ref={divRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`border border-[#222] rounded-3xl p-8 overflow-hidden bg-[#f3f4f6] dark:bg-[#04071c] relative ${className}`}
      style={{ position: 'relative' }}
    >
      {/* Stronger spotlight effect */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full transition-opacity duration-500"
        style={{
          opacity: coords ? 0.85 : 0,
          background: coords
            ? `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 60%)`
            : undefined,
          zIndex: 1,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
