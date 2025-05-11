"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Users, Rocket, Shield, TrendingUp, Smartphone, Search } from "lucide-react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function WhyChooseUsSection() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerRef = useRef<HTMLDivElement>(null)

  // Feature cards data
  const features = [
    {
      title: "Strategic Approach",
      description: "We develop custom strategies tailored to your specific business goals.",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Technical Excellence",
      description: "Our team stays at the forefront of technology to deliver cutting-edge solutions.",
      icon: Code,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Dedicated Support",
      description: "We provide ongoing support to ensure your digital assets continue to perform.",
      icon: Users,
      color: "from-emerald-500 to-teal-600"
    }
  ]

  // Difference cards data
  const differences = [
    {
      title: "Conversion-Focused",
      description: "Designed to turn visitors into customers",
      icon: TrendingUp,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Mobile-Optimized",
      description: "Looks great on any device",
      icon: Smartphone,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "SEO-Friendly",
      description: "Helps you rank higher on Google",
      icon: Search,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Fast & Secure",
      description: "Performance matters for your success",
      icon: Shield,
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Floating gradient circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Badge 
              className="mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md hover:shadow-lg transition-shadow"
            >
              Why Choose Us
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Transforming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Ideas</span> Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Digital Success</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            We don't just build websites - we craft digital experiences that drive results. Our data-driven approach ensures your online presence delivers measurable business growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Our Winning Approach
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden p-6 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-500 to-purple-600"></div>
                  
                  <div className="flex gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <item.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section with animated counters */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              {[
                { number: 100, label: "Projects Completed", icon: <Rocket className="w-5 h-5" /> },
                { number: 99, label: "Client Satisfaction", suffix: "%", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-5 h-5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></svg> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {statsInView ? (
                      <CountUp 
                        start={0} 
                        end={stat.number} 
                        duration={2.5} 
                        suffix={stat.suffix || ""}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: The DosaWeb Difference */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                The DosaWeb Difference
              </h3>

              <div className="relative">
                {/* Floating card effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-purple-600/10 rounded-3xl blur-xl transform -rotate-1 -z-10"></div>

                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Card header with gradient */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-lg mr-4 backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-sparkles w-6 h-6"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          <path d="M5 3v4" />
                          <path d="M3 5h4" />
                          <path d="M19 17v4" />
                          <path d="M17 19h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        What Sets Us Apart
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      Unlike typical web designers who focus on aesthetics alone, we engineer <span className="font-semibold text-blue-600">high-performance digital assets</span> that:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {differences.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="p-5 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 bg-white group"
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 mr-4 w-12 h-12 rounded-full ${feature.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                              <feature.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                                {feature.title}
                              </h4>
                              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial/CTA card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="mt-10 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 backdrop-blur-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award"
                          >
                            <circle cx="12" cy="8" r="6" />
                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold">Our Commitment</h4>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        We guarantee measurable results or we'll keep working until you're satisfied. Your success is our success, which is why we treat every project as if it were our own business.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
