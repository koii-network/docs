---
title: getKoiiState
description: The states are based on Arweave and K1.
image: img/thumbnail.png
sidebar_label: getKoiBalance
---

# getKoiiState

:::danger
The states are based on Arweave and K1. Know more about K2 [here](/concepts/settlement-layer/k2-tick-tock-fast-blocks)
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
