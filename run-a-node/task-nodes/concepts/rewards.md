---
title: Rewards, Staking, and Slashing
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Rewards, Staking, and Slashing
---

import Tooltip from "@site/src/components/tooltip";

![Banner](/img/run-a-node/rent.svg)

Every Koii task has a bounty pool - this is the tokens that will be given out as rewards for running the task. When a task builder registers their task, they decide how big the total bounty pool will be and how much they want to give out each round. If the bounty pool runs out, the task builder may decided to end the task or refill the bounty pool.

When you complete a task successfully, you will be added to the distribution list for that round and receive rewards for the work your computer did. This varies from task to task and is decided by the task builder.

:::note
While most tasks give out rewards, it is not required to do so. Tasks that give no rewards will usually inform you in the task description.
:::

## Staking

When you start a task for the first time, you will be asked to stake a certain amount of KOII. This amount is decided by the task builder and will be locked as long as you are running the task. If you stop the task, your stake will be held for three rounds while all your remaining work is checked. Once these rounds have completed, you can unstake and reclaim your KOII.

## Slashing

When nodes don't perform tasks correctly, they can be penalized for their bad behaviour by losing part of their stake, a process called `slashing`. This is designed to deter bad actors on the network and you won't need to worry about it if you're not acting maliciously.
