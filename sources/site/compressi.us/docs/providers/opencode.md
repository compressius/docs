# Source: https://compressi.us/docs/providers/opencode

## 1\. Get ready

[Install CMX](https://compressi.us/downloads) and make sure OpenCode works with your chosen model provider before connecting it to CMX. Keep signing in to your model provider through OpenCode as usual.

OpenCode and Codex are coding agents. The model provider is the service you configure inside them; CMX does not replace that service or its account.

Set up CMX and sign in⌘

`cmx setup`Copy

## 2\. Connect OpenCode

1. Configure your model provider in OpenCode first.
2. In CMX, open CONFIG → OpenCode and refresh the provider list.
3. Select the provider you use and connect it.
4. Restart OpenCode so it picks up the connection.

## 3\. Check the connection

Verify agent routing⌘

`cmx harness verify`Copy

Check CMX status⌘

`cmx status`Copy

Send a request from OpenCode and check CMX for activity. Short conversations may not need compression; savings depend on eligible context and policy checks.

## Need help?

If requests are not reaching CMX, restart OpenCode, check your selected connection, and run `cmx doctor`. See [troubleshooting](https://compressi.us/docs#troubleshooting) or [contact us](https://compressi.us/contact) with your CMX version, OS, and a description of the issue.

Looking for a different integration? [Suggest a provider](https://compressi.us/docs/providers/suggest).