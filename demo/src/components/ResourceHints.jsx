import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ResourceHints component
 * 
 * Manages preload, prefetch, and preconnect tags dynamically to optimize resource loading
 * 
 * @param {Object} props
 * @param {string[]} props.preconnectDomains - Array of domains to preconnect to
 * @param {Array<{from: string, to: string[]}>} props.prefetchRoutes - Routes to prefetch based on current route
 * @param {Array<{url: string, type: string, routes?: string[], critical?: boolean}>} props.preloadAssets - Assets to preload
 */
function ResourceHints({ preconnectDomains = [], prefetchRoutes = [], preloadAssets = [] }) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  
  useEffect(() => {
    // Track resource loading performance
    const resourcePerformance = () => {
      if (!window.performance || !window.performance.getEntriesByType) return;
      
      const resources = window.performance.getEntriesByType('resource');
      resources.forEach(resource => {
        if (resource.initiatorType === 'link' && 
            (resource.name.includes('preload') || resource.name.includes('prefetch'))) {
          console.debug(`Resource ${resource.name} loaded in ${resource.duration.toFixed(2)}ms`);
        }
      });
    };
    
    // Add preconnect links
    const addPreconnectLinks = () => {
      preconnectDomains.forEach(domain => {
        // Check if preconnect link already exists
        const existingLink = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
          
          // Add dns-prefetch as fallback for browsers that don't support preconnect
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = domain;
          document.head.appendChild(dnsPrefetch);
        }
      });
    };
    
    // Add prefetch links for routes
    const addPrefetchRoutes = () => {
      const matchedRoutes = prefetchRoutes.find(route => {
        // Support wildcard matching with *
        if (route.from.includes('*')) {
          const baseRoute = route.from.replace('*', '');
          return currentPath.startsWith(baseRoute);
        }
        return route.from === currentPath;
      });
      
      if (matchedRoutes) {
        matchedRoutes.to.forEach(route => {
          // Don't prefetch the current route
          if (route === currentPath) return;
          
          // Check if prefetch link already exists
          const existingLink = document.querySelector(`link[rel="prefetch"][href="${route}"]`);
          if (!existingLink) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'document';
            link.href = route;
            document.head.appendChild(link);
          }
        });
      }
    };
    
    // Add preload links for assets
    const addPreloadAssets = () => {
      preloadAssets.forEach(asset => {
        // Skip if asset is route-specific and not for current route
        if (asset.routes && !asset.routes.includes(currentPath) && !asset.critical) {
          return;
        }
        
        // Check if preload link already exists
        const existingLink = document.querySelector(`link[rel="preload"][href="${asset.url}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = asset.url;
          
          switch (asset.type) {
            case 'font':
              link.as = 'font';
              link.type = asset.fontType || 'font/woff2';
              if (asset.crossOrigin) {
                link.crossOrigin = 'anonymous';
              }
              break;
            case 'image':
              link.as = 'image';
              break;
            case 'script':
              link.as = 'script';
              break;
            case 'style':
              link.as = 'style';
              break;
            case 'fetch':
              link.as = 'fetch';
              break;
            default:
              // Default to fetch
              link.as = 'fetch';
          }
          
          document.head.appendChild(link);
        }
      });
    };
    
    // Clean up old prefetch links
    const cleanupPrefetchLinks = () => {
      const prefetchLinks = document.querySelectorAll('link[rel="prefetch"]');
      prefetchLinks.forEach(link => {
        // Remove prefetch links for assets that don't match the current route
        const matchedAsset = preloadAssets.find(asset => 
          asset.url === link.href && 
          asset.routes && 
          !asset.routes.includes(currentPath) && 
          !asset.critical
        );
        
        if (matchedAsset) {
          document.head.removeChild(link);
        }
      });
    };
    
    // Execute resource hint strategies
    addPreconnectLinks();
    addPrefetchRoutes();
    addPreloadAssets();
    cleanupPrefetchLinks();
    
    // Measure performance after a short delay
    setTimeout(resourcePerformance, 2000);
    
    // Cleanup function to remove unnecessary prefetch links when route changes
    return () => {
      cleanupPrefetchLinks();
    };
  }, [currentPath, preconnectDomains, prefetchRoutes, preloadAssets]);
  
  // This component doesn't render anything visible
  return null;
}

export default ResourceHints;