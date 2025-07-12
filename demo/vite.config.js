// https://vite.dev/config/

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer"; // Add visualizer plugin

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true, // Automatically open the analysis in the browser
    }),
    // Add a plugin to provide a mock crypto.hash function that Vite needs
    {
      name: "vite:crypto-polyfill",
      resolveId(id) {
        if (id === "node:crypto") return id;
      },
      load(id) {
        if (id === "node:crypto") {
          return `export default { 
            hash: function(algorithm, data) { 
              const str = typeof data === 'string' ? data : JSON.stringify(data);
              let hash = 0;
              for (let i = 0; i < str.length; i++) {
                hash = ((hash << 5) - hash) + str.charCodeAt(i);
                hash |= 0;
              }
              return new Uint8Array([hash & 0xFF, (hash >> 8) & 0xFF, (hash >> 16) & 0xFF, (hash >> 24) & 0xFF]);
            }
          }`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      crypto: "node:crypto",
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
  },
  server: {
    port: 3000,
    host: true,
    // Use HTTP instead of HTTPS to avoid SSL errors
    https: false,
    headers: {
      // Updated CSP to allow Google Fonts
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://* blob:; connect-src 'self' *; object-src 'none'; base-uri 'self';",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy":
        "geolocation=(), microphone=(), camera=(), payment=()",
    },
  },
});
