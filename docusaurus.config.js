// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Draive',
  tagline: 'Draive starter guide',
  url: 'https://docs.draive.gr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'draive', // Usually your GitHub org/user name.
  projectName: 'draive-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Khepu/draive-starter-guide',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Draive',
        logo: {
          alt: 'draive\'s logo',
          src: 'img/nav_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'code-of-conduct/branches-and-commits',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Khepu/draive-starter-guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Branches and Commits',
                to: '/docs/code-of-conduct/branches-and-commits',
              },
              {
                label: 'Naming Conventions',
                to: '/docs/code-of-conduct/naming-conventions',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/c/draive/questions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/hsgV6h6yxs',
              },
              {
                label: 'Trello',
                href: 'https://trello.com/b/aF0ekxsf/draive',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'draive',
                href: 'https://draive.gr',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Khepu/draive-starter-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Draive.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
