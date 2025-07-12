import { useState, useEffect } from "react";

/**
 * Custom hook to optimize animation performance
 * - Respects user's reduced motion preferences
 * - Only enables animations when device performance is adequate
 * - Provides safe fallbacks for low-end devices
 */
export function useOptimizedAnimation() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [devicePerformance, setDevicePerformance] = useState("high");

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes in motion preference
    const handleMotionChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    // Estimate device performance
    const performanceCheck = () => {
      // Use rough heuristics to determine device capabilities
      const isMobile =
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isOldBrowser = !("IntersectionObserver" in window);

      if (isOldBrowser) {
        return "low";
      } else if (isMobile) {
        return "medium";
      } else {
        return "high";
      }
    };

    setDevicePerformance(performanceCheck());

    // Decide if animations should be enabled
    setShouldAnimate(!prefersReducedMotion && devicePerformance !== "low");

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [prefersReducedMotion]);

  // Provide different animation variants based on performance
  const getAnimationConfig = (animationType) => {
    // Always return simple/no animations for reduced motion or low performance
    if (!shouldAnimate) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 },
      };
    }

    // Different animation presets
    switch (animationType) {
      case "fadeIn":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: {
            duration: devicePerformance === "high" ? 0.6 : 0.3,
            ease: "easeOut",
          },
        };

      case "slideUp":
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: devicePerformance === "high" ? 0.6 : 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        };

      case "staggered":
        return {
          container: {
            animate: {
              transition: {
                staggerChildren: devicePerformance === "high" ? 0.1 : 0.05,
              },
            },
          },
          item: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
          },
        };

      default:
        return {
          initial: {},
          animate: {},
          transition: { duration: 0.3 },
        };
    }
  };

  return {
    shouldAnimate,
    prefersReducedMotion,
    devicePerformance,
    getAnimationConfig,
  };
}
