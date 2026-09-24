# CMX documentation

This repository contains the Mintlify source for [docs.compressi.us](https://docs.compressi.us). The CMX product source is in [compressius/cmx2](https://github.com/compressius/cmx2); use its current CLI and implementation to verify technical claims before changing these pages.

## Find the right page

| Reader needs | Start here |
| --- | --- |
| First installation | [Quickstart](quickstart.mdx) and [Installation](installation.mdx) |
| Connect a coding client | [Supported clients](providers/overview.mdx) |
| Understand upstream services | [Model providers](model-providers.mdx) |
| Restore or remove CMX | [Undo and uninstall](uninstall.mdx) |
| Diagnose routing | [Troubleshooting](troubleshooting.mdx) |
| Privacy and storage | [Security](security.mdx) |

The docs distinguish **coding clients** from **model providers**. Local CMX use does not require a CMX account. The standalone installers ask before connecting ready providers. Client authentication stays in the native client.

## Edit and preview

Pages are MDX files. `docs.json` controls site navigation. Use concise headings, active voice, second person, and copyable commands. Update navigation when adding a page. Keep commands consistent with the current CMX source and avoid claiming that an unpublished local build is available to users.

From this directory, preview with the [Mintlify CLI](https://mintlify.com/docs/development):

```bash
npx mint dev
```

Check internal links and the platform-specific commands you change. A documentation edit in this local clone is not published until it is reviewed and deployed through the repository's normal workflow.

For errors, open an issue or pull request in [this repository](https://github.com/compressius/docs). Do not put provider keys, private prompts, or client configuration files in an issue.
