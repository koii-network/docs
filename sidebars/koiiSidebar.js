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
    // {
    //   type: "html",
    //   value: "What is Koii?",
    //   className: "sidebar-title",
    // },
    // "introduction/welcome",
    // "introduction/tools",
    // "introduction/philosophy",

    {
      type: "html",
      value: "The $KOII Token",
      className: "sidebar-title top-margin",
    },
    "the-koii-token/network-economics",
    "the-koii-token/tokenomics/token-generation",
    "ways-to-get-koii/compute-sharing-marketplace/compute-sharing-marketplace",

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
    "ways-to-get-koii/faucet",
    "ways-to-get-koii/run-a-node",
    "ways-to-get-koii/attention-mining",

    // {
    //   type: "html",
    //   value: "Become an Early Adopter",
    //   className: "sidebar-title top-margin",
    // },
    // "early-adopters/ambassador-program",
    // "ways-to-get-koii/grants-program",
    {
      type: "html",
      value: `
        <a href="/koii/the-koii-token/add-koii-to-exchange/introduction" style="text-decoration: none; color: inherit; padding-left: 0; margin-left: 0; font-weight: 600">
          Add $KOII to an Exchange
        </a>
      `,
      className: "sidebar-title top-margin",
    },
    "the-koii-token/add-koii-to-exchange/node-setup",
    "the-koii-token/add-koii-to-exchange/managing-transactions",
    "the-koii-token/add-koii-to-exchange/prioritization-fees",
    "the-koii-token/add-koii-to-exchange/kpl-tokens",
    "the-koii-token/add-koii-to-exchange/offline-signing",
    "the-koii-token/add-koii-to-exchange/durable-transaction-nonces",
    "the-koii-token/add-koii-to-exchange/testing",
  ],
};

module.exports = sidebars;
