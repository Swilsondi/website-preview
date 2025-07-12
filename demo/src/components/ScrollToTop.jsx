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
    // First attempt - immediate scroll with no smooth behavior
    window.scrollTo(0, 0);
    
    // Second attempt with a small delay
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      
      // Third attempt with a longer delay for complex pages
      const secondTimeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
        
        // Force scroll on html and body elements to cover all bases
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      }, 150);
      
      return () => clearTimeout(secondTimeoutId);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
}
