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
      value: "Introduction",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "Koii Nodes",
      link: {
        type: "doc",
        id: "introduction/types-of-nodes",
      },
      collapsed: true,
      items: ["introduction/task-nodes", "introduction/k2-nodes"],
    },
    {
      type: "html",
      value: "Desktop Node",
      className: "sidebar-title",
    },
    "task-nodes/how-to-run-a-desktop-node",
    "task-nodes/rewards",
    "task-nodes/choosing-tasks",
    {
      type: "html",
      value: "K2 Node",
      className: "sidebar-title",
    },
    "k2-nodes/how-to-run-a-k2-node",
    "k2-nodes/system-requirements",
    "k2-nodes/system-setup",
    "k2-nodes/validator-setup",
    "k2-nodes/rewards",
  ],
};

module.exports = sidebars;
