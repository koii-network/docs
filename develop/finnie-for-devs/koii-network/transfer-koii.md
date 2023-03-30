---
title: transfer (KOII)
description: Interact with the contract to transfer KOII tokens from one wallet to another.
image: static/img/thumbnail.png
sidebar_label: transfer (KOII)
---

# transfer (KOII)

Interact with the contract to transfer KOII tokens from one wallet to another.

### Parameters

- qty `<number>` - Amount of tokens to transfer
- target `<string>` - Receiver's wallet address
- token `<string>` - The token to be transferred (KOII in this case)
- (optional) reward: string Custom reward for smartweave transaction

:::info
The same function can be used to [**transfer AR tokens**](./transfer-ar) from one wallet to another, we just need to change the token type in the third parameter.
:::

### Example Code

:::caution
In the below code example, change the `qty` & `receiverAddress` as per your transfer requirements.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function transferKoii() {
  const jwk = await ktools.loadFile("arweaveWallet.json");
  await ktools.loadWallet(jwk);

  const qty = 5;
  const receiverAddress = "azJBB0fI8iKZo3CsWbTOo3bot-uMwUHh__cQ0HzC4Io";
  const transferTxId = await ktools.transfer(qty, receiverAddress, "KOI");
  console.log("Your transaction is " + transferTxId);
}

transferKoii();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
Your transaction is i266WPYLoCr-AfglhLO8YW91ScUhlx4B4_KtFx_Ap60
```

### Returns

**Promise `<string>`** - Transaction ID of the transfer transaction.
