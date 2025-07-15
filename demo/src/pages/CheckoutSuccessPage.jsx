import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  Clock,
  FileText,
  Mail,
  CreditCard
} from "lucide-react";
import Footer from "@/components/Footer";
import { handleCheckoutSuccess } from "@/services/stripeService";

export default function CheckoutSuccessPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Process the successful checkout
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('session_id');

    if (sessionId) {
      try {
        // In a real application, you would verify this with your backend
        // For demo purposes, we're using local storage
        const completedOrder = handleCheckoutSuccess(sessionId);
        setOrderDetails(completedOrder);
      } catch (err) {
        console.error('Error processing successful checkout:', err);
        setError('There was an error processing your order. Please contact support.');
      }
    } else {
      setError('Missing session information. Please contact support if your payment was processed.');
    }

    // Always scroll to top on page load
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div 
      className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out ${
        pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Success Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 overflow-hidden pt-[88px]">
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
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative px-4 md:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
            className="mb-8"
          >
            <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-green-500/20 border-green-400 text-green-200 mb-6 backdrop-blur-sm">
              🎉 Payment Successful • Order Confirmed
            </Badge>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/50"
          >
            <CheckCircle className="w-10 h-10 text-green-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Thank You for Your 
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Order</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your payment has been successfully processed. We're excited to start working on your project!
          </motion.p>
        </div>
      </section>

      {/* Order Details Section */}
      <section className="py-16 bg-gray-900">
        <div className="px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
          {error ? (
            <Card className="bg-red-500/20 border-red-500/50 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-200 mb-2">Error</h3>
                <p className="text-red-200">{error}</p>
              </CardContent>
            </Card>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold text-white mb-8 text-center"
              >
                Order Details
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm mb-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Payment Confirmed</h3>
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Package:</strong> {orderDetails?.plan?.name || 'Custom Package'}
                        </p>
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Delivery Timeline:</strong> {orderDetails?.plan?.deliveryTime || '2-4 weeks'}
                        </p>
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Revision Rounds:</strong> {orderDetails?.plan?.revisions || 'As per package'}
                        </p>
                        <div className="mt-6 text-green-400 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>50% Deposit Received</span>
                        </div>
                      </div>
                      <div className="border-t md:border-t-0 md:border-l border-gray-700/50 md:pl-6 pt-6 md:pt-0">
                        <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-gray-300">
                            <Calendar className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                            <span>
                              <strong className="text-white block">Schedule Kickoff Call</strong>
                              Book your strategy session to discuss your vision
                            </span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <FileText className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                            <span>
                              <strong className="text-white block">Complete Project Brief</strong>
                              You'll receive a detailed questionnaire via email
                            </span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span>
                              <strong className="text-white block">Development Begins</strong>
                              We'll start working on your project immediately
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}

          {/* Payment Process Section - Adding new section */}
          <section className="py-16 bg-gray-800">
            <div className="px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-8 text-center"
              >
                Your Payment Process
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {/* Step 1 */}
                <Card className="bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-600/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Step 1: Initial Deposit</h3>
                    <p className="text-green-300 font-semibold mb-1">50% Deposit Paid ✓</p>
                    <p className="text-gray-400 text-sm">
                      Your initial 50% deposit has been received. We're ready to start work on your project.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Step 2 */}
                <Card className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-600/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Step 2: Development</h3>
                    <p className="text-blue-300 font-semibold mb-1">In Progress...</p>
                    <p className="text-gray-400 text-sm">
                      We'll design and develop your project according to the specifications and provide revisions.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Step 3 */}
                <Card className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-600/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Step 3: Final Payment</h3>
                    <p className="text-purple-300 font-semibold mb-1">Coming Soon</p>
                    <p className="text-gray-400 text-sm">
                      Once your project is complete, you'll receive a link to make the final 50% payment and receive all deliverables.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 max-w-2xl mx-auto bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  Final Payment Process
                </h3>
                <p className="text-gray-300 mb-4">
                  When your project is complete, you'll receive an email with a link to review the final work and make your remaining 50% payment. After the final payment is processed, you'll receive all deliverables and your site will be launched.
                </p>
                <div className="text-gray-400 text-sm">
                  <p>If you have any questions about the payment process, please don't hesitate to contact our team.</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Book your kickoff call now to discuss your vision and get started on your project immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://calendly.com/techmotivesupreme/30min', '_blank')}
                  >
                    Schedule Kickoff Call
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Support
                    <Mail className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Update existing FAQ section */}
      <section className="py-16 bg-gray-900">
        <div className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {[
              {
                question: "When will my project start?",
                answer: "We'll begin work on your project immediately after you schedule your kickoff call. This call helps us understand your vision and requirements in detail."
              },
              {
                question: "What happens after the kickoff call?",
                answer: "After the call, we'll send you a detailed project brief to fill out. Once we receive your completed brief, our design team will start creating mockups for your approval."
              },
              {
                question: "When is the remaining payment due?",
                answer: "The remaining 50% payment is due upon project completion, before the final files are delivered and the site goes live. You'll receive a payment link via email when your project is ready for final review."
              },
              {
                question: "How do I make the final payment?",
                answer: "When your project is complete, you'll receive a secure payment link via email. This link will take you to a page where you can review your completed project and make the final payment using credit card or other payment methods."
              },
              {
                question: "Can I make changes to my package?",
                answer: "Yes! You can add services or upgrade your package at any time. Simply contact our support team, and we'll help you adjust your order."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/')}
            >
              Return to Homepage
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}