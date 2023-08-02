---
title: "Getting Started"
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

### Build on Koii:

1.  **Reduce existing hosting costs and increase uptime**

    Building community-powered apps on Koii can [reduce costs](/concepts/distributed-cloud/reduced-computing-costs) and [increase reliability](/concepts/distributed-cloud/better-data).
    Our market-based, on-demand compute can streamline existing applications and reduce dev-ops headaches. Having a **100% uptime** is now possible with Koii, as whenever one of the nodes goes down, another one will take its place.

2.  **Develop revolutionary applications**

    Our community cloud allows you to create products that would be simply impossible to create with Web2 solutions. As an example, you can create a social network hosted by its users, unstoppable web crawlers and next-generation neural networks trained with hard-to-obtain data, and much more.

<!-- add line break below -->

We accomplish all these by utilizing <Tooltip text="Koii Nodes"/>.

![banner](../img/nodesandtasks.svg)

## What is a Node?

Nodes are people using their computers to create a world-wide network of servers. You can pay them with KOII in order to incentivize them to run your application on their own machines.

In order to host your application, you can use the already existing pool of task runners, or recruit people that would volunteer to help hosting your application You can communicate with them, by using the <Tooltip text="Koii SDK"/>.

## What is a Task?

A task is a piece of code that you want to run on someone else's computer.

To prepare your project as a task, we'll build two main components, a task program and a meta data file. 

In pseudocode, a task is a data object like this:

```js
Task : {
    program : String, // The IPFS CID of the task code that you want to run on this computer
    meta : {
        name : String, // The name of your task - this will be shown to node operators
        description : String, // The description of your task - this will be shown to node operators
        bounty : int, // The amount of KOII that you are willing to pay to run your task
        stake_min : int // The minimum amount of KOII that a node must stake to run your task
    }
}
```

## How do tasks run?
In the next steps of this tutorial, you'll learn how to create a task and run it on the Koii Network. But first, let's take a look at how tasks run on the Koii Network.

When your task runs on Koii nodes, it will have access to three types of data:
- Static metadata: This is the information submitted when the task is created

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
    }
}
```

Again, you can use the <Tooltip text="Koii SDK"/> to create and manage tasks.

<!-- line break -->

## How to build on KOII?

In the subsequent pages, we will provide a step-by-step guide on how to build a simple task with an exposed **REST API** that runs on the KOII Network.

This task involves creating an application that permanently stores the string _"Hello World!"_ We will develop a GET API within the context of this task, which will enable us to retrieve the stored value. By following the instructions and guidelines, you will learn how to efficiently develop and host this basic task using the KOII Network.

:::info
If you are interested in gaining an in-depth understanding of the task development process, we recommend using our [Task development Guide](/develop/write-a-koii-task/task-development-guide/). This guide provides comprehensive and detailed information on the entire process of developing tasks for the Koii platform. By following the guide, you can explore various aspects, best practices, and guidelines that will assist you in creating robust and effective Koii tasks.
:::
