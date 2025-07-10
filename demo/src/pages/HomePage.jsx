import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Palette, 
  Code, 
  Smartphone, 
  Zap, 
  TrendingUp, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Briefcase,
  Users
} from "lucide-react"

// Minimal animation variants for maximum performance
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
}

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
}

// Ultra-simple hero section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 -mx-4 lg:-mx-6">
    {/* Static background - no animations */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-2xl" />
    </div>

    <div className="relative container mx-auto px-4 text-center">
      <motion.div {...fadeIn} className="mb-8">
        <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 mb-8">
          🚀 Premium Web Development & Digital Branding
        </Badge>
      </motion.div>

      <motion.h1 
        {...slideUp}
        className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
      >
        BUILD. LAUNCH. MONETIZE.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
      >
        <span className="text-blue-400 font-semibold">TechMotiveSupreme</span> creates 
        <span className="text-purple-400 font-semibold"> high-performing websites </span> 
        for creators, brands, and entrepreneurs who are ready to 
        <span className="text-green-400 font-semibold"> dominate their market.</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
      >
        <Button 
          size="lg" 
          className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-colors duration-150"
        >
          Book Your Site Now
          <Rocket className="ml-2 w-5 h-5" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-lg px-10 py-4 border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 font-semibold transition-colors duration-150"
        >
          View Our Work
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

      {/* Static stats - no hover animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        {[
          { number: "100+", label: "Sites Launched" },
          { number: "500%", label: "Avg ROI Increase" },
          { number: "48hrs", label: "Launch Time" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

// Simplified services section
const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "High-Converting Websites",
      description: "Lightning-fast, mobile-first websites that turn visitors into customers. Built with modern tech and optimized for conversions.",
      features: ["Conversion Optimized", "Mobile-First", "SEO Ready"],
      accent: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Complete visual identity that makes you unforgettable. From logos to brand guidelines that command attention.",
      features: ["Logo Design", "Brand Guidelines", "Visual Systems"],
      accent: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Launch & Growth Strategy",
      description: "We don't just build and disappear. Get a complete roadmap to launch, scale, and monetize your digital presence.",
      features: ["Launch Strategy", "Growth Tactics", "Revenue Optimization"],
      accent: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            We Don't Just Build.
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> We Launch.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end solutions for creators and entrepreneurs who refuse to settle for average.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors duration-200">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.accent} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-105`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-200 group-hover:text-blue-400">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Static social proof section
const SocialProofSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-12">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-blue-200">
          Join successful creators and brands who chose excellence
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {[
          { number: "150+", label: "Projects Launched", icon: Rocket },
          { number: "98%", label: "Client Satisfaction", icon: Star },
          { number: "$2M+", label: "Revenue Generated", icon: TrendingUp },
          { number: "24/7", label: "Elite Support", icon: Users }
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200 group-hover:bg-white/20">
              <stat.icon className="w-8 h-8 text-blue-300" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-blue-200">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Minimal CTA section
const CTASection = () => (
  <section className="py-24 bg-black">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to 
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Dominate </span>
          Your Market?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Stop settling for average. Book your consultation and let's build something extraordinary together.
        </p>
        
        <Button 
          size="lg" 
          className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold transition-colors duration-200"
        >
          Book Your Consultation Now
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
        
        <p className="text-gray-500 mt-6">
          Free 30-minute strategy session • No commitment required
        </p>
      </div>
    </div>
  </section>
)

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <ServicesSection />
      <SocialProofSection />
      <CTASection />
    </div>
  )
}