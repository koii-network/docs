---
title: 'The Community Cloud in 5 minutes'
description: Write and deploy your first Koii task
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Description from "@site/src/components/description";

<!-- We need to fix this -- these descriptions look like plaintext in blue, so no one will read them. If we want to have a callout sentance at the top it needs to stand out, not blend in. -->
<Description
    text="Koii's community are here to help. "
/>

We are a network of people, not computers. 

<!-- TODO - add links to key concepts sections below - be sure to use new tab links, not direct nav  -->
Building community-powered apps can [reduce costs](/) and [increase reliability](/) 


There's two ways we've been seeing people use Koii:

 1. **Reduce existing hosting costs and increase uptime**
    
    Our market-based, on-demand compute can streamline existing applications and reduce dev-ops headaches. 


<!-- add line break below -->



 2. **Build visionary products and services**

    If you're working on something crazy, and you need a lot of compute, our community loves to get in on the next big thing. 


# What are nodes?
Nodes are people, not computers. You can interact with them in your code using the [Koii SDK](/develop/koii-sdk/overview/). 


```
Node : {
    meta : { 
        id : String, // The ID of your task, running on someone else's computer
        task_name : String, // The name of your task
        task_description : String, // The description of your task
        task_manager : String, // The address of the task's owner, who can update or close the task
        is_whitelisted : Boolean, // Whether or not this task is whitelisted to run on nodes
        is_active : Boolean, // Whether or not this task is currently running on nodes
        task_audit_program: String, // The IPFS CID of the task code that you want to run on this computer
        stake_pot_account : String, // The address which will hold bounty rewards and collateral for this task
    }, 
    state : {
        // The current confirmed consensus on your task's data
        round : int, // The current round of the task
    }
}
```

You can recruit Koii's nodes to help build your project by writing a task.




# What is a task?
A task is a piece of code that you want to run on someone else's computer.

To prepare your project as a task, you'll need an object that looks like this:


```
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


# How to build tasks

You can build tasks in any language that compiles to WebAssembly, as it can be injected into the existing JavaScript container. 

[ORCA](/orca) (coming soon) is designed to allow the easy installation of any existing apps within a clean and sandboxed docker container. 

In the next lesson, we'll cover how to build a simple REST API with Koii tasks.

<!-- TODO - add links below -->
If you're looking for a particular solution, you might want to try one of the templates below:
1. Database Sharing - [Linktree Task Template](/)
2. Data Gathering and AI Pre-Processing - [Data Gathering Task Template](/)
3. Private Data - [Contact Us Form Template](/)

If you've made it this far, you might as well try Koii Tasks. Our community is globally distributed and ready to help.

Good luck! 

Join us in the discord if you have trouble: [Discord](https://discord.gg/koii)