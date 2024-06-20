---
title: "Key Concepts"
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Key Concepts
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";


Koii Tasks are written mostly in JavaScript, but once you understand the basics, you can use any language that compiles to WebAssembly, or deploy tasks using the ORCA container manager.


![banner](/img/develop/write-task/building-on-koii.svg)

## What is a Node?

Nodes are people using their computers to create a worldwide network of servers. You can pay them with KOII in order to incentivize them to run your application on their own machines.

In order to host your application, you can use the already existing pool of task runners, or recruit people who would volunteer to help host your application You can communicate with them, by using the <Tooltip text="Koii SDK"/>.

![banner](/img/develop/write-task/nodes-and-tasks.svg)

## What is a Task?

![banner](/img/develop/write-task/what-are-tasks.svg)
A task is a piece of code that you want to run on someone else's computer.

To prepare your project as a task, we'll build two main components, a task program and a metadata file.

In pseudocode, a task is a data object like this:

```js
Task : {
    program : String, // A unique locator ID for your task's executable file (i.e. an IPFS CID)
    meta : {
        name : String, // The name of your task - this will be shown to node operators
        description : String, // The description of your task - this will be shown to node operators
        bounty : int, // The amount of KOII that you are willing to pay to run your task
        stake_min : int // The minimum amount of KOII that a node must stake to run your task
    }
}
```

## How do tasks run?

In the next steps of this tutorial, you'll learn how to create a task and run it on the Koii network. But first, let's take a look at how tasks run on Koii.

When your task runs on Koii nodes, it will have access to three types of data:

- Static metadata ([more](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/task-state)): This is the information submitted when the task is created.
- Dynamic state data ([more](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/task-state)): This is the live data maintained by the global consensus on <Tooltip text="K2"/>.
- Environment variables ([more](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/keys-and-secrets)): Dynamic inputs passed from the user, which can include login info, API keys, and other sensitive data.

```js
Node : {
    meta : {
        id : String, // The ID of your task, running on someone else's computer
        task_name : String, // The name of your task
        task_description : String, // The description of your task
        task_audit_program: String, // The IPFS CID of the task code
        stake_pot_account : String, // The address which will hold bounty rewards and collateral
        stake_min : Number, // The minimum amount of KOII that a node must stake to run your task
    },
    state : {
        // The current confirmed consensus on your task's data
        task_manager : String, // The address of the task's owner,
        is_whitelisted : Boolean, // Whether or not this task is whitelisted to run on nodes
        is_active : Boolean, // Whether or not this task is currently running on nodes
        round : int, // The current round of the task
        bounty : Number, // the current amount of rewards in the task's bounty pool
        nodes : [ Address : String ], // The current list of staked nodes participating in this task
    },
    environment : {
        __any_name__ : String // Any environment variables that you want node operators to pass to your task
    }
}
```
