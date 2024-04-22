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
      value: "Welcome to KOII",
      className: "sidebar-title",
    },
    "introduction",
    "comics/comics",
    {
      type: "html",
      value: "Quickstart: From Zero to Hero",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Quickstart",
      link: {
        type: "doc",
        id: "quickstart/what-is-koii",
      },
      collapsed: true,
      items: [],
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
        "quickstart/command-line-tool/koii-cli/install-cli",
        "quickstart/command-line-tool/koii-cli/create-wallet",
        "quickstart/command-line-tool/koii-cli/send-and-receive-tokens",
        "quickstart/command-line-tool/koii-cli/connect-cluster",
      ],
    },
    {
      type: "html",
      value: "Deep Dive: How Koii Works",
      className: "sidebar-title top-margin",
    },
   
   
   
  ],
};

module.exports = sidebars;
