import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Safe router hook that doesn't crash outside Router context
function useSafeLocation() {
  try {
    return useLocation();
  } catch (error) {
    // Return a default location object if useLocation fails (outside Router context)
    return { pathname: window.location.pathname };
  }
}

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
  const location = useSafeLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [observedAssets, setObservedAssets] = useState(new Set());
  
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  
  // This useEffect verifies which assets are actually used on the page
  useEffect(() => {
    // Create a mutation observer to monitor DOM changes
    const observer = new MutationObserver((mutations) => {
      // Check for new assets that have been loaded
      const images = document.querySelectorAll('img');
      const backgroundImages = [];
      
      // Get all elements that might have background images
      const elementsWithStyle = document.querySelectorAll('[style*="background"]');
      elementsWithStyle.forEach(el => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none') {
          // Extract URL from the background-image style
          const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (match && match[1]) {
            backgroundImages.push(match[1]);
          }
        }
      });
      
      // Add all observed assets to state
      const newObservedAssets = new Set(observedAssets);
      
      // Add image src values
      images.forEach(img => {
        if (img.src) newObservedAssets.add(img.src);
      });
      
      // Add background image URLs
      backgroundImages.forEach(url => {
        newObservedAssets.add(url);
      });
      
      // Check for fonts by scanning stylesheet rules
      try {
        for (let i = 0; i < document.styleSheets.length; i++) {
          const styleSheet = document.styleSheets[i];
          try {
            // This may throw if CORS prevents access
            const rules = styleSheet.cssRules || styleSheet.rules;
            for (let j = 0; j < rules.length; j++) {
              if (rules[j].type === CSSRule.FONT_FACE_RULE) {
                const fontRule = rules[j];
                const fontSrc = fontRule.style.getPropertyValue('src');
                if (fontSrc) {
                  const fontUrlMatches = fontSrc.match(/url\(['"]?([^'"]+)['"]?\)/g);
                  if (fontUrlMatches) {
                    fontUrlMatches.forEach(fontUrl => {
                      const match = fontUrl.match(/url\(['"]?([^'"]+)['"]?\)/);
                      if (match && match[1]) {
                        newObservedAssets.add(match[1]);
                      }
                    });
                  }
                }
              }
            }
          } catch (e) {
            // Silently fail for CORS errors
          }
        }
      } catch (e) {
        // Silently fail for general errors in font detection
      }
      
      if (newObservedAssets.size !== observedAssets.size) {
        setObservedAssets(newObservedAssets);
      }
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'style']
    });
    
    return () => observer.disconnect();
  }, [observedAssets]);
  
  useEffect(() => {
    // Track resource loading performance
    const resourcePerformance = () => {
      if (!window.performance || !window.performance.getEntriesByType) return;
      
      const resources = window.performance.getEntriesByType('resource');
      const preloadedResources = resources.filter(resource => 
        resource.initiatorType === 'link' && 
        (resource.name.includes('preload') || resource.name.includes('prefetch'))
      );
      
      // Only log in development mode
      if (import.meta.env.DEV && preloadedResources.length > 0) {
        console.debug(`${preloadedResources.length} preloaded resources loaded`);
      }
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
    
    // IMPROVED: Add preload links for assets - only for assets that are actually used
    const addPreloadAssets = () => {
      preloadAssets.forEach(asset => {
        // Skip if asset is route-specific and not for current route
        if (asset.routes && !asset.routes.includes(currentPath) && !asset.critical) {
          return;
        }
        
        // For images and other assets, use our observedAssets to check if they're used
        if (asset.type === 'image' || asset.type === 'fetch') {
          // Get the asset base name to compare with observed assets
          const assetUrl = new URL(asset.url, window.location.origin);
          const absoluteUrl = assetUrl.href;
          
          // Check if this asset or a version of it is actually used on the page
          let isAssetUsed = false;
          
          // Check all observed assets to see if this asset is or will be used
          observedAssets.forEach(observedAsset => {
            // Get the observed asset filename
            const observedUrl = new URL(observedAsset, window.location.origin);
            const observedFilename = observedUrl.pathname.split('/').pop();
            const assetFilename = assetUrl.pathname.split('/').pop();
            
            // If the observed asset filename matches our asset filename, it's used
            if (observedFilename === assetFilename || 
                observedAsset.includes(assetFilename) || 
                absoluteUrl === observedAsset) {
              isAssetUsed = true;
            }
            
            // For responsive images, check if the base filename (without size suffix) matches
            // Example: hero-image-small.webp and hero-image.webp
            const baseObservedName = observedFilename.replace(/-\d+x\d+\./, '.');
            const baseAssetName = assetFilename.replace(/-\d+x\d+\./, '.');
            if (baseObservedName === baseAssetName) {
              isAssetUsed = true;
            }
          });
          
          if (!isAssetUsed && !asset.critical) {
            // Don't preload assets that aren't used on the page
            return;
          }
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
              // Add fetchpriority for important images
              if (asset.critical) {
                link.setAttribute('fetchpriority', 'high');
              }
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
          link.parentNode.removeChild(link);
        }
      });
    };
    
    // Clean up unused preloaded resources
    const cleanupUnusedPreloads = () => {
      setTimeout(() => {
        const preloadLinks = document.querySelectorAll('link[rel="preload"]');
        preloadLinks.forEach(link => {
          // Check if the resource was actually used
          if (window.performance && window.performance.getEntriesByName) {
            const resources = window.performance.getEntriesByName(link.href);
            
            // If resource exists but wasn't initiated by anything other than link preload after 5 seconds
            if (resources.length === 1 && resources[0].initiatorType === 'link') {
              // Consider removing only non-critical preloads that weren't used
              const isCritical = preloadAssets.some(asset => 
                asset.url === link.href && asset.critical === true
              );
              
              if (!isCritical) {
                if (import.meta.env.DEV) {
                  console.debug(`Removing unused preload: ${link.href}`);
                }
                link.parentNode.removeChild(link);
              }
            }
          }
        });
      }, 5000); // Check after 5 seconds
    };
    
    // Execute resource hint strategies
    addPreconnectLinks();
    addPrefetchRoutes();
    addPreloadAssets();
    cleanupPrefetchLinks();
    
    // Measure performance after a short delay
    setTimeout(resourcePerformance, 2000);
    
    // Clean up unused preloads
    cleanupUnusedPreloads();
    
    // Cleanup function to remove unnecessary prefetch links when route changes
    return () => {
      cleanupPrefetchLinks();
    };
  }, [currentPath, preconnectDomains, prefetchRoutes, preloadAssets, observedAssets]);
  
  // This component doesn't render anything visible
  return null;
}

export default ResourceHints;