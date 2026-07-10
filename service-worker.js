const CACHE_NAME = 'kaliaff-codex-final-20260628-1800';
const ASSETS=['./','./index.html','./admin/index.html','./manifest.json','./logo.jpg','./kaliaff.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).catch(()=>Promise.resolve()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;if(e.request.destination==='video'||/\.(mp4|webm|mov)(\?|$)/i.test(u.pathname)||e.request.headers.has('range'))return;const isPage=e.request.mode==='navigate'||e.request.destination==='document'||/\.html?$/.test(u.pathname);if(isPage){e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp)).catch(()=>{});return res}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));return;}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp)).catch(()=>{});return res}).catch(()=>caches.match('./index.html'))))});
self.addEventListener('notificationclick',e=>{e.notification.close();const target=(e.notification.data&&e.notification.data.url)||'./admin/index.html#orders';e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if(c.url.includes('/admin/'))return c.focus().then(()=>c.navigate?c.navigate(target):c)}return clients.openWindow(target)}))});

// FINAL_CLIENT_SMOOTH_20260627

// CLIENT_UPLOAD_FINAL_20260627
