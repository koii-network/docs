---
title: Data Sharing
image: img/thumbnail.png
sidebar_label: Data Sharing
---

## How is the data shared between different nodes?

To keep the data up to date, we need to create a module called dbSharing. This module is responsible for sharing all new data and making sure every node has the most up to date information.

Let’s see how this is implemented

We start by fetching a list of URLs of other online nodes from the task’s ‘nodes’ endpoint.

```javascript
const nodesUrl = `${SERVICE_URL}/nodes/${TASK_ID}`;
const res = await axios.get(nodesUrl);

let nodeUrlList = res.data.map((e) => {
     return e.data.url;
       };
```

We then use the getAllLinktrees function from the **db_model** module to fetch all Linktree objects from the local database. We assign the result to the allLinktrees variable.

```javascript
let allLinktrees = await db.getAllLinktrees();
allLinktrees = allLinktrees || "[]";
```

Next, we loop through each node URL and make a GET request to its linktree/all endpoint to fetch all Link Tree objects stored by that node.

```javascript
for (let url of nodeUrlList) {

const res = await axios.get(`${url}/task/${TASK_ID}/linktree/all`);
```

For each Link Tree object received from another node, we first check if it has a valid signature.

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
    }
```

Finally, we compare the timestamp of the Link Tree object with the locally stored version of the object. If the received object has a newer timestamp, we update the local database with the latest version of the object. If the object is not found in the local database, we add it to the database.

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
