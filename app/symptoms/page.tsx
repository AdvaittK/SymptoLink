"use client";

import { Suspense } from "react"
import { motion } from "framer-motion"
import SymptomForm from "@/components/symptom-form"
import { Skeleton } from "@/components/ui/skeleton"
import { Translator } from "@/components/translator"
import { FadeIn } from "@/components/ui/animations"
import { Brain, ShieldCheck, Activity, ThumbsUp, ArrowRight, Stethoscope, Pill, HeartPulse } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SymptomsPage() {
  return (
    <div className="relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-300/20 to-teal-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-300/10 to-blue-500/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <FadeIn>
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <div className="inline-block px-5 py-2 mb-6 rounded-full bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/40 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800 shadow-sm">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <Brain className="w-4 h-4 mr-2 text-teal-500 animate-pulse" /> 
                <Translator text="AI-Powered Health Analysis" />
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 bg-clip-text text-transparent pb-2 leading-tight">
              <Translator text="Symptom Checker" />
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              <Translator text="Describe your symptoms below and our advanced AI-powered system will analyze them to suggest potential conditions and provide personalized health insights." />
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center items-center mb-10">
              <motion.div 
                className="py-2 px-4 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center text-sm text-teal-800 dark:text-teal-300 font-medium"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(204, 251, 241, 1)", // teal-100
                  boxShadow: "0 4px 6px -1px rgba(45, 212, 191, 0.1), 0 2px 4px -1px rgba(45, 212, 191, 0.06)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Stethoscope className="w-4 h-4 mr-2" />
                <Translator text="Medically Reviewed" />
              </motion.div>
              <motion.div 
                className="py-2 px-4 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center text-sm text-blue-800 dark:text-blue-300 font-medium"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(219, 234, 254, 1)", // blue-100
                  boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)" 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ShieldCheck className="w-4 h-4 mr-2" />
                <Translator text="Privacy Protected" />
              </motion.div>
              <motion.div 
                className="py-2 px-4 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center text-sm text-purple-800 dark:text-purple-300 font-medium"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(243, 232, 255, 1)", // purple-100
                  boxShadow: "0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)" 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Pill className="w-4 h-4 mr-2" />
                <Translator text="Instant Health Insights" />
              </motion.div>
            </div>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-teal-100 dark:border-teal-900/50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white/90 to-blue-50/80 dark:from-teal-950/80 dark:via-gray-950/90 dark:to-blue-950/80 opacity-80"></div>
          
          <div className="relative p-2 sm:p-6">
            <Suspense fallback={
              <div className="p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="animate-spin h-10 w-10 rounded-full border-4 border-teal-500/30 border-t-teal-500"></div>
                </div>
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
            }>
              <SymptomForm />
            </Suspense>
          </div>
        </div>

        <div className="mt-24 mb-10">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
            <Translator text="How It Works" />
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            <Translator text="Our symptom checker uses advanced AI to provide you with personalized health insights in three simple steps" />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn delay={0.1} className="relative">
              <motion.div 
                className="h-full rounded-xl bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-teal-900/20 p-6 border border-teal-100 dark:border-teal-800/50 shadow-sm flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)",
                  borderColor: "rgba(45, 212, 191, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="absolute -top-5 -left-1 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >1</motion.div>
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-teal-100 dark:bg-teal-800/40 flex items-center justify-center mb-5 mt-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Describe Symptoms" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  <Translator text="Enter your symptoms with as much detail as possible including duration, severity, and any triggering factors." />
                </p>
                <div className="w-12 h-1 bg-teal-500/20 my-4"></div>
                <p className="text-teal-600 dark:text-teal-400 text-sm font-medium">
                  <Translator text="Step 1" />
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <motion.div 
                className="h-full rounded-xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 p-6 border border-blue-100 dark:border-blue-800/50 shadow-sm flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
                  borderColor: "rgba(59, 130, 246, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="absolute -top-5 -left-1 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >2</motion.div>
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-800/40 flex items-center justify-center mb-5 mt-4"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="AI Analysis" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  <Translator text="Our advanced AI processes your symptoms against thousands of medical conditions and latest health research." />
                </p>
                <div className="w-12 h-1 bg-blue-500/20 my-4"></div>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  <Translator text="Step 2" />
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3} className="relative">
              <motion.div 
                className="h-full rounded-xl bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 p-6 border border-purple-100 dark:border-purple-800/50 shadow-sm flex flex-col"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)",
                  borderColor: "rgba(168, 85, 247, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div 
                  className="absolute -top-5 -left-1 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >3</motion.div>
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-800/40 flex items-center justify-center mb-5 mt-4"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ThumbsUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Get Results" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  <Translator text="Receive personalized insights about possible conditions and recommended next steps for your healthcare journey." />
                </p>
                <div className="w-12 h-1 bg-purple-500/20 my-4"></div>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                  <Translator text="Step 3" />
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>

        <motion.div 
          className="mt-24 max-w-5xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-teal-100 dark:border-teal-800/50 shadow-md"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(45, 212, 191, 0.15)",
            borderColor: "rgba(45, 212, 191, 0.4)"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                <Translator text="Need Immediate Medical Help?" />
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                <Translator text="If you're experiencing severe symptoms that require immediate attention, please visit our emergency services page." />
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-medium py-6 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                  asChild
                >
                  <a href="/emergency">
                    <Translator text="Emergency Services" />
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="flex-shrink-0 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-inner"
              whileHover={{ 
                rotate: [-1, 1, -1], 
                transition: { repeat: Infinity, duration: 0.3 } 
              }}
            >
              <div className="w-28 h-28 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center animate-pulse">
                <div className="text-red-500 text-6xl font-bold">!</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-20">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-200">
            <Translator text="Why Trust Our Symptom Checker?" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)",
                  borderColor: "rgba(45, 212, 191, 0.3)"
                }}
              >
                <motion.div 
                  className="h-14 w-14 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShieldCheck className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Privacy Protected" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Translator text="Your health data is encrypted and never shared with third parties. Your privacy is our top priority." />
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
                  borderColor: "rgba(59, 130, 246, 0.3)"
                }}
              >
                <motion.div 
                  className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Activity className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Advanced Analysis" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Translator text="Our AI model analyzes thousands of medical data points and stays updated with the latest health research." />
                </p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)",
                  borderColor: "rgba(168, 85, 247, 0.3)"
                }}
              >
                <motion.div 
                  className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4"
                  whileHover={{ rotate: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ThumbsUp className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Doctor Recommended" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Translator text="Developed with healthcare professionals to ensure reliable results and actionable health insights." />
                </p>
              </motion.div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.1), 0 10px 10px -5px rgba(34, 197, 94, 0.04)",
                  borderColor: "rgba(34, 197, 94, 0.3)"
                }}
              >
                <motion.div 
                  className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Stethoscope className="h-7 w-7 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <Translator text="Medical Accuracy" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <Translator text="Our system is continuously trained and validated against medical databases to ensure high accuracy." />
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
