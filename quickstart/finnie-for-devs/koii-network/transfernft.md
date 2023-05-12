---
title: transferNft
description: This function transfers the NFT ownership to a target address.
image: img/thumbnail.png
sidebar_label: transferNft
---

# transferNft

This function transfers the NFT ownership to a target address.

### Parameters

- **nftId `<string>`** - NFT ID to transfer
- **qty `<number>`** - Quantity of NFT balance to transfer
- **target `<string>`** - Target address to transfer ownership to
- _\[Optional]_ **reward ` <string>`** - Custom reward for smartweave transaction

### Example Code

:::caution
In the below code example, change the `nftID` & `targetAddress` as per your transfer requirements.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function testTransferNft() {
  const jwk = await ktools.loadFile("arweaveWallet.json");
  await ktools.loadWallet(jwk);

  const nftID = "5APQHMQblgRjnl74iQGhfsoNW9UoVqX6V8Jl8wGtwLw";
  const targetAddress = "7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI";
  const transferTx = await ktools.transferNft(nftID, 1, targetAddress);
  console.log(transferTx);
}

testTransferNft();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
ZtaH__3m1QJH1iH2X8PdNT7Wo5iOh0tn6dXfngKMn90
```

### Returns

**Promise `<string>`** - Arweave transaction ID of the NFT transfer transaction.
