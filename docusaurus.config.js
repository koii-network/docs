// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Koii Docs",
  tagline: "Koii is Web3, for everyone.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.koii.network/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "concepts",
        path: "concepts",
        routeBasePath: "concepts/",
        sidebarPath: require.resolve("./contentSidebars.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "develop",
        path: "develop",
        routeBasePath: "develop/",
        sidebarPath: require.resolve("./developSidebars.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "quickstart",
        path: "quickstart",
        routeBasePath: "quickstart/",
        sidebarPath: require.resolve("./quickstartSidebar.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "run-a-node",
        path: "run-a-node",
        routeBasePath: "run-a-node/",
        sidebarPath: require.resolve("./runANodeSidebar.js"),
        editUrl: "https://github.com/koii-network/docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/concepts/introduction/welcome",
            from: "/introduction/readme",
          },
          // {
          //   to: "/develop/settlement-layer/running-a-k2-node/system-requirements",
          //   from: "/settlement-layer/running-a-k2-node/setup-process",
          // },
          {
            to: "/quickstart/command-line-tool/koii-cli/install-cli",
            from: "/koii-software-toolkit-sdk/using-the-cli",
          },
          // {
          //   to: "/develop/settlement-layer/running-a-k2-node/",
          //   from: "/settlement-layer/running-a-k2-node",
          // },
          {
            to: "/concepts/introduction/tools",
            from: "/introduction/tools",
          },
          {
            to: "/develop/build-dapps-with-koii/welcome-to-koii-x/",
            from: "/build-dapps-with-koii/welcome-to-koii-x",
          },
          {
            to: "/quickstart/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/koii-software-toolkit-sdk/what-is-the-koii-sdk",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/",
            from: "/microservices-and-tasks/what-are-tasks",
          },
          {
            to: "/develop/attention-mining/proof-of-real-traffic/",
            from: [
              "/earning-koii/proof-of-real-traffic-port",
              "/earning-koii/proof-of-real-traffic/",
            ],
          },
          {
            to: "/develop/attention-mining/proof-of-real-traffic/attention-mining",
            from: "/earning-koii/proof-of-real-traffic-port/attention-mining",
          },
          {
            to: "/develop/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
            from: "/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
          },
          {
            to: "/develop/build-dapps-with-koii/template-library/",
            from: "/build-dapps-with-koii/template-library",
          },
          {
            to: "/run-a-node/task-nodes/how-to-run-a-desktop-node",
            from: "/earning-koii/running-task-nodes",
          },
          {
            to: "/develop/build-dapps-with-koii/using-nfts-as-content/create-nfts",
            from: "/build-dapps-with-koii/using-nfts-as-content/create-nfts",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/gradual-consensus",
            from: "/microservices-and-tasks/gradual-consensus",
          },
          {
            to: "/concepts/introduction/philosophy",
            from: "/introduction/philosophy",
          },
          {
            to: "/develop/build-dapps-with-koii/using-nfts-as-content/",
            from: "/build-dapps-with-koii/using-nfts-as-content",
          },
          {
            to: "/develop/settlement-layer/creating-tokens-on-k2",
            from: "/settlement-layer/creating-tokens-on-k2",
          },
          {
            to: "/quickstart/koii-software-toolkit-sdk/register-content/",
            from: "/earning-koii/registering-content",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/gradual-consensus",
            from: "/microservices-and-tasks/what-are-tasks/gradual-consensus",
          },
          {
            to: "/develop/settlement-layer/native-contracts/the-task-contract",
            from: "/settlement-layer/native-contracts/the-task-contract",
          },
          {
            to: "/develop/settlement-layer/native-contracts/the-attention-game",
            from: "/settlement-layer/native-contracts/the-attention-game",
          },
          {
            to: "/concepts/the-koii-token/network-economics",
            from: "/earning-koii/network-economics",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/",
            from: "/microservices-and-tasks/google-doodle-task",
          },
          {
            to: "/quickstart/command-line-tool/create-task-cli",
            from: [
              "/koii-software-toolkit-sdk/create-task-cli",
              "/develop/koii-software-toolkit-sdk/create-task-cli",
            ],
          },
          {
            to: "/develop/write-a-koii-task/task-development-guide/executable-structure/",
            from: "/microservices-and-tasks/task-development-guide/executable-structure",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/",
            from: "/microservices-and-tasks/task-development-guide",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/submit-distribution-list",
            from: "/microservices-and-tasks/google-doodle-task/submit-distribution-list",
          },
          {
            to: "/develop/write-a-koii-task/task-development-guide/executable-structure/validate-node",
            from: "/microservices-and-tasks/task-development-guide/executable-structure/validate-node",
          },
          {
            to: "/develop/write-a-koii-task/task-development-guide/task-development-flow/create-task",
            from: "/microservices-and-tasks/task-development-guide/task-development-flow/create-task",
          },
          {
            to: "/concepts/ways-to-get-koii/compute-sharing-marketplace/",
            from: "/earning-koii/compute-sharing-marketplace",
          },
          {
            to: "/quickstart/finnie-for-devs/welcome-to-finnie",
            from: "/finnie-wallet/welcome-to-finnie/content-collectives",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/nedb",
            from: "/develop/microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/leveldb",
          },
          {
            to: "/develop/settlement-layer/k2-tick-tock-fast-blocks",
            from: "/quickstart/building-with-koii",
          },
          {
            to: "/quickstart/category/koii-command-line-tool",
            from: "/develop/koii-software-toolkit-sdk/using-the-cli",
          },

          {
            to: "/quickstart/command-line-tool/task-node-cli",
            from: "/develop/koii-software-toolkit-sdk/task-node-cli",
          },
          {
            to: "/quickstart/category/koii-network",
            from: "/develop/category/koii-network",
          },
          {
            to: "/quickstart/category/ethereum-network",
            from: "/develop/category/ethereum-network",
          },
          {
            to: "/concepts/ways-to-get-koii/grants-program",
            from: [
              "/earning-koii/grants-program",
              "/concepts/earning-koii/grants-program",
            ],
          },
          {
            to: "/concepts/ways-to-get-koii/get-free-tokens",
            from: [
              "/earning-koii/get-free-tokens",
              "/concepts/earning-koii/get-free-tokens",
            ],
          },
          {
            to: "/concepts/the-koii-token/network-economics",
            from: "/concepts/earning-koii/network-economics",
          },
          {
            to: "/concepts/ways-to-get-koii/compute-sharing-marketplace/",
            from: "/concepts/earning-koii/compute-sharing-marketplace",
          },
          {
            to: "/develop/attention-mining/proof-of-real-traffic/",
            from: "/concepts/earning-koii/proof-of-real-traffic/",
          },

          {
            to: "/develop/attention-mining/proof-of-real-traffic/attention-mining",
            from: "/concepts/earning-koii/proof-of-real-traffic/attention-mining",
          },
          {
            to: "/develop/attention-mining/proof-of-real-traffic/registering-content",
            from: "/concepts/earning-koii/proof-of-real-traffic/registering-content",
          },
          {
            to: "/develop/attention-mining/proof-of-real-traffic/sybil-attack-prevention",
            from: "/concepts/earning-koii/proof-of-real-traffic/sybil-attack-prevention",
          },
          {
            from: "/develop/microservices-and-tasks/what-are-tasks/staking-and-voting",
            to: "/develop/designing-tasks/staking-and-voting",
          },
          {
            from: "/develop/microservices-and-tasks/what-are-tasks/what-are-audits",
            to: "/develop/designing-tasks/securing-task",
          },
          {
            to: "/run-a-node/k2-nodes/how-to-run-a-k2-node",
            from: [
              "/develop/settlement-layer/running-a-k2-node/",
              "/settlement-layer/running-a-k2-node",
            ],
          },
          {
            to: "/run-a-node/k2-nodes/system-requirements",
            from: [
              "/develop/settlement-layer/running-a-k2-node/system-requirements",
              "/settlement-layer/running-a-k2-node/setup-process",
            ],
          },
          {
            to: "/run-a-node/k2-nodes/system-setup",
            from: "/develop/settlement-layer/running-a-k2-node/setup-process",
          },
          {
            from: "/develop/microservices-and-tasks/what-are-tasks/",
            to: "/develop/koii-task-101/what-are-tasks/",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/nodes-vs-servers",
            from: "/develop/microservices-and-tasks/what-are-tasks/nodes-vs-servers",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/gradual-consensus",
            from: "/develop/microservices-and-tasks/what-are-tasks/gradual-consensus",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/runtime-environment",
            from: "/develop/microservices-and-tasks/what-are-tasks/runtime-environment",
          },
          {
            from: "/develop/microservices-and-tasks/google-doodle-task/",
            to: "/develop/task-tutorials/google-doodle-task/",
          },

          {
            to: "/develop/task-tutorials/google-doodle-task/getting-started",
            from: "/develop/microservices-and-tasks/google-doodle-task/getting-started",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/google-doodle-task-functions",
            from: "/develop/microservices-and-tasks/google-doodle-task/google-doodle-task-functions",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/audit-submission-value",
            from: "/develop/microservices-and-tasks/google-doodle-task/audit-submission-value",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/submit-distribution-list",
            from: "/develop/microservices-and-tasks/google-doodle-task/submit-distribution-list",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/audit-distribution-list",
            from: "/develop/microservices-and-tasks/google-doodle-task/audit-distribution-list",
          },
          {
            to: "/develop/task-tutorials/google-doodle-task/google-doodle-executable-code",
            from: "/develop/microservices-and-tasks/google-doodle-task/google-doodle-executable-code",
          },
          {
            to: "/develop/task-tutorials/linktree-task/intro",
            from: "/develop/microservices-and-tasks/linktree-task/intro",
          },
          {
            to: "/develop/task-tutorials/linktree-task/data-storage",
            from: "/develop/microservices-and-tasks/linktree-task/data-storage",
          },
          {
            to: "/develop/task-tutorials/linktree-task/data-sharing",
            from: "/develop/microservices-and-tasks/linktree-task/data-sharing",
          },
          {
            to: "/develop/task-tutorials/linktree-task/rest-api",
            from: "/develop/microservices-and-tasks/linktree-task/rest-api",
          },
          {
            to: "/develop/task-tutorials/linktree-task/auth-list",
            from: "/develop/microservices-and-tasks/linktree-task/auth-list",
          },
          // {
          //   to: "/run-a-node/task-nodes/how-to-run-a-desktop-node",
          //   from: "/develop/microservices-and-tasks/run-a-task-node",
          // },
          // {
          //   to: "/develop/designing-tasks/using-reputation",
          //   from: "/develop/microservices-and-tasks/using-reputation",
          // },
          {
            to: "/run-a-node/task-nodes/how-to-run-a-desktop-node",
            from: "/develop/microservices-and-tasks/run-a-task-node",
          },
          {
            to: "/develop/designing-tasks/using-reputation",
            from: "/develop/microservices-and-tasks/using-reputation",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/concepts/koii-summary/impact",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/concepts/koii-summary/social-tech",
          },
          {
            to: "/develop/koii-task-101/what-are-tasks/key-components/intro",
            from: "/develop/microservices-and-tasks/what-are-tasks/key-components",
          },
          {
            to: "/run-a-node/k2-nodes/how-to-run-a-k2-node",
            from: "/develop/settlement-layer/running-a-k2-node/",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/concepts/introduction")) {
            return [
              existingPath.replace(
                "/concepts/introduction",
                "/concepts/koii-summary"
              ),
            ];
          }
          if (existingPath.includes("/concepts/community")) {
            return [
              existingPath.replace("/concepts/community", "/develop/support"),
            ];
          }
          if (
            existingPath.includes(
              "/develop/write-a-koii-task/task-development-kit-tdk/"
            )
          ) {
            return [
              existingPath.replace(
                "/develop/write-a-koii-task/task-development-kit-tdk/",
                "/develop/microservices-and-tasks/task-development-kit-tdk/"
              ),
            ];
          }
          if (
            existingPath.includes(
              "/develop/write-a-koii-task/task-development-guide/"
            )
          ) {
            return [
              existingPath.replace(
                "/develop/write-a-koii-task/task-development-guide/",
                "/develop/microservices-and-tasks/task-development-guide/"
              ),
            ];
          }
          if (existingPath.includes("/quickstart/finnie-for-devs")) {
            return [
              existingPath.replace(
                "/quickstart/finnie-for-devs",
                "/develop/finnie-for-devs"
              ),
            ];
          }
          if (existingPath.includes("/quickstart/koii-software-toolkit-sdk")) {
            return [
              existingPath.replace(
                "/quickstart/koii-software-toolkit-sdk",
                "/develop/koii-software-toolkit-sdk"
              ),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/koii-network/koii-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://gitlab.com/koii-network/koii-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-1MTMLP9766",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/thumbnail.png",
      // metadata: [
      //   {
      //     property: "og:url",
      //     content: "https://koii-docs.vercel.app",
      //   },
      //   {
      //     property: "og:image",
      //     content: "https://www.koii.network/static/thumbnail.png",
      //   },
      //   { property: "og:description", content: "Koii is Web3, for everyone." },
      //   { property: "twitter:card", content: "summary_large_image" },
      //   {
      //     property: "twitter:description",
      //     content: "Koii is Web3, for everyone.",
      //   },
      //   {
      //     property: "twitter:image",
      //     content: "https://www.koii.network/static/thumbnail.png",
      //   },
      // ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Koii Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "📖 Learn",
            to: "/concepts/introduction/welcome",
            activeBasePath: "concepts",
            position: "left",
            className: "header-text",
          },
          {
            label: "🏗️ Build on Koii",
            to: "/develop/settlement-layer/k2-tick-tock-fast-blocks",
            activeBasePath: "develop",
            position: "left",
            className: "header-text",
          },
          {
            label: "💻 Quickstart",
            to: "/quickstart/finnie-for-devs/welcome-to-finnie",
            activeBasePath: "quickstart",
            position: "left",
            className: "header-text",
          },
          {
            label: "💻 Run a Node",
            to: "/run-a-node/introduction/types-of-nodes",
            activeBasePath: "run-a-node",
            position: "left",
            className: "header-text",
          },
        ],
      },
      footer: {},
      algolia: {
        // The application ID provided by Algolia
        appId: "29G9TFK9ME",
        // Public API key: it is safe to commit it
        apiKey: "0afa9bf81ac9b664f951bdf2f042b274",
        indexName: "dev_koii",
        // Optional: see doc section below
        // contextualSearch: true,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
