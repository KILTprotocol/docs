/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KILT Protocol',
  tagline:
    'A Blockchain Identity Protocol for Issuing Self-Sovereign Verifiable Credentials and Decentralized Identifiers.',
  url: 'https://docs.kilt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'KILTprotocol', // the github org name. Will be used in the deploy step to clone the repository
  projectName: 'docs', // the github project name. Will be used in the deploy step to clone the repository
  themeConfig: {
    image: 'img/expert_dark_preview.png',
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
              docId: 'develop/specifications/index',
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
            require('mdx-mermaid'),
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KILTprotocol/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
