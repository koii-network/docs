---
title: "Getting Started"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: ERC20 Token Task
---

# Getting Started

**1. Clone the Task Template Repository**

Begin by cloning the [Task Template](https://github.com/koii-network/task-template) repository.


**2. Set Environment Variables**

Create a `.env` file in the root of the repository and populate it with the following environment variables and their respective values:

```sh
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

![ABI](/img/develop/erc20/abi.png)

**4. Helper Function**

We'll need a helper function to retrieve data from CID, create a new file named `helpers.js` in the root of the task folder write a code snippet to retrieve data from the CID.

```js
const axios = require('axios');

const getJSONFromCID = async (cid, fileName, maxRetries = 3, retryDelay = 3000) => {
  let url = `https://${cid}.ipfs.dweb.link/${fileName}`;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(`Attempt ${attempt}: Received status ${response.status}`);
      }
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < maxRetries) {
        console.log(`Waiting for ${retryDelay / 1000} seconds before retrying...`);
        await sleep(retryDelay);
      } else {
        return false;
      }
    }
  }
}
```
