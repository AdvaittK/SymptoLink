'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
  thickness?: 'thin' | 'medium' | 'thick';
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  className,
  thickness = 'medium',
}: LoadingSpinnerProps) {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const thicknessMap = {
    thin: 'border-2',
    medium: 'border-3',
    thick: 'border-4',
  };

  const colorMap = {
    primary: 'border-t-teal-500 dark:border-t-teal-400',
    secondary: 'border-t-indigo-500 dark:border-t-indigo-400',
    accent: 'border-t-amber-500 dark:border-t-amber-400',
    white: 'border-t-white',
  };

  const containerSizes = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
    xl: 'p-4',
  };

  return (
    <div className={cn('flex items-center justify-center', containerSizes[size], className)}>
      <motion.div
        className={cn(
          'rounded-full border-transparent',
          sizeMap[size],
          thicknessMap[thickness],
          colorMap[color]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

interface FancyLoadingProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FancyLoading({ text = 'Loading...', size = 'md', className }: FancyLoadingProps) {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const textSizeMap = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: [0, -10, 0] },
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <div className="flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className={cn('rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-sm', sizeMap[size])}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'loop',
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      {text && <p className={cn('text-gray-700 dark:text-gray-300 font-medium', textSizeMap[size])}>{text}</p>}
    </div>
  );
}

export default LoadingSpinner;
