---
title: "Creating an ERC20 Token Smart Contract on Ethereum"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Smart Contract
---

The Token Smart Contract is a crucial component in the world of blockchain, facilitating the creation and management of tokens on the Ethereum network. In this guide, we will walk you through the process of creating your own ERC20 token using the Solidity programming language, with the assistance of the Remix IDE.

# Getting Started

**1. Setting Up the Workspace**

To begin, access the Remix IDE by visiting [Remix Ethereum IDE](https://remix.ethereum.org/). Once there, navigate to the left sidebar and locate "default_workspace." Create a new workspace by selecting this option. To streamline the process, choose the **"ERC20"** template under *OpenZeppelin* and check the "Mintable" box, as depicted in the image below:

![Remix IDE](/img/develop/erc20/ERC.png)

Upon completing these steps, you will find the smart contract you generated at `/contracts/MyToken.sol`.

![Token Smart Contract](/img/develop/erc20/token.png)

**2. ERC20 Token Configuration**

Enhance the functionality of the default smart contract by updating the constructor with the following code snippet:

```solidity
constructor() ERC20("KToken", "KTK") {
    _mint(msg.sender, 100000 * 10 ** decimals());
}
```

**3. Compiling the Smart Contract**

Efficiently compile your smart contract by clicking the Solidity compiler icon in the left panel. Initiate the compilation process by clicking the **"Compile MyToken.sol"** button.

![Compile](/img/develop/erc20/compile.png)

**4. Deploying the Contract**

Click the Deploy icon on the left panel, inject your Ethereum browser wallet, and click the "Deploy" button to deploy the contract. You'll be redirected to sign the transaction with your Ethereum browser wallet.

![Deploy](/img/develop/erc20/deploy.png)

In this guide, we have explored the process of creating an ERC20 token smart contract using the Solidity programming language and Remix IDE.
