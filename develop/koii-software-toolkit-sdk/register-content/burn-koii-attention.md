---
title: burnKoiAttention
description: Content creators can earn attention rewards in KOII by registering content with Koii Network. Register once and get rewarded forever.
image: static/img/thumbnail.png
sidebar_label: burnKoiAttention
---

# burnKoiAttention

Content creators can earn attention rewards in KOII by registering content with Koii Network. Register once and get rewarded forever.

This function enables content to earn attention rewards for anything that has already been uploaded on Arweave.

### **Parameters**

- **reward**: (Optional) `<string>` Custom reward for smartweave transaction
- **nftTxId:** `<string>` ID of the NFT to be preregistered

### Example Code

```javascript
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
const walletKeyLocation = "arweaveWallet.json";

async function testburnKoiAttention() {
  const jwk = await ktools.loadFile(walletKeyLocation);
  await ktools.loadWallet(jwk);

  let txId = "rnc8IO7O7fd8Hovvvmq2YZ4y1CI-O0tdRavSGj_meYE";
  var result = await ktools.burnKoiAttention(txId);

  console.log("transaction", result);
}

testburnKoiAttention();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
transaction ySdfS6tWYa0aCn6PNaXD7lmvFz3FHowwI6Tsiujg7tU
```

### Returns

**Promise `<string>` -** Arweave transaction ID
