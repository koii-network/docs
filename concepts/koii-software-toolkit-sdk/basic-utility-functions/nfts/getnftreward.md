---
title: getNftReward
description: The KOII you earned are based on K1 network.
image: img/thumbnail.png
sidebar_label: getNftReward
---

# getNftReward

:::danger
The KOII you earned are based on K1 network. Check the [task node](/run-a-node/introduction/task-nodes) to earn more KOII on K2 .
:::

This function returns attention rewards earned from an NFT in KOII.

### Parameters

**id `<string>`** - The transaction ID to process for which you have to see the earned attention rewards.

### Example Code

:::caution
In the below code example, change the `targetNft` to the NFT ID for which you want to see the attention rewards gained.
:::

```javascript
const knode = require("@_koii/sdk/node");
const ktools = new knode.Node();
async function testGetNftReward() {
  const targetNft = "gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA";
  const nftReward = await ktools.getNftReward(targetNft);
  console.log("Attention rewards for the NFT", targetNft);
  console.log(nftReward);
}
testGetNftReward();
```

### Example Code Output

```bash
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
Attention rewards for the NFT gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA
0.03898202652777241
```

### Returns

**Promise `<null | number>`** - Koii rewards earned from a given NFT

:::danger
Koii rewards earned. If the transaction is not a valid Koii NFT, `null` will be returned.
:::
