/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./demo/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
