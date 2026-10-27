importScripts("./scramjet/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const databaseReady = new Promise((resolve, reject) => {
  const request = indexedDB.open("$scramjet-v2", 1);

  request.addEventListener("upgradeneeded", () => {
    const database = request.result;
    for (const store of ["config", "cookies", "redirectTrackers", "referrerPolicies", "publicSuffixList"]) {
      if (!database.objectStoreNames.contains(store)) database.createObjectStore(store);
    }
  });
  request.addEventListener("success", () => {
    request.result.close();
    resolve();
  });
  request.addEventListener("error", () => reject(request.error));
});

const scramjet = databaseReady.then(() => new ScramjetServiceWorker());

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  event.respondWith(scramjet.then(async (instance) => {
    if (!instance.route({ request: event.request })) return fetch(event.request);
    return instance.fetch({
      request: event.request,
      clientId: event.clientId
    });
  }));
});
