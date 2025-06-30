"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

// SpotlightCard: A modern card with a spotlight hover effect
export const PinContainer = ({
  children,
  className,
  containerClassName,
  title,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  href?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  };

  // Mouse leave handler to reset spotlight
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--spotlight-x", `-999px`);
    card.style.setProperty("--spotlight-y", `-999px`);
  };

  return (
    <a
      href={href || "/"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block group", containerClassName)}
    >
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-zinc-900/80 border border-zinc-700 shadow-lg transition-transform duration-300 group-hover:scale-[1.03]",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-radial before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
          className
        )}
        style={{
          // @ts-ignore
          '--spotlight-x': '-999px',
          '--spotlight-y': '-999px',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          style={{
            background:
              'radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(255,255,255,0.08), transparent 60%)',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 p-6 flex flex-col h-full">
          {title && (
            <div className="mb-2 text-xs font-semibold text-zinc-300/80 tracking-wide">
              {title}
            </div>
          )}
          {children}
        </div>
      </div>
    </a>
  );
};
