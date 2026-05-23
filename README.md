# zen-proxy

Minimal reverse proxy that strips `Authorization` headers before forwarding requests upstream. Useful when a client insists on sending a Bearer token but the target API rejects it.

Zero dependencies. Single file. Node 18+.

```
TARGET_URL=https://upstream.example.com/api PORT=8090 node server.mjs
```

Or copy `.env.example` to `.env` and use your preferred env loader.

---

## Part of the Libre Open-Source Stack for Claude Code

This repository is part of a growing family of open-source toolkits for Claude Code, each focused on a specific lane:

- [LibreUIUX-Claude-Code](https://github.com/HermeticOrmus/LibreUIUX-Claude-Code) — UI/UX system (152 agents, 70 plugins, 76 commands, 74 skills)
- [LibreGEO-Claude-Code](https://github.com/HermeticOrmus/LibreGEO-Claude-Code) — AI-search optimization for ChatGPT, Perplexity, Gemini, Google AI Overviews
- [LibreEmbed-Claude-Code](https://github.com/HermeticOrmus/LibreEmbed-Claude-Code) — Embedded systems, firmware, and IoT development
- [LibreGameDev-Claude-Code](https://github.com/HermeticOrmus/LibreGameDev-Claude-Code) — Game development across Godot, Unity, Unreal
- [LibreFinTech-Claude-Code](https://github.com/HermeticOrmus/LibreFinTech-Claude-Code) — Financial technology development

Star the family, not just one — that's how the suite stays coherent.
