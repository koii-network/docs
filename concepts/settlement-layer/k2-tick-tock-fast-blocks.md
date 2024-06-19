---
title: K2 - Tick, Tock, Fast Blocks
description: Fast transaction settlement and timestamps.
image: img/thumbnail.png
sidebar_label: K2 - Tick, Tock, Fast Blocks
---

import Tooltip from "@site/src/components/tooltip";

import Description from "@site/src/components/description";

# K2 - Tick, Tock, Fast Blocks

![K2](/img/concepts/settlement-layer/k2-fast-blocks.svg)

<Description
  text="Fast transaction settlement and timestamps."
/>

K2 is the current settlement layer within Koii and provides the functionality of a message hub to other systems in the network.

Thanks to the incredible work of the Solana Labs team, K2 can use [Proof of History](https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-capacity-space/proof-of-history) to achieve 0.2-second transaction times and thousands of transactions per second.

The settlement layer holds the KOII tokens, as well as an immutable ledger of transaction history, an active registry of open compute operations, and all compute task metadata.

**Heads up!** To use K2, you'll need to install the [Koii CLI](/develop/category/koii-command-line-tool) or try the [Koii SDK](/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk), which provides vital functions such as creating wallets, sending transactions, and signing data.

## Native Programs

[Native programs](https://docs.solana.com/developing/runtime-facilities/programs) in K2 are used to extend the default Solana settlement functionality and have been used to modify things to optimize for off-chain computing and content-centric applications. The two native programs currently in use are the task contract and the attention game.

### The Task Contract

Koii Task Nodes use the settlement layer to submit proofs and request rewards for computing work.
All task-related activities are managed by the built-in task contract, which is managed by the Koii Foundation. Some of the operations the task contract supports are:

1. Pull a timestamp-proof
2. Submit proofs to claim task rewards
3. Trigger audit on a node's reward request
4. Submit a distribution event
5. Select a node for a distribution event
6. Fetch all submissions for a task

### The Attention Game

To ensure that Koii is owned by the community, and not only those with the means to provide computing, 90% of all newly generated tokens are created by the attention contract.

Each day, Koii nodes collect Proofs of Real Traffic and submit batches of them into decentralized storage.

Every [epoch](https://docs.solana.com/terminology#epoch) (roughly every 12 hours), a pool of new tokens is created and distributed to anyone who receives attention to their content.

Node operators can also earn new tokens by running a K2 Validator, or by running the attention task on a task node and helping to verify Proofs of Real Traffic or lock them into the settlement layer.
