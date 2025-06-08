"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Rocket, Building2, Briefcase, ChevronDown, Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    icon: Rocket,
    title: "For Founders",
    subtitle: "Scale Your Startup",
    avatar: "👨‍💼",
    badge: "Trusted by 30+ Founders",
    description: "Get your first 100 customers with AI-powered outreach that doesn't sound robotic",
    benefits: ["Find product-market fit faster", "Scale sales without hiring", "Personal touch at scale"],
    testimonial: {
      text: "Converzia helped us go from 0 to 100 customers in 3 months. The AI actually writes better emails than I do!",
      author: "Alex Chen, Founder @ TechStart",
      rating: 5,
    },
  },
  {
    icon: Building2,
    title: "For Agencies",
    subtitle: "Grow Client Accounts",
    avatar: "👩‍💼",
    badge: "Trusted by 15+ Agencies",
    description: "Help clients reach more prospects while maintaining the personal touch they expect",
    benefits: ["Increase client retention", "Scale service delivery", "Higher conversion rates"],
    testimonial: {
      text: "Our agency now handles 5x more clients with the same team. Converzia is our secret weapon.",
      author: "Sarah Martinez, CEO @ GrowthCo",
      rating: 5,
    },
  },
  {
    icon: Briefcase,
    title: "For Service Businesses",
    subtitle: "Book More Meetings",
    avatar: "🧑‍💻",
    badge: "Trusted by 50+ Service Providers",
    description: "Turn cold prospects into warm leads with emails that showcase your expertise",
    benefits: ["Fill your calendar", "Higher-quality leads", "Consistent pipeline"],
    testimonial: {
      text: "My calendar went from empty to fully booked in 2 weeks. The personalization is incredible.",
      author: "Mike Johnson, Consultant",
      rating: 5,
    },
  },
]

export default function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="use-cases" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Built for Growth
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a startup founder, agency owner, or service provider, Converzia adapts to your needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-white/90 to-indigo-50/90 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105 rounded-3xl relative overflow-hidden">
                {/* Glowing badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {useCase.badge}
                </motion.div>

                {/* Avatar and Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <useCase.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <div className="text-5xl">{useCase.avatar}</div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                  <p className="text-indigo-600 font-semibold text-lg">{useCase.subtitle}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

                <ul className="space-y-3 mb-6">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + benefitIndex * 0.1 + 0.5 }}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                {/* Expandable Testimonial */}
                <Button
                  variant="ghost"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="w-full justify-between text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                >
                  <span>See testimonial</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expandedCard === index ? "rotate-180" : ""}`}
                  />
                </Button>

                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-white/60 rounded-lg border border-indigo-100"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(useCase.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">"{useCase.testimonial.text}"</p>
                    <p className="text-sm text-gray-600 font-medium">— {useCase.testimonial.author}</p>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
