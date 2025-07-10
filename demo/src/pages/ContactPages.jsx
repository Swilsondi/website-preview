import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Star,
  Users,
  MessageCircle,
  Zap,
  Globe,
  Calendar,
  CheckCircle,
  Coffee
} from "lucide-react"
import { useEffect, useState } from "react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Hero Section - FIXED
const ContactHero = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
      />
    </div>

    <div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-indigo-500/20 border-indigo-400 text-indigo-200 mb-8 backdrop-blur-sm">
            💬 Let's Start Something Amazing • Free Consultation
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Let's Build 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Something </span>
          Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Ready to transform your digital presence? 
          <span className="text-indigo-400 font-semibold"> Get in touch and let's discuss your project.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            size="lg" 
            className="text-lg px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Schedule a Call
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-4 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-semibold backdrop-blur-sm transition-all duration-300"
          >
            Send a Message
            <MessageCircle className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
)

// Contact Form & Info Section - FIXED
const ContactSection = () => (
  <section className="py-24 bg-gray-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                Send us a message
              </h2>
              <p className="text-gray-400 mb-8">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    <option>Website Development</option>
                    <option>Brand Design</option>
                    <option>Mobile App</option>
                    <option>Full Digital Package</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    <option>$2,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in touch
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We're here to help bring your vision to life. Whether you need a complete digital transformation or just want to enhance your existing presence, let's talk.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@techmotivesupreme.com",
                subtitle: "We typically respond within 4 hours"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                subtitle: "Mon-Fri 9AM-6PM EST"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "New York, NY",
                subtitle: "Available worldwide remotely"
              },
              {
                icon: Clock,
                title: "Response Time",
                info: "24 hours",
                subtitle: "Usually much faster!"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {contact.title}
                  </h3>
                  <p className="text-indigo-400 font-medium">
                    {contact.info}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {contact.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
            <h3 className="text-xl font-bold text-white mb-4">
              Why Choose TechMotiveSupreme?
            </h3>
            <ul className="space-y-3">
              {[
                "Fast 24-48 hour response time",
                "Free consultation & project scoping",
                "Transparent pricing with no hidden fees", 
                "Dedicated project manager assigned",
                "Post-launch support included"
              ].map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

// FAQ Section - FIXED
const ContactFAQ = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Quick 
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"> Answers</span>
        </h2>
        <p className="text-xl text-indigo-200">
          Common questions about working with us.
        </p>
      </motion.div>

      <div className="space-y-6">
        {[
          {
            question: "How quickly can you start my project?",
            answer: "Most projects can begin within 1-2 weeks of signing the contract and receiving the deposit."
          },
          {
            question: "Do you work with clients internationally?",
            answer: "Yes! We work with clients worldwide and have experience with different time zones and communication preferences."
          },
          {
            question: "What's included in your support?",
            answer: "All packages include post-launch support, training documentation, and varying levels of ongoing maintenance based on your chosen package."
          },
          {
            question: "Can you help with existing websites?",
            answer: "Absolutely! We can redesign, optimize, or add new features to existing websites and digital properties."
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-indigo-200 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// CTA Section - FIXED
const ContactCTA = () => (
  <section className="py-24 bg-black">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to Start Your 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Digital Journey?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Book a free consultation and let's discuss how we can help you achieve your goals.
        </p>
        
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold shadow-2xl transition-all duration-300"
        >
          Book Free Consultation
          <Coffee className="ml-3 w-6 h-6" />
        </Button>
        
        <p className="text-gray-500 mt-8">
          30-minute strategy session • No commitment required • Usually available within 24 hours
        </p>
      </motion.div>
    </div>
  </section>
)

// Better version - add this to ALL your pages
export default function ContactPage() {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    // Slight delay ensures smoother transition after route change
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <ContactHero />
      <ContactSection />
      <ContactFAQ />
      <ContactCTA />
    </div>
  )
}