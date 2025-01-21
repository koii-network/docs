---
title: Task Development Concepts
description: Learn more about how Koii tasks work
image: img/thumbnail.png
sidebar_label: Key Concepts
---

import Tooltip from "@site/src/components/tooltip";

## What is a Node?

![nodes and tasks](/img/develop/write-task/nodes-and-tasks.svg)

Nodes are a worldwide network of servers made up of people running tasks on their computers. You can pay them with KOII to run your tasks on their local machines.

## What is a Task?

![what are tasks](/img/develop/write-task/what-are-tasks.svg)

A task is a piece of code that you want to run on someone else's computer. You design the task to be run on many different computers at once, receive back a response from the task runner and verify it, then distribute rewards to everyone who performed the task successfully, all within the task itself.

## How Does a Task Run?

To understand the details of how a task runs, please see [runtime flow](/concepts/what-are-tasks/what-are-tasks/gradual-consensus).

## Where are my Tasks Stored and Run?

For more information on the storage and running of tasks, pleas see [runtime environment](/concepts/what-are-tasks/what-are-tasks/runtime-environment).

## How is a Task Structured?

The three main elements of a task are to execute the task, audit the results, and distribute rewards.

### Execute task

This is where you instruct nodes on which work they should do.

![Execute Tasks](/img/concepts/gradual-consensus/execute-task.svg)

### Audit results

When a node completes a task, it will submit a result. This result will then be verified by other nodes during the audit process.

![Audit Tasks](/img/concepts/gradual-consensus/audit-submissions.svg)

### Distribute rewards

Once the results have been verified, rewards are given out to anyone who submitted a valid result.

![Distribute Rewards](/img/concepts/gradual-consensus/distribute-rewards.svg)

## What is a Timestamp and Slot?

A **timestamp** is a way of representing time and is not specific to K2. In the context of K2, the **slot** can be used to record the time when data is sent or received, represented as a timestamp.

A **slot** is a unit of measurement used to track the current progress of K2. Each slot is approximately **400ms**, which is the time taken by a leader to process transactions and produce a block. The fast pace of slots ensures high-speed and accurate verification. For the code, refer to [Slot Docs](/develop/write-a-koii-task/namespace-wrapper/network-task-handling#getslot).

### How Timestamps are Used in REST APIs

Timestamps are essential for ensuring accurate auditing in REST API operations:

1. **Request Received**: A user receives a request from the server.
2. **Response Sent**: The user sends back the result with the slot recorded as a timestamp.
3. **Verification**: The server verifies the timestamp, calculates task completion time, and uses it for the next audit process.

### What is a Round?

A **round** represents the complete lifecycle of a Koii task within K2. It consists of:

1. **Submission Phase**
2. **Audit Phase**
3. **Distribution Phase**

For more details, refer to the [Runtime Flow Documentation](/concepts/what-are-tasks/what-are-tasks/gradual-consensus).

For the code, refer to [Round Docs](/develop/write-a-koii-task/namespace-wrapper/network-task-handling#getround).

### What Tasks Need Auditing?

Not all tasks require timestamp-based auditing. However, we recommend using timestamps in the following scenarios:

- **REST API Tasks**: For tasks involving REST APIs, timestamps ensure accurate audits and help monitor API health.
- **Time-Sensitive Tasks**: If your Koii task needs to execute at specific time points, using `getSlot` is a reliable option.

## Ready to Get Started?

Learn how to write and deploy your own task with our [EZSandbox](https://github.com/koii-network/ezsandbox) guide to task development.
