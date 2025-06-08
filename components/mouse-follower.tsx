"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

export default function MouseFollower() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateMousePosition = (e: MouseEvent) => {
      // Direct value setting is more performant than setState
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition)
      return () => window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [mouseX, mouseY])

  if (!isClient) return null

  return (
    <>
      {/* Main cursor follower - optimized for performance */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-full pointer-events-none z-50 mix-blend-multiply"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.2,
        }}
      />

      {/* Secondary cursor follower - with slight delay for effect */}
      <motion.div
        className="fixed w-12 h-12 border border-indigo-400/30 rounded-full pointer-events-none z-40"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
          mass: 0.4,
        }}
      />
    </>
  )
}
