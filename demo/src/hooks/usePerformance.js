import { useEffect } from "react";

// Performance tracking data
const componentRenderTimes = new Map();
const routeLoadTimes = new Map();
const resourceLoadTimes = new Map();
const interactionTimes = new Map();
let isPerformanceMonitoringEnabled = true;

// Enable or disable performance monitoring (useful for production vs development)
export const configurePerformanceMonitoring = (enabled = true) => {
  isPerformanceMonitoringEnabled = enabled;
};

/**
 * Hook for monitoring component performance
 * @param {string} componentName - Name of the component to track
 * @param {object} options - Configuration options
 * @returns {object} Performance tracking methods
 */
export const usePerformance = (componentName, options = {}) => {
  const {
    logToConsole = process.env.NODE_ENV === "development",
    threshold = 16, // Default threshold of 16ms (60fps)
  } = options;

  // Start timing on mount
  useEffect(() => {
    if (!isPerformanceMonitoringEnabled) return;

    const startTime = performance.now();
    const markName = `${componentName}-mount`;
    const measureName = `${componentName}-render-time`;

    try {
      // Use Performance API for more accurate measurements
      performance.mark(markName);

      return () => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;

        // Store the render time
        componentRenderTimes.set(componentName, renderTime);

        // Create a performance measure
        try {
          performance.measure(measureName, markName);
          // Get all measures with this name
          const measures = performance.getEntriesByName(measureName);
          const lastMeasure = measures[measures.length - 1];

          // Log if render time exceeds threshold
          if (logToConsole && renderTime > threshold) {
            console.warn(
              `⚠️ Slow render: ${componentName} took ${renderTime.toFixed(
                2
              )}ms to render`
            );
          }

          // Clean up marks and measures to avoid memory leaks
          performance.clearMarks(markName);
          performance.clearMeasures(measureName);
        } catch (err) {
          // Fallback if measuring fails
          if (logToConsole && renderTime > threshold) {
            console.warn(
              `⚠️ Slow render: ${componentName} took ${renderTime.toFixed(
                2
              )}ms to render`
            );
          }
        }
      };
    } catch (err) {
      // Fallback for browsers that don't support Performance API
      return () => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        componentRenderTimes.set(componentName, renderTime);

        if (logToConsole && renderTime > threshold) {
          console.warn(
            `⚠️ Slow render: ${componentName} took ${renderTime.toFixed(
              2
            )}ms to render`
          );
        }
      };
    }
  }, [componentName, logToConsole, threshold]);

  // Methods for manual tracking
  const trackInteraction = (interactionName) => {
    if (!isPerformanceMonitoringEnabled) return { end: () => {} };

    const startTime = performance.now();

    return {
      end: () => {
        const endTime = performance.now();
        const duration = endTime - startTime;

        interactionTimes.set(`${componentName}-${interactionName}`, duration);

        if (logToConsole && duration > threshold) {
          console.warn(
            `⚠️ Slow interaction: ${componentName}-${interactionName} took ${duration.toFixed(
              2
            )}ms`
          );
        }

        return duration;
      },
    };
  };

  const trackResourceLoad = (resourceName) => {
    if (!isPerformanceMonitoringEnabled) return { end: () => {} };

    const startTime = performance.now();

    return {
      end: () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        resourceLoadTimes.set(`${componentName}-${resourceName}`, loadTime);

        if (logToConsole && loadTime > 100) {
          // Higher threshold for resources
          console.warn(
            `⚠️ Slow resource: ${componentName}-${resourceName} took ${loadTime.toFixed(
              2
            )}ms to load`
          );
        }

        return loadTime;
      },
    };
  };

  // Track route changes
  const trackRouteChange = (route) => {
    if (!isPerformanceMonitoringEnabled) return { end: () => {} };

    const startTime = performance.now();

    return {
      end: () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        routeLoadTimes.set(route, loadTime);

        if (logToConsole && loadTime > 300) {
          // Higher threshold for routes
          console.warn(
            `⚠️ Slow route: ${route} took ${loadTime.toFixed(2)}ms to load`
          );
        }

        return loadTime;
      },
    };
  };

  // Get performance data
  const getPerformanceData = () => {
    return {
      componentRenderTimes: Object.fromEntries(componentRenderTimes),
      routeLoadTimes: Object.fromEntries(routeLoadTimes),
      resourceLoadTimes: Object.fromEntries(resourceLoadTimes),
      interactionTimes: Object.fromEntries(interactionTimes),
    };
  };

  // Return methods for manual tracking
  return {
    trackInteraction,
    trackResourceLoad,
    trackRouteChange,
    getPerformanceData,
  };
};

// Export a function to get all performance data
export const getAllPerformanceData = () => {
  return {
    componentRenderTimes: Object.fromEntries(componentRenderTimes),
    routeLoadTimes: Object.fromEntries(routeLoadTimes),
    resourceLoadTimes: Object.fromEntries(resourceLoadTimes),
    interactionTimes: Object.fromEntries(interactionTimes),
  };
};

// Reset all performance data
export const resetPerformanceData = () => {
  componentRenderTimes.clear();
  routeLoadTimes.clear();
  resourceLoadTimes.clear();
  interactionTimes.clear();
};

export default usePerformance;
