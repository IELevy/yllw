# yllw

A themed Scramjet proxy shell served by [yllw.svg](yllw.svg). Navigation stays inside the embedded iframe, so the browser address bar does not change.

## Local startup

Install dependencies once:

```sh
npm install
```

Start the personal Bare server in one terminal:

```sh
npm run bare
```

Start the static server in another terminal:

```sh
npm start
```

Open `http://localhost:4173/yllw.svg` and enter a URL. The default Bare endpoint is `http://localhost:8080/`.

Use **Settings** in the School library menu to connect to a different Bare server. The selected server is saved in browser storage and used on later visits.

For development in GitHub Codespaces, start Bare on port `8080`, then open the proxy with `?debug=1` (for example, `https://<codespace>-4173.app.github.dev/yllw.svg?debug=1`). Debug mode connects to the forwarded Bare endpoint at `https://<codespace>-8080.app.github.dev/`.

The Bare endpoint should return a JSON status document listing protocol `v3`. If startup reports an HTTP error or a timeout, check that port `8080` is running and forwarded in the Codespaces **Ports** tab, and that its visibility allows your browser to access it.

## Remote deployment

Deploy [yllw.svg](yllw.svg), `sw.js`, and `scramjet/` together over HTTPS. Run a Bare server on a public HTTPS origin and change `bareServer` in [yllw.svg](yllw.svg) to that origin. The SVG and Bare server may use different origins only when the Bare server sends permissive CORS headers.

Service workers are unavailable on insecure non-local origins.
