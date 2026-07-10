const CACHE_NAME = 'kaliaff-codex-final-20260628-1800';
const APP_SHELL = ['./','./index.html','./admin/index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./logo.jpg','./kaliaff.jpg'];
self.addEventListener('install', event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(()=>Promise.resolve())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if(url.origin !== self.location.origin) return;
  if(event.request.destination === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(url.pathname) || event.request.headers.has('range')) return;
  const isPage = event.request.mode === 'navigate' || event.request.destination === 'document' || /\.html?$/.test(url.pathname);
  if(isPage){
    event.respondWith(fetch(event.request).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(event.request,copy)).catch(()=>{}); return res; }).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(res => { const copy=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(event.request,copy)).catch(()=>{}); return res; }).catch(()=>caches.match('./index.html'))));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './admin/index.html#orders';
  event.waitUntil(clients.matchAll({type:'window', includeUncontrolled:true}).then(list => {
    for (const client of list) {
      if (client.url.includes('/admin/')) return client.focus().then(() => client.navigate ? client.navigate(target) : client);
    }
    return clients.openWindow(target);
  }));
});

// FINAL_CLIENT_SMOOTH_20260627

// CLIENT_UPLOAD_FINAL_20260627
