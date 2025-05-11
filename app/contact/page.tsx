"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Clock,
  Sparkles,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  FileText,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  Code,
  BarChart2,
  Calendar,
  MapPin,
  Briefcase,
  Layers,
  PenTool,
  Target,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/animated-gradient-text";
import * as Accordion from "@radix-ui/react-accordion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "dosaweb7@gmail.com",
    link: "mailto:dosaweb7@gmail.com",
    cta: "Send Message",
    color: "from-blue-600 to-teal-700"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+254 702383309",
    link: "tel:+254702383309",
    cta: "Call Now",
    color: "from-blue-600 to-teal-700"
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "24/7 Everyday",
    link: "https://calendar.app.google/ChWX5KxLhV9Xe37v6",
    cta: "Book Appointment",
    color: "from-blue-600 to-teal-700"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Global, Remote",
    link: "https://calendar.app.google/ChWX5KxLhV9Xe37v6",
    cta: "Get Free Audit",
    color: "from-blue-600 to-teal-700"
  },
];

const stats = [
  { value: "100+", label: "Projects Completed", icon: Layers },
  { value: "99%", label: "Client Satisfaction", icon: Star },
  { value: "24/7", label: "Support Available", icon: Shield },
  { value: "5+", label: "Years Experience", icon: Briefcase },
];

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We typically begin within 3-5 business days after agreement. Urgent projects can be fast-tracked.",
    icon: Zap
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer fixed-price projects for well-defined work and retainers for ongoing services. All projects start with a free consultation.",
    icon: FileText
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We serve clients worldwide with remote collaboration tools and flexible scheduling.",
    icon: Globe
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience with e-commerce, SaaS, professional services, and tech startups.",
    icon: Briefcase
  },
];

export default function Contact() {
  // Fixed positions for floating elements
  const floatingElements = [
    { top: "15%", left: "20%" },
    { top: "25%", left: "70%" },
    { top: "40%", left: "30%" },
    { top: "60%", left: "80%" },
    { top: "75%", left: "10%" },
    { top: "85%", left: "60%" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                top: pos.top,
                left: pos.left,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm md:text-base">
              Let's Connect
            </Badge>

            <AnimatedGradientText className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Grow Your Business?
            </AnimatedGradientText>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with our digital experts to discuss your project and discover how we can help you achieve your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-36 text-center hover:bg-white/20 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-white/80" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://calendar.app.google/ChWX5KxLhV9Xe37v6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-base md:text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </motion.a>
              <motion.a
                href="tel:+254702383309"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-base md:text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" className="relative block w-full h-[60px] text-white" fill="currentColor">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      {/* Enhanced Contact Methods Section */}
      <div className="bg-white py-16 md:py-24" id="contact-methods">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-600">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Connect With Us Easily</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're always available to discuss your project and answer any questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
                <div className="relative bg-white/80 backdrop-blur-sm p-6 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-5">{item.content}</p>
                  <div className="mt-auto">
                    <Button 
                      asChild 
                      size="lg" 
                      className={`w-full bg-gradient-to-br ${item.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      <a href={item.link} className="flex items-center justify-center gap-2">
                        {item.cta} <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* High-Converting CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Take the Next Step
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Schedule your free 30-minute consultation today and let's discuss how we can help your business grow online. Limited spots available!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://calendar.app.google/ChWX5KxLhV9Xe37v6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Consultation
              </motion.a>
              
              <motion.a
                href="tel:+254702383309"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Phone className="h-5 w-5" />
                Speak With Us Now
              </motion.a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-white/90">No obligation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-white/90">Free 30-minute session</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-white/90">Expert advice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Sparkles className="h-5 w-5" />
              </span>
              Frequently Asked Questions
            </h3>

            <Accordion.Root type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} value={`item-${index}`} className="group">
                  <Accordion.Trigger className="w-full text-left">
                    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 overflow-hidden bg-white">
                      <div className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                              <faq.icon className="h-5 w-5" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </h4>
                          <ChevronDown className="ml-auto h-5 w-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 py-4 text-gray-600 pl-14">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <MessageSquare className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Start Your Project Today</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Whether you're ready to begin or just have questions, our team is here to help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="mailto:dosaweb7@gmail.com" className="flex items-center">
                  Email Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10 border-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="tel:+254702383309" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
