import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Rocket,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Globe,
  Target,
  Award,
  Users,
  TrendingUp
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
      staggerChildren: 0.08
    }
  }
}

// Hero Section - FIXED
const PricingHero = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
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
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
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
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
      />
    </div>

    <div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-purple-500/20 border-purple-400 text-purple-200 mb-8 backdrop-blur-sm">
            💎 Creator-Focused Pricing • Built for Growth
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
        >
          Choose Your 
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Success </span>
          Package
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          From solo creators to growing brands. 
          <span className="text-purple-400 font-semibold"> Every package designed to scale with your vision.</span>
        </motion.p>
      </div>
    </div>
  </section>
)

// Pricing Cards Section - FIXED
const PricingCards = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      duration: "one-time",
      description: "Perfect for new creators ready to launch",
      icon: Zap,
      accent: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10",
      popular: false,
      features: [
        "5-Page Custom Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration", 
        "1 Month Support",
        "Social Media Links",
        "Fast Loading Speed"
      ],
      notIncluded: [
        "E-commerce Functionality",
        "Advanced Animations", 
        "Content Management",
        "Analytics Setup"
      ]
    },
    {
      name: "Professional",
      price: "$4,999", 
      duration: "one-time",
      description: "For serious creators ready to scale",
      icon: Crown,
      accent: "from-purple-500 to-pink-500", 
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10",
      popular: true,
      features: [
        "10-Page Custom Website",
        "Advanced Animations",
        "Premium SEO Package",
        "E-commerce Ready",
        "Content Management System",
        "Analytics & Tracking",
        "3 Months Support",
        "Brand Guidelines",
        "Lead Generation Forms",
        "Newsletter Integration"
      ],
      notIncluded: [
        "Custom App Development",
        "Advanced Integrations"
      ]
    },
    {
      name: "Enterprise", 
      price: "$9,999",
      duration: "one-time",
      description: "Complete digital transformation",
      icon: Rocket,
      accent: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50", 
      bgColor: "bg-green-500/10",
      popular: false,
      features: [
        "Unlimited Pages",
        "Custom App Development", 
        "Advanced Integrations",
        "Complete Brand Package",
        "Marketing Automation",
        "Advanced Analytics",
        "6 Months Priority Support",
        "Performance Optimization",
        "Security & Maintenance",
        "Custom Feature Development",
        "Dedicated Project Manager",
        "Training & Documentation"
      ],
      notIncluded: []
    }
  ]

  return (
    <section className="py-24 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Transparent Pricing.
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Exceptional Value.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the package that fits your vision. All plans include everything you need to succeed.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.bgColor} ${plan.borderColor} border-2 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.accent} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-4xl lg:text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {plan.duration}
                    </span>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className={`w-full mb-8 bg-gradient-to-r ${plan.accent} hover:opacity-90 text-white font-semibold shadow-xl transition-all duration-300`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="text-lg font-semibold text-white pt-4">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-500">
                              <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section - FIXED
const FAQSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Questions? 
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent"> We've Got Answers.</span>
        </h2>
        <p className="text-xl text-blue-200">
          Everything you need to know about our packages and process.
        </p>
      </motion.div>

      <div className="space-y-6">
        {[
          {
            question: "What's included in the timeline?",
            answer: "Most projects are completed within 2-4 weeks from start to finish. Enterprise projects may take 4-8 weeks depending on complexity."
          },
          {
            question: "Do you offer payment plans?",
            answer: "Yes! We offer flexible payment options including 50% upfront and 50% on completion, or monthly payment plans for Enterprise packages."
          },
          {
            question: "What happens after launch?",
            answer: "You'll receive full training, documentation, and our support package. We're here to help you succeed long after launch."
          },
          {
            question: "Can I upgrade my package later?",
            answer: "Absolutely! You can upgrade at any time. We'll credit your previous investment toward the higher package."
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
                <p className="text-blue-200 leading-relaxed">
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
const PricingCTA = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="relative px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to 
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Transform </span>
          Your Business?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Join hundreds of successful creators who chose TechMotiveSupreme to launch their digital presence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl transition-all duration-300"
          >
            Book Free Consultation
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
          >
            View Our Work
            <Globe className="ml-3 w-6 h-6" />
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { icon: Heart, text: "100% Satisfaction Guarantee" },
            { icon: Zap, text: "Lightning Fast Delivery" },
            { icon: Award, text: "Award-Winning Design" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Better version - add this to ALL your pages
export default function PricingPage() {
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
      <PricingHero />
      <PricingCards />
      <FAQSection />
      <PricingCTA />
    </div>
  )
}