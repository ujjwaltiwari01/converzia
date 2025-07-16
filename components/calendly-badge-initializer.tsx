"use client"

import { useEffect } from "react"

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void
      initBadgeWidget: (options: { url: string; text: string; color: string; textColor: string }) => void
    }
  }
}

export default function CalendlyBadgeInitializer() {
  useEffect(() => {
    // Function to initialize Calendly badge
    const initializeCalendly = () => {
      if (typeof window !== "undefined" && window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/ujjwal-converzia/15min",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
        })
      }
    }

    // Check if Calendly script is already loaded
    if (typeof window !== "undefined" && window.Calendly) {
      initializeCalendly()
    } else {
      // Dynamically load Calendly widget script
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.type = "text/javascript"
      script.async = true
      script.onload = initializeCalendly // Initialize when script loads
      document.body.appendChild(script)

      // Clean up script on unmount
      return () => {
        document.body.removeChild(script)
        // Also remove any Calendly elements if they were added directly to body
        const calendlyBadge = document.querySelector(".calendly-badge-widget")
        if (calendlyBadge) {
          calendlyBadge.remove()
        }
      }
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return null // This component does not render any UI, Calendly badge widget renders itself.
}
