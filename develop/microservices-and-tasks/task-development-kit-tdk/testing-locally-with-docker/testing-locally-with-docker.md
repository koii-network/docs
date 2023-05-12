---
title: Developing Locally with Docker
description: We provide a Docker container that makes task development very seamless and straightforward. We chose to use Docker in order to provide all the required task development resources in a consistent and isolated environment.
image: img/thumbnail.png
sidebar_label: Developing Locally with Docker
---

import ContentLink from "@site/src/components/contentLink";

# Developing Locally with Docker

![banner](../../img/Developing%20Locally%20with%20Docker.svg)

We provide a Docker container that makes task development very seamless and straightforward. We chose to use Docker in order to provide all the required task development resources in a consistent and isolated environment.

The **requirements** for developing with the local stack are the following:

<ContentLink title="Install Docker Desktop" link="https://www.docker.com/products/docker-desktop/" iconType="copy"/>

<br/>

<ContentLink title="Install Docker Compose" link="https://docs.docker.com/compose/install/" iconType="copy"/>
We use docker compose to make stack management and environment variable as easy as possible

<br/>
<br/>

# K2 Testnet wallet with at least 20 KOII

The initial deploy of your task to the K2 testnet will include small gas fees and a bounty pool. In addition to the initial deploy of your task you will also require KOII to create a staking wallet and distribution wallet when running the task node for the first time. You can airdrop yourself enough over a period of time, or you can use our [KOII Faucet](/develop/koii-software-toolkit-sdk/wallet-and-faucet)

<ContentLink title="Using the Koii CLI" link="/develop/koii-software-toolkit-sdk/using-the-cli" iconType="copy"/>

<br/>

:::info

Installation for the above may differ depending on your operating system. Once you have all the requirements installed and configured you can being using the local environment.

:::

The Docker stack provided is an integration of [Redis](https://redis.io/) and our task-node in one environment. You can easily update the envionrment variables that your task may require and the mounts are all configured in the stack YAML.

# Clone the task template

Clone the [task-template](https://github.com/koii-network/task-template) repository and install all the dependencies by running

```
yarn install
```

The `.env-local` file contains a list of environment variables and their descriptions which are used in the Docker stack. Some of these variables should not be changed unless you have experience running a task-node.

# Develop your task

Use the template and it's included functions and descriptions to write your task and the logic needed to handle the round submission and audits. <br/>

When you are ready to build your bundle you can run:

```
yarn webpack
```

# Deploy your task

The task template comes bundled with our `create-task-cli` and can be run with the following command:

```
npx @_koii/create-task-cli@latest
```

This CLI will walk you through the process of deploying your task with a series of prompts. More information and examples can be found on our [create-task page](/develop/koii-software-toolkit-sdk/create-task-cli). Once you are finished you will be supplied with a task ID that you will need for the next step.

:::note

One important thing to note is when you're presented with the choice of `ARWEAVE`, `IPFS`, or `DEVELOPMENT` you can select `DEVELOPMENT` and enter "main" in the following prompt. This will tell the task node to look for a `main.js` file in the dist folder. You can create this locally by running `yarn webpack`.

:::

# Test your task

Copy the task ID you were provided in the previous step into the `TASKS` envionrment variable in `.env-local`. You will also need to give it a `TASK_STAKES` value. These are both comma separated lists and are respective of eachother meaning the first task ID uses the first stake number, and so on.<br/>
To run the stack use:

```
docker compose up
```

This will start two containers:

1. redis
2. task_node

The output of your task will be in the `task_node` container which will include any debugging logs you added as well as the result of the round submissions.

# Debugging your task

Now that you have deployed and ran your task it's pretty simple to test changes. Make your modifications to your code and then run

```
yarn webpack
```

Once your bundle is built you will have to start or restart the task node. This will not take additional KOII because the staking and distribution wallets are already created.

# Custom environment variables

If your task requires custom environment variables you can simply add them to `.env-local` and they will be included in the runtime of the `task_node` as well as your task.
