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
      content: 'DIP enables OpenID inspired cross-chain identity, <a href="docs/concepts/dip/what-is-dip">help us test this new feature</a>!',
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
              label: 'Telegram',
              href: 'https://t.me/KILTProtocolChat',
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
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
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
    // TODO: Rewrite titles
    // TODO: Document
    [
        "docusaurus-plugin-remote-content",
        {
            // options here
            name: "dip-provider-docs", // used by CLI, must be path safe
            sourceBaseUrl: "https://raw.githubusercontent.com/KILTprotocol/kilt-node/release-1.12.1/pallets/pallet-dip-provider/", // the base url for the markdown (gets prepended to all of the documents when fetching)
            outDir: "docs/concepts/07_dip", // the base directory to output to.
            documents: ["README.md"], // the file names to download,
            modifyContent(filename, content) {
              console.log(content)
              if (filename.includes("README")) {
                return {
                  filename: "02_provider.md",
                  content: content
                }
              }
              return undefined
            },
          },
        ],[
          "docusaurus-plugin-remote-content",
          {
              // options here
              name: "dip-consumer-docs", // used by CLI, must be path safe
              sourceBaseUrl: "https://raw.githubusercontent.com/KILTprotocol/kilt-node/release-1.12.1/pallets/pallet-dip-consumer/", // the base url for the markdown (gets prepended to all of the documents when fetching)
              outDir: "docs/concepts/07_dip", // the base directory to output to.
              documents: ["README.md"], // the file names to download,
              modifyContent(filename, content) {
                if (filename.includes("README")) {
                  return {
                    filename: "03_consumer.md",
                    content: content
                  }
                }
                return undefined
              },
            }
    ],
],
}
