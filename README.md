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

## Remote deployment

Deploy [yllw.svg](yllw.svg), `sw.js`, and `scramjet/` together over HTTPS. Run a Bare server on a public HTTPS origin and change `bareServer` in [yllw.svg](yllw.svg) to that origin. The SVG and Bare server may use different origins only when the Bare server sends permissive CORS headers.

Service workers are unavailable on insecure non-local origins.
