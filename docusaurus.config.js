// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Koii Docs",
  tagline: "Koii is Web3, for everyone.",
  favicon: "/img/favicon.png",

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
        id: "koii",
        path: "koii",
        routeBasePath: "koii/",
        sidebarPath: require.resolve("./sidebars/koiiSidebar.js"),
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
        id: "concepts",
        path: "concepts",
        routeBasePath: "concepts/",
        sidebarPath: require.resolve("./sidebars/contentSidebars.js"),
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
        sidebarPath: require.resolve("./sidebars/developSidebars.js"),
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
        sidebarPath: require.resolve("./sidebars/quickstartSidebar.js"),
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
        sidebarPath: require.resolve("./sidebars/runANodeSidebar.js"),
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
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorials/",
        sidebarPath: require.resolve("./sidebars/tutorialsSidebar.js"),
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
          {
            to: "/develop/category/koii-command-line-tool",
            from: [
              "/koii-software-toolkit-sdk/using-the-cli",
              "/quickstart/command-line-tool/koii-cli/install-cli",
            ],
          },
          {
            to: "/concepts/introduction/tools",
            from: "/introduction/tools",
          },
          // {
          //   to: "/develop/build-dapps-with-koii/welcome-to-koii-x/",
          //   from: ["/build-dapps-with-koii/welcome-to-koii-x", "/develop/build-dapps-with-koii/welcome-to-koii-x/"],
          // },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: [
              "/koii-software-toolkit-sdk/what-is-the-koii-sdk",
              "/quickstart/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            ],
          },
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/",
          //   from: "/microservices-and-tasks/what-are-tasks",
          // },
          {
            to: "/concepts/web3/proof-of-real-traffic",
            from: [
              "/earning-koii/proof-of-real-traffic-port",
              "/earning-koii/proof-of-real-traffic/",
              "/develop/attention-mining/proof-of-real-traffic/",
            ],
          },
          {
            to: "/concepts/web3/attention-mining",
            from: [
              "/earning-koii/proof-of-real-traffic-port/attention-mining",
              "/develop/attention-mining/proof-of-real-traffic/attention-mining",
            ],
          },
          // {
          //   to: "/develop/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
          //   from: "/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
          // },
          // {
          //   to: "/develop/build-dapps-with-koii/template-library/",
          //   from: "/build-dapps-with-koii/template-library",
          // },
          {
            to: "/run-a-node/task-nodes/how-to-run-a-desktop-node",
            from: "/earning-koii/running-task-nodes",
          },
          // {
          //   to: "/develop/build-dapps-with-koii/using-nfts-as-content/create-nfts",
          //   from: "/build-dapps-with-koii/using-nfts-as-content/create-nfts",
          // },
          {
            to: "/concepts/gradual-concensus/runtime-flow",
            from: [
              "/microservices-and-tasks/gradual-consensus",
              "/develop/koii-task-101/what-are-tasks/gradual-consensus",
            ],
          },
          {
            to: "/concepts/introduction/philosophy",
            from: "/introduction/philosophy",
          },
          // {
          //   to: "/develop/build-dapps-with-koii/using-nfts-as-content/",
          //   from: "/build-dapps-with-koii/using-nfts-as-content",
          // },
          // {
          //   to: "/quickstart/koii-software-toolkit-sdk/register-content/",
          //   from: ["/earning-koii/registering-content", "/quickstart/koii-software-toolkit-sdk/register-content/"],
          // },
          {
            to: "/concepts/settlement-layer/native-contracts/the-task-contract",
            from: "/settlement-layer/native-contracts/the-task-contract",
          },
          {
            to: "/concepts/settlement-layer/native-contracts/the-attention-game",
            from: "/settlement-layer/native-contracts/the-attention-game",
          },
          {
            to: "/koii/the-koii-token/network-economics",
            from: "/earning-koii/network-economics",
          },
          {
            to: "/develop/command-line-tool/create-task-cli",
            from: [
              "/koii-software-toolkit-sdk/create-task-cli",
              "/develop/koii-software-toolkit-sdk/create-task-cli",
              "/quickstart/command-line-tool/create-task-cli",
            ],
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: [
              "/microservices-and-tasks/task-development-guide",
              "/develop/write-a-koii-task/task-development-kit-tdk",
            ],
          },
          {
            to: "/koii/ways-to-get-koii/compute-sharing-marketplace/",
            from: "/earning-koii/compute-sharing-marketplace",
          },
          {
            to: "/concepts/finnie-wallet/introduction",
            from: [
              "/finnie-wallet/welcome-to-finnie/content-collectives",
              "/develop/finnie-for-devs/welcome-to-finnie",
            ],
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/nedb",
            from: "/develop/microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/leveldb",
          },
          {
            to: "/concepts/settlement-layer/k2-tick-tock-fast-blocks",
            from: [
              "/quickstart/building-with-koii",
              "/settlement-layer",
              "/settlementlayer",
              "/settlement",
              "/k2",
              "/blockchain",
            ],
          },
          // {
          //   to: "/develop/category/koii-command-line-tool",
          //   from: "/develop/koii-software-toolkit-sdk/using-the-cli",
          // },

          {
            to: "/develop/command-line-tool/task-node-cli",
            from: [
              "/develop/koii-software-toolkit-sdk/task-node-cli",
              "/quickstart/command-line-tool/task-node-cli",
            ],
          },
          {
            to: "/koii/ways-to-get-koii/grants-program",
            from: [
              "/earning-koii/grants-program",
              "/concepts/earning-koii/grants-program",
            ],
          },
          {
            to: "/koii/ways-to-get-koii/get-free-tokens",
            from: [
              "/earning-koii/get-free-tokens",
              "/concepts/earning-koii/get-free-tokens",
            ],
          },
          {
            to: "/koii/the-koii-token/network-economics",
            from: "/concepts/earning-koii/network-economics",
          },
          {
            to: "/koii/ways-to-get-koii/compute-sharing-marketplace/",
            from: "/concepts/earning-koii/compute-sharing-marketplace",
          },
          {
            to: "/concepts/web3/registering-content",
            from: [
              "/concepts/earning-koii/proof-of-real-traffic/registering-content",
              "/develop/attention-mining/proof-of-real-traffic/registering-content",
            ],
          },
          {
            to: "/concepts/web3/sybil-attack-prevention",
            from: [
              "/concepts/earning-koii/proof-of-real-traffic/sybil-attack-prevention",
              "/develop/attention-mining/proof-of-real-traffic/sybil-attack-prevention",
            ],
          },
          // {
          //   from: "/develop/microservices-and-tasks/what-are-tasks/staking-and-voting",
          //   to: "/develop/designing-tasks/staking-and-voting",
          // },
          // {
          //   from: "/develop/microservices-and-tasks/what-are-tasks/what-are-audits",
          //   to: "/develop/designing-tasks/securing-task",
          // },
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
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/nodes-vs-servers",
          //   from: "/develop/microservices-and-tasks/what-are-tasks/nodes-vs-servers",
          // },
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/gradual-consensus",
          //   from: "/develop/microservices-and-tasks/what-are-tasks/gradual-consensus",
          // },
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/runtime-environment",
          //   from: "/develop/microservices-and-tasks/what-are-tasks/runtime-environment",
          // },
          {
            to: "/tutorials/linktree/intro",
            from: "/develop/microservices-and-tasks/linktree-task/intro",
          },
          {
            to: "/tutorials/linktree/data-storage",
            from: "/develop/microservices-and-tasks/linktree-task/data-storage",
          },
          {
            to: "/tutorials/linktree/data-sharing",
            from: "/develop/microservices-and-tasks/linktree-task/data-sharing",
          },
          {
            to: "/tutorials/linktree/rest-apis",
            from: "/develop/microservices-and-tasks/linktree-task/rest-api",
          },
          {
            to: "/tutorials/linktree/user-authentication",
            from: "/develop/microservices-and-tasks/linktree-task/auth-list",
          },
          {
            to: "/run-a-node/task-nodes/how-to-run-a-desktop-node",
            from: "/develop/microservices-and-tasks/run-a-task-node",
          },
          // {
          //   to: "/develop/designing-tasks/using-reputation",
          //   from: "/develop/microservices-and-tasks/using-reputation",
          // },
          {
            to: "/concepts/introduction/welcome",
            from: [
              "/concepts/koii-summary/impact",
              "/concepts/koii-summary/social-tech",
            ],
          },
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/key-components/intro",
          //   from: "/develop/microservices-and-tasks/what-are-tasks/key-components",
          // },
          // {
          //   to: "/develop/koii-task-101/what-are-tasks/",
          //   from: ["/tasks", "/task"],
          // },
          {
            from: "/concepts/the-koii-token/network-economics",
            to: "/koii/the-koii-token/network-economics",
          },

          {
            from: "/concepts/the-koii-token/tokenomics/token-generation/",
            to: "/koii/the-koii-token/tokenomics/token-generation",
          },

          {
            to: "/koii/the-koii-token/tokenomics/supply-reduction",
            from: "/concepts/the-koii-token/tokenomics/supply-reduction",
          },

          {
            to: "/koii/the-koii-token/tokenomics/reputation-hardening",
            from: "/concepts/the-koii-token/tokenomics/reputation-hardening",
          },

          {
            to: "/koii/the-koii-token/tokenomics/how-the-network-creates-value",
            from: "/concepts/the-koii-token/tokenomics/how-the-network-creates-value",
          },

          {
            from: "/concepts/ways-to-get-koii/run-a-node",
            to: "/koii/ways-to-get-koii/run-a-node",
          },
          {
            from: "/concepts/ways-to-get-koii/faucet",
            to: "/koii/ways-to-get-koii/faucet",
          },
          {
            from: "/concepts/ways-to-get-koii/attention-mining",
            to: "/koii/ways-to-get-koii/attention-mining",
          },
          {
            from: "/concepts/ways-to-get-koii/grants-program",
            to: "/koii/ways-to-get-koii/grants-program",
          },
          {
            from: "/concepts/ways-to-get-koii/compute-sharing-marketplace/",
            to: "/koii/ways-to-get-koii/compute-sharing-marketplace/",
          },

          {
            from: "/concepts/gradual-consensus/",
            to: "/concepts/gradual-concensus/runtime-flow",
          },
          {
            from: "/concepts/gradual-consensus/task-lifecycle",
            to: "/concepts/gradual-concensus/task-lifecycle",
          },

          {
            from: "/concepts/koii-wallet-finnie/welcome-to-finnie",
            to: "/concepts/finnie-wallet/introduction",
          },

          // {
          //   to: "/koii/koii-wallet-finnie/using-finnie",
          //   from: "/concepts/koii-wallet-finnie/connecting-finnie",
          // },
          {
            from: "/develop/task-tutorials/google-doodle-task/",
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getattentionid",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiistate",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiibalance",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftidsbyowner",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftreward",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftstate",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnsfwnfts",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/getblockheight",
          },
          {
            to: "/",
            from: "/quickstart/pirate-ship/ambassador-program",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/concepts/introduction/welcome",
          },
          {
            to: "/concepts/introduction/tools",
            from: "/concepts/introduction/tools",
          },
          {
            to: "/concepts/introduction/philosophy",
            from: "/concepts/introduction/philosophy",
          },
          {
            to: "/koii/the-koii-token/network-economics",
            from: "/concepts/the-koii-token/network-economics",
          },
          {
            to: "/koii/the-koii-token/tokenomics/token-generation",
            from: "/concepts/the-koii-token/tokenomics/token-generation",
          },
          {
            to: "/koii/the-koii-token/tokenomics/supply-reduction",
            from: "/concepts/the-koii-token/tokenomics/supply-reduction",
          },
          {
            to: "/koii/the-koii-token/tokenomics/reputation-hardening",
            from: "/concepts/the-koii-token/tokenomics/reputation-hardening",
          },
          {
            to: "/koii/the-koii-token/tokenomics/how-the-network-creates-value",
            from: "/concepts/the-koii-token/tokenomics/how-the-network-creates-value",
          },
          {
            to: "/koii/ways-to-get-koii/run-a-node",
            from: "/concepts/ways-to-get-koii/run-a-node",
          },
          {
            to: "/koii/ways-to-get-koii/faucet",
            from: "/concepts/ways-to-get-koii/faucet",
          },
          {
            to: "/koii/ways-to-get-koii/compute-sharing-marketplace/",
            from: "/concepts/ways-to-get-koii/compute-sharing-marketplace/",
          },
          {
            to: "/koii/ways-to-get-koii/attention-mining",
            from: "/concepts/ways-to-get-koii/attention-mining",
          },
          {
            to: "/",
            from: "/concepts/ways-to-get-koii/grants-program",
          },
          {
            to: "/koii/ways-to-get-koii/faucet",
            from: "/concepts/ways-to-get-koii/get-free-tokens",
          },
          {
            to: "/concepts/gradual-concensus/runtime-flow",
            from: "/concepts/gradual-consensus/",
          },
          {
            to: "/concepts/gradual-concensus/task-lifecycle",
            from: "/concepts/gradual-consensus/task-lifecycle",
          },
          {
            to: "/concepts/finnie-wallet/introduction",
            from: "/concepts/koii-wallet-finnie/welcome-to-finnie",
          },
          {
            to: "/concepts/finnie-wallet/introduction",
            from: "/concepts/koii-wallet-finnie/using-finnie",
          },
          {
            to: "/",
            from: "/concepts/community/community-forums",
          },
          {
            to: "/",
            from: "/concepts/community/contact-us",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/nodes-vs-servers",
          },
          {
            to: "/concepts/gradual-concensus/runtime-flow",
            from: "/develop/koii-task-101/what-are-tasks/gradual-consensus",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/runtime-environment",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/key-components/intro",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/key-components/database-sharding",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/key-components/node-to-node-sync",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/key-components/rest-api",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/koii-task-101/what-are-tasks/key-components/auth-and-security",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/designing-tasks/staking-and-voting",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/designing-tasks/securing-task",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/designing-tasks/using-reputation",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/the-namespace-object",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/rest-apis",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/filesystem-access",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/nedb",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/wallet-signatures",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/keys-and-secrets",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/storage-via-ipfs",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/timestamp-round-and-slot",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/task-state",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/customizing-the-namespace",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/testing-locally-using-jest",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/node-default-api-endpoints",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/configuration",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/using-unittest",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/executable-structure/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/executable-structure/setup",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/executable-structure/validate-node",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/executable-structure/api-endpoints-optional",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/k2-task-template/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/k2-task-template/task-function",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/k2-task-template/audit-function",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/task-development-flow/",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/task-development-flow/compile-task",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/task-development-flow/create-task",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/task-development-flow/whitelist-task",
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/introduction",
            from: "/develop/write-a-koii-task/task-development-guide/task-development-flow/create-staking-wallet",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/getting-started",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/google-doodle-task-functions",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/audit-submission-value",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/submit-distribution-list",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/audit-distribution-list",
          },
          {
            to: "/tutorials/steam-daily-specials/steam-daily-specials-task",
            from: "/develop/task-tutorials/google-doodle-task/google-doodle-executable-code",
          },
          {
            to: "/tutorials/linktree/intro",
            from: "/develop/task-tutorials/linktree-task/intro",
          },
          {
            to: "/tutorials/linktree/data-storage",
            from: "/develop/task-tutorials/linktree-task/data-storage",
          },
          {
            to: "/tutorials/linktree/data-sharing",
            from: "/develop/task-tutorials/linktree-task/data-sharing",
          },
          {
            to: "/tutorials/linktree/rest-apis",
            from: "/develop/task-tutorials/linktree-task/rest-api",
          },
          {
            to: "/tutorials/linktree/user-authentication",
            from: "/develop/task-tutorials/linktree-task/auth-list",
          },
          {
            to: "/concepts/finnie-wallet/introduction",
            from: "/develop/finnie-for-devs/welcome-to-finnie",
          },
          {
            to: "/concepts/category/k2-integration-hooks",
            from: "/develop/category/k2-integration-hooks",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/K2-integration-hooks/properties",
            from: "/develop/finnie-for-devs/K2-integration-hooks/properties",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/K2-integration-hooks/methods",
            from: "/develop/finnie-for-devs/K2-integration-hooks/methods",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/K2-integration-hooks/events",
            from: "/develop/finnie-for-devs/K2-integration-hooks/events",
          },
          {
            to: "/concepts/category/ethereum-network",
            from: "/develop/category/ethereum-network",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/ethereum-network/send-eth",
            from: "/develop/finnie-for-devs/ethereum-network/send-eth",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/ethereum-network/send-eth-eip-1559",
            from: "/develop/finnie-for-devs/ethereum-network/send-eth-eip-1559",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/ethereum-network/contract-deployment",
            from: "/develop/finnie-for-devs/ethereum-network/contract-deployment",
          },

          {
            to: "/concepts/finnie-wallet/finnie-for-devs/ethereum-network/mint-nft",
            from: "/develop/finnie-for-devs/ethereum-network/mint-nft",
          },
          {
            to: "/concepts/finnie-wallet/finnie-for-devs/other-evm-chains",
            from: "/develop/finnie-for-devs/other-evm-chains",
          },
          {
            to: "/concepts/settlement-layer/k2-tick-tock-fast-blocks",
            from: "/develop/settlement-layer/k2-tick-tock-fast-blocks",
          },
          {
            to: "/concepts/settlement-layer/native-contracts/",
            from: "/develop/settlement-layer/native-contracts/",
          },
          {
            to: "/concepts/settlement-layer/native-contracts/the-attention-game",
            from: "/develop/settlement-layer/native-contracts/the-attention-game",
          },
          {
            to: "/concepts/settlement-layer/native-contracts/the-task-contract",
            from: "/develop/settlement-layer/native-contracts/the-task-contract",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/develop/encryption/intro",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/develop/encryption/solana-encryption",
          },
          {
            to: "/concepts/introduction/welcome",
            from: "/develop/encryption/ethereum-encryption",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/welcome-to-koii-x/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/welcome-to-koii-x/quick-start",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/welcome-to-koii-x/site-metadata",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/welcome-to-koii-x/environment",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/create-nfts",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/fetching-nft-data",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/display-nfts",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/lists-and-leaderboards",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/using-thumbnails",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/using-nfts-as-content/koii-bridges",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/integrating-wallets/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/integrating-wallets/accepting-payments",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/integrating-wallets/finnie-wallet",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/integrating-wallets/ethereum-metamask",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/integrating-wallets/other-wallets",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/ui-template-layout/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/ui-template-layout/box",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/ui-template-layout/simplegrid",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/ui-template-layout/button-and-button-group",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/basic-setup",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/preview-info",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/services",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/pages",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/assets",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/components",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/internal-api-hooks",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/search",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/crowdfunding-portal/",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/installation",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/customization",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/currencies-and-wallets",
          },
          {
            to: "/tutorials/koii-apps/introduction",
            from: "/develop/build-dapps-with-koii/template-library/deploy",
          },
          {
            to: "/concepts/web3/proof-of-real-traffic",
            from: "/develop/attention-mining/proof-of-real-traffic/",
          },
          {
            to: "/concepts/web3/attention-mining",
            from: "/develop/attention-mining/proof-of-real-traffic/attention-mining",
          },
          {
            to: "/concepts/web3/registering-content",
            from: "/develop/attention-mining/proof-of-real-traffic/registering-content",
          },
          {
            to: "/concepts/web3/sybil-attack-prevention",
            from: "/develop/attention-mining/proof-of-real-traffic/sybil-attack-prevention",
          },
          {
            to: "/concepts/web3/sybil-attack-prevention",
            from: "/develop/attention-mining/proof-of-real-traffic/sybil-attack-prevention",
          },
          {
            to: "/quickstart/hello-world/introduction",
            from: "/quickstart/hello-world/intro",
          },
          {
            to: "/quickstart/hello-world/understand-the-template",
            from: "/quickstart/hello-world/task-tutorial",
          },
          {
            to: "/quickstart/hello-world/task",
            from: "/quickstart/hello-world/task-description",
          },
          {
            to: "/quickstart/hello-world/deployment",
            from: "/quickstart/hello-world/deploy",
          },
          {
            to: "/develop/category/koii-command-line-tool",
            from: "/quickstart/category/koii-command-line-tool",
          },
          {
            to: "/develop/command-line-tool/koii-cli/install-cli",
            from: "/quickstart/command-line-tool/koii-cli/install-cli",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/command-line-tool/koii-cli/create-wallet",
          },
          {
            to: "/develop/command-line-tool/koii-cli/send-and-receive-tokens",
            from: "/quickstart/command-line-tool/koii-cli/send-and-receive-tokens",
          },
          {
            to: "/develop/command-line-tool/koii-cli/connect-cluster",
            from: "/quickstart/command-line-tool/koii-cli/connect-cluster",
          },
          {
            to: "/develop/command-line-tool/task-node-cli",
            from: "/quickstart/command-line-tool/task-node-cli",
          },
          {
            to: "/develop/command-line-tool/create-task-cli",
            from: "/quickstart/command-line-tool/create-task-cli",
          },
          {
            to: "/develop/command-line-tool/cli-usage-reference",
            from: "/quickstart/command-line-tool/cli-usage-reference",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: "/quickstart/koii-software-toolkit-sdk/what-is-the-koii-sdk",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/koii-javascript-api",
            from: "/quickstart/koii-software-toolkit-sdk/koii-javascript-api",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/koii-software-toolkit-sdk/wallet-and-faucet",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/koii-software-toolkit-sdk/wallet-functions/",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/koii-software-toolkit-sdk/wallet-functions/load-wallet",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/koii-software-toolkit-sdk/wallet-functions/load-wallet",
          },
          {
            to: "/develop/command-line-tool/koii-cli/create-wallet",
            from: "/quickstart/koii-software-toolkit-sdk/wallet-functions/generate-wallet",
          },
          {
            to: "/concepts/web3/registering-content",
            from: "/quickstart/koii-software-toolkit-sdk/register-content/",
          },
          {
            to: "/concepts/web3/registering-content",
            from: "/quickstart/koii-software-toolkit-sdk/register-content/burn-koii-attention",
          },
          { to: "/concepts/introduction/welcome", from: "/concepts/glossary" },
          {
            to: "/quickstart/hello-world/introduction",
            from: "/develop/build-on-koii",
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
          if (existingPath.includes("/develop/finnie-for-devs")) {
            return [
              existingPath.replace(
                "/quickstart/finnie-for-devs",
                "/develop/finnie-for-devs"
              ),
            ];
          }
          if (existingPath.includes("/concepts/the-koii-token")) {
            return [existingPath.replace("/koii/the-koii-token")];
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-T3JDJWD",
        },
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
      },
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
            label: "🥷 Hello World!",
            to: "/quickstart/hello-world/introduction",
            activeBasePath: "hello-world",
            position: "left",
            className: "header-text",
          },

          {
            label: "📖 Koii Apps",
            to: "/tutorials/koii-apps/introduction",
            activeBasePath: "quickstart",
            position: "left",
            className: "header-text",
          },

          {
            label: "🏗️ Tools",
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            activeBasePath: "develop",
            position: "left",
            className: "header-text",
          },

          {
            label: "💡 Concepts",
            to: "/concepts/introduction/welcome",
            activeBasePath: "concepts",
            position: "left",
            className: "header-text",
          },
          {
            label: "🖥️ Run a Node",
            to: "/run-a-node/introduction/types-of-nodes",
            activeBasePath: "run-a-node",
            position: "left",
            className: "header-text",
          },
          {
            label: "🪙 $KOII",
            to: "/koii/the-koii-token/network-economics",
            activeBasePath: "koii",
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
