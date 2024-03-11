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
      value: "Koii Node",
      className: "sidebar-title",
    },
    "task-nodes/how-to-run-a-koii-node",
    "task-nodes/time-to-node",
    "task-nodes/rewards",
    "task-nodes/choosing-tasks",
    {
      type: "category",
      label: "Running on VPS",
      link: {
        type: "doc",
        id: "task-nodes/Running-on-VPS",
      },
      items: [
        "task-nodes/Running-on-VPS", 
        "task-nodes/Running-on-VPS-Choose",
        "task-nodes/Running-on-VPS-Docker",
        "task-nodes/Running-on-VPS-Interact",
      ],
    },
    {
      type: "html",
      value: "K2 Validator",
      className: "sidebar-title",
    },
    "k2-validators/how-to-run-a-k2-validator",
    "k2-validators/system-requirements",
    "k2-validators/system-setup",
    "k2-validators/validator-setup",
    "k2-validators/rewards",
  ],
};

module.exports = sidebars;
