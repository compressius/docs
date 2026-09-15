# Source: https://compressi.us/

Estimated tokens saved33,248,928Global, all-time estimate across all CMX devices

# Reduce AI 
token usage. 
Spend less.

Compressius Maximus is a free tool that compresses the context your AI coding agent sends to your model provider. Keep coding with your familiar tools, while CMX reduces repeated context in the background.

[Install CMX — it's free](https://compressi.us/#install) [View documentation](https://compressi.us/docs)

`$ npm install --global @compressius/cmx`Copy

[More install options](https://compressi.us/downloads)Free to use. No CMX subscriptions or paid plans.

terminal

→~cmx setup

✓Detecting coding agents...

✓Starting local gateway...

✓Connecting Codex...

Ready

gateway127.0.0.1:17322

compressionactive

Works with your coding agents and providers

Codex

OpenCode

OpenAI

Anthropic

Claude

Capabilities

## Built for long coding sessions

Purpose-built primitives for keeping context small without losing the thread.

### Context that stops growing

Eligible older turns are summarized once the session passes your configured minimum.

session context

### Model-directed compression

Your model proposes a summary. CMX policy checks protected calls, estimated savings, and recent-context preservation before anything is applied.

0 prompts stored

CMX servers only ever receive aggregate counters.

### Protected tool calls

task, skill, write, and edit calls and their results are never compressed.

OpenAI · Anthropic

### Works with Codex & OpenCode

Both are verified today. Any client speaking OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages can connect with a custom base URL.

### See what you saved

Net compression, tokens handled, and requests served, per day, in your dashboard.

### Your provider stays yours

CMX routes to the provider you already use. Credentials live in memory and are never written to disk.

### Local by default

The gateway runs on your machine at 127.0.0.1:17322. Prompts and responses never touch CMX servers.

How it works

## From install to quieter requests

01

### Install and pair

Run the installer, sign in, and pair this device. Setup starts the local gateway and can connect Codex automatically.

02

### Keep coding

Your agent talks to 127.0.0.1:17322 exactly as before. Recent turns, protected tools, and opaque content stay untouched.

03

### Context shrinks when it pays

Once a session is large enough, CMX applies policy-checked summaries, only when the estimate shows a net saving.

cmx.config.toml

```
# CMX gateway configuration
port = 17322
min_context_tokens = 32000
preserve_tail_tokens = 12000
protected_tools = ["task", "skill", "wri
client = ""
provider = ""
```

Get started

## Install in under a minute

CMX runs on your machine, pairs with your account, and connects your coding agent without changing your provider.

Free to use, with no subscriptions or paid plans

Works with Codex and OpenCode

Runs locally on your machine

[Install CMX — it's free](https://compressi.us/#install)

Start here

## Install CMX your way.

Choose your operating system and install method. Copy the command and run it in your terminal.

Latest stable[Release details unavailable · view releases](https://github.com/compressius/cmx/releases)

LinuxMacWindows

curlnpmpnpm

Copy

```
$ curl -sSfL https://compressi.us/install.sh | sh
```

**Linux**No Node.js required.

Installing the binary is the first step. Sign in and connect a supported coding agent before requests flow through CMX. The [quick start guide](https://compressi.us/docs#quick-start) walks through both.

[View all downloads →](https://compressi.us/downloads)

Comparison

## Why compress instead of starting over

What changes when a local gateway trims repeated context for you.

| Feature | CMX | No compression | Manual /compact |
| --- | --- | --- | --- |
| Automatic trimming of repeated context | 
 | 

 | 

 |
| Keeps recent turns intact | 

 | 

 | 

 |
| Protected tool calls never touched | 

 | 

 | 

 |
| Model-directed summaries | 

 | 

 | 

 |
| Policy checks before applying | 

 | 

 | 

 |
| Runs locally on your machine | 

 | 

 | 

 |
| Your provider stays unchanged | 

 | 

 | 

 |
| Savings visibility | 

 | 

 | 

 |

Pricing

## Free, and staying free

CMX is free to use. Your model provider's normal usage charges still apply.

Free forever

### CMX

$0/ forever

Everything CMX does, for every user.

[Install CMX — it's free](https://compressi.us/#install)

- Unlimited local compression
- Codex and OpenCode setup
- Token savings dashboard
- Aggregate leaderboard
- Free account required for pairing
- No subscriptions or paid plans

FAQ

## Frequently asked questions

What is Compressius Maximus?

Compressius Maximus (CMX) is a free tool for AI coding agents. It runs a local gateway that compresses the context your agent sends to your model provider. Requests pass through unchanged until a session grows large enough to be worth compressing.

Is CMX free?

Yes. Compressius Maximus is free to use, with no subscriptions or paid plans. Your model provider's normal usage charges still apply.

How does CMX reduce token usage?

Once a session passes the configured minimum size, CMX asks your model to summarize eligible older context. CMX checks each proposal for protected calls, estimated savings, and recent-context preservation, then applies accepted summaries to later requests.

Which coding agents and model providers work with CMX?

Codex and OpenCode are verified coding agents. Other tools work if they accept a custom API base URL and speak OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages. The [compatibility guide](https://compressi.us/docs#harness-setup) lists verified setups and known limitations.

Where does my data go?

Session state, compression decisions, aggregate counters, and provider credentials stay on your device; credentials are kept in memory and never written to disk. Prompts and responses go only to your configured model provider. CMX services receive signed aggregate usage counters for authenticated accounts, never prompts, responses, code, or session content.

Will CMX always reduce my API bill?

No. Savings depend on your workload, session length, compression overhead, and your provider's caching. CMX approves compression only when its cost checks estimate a net saving, but a lower bill is never guaranteed.

Still have questions? [Read all FAQs](https://compressi.us/faq)

Free to use

## Get started with CMX for free

Install CMX, complete setup, and connect your supported coding agent.

[Install CMX — it's free](https://compressi.us/#install) [Read the docs](https://compressi.us/docs)

No subscriptions · Free account required · Works with Codex and OpenCode