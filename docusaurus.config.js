// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

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
    require.resolve("docusaurus-plugin-image-zoom"),
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
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",

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
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",
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
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "faq",
        path: "faq",
        routeBasePath: "faq/",
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",
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
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
        include: ["**/*.md", "**/*.mdx"],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "compute",
        path: "compute",
        routeBasePath: "compute/",
        sidebarPath: require.resolve("./sidebars/computeSidebar.js"),
        editUrl: "https://gitlab.com/koii-network/dev-purple/koii-docs/tree/main",
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
            from: [
              "/introduction/readme",
              "/concepts/koii-summary/impact",
              "/concepts/koii-summary/social-tech",
              "/develop/encryption/intro",
              "/develop/encryption/solana-encryption",
              "/develop/encryption/ethereum-encryption",
              "/koii",
            ],
          },
          {
            to: "/develop/command-line-tool/koii-cli/install-cli",
            from: "/quickstart/command-line-tool/koii-cli/install-cli",
          },
          {
            to: "/concepts/introduction/tools",
            from: "/introduction/tools",
          },
          {
            to: "/",
            from: [
              "/build-dapps-with-koii/welcome-to-koii-x",
              "/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
              "/develop/build-dapps-with-koii/welcome-to-koii-x/",
              "/develop/build-dapps-with-koii/welcome-to-koii-x/tech-stack",
              "/concepts/community/community-forums",
              "/concepts/community/contact-us",
              "/develop/koii-software-toolkit-sdk/task-node-cli",
              "/quickstart/pirate-ship/ambassador-program",
            ],
          },
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
          {
            to: "/concepts/web3/registering-content",
            from: [
              "/concepts/earning-koii/proof-of-real-traffic/registering-content",
              "/develop/attention-mining/proof-of-real-traffic/registering-content",
              "/quickstart/koii-software-toolkit-sdk/register-content",
              "/quickstart/koii-software-toolkit-sdk/register-content/burn-koii-attention",
            ],
          },
          {
            to: "/concepts/web3/sybil-attack-prevention",
            from: [
              "/concepts/earning-koii/proof-of-real-traffic/sybil-attack-prevention",
              "/develop/attention-mining/proof-of-real-traffic/sybil-attack-prevention",
            ],
          },
          {
            to: "/run-a-node/task-nodes/how-to-run-a-koii-node",
            from: [
              "/earning-koii/running-task-nodes",
              "/develop/microservices-and-tasks/run-a-task-node",
            ]
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/gradual-consensus",
            from: [
              "/microservices-and-tasks/gradual-consensus",
              "/develop/koii-task-101/what-are-tasks/gradual-consensus",
              "/concepts/gradual-consensus",
              "/develop/microservices-and-tasks/what-are-tasks/gradual-consensus",
              "/concepts/gradual-consensus/runtime-flow",
            ],
          },
          {
            to: "/concepts/introduction/philosophy",
            from: "/introduction/philosophy",
          },
          {
            to: "/concepts/settlement-layer/native-contracts/the-task-contract",
            from: [
              "/settlement-layer/native-contracts/the-task-contract",
              "/develop/settlement-layer/native-contracts/the-task-contract",
            ],
          },
          {
            to: "/concepts/settlement-layer/native-contracts/the-attention-game",
            from: [
              "/settlement-layer/native-contracts/the-attention-game",
              "/develop/settlement-layer/native-contracts/the-attention-game",
            ],
          },
          {
            to: "/koii/the-koii-token/network-economics",
            from: [
              "/earning-koii/network-economics",
              "/concepts/earning-koii/network-economics",
              "/concepts/the-koii-token/network-economics",
              "/token",
            ],
          },
          {
            to: "/develop/command-line-tool/create-task-cli/intro",
            from: [
              "/koii-software-toolkit-sdk/create-task-cli",
              "/develop/koii-software-toolkit-sdk/create-task-cli",
              "/quickstart/command-line-tool/create-task-cli",
              "/develop/command-line-tool/create-task-cli",
              "/develop/command-line-tool/create-task-cli-old"
            ],
          },
          {
            to: "/koii/ways-to-get-koii/compute-sharing-marketplace",
            from: [
              "/earning-koii/compute-sharing-marketplace",
              "/concepts/ways-to-get-koii/compute-sharing-marketplace/",
            ]
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/nedb",
            from: "/develop/microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/leveldb",
          },
          {
            to: "/koii/ways-to-get-koii/grants-program",
            from: [
              "/earning-koii/grants-program",
              "/concepts/earning-koii/grants-program",
              "/concepts/ways-to-get-koii/grants-program",
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
            to: "/concepts/what-are-tasks/designing-tasks/staking-and-voting",
            from: [
              "/develop/microservices-and-tasks/what-are-tasks/staking-and-voting",
              "/develop/designing-tasks/staking-and-voting",
            ],
          },
          {
            to: "/concepts/what-are-tasks/designing-tasks/securing-task",
            from: [
              "/develop/microservices-and-tasks/what-are-tasks/what-are-audits",
              "/develop/designing-tasks/securing-task",
            ],
          },
          {
            to: "/run-a-node/k2-validators/how-to-run-a-k2-validator",
            from: [
              "/develop/settlement-layer/running-a-k2-node",
              "/settlement-layer/running-a-k2-node",
            ],
          },
          {
            to: "/run-a-node/k2-validators/system-setup",
            from: [
              "/develop/settlement-layer/running-a-k2-node/setup-process",
              "/settlement-layer/running-a-k2-node/setup-process",
            ],
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/runtime-environment",
            from: [
              "/develop/microservices-and-tasks/what-are-tasks/runtime-environment",
              "/develop/koii-task-101/what-are-tasks/runtime-environment",
            ],
          },
          {
            to: "/concepts/what-are-tasks/designing-tasks/using-reputation",
            from: [
              "/develop/microservices-and-tasks/using-reputation",
              "/develop/designing-tasks/using-reputation",
            ],
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/key-components/intro",
            from: [
              "/develop/microservices-and-tasks/what-are-tasks/key-components",
              "/develop/koii-task-101/what-are-tasks/key-components/intro",
            ],
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks",
            from: [
              "/tasks",
              "/task",
              "/microservices-and-tasks/what-are-tasks",
              "/develop/koii-task-101/what-are-tasks",
              "/develop/microservices-and-tasks/what-are-tasks",
            ],
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/nodes-vs-servers",
            from: [
              "/develop/koii-task-101/what-are-tasks/nodes-vs-servers",
              "/develop/microservices-and-tasks/what-are-tasks/nodes-vs-servers",
            ],
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/key-components/database-sharding",
            from: "/develop/koii-task-101/what-are-tasks/key-components/database-sharding",
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/key-components/node-to-node-sync",
            from: "/develop/koii-task-101/what-are-tasks/key-components/node-to-node-sync",
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/key-components/rest-api",
            from: "/develop/koii-task-101/what-are-tasks/key-components/rest-api",
          },
          {
            to: "/concepts/what-are-tasks/what-are-tasks/key-components/auth-and-security",
            from: "/develop/koii-task-101/what-are-tasks/key-components/auth-and-security",
          },
          {
            to: "/koii/the-koii-token/tokenomics/token-generation",
            from: "/concepts/the-koii-token/tokenomics/token-generation",
          },
          // {
          //   to: "/koii/koii-wallet-finnie/using-finnie",
          //   from: "/concepts/koii-wallet-finnie/connecting-finnie",
          // },
          {
            to: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
            from: [
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getattentionid",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiistate",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiibalance",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftidsbyowner",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftreward",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftstate",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/nfts/getnsfwnfts",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/",
              "/quickstart/koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/getblockheight",
              "/koii-software-toolkit-sdk/what-is-the-koii-sdk",
              "/quickstart/koii-software-toolkit-sdk/what-is-the-koii-sdk",
              "/quickstart/koii-software-toolkit-sdk/wallet-and-faucet",
              "/quickstart/koii-software-toolkit-sdk/wallet-functions/",
              "/quickstart/koii-software-toolkit-sdk/wallet-functions/load-wallet",
              "/quickstart/koii-software-toolkit-sdk/wallet-functions/generate-wallet",
            ],
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
            from: [
              "/concepts/ways-to-get-koii/faucet",
              "/concepts/ways-to-get-koii/get-free-tokens",
            ]
          },
          {
            to: "/faq/questions/",
            from: [
              "/koii/faq",
              "/faq/getting-started",
              "/faq"
            ],
          },

          {
            to: "/koii/ways-to-get-koii/attention-mining",
            from: "/concepts/ways-to-get-koii/attention-mining",
          },
          {
            to: "/concepts/finnie-wallet/introduction",
            from: [
              "/concepts/koii-wallet-finnie/welcome-to-finnie",
              "/concepts/koii-wallet-finnie/using-finnie",
              "/develop/finnie-for-devs/welcome-to-finnie",
              "/finnie-wallet/welcome-to-finnie/content-collectives",
              "/develop/build-dapps-with-koii/integrating-wallets/finnie-wallet",
            ],
          },
          {
            to: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/the-namespace-object",
            from: "/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace",
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
            from: [
              "/develop/category/ethereum-network",
              "/develop/finnie-for-devs/ethereum-network/mint-nft",
            ]
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
            to: "/concepts/finnie-wallet/finnie-for-devs/other-evm-chains",
            from: "/develop/finnie-for-devs/other-evm-chains",
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
              "/develop/settlement-layer/k2-tick-tock-fast-blocks",
            ],
          },
          {
            to: "/concepts/settlement-layer/native-contracts",
            from: "/develop/settlement-layer/native-contracts",
          },
          {
            to: "/compute/introduction",
            from: [
              "/develop/build-dapps-with-koii/welcome-to-koii-x/quick-start",
              "/develop/build-dapps-with-koii/welcome-to-koii-x/site-metadata",
              "/develop/build-dapps-with-koii/welcome-to-koii-x/environment",
              "/develop/build-dapps-with-koii/using-nfts-as-content",
              "/develop/build-dapps-with-koii/using-nfts-as-content/create-nfts",
              "/develop/build-dapps-with-koii/using-nfts-as-content/fetching-nft-data",
              "/develop/build-dapps-with-koii/using-nfts-as-content/display-nfts",
              "/develop/build-dapps-with-koii/using-nfts-as-content/lists-and-leaderboards",
              "/develop/build-dapps-with-koii/using-nfts-as-content/using-thumbnails",
              "/develop/build-dapps-with-koii/using-nfts-as-content/koii-bridges",
              "/develop/build-dapps-with-koii/integrating-wallets",
              "/develop/build-dapps-with-koii/integrating-wallets/accepting-payments",
              "/develop/build-dapps-with-koii/integrating-wallets/ethereum-metamask",
              "/develop/build-dapps-with-koii/integrating-wallets/other-wallets",
              "/develop/build-dapps-with-koii/template-library",
              "/develop/build-dapps-with-koii/template-library/ui-template-layout",
              "/develop/build-dapps-with-koii/template-library/ui-template-layout/box",
              "/develop/build-dapps-with-koii/template-library/ui-template-layout/simplegrid",
              "/develop/build-dapps-with-koii/template-library/ui-template-layout/button-and-button-group",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/basic-setup",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/preview-info",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/services",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/pages",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/assets",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/components",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/internal-api-hooks",
              "/develop/build-dapps-with-koii/template-library/leaderboard-app/customization/search",
              "/develop/build-dapps-with-koii/template-library/crowdfunding-portal",
              "/develop/build-dapps-with-koii/template-library/installation",
              "/develop/build-dapps-with-koii/template-library/customization",
              "/develop/build-dapps-with-koii/template-library/currencies-and-wallets",
              "/develop/build-dapps-with-koii/template-library/deploy",
              "/getcompute",
            ]
          },
          {
            to: "/develop/category/koii-command-line-tool",
            from: [
              "/quickstart/category/koii-command-line-tool",
              "/develop/koii-software-toolkit-sdk/using-the-cli",
              "/koii-software-toolkit-sdk/using-the-cli",
            ],
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
            to: "/develop/command-line-tool/cli-usage-reference",
            from: "/quickstart/command-line-tool/cli-usage-reference",
          },
          {
            to: "/develop/koii-software-toolkit-sdk/koii-javascript-api",
            from: "/quickstart/koii-software-toolkit-sdk/koii-javascript-api",
          },
          {
            to: "/develop/task-development/write-a-task",
            from: [
              "/develop/write-a-koii-task/task-development-guide/introduction",
              "/develop/write-a-koii-task/task-development-guide",
              "/develop/write-a-koii-task/task-development-guide/task-structure",
              "/develop/write-a-koii-task/task-development-guide/template-structure/task-structure",
              "/develop/write-a-koii-task/task-development-guide/template-structure/execute-task",
              "/develop/write-a-koii-task/task-development-guide/template-structure/audit-submissions",
              "/develop/write-a-koii-task/task-development-guide/template-structure/distribute-rewards",
              "/develop/write-a-koii-task/task-development-guide/template-structure/setup",
              "/develop/write-a-koii-task/task-development-guide/template-structure/upnp-structure",
              "/microservices-and-tasks/task-development-guide",
              "/develop/write-a-koii-task/task-development-kit-tdk",
              "/quickstart/hello-world/introduction",
              "/quickstart/hello-world/understand-the-template",
              "/quickstart/hello-world/task",
              "/quickstart/hello-world/audit",
              "/quickstart/hello-world/distribution",
              "/quickstart/hello-world/local-test",
              "/quickstart/hello-world/get-request",
              "/quickstart/hello-world/deployment",
              "/quickstart/hello-world/update",
              "/quickstart/hello-world/run-your-task",
              "/quickstart/hello-world/what-is-next",
              "/quickstart/migrate-apps/web-crawler",
              "/quickstart/crawler/introduction",
              "/quickstart/hello-world/intro",
              "/develop/build-on-koii",
              "/quickstart/hello-world/task-tutorial",
              "/quickstart/hello-world/task-description",
              "/quickstart/hello-world/deploy",
              "/develop/write-a-koii-task/task-development-guide/task-structure/execute-task",
              "/develop/write-a-koii-task/task-development-guide/task-structure/audit-submissions",
              "/develop/write-a-koii-task/task-development-guide/task-structure/distribute-rewards",
              "/develop/write-a-koii-task/task-development-guide/task-structure/setup",
              "/develop/write-a-koii-task/task-development-guide/task-development-guide",
              "/develop/write-a-koii-task/task-development-guide/task-structure/execute-task",
              "/develop/write-a-koii-task/task-development-guide/task-structure/audit-submissions",
              "/develop/write-a-koii-task/task-development-guide/task-structure/distribute-rewards",
              "/develop/write-a-koii-task/task-development-guide/task-structure/setup",
              "/develop/write-a-koii-task/task-development-guide/task-development-guide",
              "/develop/write-a-koii-task/task-development-guide",
              "/microservices-and-tasks/task-development-guide",
              "/develop/write-a-koii-task/task-development-kit-tdk",
            ],
          },
          {
            to: "/develop/task-development/key-concepts",
            from: [
              "/develop/write-a-koii-task/task-development-guide/key-concepts",
              "/develop/write-a-koii-task/k2-task-template/distribution-functions",
              "/develop/write-a-koii-task/k2-task-template/audit-function",
              "/develop/write-a-koii-task/k2-task-template/task-function",
              "/develop/write-a-koii-task/task-development-guide/k2-task-template/"
            ],
          },
          {
            to: "/develop/task-development/task-development-flow",
            from: [
              "/develop/write-a-koii-task/task-development-guide/task-development-flow/",
              "/develop/write-a-koii-task/task-development-guide/task-development-flow/compile-task",
              "/develop/write-a-koii-task/task-development-guide/task-development-flow/create-task",
              "/develop/write-a-koii-task/task-development-guide/task-development-flow/create-staking-wallet"
            ],
          },
          {
            to: "/develop/task-development/whitelist-task",
            from: [
              "/develop/write-a-koii-task/task-development-guide/task-development-flow/whitelist-task",
            ],
          },
          {
            to: "/develop/category/testing",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/testing",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/testing"
            ]
          },
          {
            to: "/develop/task-development/testing/testing-locally-using-jest",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/testing-locally-using-jest",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/testing-locally-using-jest"
            ]
          },
          {
            to: "/develop/task-development/testing/configuration",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/configuration",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/configuration"
            ]
          },
          {
            to: "/develop/task-development/testing/using-unittest",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/using-unittest",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/using-unittest"
            ]
          },
          {
            to: "/develop/task-development/testing/easy-testing",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/easy-testing",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/easy-testing",
            ]
          },
          {
            to: "/develop/task-development/testing/simulating-a-round",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/simulating-a-round",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/simulating-a-round"
            ]
          },
          {
            to: "/develop/task-development/testing/docker-test",
            from: [
              "/develop/write-a-koii-task/task-development-kit-tdk/test/docker-test",
              "/develop/write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/docker-test"
            ]
          },
          {
            to: "/concepts/distributed-cloud/reduced-computing-costs",
            from: "/concepts/distributed-cloud/community-powered-hosting"
          },
          {
            to: "/develop/introduction",
            from: ["/quickstart/introduction"],
          },
          {
            to: "/develop/linktree/intro",
            from: [
              "/quickstart/linktree/intro",
              "/quickstart/linktree/data-storage",
              "/quickstart/linktree/data-sharing",
              "/quickstart/linktree/rest-apis",
              "/quickstart/linktree/user-authentication",
              "/quickstart/linktree/frontend",
              "/develop/microservices-and-tasks/linktree-task/intro",
              "/develop/microservices-and-tasks/linktree-task/data-storage",
              "/develop/microservices-and-tasks/linktree-task/data-sharing",
              "/develop/microservices-and-tasks/linktree-task/rest-api",
              "/develop/microservices-and-tasks/linktree-task/auth-list",
              "/develop/task-tutorials/linktree-task/intro",
              "/develop/task-tutorials/linktree-task/data-storage",
              "/develop/task-tutorials/linktree-task/data-sharing",
              "/develop/task-tutorials/linktree-task/rest-api",
              "/develop/task-tutorials/linktree-task/auth-list",
            ],
          },
          {
            to: "/develop/extractor/introduction",
            from: ["/quickstart/extractor/introduction", "/compute/aggregator/introduction", "/develop/migrate-apps/web-crawler"]
          },
          {
            to: "/develop/extractor/using",
            from: ["/quickstart/extractor/using", "/compute/aggregator/advancedsearch"]
          },
          {
            to: "/develop/extractor/adapter",
            from: ["/quickstart/extractor/adapter", "/compute/aggregator/technical"]
          },
          {
            to: "/develop/extractor/task-structure",
            from: ["/quickstart/extractor/task-structure", "/compute/aggregator/task"]
          },
          {
            to: "/develop/extractor/testing",
            from: ["/quickstart/extractor/testing", "/compute/aggregator/testing"]
          },
          {
            to: "/develop/erc20-reward/introduction",
            from: "/quickstart/erc20-reward/introduction",
          },
          {
            to: "/develop/erc20-reward/smart-contract",
            from: "/quickstart/erc20-reward/smart-contract",
          },
          {
            to: "/develop/erc20-reward/getting-started",
            from: "/quickstart/erc20-reward/getting-started",
          },
          {
            to: "/develop/erc20-reward/task",
            from: "/quickstart/erc20-reward/task",
          },
          {
            to: "/develop/erc20-reward/distribution",
            from: "/quickstart/erc20-reward/distribution",
          },
          {
            to: "/faq/community-contributions",
            from: "/faq/pagefive",
          },
          {
            to: "/faq/comics",
            from: "/faq/pagefour",
          },
          {
            to: "/faq/documentations",
            from: "/faq/pagethree",
          },
          {
            to: "/run-a-node/introduction/types-of-nodes",
            from: "/nodes",
          },
          {
            to: "/develop/onboarding/welcome-to-koii",
            from: "/developers",
          },
          {
            to: "/run-a-node/k2-validators/validator-requirements",
            from: [
              "/develop/settlement-layer/running-a-k2-node/system-requirements",
              "/run-a-node/k2-validators/system-requirements"
            ],
          },
          {
            to: "/run-a-node/task-nodes/concepts/what-is-an-rpc-node",
            from: "/concepts/what-are-koii-nodes/what-is-an-rpc-node",
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
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
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
            label: "💡 What is KOII",
            to: "/concepts/introduction/welcome",
            activeBasePath: "concepts",
            position: "left",
            className: "header-text",
          },
          {
            label: "🖥️ Nodes",
            to: "/run-a-node/introduction/types-of-nodes",
            activeBasePath: "run-a-node",
            position: "left",
            className: "header-text",
          },
          {
            label: "</> Developers",
            to: "/develop/onboarding/welcome-to-koii",
            activeBasePath: "develop",
            position: "left",
            className: "header-text",
          },
          {
            label: "💰 Token",
            to: "/koii/the-koii-token/network-economics",
            activeBasePath: "koii",
            position: "left",
            className: "header-text",
          },
          {
            label: "❓ FAQ",
            to: "/faq/questions/",
            activeBasePath: "faq",
            position: "left",
            className: "header-text",
          },
        ],
      },
      footer: {},
      algolia: {
        // The application ID provided by Algolia
        appId: "5ZYGLTQ5FL",
        // Public API key: it is safe to commit it
        apiKey: "24cf44066f20cc284d670794521d2b06",
        indexName: "koii",
        // Optional: see doc section below
        // contextualSearch: true,
      },
      // prism: {
      //   theme: darkCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      //
    }),
};

module.exports = config;
