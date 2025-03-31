import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { GrantArea } from "@site/src/components/grantArea";

import { Hero } from "@site/src/components/homePageHero/index";
import { Discord } from "../components/discord";
import { Cta } from "../components/cta";
import { Cta2 } from "../components/cta2";
import JoinTheFun from "../components/joinTheFun/JoinTheFun";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <Hero />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Koii is Web3, for everyone."
    >
      <HomepageHeader />
      <Cta />


      {/* <Cta2 /> */}
      {/* <JoinTheFun /> */}
      {/* <GrantArea /> */}
      {/*       <ExploreTopics />  */}
      {/* <Discord /> */}
    </Layout>
  );
}
