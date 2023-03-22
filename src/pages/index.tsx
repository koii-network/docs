import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ExploreTopics } from "@site/src/components/exploreTopics";
import { Hero } from "@site/src/components/homePageHero";
import { Footer } from "@site/src/components/footer";
import { WhereToStart } from "../components/whereToStart";
import { Discord } from "../components/discord";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="flex justify-center">
      <Hero />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description">
      <HomepageHeader />
      <main>
        <ExploreTopics />
        <WhereToStart />
        <Discord />
        <Footer />
      </main>
    </Layout>
  );
}
