// Service Worker for TechMotiveSupreme
// Production-optimized version

// Cache names with improved versioning - using timestamp for easier updates
const CACHE_VERSION =
  "2.0_" + new Date().toISOString().slice(0, 10).replace(/-/g, "");
const CACHE_NAMES = {
  static: `static-${CACHE_VERSION}`,
  dynamic: `dynamic-${CACHE_VERSION}`,
  images: `images-${CACHE_VERSION}`,
  fonts: `fonts-${CACHE_VERSION}`,
};

// Maximum age for items in dynamic cache (7 days in milliseconds)
const DYNAMIC_CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

// Assets to pre-cache immediately
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/vite.svg",
  "/manifest.json",
  // Add key CSS/JS files here based on your build output
  "/assets/index.css",
  "/assets/index.js",
  // Critical images that should be available offline
  "/assets/dark-logo.png",
  "/assets/white-logo.png",
  "/assets/banner-logo.jpeg",
  // Add font files if you're using any
  // Using relative paths to avoid SSL issues during development
];

// Detect if we're in development mode
const IS_DEV =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";

// Utility function for logging in development only
function devLog(...args) {
  if (IS_DEV) {
    console.log(...args);
  }
}

// URLs to exclude from caching - add your HomePage.jsx route
const EXCLUDE_FROM_CACHE = [
  "./pages/HomePage.jsx",
  "HomePage.jsx",
  "/src/pages/HomePage.jsx",
  // API endpoints should typically not be cached
  "/api/",
  // Add any other paths you don't want cached
];

// Helper function to determine cache storage based on request
const getCacheStorageForRequest = (request) => {
  const url = new URL(request.url);

  // For images
  if (/\.(jpe?g|png|gif|svg|webp)$/i.test(url.pathname)) {
    return IMAGE_CACHE;
  }

  // For fonts
  if (/\.(woff|woff2|ttf|otf|eot)$/i.test(url.pathname)) {
    return FONT_CACHE;
  }

  // For static assets (JS, CSS)
  if (/\.(js|css)$/i.test(url.pathname)) {
    return STATIC_CACHE;
  }

  // For all other resources
  return DYNAMIC_CACHE;
};

// Helper function to clean expired items from dynamic cache
const cleanExpiredCache = async () => {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const requests = await cache.keys();
    const now = Date.now();

    for (const request of requests) {
      // Get the cache entry
      const response = await cache.match(request);

      // Skip if we can't get headers
      if (!response || !response.headers) continue;

      // Check if we have a timestamp in the headers
      const dateHeader = response.headers.get("date");
      if (!dateHeader) continue;

      const date = new Date(dateHeader).getTime();

      // If the cache entry is older than our max age, remove it
      if (now - date > DYNAMIC_CACHE_MAX_AGE) {
        await cache.delete(request);
        devLog(
          `[ServiceWorker] Removed expired item from cache: ${request.url}`
        );
      }
    }
  } catch (error) {
    devLog(`[ServiceWorker] Error cleaning expired cache: ${error}`);
  }
};

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  devLog("[ServiceWorker] Installing");

  // Skip caching in development to avoid stale assets
  if (IS_DEV) {
    devLog("[ServiceWorker] Development mode - skipping cache");
    return;
  }

  event.waitUntil(
    caches
      .open(CACHE_NAMES.static)
      .then((cache) => {
        devLog("[ServiceWorker] Precaching app shell");
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        devLog("[ServiceWorker] Installation completed");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[ServiceWorker] Precaching failed:", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  devLog("[ServiceWorker] Activating");

  // Skip cleanup in development
  if (IS_DEV) {
    return;
  }

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete any cache that doesn't match our current version prefix
            if (
              !Object.values(CACHE_NAMES).some((name) => cacheName === name)
            ) {
              devLog("[ServiceWorker] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        devLog("[ServiceWorker] Activation completed - claiming clients");
        return self.clients.claim();
      })
  );

  // Clean expired items from dynamic cache
  event.waitUntil(cleanExpiredCache());
});

// Helper function to determine if a request is an API call
function isApiRequest(url) {
  return (
    url.pathname.startsWith("/api/") ||
    url.host.includes("api.") ||
    url.pathname.includes("graphql")
  );
}

// Helper function to determine if a request is for an HTML page
function isHtmlRequest(url, request) {
  return (
    request.mode === "navigate" ||
    (request.method === "GET" &&
      request.headers.get("accept").includes("text/html"))
  );
}

// Helper function to determine if a request is for an image
function isImageRequest(url) {
  const imageExtensions = [
    ".png",
    ".jpg",
    ".jpeg",
    ".svg",
    ".gif",
    ".webp",
    ".avif",
  ];
  return (
    imageExtensions.some((ext) => url.pathname.endsWith(ext)) ||
    url.pathname.includes("/images/") ||
    url.searchParams.has("image")
  );
}

// Helper function to determine if a request is for a font
function isFontRequest(url) {
  const fontExtensions = [".woff", ".woff2", ".ttf", ".eot", ".otf"];
  return (
    fontExtensions.some((ext) => url.pathname.endsWith(ext)) ||
    url.pathname.includes("/fonts/")
  );
}

// Helper function to determine if a request is for CSS or JS
function isAssetRequest(url) {
  return (
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js") ||
    url.pathname.includes("/assets/")
  );
}

// Fetch event - handle all requests
self.addEventListener("fetch", (event) => {
  // Skip service worker in development mode
  if (IS_DEV) {
    return;
  }

  const requestUrl = new URL(event.request.url);

  // Don't handle different origin requests except for CDNs you might use
  if (
    requestUrl.origin !== location.origin &&
    !requestUrl.hostname.includes("cdn") &&
    !requestUrl.hostname.includes("googleapis") &&
    !requestUrl.hostname.includes("gstatic")
  ) {
    return;
  }

  // Check if the request matches any paths we want to exclude from caching
  const shouldExcludeFromCache = EXCLUDE_FROM_CACHE.some((path) =>
    event.request.url.includes(path)
  );

  if (shouldExcludeFromCache) {
    // For excluded paths, always go to network and don't cache
    event.respondWith(
      fetch(event.request).catch(() => {
        console.log(
          "[ServiceWorker] Network request failed for excluded path",
          event.request.url
        );
        return new Response("Failed to load resource");
      })
    );
    return;
  }

  // Different strategies based on request type
  if (isApiRequest(requestUrl)) {
    // Network-only for API requests with timeout fallback for critical APIs
    event.respondWith(handleApiRequest(event.request));
  } else if (isHtmlRequest(requestUrl, event.request)) {
    // Network-first for HTML to ensure fresh content
    event.respondWith(handleHtmlRequest(event.request));
  } else if (isImageRequest(requestUrl)) {
    // Cache-first for images with network fallback
    event.respondWith(handleImageRequest(event.request));
  } else if (isFontRequest(requestUrl)) {
    // Cache-first for fonts
    event.respondWith(handleFontRequest(event.request));
  } else if (isAssetRequest(requestUrl)) {
    // Stale-while-revalidate for assets like CSS/JS
    event.respondWith(handleAssetRequest(event.request));
  } else {
    // Default: network-first with cache fallback
    event.respondWith(handleNetworkFirst(event.request));
  }
});

// Network-only strategy with timeout for APIs
async function handleApiRequest(request) {
  try {
    // For API requests, always go to network first
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Network timeout")), 3000)
      ),
    ]);

    if (networkResponse.ok) {
      return networkResponse;
    }
    throw new Error("Network response not ok");
  } catch (error) {
    console.warn("[ServiceWorker] API request failed:", error);

    // For critical APIs you might want to return a custom fallback
    // rather than failing completely
    return new Response(
      JSON.stringify({ error: "Network error", offline: true }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Network-first strategy for HTML
async function handleHtmlRequest(request) {
  try {
    // Try network first
    const response = await fetch(request);

    // If successful, clone the response and cache it
    if (response.ok) {
      const responseClone = response.clone();
      caches.open(CACHE_NAMES.dynamic).then((cache) => {
        cache.put(request, responseClone);
      });
      return response;
    }

    throw new Error("Network response not ok");
  } catch (error) {
    console.warn("[ServiceWorker] HTML request failed, using cache:", error);

    // Check cache
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, return the offline page
    return caches.match("/offline.html");
  }
}

// Cache-first strategy for images
async function handleImageRequest(request) {
  // Check cache first
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    // Return cached response immediately
    return cachedResponse;
  }

  try {
    // If not in cache, get from network
    const networkResponse = await fetch(request);

    // Cache the new response
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      caches.open(CACHE_NAMES.images).then((cache) => {
        cache.put(request, responseClone);
      });
    }

    return networkResponse;
  } catch (error) {
    console.warn("[ServiceWorker] Image fetch failed:", error);

    // Return a placeholder image or transparent image
    return new Response("Image not available offline", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

// Cache-first strategy for fonts
async function handleFontRequest(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      caches.open(CACHE_NAMES.fonts).then((cache) => {
        cache.put(request, responseClone);
      });
    }

    return networkResponse;
  } catch (error) {
    console.error("[ServiceWorker] Font fetch failed:", error);
    // Font failures are critical, so we don't have a great fallback
    throw error;
  }
}

// Stale-while-revalidate strategy for assets
async function handleAssetRequest(request) {
  // Try to get from cache first
  const cachedResponse = await caches.match(request);

  // Fetch from network in the background regardless of cache status
  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAMES.static).then((cache) => {
          cache.put(request, responseClone);
        });
      }
      return networkResponse;
    })
    .catch((error) => {
      console.warn("[ServiceWorker] Asset fetch failed:", error);
      throw error;
    });

  // Return cached response immediately if available,
  // otherwise wait for the network response
  return cachedResponse || fetchPromise;
}

// Network-first with cache fallback (general strategy)
async function handleNetworkFirst(request) {
  try {
    const response = await fetch(request);

    if (response.ok) {
      // Cache successful responses
      const responseClone = response.clone();
      caches.open(CACHE_NAMES.dynamic).then((cache) => {
        cache.put(request, responseClone);
      });
      return response;
    }

    throw new Error("Network response not ok");
  } catch (error) {
    console.warn("[ServiceWorker] Network request failed, using cache:", error);

    // Try the cache
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // No cached response - return a generic error
    return new Response("Service temporarily unavailable", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

// Handle messages from the main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

// Background sync for offline form submissions
self.addEventListener("sync", (event) => {
  devLog("[ServiceWorker] Background sync event:", event.tag);

  if (event.tag === "submit-form") {
    event.waitUntil(
      // Implement offline form submission retry logic here
      // This could involve checking IndexedDB for stored forms
      // and submitting them when we're back online
      Promise.resolve()
    );
  }
});

// Push notification handling
self.addEventListener("push", (event) => {
  devLog("[ServiceWorker] Push event received");

  if (event.data) {
    const data = event.data.json();

    event.waitUntil(
      self.registration.showNotification(data.title || "New Notification", {
        body: data.body || "You have a new update",
        icon: "/vite.svg",
        badge: "/vite.svg",
        data: data.data,
        vibrate: [100, 50, 100],
        actions: [
          {
            action: "explore",
            title: "View",
          },
          {
            action: "close",
            title: "Close",
          },
        ],
      })
    );
  }
});

// Notification click handling
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  devLog("[ServiceWorker] Notification clicked", event.action);

  if (event.action === "explore") {
    // Custom action for notification
    clients.openWindow("/some-page");
  } else {
    // Default action - focus the client
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.focus());
      })
    );
  }
});
