/* The Round — offline app shell.
   Cache-first for the shell; runtime-caches same-origin GETs and opaque
   cross-origin responses (Google Fonts) so the app works offline after the
   first online visit. Bump CACHE to invalidate. */
var CACHE = "the-round-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // allSettled: a single missing asset must not abort the whole install
      return Promise.allSettled(ASSETS.map(function(a){ return c.add(a); }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; })
                             .map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  e.respondWith((async function(){
    var cached = await caches.match(req);
    if(cached) return cached;
    try{
      var res = await fetch(req);
      if(res && (res.status === 200 || res.type === "opaque")){
        var c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    }catch(err){
      if(req.mode === "navigate"){ return caches.match("./index.html"); }
      return Response.error();
    }
  })());
});
