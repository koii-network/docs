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
      value: "Level 1 (Basics)",
      className: "sidebar-title",
    },
    "hello-world/introduction",
    "hello-world/your-first-task",
    "hello-world/tasks101",
    "hello-world/tasks102",
    "hello-world/diveintocode",
    "hello-world/task",
    "hello-world/audit",
    "hello-world/distribution",
    "hello-world/getrequest",
    "hello-world/deployment",
    {
      type: "html",
      value: "Level 2",
      className: "sidebar-title",
    },
    {
      type: "html",
      value: "Level 3",
      className: "sidebar-title",
    },
  ],
};

module.exports = sidebars;
