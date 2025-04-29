"use client";

import { Suspense, useState } from "react"
import DoctorMap from "@/components/doctor-map"
import DoctorFilters from "@/components/doctor-filters"
import DoctorList from "@/components/doctor-list"
import { Skeleton } from "@/components/ui/skeleton"
import { Translator } from "@/components/translator"
import { FadeIn } from "@/components/ui/animations"
import { MapPin, Search, Filter, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function FindDoctorsPage() {
  const [activeView, setActiveView] = useState<"list" | "map">("list")

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto mb-8 md:mb-12">
        <FadeIn>
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" /> 
                <Translator text="Healthcare Provider Locator" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <Translator text="Find Healthcare Providers" />
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              <Translator text="Discover qualified healthcare professionals in your area specializing in your needs." />
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <FadeIn delay={0.1}>
            <motion.div 
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04)",
                borderColor: "rgba(20, 184, 166, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Search className="h-6 w-6 text-teal-600 dark:text-teal-400" />
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
                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04)",
                borderColor: "rgba(20, 184, 166, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                <Filter className="h-6 w-6 text-teal-600 dark:text-teal-400" />
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
                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04)",
                borderColor: "rgba(20, 184, 166, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.15, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="h-6 w-6 text-teal-600 dark:text-teal-400" />
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

      {/* Mobile view selector */}
      <div className="lg:hidden mb-6">
        <Tabs defaultValue="list" className="w-full" onValueChange={(value) => setActiveView(value as "list" | "map")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">
              <Translator text="List View" />
            </TabsTrigger>
            <TabsTrigger value="map">
              <Translator text="Map View" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters section - always visible on desktop, conditionally on mobile */}
        <div className={`${activeView === "map" ? "hidden lg:block" : ""} lg:col-span-1`}>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="font-semibold text-lg mb-4">
              <Translator text="Filter Options" />
            </h2>
            <DoctorFilters />
          </div>
        </div>
        
        {/* Doctor list - conditionally visible based on activeView on mobile */}
        <div className={`${activeView === "map" ? "hidden lg:block" : ""} lg:col-span-1 h-[calc(100vh-300px)] lg:h-[800px] overflow-y-auto`}>
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
            <h2 className="font-semibold text-lg mb-4">
              <Translator text="Healthcare Providers" />
            </h2>
            <Suspense fallback={<Skeleton className="h-[600px] w-full rounded-xl" />}>
              <DoctorList />
            </Suspense>
          </div>
        </div>
        
        {/* Map section - always visible on desktop, conditionally on mobile */}
        <div className={`${activeView === "list" ? "hidden lg:block" : ""} lg:col-span-2 h-[calc(100vh-300px)] lg:h-[800px]`}>
          <div className="bg-white dark:bg-gray-900 p-1 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm h-full">
            <Suspense fallback={<Skeleton className="h-full w-full rounded-xl" />}>
              <DoctorMap />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
