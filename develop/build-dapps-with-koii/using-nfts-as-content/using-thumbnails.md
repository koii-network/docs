---
title: Using Thumbnails
description: Once you have uploaded an NFT, your thumbnail will be stored at https://koii.live/NFTid.png.
image: ../img/Using_Thumbnails.png
sidebar_label: Using Thumbnails
---

# Using Thumbnails

![Banner](../img/Using_Thumbnails.png)

Once you have uploaded an NFT, your thumbnail will be stored at `https://koii.live/NFTid.png`. You can use it in the leaderboard or share it on social media by following the steps below.

- To use your NFT thumbnail in your dApp&#x20;

```tsx
{
  /* Thumbnail */
}
<Image src={`https://koii.live/NFTid.png`} objectFit='cover' />;
```

- To share your NFT on social media

  Use this link: `https://koii.live/<NFTid>.html` to share your NFT to social media:

![Share Card Preview](<../img/image%20(4).png>)

:::info
The link will jump to `https://koi.rocks/content-detail/<NFTid>`
:::

- To embed your NFT

```tsx
<iframe width="100%" src="${permalink}" title="Koii  NFT image" frameborder="0" allowfullscreen></iframe>`;
```
