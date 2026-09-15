# Source: https://compressi.us/docs

## Quick Start

You need a free CMX account and an installed coding agent with a working provider sign-in. CMX is free to use; your provider’s charges still apply.

1. ### Install CMX

 npm⌘

 `npm install --global @compressius/cmx`Copy

 Prefer another method? See [installation options](https://compressi.us/docs#installation).

2. ### Complete guided setup

 Terminal⌘

 `cmx setup`Copy

 Follow the browser sign-in, then choose your detected coding agent.

3. ### Connect and restart your agent

 Open `cmx`, choose CONFIG → your agent → your provider, and connect. Restart the agent, then continue a coding session.

4. ### Check your activity

 Usage⌘

 `cmx stats`Copy

 Look for new requests after using your agent. Savings vary by session; a short conversation may show little or no reduction.

## Installation

Choose one installation method. Package-manager installs require Node.js and npm or pnpm. For standalone installers and available platform builds, visit [downloads](https://compressi.us/downloads).

LinuxMacWindows

curlnpmpnpm

Copy

```
$ curl -sSfL https://compressi.us/install.sh | sh
```

**Linux**No Node.js required.

After installation, open a new terminal if `cmx` is not found, then verify the installation:

Check installed version⌘

`cmx --version`Copy

Already installed? Jump to [updates](https://compressi.us/docs#updates). You do not need to repeat account setup for every coding session.

## Uninstall

Disconnect your coding agents before removing CMX so they can continue working normally. Run these commands while CMX is still installed:

Restore agent connections⌘

`cmx harness disable`Copy

Sign out of CMX⌘

`cmx logout`Copy

Stop CMX⌘

`cmx stop`Copy

Restart your coding agent. Then remove the package using the manager you installed it with:

Remove an npm installation⌘

`npm uninstall --global @compressius/cmx`Copy

Remove a pnpm installation⌘

`pnpm remove --global @compressius/cmx`Copy

### Standalone installation

Locate the installed executable with `command -v cmx` on macOS/Linux or `Get-Command cmx` in PowerShell. Remove that CMX executable from its installation folder. If you manually configured an auto-start service, disable it as well.

Removing the app does not delete your CMX account or necessarily remove saved preferences and local history. Contact [support](https://compressi.us/contact) for account deletion or help with a complete cleanup.

## Connect Your Coding Agent

Codex and OpenCode are verified integrations. Other tools are not individually verified; contact us before depending on an unsupported setup.

### Codex

Sign in to your provider in Codex as usual. In CMX, open CONFIG → Codex and select your connection. Connect it, then restart Codex.

### OpenCode

Configure your provider in OpenCode first. In CMX, open CONFIG → OpenCode, refresh the provider list, and connect the provider you use. Restart OpenCode.

Check saved connections⌘

`cmx harness verify`Copy

A successful configuration check is only the first step. Send a request from your agent and check `cmx stats` to confirm activity.

## Configuration

Run `cmx` and open CONFIG to manage connections and preferences. Each provider has its own connection status and available actions.

- Use CONFIG → Preferences to control live activity, reduced motion, and automatic update checks.
- Tab or arrows move focus. Enter or click selects. Esc returns, and M toggles mouse capture.
- Use `cmx start` to run in the background and `cmx stop` to stop. This does not install an auto-start service.

## Understand Your Savings

CMX helps reduce token usage in longer AI coding sessions. Results depend on your conversation, coding agent, and provider. No fixed reduction or cost saving is guaranteed.

Tokens handled

Reported token activity. This is not a count of unique words or code.

Estimated net saved

Estimated tokens avoided after accounting for compression usage. It may be small or negative in a short session.

Provider usage

Your provider’s usage and bill remain the source of truth for charges. Token savings do not translate directly into the same percentage of money saved.

Use `cmx stats` for local activity or [the dashboard](https://compressi.us/dashboard) for your account’s usage. Missing usage is not proof of zero usage.

## Updates

Check for updates⌘

`cmx upgrade`Copy

Install an available update⌘

`cmx upgrade --install`Copy

For package-manager installations, you can also rerun your original install command to obtain the latest published package. Check [release notes](https://compressi.us/changelog) before updating.

## CLI Reference

Everyday commands, grouped by task. Run `cmx --help` for the commands available in your installed version.

### Get started

Sign in and pair this device through the browser.⌘

`cmx login`Copy

Sign in and connect detected coding agents.⌘

`cmx setup`Copy

Route a detected coding agent through CMX.⌘

`cmx harness enable`Copy

Run CMX in the current terminal.⌘

`cmx serve`Copy

Diagnose configuration and connectivity.⌘

`cmx doctor`Copy

### Start and stop

Open the interactive terminal interface.⌘

`cmx`Copy

Start CMX in the background.⌘

`cmx start`Copy

Stop CMX.⌘

`cmx stop`Copy

Show CMX status in a machine-readable format.⌘

`cmx status --json`Copy

### Usage and diagnostics

Show today's token and compression statistics.⌘

`cmx stats`Copy

Check whether opt-in raw logging is enabled.⌘

`cmx logs status`Copy

Open the web dashboard in your browser.⌘

`cmx dashboard`Copy

### Connections and maintenance

List detected coding agent harnesses.⌘

`cmx harness list`Copy

Verify saved coding-agent connections.⌘

`cmx harness verify`Copy

Restore the original harness configuration.⌘

`cmx harness disable`Copy

Delete expired local sessions.⌘

`cmx sessions purge`Copy

Check for an available update.⌘

`cmx upgrade`Copy

Install an available update.⌘

`cmx upgrade --install`Copy

Sign out and clear local credentials.⌘

`cmx logout`Copy

## Privacy & Security

CMX account statistics do not include your prompts, responses, or code. Your chosen AI provider still processes your requests under its own terms.

Keep diagnostic output private and remove sensitive details before sharing it. Read the [privacy policy](https://compressi.us/privacy) and [security information](https://compressi.us/security) for more.

## Troubleshooting

Check your installation and connections⌘

`cmx doctor`Copy

### CMX will not start

Run 'cmx stop', then 'cmx start'. If that does not help, run 'cmx doctor' and contact support with the result, after removing any private information.

### CMX asks me to sign in again

Run 'cmx login' and finish the browser sign-in on this device, then retry your coding session.

### Compression isn't happening

Check that new requests appear in 'cmx stats' while you use your agent. Short conversations may show little or no savings. Compare a longer coding session, and remember that savings vary by workload.

### My provider sign-in fails

Check your provider account and sign in again through your coding agent. Open CONFIG in CMX, check the connection, and restart the agent.

### My coding session does not appear in CMX

Run 'cmx harness enable', restart your coding agent, and send a new request. Use 'cmx doctor' if activity is still missing.

Still stuck? [Contact support](https://compressi.us/contact) with your operating system, CMX version, coding agent, and a description of what happened. Do not send credentials or private conversation content.