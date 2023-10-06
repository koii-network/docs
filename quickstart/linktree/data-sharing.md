---
title: Data Sharing
image: img/thumbnail.png
sidebar_label: Data Sharing
---

## How is the data shared between different nodes?

In a distributed system, every node has a copy of the database, which can lead to discrepancies when new data is updated on one node. To ensure that every node has the most up-to-date information, a **data sharing** interface is needed. This interface periodically checks for new data and shares it with all nodes in the network. This will usually be in a separate module and be called in the `setup()` function of the task in the `index.js` module.

For the linktree task, we will create a `dbSharing.js` module that serves as the data-sharing interface and is imported into the `index.js` file. The `share()` function from `dbSharing.js` is called every 20 seconds to enable data replication among the nodes. By using the `dbSharing` module, the system can improve consistency and reliability, which is essential in a blockchain system where data integrity is critical.

## Here is a high-level overview of how the module works

- It retrieves a list of nodes in the network by requesting a task’s URL.
- For each node in the list, it retrieves a list of linktrees associated with the node by requesting the node's URL.
- For each linktree retrieved from a node, it verifies the signature associated with the data
- If the signature is verified, it checks if a local copy of the linktree already exists in the database.
- If a local copy exists and the remote copy is newer, it updates the local copy with the remote data. If a local copy does not exist, it creates a new entry in the database with the remote data.

Step 1: Retrieve the list of node URLs associated with a specific task ID.

```javascript
const nodesUrl = `${SERVICE_URL}/nodes/${TASK_ID}`;
const res = await axios.get(nodesUrl);

let nodeUrlList = res.data.map((e) => {
     return e.data.url;
       };

	// ... check the repo for the full code
```

Step 2: Retrieve the list of all linktrees from the database.

```javascript
let allLinktrees = await db.getAllLinktrees();
allLinktrees = allLinktrees || "[]";

// ...
```

Step 3: Retrieve the list of linktrees associated with each node.

```javascript
for (let url of nodeUrlList) {
  const res = await axios.get(`${url}/task/${TASK_ID}/linktree/all`);

  // ...
}
```

Step 4: Verify the signature

```javascript
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
    } // ...

```

Step 5: Update the local copy with new data if needed

```javascript
let localExistingLinktree = allLinktrees.find((e) => {
  e.uuid == linkTreePayload.data.uuid;
});
if (localExistingLinktree) {
  if (localExistingLinktree.data.timestamp < linkTreePayload.data.timestamp) {
    allLinktrees.push(linkTreePayload);
  }
} else {
  allLinktrees.push(linkTreePayload);
}
```
