importScripts("./scramjet/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (!scramjet.route({ request: event.request })) return;
  event.respondWith(scramjet.fetch({
    request: event.request,
    clientId: event.clientId
  }));
});
