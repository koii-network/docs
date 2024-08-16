---
title: "Distribute ERC20 Token"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Distribute ERC20 Token
---

After each round, nodes that effectively executed the task will be rewarded with **10 KTokens** allocated to their Ethereum address, along with a KOII token reward.

The distribution process entails interaction with the KToken smart contract to facilitate KToken distribution. Key steps involve formulating a transaction, signing it, and sending it to the Ethereum network. Successful transaction execution results in a transaction hash.

### Update Dependency Imports

Navigate to the `task/distribution.js` file, and update the dependency imports as follows:

```js title="/task/distribution.js"
require("dotenv").config();
const { namespaceWrapper } = require('@_koii/namespace-wrapper');
const { Web3 } = require("web3");
const tokenContractABI = require("../abi/KToken.json");
const { retrieveFromCid } = require("../helper");
const web3 = new Web3(`https://goerli.infura.io/v3/${process.env.INFURA_ID}`);
const tokenContractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
```

### Distribution Logic

Still, in the `task/distribution.js` file, create a new function `distributeKToken` to handle connecting to the smart contract and distributing the KTokens.

The `distributeKToken` function accepts two parameters:

- `distributionCandidates`: An array containing the public keys of nodes with valid submissions.
- `submissions`: All the submissions associated with the current round.

```js title="/task/distribution.js"
async function distributeKToken(distributionCandidates, submissions) {
  // Loop through each candidate in the distributionCandidates array
  for (const candidate of distributionCandidates) {
    if (candidate in submissions) {
      // Retrieve the submission_value(CID) associated with the candidate
      const submission_value = submissions[candidate].submission_value;
      const output = await retrieveFromCid(submission_value);

      // Extract the nodeEthAddress from the retrieved output
      const nodeEthAddress = output.nodeEthAddress;

      try {
        // Create a new instance of the token contract using tokenContractABI and tokenContractAddress
        const tokenContract = new web3.eth.Contract(
          tokenContractABI,
          tokenContractAddress
        );

        const gasPrice = await web3.eth.getGasPrice();
        const rewardAmount = "10000000000000000000"; // 10 KTOKENS

        // Encode the transfer function call data for the token contract
        const txData = tokenContract.methods
          .transfer(nodeEthAddress, rewardAmount)
          .encodeABI();

        // Get the nonce for the transaction from the contract owner's address
        const nonce = await web3.eth.getTransactionCount(
          process.env.CONTRACT_OWNER_ADDRESS,
          "latest"
        );
        const tx = {
          nonce: nonce,
          gasPrice: gasPrice,
          gasLimit: web3.utils.toHex(300000),
          to: tokenContractAddress,
          data: txData,
        };

        // Sign the transaction using the private key
        const signedTx = await web3.eth.accounts.signTransaction(
          tx,
          privateKey
        );

        // Send the signed transaction and obtain the transaction receipt
        const txReceipt = await web3.eth.sendSignedTransaction(
          signedTx.rawTransaction
        );

        console.log("TRANSACTION HASH:" + txReceipt.transactionHash);
        return txReceipt.transactionHash;
      } catch (err) {
        console.log("ERROR", err);
      }
    }
  }
}
```

Let's break down the code's functionality:

- Loop through each candidate in the `distributionCandidates` array and check if the current candidate is present in the `submissions` object
- The candidate's `submission_value` (CID) is retrieved and its data is extracted to get the node's Ethereum address.
- An instance of the token contract is created using its ABI (Application Binary Interface) and address.
- The current gas price is fetched from the Ethereum network using `web3.eth.getGasPrice()`.
- A reward amount of **10 KTokens** is defined.
- Encoded data for the `transfer` method of the token contract is generated using `.encodeABI()`.
- The current nonce (transaction count) of the contract owner's address is fetched using `web3.eth.getTransactionCount()`.
- A transaction object (`tx`) is created with details like nonce, gas price, gas limit, target address (`to`), and data.
- The transaction is signed using the contract owner's private key.
- The signed transaction is sent to the Ethereum network using `web3.eth.sendSignedTransaction()`.

Finally, call the `distributeKToken()` function within the [`generateDistributionList()`](https://github.com/Giftea/erc20-reward-task/blob/main/task/distribution.js#L178) function, immediately before the `return distributionList` statement.

```js title="/task/distribution.js"
// Distribute ERC20 token to nodes on the distributionList
await distributeKToken(distributionCandidates, submissions);
return distributionList;
// ...Existing Code
```

:::note
Note that transaction status might take some time to update on the blockchain, especially during network congestion.
:::

For access to the source code of the Koii Task, refer to the [GitHub repository](https://github.com/Giftea/erc20-reward-task).
