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
      value: "K2 Settlement Layer",
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
      type: "html",
      value: "Koii Tasks 101",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "What are Tasks?",
      link: {
        type: "doc",
        id: "koii-task-101/what-are-tasks/what-are-tasks",
      },
      collapsed: true,
      items: [
        "koii-task-101/what-are-tasks/nodes-vs-servers",
        "koii-task-101/what-are-tasks/gradual-consensus",
        "koii-task-101/what-are-tasks/runtime-environment",
        {
          type: "category",
          label: "Key Components",
          link: {
            type: "doc",
            id: "koii-task-101/what-are-tasks/key-components/key-components",
          },
          collapsed: true,
          items: [
            "koii-task-101/what-are-tasks/key-components/database-sharding",
            "koii-task-101/what-are-tasks/key-components/node-to-node-sync",
            "koii-task-101/what-are-tasks/key-components/rest-api",
            "koii-task-101/what-are-tasks/key-components/auth-and-security",
          ],
        },
      ],
    },
    {
      type: "html",
      value: "Designing Tasks",
      className: "sidebar-title top-margin",
    },
    "designing-tasks/staking-and-voting",
    "designing-tasks/securing-task",
    "designing-tasks/using-reputation",
    {
      type: "html",
      value: "Write a Koii Task",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Task Development Kit (TDK)",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-kit-tdk/task-development-kit-tdk",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Using the Task Namespace",
          link: {
            type: "doc",
            id: "write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/using-the-task-namespace",
          },
          collapsed: true,
          items: [
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
          ],
        },
        {
          type: "category",
          label: "Developing Locally with Docker",
          link: {
            type: "doc",
            id: "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/testing-locally-with-docker",
          },
          collapsed: true,
          items: [
            "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/node-default-api-endpoints",
            "write-a-koii-task/task-development-kit-tdk/testing-locally-with-docker/configuration",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Task Development Guide",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-guide/task-development-guide",
      },
      collapsed: true,
      items: [
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
      ],
    },
    {
      type: "html",
      value: "Task Tutorials",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Example Task: Google Doodle",
      link: {
        type: "doc",
        id: "task-tutorials/google-doodle-task/google-doodle-task",
      },
      collapsed: true,
      items: [
        "task-tutorials/google-doodle-task/getting-started",
        "task-tutorials/google-doodle-task/google-doodle-task-functions",
        "task-tutorials/google-doodle-task/audit-submission-value",
        "task-tutorials/google-doodle-task/submit-distribution-list",
        "task-tutorials/google-doodle-task/audit-distribution-list",
        "task-tutorials/google-doodle-task/google-doodle-executable-code",
      ],
    },
    {
      type: "category",
      label: "Example Task: Linktree",
      link: {
        type: "doc",
        id: "task-tutorials/linktree-task/intro",
      },
      collapsed: true,
      items: [
        "task-tutorials/linktree-task/data-storage",
        "task-tutorials/linktree-task/data-sharing",
        "task-tutorials/linktree-task/rest-api",
        "task-tutorials/linktree-task/auth-list",
      ],
    },
    {
      type: "category",
      label: "Example Task: Todo",
      link: {
        type: "doc",
        id: "task-tutorials/to-do/to-do",
      },
      collapsed: true,
      items: [],
    },
    {
      type: "category",
      label: "Example Task: Scrappers",
      collapsed: true,
      items: ["task-tutorials/scrapers/twitter"],
    },
    {
      type: "html",
      value: "Use Koii-X dApp Templates",
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
        "build-dapps-with-koii/integrating-wallets/ethereum-metamask",
        "build-dapps-with-koii/integrating-wallets/finnie-wallet",
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
    },
    {
      type: "html",
      value: "Attention Mining",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Proof Of Real Traffic(PoRT)",
      link: {
        type: "doc",
        id: "attention-mining/proof-of-real-traffic/proof-of-real-traffic",
      },
      collapsed: true,
      items: [
        "attention-mining/proof-of-real-traffic/attention-mining",
        "attention-mining/proof-of-real-traffic/attention-mining",
        "attention-mining/proof-of-real-traffic/sybil-attack-prevention",
      ],
    },
  ],
};

module.exports = sidebars;
