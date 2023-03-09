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
    <Feature url="/concepts/basics/protocol" title="What is NEAR?" subtitle="Learn the Basics about NEAR" image="near-logo.png" />
    <Feature url="/concepts/basics/accounts/account-id" title="Named Accounts" subtitle="NEAR uses human-readable accounts" image="user.png" />
    <Feature url="/concepts/basics/accounts/access-keys" title="Multiple Access Keys" subtitle="More keys means more security" image="key.png" />
    <Feature url="/concepts/basics/accounts/smartcontract" title="Smart Contracts" subtitle="Learn about our contract technology" image="contract.png" />
    <Feature url="/concepts/basics/tokens" title="Token" subtitle="Learn about the NEAR token" image="ft.png" />
    <Feature url="/concepts/basics/transactions/overview" title="Transactions" subtitle="Fast and Inexpensive" image="transaction.png" />
    <Feature url="/concepts/basics/validators" title="Validators" subtitle="Learn how the network stays safe" image="validation.png" />
  </Column>
  <Column title="Developer Documentation" size={3}>
    <Feature url="/develop/quickstart-guide" title="Quickstart" subtitle="Spin-up your first dApp" image="quickstart.png" />
    <Feature url="/tutorials/welcome" title="Tutorials & Examples" subtitle="Check-out a bast library of examples" image="tutorials.png" />
    <Feature url="/develop/contracts/introduction" title="Build a Contract" subtitle="Learn how to write smart contracts" image="smartcontract.png" />
    <Feature url="/develop/testing/introduction" title="Test the Contract" subtitle="Write unit & integration tests" image="test.png" />
    <Feature url="/develop/integrate/frontend" title="Build a Web Frontend" subtitle="Learn how to make a web dApp" image="frontend.png" />
    <Feature url="/tools/realtime" title="Monitor your App" subtitle="Learn how to track the Blockchain" image="monitor.png" />
  </Column>
  <Column title="Developer Tools" size={3}>
    <Feature url="/sdk/js/introduction" title="JavaScript SDK" subtitle="Write contracts in JavaScript" image="smartcontract-js.png" />
    <Feature url="/sdk/rust/introduction" title="Rust SDK" subtitle="Write contracts in Rust" image="smartcontract-rust.png" />
    <Feature url="/tools/near-cli" title="NEAR CLI" subtitle="Use NEAR from the Terminal" image="near-cli.png" />
    <Feature url="/tools/near-api-js/quick-reference" title="NEAR API JS" subtitle="Interact with NEAR from JS" image="near-api-js.png" />
    <Feature url="/api/rpc/introduction" title="RPC API" subtitle="Interact with the NEAR RPC API" image="rpc.png" />
    <Feature url="/concepts/advanced/indexers" title="Indexing blockchain data" subtitle="Query usage information for a contract" image="blocks.png" />
  </Column>
  <Column title="Examples & Tutorials" size={3}>
    <Feature url="/develop/relevant-contracts/ft" title="Fungible Tokens" subtitle="Learn how to use and make FT" image="ft.png" />
    <Feature url="/develop/relevant-contracts/nft" title="Non-Fungible Tokens" subtitle="Enter the NFT space" image="nft.png" />
    <Feature url="/develop/relevant-contracts/dao" title="Autonomous Organizations" subtitle="Understand DAOs" image="dao.png" />
    <Feature url="/tutorials/indexer/near-lake-state-changes-indexer" title="Lake Indexer" subtitle="Watch the network and access all the events" image="experiment.png" />
  </Column>
</FeatureList>
      </div>
    </section>
  );
}
