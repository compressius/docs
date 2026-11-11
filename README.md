# CMX Documentation

This repository contains the documentation source for [docs.compressi.us](https://docs.compressi.us), built with [Astro Starlight](https://starlight.astro.build) and deployed directly to **Cloudflare Pages**.

The public CMX repository is [compressius/cmx](https://github.com/compressius/cmx); use its releases, installers, and CLI implementation to verify technical claims before changing these pages.

## Find the right page

| Reader needs | Start here |
| --- | --- |
| First installation | [Quickstart](src/content/docs/quickstart.mdx) and [Installation](src/content/docs/installation.mdx) |
| Connect a coding client | [Supported clients](src/content/docs/providers/overview.mdx) |
| Understand upstream services | [Model providers](src/content/docs/model-providers.mdx) |
| Restore or remove CMX | [Undo and uninstall](src/content/docs/uninstall.mdx) |
| Diagnose routing | [Troubleshooting](src/content/docs/troubleshooting.mdx) |
| Privacy and storage | [Security](src/content/docs/security.mdx) |

The docs distinguish **coding clients** from **model providers**. Local CMX use does not require a CMX account. The standalone installers ask before connecting ready providers. Client authentication stays in the native client.

## Edit and preview

Pages are MDX files located in `src/content/docs/`. Navigation and metadata are configured in `astro.config.mjs`.

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview

```bash
# Build static site, compile search index, and generate sitemaps
npm run build

# Preview production build locally
npm run preview
```

### Cloudflare Pages Deployment
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** `>= 20.0.0`
- Custom headers, caching, and security policies are defined in `public/_headers`.

## License

CMX software is distributed under the [Proprietary Gratis License](LICENSE). The site’s EULA explains those terms; the LICENSE file is the canonical text.
