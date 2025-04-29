"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Heart, 
  Brain, 
  BarChart, 
  LineChart,
  Pill,
  Stethoscope,
  Microscope,
  Dna,
  User,
  AlarmClock
} from "lucide-react";

export default function MedicalAnimation() {
  return (
    <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden">
      {/* Background with gradient - more rounded corners */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-[2.5rem] border border-teal-100/50 dark:border-teal-800/30"></div>
      
      {/* Background glows - positioned inside the container properly */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl"></div>
      
      {/* Heartbeat line passing behind the heart */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0,250 L100,250 L130,220 L160,280 L190,150 L220,350 L250,200 L280,250 L310,250 L340,150 L370,350 L400,180 L430,320 L460,250 L490,250 L520,180 L550,320 L580,250 L610,250 L640,220 L670,280 L700,150 L730,350 L760,250 L800,250" 
          stroke="#0d9488" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="heartbeat-line"
        />
      </svg>

      {/* Large Central pulsing heart with teal color - positioned above the heartbeat line */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="h-60 w-60 rounded-full bg-teal-50/80 dark:bg-teal-900/30 backdrop-blur-[2px] flex items-center justify-center shadow-lg border border-teal-200/60 dark:border-teal-700/40">
            <Heart 
              className="h-36 w-36 text-teal-500 drop-shadow-md" 
              fill="rgba(20, 184, 166, 0.3)"
              strokeWidth={1.5}
            />
          </div>
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 pointer-events-none"></div>
          {/* Subtle pulse ring animation */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-teal-400/20 dark:border-teal-400/15"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Medical Icons with animations - keep the same as before */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top icons (outside the box) */}
        <motion.div 
          className="absolute"
          style={{ left: '10%', top: '5%' }}
          animate={{ 
            y: [0, -8, 0], 
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <div className="h-16 w-16 rounded-full bg-red-50/80 dark:bg-red-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-red-200/50 dark:border-red-800/30">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ left: '38%', top: '7%' }}
          animate={{ 
            y: [0, -10, 0], 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            delay: 0.7,
            ease: "easeInOut"
          }}
        >
          <div className="h-16 w-16 rounded-full bg-purple-50/80 dark:bg-purple-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-purple-200/50 dark:border-purple-800/30">
            <Brain className="h-8 w-8 text-purple-500" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute"
          style={{ right: '15%', top: '6%' }}
          animate={{ 
            y: [0, -7, 0], 
            scale: [1, 1.06, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.3,
            delay: 1.5,
            ease: "easeInOut"
          }}
        >
          <div className="h-16 w-16 rounded-full bg-cyan-50/80 dark:bg-cyan-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-cyan-200/50 dark:border-cyan-800/30">
            <Microscope className="h-8 w-8 text-cyan-500" />
          </div>
        </motion.div>

        {/* Side icons (outside the box) */}
        <motion.div 
          className="absolute"
          style={{ left: '5%', top: '35%' }}
          animate={{ 
            x: [0, -6, 0], 
            scale: [1, 1.07, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.6,
            delay: 0.2,
            ease: "easeInOut"
          }}
        >
          <div className="h-14 w-14 rounded-full bg-amber-50/80 dark:bg-amber-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-amber-200/50 dark:border-amber-800/30">
            <Pill className="h-7 w-7 text-amber-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ right: '5%', bottom: '62%' }}
          animate={{ 
            y: [0, 8, 0], 
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.5,
            delay: 1.2,
            ease: "easeInOut" 
          }}
        >
          <div className="h-16 w-16 rounded-full bg-blue-50/80 dark:bg-blue-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-blue-200/50 dark:border-blue-800/30">
            <BarChart className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute"
          style={{ right: '5%', top: '70%' }}
          animate={{ 
            x: [0, 6, 0], 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5.2,
            delay: 0.9,
            ease: "easeInOut"
          }}
        >
          <div className="h-14 w-14 rounded-full bg-green-50/80 dark:bg-green-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-green-200/50 dark:border-green-800/30">
            <AlarmClock className="h-7 w-7 text-green-500" />
          </div>
        </motion.div>
        
        {/* Bottom icons (outside the box) */}
        <motion.div 
          className="absolute"
          style={{ left: '10%', bottom: '7%' }}
          animate={{ 
            y: [0, 8, 0], 
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.5,
            delay: 1.2,
            ease: "easeInOut" 
          }}
        >
          <div className="h-16 w-16 rounded-full bg-blue-50/80 dark:bg-blue-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-blue-200/50 dark:border-blue-800/30">
            <BarChart className="h-8 w-8 text-blue-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ left: '42%', bottom: '6%' }}
          animate={{ 
            y: [0, 7, 0], 
            scale: [1, 1.06, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.8,
            delay: 1.7,
            ease: "easeInOut"
          }}
        >
          <div className="h-16 w-16 rounded-full bg-indigo-50/80 dark:bg-indigo-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-indigo-200/50 dark:border-indigo-800/30">
            <User className="h-8 w-8 text-indigo-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ right: '20%', bottom: '4%' }}
          animate={{ 
            y: [0, 10, 0], 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            delay: 0.5,
            ease: "easeInOut"
          }}
        >
          <div className="h-16 w-16 rounded-full bg-teal-50/80 dark:bg-teal-950/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-teal-200/50 dark:border-teal-800/30">
            <Stethoscope className="h-8 w-8 text-teal-500" />
          </div>
        </motion.div>

        {/* Icons inside the box for additional visual interest */}
        <motion.div 
          className="absolute"
          style={{ left: '20%', top: '25%' }}
          animate={{ 
            y: [0, -5, 0], 
            scale: [1, 1.08, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            delay: 0.75,
            ease: "easeInOut"
          }}
        >
          <div className="h-12 w-12 rounded-full bg-teal-50/60 dark:bg-teal-950/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-teal-200/30 dark:border-teal-800/20">
            <Activity className="h-6 w-6 text-teal-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ right: '25%', top: '35%' }}
          animate={{ 
            y: [0, -9, 0], 
            scale: [1, 1.07, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5.3,
            delay: 1.3,
            ease: "easeInOut"
          }}
        >
          <div className="h-10 w-10 rounded-full bg-pink-50/60 dark:bg-pink-950/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-pink-200/30 dark:border-pink-800/20">
            <Dna className="h-5 w-5 text-pink-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ left: '25%', bottom: '25%' }}
          animate={{ 
            y: [0, -6, 0], 
            scale: [1, 1.06, 1],
            opacity: [0.65, 0.85, 0.65],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.7,
            delay: 0.3,
            ease: "easeInOut"
          }}
        >
          <div className="h-11 w-11 rounded-full bg-orange-50/60 dark:bg-orange-950/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-orange-200/30 dark:border-orange-800/20">
            <LineChart className="h-5 w-5 text-orange-500" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ right: '20%', bottom: '30%' }}
          animate={{ 
            y: [0, -8, 0], 
            scale: [1, 1.04, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4.2,
            delay: 0.9,
            ease: "easeInOut"
          }}
        >
          <div className="h-10 w-10 rounded-full bg-blue-50/60 dark:bg-blue-950/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-blue-200/30 dark:border-blue-800/20">
            <Activity className="h-5 w-5 text-blue-500" />
          </div>
        </motion.div>
      </div>
      
      {/* Add animation for heartbeat line to globals.css */}
      <style jsx global>{`
        .heartbeat-line {
          animation: heartbeat-animation 5s ease-in-out infinite forwards;
        }
        
        @keyframes heartbeat-animation {
          0% {
            stroke-dashoffset: 1200;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1200;
          }
        }
      `}</style>
    </div>
  );
}