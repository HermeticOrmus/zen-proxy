// Minimal reverse proxy that strips Authorization headers from proxied requests.
// Useful when a client always sends a Bearer token but the upstream API rejects it.

import http from "node:http";
import https from "node:https";

const TARGET_URL = process.env.TARGET_URL || "https://example.com/api";
const PORT = parseInt(process.env.PORT || "8090", 10);

const parsed = new URL(TARGET_URL);
const BASE = `${parsed.protocol}//${parsed.host}`;
const BASE_PATH = parsed.pathname.replace(/\/$/, "");
const useHttps = parsed.protocol === "https:";

const server = http.createServer((req, res) => {
  const url = new URL(BASE_PATH + req.url, BASE);

  const headers = { ...req.headers };
  delete headers.authorization;
  delete headers.host;
  headers.host = url.hostname;

  const transport = useHttps ? https : http;
  const proxy = transport.request(url, {
    method: req.method,
    headers,
  }, (upstream) => {
    res.writeHead(upstream.statusCode, upstream.headers);
    upstream.pipe(res);
  });

  proxy.on("error", (err) => {
    console.error("Proxy error:", err.message);
    res.writeHead(502).end("Bad Gateway");
  });

  req.pipe(proxy);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Proxy listening on http://127.0.0.1:${PORT} -> ${TARGET_URL}`);
});
