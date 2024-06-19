---
title: Create a new repository
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Create a repository
---


The `create-task-cli` tool allows you to create a local repository, register and deploy a new Koii task. In this section, we'll walk you through the process of creating a new task.

Run:

```sh
npx @_koii/create-task-cli@latest
```

and you will be presented with a set of options. To create a new local repository, select the following option:

```sh
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a new local repository
    Deploy a new task
    update existing task
    Activate/Deactivate task
    Claim reward
    Fund task with more KOII
    Withdraw staked funds from task
    upload assets to IPFS(metadata/local vars)
```

The CLI will create a repository within the folder where you executed the command.
