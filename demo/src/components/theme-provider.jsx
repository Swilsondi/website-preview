/**
 * Theme Provider Component
 * 
 * This component manages the application theme (light/dark/system) and provides
 * theme context to all child components. It syncs the theme with localStorage and
 * applies the appropriate CSS classes to the document root.
 * 
 * Features:
 * - Persists theme preference in localStorage
 * - Supports "system" theme that follows OS preference
 * - Provides a context for theme management accessible throughout the app
 * - Dynamically applies CSS classes to enable theme styles
 */
import { useEffect, useState } from "react";
import { ThemeProviderContext } from "@/contexts/ThemeContext";

// Only export the component from this file, not the hook
export function ThemeProvider({ children, ...props }) {
  // Initialize theme from localStorage or default to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Effect to apply the theme to the document root element
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Handle "system" theme preference
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    // Apply the selected theme
    root.classList.add(theme);
  }, [theme]);

  // Create context value with theme state and setter
  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem("theme", theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}