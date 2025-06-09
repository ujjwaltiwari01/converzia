"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles, Mail, Shield, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Mail,
    title: "Verified emails gets up to 100% inbox rate",
    description: "Our email verification system ensures maximum deliverability",
  },
  {
    icon: Zap,
    title: "Send up to 300 emails/day without getting banned",
    description: "Smart sending patterns that respect provider limits",
  },
  {
    icon: Shield,
    title: "Understands your clients",
    description: "AI analyzes prospect data for perfect personalization",
  },
  {
    icon: Check,
    title: "No templates. No guessing. Just conversions",
    description: "Every email is uniquely crafted for maximum impact",
  },
]

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Trusted by 3,000+ teams across 14 countries</span>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Your AI Sales Rep,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              On Autopilot
            </span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No templates. Just smart outreach that understands your prospects and crafts perfect emails every time.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 rounded-3xl group hover:scale-105">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
