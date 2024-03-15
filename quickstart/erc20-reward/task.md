---
title: "Task Core Logic"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Main Function
---

The main function of this task will involve submitting `'Hello, World!'` together with a user's Ethereum wallet address to IPFS and sending the corresponding CID as proof of work done to K2.


### Update Dependency Imports

Navigate to the `task/submission.js` file, and update the dependency imports as follows:

```js title="/task/submission.js"
require('dotenv').config();
const { namespaceWrapper } = require('../_koiiNode/koiiNode');
//const { Web3Storage, File } = require('web3.storage');
// const storageClient = new Web3Storage({
//   token: process.env.SECRET_WEB3_STORAGE_KEY,
// });
const nodeEthAddress = process.env.RECIPIENT_ADDRESS;
const {makeFileFromObjectWithName, storeFiles} = require("../helpers");
```

### Task Main Logic

Still in `task/submission.js` file, replace the default `task()` method with the code below:

```js title="/task/submission.js"
  async task(round) {
    try {
      const value = 'Hello, World!';
      // Create a submission object with the value and nodeEthAddress
      const submission = {
        value,
        nodeEthAddress,
      };
  
      // Convert the submission object into a Blob for structured data
      const blob = new Blob([JSON.stringify(submission)], {
        type: 'application/json',
      });
  
      // Create a File containing the Blob with a specified filename
      // const files = [new File([blob], 'submission.json')];
      const files = [makeFileFromObjectWithName({blob,'submission.json' })]
      // Upload to IPFS
      //const cid = await storageClient.put(files);
      const cid = storeFiles(files)
      console.log('stored files with cid:', cid);
  
      // Check if the CID was obtained
      if (cid) {
        // Store the CID under the 'value' key using namespaceWrapper
        await namespaceWrapper.storeSet('value', cid);
      }
  
      return cid;
    } catch (err) {
      console.log('ERROR IN EXECUTING TASK', err);
      return 'ERROR IN EXECUTING TASK' + err;
    }
  }
```

Here's a breakdown of the code's functionality:

 -  The `submission` object is created, consisting of:
    - `value`: This is set to a default value `'Hello, World!'`, which can be replaced with actual data.
    -  `nodeEthAddress`: The node's Ethereum address which will be injected as an environment variable.

- The `submission` object is transformed into a Blob which is then used to create a File named `submission.json`.

- The file is uploaded to IPFS using Spheron and the obtained CID is stored using the `namespaceWrapper.storeSet`.

:::warning Older Project Repos still use web3.storage

The standard for IPFS storage on Koii is Spheron. Some older project examples haven't been updated from web3.storage to Spheron, follow the [Spheron Infrascructure](/quickstart/scaling-tasks/spheron-infrastructure) tutorial to update. 

For more information why we moved to using Spheron see our [FAQ](https://docs.koii.network/faq/getting-started/#q-didnt-koii-used-to-use-web3storage-why-did-we-switch-to-spheron).

:::

