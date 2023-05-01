---
title: Getting Started
description: First step is to clone the K2-template.
image: img/thumbnail.png
sidebar_label: Getting Started
---

import Link from "@site/src/components/link";

# Getting Started

:::note

You must also have a basic understanding of Koii tasks in order to proceed with this tutorial; we recommend learning about Koii tasks [here](/develop/microservices-and-tasks/what-are-tasks/) and using this [tutorial](/develop/microservices-and-tasks/google-doodle-task/) to build a simpler Koii task.

:::

## Requirements

- [Node >=16.0.0](https://nodejs.org/en/download)
- [Docker compose](https://docs.docker.com/compose/install/docker)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Setting up task

- Run the following command to clone the [linktree-app](https://github.com/koii-network/linktree-app):

```bash
git clone https://github.com/koii-network/linktree-app.git linktree
```

- Change the directory and install all the dependencies, using this command:

```bash
cd linktree && yarn install
```

- Run `yarn start` to start the development server. It will open a new tab of the linktree UI in your browser at `http://localhost:3000`. Use publicKey '0x5b610f2bf74916a26625ee274e82cde0bceb7ffc' to have a quick review.


### Linktree Task

Head to folder `/task-template-linktree` and run `yarn install` to install all the dependencies. This folder contain all the information you need to build a linktree task.

- Add your [Web3.storage](https://web3.storage/) secret key as an environment variable `SECRET_WEB3_STORAGE_KEY` in the `.env-local` file. Visit [Web3.storage](https://web3.storage/) to create a secret key if you don’t already have one.

- Create a folder `/config/koii` and copy your Koii wallet here as name id.json. You can also use following command to create the folder and copy the wallet:

```bash
cp /home/<user>/.config/koii/id.json ./config/koii/id.json
```

## What will you learn in this tutorial?

The purpose of this tutorial is to help you become familiar with more advanced ideas that are implemented in the linktree task. These concepts will help you write your own Koii tasks.

However, when it comes to more complex projects involving database management and the creation of API endpoints for user requests, several questions arise. let's talk about three crucial pieces of logic needed for this project to function properly:

| File                                                                                         | Description                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [db_model.js](https://github.com/somali0128/task-template-linktree/blob/main/db_model.js)    | A **local database** is required to store and manage data such as Linktree information, proofs, and the authentication list on a [node](/develop/microservices-and-tasks/run-a-task-node) operator's local device. This is important because it reduces the need for frequent API calls to a remote database. |
| [routes.js](https://github.com/somali0128/task-template-linktree/blob/main/routes.js)        | **API endpoints** will be required for the project to handle incoming requests, process data, and return appropriate responses to the client.                                                                                                                                                                 |
| [db_sharing.js](https://github.com/somali0128/task-template-linktree/blob/main/dbSharing.js) | Since each Koii node has its own local database, when one node’s data is updated, it must also be updated on other nodes to ensure consistency. The `db_sharing.js` will contain a single function called `share()` that works to keep the network synchronized.                                              |

