/* ==========================================================================
   HBTU Manch — Service Worker
   Cache name  : hbtu-manch-v1
   Strategy    : Cache-First for static assets | Network-First for navigation
   ========================================================================== */

'use strict';

const CACHE_NAME = 'hbtu-manch-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json'
];

/* --------------------------------------------------------------------------
   INSTALL — pre-cache all static assets
   -------------------------------------------------------------------------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Activate immediately without waiting for existing tabs to close
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[SW] Pre-cache failed:', err);
      })
  );
});

/* --------------------------------------------------------------------------
   ACTIVATE — purge stale caches from previous versions
   -------------------------------------------------------------------------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        const deletions = cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          });
        return Promise.all(deletions);
      })
      .then(() => {
        // Take control of all open clients immediately
        return self.clients.claim();
      })
  );
});

/* --------------------------------------------------------------------------
   FETCH — dual strategy
     • Navigation requests (HTML)  → Network First, fall back to cache
     • Static assets               → Cache First, fall back to network
   -------------------------------------------------------------------------- */
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests; let everything else pass through
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (e.g. Google Fonts CDN during development)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isNavigationRequest(request)) {
    // ── Network First ──────────────────────────────────────────────────────
    event.respondWith(networkFirst(request));
  } else {
    // ── Cache First ────────────────────────────────────────────────────────
    event.respondWith(cacheFirst(request));
  }
});

/* --------------------------------------------------------------------------
   Strategy helpers
   -------------------------------------------------------------------------- */

/**
 * Network First — try network; on failure serve from cache.
 * Updates the cache on every successful network response.
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      // Clone before consuming — a Response can only be read once
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (_err) {
    console.warn('[SW] Network First — network failed, trying cache:', request.url);
    const cached = await caches.match(request);
    if (cached) return cached;

    // Last resort: return the cached index.html for any navigation miss
    const fallback = await caches.match('./index.html');
    return fallback || new Response('Offline — HBTU Manch is not available right now.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

/**
 * Cache First — serve from cache; on miss fetch from network and cache it.
 */
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const networkResponse = await fetch(request);

    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (_err) {
    console.warn('[SW] Cache First — both cache and network failed:', request.url);
    return new Response('Asset unavailable offline.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

/* --------------------------------------------------------------------------
   Utility
   -------------------------------------------------------------------------- */

/**
 * Returns true for HTML navigation requests.
 * Covers browser top-level navigations and direct URL loads.
 */
function isNavigationRequest(request) {
  return (
    request.mode === 'navigate' ||
    request.headers.get('Accept')?.includes('text/html')
  );
}
