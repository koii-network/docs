---
title: getNftState
description: This function returns all the details about a given NFT such as creator address, title, description, etc.
image: img/thumbnail.png
sidebar_label: getNftState
---

# getNftState

This function returns all the details about a given NFT such as creator address, title, description, etc.

### Parameters

**id `<string>`** - The transaction ID that you would like to get information for.

### Example Code

:::caution
In the below code example, change the `targetNft` to the NFT ID for which you want to see the detailed info like creator address, title, description, attention gained, rewards earned, etc.&#x20;
:::

```javascript
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();
async function testGetNftState() {
  const targetNft = "gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA";
  const nftState = await ktools.getNftState(targetNft);
  console.log("State of the NFT", targetNft);
  console.log(nftState);
}

testGetNftState();
```

### Example Code Output

```bash
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
State of the NFT gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA
{
  creator: 'CfvJqETL1hpeSAfc6cXx-vexXxCso7nq7Xya76tDzXE',
  ticker: 'AZ',
  title: 'Atomic Zombie #0276 Bowie',
  description: `Measuring in at a hulking 6'4", Bowie eats movies like Shrek for breakfast. [ Deceased September 26, 1883 ]`,
  balances: {
    iLybsW8pdtNycJkF3F6Q2EsdRwrx03lXpxKebKo45CQ: 0,
    '7b4ll1zwenRB8jzyESjFNcRls331buyNl231Pe0V9VI': 1
  },
  creator_share: 0.2,
  contentType: 'text/html',
  createdAt: 1635640188,
  tags: [],
  locked: [],
  id: 'gZIRmwBIL5nnkAxaFQbGICcUdrOOmBLzqd1LFhd3vSA',
  next: '9GWUd67kL-eTG0f1YHHnb-1zDsgxTcAmxCWfkNzYAQQ',
  prev: 'T9b-4jt7Mc-MuakD10bbIUduvevcZxJjzU7ZEJ71dKw',
  attention: 6,
  reward: 0.03898202652777241
```

### Returns

**Promise `<any>`** - All the information pertaining to a given NFT including the state of the NFT, views, and rewards.
