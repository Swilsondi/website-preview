import { Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"
import CartProvider from "@/contexts/CartContext"
import CartSidebar from "@/components/CartSidebar"
import { TopNavbar } from '@/components/TopNavbar';
import { lazy, Suspense, useState, useEffect } from 'react'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPages'))
const ContactPage = lazy(() => import('./pages/ContactPages'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('App mounted, starting loading timer')
    const timer = setTimeout(() => {
      console.log('Loading complete, setting isLoading to false')
      setIsLoading(false)
    }, 800)
    return () => {
      console.log('App unmounted, clearing loading timer')
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    console.log('Rendering PageLoader')
    return <PageLoader />
  }

  console.log('Rendering main application')
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <CartProvider>
          <div className="dark min-h-screen bg-gray-900 w-full">
            <SidebarProvider>
              <div className="flex w-full bg-gray-900">
                <AppSidebar />
                <SidebarInset className="flex-1 bg-gray-900 min-h-screen">
                  <TopNavbar />
                  
                  <main className="w-full min-h-screen bg-gray-900 pt-16">
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
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