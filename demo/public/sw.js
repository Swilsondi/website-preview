// Service Worker for TechMotiveSupreme
const CACHE_NAME = "techmotive-v1";

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./vite.svg",
  // Using relative paths to avoid SSL issues during development
];

// Check if we're in development mode
const isDevelopment =
  self.location.hostname === "localhost" ||
  self.location.hostname === "127.0.0.1";

// Install event - precache static assets
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Installing");

  // Skip waiting to ensure the new service worker activates immediately
  self.skipWaiting();

  // Only precache in production - this avoids SSL issues during development
  if (!isDevelopment) {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => {
          console.log("[ServiceWorker] Precaching assets");
          return cache.addAll(PRECACHE_ASSETS);
        })
        .catch((error) =>
          console.error("[ServiceWorker] Precaching failed:", error)
        )
    );
  } else {
    console.log("[ServiceWorker] Development mode - skipping precache");
  }
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activating");

  // Take control of all clients immediately
  self.clients.claim();

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log("[ServiceWorker] Removing old cache:", cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Fetch event handler with development mode awareness
self.addEventListener("fetch", (event) => {
  // In development mode, don't intercept requests to avoid SSL issues
  if (isDevelopment) {
    return;
  }

  const request = event.request;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Skip Chrome extensions and DevTools
  if (
    request.url.includes("chrome-extension") ||
    request.url.includes("devtools")
  ) {
    return;
  }

  // For HTML pages, use network-first with offline fallback
  if (
    request.mode === "navigate" ||
    (request.headers.get("accept") &&
      request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(request).catch(() => {
        // If network fails, show offline page
        return (
          caches.match("./offline.html") ||
          new Response("You are offline. Please check your connection.")
        );
      })
    );
    return;
  }

  // Default behavior - don't intercept
});

// Simplified for development
self.addEventListener("sync", (event) => {
  console.log("[ServiceWorker] Background sync event:", event.tag);
});

self.addEventListener("push", (event) => {
  console.log("[ServiceWorker] Push event received");
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  console.log("[ServiceWorker] Notification clicked");
});
