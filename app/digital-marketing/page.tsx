"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Megaphone, 
  LineChart, 
  Share2, 
  BarChart, 
  Target, 
  Mail, 
  CheckCircle, 
  Sparkles,
  Search,
  Users,
  PenTool,
  Zap,
  ChevronRight
} from "lucide-react"

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 overflow-hidden ${className}`}>
    {children}
  </div>
)

export default function DigitalMarketingPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Services data
  const services = [
    {
      title: "Search Engine Optimization",
      description: "Dominate search rankings and drive organic traffic to your website.",
      icon: Search,
      features: [
        "Comprehensive keyword research",
        "On-page optimization",
        "Technical SEO audits",
        "Content strategy development",
        "Link building campaigns"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engagement across platforms.",
      icon: Share2,
      features: [
        "Platform-specific strategies",
        "Content creation & scheduling",
        "Community management",
        "Influencer partnerships",
        "Performance analytics"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic with strategic paid campaigns.",
      icon: Megaphone,
      features: [
        "Google & Bing Ads",
        "Social media advertising",
        "Display & remarketing",
        "Conversion optimization",
        "ROI tracking"
      ],
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "Content Marketing",
      description: "Attract and engage your audience with valuable content.",
      icon: PenTool,
      features: [
        "Content strategy development",
        "Blog & article writing",
        "Infographics & visuals",
        "Video content production",
        "Content distribution"
      ],
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and build customer relationships.",
      icon: Mail,
      features: [
        "Email campaign strategy",
        "Automated workflows",
        "List segmentation",
        "A/B testing",
        "Performance analysis"
      ],
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing.",
      icon: BarChart,
      features: [
        "Custom dashboards",
        "Performance tracking",
        "Conversion analysis",
        "ROI measurement",
        "Competitive benchmarking"
      ],
      gradient: "from-indigo-500 to-indigo-700"
    }
  ]

  // Process data
  const process = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business and develop a tailored marketing plan.",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
      step: "01"
    },
    {
      title: "Campaign Development",
      description: "Our team creates compelling campaigns for your objectives.",
      icon: PenTool,
      color: "bg-purple-100 text-purple-600",
      step: "02"
    },
    {
      title: "Execution",
      description: "We launch your campaigns across selected channels.",
      icon: Zap,
      color: "bg-green-100 text-green-600",
      step: "03"
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and data-driven improvements.",
      icon: LineChart,
      color: "bg-yellow-100 text-yellow-600",
      step: "04"
    },
    {
      title: "Analysis",
      description: "Detailed reporting on performance and ROI.",
      icon: BarChart,
      color: "bg-red-100 text-red-600",
      step: "05"
    },
    {
      title: "Growth",
      description: "Scaling successful strategies for maximum impact.",
      icon: Users,
      color: "bg-indigo-100 text-indigo-600",
      step: "06"
    }
  ]

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Digital marketing analytics"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-white/10 text-white backdrop-blur-md border border-white/20">
                <Megaphone className="h-4 w-4 mr-2" />
                Digital Marketing
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transform Your <span className="text-blue-300">Digital Presence</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Data-driven marketing strategies that deliver measurable results and accelerate business growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg shadow-lg">
                  <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6">
                    Start Your Campaign
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  View Case Studies
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-blue-600">Marketing Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing services designed to drive growth and maximize ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <GlassCard className="h-full p-8 hover:shadow-xl transition-shadow duration-300 group border border-gray-200">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 flex items-center justify-center text-white shadow-md`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
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
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The Path to <span className="text-blue-600">Marketing Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology delivers consistent results through strategic execution.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Animated timeline */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-white"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </div>
            
            <div className="grid lg:grid-cols-6 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 0 ? "lg:mb-16" : "lg:mt-16"}`}
                >
                  {/* Animated step dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 hidden lg:flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`w-3 h-3 rounded-full ${step.color.replace('bg-', 'bg-opacity-100 bg-')}`}
                    />
                  </div>
                  
                  <GlassCard className="h-full p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="absolute -top-8 left-0 right-0 text-center hidden lg:block">
                        <span className="inline-block bg-white px-2 text-sm font-bold text-blue-600">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4 mr-2" />
              Ready to Grow?
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Create <span className="text-blue-200">Impactful</span> Marketing Together
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a complete strategy or help with specific channels, we're here to drive your business growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl px-8 py-6 text-lg"
                asChild
              >
                <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                 Speak With Us Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
