'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'none';
  customGradient?: string;
  hoverEffect?: boolean;
  borderGlow?: boolean;
}

export default function GradientCard({
  children,
  className,
  gradient = 'primary',
  customGradient,
  hoverEffect = true,
  borderGlow = false,
}: GradientCardProps) {
  // Define gradient styles
  const gradientStyles = {
    primary: 'bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-gray-950',
    secondary: 'bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950',
    accent: 'bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-950',
    none: '',
  };

  // Define border styles
  const borderStyles = borderGlow
    ? 'border-transparent dark:border-transparent shadow-glow-sm'
    : 'border-gray-100 dark:border-gray-800';

  // Define hover effects
  const hoverStyles = hoverEffect
    ? 'hover-lift hover:shadow-md transition-all duration-300'
    : '';

  return (
    <Card
      className={cn(
        'overflow-hidden relative',
        customGradient || gradientStyles[gradient],
        borderStyles,
        hoverStyles,
        className
      )}
    >
      {/* Add a subtle pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Add a subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_200%] animate-shimmer opacity-10 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Card>
  );
}
