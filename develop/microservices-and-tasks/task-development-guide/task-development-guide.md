---
title: Task Development Guide
description: More details on task deployments coming soon!
image: img/Task_Design_Guide.png
sidebar_label: Task Development Guide
---

import Description from "@site/src/components/description";

# Task Development Guide

![banner](../img/Task_Design_Guide.png)

<Description
  text="More details on task deployments coming soon!"
/>

## **Easy-Peasy, JavaScript**

Our mission is to improve access to decentralized technology, which is why Koii Tasks are written and configured entirely in JavaScript (NodeJS 16, to be exact) and support the majority of popular [NPM Modules](https://npmjs.org). It can help to think of Task Executables as [Express.js](https://expressjs.com/) nodes for hire, each of which stake tokens and reputation to participate. Combined with[ Koii-X](../../build-dapps-with-koii/welcome-to-koii-x/), that means you can deploy an entire stack, decentralized, with just JavaScript, while taking advantage of all the existing Node.js modules.&#x20;

![Task Development Guide](./img/Frame%201%20(1).svg)

## **Developing Tasks**

When creating a new task, there are three main functions that define the task's logic, how results should be verified, and how rewards will be distributed. These are the functions:

1. **The Task Function** <br />
   This function contains the core logic of the Koii task and submits the proof of the work done by participating nodes to K2.
2. **The Audit Function** <br />
   This function verifies the validity of the submissions made by nodes. If a node's submission is invalid, an Audit is initiated, and other participating nodes vote for or against the Audit. If they cast a negative vote, the malicious node's stake is slashed and they are not eligible to receive rewards for completing the task.&#x20;

   Any significant aspects of the task, regardless of whether they are directly associated with bounties or not, should be subject to audits.

   Please see the [audit section ](../what-are-tasks/what-are-audits)for details.

3. **The Distribution Function** <br />
   This function generates a distribution list and submits it on-chain. A distribution list is a JSON object containing a key-value pair, where the key is the public key of the node that made the submission and the value is the number of KOII tokens to be rewarded to the node.
