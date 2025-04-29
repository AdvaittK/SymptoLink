'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackgroundGridProps {
  children?: React.ReactNode;
  className?: string;
  dotColor?: string;
  dotOpacity?: number;
  dotSize?: number;
  dotSpacing?: number;
  animate?: boolean;
  overlay?: boolean;
}

export function BackgroundGrid({
  children,
  className,
  dotColor = 'currentColor',
  dotOpacity = 0.2,
  dotSize = 1,
  dotSpacing = 24,
  animate = true,
  overlay = false,
}: BackgroundGridProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animate) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [animate]);

  return (
    <div className={cn('relative w-full h-full', className)}>
      <div
        className={cn(
          'absolute inset-0 z-0',
          overlay ? 'pointer-events-none' : ''
        )}
        style={{
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent 0)`,
          opacity: dotOpacity,
        }}
      >
        {animate && (
          <motion.div
            className="absolute w-full h-full bg-radial-light dark:bg-radial-dark opacity-40"
            animate={{
              x: mousePosition.x / 20,
              y: mousePosition.y / 20,
            }}
            transition={{ type: 'spring', damping: 50, stiffness: 50 }}
          />
        )}
      </div>
      
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

interface GlowingBackgroundProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowPosition?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'random';
  glowSize?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export function GlowingBackground({
  children,
  className,
  glowColor = 'rgba(20, 184, 166, 0.4)',
  glowPosition = 'center',
  glowSize = 'lg',
  animate = true,
}: GlowingBackgroundProps) {
  const sizeMap = {
    sm: '30%',
    md: '50%',
    lg: '70%',
    xl: '100%',
  };

  const positionMap = {
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    'top-left': { top: '0', left: '0' },
    'top-right': { top: '0', right: '0' },
    'bottom-left': { bottom: '0', left: '0' },
    'bottom-right': { bottom: '0', right: '0' },
    'random': { top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` },
  };

  const glowPositionStyle = positionMap[glowPosition];

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          ...glowPositionStyle,
          width: sizeMap[glowSize],
          height: sizeMap[glowSize],
          background: glowColor,
          opacity: 0.5,
          zIndex: 0,
        }}
        animate={animate ? {
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        } : undefined}
        transition={animate ? {
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        } : undefined}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackgroundGrid;
