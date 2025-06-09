"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Zap, Target, Mail } from "lucide-react"

const flowSteps = [
  {
    icon: Clock,
    title: "3 Seconds",
    description: "AI writes personalized email",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Send",
    description: "Email delivered to prospect",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "High Reply Rate",
    description: "Prospect responds positively",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Smart Follow-up",
    description: "AI sends follow-up emails automatically",
    color: "from-orange-500 to-red-500",
  },
]

export default function FlowchartGraphics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Flowing Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {/* Main flow line */}
          <motion.path
            d="M50,200 Q250,150 450,200 T850,200"
            stroke="url(#flowGrad)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,10"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />

          {/* Branch lines */}
          <motion.path
            d="M200,200 Q200,120 250,100"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          <motion.path
            d="M500,200 Q500,280 550,300"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />
          <motion.path
            d="M750,200 Q750,120 800,100"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          />
        </motion.svg>

        {/* Floating Data Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${15 + ((i * 8) % 70)}%`,
              top: `${30 + ((i * 5) % 40)}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex-1"
              >
                {/* Animated Connecting Arrows */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="text-indigo-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <defs>
                        <linearGradient id={`arrowGrad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M8 16 L20 16 M16 12 L20 16 L16 20"
                        stroke={`url(#arrowGrad${index})`}
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      />

                      {/* Animated flow dots */}
                      <motion.circle
                        r="1.5"
                        fill="url(#arrowGrad${index})"
                        initial={{ cx: 8 }}
                        animate={{ cx: [8, 20, 8] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3 + 1,
                          ease: "easeInOut",
                        }}
                        cy="16"
                      />
                    </motion.svg>
                  </motion.div>
                )}

                <motion.div
                  className={`relative bg-gradient-to-br ${step.color} p-8 rounded-3xl shadow-2xl text-white text-center group hover:scale-105 transition-all duration-300 overflow-hidden`}
                  whileHover={{ y: -5 }}
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 2px, transparent 2px),
                        radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 2px, transparent 2px)
                      `,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />

                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/40 rounded-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.4,
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>

                  <p className="text-white/90 leading-relaxed">{step.description}</p>

                  {/* Success indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>

                  {/* Flowing particles inside card */}
                  {Array.from({ length: 3 }).map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${20 + particleIndex * 30}%`,
                        top: `${20 + particleIndex * 20}%`,
                      }}
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5 + particleIndex * 0.7,
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-3xl"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Mobile arrows */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="md:hidden flex justify-center my-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="text-indigo-400"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <motion.path
                        d="M12 5 L12 17 M8 13 L12 17 L16 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
