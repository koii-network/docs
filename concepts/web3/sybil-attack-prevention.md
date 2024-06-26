---
title: Sybil Attack Prevention
description: What happens if someone just fakes a bunch of attention?
image: img/thumbnail.png
sidebar_label: Sybil Attack Prevention
---

import Description from "@site/src/components/description";

# Sybil Attack Prevention

![banner](/img/concepts/web3/sybil-attack-prevention.svg)

<Description text="What happens if someone just fakes a bunch of attention?" />

One of the major advantages of recording Proofs of Real Traffic (PoRT) to track attention is the intrinsic difficulty of forgery.

## **How does it work?**

Each PoRT contains a cryptographic signature and must meet certain difficulty criteria to be accepted, requiring a client-side library to execute a signature algorithm repeatedly to produce a valid proof.

## **Preventing Spam**

To protect the network against bad actors, such as attackers that can use a large number of bot wallets that can create signatures continuously to earn a vast majority of newly created tokens with each epoch, we implemented several safeguards.

In that example case, actual content creators and developers couldn't hope to match the number of PoRTs that these malicious accounts would be generating.

As a result, the [K2](https://blog.koii.network/Koii-Announces-K2/) release contains several safeguards against "bot" wallets and [Sybil attacks](https://en.wikipedia.org/wiki/Sybil_attack) by giving wallets different weights when viewing particular content.

**Several updates have been implemented, and others will be coming soon:**

**Reputation Scaling** — Within K2, each wallet has a ranking within the global structure, and attention is scaled logarithmically with the position in this ranking, giving higher value to attention from high reputation accounts, and excluding attention from low reputation accounts entirely under some circumstances.

**Attention Clustering (In Development)** — If a large number of low-reputation accounts view the same content without viewing any other content, their reputation will be reduced significantly.

**Interest Scaling (In Development)** — As content tagging tasks continue to be developed, it will also be possible to integrate content-specific reputations to provide greater granularity.
