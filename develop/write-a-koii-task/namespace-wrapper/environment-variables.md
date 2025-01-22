---
title: Environment Variables
description: Import and use Environment Variables
image: img/thumbnail.png
sidebar_label: Environment Variables
---

import Tooltip from "@site/src/components/tooltip";

It has various environment variables and constants that are pre-configured by the `@_koii/namespace-wrapper` package. You can directly import and use these variables in your task.

#### Example Code

Below is an example of how to import and use these variables in your project:

```javascript
import {
  TASK_ID,
  MAIN_ACCOUNT_PUBKEY,
  SECRET_KEY,
  K2_NODE_URL,
  SERVICE_URL,
  STAKE,
  TASK_NODE_PORT,
} from "@_koii/namespace-wrapper";

console.log("TASK_ID:", TASK_ID);
console.log("MAIN_ACCOUNT_PUBKEY:", MAIN_ACCOUNT_PUBKEY);
console.log("SECRET_KEY:", SECRET_KEY);
console.log("K2_NODE_URL:", K2_NODE_URL);
console.log("SERVICE_URL:", SERVICE_URL);
console.log("STAKE:", STAKE);
console.log("TASK_NODE_PORT:", TASK_NODE_PORT);
```

#### What Each Variable Represents

| Variable            | Example Value                  | Description                      |
| ------------------- | ------------------------------ | -------------------------------- |
| TASK_ID             | "task_12345..."                | Unique identifier for the task   |
| MAIN_ACCOUNT_PUBKEY | "pubkey123..."                 | Main account public key          |
| K2_NODE_URL         | "https://mainnet.koii.network" | Koii network node URL            |
| SERVICE_URL         | "http://localhost:3001"        | Service endpoint URL             |
| STAKE               | 10                             | Stake amount in KOII             |
| TASK_NODE_PORT      | 3001                           | Port for task node communication |
| SECRET_KEY          | "secret key....."              | Secret Key                       |

#### No Additional Setup Required

Since these environment variables are pre-configured by the `@_koii/namespace-wrapper` package, there is no need for manual configuration. Simply import them as shown above, and they will be ready for use in your tasks.

## Next Steps

To learn more about specific features, check out these guides:

- [REST APIs](./rest-apis.md) - Build HTTP endpoints.
- [Database Operations](./nedb.md) - Learn about data storage.
- [File System](./filesystem-access.md) - Handle files and directories.
- [Blockchain/Transaction Operations](./wallet-signatures.md) - Work with blockchain and transaction operations.
- [Task Status](./task-state.md) - Get task state information with namespace methods.
- [Network/Task Handling](./network-task-handling.md) - Manage network data and tasks.
- [Audit and Distribution](./audit-distribution-operations.md) - Manage network data and tasks.
