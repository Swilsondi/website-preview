import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component
 * Automatically scrolls to the top of the page when the route changes
 * This improves UX by ensuring users always start at the top of a new page
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    window.scrollTo(0, 0);
    
    // For cases where the above doesn't work (due to timing issues),
    // add a fallback with small delay
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
}
