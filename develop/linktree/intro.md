---
title: "Linktree Introduction"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Introduction
---

import Tooltip from "@site/src/components/tooltip";

import Description from "@site/src/components/description";

<Description text="After mastering the development and deployment of the basic task, we will take a deeper dive into web3 concepts. This will be achieved by implementing these concepts through a practical example of Linktree. Get ready for an enriching learning experience!" />

![banner](/img/develop/linktree/linktree-banner.svg)

:::warning
This project was developed on the legacy testnet. If you have any questions about this project, please don't hesitate to contact us on Discord.
:::

This Koii task is the second task in our series of explaining Koii tasks. The <Tooltip text="Hello World Task"/> took you through the process of turning a simple JavaScript program into a Koii task using the <Tooltip text="K2 Task Template"/>. This tutorial will build on that and teach you how to use databases across many Koii nodes.

### What is Linktree?

A **Linktree** is a customized profile page that contains all your important links.

:::info

You can explore the deployed application [here](https://linktree.koii.network) and the [source code](https://github.com/koii-network/linktree-app).

:::

### Getting started

You can clone the project [here](https://github.com/koii-network/linktree-app), and navigate to the task-template-Linktree folder

```sh
cd task-template-Linktree
```

Navigate to the test folder

```sh
cd test
```

You will find some pre-written tests here. You can go through the tests for all the files explained in this tutorial. Once you have a better understanding of the files discussed in this tutorial, feel free to edit these tests to familiarize yourself better with their implementation. You will need a strong understanding of these concepts for writing your Koii tasks.

:::info

The goal of this tutorial is to familiarize you with intermediate topics that will help you write your own Koii tasks.

:::

## What Will You Learn in This Tutorial?

This tutorial's goal is to familiarize you with more advanced concepts that are applied in the Linktree task, such as database management and API endpoints. Writing your own Koii tasks will be made easier for you if you have a good understanding of these features.

However, when it comes to more complex projects involving database management and the creation of API endpoints for user requests, several questions arise. let's talk about three crucial pieces of logic needed for this project to function properly:

| File          | Description                                                                                                                                                                                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| db_model.js   | A **local database** is required to store and manage data such as Linktree information, proofs, and the authentication list on a [node](/run-a-node/introduction/task-nodes) operator's local device. This is important because it reduces the need for frequent API calls to a remote database. |
| routes.js     | **API endpoints** will be required for the project to handle incoming requests, process data, and return appropriate responses to the client.                                                                                                                                                    |
| db_sharing.js | Since each Koii node has its local database when one node’s data is updated, it must also be updated on other nodes to ensure consistency. The `db_sharing.js` will contain a single function called `share()` that works to keep the network synchronized.                                     |

:::tip

If you encounter any difficulties, feel free to contact us at [Discord](https://discord.com/invite/koii-network).

:::
