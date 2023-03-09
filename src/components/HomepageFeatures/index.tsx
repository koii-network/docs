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
  <Column title="Understanding NEAR" size={3}>
    <Feature url="/concepts/basics/protocol" title="What is NEAR?" subtitle="Learn the Basics about NEAR" />
    <Feature url="/concepts/basics/accounts/account-id" title="Named Accounts" subtitle="NEAR uses human-readable accounts"/>
    <Feature url="/concepts/basics/accounts/access-keys" title="Multiple Access Keys" subtitle="More keys means more security"/>
    <Feature url="/concepts/basics/accounts/smartcontract" title="Smart Contracts" subtitle="Learn about our contract technology"/>
    <Feature url="/concepts/basics/tokens" title="Token" subtitle="Learn about the NEAR token"/>
    <Feature url="/concepts/basics/transactions/overview" title="Transactions" subtitle="Fast and Inexpensive"/>
    <Feature url="/concepts/basics/validators" title="Validators" subtitle="Learn how the network stays safe"/>
  </Column>
  <Column title="Developer Documentation" size={3}>
    <Feature url="/develop/quickstart-guide" title="Quickstart" subtitle="Spin-up your first dApp"/>
    <Feature url="/tutorials/welcome" title="Tutorials & Examples" subtitle="Check-out a bast library of examples"/>
    <Feature url="/develop/contracts/introduction" title="Build a Contract" subtitle="Learn how to write smart contracts"/>
    <Feature url="/develop/testing/introduction" title="Test the Contract" subtitle="Write unit & integration tests"/>
    <Feature url="/develop/integrate/frontend" title="Build a Web Frontend" subtitle="Learn how to make a web dApp"/>
    <Feature url="/tools/realtime" title="Monitor your App" subtitle="Learn how to track the Blockchain"/>
  </Column>
  <Column title="Developer Tools" size={3}>
    <Feature url="/sdk/js/introduction" title="JavaScript SDK" subtitle="Write contracts in JavaScript" />
    <Feature url="/sdk/rust/introduction" title="Rust SDK" subtitle="Write contracts in Rust" />
    <Feature url="/tools/near-cli" title="NEAR CLI" subtitle="Use NEAR from the Terminal" />
    <Feature url="/tools/near-api-js/quick-reference" title="NEAR API JS" subtitle="Interact with NEAR from JS"/>
    <Feature url="/api/rpc/introduction" title="RPC API" subtitle="Interact with the NEAR RPC API"/>
    <Feature url="/concepts/advanced/indexers" title="Indexing blockchain data" subtitle="Query usage information for a contract"/>
  </Column>
  <Column title="Examples & Tutorials" size={3}>
    <Feature url="/develop/relevant-contracts/ft" title="Fungible Tokens" subtitle="Learn how to use and make FT"/>
    <Feature url="/develop/relevant-contracts/nft" title="Non-Fungible Tokens" subtitle="Enter the NFT space"/>
    <Feature url="/develop/relevant-contracts/dao" title="Autonomous Organizations" subtitle="Understand DAOs"/>
    <Feature url="/tutorials/indexer/near-lake-state-changes-indexer" title="Lake Indexer" subtitle="Watch the network and access all the events"/>
  </Column>
</FeatureList>
      </div>
    </section>
  );
}
