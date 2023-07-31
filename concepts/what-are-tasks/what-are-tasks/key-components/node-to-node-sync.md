---
title: Node to Node Sync
description: When a task is created, there are two key components that must be uploaded to the Koii Network to initiate the task.
image: img/thumbnail.png
sidebar_label: Node to Node Sync
---

In a distributed system, achieving synchronization and consistency among nodes is crucial to ensure that each node has the most up-to-date data. This is particularly important when new data is updated on one node, as discrepancies can arise if other nodes are not promptly informed.

To address this challenge, a node-to-node sync mechanism is implemented. This mechanism typically involves a data sharing interface that periodically checks for new data and facilitates its dissemination across all nodes in the network.

This concept is implemented in our [Linktree tutorial](/tutorials/linktree/intro).
