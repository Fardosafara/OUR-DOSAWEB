"use client"

import React from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, LineChart, MessageSquare, Zap, ChevronLeft, ChevronRight, Lightbulb, Check } from "lucide-react"

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Enhanced scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // 3D tilt effect with MotionValue
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)

  // Process steps data with enhanced content
  const processSteps = [
    {
      title: "Discovery",
      description: "We dive deep into understanding your business, audience, and goals to create a strategic foundation for digital success.",
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      details: [
        "Comprehensive client discovery workshop",
        "Market & competitor landscape analysis",
        "User persona & journey mapping",
        "KPI definition & success metrics",
      ],
      outcome: "Clear project vision and measurable objectives aligned with your business goals."
    },
    {
      title: "Planning",
      description: "We architect a tailored roadmap with precision, ensuring every technical and creative element aligns perfectly with your objectives.",
      icon: LineChart,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      details: [
        "Technical architecture planning",
        "Content strategy & information architecture",
        "UX wireframing & prototyping",
        "Detailed sprint planning & milestones",
      ],
      outcome: "Comprehensive blueprint for development with prioritized features and timeline."
    },
    {
      title: "Development",
      description: "Our expert team transforms concepts into reality using cutting-edge technologies and industry best practices.",
      icon: Code,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      details: [
        "Responsive, component-driven UI development",
        "Backend system integration",
        "Performance optimization & testing",
        "Continuous client feedback loops",
      ],
      outcome: "High-performance digital product built to modern standards and best practices."
    },
    {
      title: "Launch",
      description: "We deploy with precision and implement data-driven strategies for continuous improvement and business growth.",
      icon: Zap,
      gradient: "bg-gradient-to-br from-pink-500 to-red-600",
      details: [
        "Comprehensive QA & user testing",
        "Staged deployment strategy",
        "Analytics & monitoring setup",
        "Ongoing optimization roadmap",
      ],
      outcome: "Successful launch with systems in place for continuous improvement and scaling."
    },
  ]

  // Enhanced animations
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 1, 0.3])
  const rotateX = useTransform(tiltY, [-50, 50], [10, -10])
  const rotateY = useTransform(tiltX, [-50, 50], [-10, 10])

  return (
    <section 
      className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[3%]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute -top-40 -right-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 opacity-20 blur-[100px]"
          style={{ y: y2, opacity: opacity1 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 opacity-20 blur-[100px]"
          style={{ y: y1, opacity: opacity1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <Badge className="mb-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 text-sm font-medium tracking-wide shadow-md">
            OUR METHODOLOGY
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">A Proven Process for</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/70 -rotate-1 -z-0"></span>
            </span>{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full z-0"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our carefully crafted 4-phase approach ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="relative">
          {/* Enhanced step indicators with animated connectors */}
          <div className="flex justify-center mb-20 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 -translate-y-1/2 mx-auto max-w-4xl"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 -translate-y-1/2 rounded-full max-w-4xl mx-auto"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="flex justify-between w-full max-w-4xl mx-auto relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`group w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative transition-all duration-500 ${
                      index <= activeStep
                        ? `${step.gradient} text-white shadow-xl scale-105`
                        : "bg-white text-gray-400 border-2 border-gray-200 hover:border-blue-300 hover:text-gray-600"
                    }`}
                    aria-label={`Go to ${step.title} phase`}
                  >
                    {index < activeStep ? (
                      <Check className="h-8 w-8" />
                    ) : (
                      <span className="text-2xl font-bold group-hover:scale-110 transition-transform">
                        {index + 1}
                      </span>
                    )}

                    {/* Active step animation */}
                    {index === activeStep && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/30"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 0, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/20"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                      </>
                    )}
                  </button>

                  {/* Step label with animation */}
                  <motion.div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center ${
                      index <= activeStep ? "text-gray-900" : "text-gray-500"
                    }`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {/* <span className={`block text-sm font-semibold ${index <= activeStep ? "text-blue-600" : "text-gray-500"}`}>
                      Phase {index + 1}
                    </span> */}
                    {/* <span className="block text-lg font-bold mt-1">{step.title}</span> */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated step content */}
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  tiltX.set(((x - centerX) / centerX) * 20)
                  tiltY.set(((y - centerY) / centerY) * 20)
                }}
                onMouseLeave={() => {
                  tiltX.set(0)
                  tiltY.set(0)
                }}
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d"
                }}
                className="cursor-default"
              >
                <Card className="border-0 shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
                  <div className="grid lg:grid-cols-2">
                    {/* Left side - Visual content */}
                    <div className={`relative p-10 md:p-14 text-white overflow-hidden ${processSteps[activeStep].gradient}`}>
                      <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="1" fill="white" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                      </div>

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                            {React.createElement(processSteps[activeStep].icon, { className: "h-8 w-8" })}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white/80">Phase {activeStep + 1}</span>
                            <h3 className="text-3xl md:text-4xl font-bold">{processSteps[activeStep].title}</h3>
                          </div>
                        </div>

                        <p className="text-xl text-white/90 mb-8 leading-relaxed flex-grow">
                          {processSteps[activeStep].description}
                        </p>

                        <div className="mt-auto">
                          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                            <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                            <span className="font-medium">
                              Current phase in our workflow
                            </span>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"></div>
                        <div className="absolute top-1/2 -right-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"></div>
                      </div>
                    </div>

                    {/* Right side - Detailed content */}
                    <div className="bg-white p-10 md:p-14">
                      <div className="h-full flex flex-col">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                              Key Activities
                            </span>{" "}
                            in this phase:
                          </h4>

                          <div className="space-y-5">
                            {processSteps[activeStep].details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { 
                                    duration: 0.4,
                                    delay: idx * 0.1
                                  }
                                }}
                                className="flex items-start gap-5"
                              >
                                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-md ${processSteps[activeStep].gradient}`}>
                                  {idx + 1}
                                </div>
                                <p className="text-lg text-gray-800">{detail}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Outcome section */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                          <div className="flex items-start gap-5">
                            <div className={`w-12 h-12 rounded-xl ${processSteps[activeStep].gradient} flex items-center justify-center text-white shadow-md`}>
                              <Lightbulb className="h-6 w-6" />
                            </div>
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-2">Phase Outcome</h5>
                              <p className="text-gray-700">
                                {processSteps[activeStep].outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced navigation controls */}
            <div className="flex justify-center mt-12 gap-4">
              <motion.button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: activeStep === 0 ? 1 : 1.05 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  activeStep === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-50 border-2 border-blue-100"
                }`}
                aria-label="Previous phase"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              <motion.button
                onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                disabled={activeStep === processSteps.length - 1}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: activeStep === processSteps.length - 1 ? 1 : 1.05 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  activeStep === processSteps.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-50 border-2 border-blue-100"
                }`}
                aria-label="Next phase"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
