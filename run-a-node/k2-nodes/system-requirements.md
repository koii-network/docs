---
title: System Requirements
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: System Requirements
---


import Description from "@site/src/components/description";

# System Requirements

<Description
  text="This section gives an overview on the minimum requirement to run a K2 Node"
/>

To run a K2 node, you need some KOII tokens and also possess the minimum memory (128 GB or 258 GB), computational (12 or 16 cores), and storage requirements.

There is no strict minimum amount of KOII tokens required to run the K2 node.

### Minimum Hardware Requirements

Here are the minimum hardware requirements for running a K2 node in terms of memory, compute, storage, and your operating system:

**1. Memory**

- 128GB, or more for consensus validator nodes
- 258GB, or more for RPC nodes

**2. Compute**

- 12 cores / 24 threads, or more @ minimum of 2.8GHz for consensus validator nodes
- 16 cores / 32 threads, or more for RPC nodes

**3. Storage**

For consensus validators:

- PCIe Gen3 x4 NVME SSD, or better
- Accounts: 500GB, or larger. High TBW (Total Bytes Written)
- Ledger: 1TB or larger. High TBW suggested

For RPC nodes:

- A larger ledger disk if longer transaction history is required, accounts and ledger should not be stored on the same disk
- GPUs are not strictly necessary
- Network: 1 GBPS up and downlink speed, must be unshaped and unmetered

**4. Operating System**

Currently we are only supporting Ubuntu 20.04 for our validators. We do provide binaries for other operating systems however the operation of these binaries is not guaranteed.

Once a properly sized Ubuntu 20.04 system is available we can begin to configure the system for operation of a validator node.



