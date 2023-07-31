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
      value: "Koii Software Toolkit (SDK)",
      className: "sidebar-title top-margin",
    },
    "koii-software-toolkit-sdk/what-is-the-koii-sdk",
    "koii-software-toolkit-sdk/koii-javascript-api",

    // {
    //   type: "html",
    //   value: "Koii Command Line Tool (CLI)",
    //   className: "sidebar-title top-margin",
    // },
    {
      type: "category",
      label: "Koii Command Line Tool",
      link: {
        type: "generated-index",
        description:
          "In this section, we'll go over how to create a wallet, send and receive KOII tokens, and participate in the cluster by delegating stakes using the Koii command-line tools.          Here are the articles in this section:",
      },
      collapsed: true,
      items: [
        "command-line-tool/koii-cli/install-cli",
        "command-line-tool/koii-cli/create-wallet",
        "command-line-tool/koii-cli/send-and-receive-tokens",
        "command-line-tool/koii-cli/connect-cluster",
      ],
    },
    "command-line-tool/task-node-cli",
    "command-line-tool/create-task-cli",
    "command-line-tool/cli-usage-reference",
    {
      type: "category",
      label: "Koii Command Line Tool",
      link: {
        type: "generated-index",
        description:
          "In this section, we'll go over how to create a wallet, send and receive KOII tokens, and participate in the cluster by delegating stakes using the Koii command-line tools.          Here are the articles in this section:",
      },
      collapsed: true,
      items: [
        "command-line-tool/koii-cli/install-cli",
        "command-line-tool/koii-cli/create-wallet",
        "command-line-tool/koii-cli/send-and-receive-tokens",
        "command-line-tool/koii-cli/connect-cluster",
      ],
    },
    "command-line-tool/task-node-cli",
    "command-line-tool/create-task-cli",
    "command-line-tool/cli-usage-reference",
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
      value: "Koii Task Development Kit (TDK)",
      className: "sidebar-title top-margin",
    },
    "write-a-koii-task/task-development-kit-tdk/introduction",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/the-namespace-object",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/rest-apis",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/filesystem-access",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/nedb",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/wallet-signatures",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/keys-and-secrets",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/storage-via-ipfs",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/timestamp-round-and-slot",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/task-state",
    "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/customizing-the-namespace",

    {
      type: "category",
      label: "Testing Locally Using Jest",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/testing-locally-using-jest",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/node-default-api-endpoints",
        "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/configuration",
        "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/using-unittest",
      ],
    },
    "write-a-koii-task/task-development-kit-tdk/simulating-a-round",

    {
      type: "html",
      value: "Task Development Guide",
      className: "sidebar-title top-margin",
    },
    "write-a-koii-task/task-development-guide/task-development-guide",
    // {
    //   type: "category",
    //   label: "Task Development Guide",
    //   link: {
    //     type: "doc",
    //     id: "write-a-koii-task/task-development-guide/task-development-guide",
    //   },
    //   collapsed: true,
    //   items: [
    {
      type: "category",
      label: "Executable Structure",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-guide/executable-structure/executable-structure",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/task-development-guide/executable-structure/setup",
        "write-a-koii-task/task-development-guide/executable-structure/validate-node",
        "write-a-koii-task/task-development-guide/executable-structure/api-endpoints-optional",
      ],
    },
    {
      type: "category",
      label: "K2 Task Template",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-guide/k2-task-template/k2-task-template",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/task-development-guide/k2-task-template/task-function",
        "write-a-koii-task/task-development-guide/k2-task-template/audit-function",
        "write-a-koii-task/task-development-guide/k2-task-template/distribution-functions",
      ],
    },
    {
      type: "category",
      label: "Task Development Flow",
      collapsed: true,
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-guide/task-development-flow/task-development-flow",
      },
      items: [
        "write-a-koii-task/task-development-guide/task-development-flow/compile-task",
        "write-a-koii-task/task-development-guide/task-development-flow/create-task",
        "write-a-koii-task/task-development-guide/task-development-flow/whitelist-task",
        "write-a-koii-task/task-development-guide/task-development-flow/create-staking-wallet",
      ],
    },
    //   ],
    // },
    /*   {
      type: "html",
      value: "Koii-X",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Welcome to Koii-X",
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
      label: "Using NFTs as Content",
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
      label: "Integrating Wallets",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/integrating-wallets/integrating-wallets",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/integrating-wallets/accepting-payments",
        "build-dapps-with-koii/integrating-wallets/finnie-wallet",
        "build-dapps-with-koii/integrating-wallets/ethereum-metamask",
        "build-dapps-with-koii/integrating-wallets/other-wallets",
      ],
    },
    {
      type: "category",
      label: "Template Library",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/template-library/template-library",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "UI Template Layout",
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
          label: "Leaderboard App",
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
                "build-dapps-with-koii/template-library /leaderboard-app/customization/pages",
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
          label: "Crowdfunding Portal",
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
    }, */

    // "build-on-koii",
    // {
    //   type: "html",
    //   value: "Koii Tasks 101",
    //   className: "sidebar-title top-margin",
    // },
    // {
    //   type: "category",
    //   label: "What are Tasks?",
    //   link: {
    //     type: "doc",
    //     id: "koii-task-101/what-are-tasks/what-are-tasks",
    //   },
    //   collapsed: true,
    //   items: [
    //     "koii-task-101/what-are-tasks/nodes-vs-servers",
    //     "koii-task-101/what-are-tasks/gradual-consensus",
    //     "koii-task-101/what-are-tasks/runtime-environment",
    //     {
    //       type: "category",
    //       label: "Key Components",
    //       link: {
    //         type: "doc",
    //         id: "koii-task-101/what-are-tasks/key-components/intro",
    //       },
    //       collapsed: true,
    //       items: [
    //         "koii-task-101/what-are-tasks/key-components/database-sharding",
    //         "koii-task-101/what-are-tasks/key-components/node-to-node-sync",
    //         "koii-task-101/what-are-tasks/key-components/rest-api",
    //         "koii-task-101/what-are-tasks/key-components/auth-and-security",
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: "html",
    //   value: "Designing Tasks",
    //   className: "sidebar-title top-margin",
    // },
    // "designing-tasks/staking-and-voting",
    // "designing-tasks/securing-task",
    // "designing-tasks/using-reputation",
    // {
    //   type: "category",
    //   label: "Task Development Guide",
    //   link: {
    //     type: "doc",
    //     id: "write-a-koii-task/task-development-guide/task-development-guide",
    //   },
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "category",
    //       label: "Executable Structure",
    //       link: {
    //         type: "doc",
    //         id: "write-a-koii-task/task-development-guide/executable-structure/executable-structure",
    //       },
    //       collapsed: true,
    //       items: [
    //         "write-a-koii-task/task-development-guide/executable-structure/setup",
    //         "write-a-koii-task/task-development-guide/executable-structure/validate-node",
    //         "write-a-koii-task/task-development-guide/executable-structure/api-endpoints-optional",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "K2 Task Template",
    //       link: {
    //         type: "doc",
    //         id: "write-a-koii-task/task-development-guide/k2-task-template/k2-task-template",
    //       },
    //       collapsed: true,
    //       items: [
    //         "write-a-koii-task/task-development-guide/k2-task-template/task-function",
    //         "write-a-koii-task/task-development-guide/k2-task-template/audit-function",
    //         "write-a-koii-task/task-development-guide/k2-task-template/distribution-functions",
    //       ],
    //     },
    //     {
    //       type: "category",
    //       label: "Task Development Flow",
    //       collapsed: true,
    //       link: {
    //         type: "doc",
    //         id: "write-a-koii-task/task-development-guide/task-development-flow/task-development-flow",
    //       },
    //       items: [
    //         "write-a-koii-task/task-development-guide/task-development-flow/compile-task",
    //         "write-a-koii-task/task-development-guide/task-development-flow/create-task",
    //         "write-a-koii-task/task-development-guide/task-development-flow/whitelist-task",
    //         "write-a-koii-task/task-development-guide/task-development-flow/create-staking-wallet",
    //       ],
    //     },
    //   ],
    // },
    // {
    //   type: "html",
    //   value: "Task Tutorials",
    //   className: "sidebar-title top-margin",
    // },
    // {
    //   type: "category",
    //   label: "Example Task: Google Doodle",
    //   link: {
    //     type: "doc",
    //     id: "task-tutorials/google-doodle-task/google-doodle-task",
    //   },
    //   collapsed: true,
    //   items: [
    //     "task-tutorials/google-doodle-task/getting-started",
    //     "task-tutorials/google-doodle-task/google-doodle-task-functions",
    //     "task-tutorials/google-doodle-task/audit-submission-value",
    //     "task-tutorials/google-doodle-task/submit-distribution-list",
    //     "task-tutorials/google-doodle-task/audit-distribution-list",
    //     "task-tutorials/google-doodle-task/google-doodle-executable-code",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Example Task: Linktree",
    //   link: {
    //     type: "doc",
    //     id: "task-tutorials/linktree-task/intro",
    //   },
    //   collapsed: true,
    //   items: [
    //     "task-tutorials/linktree-task/data-storage",
    //     "task-tutorials/linktree-task/data-sharing",
    //     "task-tutorials/linktree-task/rest-api",
    //     "task-tutorials/linktree-task/auth-list",
    //   ],
    // },
    // {
    //   type: "html",
    //   value: "Finnie For Devs",
    //   className: "sidebar-title top-margin",
    // },
    // "finnie-for-devs/welcome-to-finnie",
    // {
    //   type: "category",
    //   label: "K2 integration hooks",
    //   link: {
    //     type: "generated-index",
    //     description: "Here are the articles in this section",
    //   },
    //   collapsed: true,
    //   items: [
    //     "finnie-for-devs/K2-integration-hooks/properties",
    //     "finnie-for-devs/K2-integration-hooks/methods",
    //     "finnie-for-devs/K2-integration-hooks/events",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Ethereum Network",
    //   link: {
    //     type: "generated-index",
    //     description:
    //       "The following chapters will show you how you can use your Finnie wallet to interact with the Ethereum blockchain.",
    //   },
    //   collapsed: true,
    //   items: [
    //     "finnie-for-devs/ethereum-network/send-eth",
    //     "finnie-for-devs/ethereum-network/send-eth-eip-1559",
    //     "finnie-for-devs/ethereum-network/contract-deployment",
    //     "finnie-for-devs/ethereum-network/mint-nft",
    //   ],
    // },
    // "finnie-for-devs/other-evm-chains",

    // {
    //   type: "html",
    //   value: "K2 Settlement Layer",
    //   className: "sidebar-title",
    // },
    // "settlement-layer/k2-tick-tock-fast-blocks",
    // {
    //   type: "category",
    //   label: "Native Contracts",
    //   link: {
    //     type: "doc",
    //     id: "settlement-layer/native-contracts/native-contracts",
    //   },
    //   collapsed: true,
    //   items: [
    //     "settlement-layer/native-contracts/the-attention-game",
    //     "settlement-layer/native-contracts/the-task-contract",
    //   ],
    // },

    // {
    //   type: "html",
    //   value: "Encryption",
    //   className: "sidebar-title top-margin",
    // },
    // "encryption/intro",
    // "encryption/solana-encryption",
    // "encryption/ethereum-encryption",
    // {
    //   type: "html",
    //   value: "Attention Mining",
    //   className: "sidebar-title top-margin",
    // },
    // {
    //   type: "category",
    //   label: "Proof Of Real Traffic(PoRT)",
    //   link: {
    //     type: "doc",
    //     id: "attention-mining/proof-of-real-traffic/proof-of-real-traffic",
    //   },
    //   collapsed: true,
    //   items: [
    //     "attention-mining/proof-of-real-traffic/attention-mining",
    //     "attention-mining/proof-of-real-traffic/registering-content",
    //     "attention-mining/proof-of-real-traffic/sybil-attack-prevention",
    //   ],
    // },
  ],
};

module.exports = sidebars;
