"use client"

import { motion } from "framer-motion"
import { Calendar, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { event } from "@/lib/gtag"

export default function CalendlyBadge() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      // Track analytics event
      event("click", {
        event_category: "CTA",
        event_label: "Floating Calendly Badge",
      })

      window.open("https://calendly.com/ujjwal-it2023-24-recabn/15min", "_blank", "noopener,noreferrer")
    }
  }

  const handleClose = () => {
    event("click", {
      event_category: "UI",
      event_label: "Close Calendly Badge",
    })
    setIsVisible(false)
  }

  if (!isClient || !isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <Button
          onClick={openCalendly}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          aria-label="Schedule time with Converzia team"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Schedule time with me
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-0 focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Close scheduling widget"
        >
          <X className="h-3 w-3" />
        </Button>

        {/* Pulsing indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full" />
      </div>
    </motion.div>
  )
}
