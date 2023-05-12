import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ExploreTopics } from "@site/src/components/exploreTopics";
import { Hero } from "@site/src/components/homePageHero";
import { WhereToStart } from "../components/whereToStart";
import { Discord } from "../components/discord";
import { Cta } from "../components/cta";
import HomeCard from "../components/homeCardSection";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='flex justify-center'>
      <Hero />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Koii is Web3, for everyone.'
    >
      <HomepageHeader />
      <Cta />
      <HomeCard />
      <ExploreTopics />
      <WhereToStart />
      <Discord />
    </Layout>
  );
}
