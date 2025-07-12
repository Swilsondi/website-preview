import { useEffect, useState } from 'react';
import { usePerformance } from '@/hooks/usePerformance';

/**
 * PerformanceMonitor - A component that monitors various performance metrics
 * and optimizes the application based on collected data.
 * 
 * This component uses passive monitoring to track:
 * - First Contentful Paint (FCP)
 * - Largest Contentful Paint (LCP)
 * - Cumulative Layout Shift (CLS)
 * - Time to Interactive (TTI)
 * - Memory usage
 * - Frame rate
 * 
 * Implementation details:
 * - Uses PerformanceObserver to track Core Web Vitals
 * - Reports metrics to console and/or analytics service
 * - No visual rendering - purely functional component
 * - Connects with usePerformance hook for broader usage
 * 
 * Performance Budget Targets:
 * - First Contentful Paint (FCP): < 1.8s
 * - Largest Contentful Paint (LCP): < 2.5s
 * - First Input Delay (FID): < 100ms
 * - Cumulative Layout Shift (CLS): < 0.1
 * - Time to Interactive (TTI): < 3.8s
 */
export function PerformanceMonitor({ children }) {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
    memory: 0,
    fps: 0,
    isLowEndDevice: false,
    networkType: 'unknown',
    prefersReducedMotion: false
  });

  // Track client capabilities
  useEffect(() => {
    // Check device capability
    const checkDeviceCapabilities = () => {
      // Check if device is low end (mobile or with limited resources)
      const isLowEndDevice = 
        !matchMedia('(min-device-memory: 4gb)').matches || 
        navigator.hardwareConcurrency < 4 ||
        navigator.deviceMemory < 4;

      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Attempt to get network information if available
      let networkType = 'unknown';
      if ('connection' in navigator) {
        networkType = navigator.connection.effectiveType || 'unknown';
      }
      
      setMetrics(prev => ({
        ...prev,
        isLowEndDevice,
        networkType,
        prefersReducedMotion
      }));
      
      // Apply optimizations based on capabilities
      if (isLowEndDevice || networkType === 'slow-2g' || networkType === '2g') {
        document.documentElement.classList.add('low-end-device');
      }
      
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      }
    };
    
    checkDeviceCapabilities();
    
    // Add event listeners for capability changes
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', checkDeviceCapabilities);
    }
    
    // Setup Core Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      /**
       * Report a performance metric to analytics and/or console
       * 
       * @param {string} metricName - The name of the metric
       * @param {number} value - The metric value
       * @param {string} unit - The unit of measurement (ms, score, etc)
       */
      const reportMetric = (metricName, value, unit = 'ms') => {
        console.info(`Performance: ${metricName} - ${value}${unit}`);
        
        // Here you would typically send to your analytics service
        // Example: analyticsService.reportPerformance(metricName, value);
        
        // Check against performance budget
        const budgets = {
          'FCP': 1800,
          'LCP': 2500,
          'FID': 100,
          'CLS': 0.1,
          'TTI': 3800
        };
        
        if (budgets[metricName] && value > budgets[metricName]) {
          console.warn(`Performance budget exceeded: ${metricName} - ${value}${unit} (budget: ${budgets[metricName]}${unit})`);
        }
      };
      
      // Track Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        // LCP may have multiple entries, we want the most recent one
        if (lastEntry) {
          const lcp = Math.round(lastEntry.startTime);
          reportMetric('LCP', lcp);
          setMetrics(prev => ({ ...prev, lcp }));
        }
      });
      
      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          const fid = Math.round(entry.processingStart - entry.startTime);
          reportMetric('FID', fid);
        });
      });
      
      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      let clsEntries = [];
      
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        
        entries.forEach(entry => {
          // Only count layout shifts without recent user input
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push(entry);
          }
        });
        
        reportMetric('CLS', clsValue.toFixed(4), '');
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      
      // Register the observers
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      fidObserver.observe({ type: 'first-input', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
      // Track First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          const fcp = Math.round(entry.startTime);
          reportMetric('FCP', fcp);
          setMetrics(prev => ({ ...prev, fcp }));
        });
      });
      
      fcpObserver.observe({ type: 'paint', buffered: true });
      
      // Frame rate monitoring (if possible)
      let frameCount = 0;
      let lastFrameTime = performance.now();
      let frameID;
      
      const measureFrameRate = (timestamp) => {
        frameCount++;
        
        const elapsed = timestamp - lastFrameTime;
        if (elapsed >= 1000) { // Update every second
          const fps = Math.round((frameCount * 1000) / elapsed);
          setMetrics(prev => ({ ...prev, fps }));
          
          // Reset for next measurement
          frameCount = 0;
          lastFrameTime = timestamp;
          
          // If FPS is too low, further optimize
          if (fps < 30) {
            document.documentElement.classList.add('low-fps');
          } else {
            document.documentElement.classList.remove('low-fps');
          }
        }
        
        frameID = requestAnimationFrame(measureFrameRate);
      };
      
      frameID = requestAnimationFrame(measureFrameRate);
      
      // Memory usage if available
      const checkMemory = () => {
        if (performance.memory) {
          const memoryUsage = Math.round(performance.memory.usedJSHeapSize / (1024 * 1024));
          setMetrics(prev => ({ ...prev, memory: memoryUsage }));
          
          // If memory is getting high, perform cleanup
          if (memoryUsage > 100) { // More than 100MB
            // Force garbage collection if possible
            if (window.gc) {
              window.gc();
            }
          }
        }
      };
      
      // Check memory every 10 seconds
      const memoryInterval = setInterval(checkMemory, 10000);
      
      return () => {
        // Clean up observers
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        
        // Clean up frame rate measurement
        cancelAnimationFrame(frameID);
        
        // Clean up memory checker
        clearInterval(memoryInterval);
        
        // Remove connection listener
        if ('connection' in navigator) {
          navigator.connection.removeEventListener('change', checkDeviceCapabilities);
        }
      };
    }
  }, []);
  
  // Register this component with our performance hook
  usePerformance('PerformanceMonitor');
  
  return (
    <>
      {children}
      {/* Render nothing - this is just a monitoring component */}
    </>
  );
};