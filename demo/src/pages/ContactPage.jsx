import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  MessageSquare,
  Globe,
  Clock,
  Shield
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

// Contact Hero Section
const ContactHero = ({ selectedPlan, consultationType }) => (
  <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
      />
    </div>

    <div className="relative flex items-center justify-center min-h-[60vh] px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
          className="mb-8"
        >
          {selectedPlan && (
            <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-green-500/20 border-green-400 text-green-200 mb-6 backdrop-blur-sm">
              ✅ {selectedPlan.name} Selected • {selectedPlan.price}
            </Badge>
          )}
          
          {consultationType === 'consultation' && (
            <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 mb-6 backdrop-blur-sm">
              📅 Free Consultation Request
            </Badge>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight"
        >
          {consultationType === 'consultation' ? 'Book Your Free' : 'Start Your'}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {consultationType === 'consultation' ? ' Consultation' : ' Project'}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {consultationType === 'consultation' 
            ? "Let's discuss your vision and create a custom solution that fits your needs perfectly."
            : "Ready to transform your digital presence? Let's get started with your project details and secure your spot."}
        </motion.p>
      </div>
    </div>
  </section>
)

// Project Details Form
const ProjectForm = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: selectedPlan?.name || '',
    timeline: '',
    budget: selectedPlan?.price || '',
    description: '',
    addOns: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your payment processor
    console.log('Form submitted:', formData)
    
    // For now, redirect to a Stripe checkout or payment link
    // You can replace this with your actual payment integration
    const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_your_payment_link_here"
    
    // Store form data for after payment
    localStorage.setItem('projectFormData', JSON.stringify(formData))
    
    // Redirect to payment (replace with your actual payment URL)
    alert('Form submitted! In production, this would redirect to Stripe checkout.')
    // window.location.href = STRIPE_PAYMENT_LINK
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Project Details & 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Payment</span>
          </h2>
          <p className="text-gray-400">
            Fill out the details below and proceed to secure your 50% deposit.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company/Business</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Select a package</option>
                      <option value="Starter Site">Starter Site - $500</option>
                      <option value="Platinum Site">Platinum Site - $900</option>
                      <option value="Premium Site">Premium Site - $1,500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Preferred Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP (Rush +$200)</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-white font-semibold mb-2">Project Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    placeholder="Tell us about your vision, goals, and any specific requirements..."
                  />
                </div>

                {/* Selected Plan Summary */}
                {selectedPlan && (
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                    <h3 className="text-white font-bold mb-4">Selected Plan: {selectedPlan.name}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-purple-300 font-semibold">Price: {selectedPlan.price}</p>
                        <p className="text-gray-400 text-sm">50% deposit required: ${parseInt(selectedPlan.price.replace('$', '').replace('+', '')) / 2}</p>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Key features included:</p>
                        <ul className="text-gray-400 text-sm mt-1">
                          {selectedPlan.features?.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </li>
                          ))}
                          {selectedPlan.features?.length > 3 && (
                            <li className="text-purple-400">+ {selectedPlan.features.length - 3} more features</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-4 text-lg shadow-2xl transition-all duration-300"
                  >
                    Proceed to Payment
                    <CreditCard className="ml-3 w-6 h-6" />
                  </Button>
                  <p className="text-gray-400 text-sm mt-4">
                    🔒 Secure payment processing • 50% deposit to start
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Options Section
const ContactOptions = () => (
  <section className="py-20 bg-gray-800">
    <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
          Other Ways to 
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Connect</span>
        </h2>
        <p className="text-xl text-gray-400">
          Prefer to talk first? We're here to help however you're most comfortable.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Phone,
            title: "Call Us",
            description: "Speak directly with our team",
            action: "Schedule Call",
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: Mail,
            title: "Email Us",
            description: "Get detailed information",
            action: "Send Email",
            color: "from-blue-500 to-cyan-500"
          },
          {
            icon: MessageSquare,
            title: "Live Chat",
            description: "Instant answers to your questions",
            action: "Start Chat",
            color: "from-purple-500 to-pink-500"
          }
        ].map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="h-full bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {option.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {option.description}
                </p>
                
                <Button
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300"
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// Main Contact Page Component
export default function ContactPage() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [consultationType, setConsultationType] = useState(null)

  useEffect(() => {
    // Get selected plan from localStorage
    const planData = localStorage.getItem('selectedPlan')
    if (planData) {
      setSelectedPlan(JSON.parse(planData))
    }

    // Get consultation type from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get('type')
    setConsultationType(type)

    // Page load animation
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Webkit Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #6366f1, #8b5cf6);
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4f46e5, #7c3aed);
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        /* Firefox Scrollbar */
        html {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 transparent;
        }
      `}</style>
      
      <ContactHero selectedPlan={selectedPlan} consultationType={consultationType} />
      {consultationType !== 'consultation' && <ProjectForm selectedPlan={selectedPlan} />}
      <ContactOptions />
    </div>
  )
}
