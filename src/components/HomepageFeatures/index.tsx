import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {FeatureList, Column, Feature} from "@site/src/components/HomepageFeatures/featurelist"


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 className="text-center big-title" > Browse the Docs By Topic </h1>

<FeatureList>
  <Column title="Understanding Koii" size={4}>
    <Feature url="/concepts/concepts/earning-koii/get-free-tokens" title="Koii Token" subtitle="Learn the Basics about Koii Token" />
    <Feature url="/concepts/bconcepts/finnie" title="Finnie - Koii wallet" subtitle="Try Finnie as your wallet"/>
    <Feature url="/concepts/koii-summary/welcome" title="Run a Node" subtitle="Run a node to earn KOII"/>
    <Feature url="/concepts/koii-summary/welcome" title="Koii Task" subtitle="Learn about Koii Task"/>
  </Column>
  <Column title="Developer Documentation" size={4}>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="K2 - settlement layer" subtitle="Learn how to use K2"/>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Attention Mining" subtitle="Collect Proof of Real Traffic"/>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Build a Task" subtitle="Learn how to write Koii Task"/>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Gradual Consensus" subtitle="Learn and use gradual consensus"/>
  </Column>
  <Column title="Developer Tools" size={4}>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Koii CLI" subtitle="Learn and use Koii CLI" />
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Task Node CLI" subtitle="Learn and use Task Node CLI" />
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Create Task CLI" subtitle="Learn and use create-task CLI" />
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="JS SDK" subtitle="Learn and use JS SDK"/>
    <Feature url="/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk" title="Build Dapp" subtitle="Learn and use Koii-X"/>
  </Column>
</FeatureList>
      </div>
    </section>
  );
}
