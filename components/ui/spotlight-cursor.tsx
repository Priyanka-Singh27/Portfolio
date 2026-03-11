'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightCursorProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function SpotlightCursor({
  className,
  size = 400,
  springOptions = { bounce: 0 },
}: SpotlightCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useSpring(-size, springOptions);
  const mouseY = useSpring(-size, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${Math.round(x - size / 2)}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${Math.round(y - size / 2)}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  useEffect(() => {
    if (!parentElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    // Listen on the window so that if the mouse is over the Spline iframe/canvas
    // which might swallow events, we still get the coordinates
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [parentElement, mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-2xl z-[50] mix-blend-screen transition-opacity duration-300',
        'from-white/50 via-white/20 to-transparent opacity-100',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}
