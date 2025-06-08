"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"

// Use dynamic imports with SSR disabled for components with browser-specific code
const NeuralMeshBackground = dynamic(() => import("@/components/neural-mesh-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />,
})

const MouseFollower = dynamic(() => import("@/components/mouse-follower"), { ssr: false })
const FloatingElements = dynamic(() => import("@/components/floating-elements"), { ssr: false })
const CalendlyBadge = dynamic(() => import("@/components/calendly-badge"), { ssr: false })

// Regular imports for components that can be pre-rendered
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import AIFunnelSection from "@/components/ai-funnel-section"
import UseCasesSection from "@/components/use-cases-section"
import CTASection from "@/components/cta-section"
import TestimonialSection from "@/components/testimonial-section"

// Simple loading component
const LoadingFallback = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function ClientWrapper() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted
    setMounted(true)

    // Optimize scroll listener with requestAnimationFrame
    let ticking = false
    let lastScrollY = 0

    const handleScroll = () => {
      lastScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 1000) {
            setShowCalendly(true)
          }
          ticking = false
        })

        ticking = true
      }
    }

    // Delay adding scroll listener to improve initial load performance
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }, 2000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Render a simpler version during SSR and initial hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <FeatureSection />
          <AIFunnelSection />
          <UseCasesSection />
          <CTASection />
          <TestimonialSection />
        </main>
      </div>
    )
  }

  return (
    <>
      {/* Client-side only components with Suspense boundaries */}
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50" />}>
        <NeuralMeshBackground />
      </Suspense>

      <Suspense fallback={null}>
        <MouseFollower />
      </Suspense>

      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <FeatureSection />
        <AIFunnelSection />
        <UseCasesSection />
        <CTASection />
        <TestimonialSection />
      </main>

      {showCalendly && (
        <Suspense fallback={null}>
          <CalendlyBadge />
        </Suspense>
      )}
    </>
  )
}
