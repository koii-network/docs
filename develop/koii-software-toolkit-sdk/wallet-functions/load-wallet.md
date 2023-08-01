---
title: loadWallet
description: Every crypto wallet has a public address and a private key; your private key is used to access and make changes from the wallet. This function is used for programmatically loading the wallet by reading the private key stored locally.
image: img/thumbnail.png
sidebar_label: loadWallet
---

# loadWallet

Every crypto wallet has a public address and a private key; your private key is used to access and make changes from the wallet. This function is used for programmatically loading the wallet by reading the private key stored locally.

:::info
For developing frontend applications that interact with the Finnie extension (login with Finnie), check out Koii-X.
:::

:::info
Each Arweave public address contains 43 characters. All the information pertaining to the Arweave address, including transactions, balance, and other tokens can be viewed on the [Arweave block explorer](https://viewblock.io/arweave).
:::

For example, you can view all the information about the Arweave public address `7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI` [here](https://viewblock.io/arweave/address/7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI).

### Parameters

Path to your local wallet file that contains the private key

### Example Code

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
const walletKeyLocation = "<Path to your local wallet file>";

async function testLoadWallet() {
  const jwk = await ktools.loadFile(walletKeyLocation);
  await ktools.loadWallet(jwk);
  console.log("Loaded wallet with address", await ktools.getWalletAddress());
}

testLoadWallet();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
Loaded wallet with address a0nRz4EBcQAcewqVEfecIxqU5JDP63cXUh08Ipwdvxk
```

### Returns

**Promise `<String>`** - Wallet Address&#x20;
