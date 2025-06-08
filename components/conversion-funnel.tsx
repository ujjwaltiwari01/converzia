"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Upload, Brain, Send, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Sheet",
    description: "Import your prospect list with just a few clicks",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Understands + Crafts Email",
    description: "AI researches each prospect and creates personalized messages",
  },
  {
    number: "03",
    icon: Send,
    title: "Personal Outreach at Scale",
    description: "Send 1000++ of personalized emails that feel human-written",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Get Replies. Track Results.",
    description: "Monitor performance and optimize your outreach strategy",
  },
]

export default function ConversionFunnel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From prospect list to closed deals in four simple steps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                />
              )}

              <Card className="relative z-10 p-8 h-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <motion.div className="relative mb-6" whileHover={{ scale: 1.1 }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
