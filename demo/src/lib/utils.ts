import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Force scrolls the window to the top
 * @param smooth Whether to use smooth scrolling behavior
 */
export function scrollToTop(smooth: boolean = false) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? "smooth" : "auto",
  });
}
