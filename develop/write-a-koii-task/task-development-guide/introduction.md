---
title: "Quick Start"
description: Informal Introduction
image: img/thumbnail.png
sidebar_label: Introduction
---

The objective of our platform is to break down a task into several steps. The most critical aspect that you need to define is the task function. This refers to the purpose of the task. Here are the key components to consider:

## Easy Explanation
**Task Function**: Define the primary objective of your task.

**Distribution**: Decide how to allocate the task or its outcomes.

**Audit**: Plan how to audit the results submitted by users.

## Example Code flow
For instance, if the task involves users collecting relevant information from the internet and uploading it to IPFS, the steps would be as follows:

**Collect Information and Upload to IPFS**: Users gather data and upload it to the IPFS network.

**Audit**: Verify whether the uploaded information on IPFS includes the necessary keywords you specified.

**Distribution**: You could choose to distribute a certain amount of KOII tokens to each user, or divide a predetermined sum of KOII equally among all participants. The distribution method is up to you to decide!

### Deployment
Once you have outlined your task steps and planned the audit and distribution strategies, you can package your files using npm run webpack or Yarn webpack. Finally, deploy your task to our K2 platform using create-task-cli. This generates a task ID, allowing any user with this ID to execute the task. 