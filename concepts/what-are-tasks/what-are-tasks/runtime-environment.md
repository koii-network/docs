---
title: Runtime Environment
description: Runtime Environment
image: img/thumbnail.png
sidebar_label: Runtime Environment
---

# Runtime Environment

![banner](../img/Runtime%20Environment.svg)

## Where Do Tasks Live?

While tasks run on task nodes, the data behind them is deliberately spread across multiple systems to ensure cost optimization and maximum performance.&#x20;

### Incentives and Proofs (via a Blockchain Layer)

The core of the task architecture is the reward structure, which is contained in the [settlement layer](/concepts/settlement-layer/k2-tick-tock-fast-blocks). The settlement layer is a blockchain, and all nodes must have consensus, and they must have access to all of the information to add new blocks. This means information stored here is more expensive and causes network bloat significantly more than other layers.&#x20;

When a task executes, each task node [submits a proof once per round](/concepts/gradual-consensus/runtime-flow), which usually references an IPFS CID with more information to support the node's work.&#x20;

### Supporting Information (via Decentralized Storage)

Since submissions to the blockchain layer are limited in size, additional supporting information can be bundled into larger files and uploaded to a storage network like IPFS. IPFS uses Content IDs (CIDs), a hash-based key, to represent information uniquely, meaning that once a CID is locked into the blockchain, it cannot be changed.&#x20;

It is the responsibility of node operators to either host each CID themselves, or pay a secondary service to host the data. In many cases, a task creator may specify where the data must be stored, and participation in a task may require access to a specific storage network.&#x20;

This layer can be thought of as a hard drive, with the longevity of the information being dictated by its purpose in the system. For task proofs, it's recommended that the information is preserved for at least three rounds, as this is the time necessary for all audits to be completed by other nodes.&#x20;

### Runtime Data

Finally, some information does not need to be preserved in the long term and can be stored in the runtime on task nodes. This runtime data might include active sessions, wider information such as current rounds and submissions, and third-party data that has been pulled in from integrations with other networks in order to generate proofs or provide network services.&#x20;

This layer can be thought of as RAM, and is only needed to support task operation, and can then be safely discarded.&#x20;

## Where Do Tasks Run?&#x20;

Koii tasks run on **Koii Task Nodes,** which are computers managed by node operators. Node operators will follow the instructions set by task owners and run the Koii task (a JavaScript script) on their devices to get KOII tokens as rewards.&#x20;

Koii provides both a command-line and GUI interface for managing tasks. You may want to jump to the [Run a Task Node](/run-a-node/introduction/task-nodes) section for more information about these tools.
