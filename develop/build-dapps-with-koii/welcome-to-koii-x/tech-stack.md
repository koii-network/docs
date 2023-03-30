---
title: ⌨ Tech Stack
description: Koii combines decentralized rails and incentives with traditional tools
image: ../img/Tech_Stack_(1).png
sidebar_label: ⌨ Tech Stack
---

import ContentLink from "@site/src/components/contentLink";
import Description from "@site/src/components/description";

# ⌨ Tech Stack

![Banner](<../img/Tech_Stack_(1).png>)

<Description
  text="Koii combines decentralized rails and incentives with traditional tools"
/>

Here is a list of some of the tools that can be used together when implementing Koii-X. With a combination of simple dApp templates and a variety of content storage and wallet integration options, building on web3 has never been easier.&#x20;

### Task Nodes

The basic element of the Koii Network is the ability to deploy scalable microservices, called **Tasks**, which can run on as many nodes as necessary to support your project.&#x20;

### K2 Settlement Layer

The K2 Layer utilizes a fork of a Solana Node to provide high-speed transactions and tracks voting between Task Nodes. Unlike Solana, K2 stores its blockchain history on decentralized file storage networks instead of locally, providing a somewhat larger capacity. K2 also has higher Rent costs for data uploads, favoring storage alternatives and generally an option for small payloads or ideally Boolean votes to reduce loads.&#x20;

### Templates from Koii

Koii currently has two templates available, which both support KOII token mining via attention tracking right out of the box.

- [**Crowdfunding Portal**](../template-library/crowdfunding-portal/)
- [**Content Leaderboard App**](../template-library/leaderboard-app/)

### Decentralized Storage

By default, packages are optimized to use storage networks rather than traditional hosting.

- Store files on peer-to-peer networks that span the globe
- Protect art and free speech with censorship-resistant ledgers
- Pay anonymously with cryptocurrency
- Supported: [Arweave](../../koii-software-toolkit-sdk/basic-utility-functions/arweave-and-general-utility/), [IPFS](https://ipfs.io/), [Filecoin](https://filecoin.io/) (Coming Soon)

### Wallet Integrations

The Koii-X Templates have been designed to support a number of wallets out of the box.

- [**Finnie Wallet**](https://koii.network/getFinnie) (ECDSA, RSA \~ Ethereum, Arweave )
- [**Metamask**](https://metamask.io/) (Ethereum, Polygon)
- [**ArConnect**](https://www.arconnect.io/) (Arweave)

:::info
Want to learn more about Finnie? Check out the documentation [**here**](./tech-stack) 👈
:::

### Payment Networks

- Bitcoin
- Ethereum
- Arweave
- Polygon (Coming Soon)
- Polkadot (Coming Soon)
- Solana (Coming Soon)

### React

<ContentLink title="React – A JavaScript library for building user interfaces" link="https://reactjs.org" imageLink="https://reactjs.org/icons/icon-512x512.png?v=f4d46f030265b4c48a05c999b8d93791"/>

### TypeScript

<ContentLink title="JavaScript With Syntax For Types." link="https://www.typescriptlang.org" imageLink="https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae" description="typescriptlang" />

### Chakra UI: An opinionated UI framework

<ContentLink title="Chakra UI" link="https://www.typescriptlang.org" imageLink="https://chakra-ui.com/favicon.png" description="Chakra UI: Simple, Modular and Accessible UI Components for your React Applications." />
