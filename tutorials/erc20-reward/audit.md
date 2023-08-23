---
title: "Audit Function"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Audit Function
---

In Ethereum, you can confirm the validity and status of a transaction by interacting with an Ethereum node, let's use the Web3.js library to interact directly with an Ethereum node to fetch transaction information.

**1. Update Dependency Imports**

Navigate to the `task/audit.js` file, and update the dependency imports as follows:

```js
require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);
const { namespaceWrapper } = require('../_koiiNode/koiiNode');
```

**2. Task Audit Logic**
Update the default `validateNode()` method with the code below. The `submission_value` The updated `validateNode()` function uses the provided Ethereum transaction hash (`submission_value`) to retrieve the transaction receipt from the Ethereum blockchain using the `web3.eth.getTransactionReceipt()` function. 

```js
  async validateNode(submission_value, round) {
    let vote;
    console.log('SUBMISSION VALUE', submission_value, round);
    try {
      const txReceipt = await web3.eth.getTransactionReceipt(submission_value);

      if (txReceipt) {
        if (txReceipt.status) {
          // For successful flow we return true (Means the audited node submission is correct)
          vote = true;
          console.log('Transaction is successful');
        } else {
          // For unsuccessful flow we return false (Means the audited node submission is incorrect)
          vote = false;
          console.log('Transaction has failed');
        }
      } else {
        vote = false;
        console.log('Transaction not found');
      }
    } catch (error) {
      vote = false;
      console.error('Error fetching transaction status:', error);
    }
    return vote;
  }
```
:::note
Keep in mind that transaction status might take some time to update on the blockchain, especially during network congestion.
:::

For access to the source code of the Koii Task, refer to the [GitHub repository](https://github.com/Giftea/erc20-reward-task).