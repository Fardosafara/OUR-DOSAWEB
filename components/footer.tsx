"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { FaWhatsapp, FaTiktok } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block" aria-label="DosaWeb Home">
              <Image 
                src="/logo3.png" 
                alt="DosaWeb Logo" 
                width={160} 
                height={80} 
                className="h-20 w-auto mb-6"
                priority 
              />
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating exceptional digital experiences that drive growth and deliver results for forward-thinking businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  icon: <FaWhatsapp size={18} aria-hidden="true" />, 
                  color: "hover:bg-green-600", 
                  bg: "bg-green-500", 
                  href: "https://wa.me/0726025307",
                  label: "Visit our Whatsapp (opens in new tab)"
                },
                { 
                  icon: <FaTiktok size={18} aria-hidden="true" />, 
                  color: "hover:bg-black", 
                  bg: "bg-gray-800", 
                  href: "https://www.tiktok.com/@dosaweb_solutions",
                  label: "Visit our TikTok page (opens in new tab)"
                },
                { 
                  icon: <Instagram size={18} aria-hidden="true" />, 
                  color: "hover:bg-pink-600", 
                  bg: "bg-pink-500", 
                  href: "https://www.instagram.com/dosaweb_solutions",
                  label: "Visit our Instagram page (opens in new tab)"
                },
                { 
                  icon: <Linkedin size={18} aria-hidden="true" />, 
                  color: "hover:bg-blue-700", 
                  bg: "bg-blue-600", 
                  href: "https://www.linkedin.com/in/fardosa-gedi/",
                  label: "Visit our LinkedIn page (opens in new tab)"
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full ${social.bg} text-white flex items-center justify-center transition-colors ${social.color}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label.replace('(opens in new tab)', '').trim()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Web Development", href: "/web-development" },
                { name: "Digital Marketing", href: "/digital-marketing" },
                { name: "Brand Identity", href: "/brand-identity" },
                { name: "E-Commerce Solutions", href: "/services" },
                { name: "SEO & Analytics", href: "/services" }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={service.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                    aria-label={`Go to ${link.name} page`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-600">
                  Global <br />
                  Remote, Worldwide
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+254702383309" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Call us at +254 702 383 309"
                >
                  +254 702 383 309
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:dosaweb7@gmal.com" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Email us at dosaweb7@gmal.com"
                >
                  dosaweb7@gmal.com
                </a>
              </motion.li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-500 mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email address for newsletter subscription"
                  className="bg-gray-100 text-gray-800 placeholder-gray-400 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full border border-gray-200"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to newsletter"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} DosaWeb Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
