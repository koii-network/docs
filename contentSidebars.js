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
      value: "Get Started",
      className: "sidebar-title",
    },
    "basics/community-cloud",
    "basics/mission",
    "basics/advantages",
    "basics/tasks",

    {
      type: "html",
      value: "Distributed Cloud",
      className: "sidebar-title",
    },
    "basics/distributedCloud",
    "basics/reduceCosts",
    "basics/communityDevices",

    {
      type: "html",
      value: "Distributed Social Networks",
      className: "sidebar-title",
    },
    "intermediate/distributed-social-networks",

    {
      type: "html",
      value: "Finnie Wallet",
      className: "sidebar-title",
    },

    "intermediate/welcome-to-finnie",

    {
      type: "html",
      value: "Deployment and Scalabilty",
      className: "sidebar-title",
    },

    "intermediate/dev-and-scal",

    {
      type: "html",
      value: "Better Data",
      className: "sidebar-title",
    },

    "intermediate/get-better-data",

    {
      type: "html",
      value: "Attention Mining",
      className: "sidebar-title",
    },

    "intermediate/attention-as-a-commodity",

    {
      type: "html",
      value: "Federated Learning",
      className: "sidebar-title",
    },

    "advanced/federated-learning",

    {
      type: "html",
      value: "Gradual Concensus",
      className: "sidebar-title",
    },
    "advanced/runtime-flow",
    "advanced/task-lifecycle",
  ],
};

module.exports = sidebars;
