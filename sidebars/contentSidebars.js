/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  content: [
    {
      type: "html",
      value: "What is Koii?",
      className: "sidebar-title",
    },
    "introduction/welcome",
    "introduction/tools",
    "introduction/philosophy",
    // {
    //   type: "html",
    //   value: "Get Started",
    //   className: "sidebar-title",
    // },
    // "getstarted/globalcomputer",
    // "getstarted/koiinetwork",

    {
      type: "html",
      value: "What are Koii Nodes?",
      className: "sidebar-title",
    },
    "what-are-koii-nodes/introduction",
    "what-are-koii-nodes/koii-node-app",
    "what-are-koii-nodes/what-is-an-rpc-node",
    {
      type: "html",
      value: "What are Tasks?",
      className: "sidebar-title top-margin",
    },
    "what-are-tasks/what-are-tasks/what-are-tasks",
    "what-are-tasks/what-are-tasks/gradual-consensus",
    "what-are-tasks/what-are-tasks/nodes-vs-servers",
    "what-are-tasks/what-are-tasks/runtime-environment",
    "what-are-tasks/designing-tasks/securing-task",
    "what-are-tasks/designing-tasks/staking-and-voting",
    "what-are-tasks/designing-tasks/using-reputation",

    {
      type: "category",
      label: "Key Components",
      link: {
        type: "doc",
        id: "what-are-tasks/what-are-tasks/key-components/intro",
      },
      collapsed: true,
      items: [
        "what-are-tasks/what-are-tasks/key-components/database-sharding",
        "what-are-tasks/what-are-tasks/key-components/node-to-node-sync",
        "what-are-tasks/what-are-tasks/key-components/rest-api",
        "what-are-tasks/what-are-tasks/key-components/auth-and-security",
      ],
    },

    {
      type: "html",
      value: "Crowd AI ",
      className: "sidebar-title",
    },

    // "crowdai/introduction",
    "crowdai/federated-learning",
    "crowdai/cpu",
    "crowdai/ai-koii",

    {
      type: "html",
      value: "Distributed Cloud",
      className: "sidebar-title",
    },
    "distributed-cloud/reduced-computing-costs",
    "distributed-cloud/better-data",
    {
      type: "html",
      value: "Gradual Consensus",
      className: "sidebar-title",
    },
    "gradual-consensus/runtime-flow",
    "gradual-consensus/task-lifecycle",
    {
      type: "html",
      value: "Large Compute Providers",
      className: "sidebar-title",
    },
    "large-compute/large-compute",

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
    "settlement-layer/rent",

    {
      type: "html",
      value: "Web 3 and Social",
      className: "sidebar-title",
    },
    // "web3/introduction",
    "web3/registering-content",
    "web3/attention-mining",
    "web3/proof-of-real-traffic",
    "web3/sybil-attack-prevention",
    {
      type: "html",
      value: "Reference",
      className: "sidebar-title",
    },
    "glossary",
  ],
};

module.exports = sidebars;
