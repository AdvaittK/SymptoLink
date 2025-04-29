'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({ 
  children, 
  className, 
  direction = 'none', 
  delay = 0,
  duration = 0.5,
  once = true
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 30;
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve for smooth easing
        },
      },
    };
    return variants;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.1, // 10% of the element must be visible
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element is visible
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.1,
  childDelay = 0,
  duration = 0.5,
  once = true,
}: FadeInStaggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration,
                  ease: [0.25, 0.1, 0.25, 1.0],
                },
              },
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export function SlideIn({ 
  children, 
  className, 
  direction = 'up', 
  delay = 0,
  duration = 0.5,
}: SlideInProps) {
  const getSlideDirection = () => {
    switch (direction) {
      case 'up': return { initial: { y: 50 }, animate: { y: 0 } };
      case 'down': return { initial: { y: -50 }, animate: { y: 0 } };
      case 'left': return { initial: { x: 50 }, animate: { x: 0 } };
      case 'right': return { initial: { x: -50 }, animate: { x: 0 } };
      default: return { initial: { y: 50 }, animate: { y: 0 } };
    }
  };
  
  const { initial, animate } = getSlideDirection();
  
  return (
    <motion.div
      className={className}
      initial={{ ...initial, opacity: 0 }}
      animate={{ ...animate, opacity: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  );
}

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScaleIn({ 
  children, 
  className, 
  delay = 0,
  duration = 0.5,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
    >
      {children}
    </motion.div>
  );
}

export default { FadeIn, FadeInStagger, SlideIn, ScaleIn };
