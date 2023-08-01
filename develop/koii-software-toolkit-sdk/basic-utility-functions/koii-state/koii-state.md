---
title: Koii State
description: Accessing the Koii state will allow you to view information on wallet balances, NFTs, and attention rewards. The next few pages will show you how to interact with the state and get this information.
image: img/thumbnail.png
sidebar_label: Koii State
---

:::caution
These functions are based on Arweave.
:::

<!-- # Koii State -->

Accessing the Koii state will allow you to view information on wallet balances, NFTs, and attention rewards. The next few sections will show you how to interact with the state and get this information.

## getAttentionId

This function gets the attention contract ID running on the bundler.

### Example Code

```javascript
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function testGetAttentionId() {
  const attentionContractID = await ktools.getAttentionId();
  console.log("attentionContractID :", attentionContractID);
}

testGetAttentionId();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
attentionContractID : NwaSMGCdz6Yu5vNjlMtCNBmfEkjYfT-dfYkbQQDGn5s
```

### Returns

**Promise `<string>`** - Attention contract ID running on the bundler as a string

## getKoiiState

:::danger
The states are based on Arweave and K1. Know more about K2 [here](/develop/settlement-layer/k2-tick-tock-fast-blocks)
:::

This endpoint returns the state of Koii. Balances, stakes, Koii tasks and all the other information can be programmatically accessed through this endpoint.

### Example Code

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function testGetKoiiState() {
  const koiiState = await ktools.getKoiiState();
  console.log(koiiState);
}

testGetKoiiState();
```

### Example Code Output

![This will be a large file output.](../../img//attention.PNG)

:::info
&#x20;You can alternatively also visit [https://mainnet.koii.live/state](https://mainnet.koii.live/state) to check the Koii State.
:::

### Returns

**Promise `<any>` -** Information about the current Koii State.

## getKoiBalance

:::danger
This function is based on K1. Know more about K2 and generate a K2 Koii wallet [here](/concepts/settlement-layer/k2-tick-tock-fast-blocks)
:::

This function returns the KOII balance of a given address.

:::info
This wallet's private key needs to be loaded to retrieve the balance. This function does not take the address as a parameter and return the balance.
:::

### Example Code

:::caution
In the below code example, replace `<walletKeyLocation>` on line 4 with the local path to your wallet key file.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
async function testGetKoiiBalance() {
    const jwk = await ktools.loadFile(<walletKeyLocation>);
    await ktools.loadWallet(jwk);
    const koiibalance = await ktools.getKoiBalance();
    console.log("KOII balance of given address is ", koiibalance);
}

testGetKoiiBalance();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
KOII balance of the given address is  7459.149283222933
```

### Returns

**Promise `<Number>`** - Koii balance of a given address as a number.
