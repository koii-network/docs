---
title: "Getting Started"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: ERC20 Token Task
---

# Getting Started

**1. Clone the Task Template Repository**

Begin by cloning the [Task Template](https://github.com/koii-network/task-template) repository. Once cloned, navigate to the repository directory and execute the following commands to install the required dependencies:

```bash
yarn
yarn add web3
```

**2. Set Environment Variables**

Create a `.env` file in the root of the repository and populate it with the following environment variables and their respective values:

```
# Your Infura ID
INFURA_ID = ""

# The contract address of the deployed token
TOKEN_CONTRACT_ADDRESS = ""

# The address (public key) of the Ethereum address that deployed the contract
CONTRACT_OWNER_ADDRESS = ""

# The private key of the Ethereum address that deployed the contract
PRIVATE_KEY = ""

# The Ethereum address of the node runner that will execute the task
# Leave this blank; it will be injected before a node runner runs the task
RECIPIENT_ADDRESS = ""
```

**3. Add Contract ABI**

Create a new file named `KToken.json` in the root directory of the project. Copy and paste the contract's ABI (Application Binary Interface) into this file. You can obtain the ABI by following the arrow in the image below:

![ABI](./img/abi.png)

**4. Helper Function**

We'll need a helper function to retrieve data from CID, create a new file named `helpers.js` in the root of the task folder and paste the code below:

# Tutorial being updated to use Spheron, in meantime see [Spheron SDK Docs](https://docs.spheron.network/sdk/storage-v2/)

<!-- TODO: Make updated tutorial that uses Spheron, I think the method required is referenced here: https://docs.spheron.network/sdk/storage-v2/#get-upload -->
<!-- 
```js title="/helpers.js"
require("dotenv").config();
const axios = require("axios");
const { Web3Storage } = require("web3.storage");
const storageClient = new Web3Storage({
  token: process.env.SECRET_WEB3_STORAGE_KEY,
});

async function retrieveFromCid(cid) {
  const res = await storageClient.get(cid.replace(/['"]/g, ""));

  if (res?.ok) {
    const file = await res.files();
    const url = `https://${file[0].cid}.ipfs.w3s.link/?filename=${file[0].name}`;

    try {
      const output = await axios.get(url);
      return output.data;
    } catch (error) {
      console.log("ERROR", error);
    }
  } else {
    return false;
  }
}
module.exports = { retrieveFromCid };
``` -->
