---
title: "Become a Web3 Developer in 5 Minutes"
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Description from "@site/src/components/description";

Becoming a Web3 Developer is no longer needlessly complicated. With Koii, you can transfer your Javascript abilities and deploy your first blockchain application in 5 minutes.

### Wait, but why?

1.  **Reduce existing hosting costs and increase uptime:**

    Building community-powered apps on Koii can **reduce costs** and **increase reliability.**
    Our market-based, on-demand compute can streamline existing applications and reduce dev-ops headaches. Having a **100% uptime** is now possible with Koii, as whenever one of the nodes goes down, another one will take its place.

2.  **Build revolutionary applications:**

    Our blockchain allows you to create products that would be simply impossible to create with Web2 solutions. As an example, you can create social networks hosted by its users, unstoppable smart web crawlers and next-gen neural networks trained with real data, and much more.

    If you're working on something crazy, and you need a lot of compute, our community loves to get in on the next big thing.

<!-- add line break below -->

We accomplish all these by utilizing ** Koii nodes.**

## ...What is a Node?

Nodes are **people**, not computers. They are volunteers, **incentivized by Koii tokens** that run your application on their own machines.

You can interact with them in your code, by using the [Koii SDK](/develop/koii-sdk/overview/).

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

You can use the already existing pool of task runners, or recruit your own band of volunteers to help hosting your application.

## ...What is a Task?

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

You can use the [Koii SDK](/develop/koii-sdk/overview/) to create and manage tasks.

<!-- line break -->

## Ways to build on KOII

In the next lesson, we'll cover how to build a simple REST API that runs on KOII Network.

Alternatively, you can build tasks in any language that compiles to WebAssembly, as it can be injected into the existing JavaScript container.

[ORCA](/orca) (coming soon) is designed to allow the easy installation of any existing apps within a clean and sandboxed docker container.

If you're looking for a particular solution, you might want to try one of the templates below:

1. Database Sharing - [Linktree Task Template](/)
2. Data Gathering and AI Pre-Processing - [Data Gathering Task Template](/)
3. Private Data - [Contact Us Form Template](/)

If you've made it this far, you might as well try Koii Desktop Node yourself! Join our globally distributed community. We are ready to help on our [Discord](https://discord.gg/koii)

Good luck revolutionizing the world!
