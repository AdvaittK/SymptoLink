"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Translator } from "./translator";
import { Droplet, Clock, PlusCircle, Bell } from "lucide-react";

type ReminderType = "water" | "medication" | "exercise" | "appointment";

interface Reminder {
  type: ReminderType;
  timeInMinutes: number;
  label: string;
}

// Changed to default export
export default function HealthReminderTimer() {
  const [currentReminder, setCurrentReminder] = useState<Reminder>({
    type: "water",
    timeInMinutes: 60,
    label: "Drink water"
  });
  
  const [timeRemaining, setTimeRemaining] = useState<{minutes: number, seconds: number}>({
    minutes: currentReminder.timeInMinutes,
    seconds: 0
  });
  
  const [isPulsing, setIsPulsing] = useState(false);
  
  // Every 10 seconds, pulse the icon
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 10000);
    
    return () => clearInterval(pulseInterval);
  }, []);
  
  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          // Reset timer and change reminder type
          const types: ReminderType[] = ["water", "medication", "exercise", "appointment"];
          const randomType = types[Math.floor(Math.random() * types.length)];
          const randomTime = Math.floor(Math.random() * 120) + 20; // Between 20-140 minutes
          
          setTimeout(() => {
            setCurrentReminder({
              type: randomType,
              timeInMinutes: randomTime,
              label: getLabel(randomType)
            });
          }, 0);
          
          return {
            minutes: randomTime,
            seconds: 0
          };
        }
        
        if (prev.seconds === 0) {
          return {
            minutes: prev.minutes - 1,
            seconds: 59
          };
        }
        
        return {
          minutes: prev.minutes,
          seconds: prev.seconds - 1
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  function getLabel(type: ReminderType): string {
    switch (type) {
      case "water": return "Drink water";
      case "medication": return "Next medication";
      case "exercise": return "Movement break";
      case "appointment": return "Doctor appointment";
    }
  }

  function getIcon() {
    switch (currentReminder.type) {
      case "water":
        return <Droplet className="w-6 h-6 text-blue-500" />;
      case "medication":
        return <PlusCircle className="w-6 h-6 text-emerald-500" />;
      case "exercise":
        return <Bell className="w-6 h-6 text-purple-500" />;
      case "appointment":
        return <Clock className="w-6 h-6 text-amber-500" />;
    }
  }

  function getTimeDisplay() {
    if (timeRemaining.minutes >= 60) {
      const hours = Math.floor(timeRemaining.minutes / 60);
      const minutes = timeRemaining.minutes % 60;
      return `${hours}h ${minutes}m`;
    } else {
      return `${timeRemaining.minutes}:${timeRemaining.seconds.toString().padStart(2, '0')}`;
    }
  }

  return (
    <div className="health-reminder-container flex flex-col items-center">
      <div className="health-reminder-display bg-white dark:bg-gray-900 border border-teal-200 dark:border-teal-800/30 shadow-xl rounded-xl p-5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{
              scale: isPulsing ? 1.15 : 1,
              opacity: isPulsing ? 1 : 0.9,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 15 
            }}
            className="icon-container bg-gray-50 dark:bg-gray-800 p-3 rounded-full"
          >
            {getIcon()}
          </motion.div>
          <div className="reminder-text">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              <Translator text={currentReminder.label} />
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <Translator text="Health reminder" />
            </p>
          </div>
        </div>
        <div className="time-display flex items-center justify-center">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-2xl font-bold px-5 py-3 rounded-lg">
            {getTimeDisplay()}
          </div>
        </div>
      </div>
      <motion.div 
        className="circular-progress relative w-64 h-64"
        style={{ position: 'relative' }}
      >
        {/* Background circle */}
        <motion.div 
          className="absolute inset-0 rounded-full border-8 border-gray-100 dark:border-gray-800"
          style={{ borderRadius: '100%' }}
        />
        
        {/* Progress circle */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          className="absolute inset-0"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0d9488"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 40}
            animate={{
              strokeDashoffset: 2 * Math.PI * 40 * (1 - (timeRemaining.minutes * 60 + timeRemaining.seconds) / (currentReminder.timeInMinutes * 60))
            }}
            transition={{ duration: 1 }}
          />
        </svg>
        
        {/* Icon in the middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-full shadow-lg">
            <motion.div
              animate={{
                scale: isPulsing ? 1.2 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 15 
              }}
            >
              {getIcon()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}