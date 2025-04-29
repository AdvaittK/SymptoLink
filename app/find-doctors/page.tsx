"use client";

import { Suspense } from "react"
import DoctorMap from "@/components/doctor-map"
import DoctorFilters from "@/components/doctor-filters"
import DoctorList from "@/components/doctor-list"
import { Skeleton } from "@/components/ui/skeleton"
import { Translator } from "@/components/translator"
import { FadeIn } from "@/components/ui/animations"
import { MapPin, Search, Filter, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function FindDoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <FadeIn>
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900">
              <span className="text-sm font-medium text-indigo-800 dark:text-indigo-400 flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" /> 
                <Translator text="Healthcare Provider Locator" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary">
              <Translator text="Find Healthcare Providers" />
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <Translator text="Discover qualified healthcare professionals in your area specializing in your needs." />
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <FadeIn delay={0.1}>
            <motion.div 
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
                borderColor: "rgba(79, 70, 229, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Search className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <h3 className="text-base font-medium mb-2">
                <Translator text="Find Specialists" />
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <Translator text="Search for doctors by specialty or medical condition." />
              </p>
            </motion.div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <motion.div 
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
                borderColor: "rgba(79, 70, 229, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Filter className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <h3 className="text-base font-medium mb-2">
                <Translator text="Filter Results" />
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <Translator text="Narrow down options by distance, availability, and insurance." />
              </p>
            </motion.div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <motion.div 
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
                borderColor: "rgba(79, 70, 229, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <h3 className="text-base font-medium mb-2">
                <Translator text="Read Reviews" />
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <Translator text="See ratings and patient experiences to make informed choices." />
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            <DoctorFilters />
            <Suspense fallback={<Skeleton className="h-[600px] w-full mt-6 rounded-xl" />}>
              <DoctorList />
            </Suspense>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 p-1 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-md">
            <Suspense fallback={<Skeleton className="h-[600px] w-full rounded-xl" />}>
              <DoctorMap />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
