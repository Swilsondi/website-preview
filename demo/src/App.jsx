import { Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Home from './pages/HomePage';
import About from './pages/AboutPages';
import Contact from './pages/ContactPages';
import Login from './pages/LoginPage';
import Pricing from './pages/PricingPage';
import Services from './pages/ServicesPage';

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </SidebarProvider>
  );
}