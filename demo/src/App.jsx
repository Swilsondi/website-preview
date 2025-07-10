import { Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import ErrorBoundary from "@/components/ErrorBoundary"
import { lazy, Suspense, useState, useEffect } from 'react'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const AboutPage = lazy(() => import('./pages/AboutPages'))
const ContactPage = lazy(() => import('./pages/ContactPages'))

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
        <div className="dark min-h-screen bg-gray-900 w-full">
          <SidebarProvider>
            <div className="flex min-h-screen w-full bg-gray-900 sidebar-layout">
              <AppSidebar />
              <SidebarInset className="flex-1 bg-gray-900 min-h-screen">
                <SidebarTrigger className="fixed top-4 left-4 z-50 bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200" />
                <main className="w-full min-h-screen bg-gray-900">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="*" element={<HomePage />} />
                    </Routes>
                  </Suspense>
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App