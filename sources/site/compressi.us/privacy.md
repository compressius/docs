# Source: https://compressi.us/privacy

In short: your prompts, code, and model responses go only to the provider you choose. CMX services cannot read them. The only information that reaches our servers is a small set of signed aggregate counters, and we never train models on your data or sell it.

## 1\. Scope

This policy explains what the CMX gateway, the compressi.us website, and the CMX Cloud dashboard do with data. It covers the gateway you install, the account and dashboard features, and this website.

## 2\. Data CMX services never receive

The following stay on your machine and are never sent to CMX services. Your requests, including this content, still go to the model provider you configure as normal.

- Prompts, instructions, and conversation history you send to a model provider.
- Source code, files, terminal output, and diffs included in a request.
- Model responses, summaries, and streaming output.
- Session state, compression decisions, and local diagnostics.
- Provider API keys, which are held in memory and never written to disk.

We do not see, collect, log, or transmit this content to CMX services. There is no field in any CMX cloud protocol that can carry it.

## 3\. Data that stays on your system

CMX keeps its local state on your device: configuration, routing fields for connected harnesses, an in-memory summary cache, and a local database of aggregate counters. This data is under your control and is removed when you uninstall CMX and delete its data directory.

## 4\. What CMX Cloud receives

If you sign in and pair a device, the gateway may send signed daily aggregate counters so your dashboard can show totals. These counters include numbers such as:

- Requests processed and requests that failed.
- Input and output token totals.
- Estimated input tokens avoided, and internal summarization token usage.
- Cache reads, cache eligibility, and usage-unknown counts.

Each payload is signed with your device's Ed25519 key, tied to a device identifier, and limited to an allowlisted schema of integers. It contains no prompts, code, responses, provider keys, or free text. The dashboard aggregates server-received counters only; its refresh button never contacts your local gateway.

## 5\. We do not train on your data

We do not train, fine-tune, or otherwise use your prompts, code, responses, or session content to develop or improve any model. We do not sell your data, rent it, or share it with advertisers. There are no advertising cookies or third-party tracking scripts on this site.

## 6\. Account information

To use the dashboard you sign in with Google or GitHub. From that provider we receive a verified email address and a provider account identifier, and we store them to create your account. We do not receive your provider password. Device pairing stores a public key and the dates a device was paired and last seen.

## 7\. Cookies

We use a small number of first-party cookies that are strictly necessary for sign-in and session management. They are set with `HttpOnly`, `Secure`, and `SameSite=Lax` attributes. We do not use cookies for advertising or cross-site tracking.

## 8\. Data retention

Aggregate counters associated with your account are retained while your account is active so the dashboard can show history. If you request deletion, we remove your account and its associated aggregate records. Signed counter snapshots already incorporated into anonymous totals may remain part of an aggregate that cannot be tied back to you.

## 9\. Your rights

You can ask what account data we hold and request a copy or deletion by emailing [hello@compressi.us](mailto:hello@compressi.us) from the address linked to your account. You can also stop all sync at any time by signing out or removing the device.

## 10\. Security

Traffic to our servers uses HTTPS. Dashboard sessions use signed, expiring tokens. Device requests are verified with Ed25519 signatures. Because we minimize what we collect, there is very little to breach. See the [Security](https://compressi.us/security) page for details.

## 11\. Children

CMX is a developer tool and is not directed at children. We do not knowingly collect personal information from children.

## 12\. Changes

We may update this policy as the product evolves. Material changes will be reflected by the “Last updated” date above. Continued use of CMX after an update means you accept the revised policy.

## 13\. Contact

Questions about privacy can be sent to [hello@compressi.us](mailto:hello@compressi.us) or through the [contact page](https://compressi.us/contact).