export type CardItem = {
  title?: string;
  link?: string;
  image?: string;
};

export type Cards = {
  title?: string;
  // description?: string;
  items?: CardItem[];
};

export const cardDetails: Cards[] = [
  {
    title: "Build Concepts",
    // description:
    //   "Learn how to harness the power of thousands of Koii Nodes to supercharge your DApp",
    items: [
      {
        title: "Auth & Security",
        link: "/concepts/what-are-tasks/what-are-tasks/key-components/auth-and-security",
        image: "/img/Auth Security.svg",
      },
      {
        title: "Database Sharding",
        link: "/concepts/what-are-tasks/what-are-tasks/key-components/database-sharding",
        image: "/img/Datasharding.svg",
      },
      {
        title: "Node to Node Sync",
        link: "/concepts/what-are-tasks/what-are-tasks/key-components/node-to-node-sync",
        image: "/img/Node2nodesync.svg",
      },
      {
        title: "Rest API",
        link: "/concepts/what-are-tasks/what-are-tasks/key-components/rest-api",
        image: "/img/Rest APIs.svg",
      },
    ],
  },

  {
    title: "Tutorials",
    // description: "Learn by a journey through our prebuilt Koii Tasks",
    items: [
      {
        title: "The Task Template",
        link: "/develop/write-a-koii-task/task-development-guide/k2-task-template/",
        image: "/img/Task template.svg",
      },
      {
        title: "Google Doodle",
        link: "/develop/task-tutorials/google-doodle-task/",
        image: "/img/Google doodle.svg",
      },
      {
        title: "Koii Linktree",
        link: "/develop/linktree/intro",
        image: "/img/Koii Linktree (1).svg",
      },
      {
        title: "Web Crawlers",
        link: "/develop/task-tutorials/scrapers/twitter",
        image: "/img/Web crawlers (1).svg",
      },
    ],
  },

  {
    title: "Learn",
    // description: "Koii is complicated - Get the basics.",
    items: [
      {
        title: "Tokenomics",
        link: "/koii/the-koii-token/network-economics",
        image: "/img/Tokenomics.svg",
      },
      {
        title: "Gradual Consensus",
        link: "/concepts/gradual-consensus/runtime-flow",
        image: "/img/Gradual Consensus (3).svg",
      },
      {
        title: "Community",
        link: "/",
        image: "/img/Community (2).svg",
      },
      {
        title: "Glossary",
        link: "/concepts/glossary",
        image: "/img/Glossary.svg",
      },
    ],
  },

  {
    title: "Software",
    // description: "Koii is complicated - Get the basics.",
    items: [
      {
        title: "Koii SDK",
        link: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
        image: "/img/Koii SDK.svg",
      },
      {
        title: "K2",
        link: "/concepts/settlement-layer/k2-tick-tock-fast-blocks",
        image: "/img/K2.svg",
      },
      {
        title: "Attention Mining",
        link: "/concepts/web3/proof-of-real-traffic",
        image: "/img/Attention Mining.svg",
      },
      {
        title: "Finnie",
        link: "/concepts/finnie-wallet/introduction",
        image: "/img/Finnie.svg",
      },
    ],
  },
];
