// https://vite.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer"; // Add visualizer plugin
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Properly implement crypto.hash to return a hex string that can be used with substring
if (typeof crypto.hash !== "function") {
  crypto.hash = function hash(algorithm, data) {
    return crypto.createHash(algorithm).update(data).digest("hex");
  };
}

// Apply to global scope if needed
if (typeof global !== "undefined" && global.crypto) {
  if (!global.crypto.hash) {
    global.crypto.hash = function hash(algorithm, data) {
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
    minify: "esbuild", // Use esbuild for minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    port: 3000,
    host: true,
    https: false, // Ensure HTTPS is disabled
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
