"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Ambulance, Hospital, AlertTriangle, HeartPulse, ShieldAlert, Clock } from "lucide-react"
import { Translator } from "@/components/translator"
import { FadeIn, FadeInStagger } from "@/components/ui/animations"
import { motion } from "framer-motion";
import GradientCard from "@/components/ui/gradient-card";

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <div className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/40 dark:to-red-900/20 p-8 rounded-2xl mb-10 border border-red-200 dark:border-red-800/30 shadow-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="h-16 w-16 rounded-2xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500 mb-3">
                <Translator text="Emergency Services" />
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
                <Translator text="If you are experiencing a medical emergency, please call emergency services immediately. This page provides quick access to emergency contacts and resources." />
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <GradientCard customGradient="bg-gradient-to-br from-red-400 to-red-600" className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="h-16 w-16 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-5">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              >
                <Ambulance className="h-10 w-10 text-red-600 dark:text-red-500" />
              </motion.div>
            </div>
            <CardTitle className="text-2xl">
              <Translator text="Emergency Services" />
            </CardTitle>
            <CardDescription className="text-base">
              <Translator text="For immediate medical emergencies" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-4 text-lg py-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 hover-glow shadow-md">
              <Phone className="mr-2 h-5 w-5" /> 112
            </Button>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              <Translator text="Call for ambulance, fire, or police emergency services" />
            </p>
          </CardContent>
        </GradientCard>

        <GradientCard gradient="primary" className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="h-16 w-16 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-5">
              <Hospital className="h-10 w-10 text-teal-600 dark:text-teal-400" />
            </div>
            <CardTitle className="text-2xl">
              <Translator text="Nearby Hospitals" />
            </CardTitle>
            <CardDescription className="text-base">
              <Translator text="Find the closest emergency rooms" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full mb-4 py-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 hover-glow shadow-md">
              <Hospital className="mr-2 h-5 w-5" />
              <Translator text="Show Nearby Hospitals" />
            </Button>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              <Translator text="Displays emergency rooms sorted by distance from your location" />
            </p>
          </CardContent>
        </GradientCard>

        <GradientCard gradient="secondary" className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="h-16 w-16 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-5">
              <Phone className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <CardTitle className="text-2xl">
              <Translator text="Health Hotlines" />
            </CardTitle>
            <CardDescription className="text-base">
              <Translator text="Non-emergency health advice" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Translator text="Poison Control" />
              </h3>
              <p className="text-xl font-bold text-indigo-700 dark:text-indigo-400">1-800-222-1222</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-900/80 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Translator text="Mental Health Crisis" />
              </h3>
              <p className="text-xl font-bold text-indigo-700 dark:text-indigo-400">14416</p>
            </div>
          </CardContent>
        </GradientCard>
      </FadeInStagger>
      
      <FadeIn delay={0.3}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              <Translator text="Emergency Preparation Tips" />
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <Translator text="Being prepared for medical emergencies can save lives. Here are some important tips to help you respond effectively during an emergency." />
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-400"></div>
              <CardHeader className="flex items-start space-y-0 pb-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-2">
                  <HeartPulse className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">
                    <Translator text="Know CPR Basics" />
                  </CardTitle>
                  <CardDescription className="text-sm">
                    <Translator text="Learn how to perform basic life-saving techniques" />
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li><Translator text="Check for responsiveness and call for help" /></li>
                  <li><Translator text="Perform chest compressions at 100-120 per minute" /></li>
                  <li><Translator text="Push hard and fast in the center of the chest" /></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-400"></div>
              <CardHeader className="flex items-start space-y-0 pb-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-2">
                  <ShieldAlert className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">
                    <Translator text="Create an Emergency Plan" />
                  </CardTitle>
                  <CardDescription className="text-sm">
                    <Translator text="Be prepared before an emergency occurs" />
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li><Translator text="Keep emergency contact numbers readily available" /></li>
                  <li><Translator text="Know the fastest route to the nearest hospital" /></li>
                  <li><Translator text="Prepare a basic first aid kit for your home" /></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-400"></div>
              <CardHeader className="flex items-start space-y-0 pb-2">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-2">
                  <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <CardTitle className="text-lg mb-1">
                    <Translator text="Recognize Warning Signs" />
                  </CardTitle>
                  <CardDescription className="text-sm">
                    <Translator text="Know when to seek immediate medical help" />
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li><Translator text="Chest pain or severe shortness of breath" /></li>
                  <li><Translator text="Sudden numbness or weakness in face, arm, or leg" /></li>
                  <li><Translator text="Severe pain that comes on suddenly" /></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
