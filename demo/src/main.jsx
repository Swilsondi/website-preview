import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ This is the only Router needed
import App from './App';
import './index.css';
import setupErrorLogging from './utils/errorHandler';

// Initialize error logging
setupErrorLogging();

// Ensure browser does not restore scroll position automatically
history.scrollRestoration = "manual";

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        
        // Check for updates to the service worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          // Track progress
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show notification to user
              const updateNotification = document.createElement('div');
              updateNotification.style.position = 'fixed';
              updateNotification.style.bottom = '0';
              updateNotification.style.left = '0';
              updateNotification.style.right = '0';
              updateNotification.style.backgroundColor = '#4f46e5';
              updateNotification.style.color = 'white';
              updateNotification.style.padding = '1rem';
              updateNotification.style.textAlign = 'center';
              updateNotification.style.zIndex = '9999';
              updateNotification.innerHTML = `
                New version available! 
                <button id="update-app" style="background:#ffffff; color:#4338ca; border:none; padding:0.5rem 1rem; margin-left:1rem; border-radius:0.375rem; cursor:pointer;">
                  Update now
                </button>
              `;
              
              document.body.appendChild(updateNotification);
              
              document.getElementById('update-app').addEventListener('click', () => {
                // Refresh the page to load new version
                window.location.reload();
              });
            }
          });
        });
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error);
      });
  });
  
  // Handle service worker communication
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data && event.data.type === 'CACHE_UPDATED') {
      console.log('New content is available; please refresh.');
    }
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
