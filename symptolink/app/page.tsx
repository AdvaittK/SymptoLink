import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Activity, MapPin, Phone, Sparkles, Zap, Heart } from "lucide-react"
import { Translator } from "@/components/translator"
// Fix imports to use relative paths instead of alias paths
import HeroComponent from "../components/hero-component"
import FeaturesComponent from "../components/features-component"
import CompaniesComponent from "../components/companies-component"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <HeroComponent />
        {/* Partners Section */}
      <CompaniesComponent />
      
      {/* Features Section */}
      <FeaturesComponent />
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                <Translator text="Ready to start your health journey?" />
              </span>
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              <Translator text="SymptoLink is here to guide you toward better health decisions with accurate symptom checking and doctor recommendations." />
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Link href="/symptoms">
                  <Translator text="Check Symptoms" />
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/find-doctors">
                  <Translator text="Find Doctors" />
                </Link>
              </Button>            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/10 mb-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center rounded-xl border border-blue-100 dark:border-blue-800/30 bg-white dark:bg-gray-950 p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                <Translator text="Take control of your health today" />
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              <Translator text="Create an account to save your health history, get personalized recommendations, and connect with healthcare providers." />
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md">
              <Link href="/register">
                <Translator text="Create Free Account" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
