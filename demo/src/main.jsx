import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ This is the only Router needed
import App from './App';
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
    <App />
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
