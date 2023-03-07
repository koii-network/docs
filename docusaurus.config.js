// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Koii Docs',
  tagline: 'Koii is Web3, for everyone.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.koii.network/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    ['@docusaurus/plugin-content-docs', { 
        id: "concepts",
        path: "concepts",
        routeBasePath: "concepts/",
        sidebarPath: require.resolve("./contentSidebars.js"),
      }],
    ['@docusaurus/plugin-content-docs', { 
        id: "develop",
        path: "develop",
        routeBasePath: "develop/",
        sidebarPath: require.resolve("./developSidebars.js"),
      }],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitlab.com/koii-network/koii-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitlab.com/koii-network/koii-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/thumbnail.png',
      navbar: {
        title: 'Koii Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '📖 Concepts',
            to: '/concepts/koii-summary/welcome',
            activeBasePath: 'concepts',
            position: 'left',
          },
           {
            label: '💻 Develop',
            to: '/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk',
            activeBasePath: 'develop',
            position: 'left',
          },
          {
            href: 'https://github.com/koii-network',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Concept',
            items: [
              {
                label: 'Overview',
                to: '/concepts/koii-summary/welcome',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'SDK Documentation',
                to: '/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/koii-network',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Peeranha',
                href: 'https://peeranha.io/feed/6',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/koii',
              },
              {
                label: 'Twitter',
                href: 'https://t.me/koiinetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.koii.network/',
              },
              {
                label: 'Get In Touch',
                href: 'mailto:hello@koii.network',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.koii.network/Privacy_Policy.pdf',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Koi Labs Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
