import { Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"
import { CartProvider } from "@/hooks/useCart" // ✅ FIXED IMPORT
import { lazy, Suspense, useState, useEffect } from 'react'
import TopNavbar from "@/components/TopNavbar"; // Import the TopNavbar component
import CartSidebar from '@/components/CartSidebar';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPages.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPages.jsx'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'))
const ShowcasePage = lazy(() => import('./pages/PortfolioPage.jsx'))
const OurJourneyPage = lazy(() => import('./pages/OurJourneyPage.jsx'))
const StartProjectPage = lazy(() => import('./pages/StartProjectPage.jsx'))
const LearnMorePage = lazy(() => import('./pages/LearnMorePage.jsx'))
const InnovationLabPage = lazy(() => import('./pages/InnovationLabPage.jsx'))
const ClientSuccessStoriesPage = lazy(() => import('./pages/ClientSuccessStoriesPage.jsx'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider> {/* ✅ WRAP WITH CART PROVIDER */}
          <div className="dark min-h-screen bg-gray-900 w-full">
            <SidebarProvider>
              <div className="flex w-full bg-gray-900">
                <AppSidebar />
                <SidebarInset className="flex-1 bg-gray-900 min-h-screen">
                  <TopNavbar /> {/* Add the TopNavbar here */}
                  <SidebarTrigger className="fixed top-4 left-[calc(var(--sidebar-width)+1rem)] z-50 bg-gray-800 text-white hover:bg-gray-700 shadow-lg border border-gray-600 transition-all duration-200 group-data-[state=collapsed]/sidebar-wrapper:left-4" />
                  
                  <main className="w-full min-h-screen bg-gray-900">
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/showcase" element={<ShowcasePage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/our-journey" element={<OurJourneyPage />} />
                        <Route path="/start-project" element={<StartProjectPage />} />
                        <Route path="/learn-more" element={<LearnMorePage />} />
                        <Route path="/innovation-lab" element={<InnovationLabPage />} />
                        <Route path="/client-success-stories" element={<ClientSuccessStoriesPage />} />
                        <Route path="*" element={<HomePage />} />
                      </Routes>
                    </Suspense>
                  </main>
                </SidebarInset>
              </div>
            </SidebarProvider>
            <CartSidebar />
          </div>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App