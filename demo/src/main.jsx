import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ This is the only Router needed
import App from './App';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPages';
import ContactPage from './pages/ContactPages';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import FinalPaymentPage from './pages/FinalPaymentPage';
import ShowcasePage from './pages/PortfolioPage';
import OurJourneyPage from './pages/OurJourneyPage';
import StartProjectPage from './pages/StartProjectPage';
import LearnMorePage from './pages/LearnMorePage';
import InnovationLabPage from './pages/InnovationLabPage';
import ClientSuccessStoriesPage from './pages/ClientSuccessStoriesPage';
import LoginPage from './pages/LoginPage';
import OurStoryPage from './pages/OurStoryPage';
import './index.css';
import './App.css';
import setupErrorLogging from './utils/errorHandler';

// Initialize error logging
setupErrorLogging();

// Ensure browser does not restore scroll position automatically
history.scrollRestoration = "manual";

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('New content is available; please refresh.');
            if (confirm('A new version is available. Refresh now?')) {
              newWorker.postMessage({ action: 'skipWaiting' });
              window.location.reload();
            }
          }
        });
      });
    }).catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

// Performance marks for initial load
if (window.performance && window.performance.mark) {
  window.performance.mark('app-init');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
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
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// Mark when app is mounted
window.addEventListener('DOMContentLoaded', () => {
  if (window.performance && window.performance.mark) {
    window.performance.mark('dom-content-loaded');
    
    // Measure and report time to load
    window.performance.measure('time-to-dom-loaded', 'initial-load-start', 'dom-content-loaded');
    
    // Remove loading spinner when content is ready
    document.querySelector('.loading-container')?.classList.add('fade-out');
  }
});

// Mark when all resources are loaded
window.addEventListener('load', () => {
  if (window.performance && window.performance.mark) {
    window.performance.mark('resources-loaded');
    
    // Measure and report time to fully loaded
    window.performance.measure('time-to-fully-loaded', 'initial-load-start', 'resources-loaded');
  }
  
  // Remove the loading container after a small delay
  setTimeout(() => {
    const loadingEl = document.querySelector('.loading-container');
    if (loadingEl && loadingEl.parentNode) {
      loadingEl.parentNode.removeChild(loadingEl);
    }
  }, 300);
});
