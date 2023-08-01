---
title: KOII (K2) JavaScript API
description: This is the KOII (K2) JavaScript API built on the KOII JSON RPC API.
image: img/thumbnail.png
sidebar_label: KOII (K2) JavaScript API
---

# KOII (K2) JavaScript API

The KOII (K2) JavaScript API is a powerful tool developed for the Koii platform. It is built on top of the KOII [JSON RPC API](https://docs.solana.com/api/http), which provides essential functionalities for interacting with the Koii network.

To explore the latest API documentation and understand how to leverage the capabilities of the KOII JavaScript API, please refer to the [Latest API Documentation](https://solana-labs.github.io/solana-web3.js/). This documentation serves as a comprehensive guide, providing insights into the API's methods, parameters, and usage, allowing you to harness the full potential of the Koii platform in your JavaScript applications.

To get started with the installation process and understand how to use the KOII JavaScript API, follow the steps provided below:

### Installation

You can install the API using one of the following methods:

#### npm

```
$ npm install --save @_koi/web3.js
```

#### Yarn

```
$ yarn add @_koi/web3.js
```

#### Browser bundle

```jsx
<!-- Development (un-minified) -->
<script src="https://unpkg.com/@_koi/web3.js@latest/lib/index.iife.js"></script>

<!-- Production (minified) -->
<script src="https://unpkg.com/@_koi/web3.js@latest/lib/index.iife.min.js"></script>
```

### Usage

The KOII JavaScript API can be used in various ways based on your development environment:

#### JavaScript

```jsx
const koiiWeb3 = require("@_koi/web3.js");
console.log(koiiWeb3);
```

#### ES6

```jsx
import * as koiiWeb3 from "@_koi/web3.js";
console.log(koiiWeb3);
```

#### Browser bundle

```jsx
// `koiiWeb3` is provided in the global namespace by the `koiiWeb3.min.js` script bundle.
console.log(koiiWeb3);
```

#### Examples

Example scripts for the web3.js repo and native programs:

- [Web3 Examples](https://github.com/koii-network/k2-web3.js/tree/master/examples)

:::info Disclaimer

All claims, content, designs, algorithms, estimates, roadmaps, specifications, and
performance measurements described in this project are done with the KOII Network best efforts.
It is up to the reader to check and validate their accuracy and truthfulness.
Furthermore nothing in this project constitutes a solicitation for investment.

Any content produced by SF or developer resources that SF provides, are for educational and
inspiration purposes only. SF does not encourage, induce or sanction the deployment,
integration or use of any such applications (including the code comprising the KOII blockchain protocol)
in violation of applicable laws or regulations and hereby prohibits any such deployment, integration or use.
This includes use of any such applications by the reader

(a) in violation of export control or sanctions laws of the United States or any other applicable jurisdiction,

(b) if the reader is located in or ordinarily resident in a country or territory subject to comprehensive sanctions administered by the U.S. Office of Foreign Assets Control (OFAC),

or (c) if the reader is or is working on behalf of a Specially Designated National (SDN) or a person subject to similar blocking or denied party prohibitions.

The reader should be aware that U.S. export control and sanctions laws prohibit U.S. persons (and other persons that are subject to such laws) from transacting with persons in certain countries and territories or that are on the SDN list.
As a project based primarily on open-source software, it is possible that such sanctioned persons may nevertheless bypass prohibitions, obtain the code comprising the KOII blockchain protocol (or other project code or applications) and deploy, integrate, or otherwise use it.
Accordingly, there is a risk to individuals that other persons using the KOII blockchain protocol may be sanctioned persons and that transactions with such persons would be a violation of U.S. export controls and sanctions law. This risk applies to individuals, organizations, and other ecosystem participants that deploy, integrate, or use the KOII blockchain protocol code directly (e.g., as a node operator), and individuals that transact on the KOII blockchain through light clients, third party interfaces, and/or wallet software.
:::
