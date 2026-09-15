# Source: https://compressi.us/faq

## What is Compressius Maximus?

Compressius Maximus (CMX) is a free tool for AI coding agents. It runs a local gateway that compresses the context your agent sends to your model provider. Requests pass through unchanged until a session grows large enough to be worth compressing.

## Is CMX free?

Yes. Compressius Maximus is free to use, with no subscriptions or paid plans. Your model provider's normal usage charges still apply.

## How does CMX reduce token usage?

Once a session passes the configured minimum size, CMX asks your model to summarize eligible older context. CMX checks each proposal for protected calls, estimated savings, and recent-context preservation, then applies accepted summaries to later requests.

## Which coding agents and model providers work with CMX?

Codex and OpenCode are verified coding agents. Other tools work if they accept a custom API base URL and speak OpenAI Chat Completions, OpenAI Responses, or Anthropic Messages. The [compatibility guide](https://compressi.us/docs#harness-setup) lists verified setups and known limitations.

## Does compression remove information?

Yes. Summarization is lossy, so a summary can omit details the model did not include. CMX reduces the risk by preserving recent context, by never summarizing protected tool calls or their results, and by excluding opaque content such as reasoning blocks from compression proposals.

## Where does my data go?

On your device: session state, compression decisions, aggregate counters, and provider credentials, which are kept in memory and never written to disk. To your configured model provider: prompts, context, and responses, sent as normal operation, where compression changes what is sent rather than where it goes. To CMX services: signed aggregate usage counters for authenticated accounts, never prompts, responses, code, or session content.

## Do I need an account?

Yes. CMX requires an account, and there is no guest mode. Signing in pairs your device with the dashboard. Creating an account is free.

## Will CMX always reduce my API bill?

No. Savings depend on your workload, session length, compression overhead, and your provider's caching. CMX approves compression only when its cost checks estimate a net saving, but a lower bill is never guaranteed.

Still stuck? Read the [documentation](https://compressi.us/docs) or [contact us](https://compressi.us/contact).