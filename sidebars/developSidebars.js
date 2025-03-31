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
      value: "Welcome",
      className: "sidebar-title top-margin",
    },
    "onboarding/welcome-to-koii",

    {
      type: "html",
      value: "Task Development",
      className: "sidebar-title top-margin",
    },
    "task-development/key-concepts",
    "task-development/overview-namespace-wrapper",
    "task-development/write-a-task",
    "task-development/deploy-task",
    "task-development/kpl-tokens",
    "task-development/whitelist-task",

    {
      type: "category",
      label: "Testing",
      link: {
        type: "generated-index",
        description: "Learn how to test your task.",
      },
      collapsed: true,
      items: [
        "task-development/testing/testing-locally-using-jest",
        "task-development/testing/configuration",
        "task-development/testing/using-unittest",
        "task-development/testing/easy-testing",
        "task-development/testing/simulating-a-round",
        "task-development/testing/docker-test",
      ],
    },
    {
      type: "html",
      value: "Koii Software Toolkit (SDK)",
      className: "sidebar-title top-margin",
    },
    "koii-software-toolkit-sdk/what-is-the-koii-sdk",
    "koii-software-toolkit-sdk/koii-javascript-api",

    {
      type: "category",
      label: "Koii Command Line Tool",
      link: {
        type: "generated-index",
        description:
          "In this section, we'll go over how to create a wallet, send and receive KOII tokens, and participate in the cluster by delegating stakes using the Koii command-line tools.          Here are the articles in this section:",
      },
      collapsed: true,
      items: [
        "command-line-tool/koii-cli/install-cli",
        "command-line-tool/koii-cli/cli-usage-reference",
        "command-line-tool/koii-cli/create-wallet",
        "command-line-tool/koii-cli/send-and-receive-tokens",
        "command-line-tool/koii-cli/connect-cluster",
      ],
    },
    {
      type: "category",
      label: "Create Task CLI",
      link: {
        type: "doc",
        id: "command-line-tool/create-task-cli/intro",
      },
      collapsed: true,
      items: [
        "command-line-tool/create-task-cli/install",
        "command-line-tool/create-task-cli/create-repo",
        "command-line-tool/create-task-cli/create-task",
        "command-line-tool/create-task-cli/update-task",
        "command-line-tool/create-task-cli/activate-task",
        "command-line-tool/create-task-cli/fund-task",
        "command-line-tool/create-task-cli/ci-cd",
      ],
    },

    {
      type: "html",
      value: "Getting Advanced",
      className: "sidebar-title top-margin",
    },
    {
      type: "category",
      label: "NamespaceWrapper API",
      link: {
        type: "doc",
        id: "write-a-koii-task/namespace-wrapper/the-namespace-object",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/namespace-wrapper/installing-namespace-wrapper",
        "write-a-koii-task/namespace-wrapper/methodName",
        "write-a-koii-task/namespace-wrapper/environment-variables",
        "write-a-koii-task/namespace-wrapper/rest-apis",
        "write-a-koii-task/namespace-wrapper/nedb",
        "write-a-koii-task/namespace-wrapper/filesystem-access",
        "write-a-koii-task/namespace-wrapper/wallet-signatures",
        "write-a-koii-task/namespace-wrapper/task-state",
        "write-a-koii-task/namespace-wrapper/network-task-handling",
        "write-a-koii-task/namespace-wrapper/audit-distribution-operations",
      ],
    },
    {
      type: "category",
      label: "Koii IPFS Storage",
      link: {
        type: "doc",
        id: "write-a-koii-task/koii-ipfs-storage/koii-storage",
      },
      collapsed: true,
      items: ["write-a-koii-task/koii-ipfs-storage/koii-storage"],
    },
    {
      type: "category",
      label: "Orca",
      link: {
        type: "doc",
        id: "write-a-koii-task/orca/intro",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/orca/intro",
        "write-a-koii-task/orca/develop-an-orca-task",
      ],
    },
    {
      type: "category",
      label: "Middleman Server Template",
      link: {
        type: "doc",
        id: "write-a-koii-task/middleman/intro",
      },
      collapsed: true,
      items: [
        "write-a-koii-task/middleman/intro",
        "write-a-koii-task/middleman/middleman-main",
        "write-a-koii-task/middleman/middleman-helpers",
      ],
    },

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
      label: "Extractor with Login",
      items: [
        "extractor/introduction",
        "extractor/using",
        "extractor/adapter",
        "extractor/task-structure",
      ],
    },
    {
      type: "category",
      label: "Cross-Chain Task Rewards",
      items: [
        "erc20-reward/introduction",
        "erc20-reward/smart-contract",
        "erc20-reward/getting-started",
        "erc20-reward/task",
        // "erc20-reward/audit",
        "erc20-reward/distribution",
      ],
    },
    // {
    //   type: "html",
    //   value: "Smart Contract",
    //   className: "sidebar-title top-margin",
    // },
    // "smart-contract/helloworld",
    // {
    //   type: "html",
    //   value: "RPC",
    //   className: "sidebar-title top-margin",
    // },
    // "rpcapi/intro",
    // "rpcapi/json-structures",
    // {
    //   type: "category",
    //   label: "RPC HTTP API",
    //   link: {
    //     type: "doc",
    //     id: "rpcapi/http/http",
    //   },
    //   collapsed: true,
    //   items: [
    //     "rpcapi/http/getbalance",
    //     "rpcapi/http/getaccountinfo",
    //     "rpcapi/http/getblock",
    //     "rpcapi/http/getblockcommitment",
    //     "rpcapi/http/getblockproduction",
    //     "rpcapi/http/getblocktime",
    //     "rpcapi/http/getblocks",
    //     "rpcapi/http/getblockswithlimit",
    //     "rpcapi/http/getclusternodes",
    //     "rpcapi/http/getepochinfo",
    //     "rpcapi/http/getepochschedule",
    //     "rpcapi/http/getfees",
    //     "rpcapi/http/getfeeformessage",
    //     "rpcapi/http/getfeecalculatorforblockhash",
    //     "rpcapi/http/getfirstavailableblock",
    //     "rpcapi/http/getgenesishash",
    //     "rpcapi/http/gethealth",
    //     "rpcapi/http/gethighestsnapshotslot",
    //     "rpcapi/http/getidentity",
    //     "rpcapi/http/getinflationgovernor",
    //     "rpcapi/http/getinflationrate",
    //     "rpcapi/http/getinflationreward",
    //     "rpcapi/http/getlargestaccounts",
    //     "rpcapi/http/getlatestblockhash",
    //     "rpcapi/http/getleaderschedule",
    //     "rpcapi/http/getmaxretransmitslot",
    //     "rpcapi/http/getmaxshredinsertslot",
    //     "rpcapi/http/getminimumbalanceforrentexemption",
    //     "rpcapi/http/getmultipleaccounts",
    //     "rpcapi/http/getprogramaccounts",
    //     "rpcapi/http/getrecentperformancesamples",
    //     "rpcapi/http/getrecentprioritizationfees",
    //     "rpcapi/http/getsignaturestatuses",
    //     "rpcapi/http/getsignaturesforaddress",
    //     "rpcapi/http/getslot",
    //     "rpcapi/http/getslotleader",
    //     "rpcapi/http/getstakeactivation",
    //     "rpcapi/http/getstakeminimumdelegation",
    //     "rpcapi/http/getsupply",
    //     "rpcapi/http/gettokenaccountbalance",
    //     "rpcapi/http/gettokenaccountsbydelegate",
    //     "rpcapi/http/gettokenaccountsbyowner",
    //     "rpcapi/http/gettokenlargestaccounts",
    //     "rpcapi/http/gettokensupply",
    //     "rpcapi/http/gettransaction",
    //     "rpcapi/http/gettransactioncount",
    //     "rpcapi/http/getversion",
    //     "rpcapi/http/getvoteaccounts",
    //     "rpcapi/http/isblockhashvalid",
    //     "rpcapi/http/minimumledgerslot",
    //     "rpcapi/http/requestairdrop",
    //     "rpcapi/http/sendtransaction",
    //     "rpcapi/http/simulatetransaction",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "Websocket",
    //   link: {
    //     type: "doc",
    //     id: "rpcapi/websocket/websocket",
    //   },
    //   collapsed: true,
    //   items: [
    //     "rpcapi/websocket/accountsubscribe",
    //     "rpcapi/websocket/accountunsubscribe",
    //     "rpcapi/websocket/blocksubscribe",
    //     "rpcapi/websocket/blockunsubscribe",
    //     "rpcapi/websocket/logssubscribe",
    //     "rpcapi/websocket/logsunsubscribe",
    //     "rpcapi/websocket/programsubscribe",
    //     "rpcapi/websocket/programunsubscribe",
    //     "rpcapi/websocket/rootsubscribe",
    //     "rpcapi/websocket/rootunsubscribe",
    //     "rpcapi/websocket/signaturesubscribe",
    //     "rpcapi/websocket/signatureunsubscribe",
    //     "rpcapi/websocket/slotsubscribe",
    //     "rpcapi/websocket/slotunsubscribe",
    //     "rpcapi/websocket/slotsupdatessubscribe",
    //     "rpcapi/websocket/slotsupdatesunsubscribe",
    //     "rpcapi/websocket/votesubscribe",
    //     "rpcapi/websocket/voteunsubscribe",
    //   ],
    // },
  ],
};

module.exports = sidebars;
