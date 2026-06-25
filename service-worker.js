const CACHE_NAME = 'nox-v1';
const ASSETS = [
  './',
  './index.html',
  './reader.html',
  './settings.html',
  './manifest.json',
  './css/style.css',
  './css/dashboard.css',
  './css/reader.css',
  './css/settings.css',
  './js/app.js',
  './js/books.js',
  './js/reader.js',
  './js/settings.js',
  './js/accessibility.js',
  './data/catalog.json',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});