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
      {/* Ultra-Creative Background with Dynamic Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Animated Circuit Board Pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* Animated circuit paths */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${100 + i * 120},50 Q${200 + i * 120},150 ${100 + i * 120},250 T${100 + i * 120},450`}
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
          ))}
        </motion.svg>

        {/* Floating Data Nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${10 + ((i * 6) % 80)}%`,
              top: `${15 + ((i * 7) % 70)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* AI Brain Network */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#circuitGrad)"
              strokeWidth="1"
              strokeDasharray="5,5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="url(#circuitGrad)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
            <circle cx="50" cy="50" r="10" fill="url(#circuitGrad)" opacity="0.6" />
          </svg>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-lg blur-lg rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* AI Data Flow Visualization */}
      <motion.div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent">
        <motion.div
          className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-indigo-500 to-purple-500"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </motion.div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-30">
        {/* Enhanced connecting lines between steps */}
        {steps.map(
          (_, index) =>
            index < steps.length - 1 && (
              <motion.div
                key={`connection-${index}`}
                className="absolute"
                style={{
                  top: `${20 + index * 24}%`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "2px",
                  height: "24%",
                }}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: index * 0.3 + 1 }}
              >
                {/* Main connecting line */}
                <div className="w-full h-full bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 rounded-full relative">
                  {/* Animated pulse */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent rounded-full"
                    animate={{
                      y: ["-100%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5 + 2,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Data flow indicators */}
                  {Array.from({ length: 3 }).map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className="absolute w-3 h-3 bg-white rounded-full shadow-lg border-2 border-indigo-400"
                      style={{ left: "-5px" }}
                      animate={{
                        y: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5 + dotIndex * 1 + 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Side branches for visual appeal */}
                  <motion.div
                    className="absolute top-1/3 -left-8 w-8 h-px bg-gradient-to-r from-indigo-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 1.5 }}
                  />
                  <motion.div
                    className="absolute top-2/3 -right-8 w-8 h-px bg-gradient-to-l from-purple-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 1.8 }}
                  />
                </div>

                {/* Success metrics floating beside the line */}
                <motion.div
                  className="absolute top-1/2 -right-20 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-indigo-200 transform -translate-y-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 2.5 }}
                >
                  <span className="text-xs font-bold text-indigo-600">
                    {index === 0 && "99.9% Accuracy"}
                    {index === 1 && "3sec Processing"}
                    {index === 2 && "18% Reply Rate"}
                    {index === 3 && "Real-time Analytics"}
                  </span>
                </motion.div>
              </motion.div>
            ),
        )}

        {/* Background grid pattern */}
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
          }}
        />
      </div>

      {/* Quantum Particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`quantum-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}

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

        {/* Enhanced Progress Line with animated graph */}
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
              {/* Enhanced Step Content */}
              <div className="flex-1">
                <Card className="p-8 bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl relative overflow-hidden">
                  {/* Animated background gradient */}
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

              {/* Revolutionary Step Visualization with 3D Effects */}
              <div className="flex-1 flex justify-center relative">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Main 3D Circle */}
                  <motion.div
                    className={`w-40 h-40 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center border-4 border-white shadow-2xl relative overflow-hidden`}
                    animate={{
                      rotateY: [0, 360],
                      boxShadow: [
                        "0 20px 40px rgba(99, 102, 241, 0.3)",
                        "0 25px 50px rgba(139, 92, 246, 0.4)",
                        "0 20px 40px rgba(99, 102, 241, 0.3)",
                      ],
                    }}
                    transition={{
                      rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <span className="text-7xl relative z-10" style={{ transform: "rotateY(0deg)" }}>
                      {step.emoji}
                    </span>

                    {/* Holographic Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-full"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Energy Rings */}
                    {Array.from({ length: 3 }).map((_, ringIndex) => (
                      <motion.div
                        key={ringIndex}
                        className="absolute inset-0 border-2 border-white/30 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: ringIndex * 0.7,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Orbiting Data Points */}
                  {Array.from({ length: 6 }).map((_, orbitIndex) => (
                    <motion.div
                      key={orbitIndex}
                      className="absolute w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                      }}
                      animate={{
                        rotate: 360,
                        x: Math.cos((orbitIndex * 60 * Math.PI) / 180) * 80,
                        y: Math.sin((orbitIndex * 60 * Math.PI) / 180) * 80,
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        x: { duration: 0 },
                        y: { duration: 0 },
                      }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: orbitIndex * 0.2 }}
                      />
                    </motion.div>
                  ))}

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
