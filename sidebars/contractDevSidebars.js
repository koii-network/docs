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
        value: "K2 Solana Contract",
        className: "sidebar-title top-margin",
      },
      "Contract/Contract",
      "Contract/helloworld",
        {
            type: "html",
            value: "RPC",
            className: "sidebar-title top-margin",
          },
    "RPCAPI/intro",
  "RPCAPI/json-structures",
    {
      type: "category",
      label: "RPC HTTP API",
      link: {
        type: "doc",
        id: "RPCAPI/http/http",
      },
      collapsed: true,
      items: [
        "RPCAPI/http/getbalance",
        "RPCAPI/http/getaccountinfo",
        "RPCAPI/http/getblock",
        "RPCAPI/http/getblockcommitment",
        "RPCAPI/http/getblockproduction",
        "RPCAPI/http/getblocktime",
        "RPCAPI/http/getblocks",
        "RPCAPI/http/getblockswithlimit",
        "RPCAPI/http/getclusternodes",
        "RPCAPI/http/getepochinfo",
        "RPCAPI/http/getepochschedule",
        "RPCAPI/http/getfees",
        "RPCAPI/http/getfeeformessage",
        "RPCAPI/http/getfeecalculatorforblockhash",
        "RPCAPI/http/getfirstavailableblock",
        "RPCAPI/http/getgenesishash",
        "RPCAPI/http/gethealth",
        "RPCAPI/http/gethighestsnapshotslot",
        "RPCAPI/http/getidentity",
        "RPCAPI/http/getinflationgovernor",
        "RPCAPI/http/getinflationrate",
        "RPCAPI/http/getinflationreward",
        "RPCAPI/http/getlargestaccounts",
        "RPCAPI/http/getlatestblockhash",
        "RPCAPI/http/getleaderschedule",
        "RPCAPI/http/getmaxretransmitslot",
        "RPCAPI/http/getmaxshredinsertslot",
        "RPCAPI/http/getminimumbalanceforrentexemption",
        "RPCAPI/http/getmultipleaccounts",
        "RPCAPI/http/getprogramaccounts",
        "RPCAPI/http/getrecentperformancesamples",
        "RPCAPI/http/getrecentprioritizationfees",
        "RPCAPI/http/getsignaturestatuses",
        "RPCAPI/http/getsignaturesforaddress",
        "RPCAPI/http/getslot",
        "RPCAPI/http/getslotleader",
        "RPCAPI/http/getstakeactivation",
        "RPCAPI/http/getstakeminimumdelegation",
        "RPCAPI/http/getsupply",
        "RPCAPI/http/gettokenaccountbalance",
        "RPCAPI/http/gettokenaccountsbydelegate",
        "RPCAPI/http/gettokenaccountsbyowner",
        "RPCAPI/http/gettokenlargestaccounts",
        "RPCAPI/http/gettokensupply",
        "RPCAPI/http/gettransaction",
        "RPCAPI/http/gettransactioncount",
        "RPCAPI/http/getversion",
        "RPCAPI/http/getvoteaccounts",
        "RPCAPI/http/isblockhashvalid",
        "RPCAPI/http/minimumledgerslot",
        "RPCAPI/http/requestairdrop",
        "RPCAPI/http/sendtransaction",
        "RPCAPI/http/simulatetransaction",
      ],
    },
    ],
  };
  
module.exports = sidebars;
  