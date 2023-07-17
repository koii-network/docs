---
title: Task Lifecycle
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Task Lifecycle
---

# ** Task Lifecycle**

<!-- ![banner](../img/Stacking%20Rounds.svg) -->

### 1. **Submission Phase**

During this phase, the task node(s) submit data to K2 to request rewards for work they've done.

- The first submission phase occurs during the **review period,** each task node submits proofs of work done during the **work period** to K2, and these _proofs_ are in turn audited by other participating nodes still in the review period.&#x20;
- The second submission phase occurs during the **distribution period,** where the selected task node submits the distribution list to K2.

### 2. **Audit** **Phase**

During this phase, the participating nodes verify data submitted to K2.

- The first audit phase occurs during the **review period** after the submission phase. Each participating node audits _proofs_ submitted by other nodes, if there is an invalid submission, an audit is triggered on K2, and the stake can be confiscated from the offending node. While the nodes are verifying data submitted on-chain, they're also checking if an audit has been raised against a node, and they can either vote in favour of or against the audit.&#x20;
- The second audit phase occurs during the **distribution period** after the selected node submits the distribution list on-chain. Each participating node audits the distribution list submitted by the selected node. After auditing, if the distribution list is invalid, a newly selected node generates a distribution new list and submits it on-chain.

### 3. **Distribution Phase**

This is the final step once the distribution list has been validated, rewards are distributed among participating nodes.

At first, it can be difficult to imagine this process, but a helpful analogy would be a batch production line, where one group produces a product all day while the other evaluates its quality and may reject entire batches or penalize individual workers for sub-par performance.

### **Applications**

Gradual consensus works well on tasks that have a deterministic outcome but requires some significant computation that cannot be done on-chain on networks like Ethereum or Solana due to computation costs or network call limitations. Some particular applications include web scraping, indexing on-chain content, compiling or hosting web apps or sites, or even managing databases and caches of on-chain content.
