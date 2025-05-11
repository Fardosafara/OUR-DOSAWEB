"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageSquare, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
        
        {/* Floating circles */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/10 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Glowing accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl" />
            
            <div className="relative z-10">
              <Badge className="mb-6 bg-white text-blue-900 hover:shadow-lg hover:shadow-yellow-400/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Exclusive Limited Offer
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center leading-tight">
                Transform Your Digital Presence <span className="text-purple-300">Today</span>
              </h2>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-10 text-center max-w-3xl mx-auto">
                Claim your <span className="font-semibold text-white">free consultation</span> and website audit worth $500. 
                Let's create a winning strategy for your online success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="text-base md:text-lg bg-white text-blue-900 hover:from-yellow-300 hover:to-amber-400 group relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 transition-all"
                  >
                    <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" className="flex items-center gap-2 relative z-10 font-semibold">
                      <Calendar className="h-5 w-5" />
                      Book Appointment
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </Button>
                </motion.div>
                
                <span className="text-white/70 hidden sm:block">or</span>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://wa.me/0726025307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white  hover:from-green-400 hover:to-green-500 text-blue-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Chat Instantly
                  </a>
                </motion.div>
              </div>
              
              <p className="text-sm text-blue-200 mt-6 text-center">
                <span className="inline-block border-b border-blue-300/50 border-dashed">
                  No commitment. 100% confidential.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Badge component
function Badge({ children, className = "" }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${className}`}
    >
      {children}
    </motion.div>
  )
}
