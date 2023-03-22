import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { Hero } from "@site/src/components/homePageHero";
import { Footer } from "@site/src/components/footer";
import { Button } from "../components/buttons";
import { WhereToStart } from "../components/whereToStart";
import { Discord } from "../components/discord";

import styles from "./index.module.css";

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
        <HomepageFeatures />
        <WhereToStart />
        <Discord />
        <Footer />
      </main>
    </Layout>
  );
}
