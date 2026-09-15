# Source: https://compressi.us/security

## Threat model

CMX sits between a coding agent and a model provider, which makes it a tempting place to intercept sensitive data. We address that by keeping the data plane local and keeping the cloud surface as small as possible.

## Local-only gateway

The gateway binds strictly to `127.0.0.1` and rejects attempts to configure a public listening address. Provider requests are forwarded from your machine directly to the provider you selected. CMX Cloud is never in the request path.

## API keys stay in memory

Provider API keys are forwarded in process memory for the lifetime of a request. CMX does not write them to disk, does not log them, and does not send them to CMX Cloud.

## Device pairing

Authenticating the gateway with your dashboard uses Ed25519 key pairs. The private key stays on your device; only signed payloads and the public key are exchanged. Dashboard sessions are stored in `HttpOnly`, `Secure`, `SameSite=Lax` cookies.

## No content logging

CMX does not persist or log your prompts, source code, or model responses. They are sent only to the model provider you configure; CMX Cloud never receives them. Raw request logging is opt-in, local only, and intended for debugging on your own machine.

## Aggregate telemetry only

The only data that reaches CMX Cloud is a signed, allowlisted set of aggregate counters, such as processed tokens, estimated saved tokens, and cache rates. There is no field in the sync schema that can carry content. See the [Privacy Policy](https://compressi.us/privacy) for the full list.

## Signed updates and downloads

Update checks are optional and never install automatically. `cmx upgrade` reports an available result; `cmx upgrade --install` explicitly requests a verified replacement. Release artifacts are published with a `SHA256SUMS` file so you can verify a download before running it.

## Responsible disclosure

Please report suspected vulnerabilities privately to [hello@compressi.us](mailto:hello@compressi.us) before public disclosure, and avoid including live secrets or user content in your report. We will confirm receipt and work with you on a fix and a coordinated disclosure.