"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~";

export function DecryptedText({
  text,
  className = "",
  duration = 1200,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let animationFrame: number;
    const original = text;
    const chars = CHARS;
    // Make the animation faster by reducing the number of iterations
    const iterations = Math.ceil(duration / 8); // Lower iterations = faster animation

    function randomChar() {
      return chars[Math.floor(Math.random() * chars.length)];
    }

    function animate() {
      let displayed = "";
      for (let i = 0; i < original.length; i++) {
        if (i < frame * (original.length / iterations)) {
          displayed += original[i];
        } else if (original[i] === " ") {
          displayed += " ";
        } else {
          // Use a monospace placeholder to keep length
          displayed += randomChar();
        }
      }
      // Pad with invisible chars if needed to keep width stable
      while (displayed.length < original.length) {
        displayed += " ";
      }
      if (el) el.textContent = displayed;
      frame++;
      if (frame <= iterations) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        if (el) el.textContent = original;
      }
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [text, duration]);

  return (
    <span
      ref={ref}
      className={cn(
        // Responsive font sizes and wrapping
        "block whitespace-pre-line font-mono leading-tight tracking-normal break-words w-full text-[1.3rem] sm:text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem]",
        className
      )}
      aria-label={text}
      style={{ letterSpacing: '0em', wordBreak: 'break-word' }}
    />
  );
}
