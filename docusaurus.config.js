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
      // Use absolute links proceeded by '/docs'
      content:
        'DIP enables OpenID inspired cross-chain identity, <a href="/docs/concepts/dip/what-is-dip">help us test this new feature</a>!',
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
          type: 'doc',
          docId: 'concepts/what-is-kilt',
          label: 'What is KILT?',
        },
        {
          type: 'dropdown',
          label: 'Develop',
          items: [
            {
              type: 'doc',
              docId: 'develop/sdk/quickstart',
              label: 'SDK Documentation',
            },
            {
              type: 'doc',
              docId: 'develop/chain/introduction',
              label: 'Blockchain Documentation',
            },
            {
              type: 'doc',
              docId: 'develop/workshop/welcome',
              label: 'Workshop',
            },
            {
              type: 'doc',
              docId: 'develop/contribute',
              label: 'Contribute',
            },
            {
              type: 'doc',
              docId: 'develop/specifications',
              label: 'Technical Specifications',
            },
            {
              type: 'doc',
              docId: 'develop/builtonkilt',
              label: 'Built on KILT',
            },
            {
              type: 'doc',
              docId: 'develop/dApp/welcome',
              label: 'DApp Documentation',
            },
            {
              type: 'doc',
              docId: 'develop/opendid/what-is-opendid',
              label: 'OpenDID Documentation',
            },
            {
              type: 'doc',
              docId: 'develop/polarpath/what-is-polarpath',
              label: 'Polar path Documentation',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Participate',
          items: [
            {
              type: 'doc',
              docId: 'participate/staking/become_a_collator/overview',
              label: 'Staking',
            },
            {
              type: 'doc',
              docId: 'participate/governance/vote',
              label: 'Voting',
            },
            {
              type: 'doc',
              docId: 'participate/treasury-proposal',
              label: 'Treasury Proposals',
            },
            {
              type: 'doc',
              docId: 'participate/content-creation-guidelines',
              label: 'Content Creation Guidelines',
            },
            {
              type: 'doc',
              docId: 'participate/treasury-tip',
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
              href: 'https://www.kilt.io/privacy-policy/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KILT Foundation – All rights reserved. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KILTprotocol/docs/edit/master/',
          showLastUpdateTime: true,
          admonitions: {
            keywords: ['version-label'],
            extendDefaults: true,
          },
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
    // Pulls external files and adds them as files in the Docusaurus folder, rewriting the title and the file name
    [
      'docusaurus-plugin-remote-content',
      {
        name: 'dip-provider-docs',
        sourceBaseUrl:
          'https://raw.githubusercontent.com/KILTprotocol/kilt-node/1.13.0/pallets/pallet-dip-provider/',
        outDir: 'docs/concepts/07_dip',
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
          return undefined;
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
        outDir: 'docs/concepts/07_dip',
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
