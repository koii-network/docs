---
title: How to develop an Orca Task
description: The purpose of this guide is to show how to integrate ORCA with Koii. Basically we will be focusing and simplifying so that developer can come to this guide, they can start developing and running KOII-ORCA task.
image: img/thumbnail.png
sidebar_label: Develop an Orca Task
---

## Prerequisites

- [NodeJS>=18.0.0](https://nodejs.org/en)
- [Docker](https://docs.docker.com/)

## Task Template

The [Orca task template](https://github.com/koii-network/orca-task-template) allows developers to quickly create a containerized task by providing sensible defaults.

## Understanding a Koii Task

Before beginning to develop a Koii Task, it's useful to understand the basic flow. We recommend going through [EZSandbox Lesson 1](https://github.com/koii-network/ezsandbox/tree/main/Lesson%201) to get an introduction to Koii Tasks.

## Designing Your Task

Your task will need to handle the 4 stages of a Koii Task: task, submission, audit, and distribution. The task, submission, and audit stages will be handled by your container. The distribution stage will be handled by the JavaScript `distribution()` function in the task template.

During the `task` stage, nodes will perform the work you specify in your container. When the work is complete, nodes must create and store proofs that can be verified during the `audit` stage. P We recommend using your preferred database solution within your container to store proofs.

During the `submission` stage, nodes will retrieve the stored proofs and submit them to be audited. The task template already takes care of the actual submission logic, you simply need to provide an endpoint that retrieves the proofs from your database.

During the `audit` stage, nodes will receive proofs from other nodes and check that the work was completed correctly. This stage is critical to ensure that nodes behave honestly; see our [EZ Sandbox lesson on auditing](https://github.com/koii-network/ezsandbox/tree/main/Lesson%204) for tips on designing good audits.

## Creating Your Task

The task template [readme](https://github.com/koii-network/orca-task-template/blob/main/README.md) walks through the steps for creating an Orca task, but we'll summarize them here:

### 1. Create a Docker Container

Create a Docker container with your application and a web server that provides the necessary endpoints as specified in the readme. Upload your container to Docker Hub or another container repository.

### 2. Define Your Compensation Logic (optional)

During the `distribution` stage, rewards and penalties are given out to nodes that made submissions. The default compensation logic will be sufficient for many projects; it distributes the bounty equally between all successful nodes and confiscates 70% of the stake of nodes that failed audit.

### 3. Deploy Your Task

See the [EZ Sandbox instructions on deploying a KOII task](https://github.com/koii-network/ezsandbox/blob/main/Lesson%201/PartIV.md#deploying-a-task) or a [KPL task](https://github.com/koii-network/ezsandbox/blob/main/Lesson%206/PartII.md) for details.

## Run Your Task

That's it! Add your task ID to the desktop node to run your task.

:::success Join Koii Ocean
Got a great idea and looking for funding? Check out Koii Ocean! It's a community-funded launchpad that’s all about supporting projects directly through Koii. No need for venture capitalists or middlemen - just a straightforward way to get your project off the ground!

[Join Koii Ocean today](https://www.koii.network/ocean)
:::
