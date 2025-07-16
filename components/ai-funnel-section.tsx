"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Upload, Globe, Brain, Mail, BarChart3, ArrowRight, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Sheet",
    description: "Import your prospect list with just a few clicks",
    emoji: "📄",
    stats: "1000+ prospects",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Globe,
    title: "We Visit Each Website",
    description: "AI automatically researches each prospect's business",
    emoji: "🌐",
    stats: "99.9% accuracy",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Analyzes Voice & Persona",
    description: "Learns your voice and maintains consistent messaging",
    emoji: "🧠",
    stats: "15+ data points",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    icon: Mail,
    title: "Cold Email Becomes Warm Intro",
    description: "Creates personalized emails that feel like warm intros",
    emoji: "✉️",
    stats: "18% reply rate",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "You Track Opens, Replies, Results",
    description: "Monitor performance and optimize your outreach strategy",
    emoji: "📊",
    stats: "Real-time analytics",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function AIFunnelSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Simplified Background with Subtle Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Data Nodes - Reduced count and simpler animation */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${10 + ((i * 10) % 80)}%`,
              top: `${15 + ((i * 12) % 70)}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + (i % 2),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Background grid pattern */}
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            How It Works
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From prospect list to closed deals in five AI-powered steps
          </p>
        </motion.div>

        {/* Simplified Progress Line */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-full" />
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"
            style={{ height: progressWidth }}
          />

          {/* Animated progress indicator */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg"
            style={{
              top: progressWidth,
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center gap-12 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
            >
              {/* Step Content Card */}
              <div className="flex-1">
                <Card className="p-8 bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl relative overflow-hidden">
                  {/* Subtle background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`}
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <motion.div
                    className="flex items-center gap-4 mb-6 relative z-10"
                    whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="text-4xl">{step.emoji}</div>

                    {/* Stats badge */}
                    <motion.div
                      className="ml-auto bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200 rounded-full px-4 py-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-green-700 font-semibold text-sm">{step.stats}</span>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors relative z-10">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg relative z-10">{step.description}</p>

                  {/* Directional arrow for flow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute bottom-4 right-4"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-6 h-6 text-indigo-400" />
                    </motion.div>
                  )}
                </Card>
              </div>

              {/* Simplified Step Visualization */}
              <div className="flex-1 flex justify-center relative">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Main Circle */}
                  <motion.div
                    className={`w-40 h-40 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-white shadow-2xl relative overflow-hidden`}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <span className="text-7xl relative z-10">{step.emoji}</span>

                    {/* Subtle pulsing overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Success Metrics Floating Around */}
                  <motion.div
                    className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ✓ {step.stats}
                  </motion.div>

                  {/* AI Processing Indicator */}
                  <motion.div
                    className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                    AI Processing
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA with animated elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200 rounded-full px-8 py-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Zap className="w-6 h-6 text-indigo-600" />
            </motion.div>
            <span className="text-indigo-700 font-semibold text-lg">Ready to 10x your outreach?</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
