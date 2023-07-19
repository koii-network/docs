/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  content: [
    {
      type: "html",
      value: "What is Koii?",
      className: "sidebar-title",
    },
    "introduction/welcome",
    "introduction/tools",
    "introduction/philosophy",
    // {
    //   type: "html",
    //   value: "Get Started",
    //   className: "sidebar-title",
    // },
    // "getstarted/globalcomputer",
    // "getstarted/koiinetwork",

    {
      type: "html",
      value: "Decentralised Cloud",
      className: "sidebar-title",
    },
    "distributedcloud/communitypoweredhosting",
    "distributedcloud/reducedcomputingcosts",
    "distributedcloud/betterdata",

    {
      type: "html",
      value: "Web 3 and Social",
      className: "sidebar-title",
    },
    "web3/introduction",
    "web3/registeringcontent",
    "web3/attentionmining",
    "web3/proofofrealtraffic",
    "web3/sybilattackprevention",

    {
      type: "html",
      value: "Finnie Wallet",
      className: "sidebar-title",
    },
    "finniewallet/introduction",

    {
      type: "html",
      value: "Gradual Concensus",
      className: "sidebar-title",
    },
    "gradualconcensus/runtimeflow",
    "gradualconcensus/tasklifecycle",

    {
      type: "html",
      value: "Crowd AI ",
      className: "sidebar-title",
    },
    "crowdai/introduction",
    {
      type: "html",
      value: "Koii-X",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "Welcome to Koii-X",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/welcome-to-koii-x/welcome-to-koii-x",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/welcome-to-koii-x/quick-start",
        "build-dapps-with-koii/welcome-to-koii-x/site-metadata",
        "build-dapps-with-koii/welcome-to-koii-x/tech-stack",
        "build-dapps-with-koii/welcome-to-koii-x/environment",
      ],
    },
    {
      type: "category",
      label: "Using NFTs as Content",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/using-nfts-as-content/using-nfts-as-content",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/using-nfts-as-content/create-nfts",
        "build-dapps-with-koii/using-nfts-as-content/fetching-nft-data",
        "build-dapps-with-koii/using-nfts-as-content/display-nfts",
        "build-dapps-with-koii/using-nfts-as-content/lists-and-leaderboards",
        "build-dapps-with-koii/using-nfts-as-content/using-thumbnails",
        "build-dapps-with-koii/using-nfts-as-content/koii-bridges",
      ],
    },
    {
      type: "category",
      label: "Integrating Wallets",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/integrating-wallets/integrating-wallets",
      },
      collapsed: true,
      items: [
        "build-dapps-with-koii/integrating-wallets/accepting-payments",
        "build-dapps-with-koii/integrating-wallets/finnie-wallet",
        "build-dapps-with-koii/integrating-wallets/ethereum-metamask",
        "build-dapps-with-koii/integrating-wallets/other-wallets",
      ],
    },
    {
      type: "category",
      label: "Template Library",
      link: {
        type: "doc",
        id: "build-dapps-with-koii/template-library/template-library",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "UI Template Layout",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/ui-template-layout/ui-template-layout",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/ui-template-layout/box",
            "build-dapps-with-koii/template-library/ui-template-layout/simplegrid",
            "build-dapps-with-koii/template-library/ui-template-layout/button-and-button-group",
          ],
        },
        {
          type: "category",
          label: "Leaderboard App",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/leaderboard-app/leaderboard-app",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/leaderboard-app/basic-setup",
            {
              type: "category",
              label: "Customization",
              link: {
                type: "doc",
                id: "build-dapps-with-koii/template-library/leaderboard-app/customization/customization",
              },
              collapsed: true,
              items: [
                "build-dapps-with-koii/template-library/leaderboard-app/customization/preview-info",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/services",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/pages",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/assets",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/components",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/internal-api-hooks",
                "build-dapps-with-koii/template-library/leaderboard-app/customization/search",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Crowdfunding Portal",
          link: {
            type: "doc",
            id: "build-dapps-with-koii/template-library/crowdfunding-portal/crowdfunding-portal",
          },
          collapsed: true,
          items: [
            "build-dapps-with-koii/template-library/crowdfunding-portal/installation",
            "build-dapps-with-koii/template-library/crowdfunding-portal/customization",
            "build-dapps-with-koii/template-library/crowdfunding-portal/currencies-and-wallets",
          ],
        },
        "build-dapps-with-koii/template-library/deploy",
      ],
    },
  ],
};

module.exports = sidebars;
