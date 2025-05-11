"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  LineChart,
  Palette,
  Search,
  Zap,
  Diamond,
  Smartphone,
  Users,
  Rocket,
  BarChart2,
  Award,
  Lightbulb,
  PenTool
} from "lucide-react"

// Glassmorphic card component
const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 overflow-hidden ${className}`}>
    {children}
  </div>
)

export default function ServicesPage() {
  const [showAllServices, setShowAllServices] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Services data with 6 premium services
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with our comprehensive SEO strategies that drive organic traffic and visibility.",
      features: ["Keyword research", "On-page optimization", "Technical SEO", "Content strategy"],
      gradient: "from-purple-500 to-blue-600",
      popular: true
    },
    {
      icon: Code,
      title: "Web Development",
      description: "High-performance websites built with cutting-edge technologies for seamless user experiences.",
      features: ["Next.js/React", "Headless CMS", "Mobile-first", "Performance optimized"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that captivate users and drive engagement and conversions.",
      features: ["User research", "Wireframing", "Prototyping", "Usability testing"],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Diamond,
      title: "Brand Strategy",
      description: "Powerful brand identities that communicate your unique value and resonate with audiences.",
      features: ["Visual identity", "Brand positioning", "Messaging framework", "Style guides"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results and maximize your marketing ROI.",
      features: ["PPC management", "Social media ads", "Conversion optimization", "Analytics"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Globe,
      title: "E-Commerce",
      description: "Scalable online stores with seamless shopping experiences that convert visitors to customers.",
      features: ["Shopify/WordPress", "Payment integration", "Product SEO", "Checkout optimization"],
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  const displayedServices = showAllServices ? services : services.slice(0, 3)

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero Section with Unsplash Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* High-quality Unsplash background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern agency workspace"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/50" />
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          style={{ y }}
        >
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm border-none">
              <Zap className="h-4 w-4 mr-2" />
              Premium Digital Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your <span className="text-blue-400">Digital Presence</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              We craft exceptional digital experiences that drive growth, engagement, and measurable results for ambitious brands.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link href=" https://calendar.app.google/ChWX5KxLhV9Xe37v6">  
                Get a Consultation
                </Link>
              </Button>
              </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-blue-600">Digital Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end services designed to elevate your brand and achieve measurable business results.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full"
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <GlassCard className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 flex items-center justify-center text-white shadow-md`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
  href="/services"
  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group"
>
  Learn more
</Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            {!showAllServices ? (
              <Button
                onClick={() => setShowAllServices(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              A Proven <span className="text-blue-600">Process for Success</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured methodology ensures exceptional results at every stage of your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Discovery",
                description: "Deep dive into your business objectives and audience needs"
              },
              {
                icon: PenTool,
                title: "Design",
                description: "Create compelling visuals and seamless user experiences"
              },
              {
                icon: Code,
                title: "Development",
                description: "Build with precision using cutting-edge technologies"
              },
              {
                icon: Rocket,
                title: "Launch",
                description: "Deploy and optimize for maximum impact"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring"
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can help you achieve your business goals with our premium digital services.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Link href=" https://calendar.app.google/ChWX5KxLhV9Xe37v6">  
                Get a Started Today
                </Link>
              </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
