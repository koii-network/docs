---
title: The Namespace Object
description: Namespacing is the act of wrapping a set of entities, variables, functions, and objects under a single umbrella term.
image: img/thumbnail.png
sidebar_label: The Namespace Object
---

import Tooltip from "@site/src/components/tooltip";

# The Namespace Object

Namespacing is a programming concept that involves encapsulating a group of entities, variables, functions, or objects under a single umbrella term. In the context of Koii, the Koii namespace object `namespace` serves as a global wrapper for all APIs required in Koii tasks.

This JavaScript object is injected into a Koii task by the task node running the task, and the Koii task has access to all wrapped utilities.

Here's an example demonstrating how you can store a key-value pair in the local NeDB database using the `namespace` object:

```js
const { namespaceWrapper } = require("../_koiiNode/koiiNode");

async function task() {
  try {
    const value = "Hello, World!";

    if (value) {
      // store value on NeDB
      await namespaceWrapper.storeSet("key", value);
    }
    return value;
  } catch (err) {
    console.log("ERROR IN EXECUTING TASK", err);
  }
}
```

This line of code utilizes the `storeSet()` method from the namespace object to store the key-value pair "key" and "value" in the local NeDB database. The task can then retrieve and use this stored data as needed. The namespace object provides a convenient and unified way to interact with various utilities within a Koii task.

## Why is The Namespace Object Important?&#x20;

The Namespace object is important for several reasons, some of which are:

- It **protects** and **isolates the code** from other applications.
- It prevents **memory leakage**.
- It ensures code is **organized,** **easy to read, and refactored** according to requirements.
- It is **easy to recognize** the **variables and functions** from where they are defined.

## Custom Namespace Utilities

The Namespace object can be expanded by including unique utilities when a Koii task is created. More information on this is discussed in this [section](./customizing-the-namespace).
