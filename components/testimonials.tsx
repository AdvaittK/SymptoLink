'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FadeIn, FadeInStagger } from '@/components/ui/animations';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc?: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    content: "SymptoLink helped me identify that my symptoms were actually related to migraines, not just headaches. I was able to get proper treatment and my quality of life has improved significantly!",
    rating: 5,
    imageSrc: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    content: "As a medical professional, I'm impressed with the accuracy of SymptoLink's symptom analysis. It's a great tool for patients to have more informed conversations with their doctors.",
    rating: 5,
    imageSrc: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Health Coach",
    content: "I recommend SymptoLink to all my clients. It helps them monitor their symptoms and understand their health better between sessions. The emergency services feature is also a lifesaver!",
    rating: 4,
    imageSrc: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Mother of three",
    content: "When my youngest developed a rash and fever, SymptoLink helped me determine it might be more than just a common cold. We went to the doctor right away and caught an infection early.",
    rating: 5,
    imageSrc: "/placeholder.svg",
  },
];

interface TestimonialProps {
  testimonial: TestimonialData;
  className?: string;
  highlighted?: boolean;
}

export function TestimonialCard({ testimonial, className, highlighted = false }: TestimonialProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden border-gray-100 dark:border-gray-800",
        highlighted && "border-teal-100 dark:border-teal-900/50 shadow-md",
        className
      )}
    >
      {highlighted && (
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400"></div>
      )}
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "w-4 h-4", 
                i < testimonial.rating 
                  ? "text-amber-400 fill-amber-400" 
                  : "text-gray-200 dark:text-gray-800"
              )} 
            />
          ))}
        </div>
        
        <div className="relative mb-4">
          <Quote className="absolute text-teal-100 dark:text-teal-900/40 h-8 w-8 -left-1 -top-2 transform -scale-x-100" />
          <p className="text-gray-700 dark:text-gray-300 relative z-10 pl-6">
            {testimonial.content}
          </p>
        </div>
        
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0 mr-3">
            {testimonial.imageSrc ? (
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  height={40}
                  width={40}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-medium">
                {testimonial.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsGrid() {
  return (
    <FadeIn>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          SymptoLink has helped thousands of people understand their symptoms and find the right healthcare providers.
        </p>
      </div>
      
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            highlighted={testimonial.id === 1} 
          />
        ))}
      </FadeInStagger>
    </FadeIn>
  );
}

export function TestimonialsCarousel() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          What Our Users Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          SymptoLink has helped thousands of people understand their symptoms and find the right healthcare providers.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-2"
            >
              <TestimonialCard testimonial={testimonial} highlighted={testimonial.id === 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsGrid;
