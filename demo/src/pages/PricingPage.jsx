import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  Sparkles,
  Shield,
  Globe,
  Palette,
  TrendingUp,
  Users,
  Coffee,
  MessageCircle,
  Heart,
  Brush
} from "lucide-react"

// Faster, more responsive animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.4, 
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

// Hero Section - Full viewport width
const PricingHero = () => (
  <section className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 overflow-hidden">
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

    <div className="relative flex items-center justify-center min-h-[70vh] px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
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

// Main Pricing Section - Full viewport width
const PricingCards = () => {
  const plans = [
    {
      name: "Creator Launch",
      price: "$1,999",
      period: "one-time",
      description: "Perfect for creators and freelancers ready to go professional",
      icon: Heart,
      accent: "from-pink-500 to-rose-500",
      popular: false,
      features: [
        "5-Page Custom Website",
        "Mobile-First Design",
        "Basic SEO Setup",
        "Contact Forms",
        "1 Month Support",
        "Social Media Integration",
        "Basic Analytics"
      ],
      notIncluded: [
        "E-commerce Functionality",
        "Advanced Animations",
        "Brand Package"
      ]
    },
    {
      name: "Business Pro",
      price: "$3,999",
      period: "one-time",
      description: "The sweet spot for small businesses ready to dominate",
      icon: Crown,
      accent: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "10-Page Custom Website",
        "Advanced Animations",
        "E-commerce Ready",
        "Advanced SEO Package",
        "3 Months Support",
        "Analytics Dashboard",
        "Social Media Strategy",
        "Basic Brand Package",
        "Performance Optimization",
        "Content Management Training"
      ],
      notIncluded: [
        "Video Production",
        "24/7 Priority Support"
      ]
    },
    {
      name: "Brand Domination",
      price: "$6,999",
      period: "one-time",
      description: "For ambitious brands ready to own their market",
      icon: Sparkles,
      accent: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "Unlimited Pages",
        "Custom Development",
        "Advanced E-commerce",
        "Complete SEO Strategy",
        "6 Months Support",
        "Advanced Analytics",
        "Marketing Automation",
        "Complete Brand Suite",
        "Logo & Brand Guidelines",
        "Priority Support",
        "Monthly Strategy Calls",
        "Performance Guarantees"
      ],
      notIncluded: []
    }
  ]

  return (
    <section className="py-24 bg-gray-900 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16">
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative group w-full"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 font-bold shadow-lg">
                    🔥 MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full relative overflow-hidden ${
                plan.popular 
                  ? 'bg-gray-800/80 border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'bg-gray-800/50 border-gray-700'
              } backdrop-blur-sm hover:bg-gray-800/90 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl`}>
                
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="relative z-10 p-6">
                  {/* Header Section */}
                  <div className="text-center pb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${plan.accent} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {plan.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                        {plan.price}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {plan.period}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        size="lg" 
                        className={`w-full text-base py-3 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                            : `bg-gradient-to-r ${plan.accent} hover:opacity-90`
                        } text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Features Section */}
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-white mb-3">What's Included:</h4>
                    
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.3 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <div className="pt-3 border-t border-gray-700">
                        <h4 className="text-xs font-medium text-gray-500 mb-2">Not Included:</h4>
                        {plan.notIncluded.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-500 mb-1">
                            <X className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
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

// FAQ Section - Full viewport width
const FAQSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16">
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Questions? We've Got 
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Answers</span>
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Everything you need to know about our packages and process
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {[
          {
            icon: Coffee,
            question: "How long does it take?",
            answer: "Creator Launch: 1-2 weeks, Business Pro: 2-4 weeks, Brand Domination: 4-8 weeks"
          },
          {
            icon: MessageCircle,
            question: "Do you provide support?",
            answer: "Yes! All packages include support. Brand Domination gets priority access."
          },
          {
            icon: Shield,
            question: "What if I'm not satisfied?",
            answer: "14-day money-back guarantee. We're confident you'll love the results."
          },
          {
            icon: Users,
            question: "Can I upgrade later?",
            answer: "Absolutely! Upgrade anytime and we'll credit your previous investment."
          }
        ].map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-left"
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// CTA Section - Full viewport width
const PricingCTA = () => (
  <section className="py-24 bg-black -mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 2xl:-mx-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
    
    <div className="relative px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to 
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Invest </span>
          in Your Success?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Book a free consultation and let's discuss which package will skyrocket your brand.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-6 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-bold backdrop-blur-sm transition-all duration-300"
            >
              View Our Work
              <Globe className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
        
        <p className="text-gray-500 mt-8">
          Free consultation • No pressure • Get honest recommendations
        </p>
      </motion.div>
    </div>
  </section>
)

// Main Pricing Page Component
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900 w-full overflow-x-hidden">
      <PricingHero />
      <PricingCards />
      <FAQSection />
      <PricingCTA />
    </div>
  )
}