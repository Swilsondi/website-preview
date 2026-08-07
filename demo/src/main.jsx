import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import setupErrorLogging from './utils/errorHandler';

// Standalone portfolio demo sites — rendered without the TechMotive-Supreme app chrome
// so they read as independent websites when opened from the portfolio page.
const RestaurantDemoPage = lazy(() => import('./pages/demos/RestaurantDemoPage'));
const LawFirmDemoPage = lazy(() => import('./pages/demos/LawFirmDemoPage'));
const RealEstateDemoPage = lazy(() => import('./pages/demos/RealEstateDemoPage'));

// Initialize error logging
setupErrorLogging();

// Ensure browser does not restore scroll position automatically
history.scrollRestoration = "manual";

// Force dark mode always — site is dark-only
document.documentElement.classList.add('dark');

// Unregister any previously installed service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

// Performance marks for initial load
if (window.performance && window.performance.mark) {
  window.performance.mark('app-init');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/demo-sites/restaurant" element={<RestaurantDemoPage />} />
        <Route path="/demo-sites/law-firm" element={<LawFirmDemoPage />} />
        <Route path="/demo-sites/real-estate" element={<RealEstateDemoPage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Suspense>
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
