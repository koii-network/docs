---
title: Setup (Optional)
description: The `setup` function is run once before all other functions to set up anything needed for other functions to work.
image: img/thumbnail.png
sidebar_label: Setup (Optional)
---

# Setup (Optional)

:::note
Usually, there's no need to modify this function, except if you want to add an extra `console.log` or change a function's name.
:::

The `setup` function is in `index.js` and run once before all other functions to set up anything needed for other functions to work. It calls a built-in namespace function called `defaultTaskSetup`.

The `defaultTaskSetup` function does the following:

- Establish connection to defined k2 cluster
- Sets submitter account

The `setup` function:

```js
async function setup() {
  console.log("setup function called");
  // Run default setup
  await namespaceWrapper.defaultTaskSetup(); // call defaultTaskSetup
  process.on("message", (m) => {
    console.log("CHILD got message:", m);
    if (m.functionCall == "submitPayload") {
      console.log("submitPayload called");
      coreLogic.submitTask(m.roundNumber);
    } else if (m.functionCall == "auditPayload") {
      console.log("auditPayload called");
      coreLogic.auditTask(m.roundNumber);
    } else if (m.functionCall == "executeTask") {
      console.log("executeTask called");
      coreLogic.task();
    } else if (m.functionCall == "generateAndSubmitDistributionList") {
      console.log("generateAndSubmitDistributionList called");
      coreLogic.generateAndSubmitDistributionList(m.roundNumber);
    } else if (m.functionCall == "distributionListAudit") {
      console.log("distributionListAudit called");
      coreLogic.auditDistribution(m.roundNumber);
    }
  });
}
```
