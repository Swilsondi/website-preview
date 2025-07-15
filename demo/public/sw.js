// Service Worker for TechMotiveSupreme
// Original version restored

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/dark-logo.png',
        '/assets/banner-logo.jpeg',
        '/index.css',
        '/App.css',
        '/src/main.jsx',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
