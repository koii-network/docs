---
title: Audit Function
description: This part include the Audit function of the task.
image: img/thumbnail.png
sidebar_label: Audit Function
---

# Audit Function

The audit function is where the data is verified. The audit function is defined in the `special_audit.js` file. The file is located in the root folder. The audit function is exported from the file and imported into the `audit.js`` file.

During audit round, the task will verify other nodes submission value to make sure the data is correct. The audit function will be called by K2 to verify the data. If the data is correct, the task will return `true` to K2. Otherwise, it will return `false`.

In this function, we will use the `proof_cid` that we just uploaded in `submit` function and combine with `node_pubKey` and `node_signature` to verify the data.

## Verify Node

After extracting the data from `proof_cid`, we will use `node_pubKey` and `node_signature` to verify the data. There's `dataFromCid` function in helpers folder that can help you extract the data from `proof_cid`.

```js
const outputraw = await dataFromCid(submission);
if (!outputraw) {
  console.log("VOTE FALSE");
  console.log("SLASH VOTE DUE TO FAKE VALUE");
  return false;
}
const output = outputraw.data;

const voteResp = await namespaceWrapper.verifySignature(
  signature,
  nodePublicKey
);
const cleanVoteRespData = voteResp.data.replace(/"/g, "");
if (!voteResp || cleanVoteRespData !== steam_special) {
  console.log("VOTE FALSE");
  console.log("SLASH VOTE DUE TO DATA MISMATCH");
  return false;
}
```

## Verify Data

After verifying the node, we will verify the data. In this task, we will use `steam_special` to verify the data. If the data format is JSON, it returns `true`. Otherwise, it will return `false`.

```js
if (!typeof steam_special_resp.data === "json") {
  console.log("VOTE FALSE");
  console.log("SLASH VOTE DUE TO FAKE STEAM special");
  return false;
}
```

If any of the steps above return `false`, the task will return `false` to K2. Otherwise, it will return `true`.

