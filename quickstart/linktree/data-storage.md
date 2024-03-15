---
title: Data Storage - NeDB
image: img/thumbnail.png
sidebar_label: Data Storage - NeDB
---

import Description from "@site/src/components/description";

<Description
text="This section will provide information on how and where your tasks can store data in a decentralized format. We will continue to learn that with Linktree's example, where we are required to store information about each individual user who creates a Linktree on the application."
/>

## Where Will the Linktree Data Be Stored?

Since Koii tasks run on a distributed network of nodes, each node stores a copy of the entire database **locally**, including all the data associated with a specific Linktree.
The goal of building on Koii Network is to distribute the storage and processing of data across the network, rather than relying on a centralized authority or database. We
need a module to manage the database.

In the Linktree task, this module is called `db_model.js`. It manages three different object types, which include:

- **Linktree data** — We need to be able to store and retrieve the link tree data. This data includes the changes to the Linktree, the public address along the user signatures.

- **Proofs** — Proofs are essential for ensuring the validity of any updates made to the database. In cryptographic systems, each transaction is accompanied by a digital signature, which serves as an authentication mechanism. By verifying the signature, we can ascertain the legitimacy of the transaction and associated message.

- **Authentication list** — We need to keep an authentication list to ensure only the nodes that have access to the task can update or retrieve data. This is essential for the security of our task.

Each of these needs to have its setters and getters. You can define these to serve the needs of your task however you see fit. Let’s now look at the implementation of this module in our Linktree task.

For the Linktree data, we have the following functions:

- `getLinktree()`
- `setLinktree()`
- `getAllLinktrees()`

Let’s look at the `getLinktree` function as an example and see how it is implemented:

```javascript
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
```

The function takes a public key as a parameter and returns the Linktree data associated with that public key. It calls the `levelDB.get` method from the `namespaceWrapper` module.

The `getLinktreeId` function is used to construct the key by concatenating the _"Linktree:"_ prefix with the given `publicKey`. For example: `"Linktree:0x07c3e160270ed08f307a49013f4b1ac37659e572"`

Similarly, the `setLinktree` method stores a user's Linktree data on levelDB and the `getAllLinketrees` method returns all Linktree data.

For the proofs, we have the following functions:

- `getProofs()` — Retrieves proof associated with given public key
- `setProofs()` — Stores the proofs associated with the given public key
- `getAllProofs()` — Retrieves all proofs stored on the database
- `setNodeProofCid()` — Retrieves the CID associated with the given round of node proofs
- `getAllNodeProofCids()` — Stores the CID associated with the given round of node proofs

Let’s look at the `getProofs` function as an example and see how it is implemented:

```javascript
const getProofs = async (pubkey) => {
  return new Promise((resolve, reject) => {
    namespaceWrapper.levelDB.get(getProofsId(pubkey), (err, value) => {
      if (err) {
        console.error("Error in getProofs:", err);
        resolve(null);
      } else {
        resolve(JSON.parse(value || "[]"));
      }
    });
  });
};
```

The function takes a `pubkey` parameter, which is used to retrieve the set of proofs from the database. The `getProofsId` function is used to construct the key by concatenating the _"proofs:"_ prefix with the given `pubkey`.

For the authentication list, we have the following functions:

- `getAuthList()`
- `setAuthList()`
- `getAllAuthLists()`
- `getAuthListId()`

```javascript
const getAuthList = async (pubkey) => {
  return new Promise((resolve, reject) => {
    namespaceWrapper.levelDB.get(getAuthListId(pubkey), (err, value) => {
      if (err) {
        console.error("Error in getAuthList:", err);
        resolve(null);
      } else {
        resolve(JSON.parse(value || "[]"));
      }
    });
  });
};
```

The function takes a public key as a parameter and returns the user object associated with that public key. The user object contains information about the authenticated user and is retrieved from the database.

You can modify this module and add your functions to serve the needs of your own Koii task. For example, let’s assume you are trying to create a web scraper task that scrapes data from Wikipedia. Instead of having `getLinktree` function, you can add a `getScrapedData` function. In most cases, you will be modifying the data functions according to your task needs.

Our team is in the process of standardizing the ‘proof’ and ‘auth list’ methods in the db_model file as these would most likely be used in every task. This way you will not need to write extra code and can focus on only writing the data methods for your task. The important thing is to understand the significance of proofs and auth lists in tasks.
