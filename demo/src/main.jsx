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

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // Only log in development mode
        if (import.meta.env.DEV) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }
        
        // Check for updates to the service worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Only log in development mode
              if (import.meta.env.DEV) {
                console.log('New content is available; please refresh.');
              }
              
              // Show update notification to the user
              const updateNotification = document.createElement('div');
              updateNotification.id = 'update-notification';
              updateNotification.style.position = 'fixed';
              updateNotification.style.bottom = '1rem';
              updateNotification.style.right = '1rem';
              updateNotification.style.backgroundColor = 'rgba(139, 92, 246, 0.9)';
              updateNotification.style.color = 'white';
              updateNotification.style.padding = '1rem';
              updateNotification.style.borderRadius = '0.5rem';
              updateNotification.style.zIndex = '9999';
              updateNotification.style.display = 'flex';
              updateNotification.style.alignItems = 'center';
              updateNotification.style.gap = '0.5rem';
              
              // Create the message
              const message = document.createElement('span');
              message.textContent = 'New version available! ';
              updateNotification.appendChild(message);
              
              // Create the button
              const refreshButton = document.createElement('button');
              refreshButton.textContent = 'Refresh';
              refreshButton.style.backgroundColor = 'white';
              refreshButton.style.color = 'rgb(139, 92, 246)';
              refreshButton.style.border = 'none';
              refreshButton.style.borderRadius = '0.25rem';
              refreshButton.style.padding = '0.5rem 1rem';
              refreshButton.style.cursor = 'pointer';
              refreshButton.style.fontWeight = 'bold';
              
              refreshButton.addEventListener('click', () => {
                // Tell the service worker to skipWaiting
                newWorker.postMessage({ action: 'skipWaiting' });
                
                // Refresh the page to load the new version
                window.location.reload();
              });
              
              updateNotification.appendChild(refreshButton);
              document.body.appendChild(updateNotification);
            }
          });
        });
      })
      .catch((error) => {
        // Only log errors in development mode
        if (import.meta.env.DEV) {
          console.error('Service worker registration failed:', error);
        }
      });
  });
  
  // Handle controller change (when skipWaiting is called)
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
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
