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
      value: "What is a Koii Node?",
      className: "sidebar-title",
    },
    "introduction/types-of-nodes",
    {
      type: "html",
      value: "Task Nodes",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "Running the Desktop Node",
      collapsed: false,
      items: [
        "task-nodes/how-to-run-a-koii-node",
        // "task-nodes/faucet-and-tokens",
        "task-nodes/time-to-node",
        "task-nodes/task-extensions",
        "task-nodes/choosing-tasks",
        // "task-nodes/staying-safe",
      ],
    },
    {
      type: "category",
      label: "Node Concepts",
      items: [
        "task-nodes/concepts/tokens-and-wallets",
        "task-nodes/concepts/rewards",
        "task-nodes/concepts/what-is-an-rpc-node",
      ],
    },
    {
      type: "category",
      label: "Running on VPS",
      items: [
        "task-nodes/Running-on-VPS",
        "task-nodes/Running-on-VPS-Choose",
        "task-nodes/Running-on-VPS-Docker",
        "task-nodes/Running-on-VPS-Interact",
        "task-nodes/Running-IPFS-task",
      ],
    },
    "task-nodes/Running-on-Raspberry",
    {
      type: "html",
      value: "K2 Validators",
      className: "sidebar-title",
    },
    "k2-validators/how-to-run-a-k2-validator",
    "k2-validators/validator-requirements",
    "k2-validators/system-setup",
    "k2-validators/validator-setup",
    "k2-validators/rewards",
    "k2-validators/k2-staking-support",
    {
      type: "category",
      label: "Best Practices",
      items: [
        "k2-validators/BestPractices/General-Operations",
        "k2-validators/BestPractices/Monitoring",
        "k2-validators/BestPractices/Security",
      ]
    },
    {
      type: "html",
      value: "K2 Validator Infrastructure",
      className: "sidebar-title",
    },
    "architecture/architecture",
    {
      type: "category",
      label: "Clusters",
      items: [
        "architecture/clusters/index",
        "architecture/clusters/available",
      ]
    },
    {
      type: "category",
      label: "Consensus",
      items: [
        "architecture/consensus/commitments",
        "architecture/consensus/fork-generation",
        "architecture/consensus/leader-rotation",
        "architecture/consensus/managing-forks",
        "architecture/consensus/stake-delegation-and-rewards",
        "architecture/consensus/synchronization",
        "architecture/consensus/turbine-block-propagation",
        "architecture/consensus/vote-signing",
      ]
    },
    {
      type: "category",
      label: "Runtime",
      items: [
        "architecture/runtime/programs",
        "architecture/runtime/sysvars",
      ]
    },
    {
      type: "category",
      label: "Validator",
      items: [
        "architecture/validator/anatomy",
        "architecture/validator/tpu",
        "architecture/validator/blockstore",
        "architecture/validator/tvu",
        "architecture/validator/gossip",
        "architecture/validator/runtime",
      ]
    },
  ],
};

module.exports = sidebars;
