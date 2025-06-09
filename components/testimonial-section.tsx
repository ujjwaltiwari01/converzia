"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Converzia helped us close 4X more leads in 2 weeks. The AI actually understands our brand voice better than some of our team members.",
    author: "Sarah Chen",
    title: "Founder",
    company: "Elite SaaS Co.",
    avatar: "👩‍💼",
    logo: "🚀",
    rating: 5,
  },
  {
    quote: "Finally, an AI tool that doesn't sound like a robot. Our reply rates went from 2% to 18% overnight.",
    author: "Marcus Rodriguez",
    title: "Head of Sales",
    company: "TechFlow Agency",
    avatar: "👨‍💼",
    logo: "⚡",
    rating: 5,
  },
  {
    quote:
      "I loved the personalized email it generates out of my website data. Each email feels like I wrote it myself, but I'm reaching 15x more prospects daily.",
    author: "Shashank Gupta",
    title: "Co-founder",
    company: "Radian Marketing",
    avatar: "👩‍💻",
    logo: "📈",
    rating: 5,
  },
  {
    quote: "We went from 50 to 500 qualified leads per month. Converzia is like having a team of expert copywriters.",
    author: "David Kim",
    title: "CEO",
    company: "ScaleUp Inc.",
    avatar: "👨‍💻",
    logo: "🎯",
    rating: 5,
  },
  {
    quote:
      "I really can't believe how well this tool can get customized. Team is very supportive when it comes to setting up cold outreach for me.",
    author: "Akul Bharti",
    title: "Founder",
    company: "The Perfect Squad",
    avatar: "👩‍🔬",
    logo: "💎",
    rating: 5,
  },
]

export default function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 to-indigo-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-green-600 fill-current" />
            <span className="text-green-700 font-semibold">Loved by 3,000+ teams across 14 countries</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Loved by Sales Teams
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See what our customers are saying about their results with Converzia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <Card className="p-12 bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl relative overflow-hidden">
            <Quote className="absolute top-8 right-8 h-12 w-12 text-indigo-200" />

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="text-6xl">{testimonials[currentIndex].avatar}</div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].author}</div>
                  <div className="text-indigo-600 font-semibold text-lg">{testimonials[currentIndex].title}</div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">{testimonials[currentIndex].logo}</span>
                    <span>{testimonials[currentIndex].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mt-8">
              <Button variant="ghost" onClick={prevTestimonial} className="p-3 rounded-full hover:bg-indigo-50">
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-indigo-600 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button variant="ghost" onClick={nextTestimonial} className="p-3 rounded-full hover:bg-indigo-50">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 text-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold">3,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
              <span className="font-semibold">18% Average Reply Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
              <span className="font-semibold">4.9/5 Customer Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
