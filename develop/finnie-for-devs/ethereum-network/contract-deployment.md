---
title: Contract Deployment
description: How to deploy a new contract using ethers.js.
image: img/thumbnail.png
sidebar_label: Contract Deployment
---

import Description from "@site/src/components/description";

# Contract Deployment

<Description
  text="How to deploy a new contract using ethers.js"
/>

### Install ethers.js to interact with Ethereum

With our Finnie wallet properly set and initialized, it's time to create our `collectiblesContract`
&#8211; an exemplary contract that can be used to mint NFTs.
In the following example, we will use `ethers.js` library to interact with the `Ethereum` blockchain. You can install it by running:

```sh
npm install --save ethers
```

Check their [documentation ](https://docs.ethers.io/v5/getting-started/)for more details.

```js
// First, lets import the ethers.js
import { ethers } from "ethers";

// Sets previously injected ethereum object as provider
// Additionaly, we must specify the network as 'any' for ethers to allow network changes
const ethersProvider = new ethers.providers.Web3Provider(
  window.ethereum,
  "any"
);
// creates contract factory
const collectiblesFactory = new ethers.ContractFactory(
  collectiblesAbi,
  collectiblesBytecode,
  ethersProvider.getSigner() // gets the signer
);

const deploy = async () => {
  try {
    // deploy the contract
    const contract = await collectiblesFactory.deploy();
    // wait until the deployment transaction is finished
    await contract.deployTransaction.wait();

    return contract;
  } catch (error) {
    console.error(error);
  }
};
```

Now, we can use our newly created to mint our first NFT in the Mint NFT section.
