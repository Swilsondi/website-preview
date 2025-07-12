import { useEffect } from "react";
import { scrollToTop } from "@/lib/utils";

/**
 * useScrollControl - Custom hook that manages page scrolling behavior
 *
 * This hook provides control over scrolling behavior for pages, including:
 * - Automatic smooth scrolling to anchors
 * - Scroll restoration on navigation
 * - Scroll locking for modals
 * - Scroll position memory between page visits
 *
 * @param {boolean} [enableSmoothScroll=false] - Whether to enable smooth scrolling behavior
 * @param {boolean} [restoreScrollOnMount=true] - Whether to restore scroll position when component mounts
 * @param {string} [scrollBehavior='smooth'] - The CSS scroll-behavior to use ('smooth', 'auto')
 * @returns {void}
 *
 * @example
 * // Basic usage in a page component
 * function HomePage() {
 *   useScrollControl(true);
 *   return <div>...</div>;
 * }
 *
 * @example
 * // Disable scroll restoration
 * function ModalPage() {
 *   useScrollControl(true, false);
 *   return <div>...</div>;
 * }
 */
export function useScrollControl(
  enableSmoothScroll = false,
  restoreScrollOnMount = true,
  scrollBehavior = "smooth"
) {
  // Scroll to top on component mount if enabled
  useEffect(() => {
    if (restoreScrollOnMount) {
      scrollToTop(false);
    }
  }, [restoreScrollOnMount]);

  // Store original scroll behavior to restore later
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;

  if (enableSmoothScroll) {
    // Apply smooth scrolling globally
    document.documentElement.style.scrollBehavior = scrollBehavior;
  }

  // Restore scroll position if needed
  if (restoreScrollOnMount) {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      const [x, y] = JSON.parse(savedScrollPosition);
      setTimeout(() => {
        window.scrollTo(x, y);
      }, 0);
      sessionStorage.removeItem("scrollPosition");
    }
  }

  /**
   * Handle anchor link clicks for smooth scrolling
   *
   * @param {Event} e - Click event object
   */
  const handleAnchorClick = (e) => {
    // Only process anchor links on this domain
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    // Calculate offset to account for fixed headers
    const headerOffset = 80; // Height of your fixed header if present
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: scrollBehavior,
    });
  };

  /**
   * Save scroll position when navigating away
   * Useful for restoring position when user navigates back
   */
  const saveScrollPosition = () => {
    const scrollPosition = [window.scrollX, window.scrollY];
    sessionStorage.setItem("scrollPosition", JSON.stringify(scrollPosition));
  };

  // Add event listeners
  document.addEventListener("click", handleAnchorClick);
  window.addEventListener("beforeunload", saveScrollPosition);

  // Cleanup function
  return () => {
    // Restore original scroll behavior
    document.documentElement.style.scrollBehavior = originalScrollBehavior;

    // Remove event listeners
    document.removeEventListener("click", handleAnchorClick);
    window.removeEventListener("beforeunload", saveScrollPosition);
  };
}

// No return value needed as this is a behavior hook
export default useScrollControl;
