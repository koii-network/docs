---
title: K2 Task Template
description: Tasks run following a periodic structure of 'rounds'
image: img/thumbnail.png
sidebar_label: K2 Task Template
---

# K2 Task Template

Tasks run following a periodic structure of "rounds":

![execute task](../../img/execute_task.png)

Each round is set by a specific time period, and nodes participate by uploading data to IPFS, posting CIDs to the K2 settlement layer, and sending messages across REST APIs and WebSockets.

For more information on how the task flow works, check out the [runtime flow](/concepts/gradual-consensus/runtime-flow) docs.

## Requirements

- [Node >=16.0.0](https://nodejs.org/en/)
- [Docker compose](https://docs.docker.com/compose/install/)

## What's in the template?

- `index.js` — is the hub of your app, and ties the other pieces together. This will be the entry point when your task runs on task nodes.

- `_koiiNode` — is a directory that contains `koiiNode.js` which has the interfaces to make API calls to the core of the task node. It contains all the necessary functions required to submit and audit the work, as well as the distribution lists. Check [here](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/the-namespace-object) to learn more about namespace functions.

## Timers

When a task is executed, it goes through different [phases](/concepts/gradual-consensus/runtime-flow#how-does-it-work) that occur consecutively, and during each phase, a function is required to be run. Timers are IPC calls on the task node that call events on the task during a particular time/slot during a task execution period.

For example, after off-chain work has been done and a node submits its result on-chain, the timers trigger the next phase, which is the audit phase for verification of the submitted result.

The `index.js` file has a function `setup()` that is responsible for switching between phases based on the current events and also calling the necessary function for each phase.

## Runtime Options

There are two ways to run your task when doing development:

1. With Timer ON (see `.env-local`)- When the timer is ON, IPC calls are made by calculating the average time slots of all the task running your node.
2. With Timer OFF - This allows you to do manual calls to K2 and disables the triggers for round management on K2. Transactions are only accepted during the correct period. Guide for manual calls is in `index.js`

## Modifying CoreLogic.js

Task nodes will trigger a set of predefined functions during operation mentioned in the `task` directory.

The directory houses three key files: `submission.js`, `audit.js` and `distribution.js`. These files are where you define your task, audit, and distribution logic, enabling you to control the core functionality of the task. The following methods are defined in each of them.

### `submission.js`

1. `task()` - The logic for what your task should do goes here. There is a window in round that is dedicated to do work. The code in task is executed in that window.
2. `fetchSubmission()` - After completing the task , the results/work will be stored somewhere like on IPFS or local NeDB. This function is the place where you can write the logic to fetch that work. It is called in `submitTask()` function which does the actual submission on K2.
3. `submitTask()` - It makes the call to namespace function of task-node using the wrapper.

### `audit.js`

1. `validateNode()` - This function is called to verify the submission value, so based on the value received from the task-state we can vote on the submission.
2. `auditTask()` - Makes call to namespace of task node to raise an audit against the submission value if the validation fails.

### `distribution.js`

1. `generateDistributionList()` - You have full freedom to prepare your reward distributions as you like and the logic for that goes here. We have provided a sample logic that rewards 1 KOII to all the nodes who did the correct submission for that round. This function is called in `submitDistributionList()`
2. `submitDistributionList()` - Makes call to the namespace function of task node to upload the list and on successful upload does the transaction to update the state.
3. `validateDistribution()` - The logic to validate the distribution list goes here and the function will receive the distribution list submitted form task-state.
4. `auditDistribution()` - Makes call to namespace of task node to raise an audit against the distribution list if the validation fails.

# Testing and Deploying

Before you begin this process, be sure to check your code and write unit tests wherever possible to verify individual core logic functions. Testing using the docker container should be mostly used for consensus flows, as it will take longer to rebuild and re-deploy the docker container.

## Build

Before deploying a task, you'll need to build it into a single file executable by running `npm run webpack`.

## Deploy your bundle

Complete the following to deploy your task on the k2 testnet and test it locally with docker compose.


### Find or create a k2 wallet key

If you have already generated a Koii wallet on your filesystem you can obtain the path to it by running:

```sh
koii config get
```

This should return something similar to the following:

![execute task](../../img/k2-wallet-key.png)

```sh
Config File: /home/<user>/.config/koii/cli/config.yml
RPC URL: https://testnet.koii.network/
WebSocket URL: wss://testnet.koii.network/ (computed)
Keypair Path: /home/<user>/.config/koii/id.json
Commitment: confirmed
```

The `Keypair Path` will be used to pay gas fees and fund your bounty wallet by inputting it into the task CLI.

If you need to create a Koii wallet you can follow the instructions [here](/develop/command-line-tool/koii-cli/create-wallet). Make sure to either copy your keypair path from the output, or use the method above to supply the task CLI with the proper wallet path.

### Deploy to K2

To test the task with the [K2 settlement layer](/concepts/settlement-layer/k2-tick-tock-fast-blocks) you'll need to deploy it.

We have included our CLI for creating and publish tasks to the K2 network in this repo. Tips on this flow can be found [here](/develop/category/koii-command-line-tool). One important thing to note is when you're presented with the choice of ARWEAVE, IPFS, or DEVELOPMENT you can select DEVELOPMENT and enter `main` in the following prompt. This will tell the task node to look for a `main.js` file in the `dist` folder. You can create this locally by running `npm run webpack`.

## Run a node locally

If you want to get a closer look at the console and test environment variables, you'll want to use the included docker-compose stack to run a task node locally.

1. Link or copy your wallet into the `config` folder as `id.json`
2. Open `.env-local` and add your TaskID you obtained after deploying to K2 into the `TASKS` environment variable.
3. Run `docker compose up` and watch the output of the `task_node`. You can exit this process when your task has finished, or any other time if you have a long running persistent task.

### Redeploying

You do not need to publish your task every time you make modifications. You do however need to restart the `task_node` in order for the latest code to be used. To prepare your code you can run `npm run webpack` to create the bundle. If you have a `task_node` running already, you can exit it and then run `docker compose up` to restart (or start) the node.

### Environment variables

Open the `.env-local` file and make any modifications you need. You can include environment variables that your task expects to be present here, in case you're using [custom secrets](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/keys-and-secrets).
