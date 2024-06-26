---
title: Registering Content
description: Koii can be earned on any content where Proofs of Real Traffic are submitted.
image: img/thumbnail.png
sidebar_label: Registering Content
---

import Description from "@site/src/components/description";

# Registering Content

![banner](/img/concepts/web3/registering-content.svg)

**$KOII can be earned on any content where Proofs of Real Traffic are submitted.**

To mine new KOII tokens, each piece of content must be registered by paying a small fee in KOII. The fee can either be paid upfront, which costs less, or it can be paid after KOII has already been earned, in which case the fee will scale to the total earned.

**Registration Fees**

_Upfront -_ Small fee, fixed price, but must be paid in advance of any Proof of Real Traffic

_Lazy_ - Larger Fee, scales to the total attention the content has received so far

:::info

Need some KOII? Check <a href="https://faucet.koii.network/" target="_blank">here </a> to airdrop some KOII into your wallet.

:::

**Content Types**

The network is designed to track content from any source and can be configured to credit app developers by specifying an application key. If no application key is specified, the registrar of the content ID receives all rewards.

:::tip
Any piece of content can be registered for attention mining by constructing a URI like the one above, where the network key, application key, and content id contain valid data.
:::

## Recipients SDK Tool

We provide an SDK tool to help you easily register your content. Follow the steps to install and use it:

First, create a new Node.js project and install `@_koii/k2-recipient-sdk`

```sh
npm i @_koii/k2-recipient-sdk
```

Then get a Koii wallet and some KOII in your wallet, which the attention reward will be collected. Check about the [Koii CLI tool](/) to quickly generate one and airdrop some KOII.

## Example

#### For IPFS content:

Please provide a `metadata.json` file and put it at the root:

```jsx title="metadata.json"
{
  "name": "<Content-name>",
  "description": "<Content description >",
  "author": "<author>",
  "githubURL": "https://github.com",
  ...
}
```

Then provide an image as the thumbnail of your content.

Prepare your Koii wallet and check the sample code:

```jsx title="registerIPFS.js"
const { registerIpfsNFT } = require("@_koii/k2-recipient-sdk");
async function main() {
  //  IPFS recipient Signing
  //-----------------------------
  const wallet = jsonfile.readFileSync("ar-wallet.json");
  let recipientsDataIPFS = await registerIpfsNFT(
    {
      privateKey: new Uint8Array(wallet), // Or Copy & Paste your Koii wallet json file content here
      image: "./scene-9.png", // Your content image here
      metadata: "./metadata.json", //Your metadata.json
    },
  );
}

main();
```
