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
      label: 'Koii Summary',
      collapsed: false,
      items: [
        'koii-summary/welcome',
        'koii-summary/impact',
        'koii-summary/social-tech',
        'koii-summary/tools',
        'koii-summary/philosophy',
      ],
    },
  ],
};

module.exports = sidebars;
