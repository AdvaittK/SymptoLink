"use client";

import Link from "next/link"
import { Translator } from "@/components/translator"
import { motion } from "framer-motion"
import { Twitter, Facebook, Instagram, Linkedin, Heart, Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { FadeIn } from "./ui/animations"
import { Button } from "./ui/button"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/10 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="md:max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  <Translator text="Stay updated with health tips" />
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <Translator text="Subscribe to our newsletter for the latest health insights and features." />
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                  />
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white px-6 py-3 rounded-xl">
                    <Translator text="Subscribe" />
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">SymptoLink</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <Translator text="Your health assistant, powered by AI" />
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-teal-100 hover:text-teal-600 dark:hover:bg-teal-800/30 dark:hover:text-teal-400 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-teal-100 hover:text-teal-600 dark:hover:bg-teal-800/30 dark:hover:text-teal-400 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-teal-100 hover:text-teal-600 dark:hover:bg-teal-800/30 dark:hover:text-teal-400 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-teal-100 hover:text-teal-600 dark:hover:bg-teal-800/30 dark:hover:text-teal-400 transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              <Translator text="Product" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/symptoms" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Symptom Checker" />
                </Link>
              </li>
              <li>
                <Link href="/find-doctors" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Find Doctors" />
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Emergency" />
                </Link>
              </li>
              <li>
                <Link href="/health-resources" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Health Resources" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              <Translator text="Company" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="About Us" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Contact" />
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Careers" />
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <Translator text="Blog" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              <Translator text="Contact Us" />
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-500 mr-3 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  Pune, Maharashtra India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">
                  +91 9999999999
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">
                  support@symptolink.com
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-600 dark:text-gray-400">
                  Mon-Fri: 9AM - 5PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-10">
          <div className="flex flex-col items-center space-y-6">
            {/* Centered "Developed with ❤️ by Advait" */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-1">Developed with</span>
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 mx-1" />
              <span className="mr-1">by</span>
              <Link href="https://github.com/AdvaittK" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
                Advait
              </Link>
            </div>
            
            {/* Copyright and links now below the centered text */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} SymptoLink. <Translator text="All rights reserved." />
              </p>
              
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Translator text="Privacy Policy" />
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Translator text="Terms of Service" />
                </Link>
                <Link href="/cookies" className="text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  <Translator text="Cookies" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
