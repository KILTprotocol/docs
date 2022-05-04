/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KILT Documentation',
  tagline: 'Documentation for KILT Node and SDK',
  url: 'https://dev.kilt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KILTprotocol', // the github org name. Will be used in the deploy step to clone the repository
  projectName: 'docs', // the github project name. Will be used in the deploy step to clone the repository
  themeConfig: {
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
          docId: 'what-is-kilt',
          label: 'What is KILT?',
        },
        {
          type: 'dropdown',
          label: 'Concepts',
          items: [
            {
              type: 'doc',
              docId: 'concepts/did',
              label: 'DIDs',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Participate',
          items: [
            {
              type: 'doc',
              docId: 'chain/collator',
              label: 'Collating',
            },
            {
              type: 'doc',
              docId: 'chain/delegator',
              label: 'Delegating',
            },
            {
              type: 'doc',
              docId: 'chain/Governance/vote',
              label: 'Voting',
            },
          ],
        },
        {
          to: 'docs/sdk/introduction',
          activeBasePath: 'docs/sdk',
          label: 'Develop',
        },
        {
          type: 'doc',
          docId: 'glossary',
          label: 'Glossary',
        },
        {
          to: 'docs/apps/introduction',
          activeBasePath: 'docs/apps',
          label: 'Apps',
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
              label: 'Element / Matrix',
              href: 'https://matrix.to/#/#kilt-general:matrix.org',
            },
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
            {
              label: 'Clan KILT (Unofficial)',
              href: 'https://clankilt.io',
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
