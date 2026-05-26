import { Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ErrorBoundary from "@/components/ErrorBoundary"
import CartProvider from "@/components/CartProvider"
import { lazy, Suspense, useState, useEffect } from 'react'
import TopNavbar from "@/components/TopNavbar"
import ScrollToTop from '@/components/ScrollToTop'
import SidebarToggle from '@/components/SidebarToggle'
import CartSidebar from './components/CartSidebar'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPages')) // Note: Using the correct filename
const ContactPage = lazy(() => import('./pages/ContactPages')) // Using the plural version that seems to be your file
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'))
const FinalPaymentPage = lazy(() => import('./pages/FinalPaymentPage')) // Add import for FinalPaymentPage
const ShowcasePage = lazy(() => import('./pages/PortfolioPage')) // This is your portfolio page for the showcase route
const OurJourneyPage = lazy(() => import('./pages/OurJourneyPage'))
const StartProjectPage = lazy(() => import('./pages/StartProjectPage'))
const LearnMorePage = lazy(() => import('./pages/LearnMorePage'))
const InnovationLabPage = lazy(() => import('./pages/InnovationLabPage'))
const ClientSuccessStoriesPage = lazy(() => import('./pages/ClientSuccessStoriesPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const OurStoryPage = lazy(() => import('./pages/OurStoryPage'))

const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
)

function App() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
    <ErrorBoundary>
      <CartProvider>
        <div className="dark min-h-screen bg-black w-full">
            <SidebarProvider>
              <div className="flex w-full bg-black">
                <AppSidebar />
                <SidebarInset className="flex-1 bg-black min-h-screen">
                  <TopNavbar isOnline={isOnline} />
                  <SidebarToggle />
                  <main className="w-full min-h-screen bg-black">
                    <Suspense fallback={<PageLoader />}>
                      <ErrorBoundary>
                        <ScrollToTop />
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="services" element={<ServicesPage />} />
                          <Route path="pricing" element={<PricingPage />} />
                          <Route path="about" element={<AboutPage />} />
                          <Route path="contact" element={<ContactPage />} />
                          <Route path="checkout" element={<CheckoutPage />} />
                          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
                          <Route path="final-payment" element={<FinalPaymentPage />} />
                          <Route path="portfolio" element={<ShowcasePage />} />
                          <Route path="showcase" element={<ShowcasePage />} />
                          <Route path="our-journey" element={<OurJourneyPage />} />
                          <Route path="start-project" element={<StartProjectPage />} />
                          <Route path="learn-more" element={<LearnMorePage />} />
                          <Route path="innovation-lab" element={<InnovationLabPage />} />
                          <Route path="client-success-stories" element={<ClientSuccessStoriesPage />} />
                          <Route path="login" element={<LoginPage />} />
                          <Route path="our-story" element={<OurStoryPage />} />
                        </Routes>
                      </ErrorBoundary>
                    </Suspense>
                  </main>
                </SidebarInset>
              </div>
            </SidebarProvider>
            <Suspense fallback={null}>
              <CartSidebar />
            </Suspense>
        </div>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;