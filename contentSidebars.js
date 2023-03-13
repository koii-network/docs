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
      value: "Koii Summary",
      className: "sidebar-title",
    },
    'koii-summary/welcome',
    'koii-summary/impact',
    'koii-summary/social-tech',
    'koii-summary/tools',
    'koii-summary/philosophy',
    {
      type: "html",
      value: "👁 Earning Koii",
      className: "sidebar-title top-margin",
    },
    'earning-koii/network-economics',
    'earning-koii/compute-sharing-marketplace',
    {
      type: 'category',
      label: 'Proof of Real Traffic (PoRT)',
      link: {
        type: 'doc',
        id: 'earning-koii/proof-of-real-traffic/proof-of-real-traffic',
      },
      collapsed: true,
      items: [
        'earning-koii/proof-of-real-traffic/attention-mining',
        'earning-koii/proof-of-real-traffic/registering-content',
        'earning-koii/proof-of-real-traffic/sybil-attack-prevention',
      ],
    },
    'earning-koii/grants-program',
    'earning-koii/get-free-tokens',
  ],
};

module.exports = sidebars;
