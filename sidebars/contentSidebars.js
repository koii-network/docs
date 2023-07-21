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
      value: "Crowd AI ",
      className: "sidebar-title",
    },
    "crowdai/introduction",
    {
      type: "html",
      value: "Distributed Cloud",
      className: "sidebar-title",
    },
    "distributedcloud/community-powered-hosting",
    "distributedcloud/reduced-computing-costs",
    "distributedcloud/better-data",
    {
      type: "html",
      value: "Finnie Wallet",
      className: "sidebar-title",
    },
    "finniewallet/introduction",

    {
      type: "html",
      value: "Gradual Concensus",
      className: "sidebar-title",
    },
    "gradualconcensus/runtimeflow",
    "gradualconcensus/tasklifecycle",

    {
      type: "html",
      value: "K2 Settlement Layer",
      className: "sidebar-title",
    },
    "settlement-layer/k2-tick-tock-fast-blocks",
    {
      type: "html",
      value: "Large Compute Providers",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Web 3 and Social",
      className: "sidebar-title",
    },
    "web3/introduction",
    "web3/registeringcontent",
    "web3/attentionmining",
    "web3/proofofrealtraffic",
    "web3/sybilattackprevention",

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
  ],
};

module.exports = sidebars;
