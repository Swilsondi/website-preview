import { Routes, Route, Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import ErrorBoundary from "@/components/ErrorBoundary"
import CartProvider from "@/components/CartProvider" // Corrected import for CartProvider
import { lazy, Suspense, useState, useEffect } from 'react'
import TopNavbar from "@/components/TopNavbar"
import { PerformanceMonitor } from '@/components/PerformanceMonitor'
import ScrollToTop from '@/components/ScrollToTop'
import ResourceHints from '@/components/ResourceHints'
import { ThemeProvider } from '@/components/theme-provider'
import { LazyMotion } from '@/components/LazyMotion'
import SidebarToggle from '@/components/SidebarToggle'

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
const CartSidebar = lazy(() => import('./components/CartSidebar')) // Corrected import path

// Loading component with better UX
const PageLoader = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
)

// Define preload/prefetch strategies for ResourceHints
const preconnectDomains = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://api.yourdomain.com',
  'https://cdn.yourdomain.com',
  'https://analytics.yourdomain.com',
  'https://js.stripe.com' // Add Stripe domain for preconnect
];

const prefetchRoutes = [
  { from: '/', to: ['/services', '/pricing', '/about'] },
  { from: '/services', to: ['/pricing', '/start-project'] },
  { from: '/pricing', to: ['/checkout', '/contact'] },
  { from: '/about', to: ['/our-journey', '/client-success-stories'] },
  { from: '/start-project*', to: ['/checkout'] }
];

const preloadAssets = [
  { 
    url: '/fonts/main-font.woff2', 
    type: 'font', 
    fontType: 'font/woff2', 
    crossOrigin: true,
    critical: true 
  },
  {
    url: '/images/logo.svg',
    type: 'image',
    critical: true
  },
  {
    url: '/images/hero-image.webp',
    type: 'image',
    routes: ['/'],
    critical: true
  }
];

// Preload critical routes and components for faster initial load
const preloadCriticalRoutes = () => {
  import('./pages/HomePage');
  import('./pages/AboutPages');
  import('./pages/ServicesPage');
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Measure initial page load performance
    const startTime = performance.now();
    
    // Mark initial load start for performance tracking
    if (window.performance && window.performance.mark) {
      window.performance.mark('initial-load-start');
    }

    // Set up network status monitoring
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      
      // Show notification when network status changes
      if (!navigator.onLine) {
        // Create offline notification
        const offlineNotification = document.createElement('div');
        offlineNotification.id = 'offline-notification';
        offlineNotification.style.position = 'fixed';
        offlineNotification.style.bottom = '1rem';
        offlineNotification.style.right = '1rem';
        offlineNotification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        offlineNotification.style.color = 'white';
        offlineNotification.style.padding = '0.75rem 1.5rem';
        offlineNotification.style.borderRadius = '0.5rem';
        offlineNotification.style.zIndex = '9999';
        offlineNotification.textContent = 'You are offline. Some features may be unavailable.';
        document.body.appendChild(offlineNotification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
          const notification = document.getElementById('offline-notification');
          if (notification) {
            document.body.removeChild(notification);
          }
        }, 5000);
      }
    };
    
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    
    // Initialize state
    setIsLoading(false);

    // For production, we'll only log in development mode
    if (import.meta.env.DEV) {
      console.log(`App initial load time: ${(performance.now() - startTime).toFixed(2)}ms`);
    }
    
    // Mark initial load end for performance tracking
    if (window.performance && window.performance.mark) {
      window.performance.mark('initial-load-end');
      window.performance.measure('initial-load', 'initial-load-start', 'initial-load-end');
    }
    
    // Call preloadCriticalRoutes on app initialization
    preloadCriticalRoutes();
    
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="website-theme">
        <CartProvider>
          <PerformanceMonitor>
            <LazyMotion>
              <div className="dark min-h-screen bg-gray-900 w-full">
                <SidebarProvider>
                  <div className="flex w-full bg-gray-900">
                    <AppSidebar />
                    <SidebarInset className="flex-1 bg-gray-900 min-h-screen">
                      <TopNavbar isOnline={isOnline} />
                      {/* Custom sidebar toggle button positioned outside navbar */}
                      <SidebarToggle />
                      <main className="w-full min-h-screen bg-gray-900">
                        <Suspense fallback={<PageLoader />}>
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
                          <ResourceHints 
                            preconnectDomains={preconnectDomains}
                            prefetchRoutes={prefetchRoutes}
                            preloadAssets={preloadAssets}
                          />
                        </Suspense>
                      </main>
                    </SidebarInset>
                  </div>
                </SidebarProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <CartSidebar />
                </Suspense>
              </div>
            </LazyMotion>
          </PerformanceMonitor>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;