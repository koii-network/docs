---
title: Staking and Voting
description: Building trustless trust requires simple rules for participation.
image: img/thumbnail.png
sidebar_label: Staking and Voting
---

import Description from "@site/src/components/description";

![decorative banner](/img/concepts/tasks/staking-and-voting.svg)

<Description
  text="Building trustless trust requires simple rules for participation."
/>

## Staking

Tokens are staked on a per-task basis, which ensures that there is always sufficient collateral to secure the underlying bounty and ensure stable and predictable outcomes in case of an audit. While the default structure for tasks is to use KOII tokens as stakes, it is also possible to configure a Task to lock up and support anything from an NFT to a K2 token, or even an asset on another blockchain if a sufficiently secure vault contract can be deployed.

When an asset is staked, it is important to assign a lock period, otherwise, the collateral may be withdrawn before malicious action is detected. Common minimum stake periods are 2-4 epochs (24–48 hrs).

## Voting & Vote Power

The primary reason that a stake is required by participating nodes is to secure the gradual consensus voting process, which aggregates feedback from multiple nodes before an on-chain decision is confirmed.

Vote power is not required for tasks to be executed, but it can be an effective tool for enforcing good behavior. Under this model, the vote of each node is scaled according to its portion of the stake pool, along with any secondary reputation properties or historical performance that might be useful. In the original implementation, votes are scaled by the total stake and the total time the stake is locked.
