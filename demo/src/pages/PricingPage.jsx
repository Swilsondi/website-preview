import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  X,
  Zap,
  Crown,
  Rocket,
  ArrowRight,
  CheckCircle,
  Heart,
  Globe,
  Award,
  Plus,
  Minus,
  ShoppingCart
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from '@/components/CartProvider';
import Footer from "@/components/Footer"
import { Helmet } from "react-helmet"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } }
}

const PricingHero = () => (
  <section className="relative bg-black overflow-hidden pt-16 border-b border-white/[0.06]">
    <div className="min-h-[calc(70vh-4rem)] flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="inline-block border border-white/20 rounded-full px-5 py-2 text-base text-neutral-400 mb-8">
            Launch promo — $2,000+ site starting at <span className="text-white font-semibold">$850</span> · Available until Aug 15, 2025
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
        >
          Choose Your Package
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-neutral-400 max-w-xl mx-auto text-2xl lg:text-3xl leading-relaxed"
        >
          From solo creators to growing brands. Every package is built to scale with your vision.
        </motion.p>
      </div>
    </div>
  </section>
)

const PricingCards = () => {
  const navigate = useNavigate()
  const { setSelectedPlan } = useCart()

  const plans = [
    {
      name: "Starter Site",
      price: "$850",
      marketValue: "$2,000+",
      duration: "one-time",
      description: "Perfect for small businesses and creators starting their digital presence",
      icon: Zap,
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
      price: "$1500",
      marketValue: "$4,000–$7,000",
      duration: "one-time",
      description: "Great for growing businesses who want strong branding and advanced functionality",
      icon: Crown,
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
      price: "$3,000+",
      marketValue: "$8,000–$15,000+",
      duration: "one-time",
      description: "Ideal for brands that need full digital presence and custom features",
      icon: Rocket,
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
    <section className="py-24 bg-black">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Transparent pricing.
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl">
            All plans include everything you need to succeed.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {plan.isPromo && (
                <div className="absolute -top-3 left-6 z-20">
                  <div className="bg-white text-black px-4 py-1 text-xs font-bold rounded-full tracking-wide">
                    PROMO
                  </div>
                </div>
              )}

              <Card className={`h-full bg-neutral-900 border transition-colors duration-300 rounded-xl ${plan.isPromo ? 'border-white/30 hover:border-white/50' : 'border-neutral-800 hover:border-neutral-600'}`}>
                <CardContent className="p-8 flex flex-col">
                  <div className="w-10 h-10 border border-neutral-700 rounded-lg flex items-center justify-center mb-6">
                    <plan.icon className="w-5 h-5 text-neutral-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-neutral-500 text-base mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-neutral-500 text-sm">
                        {plan.duration}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600">
                      Market value: <span className="line-through">{plan.marketValue}</span>
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {plan.deliveryTime} · {plan.revisions} of revisions
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full mb-8 bg-white text-black hover:bg-neutral-100 font-semibold h-12 border-0 rounded-lg transition-colors duration-200"
                    onClick={() => {
                      const planData = {
                        name: plan.name,
                        price: plan.price.includes("+") ? plan.price.replace("+", "") : plan.price,
                        numericPrice: parseInt(plan.price.replace(/[^0-9]/g, "")),
                        features: plan.features,
                        deliveryTime: plan.deliveryTime,
                        revisions: plan.revisions
                      }
                      setSelectedPlan(planData)
                      setTimeout(() => navigate('/checkout?step=questions'), 100)
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">Included</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-neutral-400 text-base">
                          <div className="w-1 h-1 rounded-full bg-neutral-500 mr-3 flex-shrink-0 mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-neutral-600 uppercase tracking-widest pt-3">Not included</p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start text-neutral-700 text-base">
                              <div className="w-1 h-1 rounded-full bg-neutral-700 mr-3 flex-shrink-0 mt-2" />
                              {feature}
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

  const getMaintenancePrice = () => {
    if (!selectedPlan) return 150
    const planName = selectedPlan.name.toLowerCase()
    if (planName.includes('starter')) return 100
    if (planName.includes('platinum')) return 200
    if (planName.includes('premium')) return 400
    return 150
  }

  const addOns = [
    { id: 'extra-page', service: "Extra Page", price: 75, unit: "per page", icon: "📄", description: "Additional custom pages with full design" },
    { id: 'copywriting', service: "Copywriting", price: 75, unit: "per page", icon: "✍️", description: "Professional content creation" },
    { id: 'advanced-seo', service: "Advanced SEO Setup", price: 100, unit: "", icon: "🔍", description: "Schema markup, analytics, search optimization" },
    { id: 'booking', service: "Booking Integration", price: 150, unit: "", icon: "📅", description: "Calendly, Acuity, or custom booking system" },
    { id: 'social-setup', service: "Social Media Setup", price: 100, unit: "", icon: "📱", description: "Profile optimization and content strategy" },
    { id: 'hosting', service: "Hosting Setup", price: 50, unit: "", icon: "☁️", description: "Premium hosting configuration and SSL" },
    { id: 'domain', service: "Domain & DNS Config", price: 25, unit: "", icon: "🌐", description: "Professional domain setup and management" },
    { id: 'extra-revision', service: "Extra Revision", price: 75, unit: "each", icon: "🔄", description: "Additional design iteration beyond package limit" },
    { id: 'maintenance', service: "Monthly Maintenance", price: getMaintenancePrice(), unit: "per month", icon: "🛠️", description: `Ongoing updates, security, and content changes (${selectedPlan?.name || 'Standard'} tier pricing)` }
  ]

  return (
    <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Add-ons
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl">
            Extend your package with professional services.
          </p>

          {cart.length > 0 && (
            <div className="mt-6 inline-flex items-center gap-2 border border-white/20 rounded-lg px-4 py-2">
              <ShoppingCart className="w-4 h-4 text-neutral-400" />
              <span className="text-white text-sm font-medium">
                {totalItems} items · ${cartTotal} added
              </span>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((addon) => (
            <Card key={addon.id} className="bg-neutral-900 border-neutral-800 hover:border-neutral-600 transition-colors duration-300 rounded-xl">
              <CardContent className="p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xl">{addon.icon}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">${addon.price}</div>
                    {addon.unit && <div className="text-xs text-neutral-500">{addon.unit}</div>}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white mb-2">{addon.service}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-5 flex-1">{addon.description}</p>

                {getCartQuantity(addon.id) > 0 ? (
                  <div className="flex items-center justify-between border border-neutral-700 rounded-lg p-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(addon.id)}
                      className="text-neutral-400 hover:text-white hover:bg-neutral-800 w-8 h-8 p-0 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-white text-sm font-medium">{getCartQuantity(addon.id)}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => addToCart(addon)}
                      className="text-neutral-400 hover:text-white hover:bg-neutral-800 w-8 h-8 p-0 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => addToCart(addon)}
                    variant="outline"
                    className="w-full border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white text-xs h-9 rounded-lg transition-colors duration-200 bg-transparent"
                  >
                    Add to Package
                    <Plus className="ml-2 w-3 h-3" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <PaymentTermsSection />
      </div>
    </section>
  )
}

const PaymentTermsSection = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-20 border border-white/[0.08] rounded-xl p-10 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-3">Flexible Payment Options</h3>
      <p className="text-neutral-500 text-base mb-8">We make it easy to get started with secure, flexible payment terms.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="text-sm font-bold text-white border border-neutral-700 rounded-lg px-3 py-2 flex-shrink-0">50%</div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Upfront Deposit</p>
              <p className="text-neutral-500 text-xs">Secure your slot and begin development immediately.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-sm font-bold text-white border border-neutral-700 rounded-lg px-3 py-2 flex-shrink-0">50%</div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Final Payment</p>
              <p className="text-neutral-500 text-xs">Due upon project completion and your satisfaction.</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">Accepted Methods</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Zelle', 'CashApp', 'Stripe', 'PayPal'].map((method) => (
              <div key={method} className="px-3 py-1 border border-neutral-700 rounded-lg text-neutral-400 text-xs font-medium">
                {method}
              </div>
            ))}
          </div>
          <p className="text-neutral-600 text-xs">
            All contracts provided before work begins.
          </p>
        </div>
      </div>

      <Button
        className="bg-white text-black hover:bg-neutral-100 font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
        onClick={() => navigate('/contact?type=project')}
      >
        Start Your Project
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  )
}

const FAQSection = () => (
  <section className="py-24 bg-black border-t border-white/[0.06]">
    <div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Common questions.
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl">
          Everything you need to know before getting started.
        </p>
      </div>

      <div className="space-y-px bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
        {[
          {
            question: "What's included in the timeline?",
            answer: "Most projects are completed within 2–4 weeks from start to finish. Enterprise projects may take 4–8 weeks depending on complexity."
          },
          {
            question: "Do you offer payment plans?",
            answer: "Yes. We offer 50% upfront and 50% on completion, or monthly payment plans for Enterprise packages."
          },
          {
            question: "What happens after launch?",
            answer: "You'll receive full training, documentation, and our support package. We're here to help you succeed long after launch."
          },
          {
            question: "Can I upgrade my package later?",
            answer: "Absolutely. You can upgrade at any time and we'll credit your previous investment toward the higher package."
          }
        ].map((faq, index, arr) => (
          <div key={index} className={`p-6 ${index < arr.length - 1 ? 'border-b border-neutral-800' : ''}`}>
            <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
            <p className="text-neutral-500 text-base leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const PricingCTA = () => {
  const navigate = useNavigate()
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
      <div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to transform your business?
        </h2>

        <p className="text-neutral-400 mb-10 text-lg md:text-xl leading-relaxed">
          Get a $2,000+ site starting at $850. Built with premium tools. Delivered fast. No templates.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            size="lg"
            className="text-base px-10 py-4 bg-white text-black hover:bg-neutral-100 font-semibold rounded-lg transition-colors duration-200"
            onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-10 py-4 border border-neutral-700 text-neutral-300 hover:bg-white/5 hover:border-neutral-500 font-semibold rounded-lg transition-colors duration-200 bg-transparent"
            onClick={() => navigate('/showcase', { state: { scrollToTop: true } })}
          >
            View Our Work
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-neutral-600 text-xs">
          {["100% Satisfaction Guarantee", "Lightning Fast Delivery", "Award-Winning Design"].map((item) => (
            <span key={item} className="text-sm">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Helmet>
        <link rel="canonical" href="https://www.techmotivesupreme.com/pricing" />
        <meta property="og:url" content="https://www.techmotivesupreme.com/pricing" />
        <meta property="og:image" content="https://www.techmotivesupreme.com/dark-logo.png" />
        <meta name="twitter:image" content="https://www.techmotivesupreme.com/dark-logo.png" />
      </Helmet>
      <PricingHero />
      <PricingCards />
      <AddOnsSection />
      <FAQSection />
      <PricingCTA />
      <Footer />
    </div>
  )
}
