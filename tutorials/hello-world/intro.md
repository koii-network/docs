---
title: '"Hello, World!" Quickstart Guide'
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Description from "@site/src/components/description";

<Description
text="Leveraging consumer hardware offers a cost-effective solution for reducing expenses, and we will provide a comprehensive demonstration on how to achieve this securely. Introducing 'Hello World,' a quickstart guide designed to equip you with essential knowledge in developing, testing, and deploying tasks. This guide will serve as a foundation for tackling more intricate assignments with confidence."
/>

If you want to know more about how koii helps in leveraging consumer hardware, [click here](/concepts/gradual-consensus/)

## The trick to building scalable community-powered apps

If you want to create scalable community-powered apps, the [Task-Template](https://github.com/koii-network/task-template) (here in JavaScript) can be a helpful starting point. It demonstrates a distributed incentive mechanism in a straightforward way.

When incorporating community devices into your web stack, you'll have to compensate them, ensure their proper functioning, and equip them with a shared set of tools for managing their runtime and synchronizing their services.

This is where Koii comes in. It standardizes the interface and streamlines the design process.

To learn more about the task template and its methods that can be beneficial for your personalized tasks, you can visit the [task template](/develop/koii-task-101/) page.

<!-- ## Your first 'Task'

Requests for compute from the network are packaged into a Task, which must follow a particular format in order to run on the existing nodes. The table below shows the key functions of a task, which can be modified almost infinitely to accommodate a wide range of applications.

To keep things organized, the task runtime is broken up into rounds based on the network timestamp. Each round, all participating nodes prepare and broadcast a 'submission', which includes proof of their participation.

The [Gradual Consensus](/develop/koii-task-101/what-are-tasks/) standard defines a process of gathering submissions, verifying their validity, and distributing rewards appropriately among the participating nodes. Distributions of rewards must also follow a verification flow, and can be rejected by participants if they are found to be incorrect. -->

## Get a Template

Standards play a vital role in establishing robust security measures and preventing fraud. To ensure a strong foundation, we recommend starting with a template. We offer a range of readily deployable tasks that you can customize according to your specific requirements:

- "Hello World" serves as an excellent example of the fundamental aspects. You can access it at (https://github.com/koii-network/task-template)

- "Linktree" demonstrates how to effectively manage and replicate a compact distributed database. You can explore it further at (https://github.com/koii-network/linktree-app).

- "Data Gatherers," such as the Twitter Crawler can be used to harvest web data using community nodes. You can find the details at (https://github.com/GET-Store-CAT/twitter-crawler).

To kickstart your journey, let's begin with our quickstart guide by cloning the "hello-world" repository.

```bash
 git clone https://github.com/koii-network/task-template.git hello-world
 cd hello-world
```

<!-- ## How do tasks stay secure?

There are two ways to build applications within the Koii stack:

    1. Import existing code and add submission generation and verification

    2. Build fresh, and integrate submission generation and verification into the app directly.

In either case, the logic for connecting a single runtime to the larger network follows the same structure. First generating proof data, before submitting it to the network and then validating the submissions of others.

| Method              | Description                                                                                                                                                                                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `task()`            | This is where you can trigger the core runtime of your app, configure sub-modules, and start the services that will prepare submission data. For already existing apps, this can usually be left empty, while relying on the existing app to generate and populate a database of proofs. |
| `fetchSubmission()` | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored, and prepares a compact submission object for SubmitTask().                            |
| `submitTask()`      | This method calls a `namespace` method and submits the task's results/work to K2.                                                                                                                                                                                                        |
| `validateNode()`    | This method contains logic to verify a node's submission value.                                                                                                                                                                                                                          |

## Managing Distributions

Each round, one node is randomly selected to tally the submissions and submit a distribution event. This is a considerably smaller task than the actual runtime, submission, and audit mechanisms, and is mostly just a matter of summing on-chain submissions and accounting rewards proportional to contribution, or penalties where a submission failed verification by other nodes.

| Method                       | Description                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `generateDistributionList()` | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample logic that rewards 1 KOII to all the nodes with valid submissions for that round. |
| `submitDistributionList()`   | Makes a call to a `namespace` method of the task-node to upload the distribution list to K2                                                                                                                                                                              |
| `validateDistribution()`     | The logic to validate the distribution list goes here and the method will receive the distribution list submitted from the task-state.                                                                                                                                   |
| `auditDistribution()`        | Makes a call to the `namespace` of task-node to raise an audit against the distribution list if the validation fails.                                                                                                                                                    |

In the next section, we'll dive into the [Hello World](https://github.com/koii-network/task-template) task and explore how the task nodes find consensus and keep the task secure. -->
