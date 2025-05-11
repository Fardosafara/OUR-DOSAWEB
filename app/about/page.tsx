"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, ArrowRight, Code, PenTool, Lightbulb, Users, Award } from "lucide-react"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const values = [
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "We believe in pushing boundaries to create digital experiences that stand out",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Human Connection",
      description: "Technology should bring people together, not replace genuine interaction",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We pour our hearts into every pixel and line of code we create",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We only take on projects we truly believe in and care about",
      color: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] bg-gradient-to-br from-blue-900/90 to-blue-700/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-office.jpg"
            alt="Two friends working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-blue-700/70" />
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
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Badge className="bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-2 text-sm mb-6 hover:bg-white/30 transition-colors">
                Our Beautiful Story
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Two Besties, One Dream
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              From classmates to co-founders, our journey is built on friendship, trust, and a shared passion for creating beautiful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group px-10 py-7 text-lg"
              >
                <Link href="/contact" className="flex items-center">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Mobile Optimized */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* Image appears first on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-1 md:order-2"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Two friends working together"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Built on Trust</p>
                    <p className="text-sm text-gray-600">And endless cups of coffee</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text content appears after image on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
                How It Began
              </Badge>
              <h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
                Two Fardosas. One Vision. <span className="text-blue-600">A Story Woven with Heart.</span>
              </h2>

              <p>
                What makes us special isn't just our shared name — it's the way our minds and hearts align.
                We're two passionate creators, each bringing something beautifully unique to the table:
                one with an eye for design that speaks, the other with code that listens.
              </p>

              <p className="mt-6">
                Together, we discovered a rare kind of harmony — where creativity meets precision, and every
                idea is brought to life with both elegance and emotion.
              </p>

              <p className="mt-6">
                We don't just build websites or craft digital solutions. We create experiences that feel warm,
                human, and deeply intentional.
              </p>

              <p className="mt-6">
                At the heart of everything we do is a simple promise: to turn visions into digital stories that
                connect, inspire, and leave a little sparkle behind.
              </p>

              <p className="mt-6 italic text-blue-600 font-medium">
                Because when friendship and purpose come together — magic happens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch + Mission + Unique Selling Proposition Section */}
      <section className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-white pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-5 bg-blue-100 text-blue-700 tracking-wide uppercase hover:bg-blue-200">
              What Sets Us Apart
            </Badge>

            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Turn Clicks Into Clients —
              <br className="hidden md:block" />
              With Digital Solutions That Actually Convert
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
              <em>
                Dosaweb Solutions is a women-led digital agency obsessed with results.
                We create sleek, high-performing websites and marketing systems that don't just look good —
                they generate leads, build trust, and drive revenue.
              </em>
            </p>

            {/* Unique Selling Proposition Section */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">🚀 Strategy Meets Aesthetics</h4>
                <p className="text-gray-700">
                  We blend bold design with smart digital strategy to deliver experiences that wow and convert — every single time.
                </p>
              </div>
              <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">🎯 Built to Convert</h4>
                <p className="text-gray-700">
                  Every page, every pixel is optimized for performance — turning your traffic into loyal customers and sales.
                </p>
              </div>
              <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">💼 Scalable & Sales-Ready</h4>
                <p className="text-gray-700">
                  From launch to scale, our solutions are built for growth — giving your brand the tools to dominate online.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center justify-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Our Mission
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                To empower ambitious brands with high-converting digital solutions that accelerate growth, boost visibility, and build lasting online authority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
              What We Believe
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we create together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className={`h-full p-8 rounded-xl bg-gradient-to-br ${value.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-lg backdrop-blur-sm mb-6">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
                How We Work
              </Badge>
              <h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
                More Than Just <span className="text-blue-600">A Service</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you work with us, you're not hiring a faceless agency. You're gaining two passionate creators who will treat your project with the same care and attention we give our own.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe the best digital experiences come from deep collaboration. That's why we work closely with you at every step, ensuring the final product truly reflects your vision.
                </p>
                
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Our Promise to You</h4>
                      <p className="text-gray-700">
                        We'll pour our hearts into your project, just like we did with all those late-night assignments that brought us here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-md hover:bg-white/30">
              Ready to Create Together?
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Let's Build Something <span className="text-blue-200">Beautiful</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We'd love to hear your story and explore how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 group px-10 py-7 text-lg"
              >
                <Link href="/contact" className="flex items-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
