# CMX Documentation Project Instructions

## About This Project
- Documentation site for Compressius Maximus (CMX), hosted at `https://docs.compressi.us` on Cloudflare Pages.
- Built with **Astro Starlight** (`@astrojs/starlight`) producing pure static HTML with zero client JavaScript runtime by default.
- Offline static search powered by **Pagefind** (compiled at build time).
- Content lives in `src/content/docs/` as `.mdx` files with YAML frontmatter.
- Configuration and sidebar navigation live in `astro.config.mjs`.
- Security headers and cache policies are defined in `public/_headers`.
- Automated sitemap generated to `dist/sitemap-index.xml`.

## Build and Verification Commands
- `npm run dev`: Start local development server on `http://localhost:4321`.
- `npm run build`: Compile static production site to `dist/` with Pagefind search indexing and sitemap generation.
- `npm run preview`: Preview the production build locally.
- `npm audit`: Verify dependency tree integrity.

## Baseline Guidance
Inspect relevant code, callers, and applicable instructions before editing. Preserve existing user changes. Make the smallest complete change; avoid unrelated cleanup, speculative features, and unnecessary abstractions. Follow repository conventions and reuse existing implementations and dependencies. Preserve public and persisted contracts unless changes are authorized; update consumers and migration guidance when needed. Validate external input, enforce server-side authorization, and protect secrets and personal data. Verify changed behavior with proportionate project checks and regression coverage where practical; never weaken valid checks to get green. Wait for check results and distinguish passed, failed, pending, and unavailable verification. Report actual outcomes and remaining limitations without claiming unverified success. Commit, push, publish, deploy, or perform destructive actions only within user authorization. For version-sensitive library, framework, SDK, API, CLI, or cloud-service work, consult Context7 when available, matching the installed version; use official documentation or installed source when coverage is insufficient. Preserve these rules alongside project-specific instructions and resolve material conflicts explicitly.

## Style and Content Guidelines
- Use active voice and second person ("you").
- Keep headings sentence case and concise.
- Preserve 1:1 route slugs matching `docs.compressi.us/<slug>`.
- Keep commands copy-pasteable and verified against the current `compressius/cmx` codebase.
- Maintain JSON-LD structured data with official Wikidata entity `Q142111814`.
