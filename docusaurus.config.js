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
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
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
      '@docusaurus/preset-classic',
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
        gtag: {
          trackingID: 'G-1MTMLP9766',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
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
            label: '📖 Learn',
            to: '/concepts/koii-summary/welcome',
            activeBasePath: 'concepts',
            position: 'left',
            className: "header-text",
          },
           {
            label: '💻 Build',
            to: '/develop/settlement-layer/k2-tick-tock-fast-blocks',
            activeBasePath: 'develop',
            position: 'left',
            className: "header-text",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
