---
title: Understand the Template
description: What's in the Hello-World template?
image: img/thumbnail.png
sidebar_label: Understand the Template
---

import Tooltip from "@site/src/components/tooltip";

To begin, clone the task template:

```bash
 git clone https://github.com/koii-network/task-template.git hello-world
 cd hello-world
```

Make sure you have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed before moving forward.

## What's in the template?

**Core files**

- `index.js` — is the hub of your app, and ties the other pieces together. This will be the entry point when your task runs on task nodes.

- `_koiiNode` — is a directory that contains `koiiNode.js` which has the interfaces to make API calls to the core of the task-node. It contains all the necessary functions required to submit and audit the work, as well as the distribution lists. Check [here](/develop/write-a-koii-task/task-development-kit-tdk/introduction/) to learn more namespace functions.

**Task Directory**

It houses three key files: `submission.js`, `audit.js` and `distribution.js`. These files are where you define your task, audit, and distribution logic, enabling you to control the core functionality of the task.

This structure allows a modular approach to task development. By **only utilizing these three files**, you can easily modify and test your task logic without having to worry about the other aspects. In order to understand the theory behind, please refer to the <Tooltip text="Runtime Flow"/>.

And finally, in the `index.js` file, all these functions are combined as a task, which is then imported and used in `corelogic.js`. It is advisable to organize separate features into sub-files and import them into the relevant files before web-packing for better code management and maintainability. This modular approach allows for a more organized and efficient development process.

### The `submission.js`

In the `submission.js` file, there are 3 methods that allow you to define the actions your task will perform and what it will submit. Here are the descriptions of these methods, which you can modify as per your specific requirements:

| Method              | Description                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`task()`**        | The logic for what your task should do goes here.                                                                                                                                                  |
| `fetchSubmission()` | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored. |
| `submitTask()`      | This method calls a `namespace` method and submits the task's results/work to K2.                                                                                                                  |
|                     |

### The `audit.js`

In the `audit.js` file, there are a total of 2 methods that deal with verifying the submissions made. You can modify these methods to suit your needs:

| Method           | Description                                                                                                          |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `validateNode()` | This method contains logic to verify a node's submission value.                                                      |
| `auditTask()`    | Makes a call to the `namespace` of task-node to raise an audit against the submission value if the validation fails. |

### The `distribution.js`

In the `distribution.js` file, there are a total of 4 methods that handle the flow of distributing rewards. You have the flexibility to modify any of these methods to meet your specific requirements:

| Method                       | Description                                                                                                                                                                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generateDistributionList()` | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample code that rewards 1 KOII to all the nodes with valid submissions for that round. |
| `submitDistributionList()`   | Makes a call to a `namespace`[^1] method of the task-node to upload the distribution list to K2                                                                                                                                                                         |
| `validateDistribution()`     | The logic to validate the distribution list goes here.                                                                                                                                                                                                                  |
| `auditDistribution()`        | Makes a call to the `namespace`[^1] of task-node to raise an audit against the distribution list if the validation fails.                                                                                                                                               |

:::info

When creating a task using the Task Template, there's usually no need to edit the following methods: `auditTask()`, `auditDistribution()`, and `submitDistributionList()`.

:::

By implementing and modifying these methods, we will create a comprehensive and fully functional task. Let's proceed with writing the logic and submission process for our task.

:::tip Final Notes

If you encounter any difficulties, feel free to contact us on [Discord](https://discord.gg/koii-network).

[^1]: **Namespace**: In programming, a namespace is a container that holds a set of identifiers, such as variable and function names, and allows them to be distinguished from others that might have the same name but are in a different namespace. In this context, it likely refers to a specific set of functions or methods within the task-node that are used for managing the distribution list.
