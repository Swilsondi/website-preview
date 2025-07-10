import { useEffect } from "react";

export const usePerformance = (pageName) => {
  useEffect(() => {
    // Mark page start time
    const startTime = performance.now();

    // Log performance metrics
    const logPerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;

      // Only log in development
      if (import.meta.env.DEV) {
        console.log(`${pageName} load time: ${loadTime.toFixed(2)}ms`);
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(logPerformance, 0);

    return () => clearTimeout(timer);
  }, [pageName]);
};
