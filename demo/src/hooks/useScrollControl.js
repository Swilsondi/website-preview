import { useEffect } from "react";
import { scrollToTop } from "@/lib/utils";

/**
 * Custom hook for controlling scroll behavior in components
 * Provides automatic scroll-to-top on mount and methods for button click handlers
 * @param {boolean} scrollOnMount - Whether to scroll to top when component mounts
 * @returns {Object} Object containing scroll control methods
 */
export function useScrollControl(scrollOnMount = true) {
  // Scroll to top on component mount if enabled
  useEffect(() => {
    if (scrollOnMount) {
      scrollToTop(false);
    }
  }, [scrollOnMount]);

  /**
   * Handler for button clicks that should scroll to top
   * @param {boolean} smooth - Whether to use smooth scrolling
   * @returns {Function} Click handler function
   */
  const getScrollButtonHandler = (smooth = true) => {
    return (e) => {
      // Prevent default if it's a link
      if (e && e.preventDefault) {
        e.preventDefault();
      }
      scrollToTop(smooth);
    };
  };

  return {
    scrollToTop,
    getScrollButtonHandler,
  };
}
