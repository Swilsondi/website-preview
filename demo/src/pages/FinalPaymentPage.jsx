import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, FileText, Shield, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { redirectToCheckout } from "@/services/stripeService";

export default function FinalPaymentPage() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const [projectDetails, setProjectDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get project ID from URL query params
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);

    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('project_id');
    
    // In a real app, you would fetch project details from your backend
    // For this demo, we'll use localStorage or hardcoded data
    const completedProjects = JSON.parse(localStorage.getItem('completedProjects') || '[]');
    const project = completedProjects.find(p => p.id === projectId) || {
      id: projectId || 'demo-project',
      name: "Your Custom Website",
      description: "Professional website with custom design and functionality",
      totalAmount: 1000,
      remainingAmount: 500,
      depositPaid: true,
      completionDate: new Date().toISOString()
    };
    
    setProjectDetails(project);
    
    return () => clearTimeout(timer);
  }, [location]);

  // Handle the final payment checkout
  const handleFinalPayment = async () => {
    if (!projectDetails) return;
    
    try {
      setIsProcessing(true);
      setCheckoutError('');
      
      // Create a payment item representing the remaining 50%
      const finalPaymentItem = {
        id: `final-payment-${projectDetails.id}`,
        service: `${projectDetails.name} - Final Payment`,
        description: "Remaining 50% payment to complete your project",
        price: projectDetails.remainingAmount,
        quantity: 1
      };
      
      // Use the same checkout process but with the final payment item
      console.log("Processing final payment:", finalPaymentItem);
      await redirectToCheckout(null, [finalPaymentItem], { projectId: projectDetails.id });
    } catch (error) {
      console.error('Final payment error:', error);
      setCheckoutError('There was an error processing your payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 w-full overflow-x-hidden transition-all duration-700 ease-out mt-20 ${
        pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "backOut" }}
            className="mb-8"
          >
            <Badge variant="outline" className="px-6 py-3 text-sm font-medium bg-blue-500/20 border-blue-400 text-blue-200 mb-6 backdrop-blur-sm">
              🎉 Project Complete • Final Payment
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight"
          >
            Complete Your
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"> Project</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Your project is ready! Complete the remaining 50% payment to receive all final files and launch your site.
          </motion.div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Project Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Project Summary</h2>
                  
                  <div className="space-y-6">
                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-300 mb-3">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Project</span>
                          <span className="text-white font-medium">{projectDetails?.name || "Custom Website"}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Status</span>
                          <span className="flex items-center text-green-400">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Complete
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Completion Date</span>
                          <span className="text-white font-medium">
                            {projectDetails?.completionDate
                              ? new Date(projectDetails.completionDate).toLocaleDateString()
                              : new Date().toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deliverables */}
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-300 mb-3">Deliverables</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Complete website with all pages</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Source code and design files</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">Full deployment and launch</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                          <span className="text-gray-300">30 days of support</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Note */}
                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                      <p className="text-blue-300 text-sm">
                        <FileText className="w-4 h-4 inline-block mr-1" />
                        All deliverables will be provided immediately after your final payment is processed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Payment Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Final Payment</h2>
                  
                  <div className="space-y-6">
                    {/* Payment Breakdown */}
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-300 mb-3">Payment Summary</h3>
                      <div className="space-y-3 border-b border-gray-700 pb-4 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Total Project Cost</span>
                          <span className="text-white font-medium">${projectDetails?.totalAmount || 0}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Initial Deposit (50%)</span>
                          <span className="flex items-center text-green-400">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            ${projectDetails?.totalAmount ? projectDetails.totalAmount / 2 : 0} Paid
                          </span>
                        </div>
                      </div>
                      
                      {/* Final Amount */}
                      <div className="flex justify-between items-center text-xl">
                        <span className="font-semibold text-white">Final Payment (50%)</span>
                        <span className="font-bold text-indigo-300">
                          ${projectDetails?.remainingAmount || (projectDetails?.totalAmount ? projectDetails.totalAmount / 2 : 0)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Payment Button */}
                    <div className="pt-4">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-4 text-lg shadow-2xl transition-all duration-300"
                        onClick={handleFinalPayment}
                        disabled={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : 'Complete Final Payment'}
                        <CreditCard className="ml-3 w-6 h-6" />
                      </Button>
                      
                      {checkoutError && (
                        <p className="text-red-500 mt-3 text-sm">{checkoutError}</p>
                      )}
                      
                      <div className="text-center mt-4">
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                          <Shield className="w-4 h-4" />
                          SSL secured • 256-bit encryption
                        </p>
                      </div>
                    </div>
                    
                    {/* Support Info */}
                    <div className="pt-2 text-center">
                      <p className="text-gray-400 text-sm">
                        Need help? <a href="/contact" className="text-indigo-400 hover:underline">Contact our support team</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}