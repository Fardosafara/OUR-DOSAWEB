"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechSolutions Inc.",
    image: "/sahara.jpg",
    rating: 5,
    text: "Working with DosaWeb transformed our online presence completely. Their team was professional, responsive, and delivered beyond our expectations. Our website traffic increased by 200% and conversions improved dramatically.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Studios",
    image: "/michal.jpg",
    rating: 5,
    text: "The team at DosaWeb delivered a stunning website that perfectly captures our brand identity. Their attention to detail and technical expertise is unmatched. I highly recommend their services to anyone looking to elevate their digital presence.",
  },
  {
    name: "Jessica Williams",
    role: "Operations Manager",
    company: "GrowthForce",
    image: "/jessica.jpg",
    rating: 5,
    text: "DosaWeb's strategic approach to digital marketing helped us reach new audiences and grow our business. The ROI has been exceptional, and their ongoing support is invaluable. They're truly invested in our success.",
  },
  {
    name: "Xiito Rodriguez",
    role: "Founder",
    company: "StartUp Ventures",
    image: "/xiito.webp",
    rating: 5,
    text: "As a startup, we needed a website that could scale with our growth. DosaWeb built us a future-proof solution that's already driving investor interest and customer engagement.",
  },
  {
    name: "Emily Park",
    role: "E-commerce Manager",
    company: "Luxe Retail",
    image: "/emily.webp",
    rating: 5,
    text: "Our e-commerce platform saw a 150% increase in sales after DosaWeb's redesign. Their conversion optimization strategies are game-changing.",
  },
  {
    name: "Robert Kim",
    role: "CTO",
    company: "FinTech Global",
    image: "/robert.webp",
    rating: 5,
    text: "The security and performance optimizations DosaWeb implemented for our web app have been outstanding. Our load times improved by 70% with zero downtime.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section 
      className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-full h-48 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent -translate-x-1/2 -rotate-6" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
            <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            <span className="text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <h2 
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Transformative Results, <span className="text-blue-600">Verified</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it—see what our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                index === activeIndex ? "ring-2 ring-blue-500 scale-[1.02]" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
            >
              <div className="absolute top-6 left-6 text-blue-100/80" aria-hidden="true">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="p-8 pt-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Portrait of ${testimonial.name}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  <span className="sr-only">Rating: {testimonial.rating} out of 5 stars</span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6">
                  <p>{testimonial.text}</p>
                </blockquote>
                
                <div className="absolute bottom-6 right-6" aria-hidden="true">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        {/* CTA Section */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
  aria-labelledby="cta-heading"
>
  <div className="absolute top-0 left-0 w-full h-full opacity-10" aria-hidden="true">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
  </div>
  
  <div className="relative z-10 text-center">
    <h3 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
      Ready to experience similar results?
    </h3>
    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
      Join our growing list of satisfied clients and take your digital presence to the next level.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link
        href="https://calendar.app.google/ChWX5KxLhV9Xe37v6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button
          size="lg"
          className="bg-white text-blue-800 hover:bg-gray-100 font-bold px-8 py-6 rounded-xl shadow-md transition-all hover:scale-105"
        >
          Book a Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      
      <Link
        href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" 
        className="inline-flex"
      >
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent text-white border-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl shadow-md transition-all hover:scale-105"
        >
          Get Free Audit
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
</motion.section>
      </div>
    </section>
  )
}
