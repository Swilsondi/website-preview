// https://vite.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer"; // Add visualizer plugin
import crypto from "crypto";
// import Pages from "vite-plugin-pages";
// import Sitemap from "vite-plugin-sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Properly implement crypto.hash to return a hex string that can be used with substring
if (typeof crypto.hash !== "function") {
  crypto.hash = function hash(algorithm, data) {
    return crypto.createHash(algorithm).update(data).digest("hex");
  };
}

// Apply to global scope if needed
if (typeof globalThis !== "undefined" && globalThis.crypto) {
  if (!globalThis.crypto.hash) {
    globalThis.crypto.hash = function hash(algorithm, data) {
      return crypto.createHash(algorithm).update(data).digest("hex");
    };
  }
}

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: false, // Don't automatically open in browser
    }),
    Pages({
      dirs: "src/pages", // auto-detect pages in /src/pages
      extensions: ["jsx", "tsx", "js", "ts"],
    }),
    Sitemap({
      hostname: "https://www.techmotivesupreme.com",
      routes: undefined, // auto-detect routes from vite-plugin-pages
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  define: {
    "process.env": {},
    __dirname: JSON.stringify(""),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          icons: ["lucide-react"],
          router: ["react-router-dom"],
        },
      },
    },
    minify: "terser", // Ensure minification is enabled
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs for smaller bundle
        drop_debugger: true, // Remove debugger statements
      },
      format: {
        comments: false, // Remove comments
      },
    },
    sourcemap: false, // Disable source maps for production to reduce bundle size
  },
  server: {
    port: 3000,
    host: true,
    https: false,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://* blob:; connect-src 'self' *; object-src 'none'; base-uri 'self'; frame-src https://js.stripe.com https://hooks.stripe.com;",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy":
        "geolocation=(), microphone=(), camera=(), payment=()",
    },
  },
});
