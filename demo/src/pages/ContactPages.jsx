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
import emailjs from 'emailjs-com';

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
  <section className="relative py-24 bg-black overflow-hidden">
    <div className="absolute inset-0">

</div>

    <div className="relative flex items-center justify-center px-4 md:px-6 lg:px-8 py-16">
      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="mb-8"
        >
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Let's Build 
          <span className="text-white"> Something </span>
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
            className="text-lg px-10 py-4 bg-white text-black hover:bg-neutral-100 font-semibold transition-colors duration-200"
            onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
          >
            Schedule a Call
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-4 border border-neutral-700 text-neutral-300 hover:bg-white/5 hover:border-neutral-500 font-semibold transition-colors duration-200 bg-transparent"
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
    let sanitizedValue = value;
    if (field === 'firstName' || field === 'lastName' || field === 'email') {
      sanitizedValue = sanitizeInput(value);
    } else if (field === 'message') {
      // Only remove HTML tags, keep spaces
      sanitizedValue = typeof value === 'string' ? value.replace(/<[^>]*>?/gm, '') : '';
    }
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
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
      
      // Send main contact form email
      await emailjs.send(
        'service_cby8mnr', // service ID
        'template_uviodzr', // contact form template
        formData,
        'BC0wai72dA16OIPrs' // public key
      );
      // Send welcome email (optional, if you want a separate welcome message)
      // await emailjs.send(
      //   'service_cby8mnr',
      //   'template_uviodzr',
      //   { email: formData.email, name: formData.firstName + ' ' + formData.lastName },
      //   'BC0wai72dA16OIPrs'
      // );
      
      // Send to Zapier webhook via backend proxy (non-blocking)
      try {
        await fetch('/demo/api/zapier-proxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': '07151999'
          },
          body: JSON.stringify(formData)
        });
      } catch (zapierErr) {
        console.warn('Zapier proxy failed:', zapierErr);
      }
      
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
    <Card className="bg-neutral-900 border-neutral-800 p-8 backdrop-blur-sm">
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
              <option value="$400 - $1,000">$400 - $1,000</option>
              <option value="$1,000 - $2,500">$1,000 - $2,500</option>
              <option value="$2,500 - $4,000">$2,500 - $4,000</option>
              <option value="$4,000 - $7,000">$4,000 - $7,000</option>
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
            className="w-full h-14 bg-white text-black hover:bg-neutral-100 font-semibold transition-colors duration-200 rounded-lg"
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
  <section className="py-24 bg-black border-t border-white/[0.06]">
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
            {[ // REORDERED: Response Time, Location, Email
              {
                icon: Clock,
                title: "Response Time",
                info: "24 hours",
                subtitle: "Usually much faster!"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "DMV",
                subtitle: "Available worldwide remotely"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "techmotivesupreme@gmail.com",
                subtitle: "We typically respond within 4 hours"
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
                <div className="w-10 h-10 border border-neutral-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-semibold text-white text-left mb-1">
                    {contact.title}
                  </h3>
                  <p className="text-white font-medium text-left mb-1">
                    {contact.info}
                  </p>
                  <p className="text-gray-400 text-sm text-left">
                    {contact.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border border-neutral-800 rounded-xl p-6">
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
  <section className="py-20 bg-neutral-950">
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
          <span className="text-white"> Answers</span>
        </h2>
        <p className="text-xl text-neutral-400">
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
            <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-600 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
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
          <span className="text-white"> Digital Journey?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Book a free consultation and let's discuss how we can help you achieve your goals.
        </p>
        
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-white text-black hover:bg-neutral-100 font-bold transition-colors duration-200 rounded-lg"
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
  const formRef = useRef(null);

  return (
    <>
      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K85QK9ZX');`
      }} />
      {/* End Google Tag Manager */}
      <Helmet>
        <title>Contact | TechMotiveSupreme</title>
        <meta name="description" content="Contact TechMotiveSupreme for a free consultation, project inquiry, or support. Fast response guaranteed." />
        <meta property="og:title" content="Contact | TechMotiveSupreme" />
        <meta property="og:description" content="Get in touch for a free consultation or project inquiry. Fast response guaranteed." />
        <meta property="og:image" content="/assets/dark-logo.png" />
        <meta property="og:url" content="https://techmotivesupreme.com/contact" />
        <link rel="canonical" href="https://www.techmotivesupreme.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-black w-full overflow-x-hidden">
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