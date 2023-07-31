---
title: Welcome to Finnie
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Introduction to Finnie
---

import Description from "@site/src/components/description";

# Welcome to Finnie

![Banner](./img/Welcome%20to%20finnie.svg)

<Description
  text="Your one-stop shop for cross-chain user-engagement."
/>

Building cross-chain applications might be optimal for developers, but what about the communities that use these products?

The Finnie wallet provides some key features right out of the box, and we're working on adding more:

1. **Cross-Chain Wallets**  
   Ethereum and Arweave are supported now. Filecoin, NEAR, Polygon, and more coming soon!

2. **Attention Tracking**  
   Koii's native token (KOII) can only be mined by tracking attention on your content. Finnie supports these features natively, providing hooks to sign Proofs of Real Traffic, and streamlining uploads to Koii nodes.
3. **Decentralized IDs**  
   Finnie users can also manage their personal DID profiles from within the wallet and can provide easy-to-access hooks for developers wishing to build personalized user experiences.

## Download and Use Finnie:

1. **Download:** Go to <a href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj" target="_blank">Finnie</a> and install the Finnie Wallet. The wallet is available for Chrome, Firefox and Brave browsers.

2. **Set-Up:** Once the installation is complete, open the Finnie Wallet app and follow the instructions to set up your wallet. This will include creating a new wallet or importing an existing one, and setting up security features such as a password and backup phrase.

3. **Using Finnie:** Now that your wallet is ready, you can start exploring. Navigate through the different blockchain networks supported, organize your NFTs, mint new items, track attention on your content using KOII tokens, and manage your decentralized identity - all within the wallet.

## For Developers:

When you have Finnie installed and running, you can connect to it from your web app. For example, in the page faucet.koii.network, here is the button "Connect Finnie". The Finnie will pop up and ask you to connect to the faucet. Select the wallet you want to connect to and click "Connect". Then your wallet will be connected to the faucet.

In order to use Finnie in your web app, you can use the following code:

```
await window.k2.connect()
```

For more information about the integration hooks of Finnie wallet, please visit Finnie for Devs.
