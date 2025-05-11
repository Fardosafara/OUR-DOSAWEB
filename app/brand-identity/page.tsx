"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Palette, Type, ImageIcon, Layers, PenTool, Compass, CheckCircle, Sparkles, ChevronRight, Award, Eye, Target, Users, BarChart2, Heart } from "lucide-react"
import { GlassMorphicCard } from "@/components/glassmorphic-card"
import { ThreeDCard } from "@/components/3d-card"

export default function BrandIdentityPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const services = [
    {
      title: "Logo Design",
      description: "Create a distinctive visual mark that represents your brand's essence and values.",
      icon: PenTool,
      features: [
        "Multiple concept options",
        "Vector-based designs",
        "Color variations",
        "Responsive versions",
        "File formats for all uses",
      ],
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Brand Guidelines",
      description: "Establish clear rules for consistent brand application across all touchpoints.",
      icon: Compass,
      features: [
        "Logo usage specifications",
        "Color palette definitions",
        "Typography guidelines",
        "Imagery style guide",
        "Brand voice and tone",
      ],
      bgImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Visual Identity System",
      description: "Develop a cohesive visual language that communicates your brand personality.",
      icon: Layers,
      features: [
        "Business cards & stationery",
        "Marketing materials",
        "Digital assets",
        "Signage & environmental design",
        "Brand patterns & textures",
      ],
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Typography Selection",
      description: "Choose typefaces that reflect your brand character and enhance readability.",
      icon: Type,
      features: [
        "Primary & secondary typefaces",
        "Font hierarchy system",
        "Custom font development",
        "Web font implementation",
        "Typography guidelines",
      ],
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
      title: "Color Strategy",
      description: "Define a strategic color palette that evokes the right emotions and associations.",
      icon: Palette,
      features: [
        "Primary & secondary colors",
        "Color psychology analysis",
        "Accessibility considerations",
        "Color codes for all mediums",
        "Application examples",
      ],
      bgImage: "/color.webp"
    },
    {
      title: "Brand Photography",
      description: "Establish a distinctive visual style for all brand imagery and photography.",
      icon: ImageIcon,
      features: [
        "Photography style guide",
        "Art direction",
        "Photo editing templates",
        "Stock photo curation",
        "Custom photoshoot direction",
      ],
      bgImage: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    },
  ]

  const process = [
    {
      title: "Discovery & Research",
      description: "We dive deep into understanding your business, audience, competitors, and industry to inform our creative strategy.",
      icon: Eye,
      number: "01",
    },
    {
      title: "Strategy Development",
      description: "We define your brand positioning, personality, values, and messaging to create a solid foundation for your visual identity.",
      icon: Target,
      number: "02",
    },
    {
      title: "Creative Exploration",
      description: "Our designers explore multiple creative directions based on the strategic foundation we've established.",
      icon: Palette,
      number: "03",
    },
    {
      title: "Concept Refinement",
      description: "We refine the selected direction, perfecting every detail of your brand identity system.",
      icon: PenTool,
      number: "04",
    },
    {
      title: "Brand Guidelines",
      description: "We document all elements of your brand identity with clear guidelines for consistent application.",
      icon: Layers,
      number: "05",
    },
    {
      title: "Implementation Support",
      description: "We provide ongoing support to ensure your new brand identity is implemented effectively across all touchpoints.",
      icon: Users,
      number: "06",
    },
  ]

  const benefits = [
    {
      title: "Increased Recognition",
      description: "A strong brand identity makes your business instantly recognizable to customers.",
      icon: Award,
    },
    {
      title: "Competitive Advantage",
      description: "Stand out in a crowded market with a distinctive visual identity.",
      icon: BarChart2,
    },
    {
      title: "Customer Loyalty",
      description: "Build emotional connections that turn customers into brand advocates.",
      icon: Heart,
    },
  ]

  return (
    <div className="relative pt-24" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] bg-gradient-to-br from-blue-900/90 to-blue-700/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            alt="Creative workspace"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-700/60" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mt-12 md:mt-0 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-block"
              >
                <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                  Brand Identity
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Craft a{" "}
                <span className="relative inline-block">
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Memorable Brand
                  </motion.span>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-2 bg-blue-400/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
              >
                We create distinctive brand identities that communicate your values, connect with your audience, and set
                you apart from competitors.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" className="flex items-center">
                    Start Your Brand Project
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" className="flex items-center">
                    Get a Free Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative hidden md:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl" />
              <ThreeDCard
                intensity={15}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Brand Identity" 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <Palette className="h-6 w-6" />
                </motion.div>
              </ThreeDCard>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Brand Value Proposition */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-blue-50 rounded-3xl -z-10 hidden md:block" />
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Brand Strategy" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Why It Matters</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Brand is Your Most Valuable Asset
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A strong brand identity creates recognition, builds trust, and communicates your values at every touchpoint. 
                It's the foundation of all your marketing efforts and customer experiences.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive <span className="text-blue-600">Brand Identity</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From logo design to complete visual identity systems, we offer everything you need to build a strong brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <GlassMorphicCard className="h-full border border-white/50 hover:border-blue-200 transition-colors overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.bgImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-700/50" />
                    <div className="absolute top-4 right-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 pl-0">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </GlassMorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-1.5">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              How We <span className="text-blue-600">Build</span> Your Brand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven branding process ensures we create a distinctive and effective brand identity
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-blue-100 hidden md:block" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${index % 2 === 0 ? 'md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto md:mt-16'}`}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-6">
                        <div className="bg-blue-100 text-blue-800 rounded-full p-4 flex-shrink-0">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-2">
                            {step.number}
                          </div>
                          <h3 className="text-xl font-bold mb-4 text-blue-800">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-blue-600 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-700/80" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-medium">Ready to Transform Your Brand?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create a Brand Identity That Stands Out</h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're starting from scratch or refreshing your existing brand, we're here to help you make a
              lasting impression.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" className="flex items-center">
                  Start Your Brand Project
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
