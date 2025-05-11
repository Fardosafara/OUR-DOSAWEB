'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Trophy, Clock, CheckCircle, Sparkles, ChevronRight, MoveRight, Figma, Code, Globe } from "lucide-react";

// Preload critical assets
const backgroundImageUrl = "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

export default function HeroSection() {
  const postLcpElements = useRef<HTMLDivElement[]>([]);
  const lcpTextRef = useRef<HTMLDivElement>(null);

  // Stats (Trust Indicators)
  const stats = [
    { value: "100", label: "Successful Projects", icon: Trophy },
    { value: "99%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Dedicated Support", icon: Clock },
    { value: "5.0", label: "Average Rating", icon: CheckCircle },
  ];

  // Services
  const services = [
    { name: "Web Design", icon: Figma },
    { name: "Development", icon: Code },
    { name: "Digital Strategy", icon: Globe },
  ];

  useEffect(() => {
    // Ensure LCP text is immediately visible
    if (lcpTextRef.current) {
      lcpTextRef.current.style.opacity = '1';
      lcpTextRef.current.style.transform = 'none';
    }

    // Load non-critical elements after LCP
    const timer = setTimeout(() => {
      postLcpElements.current.forEach(el => {
        if (el) {
          el.style.opacity = '1';
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addToPostLcpRefs = (el: HTMLDivElement | null) => {
    if (el) {
      el.style.opacity = '0';
      postLcpElements.current.push(el);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gray-900">
      {/* === Critical CSS Inline === */}
      <style jsx global>{`
        .lcp-text {
          font-family: var(--font-primary), -apple-system, BlinkMacSystemFont, sans-serif;
          contain: content;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-after-lcp {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
          animation-delay: 1s;
        }
      `}</style>

      {/* === Background Image === */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="Digital design showcase"
          fill
          className="object-cover"
          quality={75}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRh4AAABXRUJQVlA4IB4AAAAwAQCdASoBAAEAAgA0JaQAA3AA/vt0AAA="
          onLoad={(e) => {
            const img = e.target as HTMLImageElement;
            if (img) {
              img.style.opacity = '1';
            }
          }}
          style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      {/* === Content Container === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge - Load after LCP */}
          <div 
            ref={addToPostLcpRefs}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-white/10 mb-6 backdrop-blur-sm animate-after-lcp post-lcp"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-white font-medium text-sm">Award-Winning Digital Agency</span>
            <MoveRight className="h-4 w-4 text-blue-300 ml-2" />
          </div>

          {/* Main Headline - Optimized for LCP */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold mb-6 leading-tight">
            <span className="block text-white mb-4">We Create Digital</span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-400">
                Experiences That Convert
              </span>
            </span>
          </h1>

          {/* LCP Critical Text Element - Now with ref for immediate visibility */}
          <div 
            ref={lcpTextRef}
            className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed lcp-text"
            style={{
              opacity: 0, // Will be set to 1 immediately in useEffect
              transform: 'translateY(10px)', // Will be removed immediately
              fontOpticalSizing: 'auto',
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }}
          >
            We create <span className="font-semibold text-white">high-performance websites</span> and 
            <span className="font-semibold text-white"> digital experiences</span> that drive 
            <span className="font-semibold text-white"> revenue growth</span> and 
            <span className="font-semibold text-white"> brand authority</span> for ambitious businesses worldwide.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
              asChild
            >
              <Link href="https://calendar.app.google/ChWX5KxLhV9Xe37v6" aria-label="Get a free consultation">
                <span className="flex items-center">
                  Get Free Audit
                  <ChevronRight className="h-4 w-4 ml-2" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Trust Indicators - Load after LCP */}
          <div 
            ref={addToPostLcpRefs}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 animate-after-lcp post-lcp"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-blue-200/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services - Load after LCP */}
          <div 
            ref={addToPostLcpRefs}
            className="flex flex-wrap gap-3 justify-center animate-after-lcp post-lcp"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white backdrop-blur-sm"
              >
                <service.icon className="h-4 w-4 text-blue-300" />
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
