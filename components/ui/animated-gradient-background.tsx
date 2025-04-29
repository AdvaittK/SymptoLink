'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedGradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute -inset-[100px] opacity-20 dark:opacity-30"
          style={{
            background: 
              'radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.5), transparent 40%), ' +
              'radial-gradient(circle at 75% 75%, rgba(45, 212, 191, 0.5), transparent 40%), ' +
              'radial-gradient(circle at 60% 30%, rgba(94, 234, 212, 0.4), transparent 50%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
