"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { event } from "@/lib/gtag"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleBookDemo = () => {
    if (typeof window !== "undefined") {
      // Track analytics event
      event("click", {
        event_category: "CTA",
        event_label: "Main CTA Book Demo",
      })

      window.open("https://calendly.com/ujjwal-it2023-24-recabn/15min", "_blank", "noopener,noreferrer")
    }
  }

  const handleEmailClick = () => {
    event("click", {
      event_category: "Contact",
      event_label: "Email Link",
    })
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-300/50 rounded-full px-6 py-3 mb-8"
          >
            <Zap className="w-5 h-5 text-red-300" />
            <span className="text-red-200 font-semibold">Only 6 demo slots left this week!</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight">
            Let's Scale Your
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Outreach
            </span>
          </h2>

          <p className="text-2xl text-indigo-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to see Converzia in action? Book your personalized demo now and start converting more prospects today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto"
          >
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="w-full bg-gradient-to-r from-white via-indigo-50 to-white hover:from-indigo-50 hover:via-white hover:to-indigo-50 text-indigo-900 font-bold px-8 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 group text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Book a demo to send fastest personalized emails"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Send Fastest Personalized Emails Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="mt-8 space-y-4">
              <p className="text-indigo-200 text-lg">
                Or email us directly at{" "}
                <a
                  href="mailto:ujjwal.it2023-24@recabn.ac.in"
                  onClick={handleEmailClick}
                  className="text-white hover:text-indigo-200 transition-colors underline font-semibold focus-visible:outline-2 focus-visible:outline-white rounded"
                  aria-label="Send email to Converzia team"
                >
                  ujjwal.it2023-24@recabn.ac.in
                </a>
              </p>

              <div className="flex items-center justify-center gap-6 text-indigo-200 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Free 30-min demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
