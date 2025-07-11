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
  TrendingUp,
  Plus,
  Minus,
  ShoppingCart
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "@/hooks/useCart"
import Footer from "@/components/Footer"

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
          
          {/* Launch Promo Alert Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
            className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/50 rounded-2xl p-6 backdrop-blur-sm mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">🔥</span>
              <h3 className="text-xl font-bold text-red-300">LAUNCH PROMO — LIMITED TIME</h3>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-red-200 text-center mb-2">
              Get a <span className="font-bold text-white line-through">$2,000+</span> site for just <span className="font-bold text-yellow-300">$500</span>
            </p>
            <p className="text-red-300 text-sm text-center">
              Only available until: <span className="font-semibold text-white">August 15, 2025</span>
            </p>
          </motion.div>
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
  const navigate = useNavigate()
  const { setSelectedPlan } = useCart()
  
  const plans = [
    {
      name: "Starter Site",
      price: "$500",
      marketValue: "$2,000+",
      duration: "one-time",
      description: "Perfect for small businesses and creators starting their digital presence",
      icon: Zap,
      accent: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      bgColor: "bg-green-500/10",
      popular: true,
      isPromo: true,
      deliveryTime: "7–10 business days",
      revisions: "2 rounds",
      features: [
        "Up to 5 custom pages",
        "2 rounds of revisions",
        "Mobile-first responsive design",
        "Basic SEO structure (metadata, H1s, alt tags)",
        "Fast performance optimization",
        "Contact form integration",
        "Social media links setup"
      ],
      notIncluded: [
        "Advanced animations",
        "E-commerce functionality",
        "CMS integration",
        "Advanced SEO"
      ]
    },
    {
      name: "Platinum Site",
      price: "$900",
      marketValue: "$4,000–$7,000",
      duration: "one-time",
      description: "Great for growing businesses who want strong branding and advanced functionality",
      icon: Crown,
      accent: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/10",
      popular: false,
      isPromo: false,
      deliveryTime: "10–14 business days",
      revisions: "4 rounds",
      features: [
        "Up to 10 custom pages",
        "4 rounds of revisions",
        "Advanced design features and animations",
        "Enhanced SEO + performance optimization",
        "Contact forms + social integrations",
        "Booking/calendar embed or CTA setup",
        "Custom UI components",
        "Mobile-first design"
      ],
      notIncluded: [
        "E-commerce functionality",
        "CMS integration",
        "Advanced analytics"
      ]
    },
    {
      name: "Premium Site",
      price: "$1,500+",
      marketValue: "$8,000–$15,000+",
      duration: "one-time",
      description: "Ideal for brands that need full digital presence and custom features",
      icon: Rocket,
      accent: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/10",
      popular: false,
      isPromo: false,
      deliveryTime: "14–21 business days",
      revisions: "7 rounds",
      features: [
        "Up to 30 pages",
        "7 rounds of revisions",
        "Fully branded custom UI/UX",
        "Blog or CMS integration",
        "Booking, forms, analytics, and more",
        "E-commerce ready (optional add-on)",
        "Advanced animations & interactions",
        "Performance optimization",
        "SEO-optimized content structure",
        "Social media integration"
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
              {plan.popular && plan.isPromo && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-sm font-semibold shadow-lg animate-pulse">
                    <span className="mr-2">🔥</span>
                    LIMITED TIME PROMO
                  </Badge>
                </div>
              )}
              
              {plan.popular && !plan.isPromo && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    MOST POPULAR
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
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl lg:text-5xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.duration}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Market value: <span className="line-through text-gray-500">{plan.marketValue}</span>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      Delivered in {plan.deliveryTime} • {plan.revisions} of revisions
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className={`w-full mb-8 relative overflow-hidden group bg-gradient-to-r ${plan.accent} hover:scale-105 text-white font-semibold shadow-2xl transition-all duration-500 border-0 h-14`}
                    onClick={() => {
                      // Store plan data in global state and localStorage
                      const planData = {
                        name: plan.name,
                        price: plan.price,
                        features: plan.features,
                        deliveryTime: plan.deliveryTime,
                        revisions: plan.revisions
                      }
                      setSelectedPlan(planData)
                      // Navigate to checkout page using React Router
                      navigate('/checkout')
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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

// Add-ons Section - ENHANCED
const AddOnsSection = () => {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    getCartQuantity, 
    cartTotal, 
    totalItems,
    selectedPlan 
  } = useCart()

  // Dynamic maintenance pricing based on selected plan
  const getMaintenancePrice = () => {
    if (!selectedPlan) return 150
    const planName = selectedPlan.name.toLowerCase()
    if (planName.includes('starter')) return 100
    if (planName.includes('platinum')) return 200
    if (planName.includes('premium')) return 400
    return 150
  }

  const addOns = [
    { 
      id: 'extra-page',
      service: "Extra Page", 
      price: 75, 
      unit: "per page",
      icon: "📄",
      description: "Additional custom pages with full design"
    },
    { 
      id: 'copywriting',
      service: "Copywriting", 
      price: 75, 
      unit: "per page",
      icon: "✍️",
      description: "Professional content creation"
    },
    { 
      id: 'advanced-seo',
      service: "Advanced SEO Setup", 
      price: 100, 
      unit: "",
      icon: "🔍",
      description: "Schema markup, analytics, search optimization"
    },
    { 
      id: 'booking',
      service: "Booking Integration", 
      price: 150, 
      unit: "",
      icon: "📅",
      description: "Calendly, Acuity, or custom booking system"
    },
    { 
      id: 'social-setup',
      service: "Social Media Setup", 
      price: 100, 
      unit: "",
      icon: "📱",
      description: "Profile optimization and content strategy"
    },
    { 
      id: 'hosting',
      service: "Hosting Setup", 
      price: 50, 
      unit: "",
      icon: "☁️",
      description: "Premium hosting configuration and SSL"
    },
    { 
      id: 'domain',
      service: "Domain & DNS Config", 
      price: 25, 
      unit: "",
      icon: "🌐",
      description: "Professional domain setup and management"
    },
    { 
      id: 'extra-revision',
      service: "Extra Revision", 
      price: 75, 
      unit: "each",
      icon: "🔄",
      description: "Additional design iteration beyond package limit"
    },
    { 
      id: 'maintenance',
      service: "Monthly Maintenance", 
      price: getMaintenancePrice(), 
      unit: "per month",
      icon: "🛠️",
      description: `Ongoing updates, security, and content changes (${selectedPlan?.name || 'Standard'} tier pricing)`
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            🧩 Premium 
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Add-Ons</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Elevate your package with professional services designed to maximize your digital impact.
          </p>
          
          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-3 bg-purple-500/20 border border-purple-500/30 rounded-2xl px-6 py-3"
            >
              <ShoppingCart className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">
                {totalItems} items • ${cartTotal} added
              </span>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-3xl">{addon.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors duration-300">
                        ${addon.price}
                      </div>
                      {addon.unit && (
                        <div className="text-sm text-gray-400">{addon.unit}</div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {addon.service}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                    {addon.description}
                  </p>
                  
                  <div className="mt-6">
                    {getCartQuantity(addon.id) > 0 ? (
                      <div className="flex items-center justify-between bg-purple-500/10 rounded-lg p-3 border border-purple-500/30">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(addon.id)}
                          className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20 w-10 h-10 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-white font-bold text-lg">
                          {getCartQuantity(addon.id)} in cart
                        </span>
                        <Button
                          size="sm"
                          onClick={() => addToCart(addon)}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-10 h-10 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        onClick={() => addToCart(addon)}
                        className="w-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Add to Package
                          <Plus className="w-4 h-4" />
                        </span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Payment Terms */}
        <PaymentTermsSection />
      </div>
    </section>
  )
}

// Payment Terms Section Component
const PaymentTermsSection = () => {
  const navigate = useNavigate()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-24"
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <CardContent className="p-12 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-4">
              Flexible Payment Options
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We make it easy to get started with flexible payment terms and secure processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 text-xl">50%</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Upfront Deposit</h4>
                  <p className="text-gray-400 text-sm">Secure your project slot and begin development immediately.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-xl">50%</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Final Payment</h4>
                  <p className="text-gray-400 text-sm">Due upon project completion and your full satisfaction.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Accepted Payment Methods</h4>
                <div className="flex flex-wrap gap-3">
                  {['Zelle', 'CashApp', 'Stripe', 'PayPal'].map((method) => (
                    <div key={method} className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-300 text-sm font-medium">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-200 text-sm flex items-center gap-2">
                  <span className="text-purple-400">🔒</span>
                  All contracts and agreements provided before work begins
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-700/50">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/contact?type=project')}
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
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
const PricingCTA = () => {
  const navigate = useNavigate()
  
  return (
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
            Get a $2,000+ site for just $500. Built with premium tools. Delivered fast. No templates. Just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl transition-all duration-300"
              onClick={() => navigate('/contact?type=consultation')}
            >
              Book Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold transition-all duration-300"
              onClick={() => navigate('/showcase', { state: { scrollToTop: true } })}
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
}

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

  // Ensure the page scrolls to the top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      
      <PricingHero />
      <PricingCards />
      <AddOnsSection />
      <FAQSection />
      <PricingCTA />
      <Footer />
    </div>
  )
}