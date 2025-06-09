"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to analytics service
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime)
        }
        if (entry.entryType === "first-input") {
          console.log("FID:", entry.processingStart - entry.startTime)
        }
        if (entry.entryType === "layout-shift") {
          console.log("CLS:", entry.value)
        }
      }
    })

    try {
      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn("Performance monitoring not fully supported")
    }

    return () => observer.disconnect()
  }, [])

  return null
}
