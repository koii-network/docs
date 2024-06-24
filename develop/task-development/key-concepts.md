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

To understand the details of how a task runs, please see [runtime flow](https://docs.koii.network/concepts/what-are-tasks/what-are-tasks/gradual-consensus).

## Where are my Tasks Stored and Run?

For more information on the storage and running of tasks, pleas see [runtime environment](https://docs.koii.network/concepts/what-are-tasks/what-are-tasks/runtime-environment).

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

## Ready to Get Started?

Learn how to write and deploy your own task with our [EZSandbox](https://github.com/koii-network/ezsandbox) guide to task development.
