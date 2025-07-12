import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Force scrolls the window to the top using multiple methods for maximum reliability
 * @param smooth Whether to use smooth scrolling behavior for the initial scroll
 */
export function scrollToTop(smooth: boolean = false) {
  // First attempt - using window.scrollTo
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? "smooth" : "auto",
  });

  // Second attempt with zero timeout - this helps in some browsers
  setTimeout(() => {
    window.scrollTo(0, 0);

    // Try direct manipulation of scroll properties
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  }, 0);

  // Third attempt with a longer delay for complex pages with dynamic content
  setTimeout(() => {
    window.scrollTo(0, 0);

    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }

    // Try scrolling any potential main content containers
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, 100);
}
