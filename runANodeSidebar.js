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
        type: 'category',
        label: 'Types of Nodes',
        link: {
          type: 'doc',
          id: 'introduction/types-of-nodes',
        },
        collapsed: true,
        items: [
          'introduction/task-nodes',
          'introduction/k2-nodes',
        ],
      },
      'introduction/tokenomics-rewards',
      {
        type: "html",
        value: "Task Nodes",
        className: "sidebar-title top-margin",
      },
      'task-nodes/rewards',
      'task-nodes/choosing-tasks',
      'task-nodes/how-to-run-a-desktop-node',
      {
        type: "html",
        value: "K2 Nodes",
        className: "sidebar-title top-margin",
      },
      'k2-nodes/rewards',
      'k2-nodes/how-to-run-a-k2-node',
    ],
  };
  
  module.exports = sidebars;
  