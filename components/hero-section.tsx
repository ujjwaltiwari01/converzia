"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { event } from "@/lib/gtag"

const VideoModal = dynamic(() => import("./video-modal"), { ssr: false })

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const fullText =
    "Hi there, Our team found your website recently. I was impressed by your unique furniture designs and commitment to quality craftsmanship. However, I noticed that your online visibility could be optimized for more traffic. In today's competitive market, a weak online presence can lead to missed opportunities and reduced brand awareness, impacting your growth potential and revenue...."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const handleBookDemo = () => {
    if (typeof window !== "undefined") {
      // Track analytics event
      event("click", {
        event_category: "CTA",
        event_label: "Hero Book Demo",
      })

      window.open("https://calendly.com/ujjwal-it2023-24-recabn/15min", "_blank", "noopener,noreferrer")
    }
  }

  const handleVideoClick = () => {
    event("click", {
      event_category: "Video",
      event_label: "Hero Video Play",
    })
    setIsVideoOpen(true)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Only 6 demo slots left this week!</span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Prospecting
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Made For
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">B2B</span>
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl lg:text-3xl mb-4 font-bold text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Reaching your prospect is faster than fetching emails.
          </motion.div>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Thinking Cold Outreach? Send AI-written Personalized Emails in 3 Seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-6 rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label="Book a free demo with Converzia"
            >
              Book My Free Demo
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleVideoClick}
              className="border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 hover:text-indigo-700 px-10 py-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              aria-label="Watch AI in action video"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              See AI in Action
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-gray-600 font-medium">AI Email Generator</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-sm w-12">To:</span>
                    <span className="text-gray-900 font-medium">riya@neofurnitures.co</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-sm w-12">Subject:</span>
                    <span className="text-gray-900 font-medium">10x Your Furniture Website Potential..</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="bg-white rounded-lg p-4 min-h-[200px] border border-gray-200">
                      <div className="text-gray-900 leading-relaxed">
                        {typedText}
                        <motion.span
                          className="inline-block w-0.5 h-5 bg-indigo-600 ml-1"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-indigo-700 font-medium text-sm">
                      AI analyzing brand voice and personalizing...
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-indigo-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-indigo-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          />
        </div>
      </motion.div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/9Q6s9gcR6kU"
      />
    </section>
  )
}
