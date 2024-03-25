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
      value: "Welcome",
      className: "sidebar-title top-margin",
    },
    "onboarding/welcome-to-koii",
    
    {
      type: "html",
      value: "Task Development Guide",
      className: "sidebar-title top-margin",
    },
    "write-a-koii-task/task-development-guide/task-development-guide",
    "write-a-koii-task/task-development-guide/introduction",
    {
      type: "category",
      label: "Task Structure",
      link: {
        type: "doc",
        id: "write-a-koii-task/task-development-guide/task-structure/task-structure",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/task-development-guide/task-structure/execute-task",
        "write-a-koii-task/task-development-guide/task-structure/audit-submissions",
        "write-a-koii-task/task-development-guide/task-structure/distribute-rewards",
        "write-a-koii-task/task-development-guide/task-structure/setup",
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
    {
      type: "html",
      value: "Koii Software Toolkit (SDK)",
      className: "sidebar-title top-margin",
    },
    "koii-software-toolkit-sdk/what-is-the-koii-sdk",
    "koii-software-toolkit-sdk/koii-javascript-api",

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
    {
      type: "category",
      label: "Create Task CLI",
      link: {
        type: "doc",
        id: "command-line-tool/create-task-cli/intro",
      },
      collapsed: true,
      items: [
        "command-line-tool/create-task-cli/install",
        "command-line-tool/create-task-cli/create-task",
        "command-line-tool/create-task-cli/update-task",
        "command-line-tool/create-task-cli/activate-task",
        "command-line-tool/create-task-cli/fund-task",
      ],
    },

    // "command-line-tool/create-task-cli",
    "command-line-tool/cli-usage-reference",
   
    // {
    //   type: "category",
    //   label: "K2 Task Template",
    //   link: {
    //     type: "doc",
    //     id: "write-a-koii-task/task-development-guide/k2-task-template/k2-task-template",
    //   },
    //   collapsed: true,
    //   items: [
    //     "write-a-koii-task/task-development-guide/k2-task-template/task-function",
    //     "write-a-koii-task/task-development-guide/k2-task-template/audit-function",
    //     "write-a-koii-task/task-development-guide/k2-task-template/distribution-functions",
    //   ],
    // },

    {
      type: "html",
      value: "Getting Advanced",
      className: "sidebar-title top-margin",
    },
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
    "write-a-koii-task/task-development-guide/scaling-tasks/network-options",
    "write-a-koii-task/task-development-guide/scaling-tasks/spheron-infrastructure",
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
      value: "Template Applications",
      className: "sidebar-title",
    },
    "introduction",
    // {
    //   type: "html",
    //   value: "Contact Us",
    //   className: "sidebar-title",
    // },
    // "contact-us/introduction",
    // "contact-us/encryption",
    // "contact-us/frontend",
    {
      type: "category",
      label: "Linktree",
      items: [
        "linktree/intro",
        "linktree/data-storage",
        "linktree/data-sharing",
        "linktree/rest-apis",
        "linktree/user-authentication",
        "linktree/frontend",
      ],
    },
    {
      type: "category",
      label: "Extractor with Login",
      items: [
        "extractor/introduction",
        "extractor/using",
        "extractor/adapter",
        "extractor/task-structure",
      ],
    },
    {
      type: "category",
      label: "ERC20 Reward",
      items: [
        "erc20-reward/introduction",
        "erc20-reward/smart-contract",
        "erc20-reward/getting-started",
        "erc20-reward/task",
        // "erc20-reward/audit",
        "erc20-reward/distribution",
      ],
    },
  ],  
};

module.exports = sidebars;
