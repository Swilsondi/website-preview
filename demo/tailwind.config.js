/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        foreground: "#000",
        card: "#fff",
        "card-foreground": "#000",
        primary: "#6366f1",
        "primary-foreground": "#fff",
        accent: "#f3f4f6",
        "accent-foreground": "#000",
        muted: "#f3f4f6",
        "muted-foreground": "#6b7280",
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#6366f1",
      },
    },
  },
  plugins: [],
};

// This file customizes how Tailwind CSS scans your project and generates styles.

// 1. content
// Tells Tailwind which files to scan for class names.

// Here, it looks at all .js, .jsx, .ts, and .tsx files in src and its subfolders.
// This is important for purging unused CSS and keeping your final CSS file small.

// 2. theme
// Lets you customize or extend Tailwind’s default design system (colors, fonts, spacing, etc).
// extend: {} means you’re not adding customizations yet, but you can add things like custom colors here.

// 3. plugins
// Lets you add extra Tailwind plugins for more utilities or components.

// Empty array means no extra plugins are used right now.
