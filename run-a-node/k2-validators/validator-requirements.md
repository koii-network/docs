---
title: Validator Hardware Requirements
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Validator Hardware Requirements
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

## Minimum KOII Requirements

There is no minimum amount of KOII required to stake and participate in the voting process.

To participate in the voting process you must configure your system, start a validator, and configure your voting and stake accounts. This guide will show you how to do this.

## Minimum hardware requirements

Here are the minimum hardware requirements for running a K2 validator or RPC node:

### For consensus validators

- **Memory:** 256 GB of RAM
- **Compute:** 12 cores / 24 threads @ minimum of 2.8GHz
- **Storage:**
  - PCIe Gen3 x4 NVME SSD
  - Accounts: 500GB. High TBW (Total Bytes Written)
  - Ledger: 2TB. High TBW suggested
- **Operating System:** Ubuntu 22.04 LTS

:::warning
Accounts and the ledger *can* be stored on the same disk, however due to high IOPS, this is not recommended
:::

### For RPC nodes

- **Memory:** 512 GB of RAM
- **Compute:** 16 cores / 32 threads
- **Storage:**
  - PCIe Gen3 x4 NVME SSD
  - Accounts: 500GB. High TBW (Total Bytes Written)
  - Ledger: 2TB. High TBW suggested
  - A larger ledger disk if longer transaction history is required
  - Accounts and ledger should not be stored on the same disk
  - GPUs are not strictly necessary
- **Network:** 1 Gbps uplink and downlink speed, must be unshaped and unmetered
- **Operating System:** Ubuntu 22.04 LTS

Once a properly sized Ubuntu 22.04 system is available we can begin to configure the system for operation of a validator node.
