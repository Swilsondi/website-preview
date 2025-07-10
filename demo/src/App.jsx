import { Routes, Route } from 'react-router-dom'; // ✅ Remove BrowserRouter import
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPages';
import ContactPage from './pages/ContactPages';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* ✅ REMOVED: Router wrapper - it's already in main.jsx */}
      <div className="dark min-h-screen bg-gray-900 w-full">
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-gray-900">
            <AppSidebar />
            <SidebarInset className="flex-1 bg-gray-900 min-h-screen">
              <SidebarTrigger className="fixed top-4 left-4 z-50 bg-gray-800 text-white hover:bg-gray-700" />
              <main className="w-full min-h-screen bg-gray-900">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;