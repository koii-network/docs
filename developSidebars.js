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
      type: 'category',
      label: '🤑 Settlement Layer',
      collapsed: true,
      items: [
        'settlement-layer/k2-tick-tock-fast-blocks',
        {
          type: 'category',
          label: 'Native Contracts',
          collapsed: true,
          items: [
            'settlement-layer/the-attention-game',
            'settlement-layer/the-task-contract',
          ],
        },
        {
          type: 'category',
          label: 'Running a K2 Node',
          link: {
            type: 'doc',
            id: 'settlement-layer/running-a-k2-node',
          },
          collapsed: true,
          items: [
            'settlement-layer/system-requirements',
            'settlement-layer/setup-process',           
          ],
        },
        'settlement-layer/creating-tokens-on-k2',
        'settlement-layer/block-explorer',
        'settlement-layer/wallets',
        'settlement-layer/rent',
      ],
    },
    {
      type: 'category',
      label: '⚙ Koii Software Toolkit (SDK)',
      collapsed: true,
      items: [
        'koii-software-toolkit-sdk/what-is-the-koii-sdk',
      ],
    },
    {
      type: 'category',
      label: '❕ Support',
      collapsed: true,
      items: [
        'support/community-forums',
        'support/contact-support',
      ],
    },
  ],
};

module.exports = sidebars;
