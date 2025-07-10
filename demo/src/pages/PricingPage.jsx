import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const PricingCard = ({ plan, price, period, features, buttonText, isPopular = false, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.2 }
      }}
    >
      <Card className={`relative w-full max-w-sm p-6 transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-primary shadow-lg scale-105' : 'hover:border-primary/50'}`}>
        {isPopular && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            Most Popular
          </motion.div>
        )}
        <CardContent className="p-0">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="mb-4 text-xl font-medium text-gray-600 dark:text-gray-300"
          >
            {plan}
          </motion.h3>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
            className="flex items-baseline text-gray-900 dark:text-white mb-7"
          >
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
            <span className="ml-1 text-xl font-normal text-gray-600 dark:text-gray-400">/{period}</span>
          </motion.div>

          <ul className="space-y-5 mb-7">
            {features.map((feature, featureIndex) => (
              <motion.li 
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.2 + 0.5 + (featureIndex * 0.1),
                  duration: 0.3
                }}
                className={`flex items-center ${feature.included ? '' : 'line-through decoration-gray-500'}`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: index * 0.2 + 0.6 + (featureIndex * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {feature.included ? (
                    <Check className="shrink-0 w-4 h-4 text-blue-600 dark:text-blue-400 mr-3" />
                  ) : (
                    <X className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500 mr-3" />
                  )}
                </motion.div>
                <span className={`text-base font-normal leading-tight ${feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-500'}`}>
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 1.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className={`w-full transition-all duration-200 hover:shadow-lg font-medium ${
                isPopular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600'
              }`}
            >
              {buttonText}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Pricing() {
  const pricingPlans = [
    {
      plan: "Basic Plan",
      price: "29",
      period: "month",
      buttonText: "Get Started",
      features: [
        { text: "1 team member", included: true },
        { text: "10GB Cloud storage", included: true },
        { text: "Email support", included: true },
        { text: "Integration help", included: false },
        { text: "API Access", included: false },
        { text: "Complete documentation", included: false },
        { text: "24×7 phone support", included: false }
      ]
    },
    {
      plan: "Standard Plan",
      price: "49",
      period: "month",
      buttonText: "Choose Plan",
      isPopular: true,
      features: [
        { text: "2 team members", included: true },
        { text: "20GB Cloud storage", included: true },
        { text: "Integration help", included: true },
        { text: "Email support", included: true },
        { text: "API Access", included: false },
        { text: "Complete documentation", included: false },
        { text: "24×7 phone support", included: false }
      ]
    },
    {
      plan: "Premium Plan",
      price: "99",
      period: "month",
      buttonText: "Go Premium",
      features: [
        { text: "5 team members", included: true },
        { text: "100GB Cloud storage", included: true },
        { text: "Integration help", included: true },
        { text: "API Access", included: true },
        { text: "Complete documentation", included: true },
        { text: "24×7 phone & email support", included: true },
        { text: "Priority support", included: true }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Choose Your Plan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Select the perfect plan for your business needs
        </motion.p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch"
      >
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} index={index} />
        ))}
      </motion.div>
    </div>
  )
}