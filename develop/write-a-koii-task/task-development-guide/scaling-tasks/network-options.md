---
title: Network Options
description: Network Options
image: img/thumbnail.png
sidebar_label: Network Options
---

import Tooltip from "@site/src/components/tooltip";

While developing your first task, you have probably noticed the following variable in the `config-task.yml` file.

```yaml
  "task_executable_network": "IPFS"
```

Let's take a step back, and understand what exactly is a **task executable network**. In this context, it is where your webpacked task will be stored. This is where the Koii users will retrieve the task from.

Our default option IPFS, which stands for **InterPlanetary File System**. It is a peer-to-peer network that allows one to store and share data in a distributed file system.

:::info

Instead of storing the data directly in the blockchain, we store it in IPFS, and then store the hash in the blockchain. This allows us to store data in our blockchain in a very efficient way.

:::

For `task_executable_network`, the following values are accepted:

- **DEVELOPMENT** (Only for testing purposes)
- **IPFS**
- **ARWEAVE**

Arweave is a similar technology to IPFS, but for Koii applications we highly recommend using IPFS due to its ease of use.

As a task developer, the other place you can benefit from a solution like this is while retrieving data from your task runners.
