const CACHE = "qinglong-vocab-v13";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./data.js", "./data-en.js", "./data-en-ielts.js", "./data-en-toefl.js", "./data-en-trip.js", "./data-en-biz.js", "./data-ja.js", "./data-ja-jlpt.js", "./data-ko.js", "./data-ko-topik.js", "./data-th.js", "./data-ms.js", "./data-ms-adv.js", "./data-id.js", "./data-id-adv.js", "./data-id-extra.js", "./data-es.js", "./data-fr.js", "./data-de.js", "./kana.html", "./kana.css", "./kana.js", "./kana-data.js", "./fonts/noto-sans-thai-400.woff2", "./fonts/noto-sans-kr-400.woff2", "./fonts/noto-sans-thai-600.woff2", "./manifest.json", "./icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
