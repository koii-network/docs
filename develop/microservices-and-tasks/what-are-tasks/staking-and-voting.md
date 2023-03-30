---
title: Staking and Voting
description: Building trustless trust requires simple rules for participation.
image: img/Staking_and_Voting.png
sidebar_label: Staking and Voting
---

import Description from "@site/src/components/description";

# Staking and Voting

![banner](../img/Staking_and_Voting.png)

<Description
  text="Building trustless trust requires simple rules for participation."
/>

While each task can configure its own penalty and voting calculations, we recommend something like the following example, as this is the primary case under which [Gradual Consensus ](gradual-consensus)has been tested.

## **Staking**&#x20;

Tokens are staked on a per-task basis, which ensures that there is always sufficient collateral to secure the underlying bounty and ensure stable and predictable outcomes in case of an audit. While the default structure for tasks is to use KOII tokens as stakes, it is also possible to configure a Task to lock up and collateralize anything from an NFT to a K2 Token, or even an asset on another blockchain if a sufficiently secure vault contract can be deployed.

When an asset is staked, it is important to assign a lock period, otherwise, the collateral may be withdrawn before malicious action is detected. Common minimum stake periods are 2-4 epochs (24–48 hrs).&#x20;

## **Voting & Vote Power**

The primary reason that a stake is required by participating nodes is to secure the Gradual Consensus voting process, which aggregates feedback from multiple nodes before an on-chain decision is confirmed.&#x20;

Vote Power is not required for tasks to be executed, but it can be an effective tool for enforcing good behavior. Under this model, the vote of each node is scaled according to its portion of the stake pool, along with any secondary reputation properties or historical performance that might be useful. In the original implementation, votes are scaled by the total stake and the total time the stake is locked.&#x20;
