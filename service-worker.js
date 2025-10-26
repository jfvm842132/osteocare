const CACHE_NAME = 'osteocare-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/constants.ts',
  '/hooks/useDarkMode.ts',
  '/components/Header.tsx',
  '/components/BottomNav.tsx',
  '/pages/ChatPage.tsx',
  '/pages/GuidePage.tsx',
  '/pages/ExercisesPage.tsx',
  '/pages/ProfilePage.tsx',
  '/services/geminiService.ts'
];

// Evento de instalação: guarda os ficheiros em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberta');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Evento de fetch: serve a partir da cache ou da rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se encontrarmos na cache, retornamos
        if (response) {
          return response;
        }
        // Caso contrário, vamos à rede
        return fetch(event.request);
      }
    )
  );
});

// Evento de ativação: limpa caches antigas
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
