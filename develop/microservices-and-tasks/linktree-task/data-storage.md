---
title: Data Storage - LevelDB
image: img/thumbnail.png
sidebar_label: Data Storage - LevelDB
---

## Where Will the Linktree Data be Stored?

Since the task will run on a distributed network of nodes, each node will store a copy of the entire database **locally**, including all the data associated with a specific Linktree. The database will also be shared across the network to keep the nodes **synchronized**, and calls to any one node can be routed to a node with the most recent copy of the requested data. 

This goal of building on Koii Network is to distribute the storage and processing of data across the network, rather than relying on a centralized authority or database. 

In the linktree task, we developed a module called `db_model.js` to manage and interact with the data stored on the local database, which include:

- **Linktree data** — We need to be able to store and retrieve the link tree data. This data includes the changes to the linktree, the public address along with the user signatures. 

- **Proofs** — Proofs are essential for ensuring the validity of any updates made to the database. In cryptographic systems, each transaction is accompanied by a digital signature, which serves as an authentication mechanism. By verifying the signature, we can ascertain the legitimacy of the transaction and associated message.

- **Authentication list** — We need to keep an authentication list to ensure only the nodes that have access to the task can update or retrieve data. This is essential for the security of our task.

Each of these data needs to have its own setters and getters. You can define these to serve the needs of your task however you see fit. Let’s now look at the implementation of this module in our linktree task.

For the linktree data we have the following functions:

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

The function takes a public key as a parameter and returns the linktree data associated with that public key. It calls the `levelDB.get` method from the `namespaceWrapper` module. 

The `getLinktreeId` function is used to construct the key by concatenating the *"linktree:"* prefix with the given `publicKey`. For example: `"linktree:0x07c3e160270ed08f307a49013f4b1ac37659e572"`

Similarly, the `setLinktree` method stores a user's linktree data on levelDB and the `getAllLinketrees` method returns all linktree data.

For the proofs, we have the following functions:

- `getProofs()` — Retrieves proof associated with given public key
- `setProofs()` — Stores the proofs associated with the given public key
- `getAllProofs()` — Retrieves all proofs stored on the database
- `setNodeProofCid()` —  Retrieves the CID associated with the given round of node proofs
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

The function takes a `pubkey` parameter, which is used to retrieve the set of proofs from the database. The `getProofsId` function is used to construct the key by concatenating the *"proofs:"* prefix with the given `pubkey`.

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

The function takes a public key as a parameter and returns the authorized list associated with that public key.

You can modify this module and add your own functions to serve the needs of your own Koii task. For example, let’s assume you are trying to create a web scraper task that scrapes data from wikipedia. Instead of having `getLinktree` function, you can add a `getScrapedData` function. In most cases, you will be modifying the data functions. You will always need the functions for proofs and authentication lists.

The `db_model.js` serves as our module to interact with the local database to store and retrieve the data we need. But what happens if a new user sends a request to create a new linktree and updates the data on one node? Since every node has a copy of the database, the new entry will create a discrepancy as it would only be updated on one of the nodes. 

