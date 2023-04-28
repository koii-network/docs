---
title: Audit Submission Value
image: img/thumbnail.png
sidebar_label: Audit Submission Value
---

To validate the submission value, a validation function is required. This function is passed to the built-in validate node function of the task and executed on each participating node.

## `validateNode()`

The `validateNode` method contains the core logic of how a node's submission should be verified. Just like we did with the `task()` method, we will split up the `validateNode()` method into a separate file.

Create a new file `linktree_validate.js` and paste the code below to import dependencies and add a function for verifying signatures:

```jsx title="/linktree_validate.js"
const dataFromCid = require("./helpers/dataFromCid");
const db = require("./db_model");
const nacl = require("tweetnacl");
const bs58 = require("bs58");
const { default: axios } = require("axios");
const { namespaceWrapper } = require("./namespaceWrapper");

async function verifySignature(message, signature, publicKey) {
  return nacl.sign.detached.verify(message, signature, publicKey);
}
```

Create a function `verifyLinktrees()` that verifies the linktree signature by querying the other node to get it's copy of the linktree:

```jsx title="/linktree_validate.js"
async function verifyLinktrees(proofs_list_object) {
  let allSignaturesValid = true;
  let AuthUserList = await db.getAllAuthLists();
  console.log("Authenticated Users List:", AuthUserList);

  for (const proofs of proofs_list_object) {
    let publicKey = proofs.value[0].publicKey;

    // call other nodes to get the node list
    const nodeUrlList = await namespaceWrapper.getNodes();

    // verify the signature of the linktree for each nodes
    for (const nodeUrl of nodeUrlList) {
      console.log("cheking linktree on ", nodeUrl);

      // get all linktree in this node
      const res = await axios.get(
        `${url}/task/${TASK_ID}/linktree/get/${publicKey}`
      );

      // check node's status
      if (res.status != 200) {
        console.error("ERROR", res.status);
        continue;
      }

      // get the payload
      const linktree = res.data;

      // check if the user's pubkey is on the authlist
      if (AuthUserList.hasOwnProperty(linktree.publicKey)) {
        // TODO write logic to query other node and verify registration events
        /*
        1. REST API that returns a user's registration proof and accepts :pubkey
        2. Add logic here to verify 'proofs' from (1) and then add the user to the AuthUserList
      */
      } else {
        // Verify the signature
        const messageUint8Array = new Uint8Array(
          Buffer.from(JSON.stringify(linktree.data))
        );
        const signature = linktree.signature;
        const publicKey = linktree.publicKey;
        const signatureUint8Array = bs58.decode(signature);
        const publicKeyUint8Array = bs58.decode(publicKey);
        const isSignatureValid = await verifySignature(
          messageUint8Array,
          signatureUint8Array,
          publicKeyUint8Array
        );
        console.log(`IS SIGNATURE ${publicKey} VALID?`, isSignatureValid);

        if (isSignatureValid) {
          await db.setAuthList(publicKey);
        } else {
          allSignaturesValid = false;
        }
      }
    }
  }
  return allSignaturesValid;
}
```

In the above code, we called other nodes to get the node list and verify the signature of the linktree for each nodes

Create a function `verifyNode()` that verifies that a node's signature is valid, and rejects situations where CIDs from IPFS return no data or are not JSON.

```jsx title="/linktree_validate.js"
async function verifyNode(proofs_list_object, signature, publicKey) {
  const messageUint8Array = new Uint8Array(
    Buffer.from(JSON.stringify(proofs_list_object))
  );
  const signatureUint8Array = bs58.decode(signature);
  const publicKeyUint8Array = bs58.decode(publicKey);

  if (!proofs_list_object || !signature || !publicKey) {
    console.error("No data received from web3.storage");
    return false;
  }

  // verify the node signature
  const isSignatureValid = await verifySignature(
    messageUint8Array,
    signatureUint8Array,
    publicKeyUint8Array
  );

  return isSignatureValid;
}
```

Now that we've created functions to validate the linktree list and the signature of a node, let's export it as a module:

```jsx title="/linktree_validate.js"
module.exports = async (submission_value) => {
  console.log("******/ Linktree CID VALIDATION Task FUNCTION /******");
  const outputraw = await dataFromCid(submission_value);
  const output = outputraw.data;
  console.log("OUTPUT", output);
  console.log("RESPONSE DATA length", output.proofs[0].LENGTH);
  console.log("PUBLIC KEY", output.node_publicKey);
  console.log("SIGNATURE", output.node_signature);

  // Check that the node who submitted the proofs is a valid staked node
  let isNode = await verifyNode(
    output.proofs,
    output.node_signature,
    output.node_publicKey
  );
  console.log("Is the node's signature on the CID payload correct?", isNode);

  // check each item in the linktrees list and verify that the node is holding that payload, and the signature matches
  let isLinktree = await verifyLinktrees(output.proofs);
  console.log("IS LINKTREE True?", isLinktree);

  if (isNode && isLinktree) return true; // if both are true, return true
  else return false; // if one of them is false, return false
};
```

:::tip

Explore the full code example on [GitHub](https://github.com/somali0128/task-template-linktree/blob/main/linktree_validate.js).

:::

Next, go to `/coreLogic.js` file and import the logic we just wrote:

```jsx title="/coreLogic.js"
const linktree_validate = require("./linktree_validate");
```

Update `validateNode()` with the code block below:

```jsx title="/coreLogic.js"
  async validateNode(submission_value, round) {
    console.log('Received submission_value', submission_value, round);

    // import the linktree validate module
    const vote = await linktree_validate(submission_value, round);
    console.log('Vote', vote);
    return vote;
  }
```

In the above code block, we call the `linktree_validate()` function, which returns a boolean value to confirm the validity of a node's submission.

## `auditTask()`

The `auditTask()` submits the `validateNode()` function to K2 using the `validateAndVoteOnNodes()` helper function.

:::note

No need to edit this function when creating a task

:::

