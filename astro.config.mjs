import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.compressi.us',
  integrations: [
    starlight({
      title: 'Compressius Maximus',
      description: 'Compressius Maximus (CMX) is a free, local-first AI gateway for coding clients that compresses conversation context before requests reach your model provider.',
      logo: {
        src: './src/assets/logo-dark.png',
        alt: 'Compressius Maximus',
      },
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/compressius/cmx',
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://compressi.us/#organization',
                'name': 'Compressius Maximus',
                'alternateName': 'CMX',
                'url': 'https://compressi.us',
                'sameAs': [
                  'https://www.wikidata.org/wiki/Q142111814',
                  'https://www.wikidata.org/entity/Q142111814',
                  'https://www.npmjs.com/package/@compressius/cmx',
                  'https://docs.compressi.us',
                ],
              },
              {
                '@type': 'SoftwareApplication',
                '@id': 'https://compressi.us/#software',
                'name': 'Compressius Maximus',
                'alternateName': 'CMX',
                'description': 'Free local-first AI gateway that compresses conversation context for coding agents before requests reach your model provider.',
                'applicationCategory': 'DeveloperApplication',
                'operatingSystem': 'Linux, macOS, Windows',
                'url': 'https://compressi.us',
                'installUrl': 'https://docs.compressi.us/installation',
                'softwareHelp': 'https://docs.compressi.us',
                'publisher': {
                  '@id': 'https://compressi.us/#organization',
                },
                'sameAs': [
                  'https://www.wikidata.org/wiki/Q142111814',
                  'https://www.wikidata.org/entity/Q142111814',
                  'https://www.npmjs.com/package/@compressius/cmx',
                ],
                'offers': {
                  '@type': 'Offer',
                  'price': '0',
                  'priceCurrency': 'USD',
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://docs.compressi.us/#website',
                'url': 'https://docs.compressi.us',
                'name': 'Compressius Maximus Documentation',
                'publisher': {
                  '@id': 'https://compressi.us/#organization',
                },
                'about': {
                  '@id': 'https://compressi.us/#software',
                },
              },
            ],
          }),
        },
      ],
      sidebar: [
        {
          label: 'Get started',
          items: [
            { label: 'What CMX does', slug: 'introduction' },
            { label: 'Quickstart', slug: 'quickstart' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Undo and uninstall', slug: 'uninstall' },
          ],
        },
        {
          label: 'Clients and providers',
          items: [
            { label: 'Supported clients', slug: 'providers/overview' },
            { label: 'Codex', slug: 'providers/codex' },
            { label: 'OpenCode', slug: 'providers/opencode' },
            { label: 'Claude Code', slug: 'providers/claude-code' },
            { label: 'Aider', slug: 'providers/aider' },
            { label: 'Antigravity (IDE & CLI)', slug: 'providers/antigravity' },
            { label: 'Cline', slug: 'providers/cline' },
            { label: 'ChatGPT Desktop', slug: 'providers/chatgpt-desktop' },
            { label: 'Model providers', slug: 'model-providers' },
            { label: 'Suggest a provider', slug: 'providers/suggest-provider' },
          ],
        },
        {
          label: 'Setup and configuration',
          items: [
            { label: 'Configuration', slug: 'configuration' },
            { label: 'Custom agents', slug: 'providers/custom-agents' },
          ],
        },
        {
          label: 'Using CMX',
          items: [
            { label: 'How compression works', slug: 'how-compression-works' },
            { label: 'Understanding savings', slug: 'understanding-savings' },
            { label: 'Updates', slug: 'updates' },
          ],
        },
        {
          label: 'CLI reference',
          items: [
            { label: 'CLI reference', slug: 'cli-reference' },
          ],
        },
        {
          label: 'Help',
          items: [
            { label: 'Troubleshooting', slug: 'troubleshooting' },
            { label: 'FAQ', slug: 'faq' },
            { label: 'Security', slug: 'security' },
            { label: 'Changelog', slug: 'changelog' },
          ],
        },
      ],
    }),
  ],
});
