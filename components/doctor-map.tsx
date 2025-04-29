"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Navigation, AlertCircle } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

type Location = {
  lat: number
  lng: number
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

// Default location (US center) if user doesn't share location
const defaultLocation = { lat: 37.0902, lng: -95.7129 }

// Custom marker icon hosted securely over HTTPS
const MARKER_ICON_URL = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"

export default function DoctorMap() {
  const [userLocation, setUserLocation] = useState<Location | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [locationLoading, setLocationLoading] = useState(true)
  const { t } = useTranslation()

  // Load Google Maps API with the API key
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // Valid options according to the library's documentation
    version: "weekly",
  })

  // Get user location once on component mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError(t("Geolocation is not supported by your browser"))
      setLocationLoading(false)
      // Fall back to default location
      setUserLocation(defaultLocation)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success - set user location
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setLocationLoading(false)
      },
      (error) => {
        console.error("Error getting location:", error)
        
        // Display appropriate error message based on error code
        if (error.code === 1) { // PERMISSION_DENIED
          setLocationError(t("Location access denied. Please enable location services to see nearby doctors."))
        } else {
          setLocationError(t("Could not detect your location."))
        }
        
        // Fall back to default location
        setUserLocation(defaultLocation)
        setLocationLoading(false)
      }
    )
  }, [t])

  // Retry getting location
  const retryLocation = () => {
    setLocationError(null)
    setLocationLoading(true)
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setLocationLoading(false)
        },
        (error) => {
          console.error("Error getting location on retry:", error)
          setLocationError(t("Location access still denied. Using default location instead."))
          setUserLocation(defaultLocation)
          setLocationLoading(false)
        }
      )
    }
  }

  // Check if API key is missing
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center p-6">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 text-lg font-semibold">{t("Google Maps API key is missing")}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {t("Please add your Google Maps API key to the environment variables")}
          </p>
        </div>
      </Card>
    )
  }

  // If Google Maps failed to load
  if (loadError) {
    console.error("Google Maps load error:", loadError);
    return (
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center p-6">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 text-lg font-semibold">{t("Error loading Google Maps")}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {t("Please check your internet connection or API key configuration")}
          </p>
          <p className="text-xs mt-4 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto">
            {loadError.toString()}
          </p>
        </div>
      </Card>
    )
  }

  // If maps is still loading
  if (!isLoaded) {
    return (
      <Card className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-teal-600" />
          <p className="text-lg">{t("Loading Map...")}</p>
        </div>
      </Card>
    )
  }

  // Create size for marker safely after maps are loaded
  const markerSize = isLoaded ? new window.google.maps.Size(38, 38) : undefined;

  // If there was a location error but we're using default location
  if (locationError && userLocation) {
    return (
      <Card className="overflow-hidden">
        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-800/30">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <p className="text-sm text-amber-800 dark:text-amber-200">{locationError}</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={retryLocation}
              className="ml-auto text-xs"
            >
              {t("Allow Location")}
            </Button>
          </div>
        </div>
        <div className="h-[560px]">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            zoom={12}
            options={{
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: true,
            }}
          >
            <Marker
              position={userLocation}
              icon={{
                url: MARKER_ICON_URL,
                scaledSize: markerSize,
              }}
            />
          </GoogleMap>
        </div>
      </Card>
    )
  }

  // Normal map display - we have location and no errors
  return (
    <Card className="overflow-hidden">
      <div className="h-[600px]">
        {userLocation && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            zoom={14}
            options={{
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: true,
            }}
          >
            <Marker
              position={userLocation}
              icon={{
                url: MARKER_ICON_URL,
                scaledSize: markerSize,
              }}
            />
          </GoogleMap>
        )}
      </div>
      {userLocation && (
        <div className="p-4 border-t">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">{t("Your coordinates")}: </span>
            {userLocation.lat.toFixed(6)}, {userLocation.lng.toFixed(6)}
          </p>
        </div>
      )}
    </Card>
  )
}
