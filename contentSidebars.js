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
      value: "Distributed Cloud",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Distributed Social Networks",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Gradual Consensus",
      className: "sidebar-title",
    },
    "gradual-consensus/gradual-consensus",
    "gradual-consensus/task-lifecycle",
    {
      type: "html",
      value: "Easy Deployment and Scalability",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Get Better Data",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Finnie",
      className: "sidebar-title",
    },
    "koii-wallet-finnie/welcome-to-finnie",
    "koii-wallet-finnie/using-finnie",
    {
      type: "html",
      value: "Federated Learning",
      className: "sidebar-title",
    },
  ],
};

module.exports = sidebars;
