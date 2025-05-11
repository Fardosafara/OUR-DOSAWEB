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
  Code, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Zap, 
  Server, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  GitBranch, 
  Shield,
  Lightbulb,
  PenTool,
  Rocket,
  ChevronRight,
  FlaskConical
} from "lucide-react"

// GlassCard component
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-white/30 dark:border-gray-700/50 overflow-hidden ${className}`}>
    {children}
  </div>
)

export default function WebDevelopmentPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Technologies data
  const technologies = [
    { name: "Next.js", icon: "/nextjs.webp", category: "Framework", featured: true },
    { name: "React", icon: "/reactjs.webp", category: "Library", featured: true },
    { name: "Python", icon: "/python.webp", category: "Language", featured: true },
    { name: "TypeScript", icon: "/type.webp", category: "Language" },
    { name: "Tailwind CSS", icon: "/taicss.webp", category: "CSS Framework" },
    { name: "Node.js", icon: "/nodejs.webp", category: "Runtime" },
    { name: "Django", icon: "/django.webp", category: "Framework" },
    { name: "PostgreSQL", icon: "/postgreSQL.webp", category: "Database" },
  ]

  // Services data
  const services = [
    {
      title: "Custom Web Development",
      description: "Tailor-made websites designed to meet your specific business needs and goals.",
      icon: Code,
      features: [
        "100% custom code (no templates)",
        "Mobile-first responsive design",
        "SEO-optimized architecture",
        "Performance-focused build"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "E-Commerce Solutions",
      description: "High-converting online stores with seamless shopping experiences.",
      icon: ShoppingCart,
      features: [
        "Shopify & custom solutions",
        "Secure payment gateways",
        "Inventory management",
        "Checkout optimization"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Python Development",
  description: "Powerful Python applications and backend services for your business.",
  icon: "/python.webp",  // 👈 Now using an image instead of Lucide icon
  features: [
    "Django & Flask frameworks",
    "API development",
    "Data processing",
    "Automation scripts"
  ],
  gradient: "from-blue-100 to-blue-100"
    },
    {
      title: "Web Applications",
      description: "Complex applications that solve business problems and improve efficiency.",
      icon: Layers,
      features: [
        "User authentication",
        "Real-time functionality",
        "Data visualization",
        "API integrations"
      ],
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Headless CMS",
      description: "Content management decoupled from presentation for maximum flexibility.",
      icon: Database,
      features: [
        "Content modeling",
        "API-first architecture",
        "Multi-channel publishing",
        "Developer-friendly"
      ],
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Hosting",
      description: "Reliable deployment and infrastructure for your web projects.",
      icon: Server,
      features: [
        "CI/CD pipelines",
        "Containerization",
        "Performance monitoring",
        "Security hardening"
      ],
      gradient: "from-indigo-500 to-indigo-700"
    }
  ]

  // Process data
  const process = [
    {
      title: "Discovery",
      description: "We analyze your needs and plan the perfect solution.",
      icon: Lightbulb,
      color: "bg-blue-100 text-blue-600",
      step: "01"
    },
    {
      title: "Design",
      description: "Creating wireframes and prototypes for your approval.",
      icon: PenTool,
      color: "bg-purple-100 text-purple-600",
      step: "02"
    },
    {
      title: "Development",
      description: "Building your solution with clean, efficient code.",
      icon: Code,
      color: "bg-green-100 text-green-600",
      step: "03"
    },
    {
      title: "Testing",
      description: "Ensuring everything works perfectly across devices.",
      icon: Shield,
      color: "bg-yellow-100 text-yellow-600",
      step: "04"
    },
    {
      title: "Launch",
      description: "Deploying your project and going live.",
      icon: Rocket,
      color: "bg-red-100 text-red-600",
      step: "05"
    },
    {
      title: "Support",
      description: "Ongoing maintenance and updates as needed.",
      icon: GitBranch,
      color: "bg-indigo-100 text-indigo-600",
      step: "06"
    }
  ]

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Web development code"
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
                <Code className="h-4 w-4 mr-2" />
                Web Development Services
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build <span className="text-blue-400">Faster</span>, <span className="text-blue-400">Smarter</span> Websites
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                We create high-performance, scalable web solutions that drive business growth and deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg">
                  <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Speak With Us Now
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
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
              Modern Technology Stack
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Built With <span className="text-blue-600">Cutting-Edge</span> Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest tools and frameworks to deliver fast, secure, and scalable web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative ${tech.featured ? "lg:col-span-1" : ""}`}
              >
                <GlassCard className="h-full p-6 text-center border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                  {tech.featured && (
                    <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
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
              Comprehensive <span className="text-blue-600">Web Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex web applications, we have the expertise to bring your vision to life.
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
      {/* Icon/Image container */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 flex items-center justify-center text-white shadow-md`}>
        {typeof service.icon === 'string' ? (
          <div className="w-10 h-10 relative">
            <Image src={service.icon} alt={service.title} width={40} height={40} className="object-contain" />
          </div>
        ) : (
          <service.icon className="h-6 w-6" />
        )}
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

      {/* Updated Learn More Link - Now points to /services */}
      <Link
        href={{
          pathname: '/services',
          hash: service.title.toLowerCase()
            .replace(/[^\w\s-]/g, '')  // Remove special chars
            .replace(/\s+/g, '-'),     // Replace spaces with hyphens
        }}
        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group"
        scroll={false}  // Optional: Smoother anchor navigation
      >
        Learn more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </GlassCard>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
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
              A <span className="text-blue-600">Seamless</span> Development Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 6-step process ensures quality, efficiency, and outstanding results.
            </p>
          </motion.div>

          <div className="relative">
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
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-blue-200">Amazing</span> Together
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl px-8 py-6 text-lg"
                asChild
              >
                <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6">
                  Start Your Project
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
                  Call Us Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
