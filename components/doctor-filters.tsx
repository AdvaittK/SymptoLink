"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useTranslation } from "@/components/language-provider"

export default function DoctorFilters() {
  const [distance, setDistance] = useState([5])
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="search">{t("Search")}</Label>
        <Input id="search" placeholder={t("Doctor name or specialty")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialty">{t("Specialty")}</Label>
        <Select>
          <SelectTrigger id="specialty">
            <SelectValue placeholder={t("All Specialties")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("All Specialties")}</SelectItem>
            <SelectItem value="cardiology">{t("Cardiology")}</SelectItem>
            <SelectItem value="dermatology">{t("Dermatology")}</SelectItem>
            <SelectItem value="family-medicine">{t("Family Medicine")}</SelectItem>
            <SelectItem value="neurology">{t("Neurology")}</SelectItem>
            <SelectItem value="pediatrics">{t("Pediatrics")}</SelectItem>
            <SelectItem value="psychiatry">{t("Psychiatry")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="insurance">{t("Insurance")}</Label>
        <Select>
          <SelectTrigger id="insurance">
            <SelectValue placeholder={t("All Insurance")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("All Insurance")}</SelectItem>
            <SelectItem value="aetna">{t("Aetna")}</SelectItem>
            <SelectItem value="bluecross">{t("Blue Cross Blue Shield")}</SelectItem>
            <SelectItem value="cigna">{t("Cigna")}</SelectItem>
            <SelectItem value="medicare">{t("Medicare")}</SelectItem>
            <SelectItem value="united">{t("United Healthcare")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>{t("Distance")}</Label>
          <span className="text-sm text-gray-500">
            {distance[0]} {t("miles")}
          </span>
        </div>
        <Slider defaultValue={[5]} max={50} step={1} onValueChange={setDistance} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="availability">{t("Availability")}</Label>
        <Select>
          <SelectTrigger id="availability">
            <SelectValue placeholder={t("Any Time")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">{t("Any Time")}</SelectItem>
            <SelectItem value="today">{t("Today")}</SelectItem>
            <SelectItem value="tomorrow">{t("Tomorrow")}</SelectItem>
            <SelectItem value="this-week">{t("This Week")}</SelectItem>
            <SelectItem value="next-week">{t("Next Week")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full bg-teal-600 hover:bg-teal-700">{t("Apply Filters")}</Button>
    </div>
  )
}
