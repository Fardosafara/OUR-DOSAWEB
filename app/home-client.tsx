"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const HeroSection = dynamic(() => import("@/components/home/hero-section"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Loading placeholder */}
    </div>
  ),
  ssr: true,
})

const AnimatedTextBanner = dynamic(() => import("@/components/home/animated-text-banner"), {
  loading: () => <div className="h-20 bg-white"></div>,
  ssr: false,
})

const PitchSection = dynamic(() => import("@/components/home/pitch-section"), {
  loading: () => <div className="py-20 bg-white"></div>,
  ssr: true,
})

const ServicesSection = dynamic(() => import("@/components/home/services-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const WhyChooseUsSection = dynamic(() => import("@/components/home/why-choose-us-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const ProcessSection = dynamic(() => import("@/components/home/process-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const TestimonialsSection = dynamic(() => import("@/components/home/testimonials-section"), {
  loading: () => <div className="py-16 bg-white"></div>,
  ssr: true,
})

const CTASection = dynamic(() => import("@/components/home/cta-section"), {
  loading: () => <div className="py-16 bg-blue-600"></div>,
  ssr: true,
})

const WhatsAppButton = dynamic(() => import("@/components/whatsapp-button"), {
  loading: () => null,
  ssr: false,
})

export default function HomeClient() {
  return (
    <div className="relative">
      <HeroSection />

      <Suspense fallback={<div className="h-20 bg-white"></div>}>
        <AnimatedTextBanner />
      </Suspense>

      {/* Add PitchSection right after AnimatedTextBanner */}
      <Suspense fallback={<div className="py-20 bg-white"></div>}>
        <PitchSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <WhyChooseUsSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-white"></div>}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-blue-600"></div>}>
        <CTASection />
      </Suspense>

      <WhatsAppButton />
    </div>
  )
}
