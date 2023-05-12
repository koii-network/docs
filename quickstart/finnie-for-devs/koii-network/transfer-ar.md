---
title: transfer (AR)
description: Interact with the contract to transfer AR tokens from one wallet to another.
image: img/thumbnail.png
sidebar_label: transfer (AR)
---

# transfer (AR)

Interact with the contract to transfer AR tokens from one wallet to another.

### Parameters

- qty `<number>` - Amount of tokens to transfer
- target `<string>` - Receiver's wallet address
- token `<string>` - The token to be transferred (AR in this case)
- _[Optional]_ reward `<string>` - Custom reward for smartweave transaction

:::info
The same function can be used to [**transfer KOII tokens**](./transfer-koii) from one wallet to another, we just need to change the token type in the third parameter.
:::

### Example Code

:::caution
In the below code example, change the `qty` & `receiverAddress` as per your transfer requirements.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function transferAr() {
  const jwk = await ktools.loadFile("arweaveWallet.json");
  await ktools.loadWallet(jwk);

  const qty = 0.001;
  const receiverAddress = "azJBB0fI8iKZo3CsWbTOo3bot-uMwUHh__cQ0HzC4Io";
  const transferTxId = await ktools.transfer(qty, receiverAddress, "AR");
  console.log("Your transaction is " + transferTxId);
}

transferAr();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
Your transaction is rxomYgpdTaRkmeSt_MHYqD5KBAGd9JSFYq8iOeM-is0
```

### Returns

**Promise `<string>`** - Transaction ID of the transfer transaction.
