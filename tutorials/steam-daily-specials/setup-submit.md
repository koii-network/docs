---
title: Submit function
description: This part incluede the fetchSubmission function of the task.
image: img/thumbnail.png
sidebar_label: Submit function
---

# Submit function

The submit function is where the data is submitted to the K2. The submit function is defined in the `special_submit.js` file. The file is located in the root folder. It is exported from the file and imported in the `submission.js` file.

In this function, we will use the `cid` tha we just uploaded in `main` fucntion and combine with `node_pubKey` and `node_signature` to submit the data to the K2.

It import `namespaceWrapper` module and use the function `payloadSigning` to sign the payload.

```js
const signature = await namespaceWrapper.payloadSigning(cid);

const submissionValue = {
  steam_special: cid,
  nodePublicKey: await namespaceWrapper.getMainAccountPubkey(),
  signature: signature,
};
```

Then it stores the submission value to IPFS and upload return `proof_cid` as the submission value.

```js
const proof_cid = await storageClient.put([file]);
console.log(`Uploaded and got proof_cid: ${proof_cid}`);

return proof_cid;
```

K2 will receive your `proof_cid` as the submission value, which will use in next audit step to verify the data.