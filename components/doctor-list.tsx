"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MapPin, Calendar } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

type Doctor = {
  id: string
  name: string
  specialty: string
  address: string
  distance?: string
  rating: number
  availability?: string
  location: {
    lat: number
    lng: number
  }
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useTranslation()
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
          // Default to New York City if location access is denied
          setUserLocation({ lat: 40.7128, lng: -74.006 })
        }
      )
    }
  }, [])

  // Calculate distance between two coordinates in km
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c // Distance in km
    return distance.toFixed(1)
  }

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180)
  }

  useEffect(() => {
    // Simulate API call or search Google Places
    const fetchDoctors = async () => {
      setIsLoading(true)

      if (!userLocation) {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        return
      }

      try {
        // In a real app with Google Places API integrated, you'd connect to the same data source as the map
        setTimeout(() => {
          // Mock data - in a real implementation, this would come from Google Places API
          const mockDoctors = [
            {
              id: "1",
              name: "Dr. Bhushan Vedpathak",
              specialty: "Homeopathy",
              address: "Dr. Vedpathak Homoeopathy Clinic, Pimple Gurav, Pune",
              location: { "lat": 18.5901, "lng": 73.8250 },
              rating: 5.0,
              availability: "Today"
            },
            {
              id: "2",
              name: "Dr. Chandrashekhar Admane",
              specialty: "Homeopathy",
              address: "Atharv Clinic, Dapodi Road, Pimple Gurav, Pune",
              location: { "lat": 18.5910, "lng": 73.8255 },
              rating: 4.8,
              availability: "Today"
            },
            {
              id: "3",
              name: "Dr. Vaijayanti Gaikwad",
              specialty: "General Physician",
              address: "Vaijayanti Gaikawad Clinic, New Sangavi, Pimple Gurav, Pune",
              location: { "lat": 18.5912, "lng": 73.8260 },
              rating: 4.7,
              availability: "Tomorrow"
            },
            {
              id: "4",
              name: "Dr. Pravin Suryawanshi",
              specialty: "General Physician",
              address: "Renu Homeopathic Clinic & Day Care, Gurudatta Nagar, Pimple Gurav, Pune",
              location: { "lat": 18.5925, "lng": 73.8270 },
              rating: 4.6,
              availability: "Today"
            },
            {
              id: "5",
              name: "Dr. Smita Patil",
              specialty: "Dermatology",
              address: "Tulip Skin Clinic, Krushna Chowk, Pimple Gurav, Pune",
              location: { "lat": 18.5938, "lng": 73.8280 },
              rating: 4.5,
              availability: "Friday"
            },
            {
              id: "6",
              name: "Dr. Kiran Chotaliya",
              specialty: "Dermatology",
              address: "Revive Skin Hair Laser & Cosmetology Clinic, Pimple Gurav, Pune",
              location: { "lat": 18.5951, "lng": 73.8290 },
              rating: 4.4,
              availability: "Tomorrow"
            },
            {
              id: "7",
              name: "Dr. Hemant Patil",
              specialty: "Dentistry",
              address: "Laconic Dental Studio, Pimple Saudagar, Pune",
              location: { "lat": 18.5970, "lng": 73.8300 },
              rating: 4.3,
              availability: "Friday"
            },
            {
              id: "8",
              name: "Dr. Baban C Dolas",
              specialty: "Ophthalmology",
              address: "Dr. Agarwals Eye Hospital, Pimple Saudagar, Pune",
              location: { "lat": 18.5983, "lng": 73.8310 },
              rating: 4.2,
              availability: "Today"
            },
            {
              id: "9",
              name: "Dr. Kundan Kharde",
              specialty: "General Surgery",
              address: "Sharvari Hospital, Pimple Nilakh, Pune",
              location: { "lat": 18.5996, "lng": 73.8320 },
              rating: 4.1,
              availability: "Monday"
            },
            {
              id: "10",
              name: "Dr. Seema Madhukar",
              specialty: "Gynecology/Obstetrics",
              address: "Sharvari Hospital, Pimple Nilakh, Pune",
              location: { "lat": 18.6009, "lng": 73.8330 },
              rating: 4.0,
              availability: "Thursday"
            },
            {
              id: "11",
              name: "Dr. Sonal Ashok Erole",
              specialty: "Ophthalmology",
              address: "Dr. Agarwals Eye Hospital, Pimple Saudagar, Pune",
              location: { "lat": 18.6022, "lng": 73.8340 },
              rating: 4.0,
              availability: "Today"
            },
            {
              id: "12",
              name: "Dr. Sumitpal Bhatti",
              specialty: "ENT",
              address: "Dr. Sumitpal Bhatti ENT Clinic, Dapodi, Pune",
              location: { "lat": 18.6035, "lng": 73.8350 },
              rating: 4.0,
              availability: "Wednesday"
            },
            {
              id: "13",
              name: "Dr. Hemant Chavan",
              specialty: "Ayurveda",
              address: "Ayuspanda Ayurvedic Clinic & Panchakarma Centre, Pimple Saudagar, Pune",
              location: { "lat": 18.6048, "lng": 73.8360 },
              rating: 4.0,
              availability: "Friday"
            },
            {
              id: "14",
              name: "Dr. Shailesh Doshi",
              specialty: "Homeopathy",
              address: "Homeocure® Homeopathy Clinic, Pimple Saudagar, Pune",
              location: { "lat": 18.6061, "lng": 73.8370 },
              rating: 4.0,
              availability: "Thursday"
            },
            {
              id: "15",
              name: "Dr. Sana Mokashi",
              specialty: "Dentistry",
              address: "Go Best Dentist, Pimple Saudagar, Pune",
              location: { "lat": 18.6074, "lng": 73.8380 },
              rating: 4.0,
              availability: "Wednesday"
            },
            {
              id: "16",
              name: "Dr. Hina Kherajani",
              specialty: "Dermatology",
              address: "Aura Skin and Laser Clinic, Pimple Saudagar, Pune",
              location: { "lat": 18.6087, "lng": 73.8390 },
              rating: 4.0,
              availability: "Tomorrow"
            },
            {
              id: "17",
              name: "Dr. Vijay Nagdev",
              specialty: "Dermatology",
              address: "The Skin Doctors, Pimple Saudagar, Pune",
              location: { "lat": 18.6100, "lng": 73.8400 },
              rating: 4.0,
              availability: "Tuesday"
            },
            {
              id: "18",
              name: "Dr. Sonal Chavan",
              specialty: "Dermatology",
              address: "Cosmocare Skin Clinic, Pimple Gurav, Pune",
              location: { "lat": 18.6113, "lng": 73.8410 },
              rating: 3.9,
              availability: "Today"
            },
            {
              id: "19",
              name: "Dr. Rohan Jadhav",
              specialty: "Orthopedics",
              address: "Jadhav Orthopedic Hospital, Pimple Gurav, Pune",
              location: { "lat": 18.6126, "lng": 73.8420 },
              rating: 4.2,
              availability: "Monday"
            },
            {
              id: "20",
              name: "Dr. Meera Kulkarni",
              specialty: "Pediatrics",
              address: "Kulkarni Children's Hospital, Pimple Gurav, Pune",
              location: { "lat": 18.6139, "lng": 73.8430 },
              rating: 4.3,
              availability: "Today"
            },
            {
              id: "21",
              name: "Dr. Nikhil Deshmukh",
              specialty: "General Physician",
              address: "Deshmukh Medical Centre, Pimple Gurav, Pune",
              location: { "lat": 18.6152, "lng": 73.8440 },
              rating: 4.1,
              availability: "Tomorrow"
            },
            {
              id: "22",
              name: "Dr. Asha Patil",
              specialty: "Gynecology/Obstetrics",
              address: "Patil Women's Hospital, Pimple Gurav, Pune",
              location: { "lat": 18.6165, "lng": 73.8450 },
              rating: 4.4,
              availability: "Wednesday"
            },
            {
              id: "23",
              name: "Dr. Manoj Kulkarni",
              specialty: "General Physician",
              address: "Kulkarni Multispeciality Clinic, Pimple Gurav, Pune",
              location: { "lat": 18.6178, "lng": 73.8460 },
              rating: 4.2,
              availability: "Friday"
            },
            {
              id: "24",
              name: "Dr. Rekha Kamble",
              specialty: "Dentistry",
              address: "Smile Dental Clinic, Pimple Gurav, Pune",
              location: { "lat": 18.6191, "lng": 73.8470 },
              rating: 4.3,
              availability: "Today"
            },
            {
              id: "25",
              name: "Dr. Suresh Naik",
              specialty: "General Surgery",
              address: "Naik Surgical Centre, Pimple Gurav, Pune",
              location: { "lat": 18.6204, "lng": 73.8480 },
              rating: 4.1,
              availability: "Thursday"
            }
          ]

          // Calculate distance for each doctor
          const doctorsWithDistance = mockDoctors.map(doctor => {
            const distance = calculateDistance(
              userLocation.lat,
              userLocation.lng,
              doctor.location.lat,
              doctor.location.lng
            )
            return {
              ...doctor,
              distance: `${distance} km`
            }
          })

          // Sort by distance
          doctorsWithDistance.sort((a, b) => {
            return parseFloat(a.distance!.split(' ')[0]) - parseFloat(b.distance!.split(' ')[0])
          })

          setDoctors(doctorsWithDistance)
          setIsLoading(false)
        }, 1500)
      } catch (error) {
        console.error("Error fetching doctors:", error)
        setIsLoading(false)
      }
    }

    fetchDoctors()
  }, [userLocation])

  if (isLoading) {
    return (
      <div className="space-y-4 mt-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4 mt-6">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-teal-100 text-teal-800">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{doctor.specialty}</p>

                <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>
                    {doctor.address} • {doctor.distance}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>

                  <div className="flex items-center text-sm text-teal-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>
                      {t("Available")}: {doctor.availability}
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-3 bg-teal-600 hover:bg-teal-700 text-sm h-8">
                  {t("Book Appointment")}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
