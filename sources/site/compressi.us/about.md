# Source: https://compressi.us/about

## Why CMX exists

Long coding sessions accumulate enormous context. Most of it is valuable, but a large portion is repetitive history: superseded attempts, resolved errors, and earlier turns that the model no longer needs verbatim. Every request that carries that history pays for it in input tokens.

Most compression tools guess at what to drop using heuristics. CMX takes a different approach: it lets the model itself propose what can be folded away, then applies a deterministic gateway policy to decide whether the proposal is safe and economical.

## How it works

1. CMX runs as a local proxy on `127.0.0.1` between your coding agent and your model provider.
2. When a request crosses the configured context threshold, CMX asks the model for a factual summary of an eligible earlier span.
3. Gateway policy verifies the proposal before replacing anything. System instructions, recent context, protected tool calls, opaque content, and complete tool exchanges are always preserved.
4. Summaries are cached in memory, scoped to the upstream, model, and source content. Failed or invalid summaries leave the original request untouched.

## Local-first by design

CMX is built so that the sensitive parts never leave your machine. Prompts, source code, and model responses are processed locally. The optional cloud dashboard receives only signed aggregate counters, never content. You can read the details on the [Privacy Policy](https://compressi.us/privacy) and [Security](https://compressi.us/security) pages.

## Built for real coding agents

CMX works with Codex, OpenCode, Cline, and any agent that speaks the OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages protocols. Native provider endpoints that CMX does not transform are passed through unchanged.

## The name

**Compressius Maximus** is a small joke dressed as a formal title: the greatest compressor. The short form, **CMX**, is what you will type at the command line.

## Questions

Read the [FAQ](https://compressi.us/faq), browse the [documentation](https://compressi.us/docs), or reach us at [hello@compressi.us](mailto:hello@compressi.us).