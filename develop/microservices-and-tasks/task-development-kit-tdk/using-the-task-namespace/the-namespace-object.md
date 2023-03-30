---
title: The Namespace Object
description: Namespacing is the act of wrapping a set of entities, variables, functions, and objects under a single umbrella term.
image: img/thumbnail.png
sidebar_label: The Namespace Object
---

# The Namespace Object

Namespacing is the act of wrapping a set of entities, variables, functions, and objects under a single umbrella term. The Koii Namespace object `namespace` is a global wrapper for all APIs needed in Koii tasks.&#x20;

This JavaScript object is injected into a Koii task by the Task Node running the task, and the Koii task has access to all wrapped utilities. Below is an example of accessing the [Express](https://expressjs.com/) utility from the `namespace` object:

```javascript
if (namespace.app) {
  // Express app for configuration
  // Write your Express Endpoints here.
  //For Example
  namespace.express("post", "/register", async (req, res) => {});
}
```

## Why is The Namespace Object Important&#x20;

The Namespace object is important for a number of reasons, some of which are:

- It **protects** and **isolates the code** from other applications.
- It prevents **memory leakage**.
- It ensures code is **organized,** **easy to read, and refactor** according to necessary requirements.
- It is **easy to recognize** the **variables and functions** from where they are defined.

## Custom Namespace Utilities

The Namespace object can be expanded by including unique utilities when a Koii task is created. More information on this is discussed in this [section](customizing-the-namespace).
