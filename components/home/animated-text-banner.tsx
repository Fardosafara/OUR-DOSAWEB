"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, PenTool, ShoppingCart, Search, Smartphone, Palette } from "lucide-react"

export default function InfiniteTextBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const [clones, setClones] = useState(3) // Start with 3 clones

  const services = [
    { 
      name: "WEB DEVELOPMENT", 
      icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-blue-600"
    },
    { 
      name: "DIGITAL MARKETING", 
      icon: <Smartphone className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-purple-600"
    },
    { 
      name: "BRAND IDENTITY", 
      icon: <Palette className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-amber-600"
    },
    { 
      name: "UI/UX DESIGN", 
      icon: <PenTool className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-emerald-600"
    },
    { 
      name: "ECOMMERCE SOLUTIONS", 
      icon: <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-rose-600"
    },
    { 
      name: "SEO OPTIMIZATION", 
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      color: "text-indigo-600"
    }
  ]

  useEffect(() => {
    const calculateClones = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const content = container.firstElementChild as HTMLElement
      if (!content) return

      const width = content.offsetWidth
      setContentWidth(width)
      
      // Calculate how many clones we need to fill the viewport
      const viewportWidth = window.innerWidth
      const neededClones = Math.ceil(viewportWidth / width) + 1
      setClones(neededClones)
    }

    calculateClones()
    window.addEventListener('resize', calculateClones)
    
    return () => window.removeEventListener('resize', calculateClones)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-8 md:py-12 overflow-hidden border-y border-gray-200">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-20 pointer-events-none"></div>
      
      {/* Infinite scrolling content */}
      <div className="relative z-10 overflow-hidden">
        <motion.div 
          ref={containerRef}
          className="flex whitespace-nowrap"
          animate={{
            x: [-contentWidth, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Original content */}
          <div className="flex items-center">
            {services.map((service, index) => (
              <div key={`original-${index}`} className="flex items-center mx-4 md:mx-8">
                <span className={`${service.color} mr-2`}>
                  {service.icon}
                </span>
                <span className={`text-lg md:text-2xl font-bold ${service.color}`}>
                  {service.name}
                </span>
                <span className="mx-4 md:mx-6 text-gray-400 text-xl">•</span>
              </div>
            ))}
          </div>

          {/* Cloned content for seamless looping */}
          {Array.from({ length: clones }).map((_, cloneIndex) => (
            <div key={`clone-${cloneIndex}`} className="flex items-center">
              {services.map((service, index) => (
                <div key={`clone-${cloneIndex}-${index}`} className="flex items-center mx-4 md:mx-8">
                  <span className={`${service.color} mr-2`}>
                    {service.icon}
                  </span>
                  <span className={`text-lg md:text-2xl font-bold ${service.color}`}>
                    {service.name}
                  </span>
                  <span className="mx-4 md:mx-6 text-gray-400 text-xl">•</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/30"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  )
}
