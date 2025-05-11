"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { ArrowRight, CheckCircle, ChevronRight, Code, Globe, LineChart, Palette, Search, Zap, Diamond } from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"

export default function ServicesSection() {
  const [showAllServices, setShowAllServices] = useState(false)

  // Services data with 6 total services including Brand Strategy
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with comprehensive strategies tailored to your business goals.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Rank Tracking"],
      gradient: "from-purple-500 to-blue-600",
      popular: true
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Cutting-edge websites built for performance, accessibility, and conversion optimization.",
      features: ["Next.js & React", "Mobile-First", "Web Performance", "Headless CMS"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that drive engagement and improve user satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Diamond,
      title: "Brand Strategy",
      description: "Craft a powerful brand identity that resonates with your target audience.",
      features: ["Visual Identity", "Brand Positioning", "Messaging Framework", "Style Guides"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results and maximize your ROI.",
      features: ["PPC Management", "Social Ads", "Conversion Optimization", "Analytics"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Globe,
      title: "E-Commerce Solutions",
      description: "Scalable online stores that drive sales with seamless shopping experiences.",
      features: ["Shopify/WordPress", "Payment Integration", "Product SEO", "Checkout Flow"],
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  // Determine which services to display
  const displayedServices = showAllServices ? services : services.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Advanced background elements */}
      <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-gradient-to-r from-blue-100 to-purple-100 opacity-5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-20"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-1.5 rounded-full">
            <Zap className="h-3 w-3 mr-1.5 text-blue-600" />
            Premium Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Transform Your Digital Presence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to build, grow, and elevate your brand in the digital landscape
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative h-full"
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <GlassMorphicCard className="h-full hover:shadow-xl transition-shadow duration-300 group">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  Learn more about {service.title}
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </GlassMorphicCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          {!showAllServices ? (
            <Button 
              onClick={() => setShowAllServices(true)}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg"
            >
              View All 6 Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </Button>
          ) : (
            <Button 
              asChild
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg"
            >
              <Link href="/services" aria-label="Explore all service details">
                Explore Service Details
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>
          )}
          
          <p className="mt-6 text-gray-500 flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            <span className="inline-flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              Trusted by 500+ brands
            </span>
            <span className="inline-flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              End-to-end solutions
            </span>
            <span className="inline-flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              ROI-focused approach
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
