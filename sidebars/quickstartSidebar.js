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
      value: "Level 1",
      className: "sidebar-title",
    },
    "hello-world/intro",
    "hello-world/understand-the-template",
    "hello-world/dive-into-the-code",
    "hello-world/task-description",
    "hello-world/deploy",

    {
      type: "html",
      value: "Level 2",
      className: "sidebar-title top-margin",
    },

    {
      type: "category",
      label: "Register Content",
      link: {
        type: "doc",
        id: "koii-software-toolkit-sdk/register-content/register-content",
      },
      collapsed: true,
      items: ["koii-software-toolkit-sdk/register-content/burn-koii-attention"],
    },
    {
      type: "category",
      label: "Basic Utility Functions",
      link: {
        type: "doc",
        id: "koii-software-toolkit-sdk/basic-utility-functions/basic-utility-functions",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Koii State",
          link: {
            type: "doc",
            id: "koii-software-toolkit-sdk/basic-utility-functions/koii-state/koii-state",
          },
          collapsed: true,
          items: [
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getattentionid",
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoiistate",
            "koii-software-toolkit-sdk/basic-utility-functions/koii-state/getkoibalance",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
