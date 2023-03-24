/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  content: [
    {
      type: "html",
      value: "🤑 K2 Settlement Layer",
      className: "sidebar-title",
    },
    "settlement-layer/k2-tick-tock-fast-blocks",
    {
      type: "category",
      label: "Native Contracts",
      link: {
        type: "doc",
        id: "settlement-layer/native-contracts/native-contracts",
      },
      collapsed: true,
      items: [
        "settlement-layer/native-contracts/the-attention-game",
        "settlement-layer/native-contracts/the-task-contract",
      ],
    },
    {
      type: "category",
      label: "Running a K2 Node",
      link: {
        type: "doc",
        id: "settlement-layer/running-a-k2-node/running-a-k2-node",
      },
      collapsed: true,
      items: [
        "settlement-layer/running-a-k2-node/system-requirements",
        "settlement-layer/running-a-k2-node/setup-process",
      ],
    },
    "settlement-layer/creating-tokens-on-k2",
    "settlement-layer/block-explorer",
    "settlement-layer/wallets",
    "settlement-layer/rent",
    {
      type: "html",
      value: "💪 Microservices & Tasks",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "What are Tasks?",
      link: {
        type: "doc",
        id: "microservices-and-tasks/what-are-tasks/what-are-tasks",
      },
      collapsed: true,
      items: [
        "microservices-and-tasks/what-are-tasks/nodes-vs-servers",
        "microservices-and-tasks/what-are-tasks/gradual-consensus",
        "microservices-and-tasks/what-are-tasks/runtime-environment",
        "microservices-and-tasks/what-are-tasks/key-components",
        "microservices-and-tasks/what-are-tasks/staking-and-voting",
        "microservices-and-tasks/what-are-tasks/what-are-audits",
      ],
    },
    {
      type: "category",
      label: "Task Development Kit (TDK)",
      link: {
        type: "doc",
        id: "microservices-and-tasks/task-development-kit-tdk/task-development-kit-tdk",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Using the Task Namespace",
          link: {
            type: "doc",
            id: "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/using-the-task-namespace",
          },
          collapsed: true,
          items: [
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/the-namespace-object",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/rest-apis",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/filesystem-access",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/leveldb",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/wallet-signatures",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/keys-and-secrets",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/storage-via-ipfs",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/timestamp-round-and-slot",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/task-state",
            "microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/customizing-the-namespace",
          ],
        },
        {
          type: "category",
          label: "Developing Locally with Docker",
          link: {
            type: "doc",
            id: "microservices-and-tasks/task-development-kit-tdk/testing-locally-with-docker/testing-locally-with-docker",
          },
          collapsed: true,
          items: [
            "microservices-and-tasks/task-development-kit-tdk/testing-locally-with-docker/node-default-api-endpoints",
            "microservices-and-tasks/task-development-kit-tdk/testing-locally-with-docker/configuration",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Task Development Guide",
      link: {
        type: "doc",
        id: "microservices-and-tasks/task-development-guide/task-development-guide",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Executable Structure",
          link: {
            type: "doc",
            id: "microservices-and-tasks/task-development-guide/executable-structure/executable-structure",
          },
          collapsed: true,
          items: [
            "microservices-and-tasks/task-development-guide/executable-structure/setup",
            "microservices-and-tasks/task-development-guide/executable-structure/validate-node",
            "microservices-and-tasks/task-development-guide/executable-structure/api-endpoints-optional",
          ],
        },
        {
          type: "category",
          label: "K2 Task Template",
          link: {
            type: "doc",
            id: "microservices-and-tasks/task-development-guide/k2-task-template/k2-task-template",
          },
          collapsed: true,
          items: [
            "microservices-and-tasks/task-development-guide/k2-task-template/task-function",
            "microservices-and-tasks/task-development-guide/k2-task-template/audit-function",
            "microservices-and-tasks/task-development-guide/k2-task-template/distribution-functions",
          ],
        },
        {
          type: "category",
          label: "Task Development Flow",
          collapsed: true,
          link: {
            type: "doc",
            id: "microservices-and-tasks/task-development-guide/task-development-flow/task-development-flow",
          },
          items: [
            "microservices-and-tasks/task-development-guide/task-development-flow/compile-task",
            "microservices-and-tasks/task-development-guide/task-development-flow/create-task",
            "microservices-and-tasks/task-development-guide/task-development-flow/whitelist-task",
            "microservices-and-tasks/task-development-guide/task-development-flow/create-staking-wallet",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Example Task: Google Doodle",
      link: {
        type: "doc",
        id: "microservices-and-tasks/quote-of-the-day-example-task/google-doodle-task",
      },
      collapsed: true,
      items: [
        "microservices-and-tasks/quote-of-the-day-example-task/getting-started",
        "microservices-and-tasks/quote-of-the-day-example-task/google-doodle-task-functions",
        "microservices-and-tasks/quote-of-the-day-example-task/audit-submission-value",
        "microservices-and-tasks/quote-of-the-day-example-task/submit-distribution-list",
        "microservices-and-tasks/quote-of-the-day-example-task/audit-distribution-list",
        "microservices-and-tasks/quote-of-the-day-example-task/google-doodle-executable-code",
      ],
    },
    "microservices-and-tasks/run-a-task-node",
    "microservices-and-tasks/using-reputation",
    {
      type: "html",
      value: "⚙ Koii Software Toolkit (SDK)",
      className: "sidebar-title top-margin",
    },
    "koii-software-toolkit-sdk/what-is-the-koii-sdk",
    "koii-software-toolkit-sdk/koii-javascript-api",
    "koii-software-toolkit-sdk/using-the-cli",
    "koii-software-toolkit-sdk/task-node-cli",
    "koii-software-toolkit-sdk/create-task-cli",
    "koii-software-toolkit-sdk/wallet-and-faucet",
    {
      type: "category",
      label: "Wallet Functions",
      link: {
        type: "doc",
        id: "koii-software-toolkit-sdk/wallet-functions/wallet-functions",
      },
      collapsed: true,
      items: [
        "koii-software-toolkit-sdk/wallet-functions/load-wallet",
        "koii-software-toolkit-sdk/wallet-functions/generate-wallet",
      ],
    },
    {
      type: "category",
      label: "Register Content",
      link: {
        type: "doc",
        id: "koii-software-toolkit-sdk/register-content/register-content",
      },
      collapsed: true,
      items: ["koii-software-toolkit-sdk/register-content/burn-koii-attention"],
    },
    {
      type: "category",
      label: "Basic Utility Functions",
      link: {
        type: "doc",
        id: "koii-software-toolkit-sdk/basic-utility-functions/basic-utility-functions",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Koii State",
          link: {
            type: "doc",
            id: "koii-software-toolkit-sdk/basic-utility-functions/koii-state/koii-state",
          },
          collapsed: true,
          items: [
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getattentionid",
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiistate",
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoibalance",
          ],
        },
        {
          type: "category",
          label: "NFTs",
          link: {
            type: "doc",
            id: "koii-software-toolkit-sdk/basic-utility-functions/nfts/nfts",
          },
          collapsed: true,
          items: [
            "koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftidsbyowner",
            "koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftreward",
            "koii-software-toolkit-sdk/basic-utility-functions/nfts/getnftstate",
            "koii-software-toolkit-sdk/basic-utility-functions/nfts/getnsfwnfts",
          ],
        },
        {
          type: "category",
          label: "Arweave And General Utility",
          link: {
            type: "doc",
            id: "koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/arweave-and-general-utility",
          },
          collapsed: true,
          items: [
            "koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/getblockheight",
          ],
        },
      ],
    },
    {
      type: "html",
      value: "🐟 Finnie For Devs",
      className: "sidebar-title top-margin",
    },
    "finnie-for-devs/welcome-to-finnie",
    "finnie-for-devs/connecting-finnie",
    {
      type: "category",
      label: "Koii Network",
      link: {
        type: "generated-index",
        description: "Here are the articles in this section",
      },
      collapsed: true,
      items: [
        "finnie-for-devs/koii-network/transfer-koii",
        "finnie-for-devs/koii-network/signpayload-koii",
        "finnie-for-devs/koii-network/transfer-ar",
        "finnie-for-devs/koii-network/transfernft",
      ],
    },
    {
      type: "category",
      label: "Ethereum Network",
      link: {
        type: "generated-index",
        description:
          "The following chapters will show you how you can use your Finnie wallet to interact with the Ethereum blockchain.",
      },
      collapsed: true,
      items: [
        "finnie-for-devs/ethereum-network/send-eth",
        "finnie-for-devs/ethereum-network/send-eth-eip-1559",
        "finnie-for-devs/ethereum-network/contract-deployment",
        "finnie-for-devs/ethereum-network/mint-nft",
      ],
    },
    "finnie-for-devs/other-evm-chains",
    {
      type: "html",
      value: "🧙 Build Dapps with Koii",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "👋 Welcome to Koii-X",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/welcome-to-koii-x/welcome-to-koii-x",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/welcome-to-koii-x/quick-start",
        "build-dapps-with-koii/welcome-to-koii-x/site-metadata",
        "build-dapps-with-koii/welcome-to-koii-x/tech-stack",
        "build-dapps-with-koii/welcome-to-koii-x/environment",
      ],
    },
    {
      type: "category",
      label: "🎨 Using NFTs as Content",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/using-nfts-as-content/using-nfts-as-content",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/using-nfts-as-content/create-nfts",
        "build-dapps-with-koii/using-nfts-as-content/fetching-nft-data",
        "build-dapps-with-koii/using-nfts-as-content/display-nfts",
        "build-dapps-with-koii/using-nfts-as-content/lists-and-leaderboards",
        "build-dapps-with-koii/using-nfts-as-content/using-thumbnails",
        "build-dapps-with-koii/using-nfts-as-content/koii-bridges",
      ],
    },
    {
      type: "category",
      label: "🤖 Integrating Wallets",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/integrating-wallets/integrating-wallets",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/integrating-wallets/accepting-payments",
        "build-dapps-with-koii/integrating-wallets/ethereum-metamask",
        "build-dapps-with-koii/integrating-wallets/finnie-wallet",
        "build-dapps-with-koii/integrating-wallets/other-wallets",
      ],
    },
    {
      type: "category",
      label: "🚚 Template Library",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/template-library/template-library",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/template-library/site-meta-data",
        {
          type: "category",
          label: "💡 UI Template Layout",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/ui-template-layout/ui-template-layout",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/ui-template-layout/box",
            "build-dapps-with-koii/template-library/ui-template-layout/simplegrid",
            "build-dapps-with-koii/template-library/ui-template-layout/button-and-button-group",
          ],
        },
        {
          type: "category",
          label: "📃 Leaderboard App",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/leaderboard-app/leaderboard-app",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/leaderboard-app/basic-setup",
            {
              type: "category",
              label: "Customization",
              link: {
                type: "doc",
                id: "build-dapps-with-koii/template-library/leaderboard-app/customization/customization",
              },
              collapsed: true,
              items: [
                "build-dapps-with-koii/template-library/leaderboard-app/customization/preview-info",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/services",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/pages",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/assets",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/components",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/internal-api-hooks",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/search",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "💰 Crowdfunding Portal",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/crowdfunding-portal/crowdfunding-portal",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/crowdfunding-portal/installation",
            "build-dapps-with-koii/template-library/crowdfunding-portal/customization",
            "build-dapps-with-koii/template-library/crowdfunding-portal/currencies-and-wallets",
          ],
        },
        "build-dapps-with-koii/template-library/deploy",
      ],
    },
    {
      type: "html",
      value: "❕ Support",
      className: "sidebar-title top-margin",
    },
    "support/community-forums",
    "support/contact-support",
  ],
};

module.exports = sidebars;
