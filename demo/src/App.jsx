import { Routes, Route, useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import Home from './pages/HomePage';
import About from './pages/AboutPages';
import Contact from './pages/ContactPages';
import Login from './pages/LoginPage';
import Pricing from './pages/PricingPage';
import Services from './pages/ServicesPage';

const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        {...pageTransition}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="website-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={
            <SidebarProvider>
              <div className="flex min-h-screen">
                <AppSidebar />
                <main className="flex-1 bg-background">
                  {/* Fixed sidebar trigger positioning */}
                  <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/10">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-2"
                    >
                      <SidebarTrigger />
                    </motion.div>
                  </div>
                  {/* Content without extra padding */}
                  <div className="w-full">
                    <AnimatedRoutes />
                  </div>
                </main>
              </div>
            </SidebarProvider>
          } />
        </Routes>
      </div>
    </ThemeProvider>
  );
}