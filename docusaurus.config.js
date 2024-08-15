/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'KILT Protocol',
  tagline:
    'A blockchain identity protocol for issuing self-sovereign verifiable credentials and decentralized identifiers.',
  url: 'https://docs.kilt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'KILTprotocol', // the github org name. Will be used in the deploy step to clone the repository
  projectName: 'docs', // the github project name. Will be used in the deploy step to clone the repository
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Config taken from https://docusaurus.io/docs/search#using-algolia-docsearch
  // `appId`, `apiKey`, and `indexName` were provided in the email
  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: 'I7C7DMFMTM',
      // Public API key: it is safe to commit it
      apiKey: '7f744ee37f644c445d01463be7c2eb4d',
      indexName: 'kilt',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Algolia-specific configurations
      placeholder: 'Search within the KILT documentation!',
    },
    mermaid: {
      theme: { light: 'default', dark: 'dark' },
    },
    image: 'img/expert_dark_preview.png',
    announcementBar: {
      id: 'dip-announcement',
      content:
        'DIP enables OpenID inspired cross-chain identity, <a href="/concepts/dip/what-is-dip">help us test this new feature</a>!',
      backgroundColor: '#2db528',
      textColor: '#fff',
      isCloseable: true,
    },
    navbar: {
      title: '', // no title since the Name is already in the logo
      logo: {
        alt: 'KILT Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          to: '/concepts/what-is-kilt',
          label: 'What is KILT?',
        },
        {
          type: 'dropdown',
          label: 'Develop',
          items: [
            {
              type: 'doc',
              docId: 'sdk/quickstart',
              label: 'SDK Documentation',
            },
            {
              type: 'doc',
              docId: 'chain/introduction',
              label: 'Blockchain Documentation',
            },
            {
              type: 'doc',
              docId: 'workshop/welcome',
              label: 'Workshop',
            },
            {
              type: 'doc',
              docId: 'contribute',
              label: 'Contribute',
            },
            {
              type: 'doc',
              docId: 'specifications',
              label: 'Technical Specifications',
            },
            {
              type: 'doc',
              docId: 'builtonkilt',
              label: 'Built on KILT',
            },
            {
              type: 'doc',
              docId: 'dApp/welcome',
              label: 'DApp Documentation',
            },
            {
              type: 'doc',
              docId: 'opendid/what-is-opendid',
              label: 'OpenDID Documentation',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Participate',
          items: [
            {
              to: 'participate/staking/become_a_collator/overview',
              label: 'Staking',
            },
            {
              to: 'participate/governance/vote',
              label: 'Voting',
            },
            {
              to: 'participate/treasury-proposal',
              label: 'Treasury Proposals',
            },
            {
              to: 'participate/content-creation-guidelines',
              label: 'Content Creation Guidelines',
            },
            {
              to: 'participate/treasury-tip',
              label: 'Treasury Tips',
            },
          ],
        },
        {
          href: 'https://github.com/KILTprotocol/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hX4pc8rdHS',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Kiltprotocol',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'KILT Protocol',
              href: 'https://www.kilt.io/',
            },
            {
              label: 'Medium',
              href: 'https://kilt-protocol.medium.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/KILTprotocol',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              href: 'https://www.kilt.io/imprint/',
            },
            {
              label: 'Disclaimer',
              href: 'https://www.kilt.io/disclaimer/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.kilt.io/privacy-policy-for-kilt-protocol/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BOTLabs GmbH – All rights reserved. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'develop',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.0.x',
            },
            0.3: {
              label: '0.3.x',
              path: '0.3',
            },
          },
          routeBasePath: 'develop',
          sidebarPath: './sidebarsDevelop.js',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          editUrl: 'https://github.com/KILTprotocol/docs/edit/master/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // !!!
  // If this changes, please change the key reference to this field
  // in TsJsBlock and TsJsSnippet components, and maybe also in the .prettierrc file, if needed
  // !!!
  customFields: {
    prettierConfig: {
      trailingComma: 'es5',
      semi: false,
      singleQuote: true,
      printWidth: 80,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'concepts',
        routeBasePath: 'concepts',
        sidebarPath: './sidebarsConcepts.js',
        admonitions: {
          keywords: ['version-label'],
          extendDefaults: true,
        },
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
        ],
        editUrl: 'https://github.com/KILTprotocol/docs/edit/master/',
        showLastUpdateTime: true,
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'participate',
        path: 'participate',
        routeBasePath: 'participate',
        sidebarPath: './sidebarsParticipate.js',
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
        ],
        editUrl: 'https://github.com/KILTprotocol/docs/edit/master/',
        showLastUpdateTime: true,
        // ... other options
      },
    ],
    // Pulls external files and adds them as files in the Docusaurus folder, rewriting the title and the file name
    [
      'docusaurus-plugin-remote-content',
      {
        name: 'dip-provider-docs',
        sourceBaseUrl:
          'https://raw.githubusercontent.com/KILTprotocol/kilt-node/1.13.0/pallets/pallet-dip-provider/',
        outDir: 'concepts/07_dip',
        documents: ['README.md'],
        modifyContent(filename, content) {
          if (filename.includes('README')) {
            var trimContent = content.replace(
              '# Decentralized Identity Provider (DIP) provider pallet',
              '# Provider pallet'
            )
            return {
              filename: '02_provider.md',
              content: trimContent,
            }
          }
          return undefined
        },
      },
    ],
    [
      'docusaurus-plugin-remote-content',
      {
        // Pulls external files and adds them as files in the Docusaurus folder, rewriting the title and the file name
        name: 'dip-consumer-docs',
        sourceBaseUrl:
          'https://raw.githubusercontent.com/KILTprotocol/kilt-node/1.13.0/pallets/pallet-dip-consumer/',
        outDir: 'concepts/07_dip',
        documents: ['README.md'],
        modifyContent(filename, content) {
          if (filename.includes('README')) {
            var trimContent = content.replace(
              '# Decentralized Identity Provider (DIP) consumer pallet',
              '# Consumer pallet'
            )
            return {
              filename: '03_consumer.md',
              content: trimContent,
            }
          }
          return undefined
        },
      },
    ],
  ],
}
