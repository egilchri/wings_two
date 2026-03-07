const CACHE_NAME = 'wings-two-v1';
const ASSETS = [
  '/wings_two/',
  '/wings_two/index.html',
  '/wings_two/test_style.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
