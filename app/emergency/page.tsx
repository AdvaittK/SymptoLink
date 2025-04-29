"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Phone, Ambulance, Hospital, AlertTriangle, HeartPulse, 
  ShieldAlert, Clock, MapPin, Save, Info, CheckCircle2, 
  ArrowDownToLine
} from "lucide-react"
import { Translator } from "@/components/translator"
import { FadeIn, FadeInStagger } from "@/components/ui/animations"
import { motion, AnimatePresence } from "framer-motion";
import GradientCard from "@/components/ui/gradient-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { BackgroundGrid } from "@/components/ui/background-grid";

export default function EmergencyPage() {
  const [savedInfo, setSavedInfo] = useState({
    name: "",
    contact: "",
    allergies: "",
    bloodType: "",
  });
  
  const [infoSaved, setInfoSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("emergency");
  
  // Emergency locations simulation data
  const emergencyLocations = [
    { name: "City General Hospital", distance: "1.2 miles", time: "5 min", type: "Hospital", address: "123 Medical Ave" },
    { name: "Westside Emergency Center", distance: "2.4 miles", time: "8 min", type: "ER", address: "456 Health Blvd" },
    { name: "Memorial Hospital", distance: "3.5 miles", time: "12 min", type: "Hospital", address: "789 Care Street" },
  ];
  
  // Handle saving emergency info
  const handleSaveInfo = () => {
    if (savedInfo.name && savedInfo.contact) {
      setInfoSaved(true);
      toast({
        title: "Emergency Info Saved",
        description: "Your emergency information has been saved successfully.",
      });
    }
  };

  // Pulse animation for emergency button
  const pulseAnimation = {
    scale: [1, 1.03, 1],
    // Modified shadow effect to be more subtle
    boxShadow: [
      "0 0 0 0 rgba(220, 38, 38, 0.4)",
      "0 0 10px 5px rgba(220, 38, 38, 0.2)",
      "0 0 0 0 rgba(220, 38, 38, 0.4)"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <BackgroundGrid className="absolute inset-0 z-0 opacity-10" />
      <div className="relative z-10">
        <FadeIn>
          <div className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/40 dark:to-red-900/20 p-8 rounded-2xl mb-10 border border-red-200 dark:border-red-800/30 shadow-sm relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-red-500/10 blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <motion.div 
                className="h-16 w-16 rounded-2xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center flex-shrink-0"
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              >
                <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
              </motion.div>
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

        <div className="mb-10">
          <Tabs defaultValue="emergency" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8 w-full md:w-auto mx-auto">
              <TabsTrigger value="emergency" className="text-base">
                <Phone className="mr-2 h-4 w-4" /> 
                <Translator text="Emergency" />
              </TabsTrigger>
              <TabsTrigger value="nearby" className="text-base">
                <MapPin className="mr-2 h-4 w-4" /> 
                <Translator text="Nearby Help" />
              </TabsTrigger>
              <TabsTrigger value="info" className="text-base">
                <Info className="mr-2 h-4 w-4" /> 
                <Translator text="Medical Info" />
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="emergency">
              <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                    <CardDescription className="text-base text-white dark:text-gray-200 font-medium">
                      <Translator text="For immediate medical emergencies" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      animate={pulseAnimation}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                      className="relative rounded-xl overflow-hidden" // Added rounded corners here
                    >
                      <Button 
                        className="w-full mb-4 text-xl py-8 font-bold bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 hover-glow shadow-lg relative z-10 rounded-xl border-2 border-red-400 dark:border-red-700"
                        onClick={() => {
                          // In a real app, this would trigger emergency call functionality
                          toast({
                            title: "Emergency Call",
                            description: "This would initiate a real emergency call in a production app.",
                            variant: "destructive"
                          });
                        }}
                      >
                        <div className="flex items-center justify-center">
                          <div className="bg-white dark:bg-red-900 p-3 rounded-full mr-4 shadow-md">
                            <Phone className="h-8 w-8 text-red-600 dark:text-white animate-pulse" />
                          </div>
                          <span className="text-3xl font-extrabold text-white drop-shadow-md">112</span>
                        </div>
                      </Button>
                    </motion.div>
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
                    <Button 
                      className="w-full mb-4 py-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-600 hover-glow shadow-md"
                      onClick={() => setActiveTab("nearby")}
                    >
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
                <div className="mt-10 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">
                    <Translator text="Emergency Procedures" />
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="cpr">
                      <AccordionTrigger className="hover:text-red-500">
                        <div className="flex items-center">
                          <HeartPulse className="mr-2 h-5 w-5 text-red-500" />
                          <Translator text="CPR Instructions" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li><Translator text="Check if the person is responsive by tapping them and shouting 'Are you okay?'" /></li>
                          <li><Translator text="If no response, call emergency services (112) and get an AED if available." /></li>
                          <li><Translator text="Place the person on their back on a firm, flat surface." /></li>
                          <li><Translator text="Begin chest compressions: Place hands in center of chest, push hard and fast (100-120 compressions per minute)." /></li>
                          <li><Translator text="After 30 compressions, give 2 rescue breaths if trained." /></li>
                          <li><Translator text="Continue cycles of 30 compressions and 2 breaths until emergency help arrives." /></li>
                        </ol>
                        <Alert className="bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 border-red-200 dark:border-red-800/30">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          <AlertDescription>
                            <Translator text="Remember: Proper chest compressions are more important than rescue breaths. If untrained, perform hands-only CPR." />
                          </AlertDescription>
                        </Alert>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="choking">
                      <AccordionTrigger className="hover:text-red-500">
                        <div className="flex items-center">
                          <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
                          <Translator text="Choking Response" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li><Translator text="Ask 'Are you choking?' If the person nods and cannot speak, act immediately." /></li>
                          <li><Translator text="Stand behind the person and slightly to one side." /></li>
                          <li><Translator text="Support their chest with one hand and lean them forward." /></li>
                          <li><Translator text="Give up to 5 sharp blows between their shoulder blades with the heel of your hand." /></li>
                          <li><Translator text="If blockage doesn't clear, stand behind them and put your arms around their waist." /></li>
                          <li><Translator text="Place your fist just above their navel, grasp it with your other hand, and pull sharply inward and upward up to 5 times." /></li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="stroke">
                      <AccordionTrigger className="hover:text-red-500">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-purple-500" />
                          <Translator text="Stroke Recognition (FAST)" />
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <p><Translator text="Remember the acronym FAST to identify stroke symptoms:" /></p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="flex items-center">
                                <span className="text-2xl font-bold mr-2 text-red-500">F</span>
                                <Translator text="Face Drooping" />
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p><Translator text="Ask the person to smile. Is one side of the face drooping?" /></p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="flex items-center">
                                <span className="text-2xl font-bold mr-2 text-red-500">A</span>
                                <Translator text="Arm Weakness" />
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p><Translator text="Ask the person to raise both arms. Does one arm drift downward?" /></p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="flex items-center">
                                <span className="text-2xl font-bold mr-2 text-red-500">S</span>
                                <Translator text="Speech Difficulty" />
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p><Translator text="Ask the person to repeat a simple phrase. Is their speech slurred or strange?" /></p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="flex items-center">
                                <span className="text-2xl font-bold mr-2 text-red-500">T</span>
                                <Translator text="Time to Call" />
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p><Translator text="If any of these signs are present, call emergency services immediately." /></p>
                            </CardContent>
                          </Card>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="nearby">
              <FadeIn>
                <Card className="mb-8 overflow-hidden border-teal-100 dark:border-teal-900/40">
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-teal-400"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-teal-500" />
                        <Translator text="Nearby Emergency Facilities" />
                      </CardTitle>
                      <Badge variant="outline" className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800">
                        <Translator text="Live Data" />
                      </Badge>
                    </div>
                    <CardDescription>
                      <Translator text="Emergency facilities closest to your current location" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl h-[300px] mb-6 relative overflow-hidden">
                      {/* Map placeholder - in a real app, this would be an actual map component */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 mx-auto text-teal-500/50" />
                          <p className="mt-2 text-gray-500 dark:text-gray-400">
                            <Translator text="Interactive map would be displayed here" />
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button variant="outline" size="sm" className="bg-white/80 dark:bg-gray-800/80">
                          <Translator text="Refresh Location" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {emergencyLocations.map((location, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
                        >
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-4">
                              <Hospital className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                              <h3 className="font-medium">{location.name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{location.address}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-teal-700 dark:text-teal-300 mb-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {location.time}
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{location.distance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-gray-100 dark:border-gray-800 pt-4">
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      <Translator text="Get Directions to Nearest Facility" />
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="info">
              <FadeIn>
                <Card className="mb-8 border-indigo-100 dark:border-indigo-900/40">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Info className="h-5 w-5 mr-2 text-indigo-500" />
                      <Translator text="Your Emergency Medical Information" />
                    </CardTitle>
                    <CardDescription>
                      <Translator text="Store important medical information for emergency responders" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <AnimatePresence>
                      {infoSaved && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <Alert className="border-green-200 dark:border-green-900/30 bg-green-50 dark:bg-green-900/20 mb-6">
                            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                            <AlertDescription className="text-green-700 dark:text-green-300">
                              <Translator text="Your emergency information has been saved successfully." />
                            </AlertDescription>
                          </Alert>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          <Translator text="Full Name" />
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={savedInfo.name}
                          onChange={e => setSavedInfo({...savedInfo, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact">
                          <Translator text="Emergency Contact" />
                        </Label>
                        <Input 
                          id="contact" 
                          placeholder="Emergency contact number"
                          value={savedInfo.contact}
                          onChange={e => setSavedInfo({...savedInfo, contact: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="allergies">
                          <Translator text="Allergies" />
                        </Label>
                        <Input 
                          id="allergies" 
                          placeholder="List any allergies"
                          value={savedInfo.allergies}
                          onChange={e => setSavedInfo({...savedInfo, allergies: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="blood-type">
                          <Translator text="Blood Type" />
                        </Label>
                        <Input 
                          id="blood-type" 
                          placeholder="Your blood type"
                          value={savedInfo.bloodType}
                          onChange={e => setSavedInfo({...savedInfo, bloodType: e.target.value})}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                    <Button variant="outline">
                      <ArrowDownToLine className="h-4 w-4 mr-2" />
                      <Translator text="Export Info" />
                    </Button>
                    <Button onClick={handleSaveInfo}>
                      <Save className="h-4 w-4 mr-2" />
                      <Translator text="Save Information" />
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>
        
        <FadeIn delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
                <Translator text="Emergency Preparation Tips" />
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <Translator text="Being prepared for medical emergencies can save lives. Here are some important tips to help you respond effectively during an emergency." />
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
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
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="text-teal-600 dark:text-teal-400 p-0">
                    <Translator text="Learn more" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
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
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="text-teal-600 dark:text-teal-400 p-0">
                    <Translator text="Create plan" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-teal-100 dark:border-teal-900/40 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
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
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="text-teal-600 dark:text-teal-400 p-0">
                    <Translator text="View symptoms" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
