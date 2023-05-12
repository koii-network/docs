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
      { title: "Auth & Security", link: "" },
      { title: "Database Sharding", link: "" },
      { title: "Node to Node Sync", link: "" },
      { title: "Rest API", link: "" },
    ],
  },

  {
    title: "Tutorials",
    description: "Learn by a journey through our prebuilt Koii Tasks",
    items: [
      { title: "The Task Template", link: "" },
      { title: "Google Doodle", link: "" },
      { title: "Koii Linktree", link: "" },
      { title: "Web Crawlers", link: "" },
    ],
  },

  {
    title: "Learn",
    description: "Koii is complicated - Get the basics.",
    items: [
      { title: "Tokenomics", link: "" },
      { title: "Gradual Consensus", link: "" },
      { title: "Community", link: "" },
      { title: "Glossary", link: "" },
    ],
  },
];
