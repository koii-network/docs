---
title: Helper Functions
image: img/thumbnail.png
sidebar_label: Helper Functions
---

Before we start writing the code for the core logic, let's create helper functions that will perform some necessary computations. This way, we can reuse computations, just like we can with functions in general.

Create a new folder `/helpers/` and add the following files:

| File                                                                                                    | Description                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createFile.js](https://github.com/somali0128/task-template-linktree/blob/main/helpers/createFile.js)   | Writes data to a file located at the provided path.                                                                                                                                                                                                               |
| [dataFromCid.js](https://github.com/somali0128/task-template-linktree/blob/main/helpers/dataFromCid.js) | This file uses the Web3.Storage API to retrieve the data associated with the given CID. If the response is not successful, the function logs "VOTE FALSE" and returns false. Otherwise, the function retrieves the content using the url for the cid in the IPFS. |
| [deleteFile.js](https://github.com/somali0128/task-template-linktree/blob/main/helpers/deleteFile.js)   | Deletes a file located at the given path.                                                                                                                                                                                                                         |
| [hashCompare.js](https://github.com/somali0128/task-template-linktree/blob/main/helpers/hashCompare.js) | This verifies the authenticity of an index object by comparing its hash value with the hash value derived from its signature and public key.                                                                                                                      |

### `createFile.js`

Copy and paste the code below in the `/helpers/createFile.js` file:

```jsx title="/helpers/createFile.js"
const fsPromise = require("fs/promises");

module.exports = async (path, data) => {
  //if (!fs.existsSync('userIndex')) fs.mkdirSync('userIndex');

  await fsPromise.writeFile(path, JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    }
  });
};
```

### `dataFromCid.js.js`

Copy and paste the code below in the `/helpers/dataFromCid.js` file:

```jsx title="/helpers/dataFromCid.js.js"
const axios = require("axios");
const { Web3Storage, getFilesFromPath } = require("web3.storage");
const storageClient = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY0ODYxMzAzOTdDNTY1QzlDYTRCOTUzZTA2RWQ4NUI4MGRBQzRkYTIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYzNjU1OTk5MDMsIm5hbWUiOiJTb21hIn0.TU-KUFS9vjI9blN5dx6VsLLuIjJnpjPrxDHBvjXQUxw",
});

module.exports = async (cid) => {
  console.log("CID", cid);
  if (storageClient) {
    const res = await storageClient.get(cid);
    if (!res.ok) {
      // voting false
      console.log("VOTE FALSE");

      console.log("SLASH VOTE DUE TO FAKE VALUE");
      //console.log("VOTE", vote);
      return false;
    } else {
      const file = await res.files();
      //console.log("FILE", file);
      //console.log("CID", file[0].cid);
      const url = `https://${file[0].cid}.ipfs.w3s.link/?filename=${file[0].name}`;
      console.log("URL", url);
      try {
        const output = await axios.get(url);
        return output;
      } catch (error) {
        console.log("ERROR", error);
      }
    }
  }
};
```

### `deleteFile.js`

Copy and paste the code below in the `/helpers/deleteFile.js` file:

```jsx title="/helpers/deleteFile.js"
const fsPromise = require("fs/promises");

module.exports = async (path) => {
  //if (!fs.existsSync('userIndex')) fs.mkdirSync('userIndex');

  await fsPromise.unlink(path, (err) => {
    if (err) {
      console.error(err);
    }
  });
};
```

### `hashCompare.js`

Copy and paste the code below in the `/helpers/hashCompare.js` file:

```jsx title="/helpers/hashCompare.js"
const crypto = require("crypto");
const { namespaceWrapper } = require("../namespaceWrapper");

module.exports = async (index, signature, publicKey) => {
  const hash = await namespaceWrapper.verifySignature(signature, publicKey);
  if (hash.error) {
    console.error("Could not verify the signatures");
  }

  console.log("DATA HASH", hash.data);

  // comparing the data Hash
  const expectedHash = crypto
    .createHash("sha256")
    .update(JSON.stringify(index))
    .digest("hex");

  const expectedString = JSON.stringify(expectedHash);
  console.log("EXPECTED HASH", expectedString);

  if (hash.data == expectedString) {
    return true;
  } else {
    return false;
  }
};
```
