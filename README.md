# zen-proxy

Minimal reverse proxy that strips `Authorization` headers before forwarding requests upstream. Useful when a client insists on sending a Bearer token but the target API rejects it.

Zero dependencies. Single file. Node 18+.

```
TARGET_URL=https://upstream.example.com/api PORT=8090 node server.mjs
```

Or copy `.env.example` to `.env` and use your preferred env loader.
