---
title: Mint NFT
description: Let's take our final step - mint our own NFT! We can do that by using the method `mintCollectibles` which is available on our brand new `collectiblesContract`.
image: static/img/thumbnail.png
sidebar_label: Mint NFT
---

# Mint NFT

Let's take our final step - mint our own NFT! We can do that by using the method `mintCollectibles` which is available on our brand new `collectiblesContract`.

```jsx
const mintCollectibles = async () => {
  try {
    const mint = await collectiblesContract.mintCollectibles(1, {
      from: accounts[0],
    });
    const result = await mint.wait();
    console.log("Transaction hash: " + result.transactionHash);
  } catch (err) {
    console.error(err.data);
  }
};
```
