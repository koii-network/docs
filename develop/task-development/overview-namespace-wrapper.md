---
title: Overview Namespace Wrapper
description: Namespacing is the act of wrapping a set of entities, variables, functions, and objects under a single umbrella term.
image: img/thumbnail.png
sidebar_label: Overview Namespace Wrapper
---

import Tooltip from "@site/src/components/tooltip";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# The Namespace Object

The Koii Namespace Wrapper is a core utility package that bridges Koii tasks and the Koii Network infrastructure. It simplifies operations by providing a unified API for essential functions like task state management, blockchain interactions, file system operations, and network communications.

## What is the Namespace Wrapper?

The Namespace Wrapper is your toolkit for building Koii tasks. It provides everything you need to:

- Store and manage task data
- Interact with the blockchain
- Handle files and directories
- Communicate with other nodes
- Manage task rounds and submissions
- Handle security and authentication

## How Does It Work?

The Namespace Wrapper is automatically injected into your Koii task by the task node. This means you don't need to set up connections or manage infrastructure - it's all handled for you.

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    // Import the namespace wrapper
    import { namespaceWrapper } from "@_koii/namespace-wrapper";

    // Access all its features
    async function myTask() {
      // Store some data
      await namespaceWrapper.storeSet("status", "running");

      // Get task state
      const state = await namespaceWrapper.getTaskState({
        is_submission_required: true,
      });

      // Work with files
      await namespaceWrapper.fs("writeFile", "data.txt", "Hello Koii!");
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    // Import the namespace wrapper
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");

    // Access all its features
    async function myTask() {
      // Store some data
      await namespaceWrapper.storeSet("status", "running");

      // Get task state
      const state = await namespaceWrapper.getTaskState({
        is_submission_required: true,
      });

      // Work with files
      await namespaceWrapper.fs("writeFile", "data.txt", "Hello Koii!");
    }
    ```

  </TabItem>
</Tabs>

## Know More

For a detailed guide and API documentation, visit the **[Namespace Wrapper API](/develop/write-a-koii-task/namespace-wrapper/the-namespace-object#core-features)**. 🚀
