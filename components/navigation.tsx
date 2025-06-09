"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import OptimizedImage from "@/components/optimized-image"
import { event } from "@/lib/gtag"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Demo", href: "#demo" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Contact", href: "#contact" },
  ]

  const handleBookDemo = () => {
    if (typeof window !== "undefined") {
      // Track analytics event
      event("click", {
        event_category: "CTA",
        event_label: "Navigation Book Demo",
      })

      window.open("https://calendly.com/ujjwal-it2023-24-recabn/15min", "_blank", "noopener,noreferrer")
    }
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    // Track navigation clicks
    event("click", {
      event_category: "Navigation",
      event_label: href,
    })

    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-xl" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-3 hover:scale-105 transition-transform focus-visible:outline-2 focus-visible:outline-indigo-600 rounded-lg cursor-pointer"
            transition={{ type: "spring", stiffness: 300 }}
            tabIndex={0}
            role="button"
            aria-label="Converzia home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <OptimizedImage
                src="https://i.ibb.co/Vc43TQvR/converzia-logo.png"
                alt="Converzia Logo"
                className="w-14 h-14 object-contain"
                width={56}
                height={56}
                priority
              />
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                aria-hidden="true"
              />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Converzia
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-semibold text-lg relative group focus-visible:outline-2 focus-visible:outline-indigo-600 rounded px-2 py-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                />
              </motion.button>
            ))}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                onClick={handleBookDemo}
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                aria-label="Book a demo with Converzia"
              >
                <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
                Book Demo
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-2 p-6 shadow-2xl border border-white/20"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-gray-700 hover:text-indigo-600 transition-colors font-semibold text-lg focus-visible:outline-2 focus-visible:outline-indigo-600 rounded px-2"
                role="menuitem"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={handleBookDemo}
              className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label="Book a demo with Converzia"
            >
              <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
              Book Demo
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
