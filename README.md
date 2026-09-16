<div align="center">

<img src="https://media.brand.dev/9f662c89-af95-4704-a6e5-0650b89f6b9f.svg" alt="Compressius Maximus (CMX) logo" width="96" height="96" />

# Compressius Maximus (CMX)

**Cut your AI coding bill. Keep your context. Change nothing else.**

CMX is a free, local context-compression gateway for AI coding agents. It sits between your agent and your model provider, summarizes the repetitive history your agent resends every turn, and forwards a leaner payload to your provider — so you pay for fewer input tokens without changing how you code.

[![Website](https://img.shields.io/badge/website-compressi.us-e14e68?style=for-the-badge&logo=googlechrome&logoColor=white)](https://compressi.us)
[![Docs](https://img.shields.io/badge/docs-docs.compressi.us-8c51fc?style=for-the-badge&logo=readthedocs&logoColor=white)](https://docs.compressi.us)
[![npm](https://img.shields.io/npm/v/@compressius/cmx?style=for-the-badge&label=npm&color=cb3837&logo=npm&logoColor=white)](https://www.npmjs.com/package/@compressius/cmx)
[![Downloads](https://img.shields.io/npm/dw/@compressius/cmx?style=for-the-badge&color=8727fc)](https://www.npmjs.com/package/@compressius/cmx)
[![Free Forever](https://img.shields.io/badge/pricing-free%20forever-e14e68?style=for-the-badge)](https://compressi.us/#pricing)
[![Platforms](https://img.shields.io/badge/platforms-Linux%20%7C%20macOS%20%7C%20Windows%20%7C%20x64%20%7C%20ARM64-8c51fc?style=for-the-badge)](#install)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-e14e68?style=for-the-badge)](#contributing)

[Website](https://compressi.us) · [Documentation](https://docs.compressi.us) · [Install](https://compressi.us/downloads) · [FAQ](https://compressi.us/faq) · [Changelog](https://compressi.us/changelog) · [Releases](https://github.com/compressius/cmx/releases)

</div>

---

## What is Compressius Maximus?

**Compressius Maximus (CMX)** is a free developer tool that reduces AI token usage for long coding sessions. It runs a local proxy on your machine at `127.0.0.1:17322`, watches the context your AI coding agent sends to your model provider, and compresses the parts the model no longer needs word-for-word: superseded attempts, resolved errors, and stale back-and-forth history.

- **Free forever** — no subscriptions, no paid plans, no trials. Optional free account required for device pairing.
- **Context compression for Codex and OpenCode** — verified integrations with automatic harness setup.
- **Works with any OpenAI- or Anthropic-compatible agent** — anything that accepts a custom base URL and speaks OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages.
- **Local by default** — prompts, code, and responses never touch CMX servers. Only signed aggregate counters reach the optional cloud dashboard.
- **Model-directed compression** — your model proposes summaries; deterministic gateway policy verifies every proposal before it is applied.
- **Protected tool calls** — `task`, `skill`, `write`, and `edit` calls and their results are never compressed.
- **Savings you can see** — token savings dashboard, `cmx stats`, and an aggregate leaderboard.

> CMX is free to use. Your model provider's normal usage charges still apply.

---

## Install CMX in under a minute

```bash
# npm (Node.js 18+)
npm install --global @compressius/cmx

# pnpm
pnpm add --global @compressius/cmx

# Standalone binary — Linux / macOS, no Node.js required
curl -sSfL https://compressi.us/install.sh | sh
```

```powershell
# Windows (PowerShell) — no Node.js required
iwr -useb https://compressi.us/install.ps1 | iex
```

Then sign in, pair your device, and connect your coding agent:

```bash
cmx setup        # browser sign-in, gateway startup, agent connection
cmx harness verify
cmx stats        # watch the tokens you are saving
```

Every download is verified with a SHA-256 checksum. Prefer a graphical installer? Grab the `.exe` from the [downloads page](https://compressi.us/downloads). Full platform matrix in [installation docs](https://docs.compressi.us/installation).

---

## How CMX works

```text
┌──────────────────┐        ┌───────────────────────┐        ┌───────────────────┐
│  AI coding agent │  ───▶  │  CMX local gateway    │  ───▶  │  Your model       │
│  Codex/OpenCode  │        │  127.0.0.1:17322      │        │  provider         │
└──────────────────┘        │  • policy checks      │        └───────────────────┘
                            │  • summary cache      │
                            │  • nothing leaves     │
                            └───────────────────────┘
```

1. **Your agent sends a request** to the local CMX gateway exactly as before.
2. **CMX checks session size.** Below the configured threshold, requests pass through untouched.
3. **Once a session is large enough**, CMX asks your model to summarize eligible older turns.
4. **Gateway policy validates the proposal** — protected tool calls, recent-context preservation, opaque content, and estimated net token savings.
5. **Approved summaries are applied and cached** for future requests in the same session.
6. **Rejected or failed proposals change nothing** — the original request is forwarded as-is.

Read the full breakdown in [How Compression Works](https://docs.compressi.us/how-compression-works).

### Why compress instead of starting over

| Capability | CMX | No compression | Manual `/compact` |
|---|---|---|---|
| Automatic compression of repeated context | Yes | No | Manual |
| Keeps recent turns intact | Yes | No | Varies |
| Protected tool calls never touched | Yes | No | No |
| Model-directed summaries | Yes | No | Yes |
| Policy checks before applying | Yes | No | No |
| Runs locally on your machine | Yes | Yes | Yes |
| Your provider stays unchanged | Yes | Yes | Yes |
| Savings visibility | Yes | No | No |

---

## Supported agents and providers

| Integration | Status | Setup guide |
|---|---|---|
| **Codex** | Verified, automatic harness setup | [Codex guide](https://docs.compressi.us/providers/codex) |
| **OpenCode** | Verified, per-provider connection | [OpenCode guide](https://docs.compressi.us/providers/opencode) |
| **Any OpenAI Chat Completions client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |
| **Any OpenAI Responses client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |
| **Any Anthropic Messages client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |

Provider credentials live in memory, are never written to disk, and are never seen by CMX servers. See the [security overview](https://docs.compressi.us/security).

---

## This repository

This repo is the source of truth for the **CMX documentation site**, built with [Mintlify](https://mintlify.com) and published at **[docs.compressi.us](https://docs.compressi.us)**.

| Path | Contents |
|---|---|
| `docs.json` | Site configuration, navigation, theme, branding |
| `index.mdx` | Documentation home page |
| `introduction.mdx` | What CMX is and the problem it solves |
| `quickstart.mdx` | Install, pair, connect, verify |
| `installation.mdx` / `uninstall.mdx` | Every install method and the full-purge guide |
| `configuration.mdx` | Thresholds, gateway policy, `cmx.config.toml` |
| `providers/` | Codex, OpenCode, and custom agent setup |
| `how-compression-works.mdx` | The model-directed compression pipeline |
| `understanding-savings.mdx` | Reading your token savings correctly |
| `cli-reference.mdx` | Every `cmx` command, flag, and example |
| `security.mdx` / `faq.mdx` | Privacy model and common questions |
| `troubleshooting.mdx` / `updates.mdx` / `changelog.mdx` | Diagnostics, upgrades, release notes |
| `sources/site/` | Mirrored copy of the compressi.us marketing site content |

### Preview the docs locally

```bash
npm i -g mint     # install the Mintlify CLI
mint dev          # preview at http://localhost:3000
```

Run `mint update` if the preview fails, and make sure you run it from the folder containing `docs.json`. Pushes to the default branch deploy to production automatically.

---

## CMX CLI at a glance

```bash
cmx setup                # sign in, start the gateway, connect your agent
cmx stats                # today's tokens handled, estimated savings, cache rates
cmx status --json        # machine-readable gateway status
cmx harness list         # detected coding agents on this machine
cmx harness verify       # confirm connections are valid and reachable
cmx doctor               # diagnose configuration and connectivity issues
cmx dashboard            # open the web token-savings dashboard
cmx upgrade --install    # update to the latest release
cmx sessions purge       # remove expired local session data
cmx logout               # sign out and clear local credentials
```

The complete reference lives in the [CLI docs](https://docs.compressi.us/cli-reference).

---

## More free resources from the same network

CMX is part of a small family of free, developer-first tools. If CMX saves you tokens, these will save you money elsewhere — no catch, no credit card.

<div align="center">

| Resource | What it gives you | Start here |
|---|---|---|
| **[compressi.us](https://compressi.us)** | Compressius Maximus itself — free AI context compression that cuts token usage and API costs for Codex, OpenCode, and any OpenAI/Anthropic-compatible agent. | [Install CMX](https://compressi.us/downloads) |
| **[WPinEU.com](https://www.wpineu.com)** | Free WordPress hosting in Europe for EU residents — cPanel, LiteSpeed, NVMe SSD storage, free SSL, daily JetBackup backups, 150+ one-click apps, and no forced ads. | [Get started free](https://clients.wpineu.com/order/free-wordpress-hosting) |
| **[LLM.kiwi](https://llm.kiwi)** | Free OpenAI-compatible LLM API endpoint at `api.llm.kiwi` — create a key, use `model="auto"`, and let smart routing pick a flagship model for every request. | [Get a free API key](https://llm.kiwi/login) |

</div>

### Pair them together

- Run your **coding agent through CMX** to shrink input tokens, and point it at an **LLM.kiwi API key** to keep experimentation free while CMX reductions still apply.
- Publish what you build on **free WPinEU hosting** with a real cPanel and LiteSpeed stack, then write about it in the [WPinEU learning portal](https://wp.wpineu.com/).

---

## Contributing

Found an error in the docs, a broken link, or a command that no longer matches the CLI? Issues and pull requests are welcome:

1. Fork this repository.
2. Edit or add the relevant `.mdx` files and preview with `mint dev`.
3. Open a pull request describing what changed and why.

For product bugs and feature requests, use the [CMX issue tracker](https://github.com/compressius/cmx/issues).

## Support

- Documentation: [docs.compressi.us](https://docs.compressi.us)
- FAQ: [compressi.us/faq](https://compressi.us/faq)
- Security and privacy: [compressi.us/security](https://compressi.us/security)
- Service status: [compressi.us/status](https://compressi.us/status)
- Email: [hello@compressi.us](mailto:hello@compressi.us)

## License

The CMX product is released under the Proprietary Gratis License — free to use, no cost, no subscription. See the [EULA](https://compressi.us/eula) and [Terms of Service](https://compressi.us/terms). The Mintlify documentation template in this repository is provided under the MIT License in [LICENSE](LICENSE).

---

<div align="center">

**Compressius Maximus (CMX)** — maximum context, minimum tokens.

*AI context compression · reduce AI API costs · token savings for Codex, OpenCode, OpenAI, and Anthropic · free WordPress hosting in Europe · free OpenAI-compatible LLM API*

[compressi.us](https://compressi.us) · [WPinEU.com](https://www.wpineu.com) · [LLM.kiwi](https://llm.kiwi)

</div>
