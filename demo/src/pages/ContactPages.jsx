import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { 
  Send, 
  Mail, 
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
  Coffee,
  ChevronDown
} from "lucide-react"
import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Footer from "@/components/Footer";
import { sanitizeInput, validateForm } from "@/utils/validation"
import { Helmet } from "react-helmet";

// Custom Select Component
const CustomSelect = ({ label, options, defaultValue, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className={`relative ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white text-left flex items-center justify-between hover:border-indigo-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
        >
          <span>{selected}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-gray-600 rounded-lg shadow-xl z-10 overflow-hidden"
          >
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-white hover:bg-gray-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Hero Section - updated to fix content blocking issue
const ContactHero = ({ onMessageClick }) => (
  <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
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

    <div className="relative flex items-center justify-center px-4 md:px-6 lg:px-8 py-16">
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
            onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
          >
            Schedule a Call
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-4 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-semibold backdrop-blur-sm transition-all duration-300"
            onClick={onMessageClick}
          >
            Send a Message
            <MessageCircle className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
)

// Updated Contact Form with validation
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: sanitizeInput(value)
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const validation = validateForm(formData)
    
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800/50 border-gray-700 p-8 backdrop-blur-sm">
      <CardContent className="p-0">
        <h2 className="text-3xl font-bold text-white mb-2">
          Send us a message
        </h2>
        <p className="text-gray-400 mb-8">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name *
              </label>
              <Input 
                placeholder="John" 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 h-12 rounded-lg transition-all duration-200"
                required
              />
              {errors.firstName && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name *
              </label>
              <Input 
                placeholder="Doe" 
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 h-12 rounded-lg transition-all duration-200"
                required
              />
              {errors.lastName && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <Input 
              type="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 h-12 rounded-lg transition-all duration-200"
              required
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Type *
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => handleInputChange('projectType', e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
              required
            >
              <option value="">Select a project type</option>
              <option value="Website Development">Website Development</option>
              <option value="Brand Design">Brand Design</option>
              <option value="Mobile App">Mobile App</option>
              <option value="E-commerce Platform">E-commerce Platform</option>
              <option value="Full Digital Package">Full Digital Package</option>
              <option value="Other">Other</option>
            </select>
            {errors.projectType && (
              <p className="mt-2 text-sm text-red-400">
                {errors.projectType}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Budget Range *
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
              required
            >
              <option value="">Select a budget range</option>
              <option value="$2,000 - $5,000">$2,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000+">$50,000+</option>
            </select>
            {errors.budget && (
              <p className="mt-2 text-sm text-red-400">
                {errors.budget}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Details *
            </label>
            <Textarea 
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 rounded-lg transition-all duration-200 resize-none"
              required
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <Button 
            type="submit"
            size="lg" 
            className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-xl transition-all duration-300 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {submitStatus === 'success' && (
            <p className="mt-4 text-sm text-green-400">
              Message sent successfully! We will get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-sm text-red-400">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

// Contact Section - replaced with updated form
const ContactSection = () => (
  <section className="py-24 bg-gray-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form - UPDATED: With validation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info - UPDATED: Removed phone */}
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
                info: "techmotivesupreme@gmail.com",
                subtitle: "We typically respond within 4 hours"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "DMV",
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

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30 backdrop-blur-sm">
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

// FAQ Section - same as before
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

// CTA Section - same as before
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
          className="text-xl px-12 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold shadow-2xl transition-all duration-300 rounded-lg"
          onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
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

export default function ContactPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | TechMotiveSupreme</title>
        <meta name="description" content="Contact TechMotiveSupreme for a free consultation, project inquiry, or support. Fast response guaranteed." />
        <meta property="og:title" content="Contact | TechMotiveSupreme" />
        <meta property="og:description" content="Get in touch for a free consultation or project inquiry. Fast response guaranteed." />
        <meta property="og:image" content="/assets/dark-logo.png" />
        <meta property="og:url" content="https://techmotivesupreme.com/contact" />
      </Helmet>
      <div
        className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${
          pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ContactHero onMessageClick={() => {
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <div ref={formRef}>
          <ContactSection />
        </div>
        <ContactFAQ />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
}