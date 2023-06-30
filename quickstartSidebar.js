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
      value: "Hello World!",
      className: "sidebar-title",
    },
    "hello-world/intro",
    "hello-world/task-tutorial",
    "hello-world/task-description",
    "hello-world/deploy",

    {
      type: "html",
      value: "Command Line Tool",
      className: "sidebar-title top-margin",
    },
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
      type: "html",
      value: "Koii Software Toolkit (SDK)",
      className: "sidebar-title top-margin",
    },
    "koii-software-toolkit-sdk/what-is-the-koii-sdk",
    "koii-software-toolkit-sdk/koii-javascript-api",
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
      value: "Join the Pirate Ship",
      className: "sidebar-title top-margin",
    },

    "pirate-ship/ambassador-program",
  ],
};

module.exports = sidebars;
