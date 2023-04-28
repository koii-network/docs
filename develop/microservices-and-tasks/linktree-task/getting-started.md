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

- Run the following command to clone the [K2-template](https://github.com/koii-network/task-template):

```bash
git clone https://github.com/koii-network/task-template.git linktree
```

- Change the directory and install all the dependencies, using this command:

```bash
cd linktree && yarn add @solana/web3.js
```

- Add your [Web3.storage](https://web3.storage/) secret key as an environment variable `SECRET_WEB3_STORAGE_KEY` in the `.env-local` file. Visit [Web3.storage](https://web3.storage/) to create a secret key if you don’t already have one.

Now that the task template and dependencies are ready, let's talk about three crucial pieces of logic needed for this project to function properly:

| File                                                                                         | Description                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [db_model.js](https://github.com/somali0128/task-template-linktree/blob/main/db_model.js)    | A **local database** is required to store and manage data such as Linktree information, proofs, and the authentication list on a [node](/develop/microservices-and-tasks/run-a-task-node) operator's local device. This is important because it reduces the need for frequent API calls to a remote database. |
| [routes.js](https://github.com/somali0128/task-template-linktree/blob/main/routes.js)        | **API endpoints** will be required for the project to handle incoming requests, process data, and return appropriate responses to the client.                                                                                                                                                                 |
| [db_sharing.js](https://github.com/somali0128/task-template-linktree/blob/main/dbSharing.js) | Since each Koii node has its own local database, when one node’s data is updated, it must also be updated on other nodes to ensure consistency. The `db_sharing.js` will contain a single function called `share()` that works to keep the network synchronized.                                              |

:::tip

Explore the code in our [GitHub repository](https://github.com/somali0128/task-template-linktree).

:::

## `db_model.js`

This file contains all the functions needed to interact with the local database.

Create a new file `db_model.js`, copy and paste the full code from [Github]('https://github.com/somali0128/task-template-linktree/blob/main/db_model.js').

```jsx title="/db_model.js"
const levelup = require("levelup");
const leveldown = require("leveldown");
const { namespaceWrapper } = require("./namespaceWrapper");
const fs = require("fs");

// db functions for linktree
const getLinktree = async (publicKey) => {
  return new Promise((resolve, reject) => {
    namespaceWrapper.levelDB.get(getLinktreeId(publicKey), (err, value) => {
      if (err) {
        console.error("Error in getLinktree:", err);
        resolve(null);
      } else {
        resolve(JSON.parse(value || "[]"));
      }
    });
  });
};

const setLinktree = async (publicKey, linktree) => {
  namespaceWrapper.levelDB.put(
    getLinktreeId(publicKey),
    JSON.stringify(linktree)
  );
  return console.log("Linktree set");
};

const getAllLinktrees = async (values) => {
  return new Promise((resolve, reject) => {
    let dataStore = [];

    if (!values) values = true;
    namespaceWrapper.levelDB
      .createReadStream({
        lt: "linktree~",
        gt: `linktree`,
        reverse: true,
        keys: true,
        values: values,
      })
      .on("data", function (data) {
        console.log(data.key.toString(), "=", data.value.toString());
        dataStore.push({
          key: data.key.toString(),
          value: JSON.parse(data.value.toString()),
        });
      })
      .on("error", function (err) {
        console.log("Something went wrong in read linktreesStream!", err);
        reject(err);
      })
      .on("close", function () {
        console.log("Stream closed");
      })
      .on("end", function () {
        console.log("Stream ended");
        resolve(dataStore);
      });
  });
};
```

<Link text='Copy and paste code from GitHub' link='https://github.com/somali0128/task-template-linktree/blob/main/db_model.js' />

## `routes.js`

This file contains all of the required routes for the API endpoints.

Create a new file `routes.js`, copy and paste the full code from [Github](https://github.com/somali0128/task-template-linktree/blob/main/routes.js)

```jsx title="/routes.js"
const express = require("express");
const router = express.Router();
const db = require("./db_model");
const fs = require("fs");
const { namespaceWrapper } = require("./namespaceWrapper");

// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.originalUrl}`);
  next();
});

router.get("/taskState", async (req, res) => {
  const state = await namespaceWrapper.getTaskState();
  console.log("TASK STATE", state);

  res.status(200).json({ taskState: state });
});

// API to register the linktree
router.post("/linktree", async (req, res) => {
  const linktree = req.body.payload;
  // Check req.body
  if (!linktree) {
    res.status(400).json({ error: "Invalid request" });
    return;
  } else {
    console.log(linktree);
  }

  // Use the code below to sign the data payload
  let signature = linktree.signature;
  let pubkey = linktree.publicKey;

  let proof = {
    publicKey: pubkey,
    signature: signature,
  };
  console.log("Check Proof:", proof);
  // use fs to write the linktree and proof to a file
  if (!fs.existsSync("./Linktree")) fs.mkdirSync("./Linktree");
  fs.writeFileSync(
    "./Linktree/" + `linktree_${pubkey}.json`,
    JSON.stringify(linktree)
  );
  // fs.writeFileSync('proof.json', JSON.stringify(proof));
  await db.setLinktree(pubkey, linktree);

  const round = await namespaceWrapper.getRound();
  // TEST For only testing purposes:
  // const round = 1000

  let proofs = await db.getProofs(pubkey);
  proofs = JSON.parse(proofs || "[]");
  proofs.push(proof);
  console.log(`${pubkey} Proofs: `, proofs);
  await db.setProofs(pubkey, proofs);

  return res
    .status(200)
    .send({ message: "Proof and linktree registered successfully" });
});
```

<Link text='Copy and paste code from GitHub' link='https://github.com/somali0128/task-template-linktree/blob/main/routes.js' />

## `db_sharing.js`

This file contains a single function called `share()` that iterates through the list of nodes, fetches data from each node, verifies the signature, and updates the local database with the most recent data.

Create a new file `db_sharing.js`, copy and paste the code below:

```jsx title="/db_sharing.js"
const { app, MAIN_ACCOUNT_PUBKEY, SERVICE_URL, TASK_ID } = require("./init");
const { default: axios } = require("axios");
const db = require("./db_model");
const nacl = require("tweetnacl");
const bs58 = require("bs58");

const share = async () => {
  try {
    // find another node
    const nodesUrl = `${SERVICE_URL}/nodes/${TASK_ID}`;

    // check if the node is online
    const res = await axios.get(nodesUrl);
    if (res.status != 200) {
      console.error("Error", res.status);
      return;
    }

    if (!res.data) {
      console.error("res has no valid urls");
      return;
    }

    let nodeUrlList = res.data.map((e) => {
      return e.data.url;
    });

    console.log(nodeUrlList);

    // fetch local linktrees
    let allLinktrees = await db.getAllLinktrees();
    allLinktrees = allLinktrees || "[]";

    // for each node, get all linktrees
    for (let url of nodeUrlList) {
      console.log(url);
      const res = await axios.get(`${url}/task/${TASK_ID}/linktree/all`);
      if (res.status != 200) {
        console.error("ERROR", res.status);
        continue;
      }
      const payload = res.data;

      if (!payload || payload.length == 0) continue;
      for (let i = 0; i < payload.length; i++) {
        const value = payload[i].value;
        const isVerified = nacl.sign.detached.verify(
          new TextEncoder().encode(JSON.stringify(value.data)),
          bs58.decode(value.signature),
          bs58.decode(value.publicKey)
        );
        if (!isVerified) {
          console.warn(`${url} is not able to verify the signature`);
          continue;
        }
        let localExistingLinktree = allLinktrees.find((e) => {
          e.uuid == value.data.uuid;
        });
        if (localExistingLinktree) {
          if (localExistingLinktree.data.timestamp < value.data.timestamp) {
            await db.setLinktree(value.publicKey, value.data);
          }
        } else {
          await db.setLinktree(value.publicKey, value.data);
        }
      }
    }
  } catch (error) {
    console.error("Some went wrong:", error);
  }
};

module.exports = { share };
```
