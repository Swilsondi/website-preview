import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/useCart"
import { 
  ArrowRight,
  CheckCircle,
  CreditCard,
  Plus,
  Minus,
  Calendar,
  Clock,
  Shield,
  Zap,
  Crown,
  Rocket
} from "lucide-react"
import { useEffect, useState } from "react"
import Footer from "@/components/Footer"

// Checkout Hero Section
const CheckoutHero = () => (
  <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
    <div className="absolute inset-0">
      <div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      />
    </div>

    <div className="relative text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
      <div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
        className="mb-8"
      >
        <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-green-500/20 border-green-400 text-green-200 mb-6 backdrop-blur-sm">
          🔒 Secure Checkout • SSL Protected
        </Badge>
      </div>

      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight"
      >
        Complete Your
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Order</span>
      </div>

      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        You're just a few steps away from transforming your digital presence. Secure your spot with a 50% deposit.
      </div>
    </div>
  </section>
)

// Pre-Checkout Questions
const PreCheckoutQuestions = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    goals: ''
  });

  const handleInputChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Tell us about your project</h2>

      <label className="block text-gray-300 mb-2">What type of project are you planning?</label>
      <select
        name="projectType"
        value={answers.projectType}
        onChange={(e) => handleInputChange('projectType', e.target.value)}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 mb-4"
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

      <label className="block text-gray-300 mb-2">What is your budget?</label>
      <select
        name="budget"
        value={answers.budget}
        onChange={(e) => handleInputChange('budget', e.target.value)}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 mb-4"
        required
      >
        <option value="">Select a budget range</option>
        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
        <option value="$20,000 - $50,000">$20,000 - $50,000</option>
        <option value="$50,000+">$50,000+</option>
      </select>

      <label className="block text-gray-300 mb-2">What is your timeline?</label>
      <input
        type="text"
        name="timeline"
        value={answers.timeline}
        onChange={(e) => handleInputChange('timeline', e.target.value)}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 mb-4"
        placeholder="e.g., 3 months"
        required
      />

      <label className="block text-gray-300 mb-2">What are your main goals?</label>
      <textarea
        name="goals"
        value={answers.goals}
        onChange={(e) => handleInputChange('goals', e.target.value)}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none mb-4"
        placeholder="e.g., Increase sales, improve user experience"
        rows={4}
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Continue to Checkout
      </button>
    </form>
  );
};

// Cart and Add-ons Section
const CartSection = ({ selectedPlan, cart }) => {
  const { addToCart, removeFromCart, cartTotal, getCartQuantity } = useCart()
  const addOns = [
    { 
      id: 'extra-page',
      service: "Extra Page", 
      price: 75, 
      icon: "📄",
      description: "Additional custom pages with full design"
    },
    { 
      id: 'copywriting',
      service: "Professional Copywriting", 
      price: 75, 
      icon: "✍️",
      description: "Expert content creation per page"
    },
    { 
      id: 'advanced-seo',
      service: "Advanced SEO Setup", 
      price: 100, 
      icon: "🔍",
      description: "Schema markup, analytics, search optimization"
    },
    { 
      id: 'booking',
      service: "Booking Integration", 
      price: 150, 
      icon: "📅",
      description: "Calendly, Acuity, or custom booking system"
    },
    { 
      id: 'social-setup',
      service: "Social Media Setup", 
      price: 100, 
      icon: "📱",
      description: "Profile optimization and content strategy"
    },
    { 
      id: 'hosting',
      service: "Premium Hosting Setup", 
      price: 50, 
      icon: "☁️",
      description: "Premium hosting configuration and SSL"
    },
    { 
      id: 'rush',
      service: "Rush Delivery", 
      price: 200, 
      icon: "⚡",
      description: "Priority development - 50% faster delivery"
    }
  ]

  const basePrice = parseInt(selectedPlan.price.replace('$', '').replace('+', ''))
  const addOnsTotal = cartTotal
  const subtotal = basePrice + addOnsTotal
  const deposit = Math.ceil(subtotal * 0.5)

  return (
    <section className="py-20 bg-gray-800">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
            Customize Your 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Package</span>
          </h2>
          <p className="text-xl text-gray-400">
            Add premium services to maximize your website's impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add-ons Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{addon.icon}</div>
                        <div className="text-right">
                          <div className="text-xl font-black text-white">${addon.price}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">
                        {addon.service}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-6">
                        {addon.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {getCartQuantity(addon.id) > 0 ? (
                          <div className="flex items-center gap-3 w-full">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(addon.id)}
                              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20 w-10 h-10 p-0"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-white font-semibold flex-1 text-center">
                              {getCartQuantity(addon.id)} added
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
                            className="w-full bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            Add to Package
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
                
                {/* Selected Plan */}
                <div className="border-b border-gray-700 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    {selectedPlan.name.includes('Starter') && <Zap className="w-6 h-6 text-green-400" />}
                    {selectedPlan.name.includes('Platinum') && <Crown className="w-6 h-6 text-purple-400" />}
                    {selectedPlan.name.includes('Premium') && <Rocket className="w-6 h-6 text-blue-400" />}
                    <span className="text-white font-semibold">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base Package</span>
                    <span className="text-white font-semibold">${basePrice}</span>
                  </div>
                </div>

                {/* Add-ons */}
                {cart.length > 0 && (
                  <div className="border-b border-gray-700 pb-6 mb-6">
                    <h4 className="text-white font-semibold mb-3">Add-ons</h4>
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">
                          {item.service} {item.quantity > 1 && `(×${item.quantity})`}
                        </span>
                        <span className="text-white">${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-purple-400">50% Deposit (Today)</span>
                    <span className="text-purple-400">${deposit}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Remaining (On Completion)</span>
                    <span>${subtotal - deposit}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 text-lg shadow-2xl transition-all duration-300"
                    onClick={() => {
                      // Store order data and redirect to payment
                      const orderData = {
                        plan: selectedPlan,
                        addOns: cart,
                        totals: { subtotal, deposit, remaining: subtotal - deposit }
                      }
                      localStorage.setItem('orderData', JSON.stringify(orderData))
                      
                      // Replace with your actual Stripe checkout URL
                      alert(`Proceeding to payment for $${deposit} deposit. In production, this would redirect to Stripe.`)
                      // window.location.href = 'your-stripe-checkout-url'
                    }}
                  >
                    Secure Checkout - ${deposit}
                    <CreditCard className="ml-3 w-6 h-6" />
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4" />
                      SSL secured • 256-bit encryption
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Calendly Integration Section
const CalendlySection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
    <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
          Schedule Your 
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Kickoff Call</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          After payment, book your 30-minute strategy call to discuss your vision and get started immediately.
        </p>
        
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-semibold">30 Minutes</p>
              <p className="text-gray-400 text-sm">Strategy Session</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Project Kickoff</p>
              <p className="text-gray-400 text-sm">Same Day Start</p>
            </div>
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-3"
            onClick={() => {
              window.open('https://calendly.com/techmotivesupreme/30min', '_blank')
            }}
          >
            Book Your Call Now
            <Calendar className="ml-3 w-5 h-5" />
          </Button>
        </Card>
      </div>
    </div>
  </section>
)

// Main Checkout Page Component
export default function CheckoutPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState('questions'); // questions, checkout
  const { selectedPlan, cart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Ensure the page scrolls to the top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuestionsComplete = (answers) => {
    localStorage.setItem('projectAnswers', JSON.stringify(answers));
    setCurrentStep('checkout');
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gray-900 w-full px-4 md:px-6 lg:px-8 overflow-x-hidden transition-all duration-700 ease-out ${
        pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
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
        html {
          scrollbar-width: thin;
          scrollbar-color: #6366f1 transparent;
        }
      ` }} />

      <CheckoutHero />

      {currentStep === 'questions' ? (
        <PreCheckoutQuestions onComplete={handleQuestionsComplete} />
      ) : (
        <>
          <CartSection selectedPlan={selectedPlan} cart={cart} />
          <CalendlySection />
        </>
      )}

      <Footer />
    </div>
  );
}
