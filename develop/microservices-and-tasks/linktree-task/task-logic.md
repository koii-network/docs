---
title: Task Functions
image: img/thumbnail.png
sidebar_label: Task Functions
---

The core logic of a task is contained in a single class called `CoreLogic`, which contains nine methods that will be called by the task nodes during operation.

This `CoreLogic` can be found in the `coreLogic.js` file, and we'll be modifying the various methods in it to suit our linktree task.

Learn more about the nine different methods [here](/develop/microservices-and-tasks/task-development-guide/k2-task-template/#modifying-corelogicjs).

## `task()`

The `task()` method contains the logic for the task's main functionality, and it is recommended that you write the task's core logic within this method when creating a task. However, because the logic of the linktree-task is complex and will require more than 50 lines of code, we'll split it up. We'll write the task's core logic on a separate page, import it into the `coreLogic.js` file, and call it from within the `task()` method.

Create a new file `linktree_task.js` and paste the code below to import dependencies:

```javascript
const { namespaceWrapper } = require("./namespaceWrapper");
const createFile = require("./helpers/createFile.js");
const deleteFile = require("./helpers/deleteFile");
const fs = require("fs");
const { Web3Storage, getFilesFromPath } = require("web3.storage");
const storageClient = new Web3Storage({
  token:
    process.env.SECRET_WEB3_STORAGE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY0ODYxMzAzOTdDNTY1QzlDYTRCOTUzZTA2RWQ4NUI4MGRBQzRkYTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYzNjU1OTk5MDMsIm5hbWUiOiJTb21hIn0.TU-KUFS9vjI9blN5dx6VsLLuIjJnpjPrxDHBvjXQUxw",
}); // TODO remove the default web3.storage key for production
const bs58 = require("bs58");
const nacl = require("tweetnacl");
const db = require("./db_model");
```

Paste the code block below to add the logic function:

```javascript
const main = async () => {
  console.log("******/  IN Linktree Task FUNCTION /******");

  // Load node's keypair from the JSON file
  const keypair = await namespaceWrapper.getSubmitterAccount();

  // Get linktree list fron localdb
  const proofs_list_object = await db.getAllProofs();

  // Use the node's keypair to sign the linktree list
  const messageUint8Array = new Uint8Array(
    Buffer.from(JSON.stringify(proofs_list_object))
  );

  const signedMessage = nacl.sign(messageUint8Array, keypair.secretKey);
  const signature = signedMessage.slice(0, nacl.sign.signatureLength);

  const submission_value = {
    proofs: proofs_list_object,
    node_publicKey: keypair.publicKey,
    node_signature: bs58.encode(signature),
  };

  // upload the proofs of the linktree on web3.storage
  const path = `./Linktree/proofs.json`;

  if (!fs.existsSync("./Linktree")) fs.mkdirSync("./Linktree");

  console.log("PATH", path);

  await createFile(path, submission_value);

  if (storageClient) {
    const file = await getFilesFromPath(path);
    const proof_cid = await storageClient.put(file);
    console.log("User Linktrees proof uploaded to IPFS: ", proof_cid);

    // deleting the file from fs once it is uploaded to IPFS
    await deleteFile(path);

    return proof_cid;
  } else {
    console.log("NODE DO NOT HAVE ACCESS TO WEB3.STORAGE");
  }
};

module.exports = main;
```

Let's break down the logic above, we:

- Fetched the node's keypair
- Fetched linktree list from local database and it with the node's keypair
- Created the node's `submission_value` which contains the linktree list, node's public key and signature from signing the linktree list
- Upload the proofs of the linktree to IPFS using web3.storage
- Finally, we return the CID as proof of work done

Next, go to `coreLogic.js` file and import the logic we just wrote:

```javascript
const linktree_task = require("./linktree_task");
const db = require('./db_model');
```

Update `task()` with the code block below:

```javascript
  async task() {
    const proof_cid = await linktree_task(); // TASK LOGIC

    const round = await namespaceWrapper.getRound(); // get current round

    if (proof_cid) {
      await db.setNodeProofCid(round, proof_cid); // store CID in levelDB
      console.log('Node Proof CID stored in round', round)
    } else {
      console.log('CID NOT FOUND');
    }

    console.log('*********task() completed*********');
  }
```
In the above code block, we call the `linktree_task()` function, which returns a CID, and if it exists, we store the CID for the current round locally on levelDB.


## `fetchSubmission()`

The `fetchSubmission()` method retrieves the CID from levelDB.

Update `fetchSubmission()` with the code block below:
 ```javascript
   async fetchSubmission() {
    // The logic to fetch the submission values and return the cid string

    console.log('***********IN FETCH SUBMISSION**************');
     // fetching round number to store work accordingly
    const round = await namespaceWrapper.getRound();

    const proof_cid = await db.getNodeProofCid(round - 1); // retrieves the CID
    console.log('Linktree proofs CID', proof_cid, 'in round', round - 1);

    return proof_cid;
  }
```

## `submitTask()`
The `submitTask()` method calls the `fetchSubmission()` method to retrieve the value from levelDB and submits it to K2 through the `checkSubmissionAndUpdateRound` helper method along with the `roundNumber`.

Update `submitTask()` with the code block below:
 ```javascript
  async submitTask(roundNumber) {
    console.log('submitTask called with round', roundNumber);
    try {
      console.log('inside try');
      console.log(
        await namespaceWrapper.getSlot(),
        'current slot while calling submit',
      );
      const submission = await this.fetchSubmission();
      console.log('SUBMISSION', submission);
      // Submit the submission to the K2
      await namespaceWrapper.checkSubmissionAndUpdateRound(
        submission,
        roundNumber,
      );
      console.log('after the submission call');
    } catch (error) {
      console.log('error in submission', error);
    }
  }
```