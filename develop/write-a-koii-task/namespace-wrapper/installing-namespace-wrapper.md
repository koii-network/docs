---
title: Installing Namespace Wrapper
description: Learn how to install the Namespace Wrapper, the Koii package that enables interaction between tasks and the blockchain.
image: img/thumbnail.png
sidebar_label: Installing Namespace Wrapper
---

import Tooltip from "@site/src/components/tooltip";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Installing Namespace Wrapper

:::note
If you are using the [task template](https://github.com/koii-network/task-template), the Namespace Wrapper is already installed.
:::

## Installation

Install the Namespace Wrapper using your preferred package manager:

```bash
# Using NPM
npm install @_koii/namespace-wrapper

# Using Yarn
yarn add @_koii/namespace-wrapper
```

## Importing the Module

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";
    ```
  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");
    ```
  </TabItem>
</Tabs>

## Initialization

The namespace wrapper detects whether it's running locally or in the node and initializes itself accordingly.

## Calling Namespace Wrapper Methods

Namespace wrapper methods are called by using the namespace wrapper object like so:

```ts
namespaceWrapper.methodName();
```

For more details on available methods and their usage, refer to the [Namespace Wrapper Methods](./methodName.md) page.

## Next Steps

To learn more about specific features, check out these guides:

- [Namespace Wrapper Methods](./methodName.md) - Interact with tasks and the blockchain.
- [Environment Variables](./environment-variables.md) - Import and use Environment Variables.
- [REST APIs](./rest-apis.md) - Build HTTP endpoints.
- [Database Operations](./nedb.md) - Learn about data storage.
- [File System](./filesystem-access.md) - Handle files and directories.
- [Blockchain/Transaction Operations](./wallet-signatures.md) - Work with blockchain and transaction operations.
- [Task Status](./task-state.md) - Get task state information with namespace methods.
- [Network/Task Handling](./network-task-handling.md) - Manage network data and tasks.
- [Audit and Distribution](./audit-distribution-operations.md) - Manage network data and tasks.
