---
title: Validator Requirements
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Validator Requirements
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

# Validator Requirements

## Minimum Koii Requirements

There is no minimum amount of KOII required to stake and participate in the voting process.

To participate in the voting process you must configure your system, start a validator, and configure your voting and stake accounts. This guide will show you how to do this.
### Hardware requirements

Here are the minimum hardware requirements for running a K2 Validator in terms of memory, computing, storage, and your operating system:

- Memory
    - 128GB, or more for consensus validator nodes
    - 256GB, or more for RPC nodes
- Compute
    - 12 cores / 24 threads, or more @ minimum of 2.8GHz for consensus validator nodes
    - 16 cores / 32 threads, or more for RPC nodes
- Storage
    
    <aside>
    💡 Accounts and ledger *can* be stored on the same disk, however due to high IOPS, this is not recommended
    
    </aside>
    
    For consensus validators:
    
    - PCIe Gen3 x4 NVME SSD, or better
    - Accounts: 500GB, or larger. High TBW (Total Bytes Written)
    - Ledger: 1TB or larger. High TBW suggested
    
    For RPC nodes:
    
    - A larger ledger disk if longer transaction history is required, accounts and ledger should not be stored on the same disk
    - GPUs are not strictly necessary
    - Network: 1 Gbps uplink and downlink speed, must be unshaped and unmetered
    - Operating System

Currently, we are testing our binaries for Ubuntu 20.04. We do provide binaries for other operating systems however the operation of these binaries is not guaranteed.

Once a properly sized Ubuntu 20.04 system is available we can begin to configure the system for operation of a validator node.