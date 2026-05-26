import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';
import setupErrorLogging from './utils/errorHandler';

// Initialize error logging
setupErrorLogging();

// Ensure browser does not restore scroll position automatically
history.scrollRestoration = "manual";

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
    <Routes>
      <Route path="/*" element={<App />} />
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
