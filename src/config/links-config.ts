export enum HubspotFormLinks {
  PARTNERSHIP = "https://share.hsforms.com/1_HHcmivaTDaI9O1gX3DZngc20dg",
  INVESTOR = "https://share.hsforms.com/14iIe1UZZTUqF-dPNONXc0Qc20dg",
  GRANT = "https://share.hsforms.com/1ATBOuLeqSCa-WCEBU8Ky0Ac20dg",
  NODE_PREREGISTER = "https://share.hsforms.com/1kLtk8rfURZ-HY2xnKRTfCgc20dg",
  FINNIE_MOBIE_PREREGISTER = "https://share.hsforms.com/1isxRWrY7TIWU6bqJNSWzEwc20dg",
  JOBS = "/career",
  SUPORT = "https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg",
  FAUCET_SUPPORT = "https://share.hsforms.com/1C0zJsC7tTYe4s1fhtxE3-Qc20dg",
  NEWSLETTER = "https://share.hsforms.com/1oqz977zNToCWmA-hbyTjXwc20dg",
}

export const companyLinks = [
  { label: "About", url: "/about" },
  { label: "Earn", url: "/earn" },
  { label: "Blog", url: "https://blog.koii.network" },
  // { label: "Jobs", url: HubspotFormLinks.JOBS },
  { label: "Developers Docs", url: "https://docs.koii.network" },
  { label: "Leaderboard", url: "https://koi.rocks/" },
  // { label: "Support", url: HubspotFormLinks.SUPORT },
  { label: "Press Kit", url: "/Koii-Network_External-Assets.zip" },
  // { label: "FAQ", url: "https://koii.network/faq" },
];

export const getInvolvedLinks = [
  { label: "Run a Node", url: "/node" },
  { label: "Get Finnie", url: "https://koii.me/finnie" },
  { label: "Apply for a Grant", url: HubspotFormLinks.GRANT },
  { label: "Become a Partner", url: HubspotFormLinks.PARTNERSHIP },
  { label: "Join the Waitlist", url: HubspotFormLinks.INVESTOR },
  {
    label: "Content Collectives",
    url: "https://blog.koii.network/Content-Collective",
  },
];

export const getInTouchLinks = [
  { label: "hello@koii.network", url: "mailto:hello@koii.network" },
  { label: "press@koii.network", url: "mailto:press@koii.network" },
];

export const getDiscordDocsLinks = {
  discord: "https://discord.gg/koii",
  docs: "https://docs.koii.network/",
}
