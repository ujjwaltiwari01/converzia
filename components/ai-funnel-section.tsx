"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Upload, Globe, Brain, Mail, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Sheet",
    description: "Import your prospect list with just a few clicks",
    emoji: "📄",
  },
  {
    number: "02",
    icon: Globe,
    title: "We Visit Each Website",
    description: "AI automatically researches each prospect's business",
    emoji: "🌐",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Analyzes Voice & Persona",
    description: "Learns your voice and maintains consistent messaging",
    emoji: "🧠",
  },
  {
    number: "04",
    icon: Mail,
    title: "Cold Email Becomes Warm Intro",
    description: "Creates personalized emails that feel like warm intros",
    emoji: "✉️",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "You Track Opens, Replies, Results",
    description: "Monitor performance and optimize your outreach strategy",
    emoji: "📊",
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
      {/* Background decoration using CSS */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            How It Works
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From prospect list to closed deals in five AI-powered steps
          </p>
        </motion.div>

        {/* Progress Line */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full" />
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"
            style={{ height: progressWidth }}
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
              {/* Step Content */}
              <div className="flex-1">
                <Card className="p-8 bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-2xl">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ x: index % 2 === 1 ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                    <div className="text-4xl">{step.emoji}</div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </Card>
              </div>

              {/* Step Visualization */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-6xl">{step.emoji}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
