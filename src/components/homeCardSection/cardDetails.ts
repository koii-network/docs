export type CardItem = {
  title?: string;
  link?: string;
};

export type Cards = {
  title?: string;
  description?: string;
  items?: CardItem[];
};

export const cardDetails: Cards[] = [
  {
    title: "Build Concepts",
    description:
      "Learn how to harness the power of thousands of Koii Nodes to supercharge your DApp",
    items: [
      { title: "Auth & Security", link: "/develop/koii-task-101/what-are-tasks/key-components/auth-and-security" },
      { title: "Database Sharding", link: "/develop/koii-task-101/what-are-tasks/key-components/database-sharding" },
      { title: "Node to Node Sync", link: "/develop/koii-task-101/what-are-tasks/key-components/node-to-node-sync" },
      { title: "Rest API", link: "/develop/koii-task-101/what-are-tasks/key-components/rest-api" },
    ],
  },

  {
    title: "Tutorials",
    description: "Learn by a journey through our prebuilt Koii Tasks",
    items: [
      { title: "The Task Template", link: "/develop/write-a-koii-task/task-development-guide/k2-task-template/" },
      { title: "Google Doodle", link: "/develop/task-tutorials/google-doodle-task/" },
      { title: "Koii Linktree", link: "/develop/task-tutorials/linktree-task/intro" },
      { title: "Web Crawlers", link: "/develop/task-tutorials/linktree-task/intro" },
    ],
  },

  {
    title: "Learn",
    description: "Koii is complicated - Get the basics.",
    items: [
      { title: "Tokenomics", link: "/concepts/the-koii-token/network-economics" },
      { title: "Gradual Consensus", link: "/develop/koii-task-101/what-are-tasks/gradual-consensus" },
      { title: "Community", link: "/concepts/community/community-forums" },
      { title: "Glossary", link: "/concepts/glossary" },
    ],
  },
];
