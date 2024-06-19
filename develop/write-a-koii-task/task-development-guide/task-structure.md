---
title: Task Structure
description: More details on task deployments coming soon!
image: img/Task_Design_Guide.png
sidebar_label: Task Structure
---

import Description from "@site/src/components/description";

# Task Structure

![banner](../img/Task%20Development%20Guide.svg)

## **Easy-Peasy, JavaScript**

Our mission is to improve access to decentralized technology, which is why Koii tasks are written and configured entirely in JavaScript (NodeJS 16, to be exact) and support the majority of popular [NPM Modules](https://npmjs.org).

It can help to think of task executables as [Express.js](https://expressjs.com/) nodes for hire, each of which stake tokens and reputation to participate. Combined with[ Koii App Library](/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk), that means you can deploy an entire stack, decentralized, with just JavaScript, while taking advantage of all the existing Node.js modules.

![Task Development Guide](./img/Koii%20Tasks.svg)

## **Developing Tasks**

When creating a new task, there are three main functions that define the task's logic, how results should be verified, and how rewards will be distributed. These are the functions:

1. **The Task Function** <br />
   This function contains the core logic of the Koii task and submits the proof of the work done by participating nodes to K2.

   ![Execute Tasks](./img/Execute%20Task.svg)

2. **The Audit Function** <br />
   This function verifies the validity of the submissions made by nodes. If a node's submission is invalid, an audit is initiated, and other participating nodes vote for or against the audit. If they cast a negative vote, the malicious node's stake is slashed and they are not eligible to receive rewards for completing the task.

   ![Audit Tasks](./img/Audit%20Submissions.svg)

   Any significant aspects of the task, regardless of whether they are directly associated with bounties or not, should be subject to audits.

   Please see the [audit section ](/concepts/what-are-tasks/designing-tasks/securing-task)for details.

3. **The Distribution Function** <br />
   This function generates a distribution list and submits it on-chain. A distribution list is a JSON object containing a key-value pair, where the key is the public key of the node that made the submission and the value is the number of KOII tokens to be rewarded to the node.

   ![Distribute Rewards](./img/Distribute%20Rewards.svg)


:::tip
Confused on how's the runtime flow looks like? Check out the [Runtime Flow](/concepts/what-are-tasks/what-are-tasks/gradual-consensus) to understand the task execution flow.
:::

Ready to get started? Let's dive into the details of each of these functions. Start [here](/develop/write-a-koii-task/task-development-guide/task-structure/).
