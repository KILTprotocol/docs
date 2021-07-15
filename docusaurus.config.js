/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'KILT Documentation',
  tagline: 'Documentation for KILT Node and SDK',
  url: 'https://dev.kilt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KILTprotocol', // Usually your GitHub org/user name.
  projectName: 'KILTprotocol', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '', // no title since the Name is already in the logo
      logo: {
        alt: 'KILT Logo',
        src: 'img/logo_light.svg',
      },
      items: [
        {
          to: 'docs/sdk/introduction',
          activeBasePath: 'docs/sdk',
          label: 'SDK',
          position: 'left',
        },
        {
          to: 'docs/chain/introduction',
          activeBasePath: 'docs/chain',
          label: 'Chain',
          position: 'left',
        },
        {
          href: 'https://github.com/KILTprotocol/docs',
          label: 'GitHub',
          position: 'right',
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
              label: 'Telegram',
              href: 'https://t.me/KILTProtocolChat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Kiltprotocol',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/hX4pc8rdHS',
            },
            {
              label: 'Clan KILT (Unofficial)',
              href: 'https://clankilt.io',
            }
          ],
        },
        {
          title: 'Resources',
          items: [
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BOTLabs GmbH – All rights reserved. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/KILTprotocol/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
