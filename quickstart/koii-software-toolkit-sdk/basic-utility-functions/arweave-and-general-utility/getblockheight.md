---
title: getBlockHeight
description: This function returns the current block height of the Arweave blockchain.
image: img/thumbnail.png
sidebar_label: getBlockHeight
---

# getBlockHeight

This function returns the current block height of the Arweave blockchain.

### Example Code

```jsx
const knode = require("@_koii/sdk/node");
const ktools = new knode.Node();
async function testGetBlockHeight() {
  const blockNumber = await ktools.getBlockHeight();
  console.log(blockNumber);
}

testGetBlockHeight();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
870697
```

:::info
You can check other details and info about the block from [https://viewblock.io/arweave/block/849444](https://viewblock.io/arweave/block/849444)
:::

:::caution
The block height could be different when you try to run the code. Change the `849444` in the URL with the block height you have.
:::

### Returns

**Promise `<unknown>`** - Current block height of Arweave blockchain as a number.
