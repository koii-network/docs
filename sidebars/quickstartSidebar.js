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
      value: "First Task",
      className: "sidebar-title",
    },
    "hello-world/introduction",

    "hello-world/understand-the-template",
    {
      type: "category",
      label: "Dive Into The Code",
      items: [
        // "hello-world/understand-the-template",
        "hello-world/task",
        "hello-world/audit",
        "hello-world/distribution",
        "hello-world/local-test",
      ],
    },
    "hello-world/get-request",
    "hello-world/deployment",
    "hello-world/update",
    "hello-world/what-is-next",
    {
      type: "html",
      value: "Scaling Your Projects",
      className: "sidebar-title",
    },
    "scaling-tasks/network-options",
    "scaling-tasks/spheron-infrastructure",
    {
      type: "html",
      value: "Template Applications",
      className: "sidebar-title",
    },
    "introduction",
    // {
    //   type: "html",
    //   value: "Contact Us",
    //   className: "sidebar-title",
    // },
    // "contact-us/introduction",
    // "contact-us/encryption",
    // "contact-us/frontend",
    {
      type: "category",
      label: "Linktree",
      items: [
        "linktree/intro",
        "linktree/data-storage",
        "linktree/data-sharing",
        "linktree/rest-apis",
        "linktree/user-authentication",
        "linktree/frontend",
      ],
    },
    {
      type: "category",
      label: "Twitter Crawler",
      items: [
        "crawler/introduction",
        "crawler/using",
        "crawler/adapter",
        "crawler/task-structure",
      ],
    },
    {
      type: "category",
      label: "Steam Crawler",
      items: [
        "steam-daily-specials/steam-daily-specials-task",
        "steam-daily-specials/setup-main",
        "steam-daily-specials/setup-db-api",
        "steam-daily-specials/setup-audit",
        "steam-daily-specials/setup-submit",
      ],
    },
    {
      type: "category",
      label: "ERC20 Reward",
      items: [
        "erc20-reward/introduction",
        "erc20-reward/smart-contract",
        "erc20-reward/getting-started",
        "erc20-reward/task",
        // "erc20-reward/audit",
        "erc20-reward/distribution",
      ],
    },
    {
      type: "html",
      value: "Migrating Apps",
      className: "sidebar-title",
    },
    "migrate-apps/web-crawler",
  ],
};

module.exports = sidebars;
