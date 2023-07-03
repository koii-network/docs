---
title:  '"Hello, World!" Quickstart Guide'
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label:  Getting Started
---

import Description from "@site/src/components/description";

<Description
  text="Harnessing the power of consumer hardware can be effective in reducing costs. This is where we'll teach you how to do it securely."
/>

## The trick to building scalable community-powered apps

The [Task-Template](https://github.com/koii-network/task-template) (here in JavaScript) provides a simple example of a distributed incentive mechanism. 

To include community devices in your web stack, you'll need to pay them, verify that they're running properly, and provide them with a common set of tools to manage their runtime and synchronize their services. 

Koii standardizes that interface, and simplifies design.

## Your first 'Task'
Requests for compute from the network are packaged into a Task, which must follow a particular format in order to run on the existing nodes. The table below shows the key functions of a task, which can be modified almost infinitely to accommodate a wide range of applications.

To keep things organized, the task runtime is broken up into rounds based on the network timestamp. Each round, all participating nodes prepare and broadcast a 'submission', which includes proof of their participation. 

The [Gradual Consensus](/develop/koii-task-101/what-are-tasks/) standard defines a process of gathering submissions, verifying their validity, and distributing rewards appropriately among the participating nodes. Distributions of rewards must also follow a verification flow, and can be rejected by participants if they are found to be incorrect. 

## Get a Template
Standards are essential to developing strong mechanisms for security and fraud prevention. 

We recommend starting with a template:

- Hello World is a great example of the basics (https://github.com/koii-network/task-template)

- Linktree shows how to maintain and replicate a small distributed database (https://github.com/koii-network/linktree-app)

- Data Gatherers like the Twitter Crawler can be used to harvest web data with community nodes (https://github.com/GET-Store-CAT/twitter-crawler)

Clone the repo and dive in:
```bash
$ git clone https://github.com/koii-network/task-template.git hello-world
$ cd hello-world
```

## How do tasks stay secure?
There are two ways to build applications within the Koii stack:

    1. Import existing code and add submission generation and verification

    2. Build fresh, and integrate submission generation and verification into the app directly.

In either case, the logic for connecting a single runtime to the larger network follows the same structure. First generating proof data, before submitting it to the network and then validating the submissions of others.

| Method      | Description |
| ----------- | ----------- |
| `task()`      |  This is where you can trigger the core runtime of your app, configure sub-modules, and start the services that will prepare submission data. For already existing apps, this can usually be left empty, while relying on the existing app to generate and populate a database of proofs.  |
| `fetchSubmission()`   | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored, and prepares a compact submission object for SubmitTask().  |
| `submitTask()`   | This method calls a `namespace` method and submits the task's results/work to K2.        |
| `validateNode()`   | This method contains logic to verify a node's submission value.    |

## Managing Distributions
Each round, one node is randomly selected to tally the submissions and submit a distribution event. This is a considerably smaller task than the actual runtime, submission, and audit mechanisms, and is mostly just a matter of summing on-chain submissions and accounting rewards proportional to contribution, or penalties where a submission failed verification by other nodes. 

| Method      | Description |
| ----------- | ----------- |
| `generateDistributionList()`   | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample logic that rewards 1 KOII to all the nodes with valid submissions for that round.|
| `submitDistributionList()`   | Makes a call to a `namespace` method of the task-node to upload the distribution list to K2      |
| `validateDistribution()`   | The logic to validate the distribution list goes here and the method will receive the distribution list submitted from the task-state.        |
| `auditDistribution()`   | Makes a call to the `namespace` of task-node to raise an audit against the distribution list if the validation fails.        |




In the next section, we'll dive into the [Hello World](https://github.com/koii-network/task-template) task and explore how the task nodes find consensus and keep the task secure.
