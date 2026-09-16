<div align="center">

<img src="https://media.brand.dev/9f662c89-af95-4704-a6e5-0650b89f6b9f.svg" alt="Compressius Maximus (CMX) logo" width="96" height="96" />

# Compressius Maximus (CMX)

**Cut your AI coding bill. Keep your context. Change nothing else.**

CMX is a free, local **context-compression gateway** for AI coding agents. It sits between your agent and your model provider, summarizes the repetitive history your agent resends every turn, and forwards a leaner request — so you pay for fewer input tokens without changing how you code.

[![Website](https://img.shields.io/badge/website-compressi.us-e14e68?style=for-the-badge&logo=googlechrome&logoColor=white)](https://compressi.us)
[![Docs](https://img.shields.io/badge/docs-docs.compressi.us-8c51fc?style=for-the-badge&logo=readthedocs&logoColor=white)](https://docs.compressi.us)
[![npm](https://img.shields.io/npm/v/@compressius/cmx?style=for-the-badge&label=npm&color=cb3837&logo=npm&logoColor=white)](https://www.npmjs.com/package/@compressius/cmx)
[![Downloads](https://img.shields.io/npm/dw/@compressius/cmx?style=for-the-badge&color=8727fc)](https://www.npmjs.com/package/@compressius/cmx)
[![Free Forever](https://img.shields.io/badge/pricing-free%20forever-e14e68?style=for-the-badge)](https://compressi.us/#pricing)
[![Platforms](https://img.shields.io/badge/platforms-Linux%20%7C%20macOS%20%7C%20Windows%20%7C%20x64%20%7C%20ARM64-8c51fc?style=for-the-badge)](https://docs.compressi.us/installation)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-e14e68?style=for-the-badge)](#contributing)

[Website](https://compressi.us) · [Documentation](https://docs.compressi.us) · [Install](https://compressi.us/downloads) · [FAQ](https://compressi.us/faq) · [Changelog](https://compressi.us/changelog) · [Releases](https://github.com/compressius/cmx/releases)

</div>

---

## Table of Contents

- [Why CMX?](#why-cmx)
- [Quickstart](#quickstart)
- [How CMX compares](#how-cmx-compares)
- [Features](#features)
- [Supported agents and providers](#supported-agents-and-providers)
- [How it works](#how-it-works)
- [CLI at a glance](#cli-at-a-glance)
- [FAQ](#faq)
- [About this docs repository](#about-this-docs-repository)
- [More free developer resources](#more-free-developer-resources)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

---

## Why CMX?

Every message you send to an AI coding agent carries the entire conversation with it: earlier attempts, resolved errors, and turns the model no longer needs word-for-word. That running history — the **context** — is measured in **tokens**, the small chunks of text model providers bill you for. Because a long session resends more history on every turn, your input costs keep growing even when you are still working on the same file.

Most tools that attack this problem drop context on a fixed schedule, which can delete something important or trim nothing at all. CMX takes a different approach:

- **Your model proposes the summarization.** Once a session grows past a configurable threshold, CMX asks your model to summarize eligible older turns.
- **A deterministic gateway policy checks every proposal** before anything is applied — protected tool calls, recent context, opaque content, and estimated net token savings.
- **Nothing changes unless it pays off.** If a proposal fails any check, the original request is forwarded untouched.
- **Everything runs on your machine.** The gateway listens only on `127.0.0.1:17322`, and your prompts, code, and responses never touch CMX servers.

Your agent keeps working exactly as it does today, against the provider you already use — with a smaller payload for the same long sessions.

## Quickstart

Install CMX, pair your device, and connect your coding agent in under a minute.

**1. Install CMX.** The npm and pnpm methods require **Node.js 18 or later**. The standalone installer is self-contained.

```bash
# npm
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

**2. Run the guided setup.** This opens a browser sign-in, starts the local gateway, detects supported coding agents, and connects the one you choose.

```bash
cmx setup
```

**3. Verify the connection.** Restart your coding agent so it picks up the gateway address, then confirm requests are flowing:

```bash
cmx harness verify
```

**4. Watch your savings.**

```bash
cmx stats
```

Every download is verified with a SHA-256 checksum. Prefer a graphical installer? Grab the `.exe` from the [downloads page](https://compressi.us/downloads), or see the full platform matrix in the [installation docs](https://docs.compressi.us/installation).

> Short sessions often show little or no savings. CMX only compresses once a session crosses the configured threshold (default: 32,000 tokens), and the estimated net saving must be positive before a summary is applied. Run a longer, repetitive session to see compression take effect.

## How CMX compares

What changes when a local gateway trims repeated context for you:

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

*Based on CMX's public documentation as of September 2026; corrections welcome via issue or pull request.*

## Features

- **Free forever.** No subscriptions, no paid plans, no trials. A free account is required to pair your device.
- **Verified setup for Codex and OpenCode.** Connect either agent with automatic harness setup — the local configuration that routes your agent through CMX.
- **Works with any OpenAI- or Anthropic-compatible agent.** If a tool accepts a custom base URL (an endpoint URL you can point at `127.0.0.1:17322`) and speaks OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages, it can route through the gateway.
- **Local by default.** Prompts, code, and responses never touch CMX servers; only signed aggregate counters reach your dashboard.
- **Model-directed compression.** Your model proposes summaries, and a deterministic gateway policy verifies every proposal before it is applied.
- **Protected tool calls.** `task`, `skill`, `write`, and `edit` calls and their results are never compressed.
- **Savings you can see.** Track tokens handled, estimated net savings, and cache reads with `cmx stats`, the terminal UI, and the web dashboard.

## Supported agents and providers

| Integration | Status | Setup guide |
|---|---|---|
| **Codex** | Verified, automatic harness setup | [Codex guide](https://docs.compressi.us/providers/codex) |
| **OpenCode** | Verified, per-provider connection | [OpenCode guide](https://docs.compressi.us/providers/opencode) |
| **Any OpenAI Chat Completions client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |
| **Any OpenAI Responses client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |
| **Any Anthropic Messages client** | Custom base URL | [Custom agents](https://docs.compressi.us/providers/custom-agents) |

Provider credentials live in memory, are never written to disk, and are never seen by CMX servers. See the [security overview](https://docs.compressi.us/security).

## How it works

```text
┌──────────────────┐        ┌───────────────────────┐        ┌───────────────────┐
│  AI coding agent │  ───▶  │  CMX local gateway    │  ───▶  │  Your model       │
│  Codex/OpenCode  │        │  127.0.0.1:17322      │        │  provider         │
└──────────────────┘        │  • policy checks      │        └───────────────────┘
                            │  • summary cache      │
                            │  • runs on device     │
                            └───────────────────────┘
```

1. **Your agent sends a request** to the local CMX gateway exactly as before.
2. **CMX checks the session size.** Below the configured threshold, requests pass through untouched.
3. **Once a session is large enough,** CMX asks your model to summarize eligible older turns.
4. **Gateway policy validates the proposal** — protected tool calls, recent-context preservation, opaque content, and estimated net token savings.
5. **Approved summaries are applied and cached** for future requests in the same session.
6. **Rejected or failed proposals change nothing** — the original request is forwarded as-is.

Read the full breakdown in [How Compression Works](https://docs.compressi.us/how-compression-works).

## CLI at a glance

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

## FAQ

**Is CMX really free?**
Yes. There are no subscriptions or paid plans. Your model provider's normal usage charges still apply.

**Do I need an account?**
Yes. There is no guest mode — signing in pairs your device with the dashboard. Creating an account is free.

**Where does my data go?**
Three places only: **your device** (session state, compression decisions, and credentials — keys are held in memory and never written to disk), **your configured model provider** (prompts and responses, exactly as before), and **CMX services** (signed aggregate counters such as tokens processed and saved — never prompts, code, or responses).

**Will CMX always reduce my bill?**
No. Savings depend on your workload, session length, compression overhead, and your provider's caching. CMX applies a summary only when its cost checks estimate a net saving, but a lower bill is never guaranteed.

**Does compression remove information?**
Yes — summarization is lossy. CMX reduces the risk by keeping recent turns intact, never compressing protected tool calls or their results, and excluding opaque content from compression proposals.

**Why do I see little or no savings in short sessions?**
Compression activates only above the configured minimum (default: 32,000 tokens), and the net saving must be positive before a summary is applied. Long, repetitive sessions — iterating on the same file or debugging the same error — benefit most.

More answers in the [full FAQ](https://compressi.us/faq).

## About this docs repository

This repo is the source of truth for the **CMX documentation site**, built with [Mintlify](https://mintlify.com) and published at [docs.compressi.us](https://docs.compressi.us). It contains the site configuration (`docs.json`), the MDX pages that make up the docs, and a mirror of the compressi.us marketing content under `sources/site/`.

Preview the site locally:

```bash
npm i -g mint   # install the Mintlify CLI
mint dev        # preview at http://localhost:3000
```

Run `mint update` if the preview fails, and make sure you run it from the folder containing `docs.json`. Pushes to the default branch deploy to production automatically.

| Path | Contents |
|---|---|
| `docs.json` | Site configuration, navigation, theme, branding |
| `introduction.mdx`, `quickstart.mdx`, `installation.mdx`, `uninstall.mdx` | Get started pages |
| `configuration.mdx`, `providers/` | Gateway settings and agent setup guides |
| `how-compression-works.mdx`, `understanding-savings.mdx` | How compression and the metrics work |
| `cli-reference.mdx` | Every `cmx` command, flag, and example |
| `security.mdx`, `faq.mdx`, `troubleshooting.mdx`, `updates.mdx`, `changelog.mdx` | Privacy model, common questions, diagnostics, releases |
| `sources/site/` | Mirrored copy of the compressi.us site content |

## More free developer resources

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

The CMX product is released under the Proprietary Gratis License — free to use, no cost, no subscription. See the [EULA](https://compressi.us/eula) and [Terms of Service](https://compressi.us/terms). The documentation site source in this repository is provided under the MIT License in [LICENSE](LICENSE).

---

<div align="center">

**Compressius Maximus (CMX)** — maximum context, minimum tokens.

*AI context compression · reduce AI API costs · token savings for Codex, OpenCode, OpenAI, and Anthropic · free WordPress hosting in Europe · free OpenAI-compatible LLM API*

[compressi.us](https://compressi.us) · [WPinEU.com](https://www.wpineu.com) · [LLM.kiwi](https://llm.kiwi)

</div>
