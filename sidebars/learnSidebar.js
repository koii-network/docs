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
      type: "html",
      value: "Deep Dive: How Koii Works",
      className: "sidebar-title top-margin",
    },
   
   
   
  ],
};

module.exports = sidebars;
