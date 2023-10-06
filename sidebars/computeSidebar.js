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
      value: "Compute Buyers",
      className: "sidebar-title",
    },
    "introduction",
    "metrics",
    "supported",     
    "developerapi",
    "usecase",
    "faq",
    // {
    //   type: "html",
    //   value: "Contact Us",
    //   className: "sidebar-title",
    // },
    // "contact-us/introduction",
    // "contact-us/encryption",
    // "contact-us/frontend",
    {
      type: "html",
      value: "Koii Data Aggregator",
      className: "sidebar-title",
    },
    "aggregator/introduction",
    "aggregator/task",
    "aggregator/advancedsearch",
    // "aggregator/technical",
  ],
};

module.exports = sidebars;
