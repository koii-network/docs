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
      value: "Contact Us",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Linktree",
      className: "sidebar-title",
    },
    "linktree/intro",
    "linktree/data-storage",
    "linktree/data-sharing",
    "linktree/rest-apis",
    "linktree/user-authentication",
    {
      type: "html",
      value: "DID's Task",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "IPFS Pinning",
      className: "sidebar-title",
    },
  ],
};

module.exports = sidebars;
