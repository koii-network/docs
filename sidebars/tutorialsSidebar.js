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
      value: "Crawlers",
      className: "sidebar-title",
    },
    "crawlers/introduction",
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
    "linktree/frontend",
  ],
};

module.exports = sidebars;
