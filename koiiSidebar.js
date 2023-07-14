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

    {
      type: "html",
      value: "The $KOII Token",
      className: "sidebar-title top-margin",
    },
    "the-koii-token/network-economics",
    "the-koii-token/tokenomics/token-generation",
    "the-koii-token/tokenomics/supply-reduction",
    "the-koii-token/tokenomics/reputation-hardening",
    {
      type: "html",
      value: "Token Value",
      className: "sidebar-title top-margin",
    },
    "the-koii-token/tokenomics/how-the-network-creates-value",
    {
      type: "html",
      value: "Ways to Get Koii",
      className: "sidebar-title top-margin",
    },
    "ways-to-get-koii/run-a-node",
    "ways-to-get-koii/faucet",
    "ways-to-get-koii/compute-sharing-marketplace/compute-sharing-marketplace",
    "ways-to-get-koii/attention-mining",
    "ways-to-get-koii/grants-program",
    "ways-to-get-koii/get-free-tokens",
  ],
};

module.exports = sidebars;
