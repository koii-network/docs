---
title: Customizing the Namespace
description: In some cases, it may be necessary to customize the namespace object to add default flows, such as app middleware.
image: img/thumbnail.png
sidebar_label: Customizing the Namespace
---


# Customizing the Namespace

In some cases, it may be necessary to customize the namespace object to add default flows, such as app middleware. If this is the case, these new features can be implemented by adding a new file, called `namespaceWrapper.js` to the root folder of your task.

Using the K2-task template to create a new task, this `namespaceWrapper.js` file is already located in the root of the folder.&#x20;

```javascript
import { Connection } from "@_koi/web3.js";

class NamespaceWrapper {
  // Custom functions and variables
}

// Initialize Namespace Object
const namespaceWrapper = new NamespaceWrapper();

// Create a connection to the JSON RPC endpoint
namespaceWrapper.getRpcUrl().then((rpcUrl) => {
  connection = new Connection(rpcUrl, "confirmed");
});

// Export Namespace Object
module.exports = {
  namespaceWrapper,
};
```
