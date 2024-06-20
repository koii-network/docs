---
title: getNftIdsByOwner
description: This function returns an array of strings for a list of all the NFTs owned by a given address.
image: img/thumbnail.png
sidebar_label: getNftIdsByOwner
---

# NFTs

You can get information on each NFT that is registered on Koii by using the functions in this section.

# getNftIdsByOwner

This function returns an array of strings for a list of all the NFTs owned by a given address.

### Parameters

**owner `<string>`** - Wallet address of the owner for which the array of NFT IDs has to be returned.

### Example Code

:::caution
In the below code example, change the `ownerAddress` to the address for which you want to see the list of NFTs.
:::

```jsx
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
async function testGetNftIdsByOwner() {
  const ownerAddress = "7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI";
  const nfts = await ktools.getNftIdsByOwner(ownerAddress);
  console.log(nfts);
}

testGetNftIdsByOwner();
```

### Example Code Output

```sh
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
[
  'KS2cPkMdex3-EehSh20InyuumshQW0flgSMtNgercPI',
  'bSTZSSoiX3LEqsacb2wRlQWw58zat9RJ8jQ8sYXo-jY',
  'gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA',
  'bwk-rqZjxq9r1Ip06MBZQra_gF-pkEsQjIO7h-gwoO8',
  'rnc8IO7O7fd8Hovvvmq2YZ4y1CI-O0tdRavSGj_meYE',
  'hXe6MRSYBulaqllnmWNoMDoY-lmbTCkAOQwEZT4ZZ-s'
]
```

:::tip
In the above example, one of the NFT owned by the address `7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI` is `gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA` which can be [**accessed via the leaderboard**](https://koi.rocks/content-details/gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA).
:::

### Returns

**Promise `<string[]>`** - Array containing the NFTs with the address as owner address.
