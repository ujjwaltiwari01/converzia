"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import ErrorBoundary from "@/components/error-boundary"
import PerformanceMonitor from "@/components/performance-monitor"

// Lazy load heavy components with better loading states
const NeuralMeshBackground = dynamic(() => import("@/components/neural-mesh-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />,
})

const MouseFollower = dynamic(() => import("@/components/mouse-follower"), {
  ssr: false,
  loading: () => null,
})

const FloatingElements = dynamic(() => import("@/components/floating-elements"), {
  ssr: false,
  loading: () => null,
})

const CalendlyBadge = dynamic(() => import("@/components/calendly-badge"), {
  ssr: false,
  loading: () => null,
})

// Import static components normally for better SEO
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FlowchartGraphics from "@/components/flowchart-graphics"
import FeatureSection from "@/components/feature-section"
import AIFunnelSection from "@/components/ai-funnel-section"
import UseCasesSection from "@/components/use-cases-section"
import CTASection from "@/components/cta-section"
import TestimonialSection from "@/components/testimonial-section"

export default function ClientWrapper() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

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

    // Delay scroll listener to improve initial page load
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }, 2000)

    // Preload critical resources
    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.href = "https://calendly.com/ujjwal-it2023-24-recabn/15min"
    preloadLink.as = "document"
    document.head.appendChild(preloadLink)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Server-side rendering fallback
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <FlowchartGraphics />
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
    <ErrorBoundary>
      <PerformanceMonitor />

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
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <FlowchartGraphics />
        </ErrorBoundary>

        <ErrorBoundary>
          <FeatureSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <AIFunnelSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <UseCasesSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <CTASection />
        </ErrorBoundary>

        <ErrorBoundary>
          <TestimonialSection />
        </ErrorBoundary>
      </main>

      {showCalendly && (
        <Suspense fallback={null}>
          <CalendlyBadge />
        </Suspense>
      )}
    </ErrorBoundary>
  )
}
