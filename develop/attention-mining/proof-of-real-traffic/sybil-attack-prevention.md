---
title: Sybil Attack Prevention
description: What happens if someone just fakes a bunch of attention?
image: img/thumbnail.png
sidebar_label: Sybil Attack Prevention
---

import Description from "@site/src/components/description";

# Sybil Attack Prevention

![banner](../img/Sybil%20Attack%20Prevention.svg)

<Description
  text="What happens if someone just fakes a bunch of attention?"
/>

One of the major advantages of recording Proofs of Real Traffic (PoRT) to track attention is the intrinsic difficulty of forgery.

## **How does it work?**&#x20;

Each PoRT contains a cryptographic signature and must meet certain difficulty criteria in order to be accepted, requiring a client-side library to execute a signature algorithm repeatedly to produce valid proof.&#x20;

## **Preventing Spam**

During the early days of the network, a large number of "bot" wallets were created, which created signatures continuously and were briefly able to earn a vast majority of newly created tokens with each epoch. This was obviously a huge problem and meant that actual content creators and developers couldn't hope to match the number of PoRTs that these malicious accounts were generating.

As a result, the [K2](https://blog.koii.network/Koii-Announces-K2/) release contains a number of safeguards against "bot" wallets and <Tooltip text="sybil attacks"/> by giving wallets different weights when viewing particular content.

Several updates have been implemented, and others will be coming soon:

**Reputation Scaling** — Within K2, each wallet has a ranking within the global structure, and attention is scaled logarithmically with the position in this ranking, giving higher value to attention from high reputation accounts, and excluding attention from low reputation accounts entirely under some circumstances.

**Attention Clustering** — If a large number of low-reputation accounts view the same content without viewing any other content, their reputation will be reduced significantly. _(coming soon)_

**Interest Scaling** — As content tagging tasks continue to be developed, it will also be possible to integrate content-specific reputations to provide greater granularity. _(coming soon)_
