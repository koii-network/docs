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
      value: "Koii Templates",
      className: "sidebar-title",
    },
    "koii-apps/introduction",
    "task-dos-and-donts/task-dos-and-donts",
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
      value: "Linktree",
      className: "sidebar-title",
    },
    "linktree/intro",
    "linktree/data-storage",
    "linktree/data-sharing",
    "linktree/rest-apis",
    "linktree/user-authentication",
    "linktree/frontend",

    {
      type: "html",
      value: "Twitter Archiver",
      className: "sidebar-title",
    },
    "archiver/introduction",
    "archiver/using",

    "archiver/adapter",
    "archiver/deployment",

    {
      type: "html",
      value: "Steam Crawler",
      className: "sidebar-title",
    },
    "steam-daily-specials/steam-daily-specials-task",
    "steam-daily-specials/setup-main",
    "steam-daily-specials/setup-db-api",
    "steam-daily-specials/setup-audit",
    "steam-daily-specials/setup-submit",
  ],
};

module.exports = sidebars;
