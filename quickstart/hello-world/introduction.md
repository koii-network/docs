---
title: "Getting Started"
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

### Building on Koii helps:

1.  **Reduce existing hosting costs and increase uptime**

    Building community-powered apps on Koii can [reduce costs](/concepts/distributed-cloud/reduced-computing-costs) and [increase reliability](/concepts/distributed-cloud/better-data).
    Our market-based, on-demand compute can streamline existing applications and reduce dev-ops headaches. Having a **100% uptime** is now possible with Koii, as whenever one of the nodes goes down, another one will take its place.

2.  **Build revolutionary applications**

    Our community cloud allows you to create products that would be simply impossible to create with <Tooltip text="Web2"/> solutions. As an example, you can create a social network hosted by its users, unstoppable web crawlers and next-generation neural networks trained with hard-to-obtain data, and much more.

<!-- add line break below -->

We accomplish all these by utilizing [Koii Nodes](/run-a-node/introduction/types-of-nodes).

![banner](../img/nodesandtasks.svg)

## What is a Node?

Nodes are people using their computers to create a world-wide network of servers. You can pay them with <Tooltip text="KOII"/> in order to incentivize them to run your application on their own machines.

In order to host your application, you can use the already existing pool of task runners, or recruit people that would volunteer to help hosting your application You can communicate with them, by using the <Tooltip text="Koii SDK"/>.

## What is a Task?

A task is a piece of code that you want to run on someone else's computer.

To prepare your project as a task, you'll need an object that looks like this:

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

You can also customize how it is being described as on a Koii Desktop Node user's interface. Here is an example:

```js
Node : {
    meta : {
        id : String, // The ID of your task, running on someone else's computer
        task_name : String, // The name of your task
        task_description : String, // The description of your task
        task_manager : String, // The address of the task's owner,
        is_whitelisted : Boolean, // Whether or not this task is whitelisted to run on nodes
        is_active : Boolean, // Whether or not this task is currently running on nodes
        task_audit_program: String, // The IPFS CID of the task code
        stake_pot_account : String, // The address which will hold bounty rewards and collateral
    },
    state : {
        // The current confirmed consensus on your task's data
        round : int, // The current round of the task
    }
}
```

Again, you can use the <Tooltip text="Koii SDK"/> to create and manage tasks.

<!-- line break -->

## How to build on KOII?

In the subsequent pages, we will provide a step-by-step guide on how to build a simple task with an exposed **REST API** that runs on the KOII Network.

This task involves creating an application that permanently stores the string _"Hello World!"_ We will develop a GET API within the context of this task, which will enable us to retrieve the stored value. By following the instructions and guidelines, you will learn how to efficiently develop and host this basic task using the KOII Network.
