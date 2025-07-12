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
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcp = entries[0].startTime;
          console.log(`FCP: ${fcp}ms`);
          setMetrics(prev => ({ ...prev, fcp }));
        }
      });
      
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          console.log(`LCP: ${lcp}ms`);
          setMetrics(prev => ({ ...prev, lcp }));
        }
      });
      
      // Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log(`CLS: ${clsValue}`);
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      
      // Register the observers
      fcpObserver.observe({ type: 'paint', buffered: true });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      
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
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
        
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