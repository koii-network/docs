---
title:  "Hello, World!" Quickstart Guide
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label:  Getting Started
---

import Description from "@site/src/components/description";

<Description
  text="Write and deploy your first Koii task."
/>

Hello World is a project that demonstrates how to build and deploy a Koii task using the [Task-Template](https://github.com/koii-network/task-template) (written in JavaScript).

# Getting Started

The first step is to clone the [Task-template](https://github.com/koii-network/task-template):

```bash
$ git clone https://github.com/koii-network/task-template.git hello-world
$ cd hello-world
```

:::tip

Make sure you have [node](https://nodejs.org/en/), npm, and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed before going forward.

:::
## What's in the template?

- `index.js` — is the hub of your app, and ties together the other pieces. This will be the entry point when your task runs on task nodes.

- `namespaceWrappers.js` — contains the interfaces to make API calls to the core of the task-node. It contains all the necessary functions required to submit and audit the work, as well as the distribution lists. Check [here](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/) to learn more Namespace functions.

- `coreLogic.js` — is where you'll define your task, audit, and distribution logic, and controls the majority of task functionality. You can of course break out separate features into sub-files and import them into the core logic before web-packing.

## The `coreLogic.js`

There are in total 9 methods in `CoreLogic` which you can modify according to your needs:

| Method      | Description |
| ----------- | ----------- |
| `task()`      | The logic for what your task should do goes here.     |
| `fetchSubmission()`   | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored.        |
| `submitTask()`   | This method calls a `namespace` method and submits the task's results/work to K2.        |
| `generateDistributionList()`   | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample logic that rewards 1 KOII to all the nodes with valid submissions for that round.|
| `submitDistributionList()`   | Makes a call to a `namespace` method of the task-node to upload the distribution list to K2      |
| `validateNode()`   | This method contains logic to verify a node's submission value.    |
| `validateDistribution()`   | The logic to validate the distribution list goes here and the method will receive the distribution list submitted from the task-state.        |
| `auditTask()`   | Makes a call to the `namespace` of task-node to raise an audit against the submission value if the validation fails.        |
| `auditDistribution()`   | Makes a call to the `namespace` of task-node to raise an audit against the distribution list if the validation fails.        |

Now that's out of the way, let's move forward to writing the task.

:::info

If you encounter any difficulties, feel free to contact us at [Koii support](https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg) or chat with us at [Discord](https://discord.com/invite/koii).

:::

