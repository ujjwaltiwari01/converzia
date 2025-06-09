"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle, Cpu, Zap, Brain } from "lucide-react"
import { useEffect, useState } from "react"

const floatingElements = [
  { icon: MessageCircle, x: "10%", y: "20%", delay: 0 },
  { icon: Cpu, x: "85%", y: "15%", delay: 1 },
  { icon: Zap, x: "15%", y: "70%", delay: 2 },
  { icon: Brain, x: "80%", y: "75%", delay: 3 },
]

export default function FloatingElements() {
  const prefersReducedMotion = useReducedMotion()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <element.icon className="w-8 h-8 text-indigo-400" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
