---
title: What is an RPC Node?
description: Learn about RPC nodes on the Koii network and the important role they play.
image: img/thumbnail.png
sidebar_label: RPC Nodes
---

RPC nodes are a vital part of Koii, because they connect your desktop node to the Koii blockchain. They're used for getting your account data and running tasks.

## Your account data

Your KOII tokens are stored permanently on the Koii blockchain, not on the desktop node. In order to display your account balance, your node must request the information from the blockchain. Your node sends a request to the RPC node, which then gets your balance from the blockchain and sends it back to your node to be displayed. When RPCs are experiencing a high load, they may not be able to get your balance information, but your tokens are always secure on the blockchain.

## Running tasks

Koii tasks are work that your computer can do to earn rewards. It involves several steps:

1. You complete the task work
2. You submit your work, and you receive submissions from other users
3. Your submitted work is checked to confirm it's accurate, and you check the submissions that you received
4. When all work for the round is approved, any user with an approved submission will be added to the distribution list
5. Rewards are distributed based on the task distribution rules. This varies from task to task

The task work and submission checking is done on your node, but at several points in the process your node needs to communicate with the blockchain. At these points, your desktop node will communicate with the RPC nodes to facilitate the next step of the process. If the RPC nodes are overloaded, you may not be able to complete tasks, but you will not lose any rewards for work already completed.
