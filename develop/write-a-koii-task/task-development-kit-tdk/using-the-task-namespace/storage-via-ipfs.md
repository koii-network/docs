---
title: Storage via IPFS
description: IPFS can be easily implemented as decentralized storage for a task. Using libraries such as Spheron
image: img/thumbnail.png
sidebar_label: Storage via IPFS
---

# Storage via IPFS

IPFS can be easily implemented as decentralized storage for a task. Using libraries such as [Spheron](https://docs.spheron.network/storage/), data can easily be stored, retrieved, and maintained on IPFS. The stored data will be referenced using [IPFS content identifiers](https://docs.ipfs.tech/concepts/content-addressing/) that are unique to the data, making your data completely portable and accessible from anywhere broadcasting data to the IPFS network, whether on a local or peer device or uploaded to Spheron.

<!-- TODO : Tutorial for implementing with Spheron -->
# Spheron Storage Tutorial Coming Soon!
For now see [Spheron Docs](https://docs.spheron.network/storage/)

<!-- Import the library and create a new client in your executable file:

```javascript
// Using Web3Storage to make uploading to IPFS easier
const { Web3Storage, getFilesFromPath } = require("web3.storage");
// Create new client
const storageClient = new Web3Storage({ token: process.env.WEB3_STORAGE_KEY });
```

In the task function, store file and retrieve `cid`:

```javascript
async function task() {
  const randomJoke = getRandomJoke();
  // TODO sign data uploaded to IPFS to prove node uploaded it
  const qodJSON = JSON.stringify(randomJoke);
  const signedJSON = await namespace.signData(qodJSON);

  fs.writeFileSync("qod.json", signedJSON);

  if (storageClient) {
    // Storing on IPFS through web3 storage as example
    const file = await getFilesFromPath("./qod.json");
    const cid = await storageClient.put(file);
    console.log("CID of Uploaded Data: ", cid);

    await namespace.checkSubmissionAndUpdateRound(cid);
  } else {
    console.error("No web3 storage API key provided");
  }
}
``` -->
