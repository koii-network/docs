export type CardItem = {
  title?: string;
  link?: string;
  image?: string;
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
      {
        title: "Auth & Security",
        link: "/develop/koii-task-101/what-are-tasks/key-components/auth-and-security",
        image: "/img/AUTH & SECURITY.svg",
      },
      {
        title: "Database Sharding",
        link: "/develop/koii-task-101/what-are-tasks/key-components/database-sharding",
        image: "img/DATABASE SHARDING.svg",
      },
      {
        title: "Node to Node Sync",
        link: "/develop/koii-task-101/what-are-tasks/key-components/node-to-node-sync",
        image: "img/NODE TO NODE SYNC.svg",
      },
      {
        title: "Rest API",
        link: "/develop/koii-task-101/what-are-tasks/key-components/rest-api",
        image: "img/REST API.svg",
      },
    ],
  },

  {
    title: "Tutorials",
    description: "Learn by a journey through our prebuilt Koii Tasks",
    items: [
      {
        title: "The Task Template",
        link: "/develop/write-a-koii-task/task-development-guide/k2-task-template/",
        image: "img/TEH TASK TEMPLATE.svg",
      },
      {
        title: "Google Doodle",
        link: "/develop/task-tutorials/google-doodle-task/",
        image: "img/GOOGLE DOODLE (1).svg",
      },
      {
        title: "Koii Linktree",
        link: "/develop/task-tutorials/linktree-task/intro",
        image: "img/KOII LINKTREE.svg",
      },
      {
        title: "Web Crawlers",
        link: "/develop/task-tutorials/scrapers/twitter",
        image: "img/WEB CRAWLERS.svg",
      },
    ],
  },

  {
    title: "Learn",
    description: "Koii is complicated - Get the basics.",
    items: [
      {
        title: "Tokenomics",
        link: "/concepts/the-koii-token/network-economics",
        image: "img/TEKONOMICS.svg",
      },
      {
        title: "Gradual Consensus",
        link: "/concepts/gradual-consensus/",
        image: "img/GRADUAL CONSENSUS (2).svg",
      },
      {
        title: "Community",
        link: "/concepts/community/community-forums",
        image: "img/COMMUNITY.svg",
      },
      {
        title: "Glossary",
        link: "/concepts/glossary",
        image: "img/GLOSARRY.svg",
      },
    ],
  },
];
