'use client'
import { motion } from "framer-motion";
import { GlobeAltIcon, BoltIcon, SparklesIcon, ScaleIcon } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";

// Custom Badge component
const Badge = ({ 
  children, 
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <span 
    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </span>
);

const PitchSection = () => {
  // Generate consistent random values using a seed
  const particles = useMemo(() => {
    return Array(15).fill(0).map((_, i) => {
      // Use a simple pseudo-random generator with a fixed seed
      const seed = i * 12345;
      const random = (max: number, min = 0) => {
        const x = Math.sin(seed) * 10000;
        return min + (x - Math.floor(x)) * (max - min);
      };
      
      return {
        x: random(100),
        y: random(100),
        width: random(10, 5),
        height: random(10, 5),
        opacity: random(0.5, 0.1),
        animateY: random(100) - 50,
        animateX: random(100) - 50,
        duration: random(10, 10),
      };
    });
  }, []);

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Floating particles background - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/30 hidden sm:block"
            style={{
              left: `${particle.x}vw`,
              top: `${particle.y}vh`,
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              opacity: particle.opacity
            }}
            animate={{
              y: [0, particle.animateY],
              x: [0, particle.animateX],
              transition: {
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Premium Badge - Centered on mobile */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex justify-center md:inline-block mb-6"
          >
            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-medium tracking-wider px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
              ✨ Conversion-Focused Digital Solutions
            </Badge>
          </motion.div>

          {/* Headline with responsive sizing */}
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Turn Clicks Into Clients
              <span className="block md:inline"> With Digital Solutions That</span>
              <span className="relative whitespace-nowrap block md:inline">
                <span className="block md:inline">Actually</span>
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" width="300" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 4 100 2 150 6C200 10 250 9 298 4" stroke="url(#pitch-underline)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="pitch-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="block mt-2 md:mt-4 text-blue-600">Convert</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              At Dosaweb Solutions, we design more than just websites — we create conversion machines powered by strategy, driven by design, and obsessed with results.
            </p>
          </div>

          {/* USP Grid - Stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
            {/* USP 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <BoltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">High-Performance Websites</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                We launch stunning websites that don't just look good—they're engineered to convert visitors into customers.
              </p>
            </motion.div>

            {/* USP 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Data-Backed Marketing</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Maximize ROI with marketing strategies driven by real data and continuous optimization.
              </p>
            </motion.div>

            {/* USP 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <ScaleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Trust & Growth</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                We build digital assets that establish trust, drive targeted traffic, and scale with your business.
              </p>
            </motion.div>

            {/* USP 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="bg-teal-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Clean Code & Smart UX</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                From startups to enterprises, we deliver technical excellence with irresistible messaging that converts.
              </p>
            </motion.div>
          </div>

          {/* Elevator Pitch - Adjusted padding for mobile */}
          <motion.div 
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-blue-800 to-indigo-900 p-0.5 rounded-2xl shadow-xl md:shadow-2xl mb-12 md:mb-16"
          >
            <div className="relative bg-white rounded-[15px] p-6 sm:p-8 md:p-10">
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-yellow-400 text-gray-900 font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs transform rotate-6 shadow">
                Why Choose Us?
              </div>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 font-medium text-center">
                "In a market flooded with generic solutions, Dosaweb Solutions delivers what others can't: <span className="font-semibold text-blue-600">websites that actually convert</span>. We combine <span className="font-semibold text-indigo-600">strategic thinking</span> with <span className="font-semibold text-purple-600">beautiful design</span> and <span className="font-semibold text-teal-600">technical precision</span> to create digital experiences that don't just attract visitors—they <span className="font-semibold text-yellow-500">generate business</span>."
              </p>
            </div>
          </motion.div>

          {/* Mission Statement - Adjusted padding and spacing */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg md:shadow-xl border border-gray-100 overflow-hidden">
            <div className="absolute -bottom-16 -right-16 opacity-10">
              <svg width="300" height="300" viewBox="0 0 400 400">
                <path d="M200,50 C300,100 350,200 200,350 C50,200 100,100 200,50" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5 3"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6 md:mb-8">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 sm:p-4 md:p-5 rounded-full"
                >
                  <GlobeAltIcon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />
                </motion.div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-blue-600">Promise</span>
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Whether you're a startup or scaling enterprise, we deliver clean code, smart UX, and irresistible messaging — everything you need to stand out and sell more online. We measure our success by your growth metrics.
              </p>
              
              {/* Value Elements - Smaller on mobile */}
              <div className="flex justify-center space-x-4 sm:space-x-6">
                {['🚀', '📈', '💡', '🛠️', '🎯', '💰'].map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="text-2xl sm:text-3xl cursor-default"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchSection;
