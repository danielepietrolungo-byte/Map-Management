const CACHE_NAME = 'territori-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'manifest.json',
  'icona-192.png',
  'icona-512.png'
];

// Installa il Service Worker e salva in cache i file principali
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste quando si è offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});