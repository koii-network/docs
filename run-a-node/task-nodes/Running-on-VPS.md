---
title: Running on VPS
description: "Learn how tu run on VPS"
image: img/thumbnail.png
sidebar_label: Running on VPS
---


A **Virtual Private Server (VPS)** is a virtual machine offered as a service by internet hosting providers, featuring its own operating system (OS) where customers have superuser-level access. This enables the installation of almost any software compatible with the OS. VPS is commonly used for web hosting and running applications or services that need a dedicated environment without the expense of a complete physical server. Particularly useful in a **Command Line Interface (CLI)** context, setting up a VPS involves configuring a task-template repository for automating tasks in a production setting. The process includes cloning a repository, setting environment variables, updating task and stake information, and deploying the setup using Docker. This approach is beneficial for those seeking to run automated tasks in a stable and isolated VPS environment, optimizing the advantages of this technology for efficient and controlled operational management.

**The steps are as follows:**

1. Clone the task-template repository: https://github.com/koii-network/task-template

2. Update the `.env.local` file for the following:
   - Update the `Environment` field in the file to `"production"`
   - Update the `TASKS` field to the task ids of all tasks that you want to run (The task ids needs to be comma seperated)
   - Update the `TASK_STAKES` field to the stake amount of all tasks that you want to run, each value in `TASK_STAKES` will correspond to the task in the `TASKS` So the length of both will be equal (The task stakes needs to be comma seperated)
   - Update `INITIAL_STAKING_WALLET_BALANCE` to the amount of koii you want in staking wallet. This amount must be at least greater than the sum of all `TASK_STAKES` plus 1 koii buffer atleast for rent.
   - At the end of the file add any Task variables that the task will require in order to run
3. Make sure you have the [koii cli](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli) installed as the task node will use the wallet that is pointing in the `koii config get`

4. Run `docker-compose up`  which will first make a staking wallet, stake on the tasks and then run the tasks.