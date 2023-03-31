---
title: Proof of Real Traffic (PoRT)
description: Proof of Real Traffic is a cryptographic primitive including a signature from a specific consumer wallet.
image: img/thumbnail.png
sidebar_label: Proof of Real Traffic (PoRT)
---

# Proof of Real Traffic (PoRT)

<br/>
<br/>

# What is Proof of Real Traffic?

Proof of Real Traffic is a cryptographic primitive including a signature from a specific consumer wallet. Each viewer creates a signature and then hashes over it to find a PoRT with a specific [difficulty factor](https://btc.com/stats/diff) generating a PoW that uniquely represents the content and viewer.

![PoRT](../img/PoRT.png)

# How does it work?

The attention task is running on Koii task node. After the user registers his content to the attention task, it will keep collecting the views received by your content. Currently supported content: NFT on Arwaeve, content on IPFS or your webpage. After collecting certain views, users can get their KOII.

# How can I use it?

We provide two powerful SDK tools to help user build and collect KOII, `@_koii/k2-port` and `@_koii/recipients.`

The `@_koiii/k2-port` SDK is used for collecting views for your NFT or website. Check [here](./registering-content) and learn how to use it.

The `@_koii/k2-recipient-sdk` SDK is used to register your content to the Attention task and collect KOII. Check and learn how to use it.
