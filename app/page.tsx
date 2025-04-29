"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Activity, MapPin, Phone, Shield, Star, Users, ShieldAlert } from "lucide-react"
import { Translator } from "@/components/translator"
import GradientCard from "@/components/ui/gradient-card"
import { FadeIn, FadeInStagger, SlideIn, ScaleIn } from "@/components/ui/animations"
import { motion } from "framer-motion"
import MedicalAnimation from "@/components/medical-animation"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 pt-6 md:pt-12">
        <FadeIn direction="right" className="flex-1 space-y-8">
          <div className="space-y-4">
            <motion.div 
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium text-teal-800 dark:text-teal-400 flex items-center">
                <Shield className="w-4 h-4 mr-2" /> 
                <Translator text="Your health assistant, powered by AI" />
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold mb-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 dark:from-teal-400 dark:via-teal-300 dark:to-teal-500">
                <Translator text="Your health journey" />
              </span>
              <br />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500 dark:from-teal-500 dark:to-teal-300">
                <Translator text="starts here" />
              </span>
              {/* Decorative elements */}
              <span className="absolute -left-3 top-1/4 w-6 h-6 rounded-full bg-teal-200/50 dark:bg-teal-700/30 blur-sm"></span>
              <span className="absolute -right-4 bottom-1/4 w-8 h-8 rounded-full bg-teal-100/60 dark:bg-teal-800/40 blur-sm"></span>
              <svg className="absolute -bottom-6 left-0 w-full h-3 text-teal-500/20 dark:text-teal-700/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,0 Q50,10 100,0" fill="currentColor" />
              </svg>
            </motion.h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              <Translator text="SymptoLink connects your symptoms to potential diagnoses and helps you find healthcare providers near you." />
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 hover-glow text-lg h-14 px-8 rounded-xl">
              <Link href="/symptoms">
                Check Symptoms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal-500/40 hover:bg-teal-50/50 dark:hover:bg-teal-950/30 text-teal-700 dark:text-teal-400 hover-lift h-14 px-8 rounded-xl">
              <Link href="/find-doctors">
                <Translator text="Find Doctors" />
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center pt-8 gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 border-2 border-white dark:border-gray-950 flex items-center justify-center text-white font-medium text-sm">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center text-amber-500">
                <Star className="fill-amber-500 w-4 h-4" />
                <Star className="fill-amber-500 w-4 h-4" />
                <Star className="fill-amber-500 w-4 h-4" />
                <Star className="fill-amber-500 w-4 h-4" />
                <Star className="fill-amber-500 w-4 h-4 mr-2" />
                <span className="font-bold text-gray-700 dark:text-gray-300">4.9</span>
              </div>
              <p className="text-sm text-gray-500">
                <Translator text="From over 2,000 user reviews" />
              </p>
            </div>
          </div>
        </FadeIn>
        
        <SlideIn direction="left" className="flex-1" delay={0.2}>
          <MedicalAnimation />
        </SlideIn>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GradientCard className="p-6">
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <Activity className="w-8 h-8 text-teal-500" />
                <h3 className="text-xl font-semibold">
                  <Translator text="Symptom Analysis" />
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <Translator text="Get instant analysis of your symptoms and potential conditions." />
              </p>
            </CardContent>
          </GradientCard>

          <GradientCard className="p-6">
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-teal-500" />
                <h3 className="text-xl font-semibold">
                  <Translator text="Find Doctors" />
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <Translator text="Locate healthcare providers near you with detailed information." />
              </p>
            </CardContent>
          </GradientCard>

          <GradientCard className="p-6">
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="w-8 h-8 text-teal-500" />
                <h3 className="text-xl font-semibold">
                  <Translator text="Emergency Help" />
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <Translator text="Quick access to emergency contacts and services." />
              </p>
            </CardContent>
          </GradientCard>
        </FadeInStagger>
      </section>

      {/* Stats Section - Moved above "Why Choose SymptoLink" */}
      <FadeIn className="mb-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 dark:from-teal-600 dark:via-teal-700 dark:to-teal-900"></div>
          
          {/* Medical-themed pattern instead of placeholder */}
          <div className="absolute inset-0 flex flex-wrap opacity-10">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="p-6">
                {i % 3 === 0 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>}
                {i % 3 === 1 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>}
                {i % 3 === 2 && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4m8-4v4M3 10h18M9 16h6" /><rect width="18" height="18" x="3" y="4" rx="2" /></svg>}
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 px-8 py-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              <Translator text="Trusted by thousands of patients" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <ScaleIn delay={0.1}>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <p className="text-4xl lg:text-5xl font-bold mb-2">5000+</p>
                  <p className="text-lg opacity-90"><Translator text="Symptom checks daily" /></p>
                </div>
              </ScaleIn>
              
              <ScaleIn delay={0.2}>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <p className="text-4xl lg:text-5xl font-bold mb-2">98%</p>
                  <p className="text-lg opacity-90"><Translator text="Diagnosis accuracy" /></p>
                </div>
              </ScaleIn>
              
              <ScaleIn delay={0.3}>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <p className="text-4xl lg:text-5xl font-bold mb-2">10k+</p>
                  <p className="text-lg opacity-90"><Translator text="Healthcare providers" /></p>
                </div>
              </ScaleIn>
              
              <ScaleIn delay={0.4}>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <p className="text-4xl lg:text-5xl font-bold mb-2">24/7</p>
                  <p className="text-lg opacity-90"><Translator text="Emergency support" /></p>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Features Grid Section */}
      <section className="mb-24">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            <Translator text="Why Choose SymptoLink" />
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            <Translator text="Our platform combines advanced technology with healthcare expertise to provide you with reliable health insights." />
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover-lift transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white mb-6">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Translator text="Privacy First" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <Translator text="Your health data is encrypted and protected. We never share your information with third parties without your explicit consent." />
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover-lift transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white mb-6">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Translator text="Expert Backed" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <Translator text="Our system is developed in collaboration with healthcare professionals to ensure accurate and reliable health insights." />
              </p>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover-lift transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white mb-6">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                <Translator text="Advanced AI" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <Translator text="Our AI-powered platform analyzes symptoms against a vast database of medical knowledge for accurate potential diagnoses." />
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="mb-24">
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 py-12 px-6">
          <div className="container mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
                <Translator text="What Our Users Say" />
              </h2>
              <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
                <Translator text="SymptoLink has helped thousands of people understand their symptoms and find the right healthcare providers." />
              </p>
            </FadeIn>
            
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover-lift">
                <div className="flex space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  "SymptoLink helped me identify that my symptoms were actually related to migraines, not just headaches. I was able to get proper treatment and my quality of life has improved significantly!"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-medium text-lg mr-4">
                    SJ
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Patient</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover-lift">
                <div className="flex space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  "As a medical professional, I'm impressed with the accuracy of SymptoLink's symptom analysis. It's a great tool for patients to have more informed conversations with their doctors."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-medium text-lg mr-4">
                    MC
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Dr. Michael Chen</p>
                    <p className="text-sm text-gray-500">Cardiologist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover-lift">
                <div className="flex space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  "When my youngest developed a rash and fever, SymptoLink helped me determine it might be more than just a common cold. We went to the doctor right away and caught an infection early."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-medium text-lg mr-4">
                    EW
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Emily Wilson</p>
                    <p className="text-sm text-gray-500">Mother of three</p>
                  </div>
                </div>
              </div>
            </FadeInStagger>
          </div>
        </div>
      </section>
      
      {/* Call To Action Section */}
      <section className="mb-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12">
            {/* Background with gradient and animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700/80 dark:from-teal-500/90 dark:via-teal-600/80 dark:to-teal-800/70"></div>
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-shine bg-[length:200px_100px] animate-shimmer opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-teal-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm">
                  <Translator text="Ready to take control of your health?" />
                </h2>
                <p className="text-lg text-white/90 dark:text-white/90 mb-6 drop-shadow-sm">
                  <Translator text="Join thousands of users who trust SymptoLink for their health needs. Sign up for free and access all our features." />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 hover:text-teal-800 hover-glow text-lg h-14 px-8 rounded-xl shadow-lg">
                    <Link href="/register">
                      <Translator text="Sign Up For Free" />
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white bg-teal-600/20 hover:bg-teal-600/30 dark:hover:bg-white/10 h-14 px-8 rounded-xl shadow-md">
                    <Link href="/symptoms">
                      <Translator text="Try Symptom Checker" />
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-white/80 dark:text-white/70 drop-shadow-sm">
                  <Translator text="No credit card required. Cancel anytime." />
                </p>
              </div>
              
              <div className="hidden lg:block">
                <motion.div 
                  className="w-64 h-64 relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-spin-slow"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/40 animate-spin-slow-reverse"></div>
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-white/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-white/80 p-4 rounded-full border border-teal-200 shadow-2xl">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white">
                        <span className="text-2xl font-bold">SL</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      
    </div>
  )
}
