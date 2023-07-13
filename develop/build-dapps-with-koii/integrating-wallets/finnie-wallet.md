---
title: Finnie Wallet
description: Integrate your dApp with Finnie wallet
image: img/thumbnail.png
sidebar_label: Finnie Wallet
---

import Description from "@site/src/components/description";

# Finnie Wallet

![Banner](<./img/Finnie_Wallet_(1).png>)

<Description
  text="Learn how to Integrate the Finnie Wallet in your dApp"
/>

# Overview

[Finnie](/develop/finnie-for-devs/welcome-to-finnie) is a browser extension that serves as a cryptocurrency wallet connecting to the K2 blockchain. It is a cross-chain wallet supporting K2, Ethereum, and Arweave networks. Users can also mine Koii's native token (KOII) by tracking attention on their content.

In our dApp, we will have a simple React user interface with a button asking the user to connect their Finnie wallet. If they don't have Finnie installed, they'd be prompted to install Finnie.

# Prerequisites

- Basic knowledge of [React.js](https://react.dev/)
- Download the [Finnie](https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj) browser extension
- [Node](https://nodejs.org/en/), NPM, or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

# Getting Started

We have prepared a starter branch for this project, copy and run the command below to clone the starter branch:

```
git clone --branch starter https://github.com/koii-network/finnie-test-dapp.git
```

## Custom Finnie Hook

Finnie injects a global K2 API into websites users visit at `window.k2`, allowing the websites to read and request user's blockchain data.

Navigate to `/src/hooks/useFinnie.js` and create a custom Finnie hook `useFinnie()` by following these steps:

1. The `window?.k2.connect()` method will connect a website to Finnie, if Finnie is present as a browser extension.

  Update the `connect` function with the code below:

  ```jsx title="/src/hooks/useFinnie.js"
  // Connect to Finnie
  const connect = async () => {
    if (window?.k2) {
      if (window.k2.isConnected) {
        const publicKey = window?.k2?.publicKey;
        return publicKey.toString();
      } else {
        return await window?.k2
          .connect()
          .then((pubKey) => {
            setFinnieLoaded(true);
            return pubKey.toString();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    return Promise.reject(
      "Finnie is detected but K2 features are missing - is your Finnie up to date? "
    );
  };
  ```

2. The `window?.k2.disconnect()` method will disconnect a website from Finnie.

  Update the `disconnect` function with the code below:

  ```jsx title="/src/hooks/useFinnie.js"
  // Disconnect from Finnie
  const disconnect = async () => {
    if (finnieLoaded) {
      window.k2.disconnect();
    }
  };
  ```

3. `window.k2.publicKey` will return the public key of a connected Finnie account and `window.k2.signAndSendTransaction()` will sign and send a transaction.

  Update the `getPublicKey` and `signAndSendTransaction` functions:

  ```jsx title="/src/hooks/useFinnie.js"
  // Fetch user's public address
  const getPublicKey = () => {
    if (window.k2.isConnected) return window.k2.publicKey;
    return null;
  };

  // Sign and send a transaction
  const signAndSendTransaction = (transaction) => {
    return window.k2.signAndSendTransaction(transaction);
  };
  ```

## Connect Wallet Logic

Write the logic for a user to connect their wallet and send **0.1 KOII** to an address:

1. Open `/src/ConnectWallet.js` and update the `handleConnect()` and `handleDisconnect()` functions:

  ```jsx title="/src/ConnectWallet.js"
  const handleConnect = async () => {
    if (finnieLoaded) {
      try {
        const publicKey = await connect();
        if (publicKey) setConnected(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    setConnected(false);
  };
  ```

  In the above code, the `handleConnect()` function calls `connect()` from the `useFinnie()` hook, if the user approves the connect request, it will resolve the returned Promise with the PublicKey of the connected wallet. Also, the `connected` state will be used to disable/enable `Disconnect` and `Send` button.

  `handleDisconnect()` will simply disconnect the current page from Finnie.

2. Update the `handleSend()` function:

  ```jsx title="/src/ConnectWallet.js"
  const handleSend = async () => {
    const connection = new Connection(clusterApiUrl("devnet")); // Connect to devnet
    const blockHash = (await connection.getRecentBlockhash()).blockHash; // Get block hash
    const feePayer = getPublicKey(); // Get user's public key

    const transaction = new Transaction(); // Initialize transaction
    transaction.recentBlockhash = blockHash; // Set block hash
    transaction.feePayer = feePayer; // Set user as fee payer

    const recipient = '7x8tP5ipyqPfrRSXoxgGz6EzfTe3S84J3WUvJwbTwgnY';

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: getPublicKey(),
        toPubkey: new PublicKey(recipient),
        lamports: 100000000, // 0.1 KOII
      })
    );

    const signature = await signAndSendTransaction(transaction); // Sign transaction and get signature
    setTransactionHash(signature);
  };
  ```

In the above code block:

- A new `Connection` to the cluster was created using the `clusterApiUrl()` method from the **'@\_koi/web3.js'** library. The argument 'devnet' indicates that it is connecting to a development network.

- The recent block hash is retrieved from the network using `connection.getRecentBlockhash()`.

- The `getPublicKey()` function is called to retrieve the public key of the fee payer. The `feePayer` variable is assigned this value.

- A new `Transaction` object is created to build the `transaction` that will be sent to the network.

- The `recentBlockhash` property of the `transaction` is set to the block hash obtained in step 2.

- The `feePayer` property of the `transaction` is set to the public key of the fee payer obtained in step 3.

- The `recipient` variable is assigned the value 'example_address', which represents the address of the recipient of the transaction.

- The `transaction.add()` method is called to add an instruction to the `transaction`. In this case, it is a `SystemProgram.transfer()` instruction, which transfers a certain amount of KOII (lamports) from the `fromPubkey` (fee payer) to the `toPubkey` (recipient). The lamport value used here is 100,000,000, which represents **0.1 KOII**.

- Finally, the `signAndSendTransaction()` function is called to sign and send the transaction to the network. The returned value, signature, represents the unique identifier of the transaction on the network.

# Conclusion

In this tutorial, we demonstrated how to integrate the Finnie wallet in a React application, we built a website were users can connect and disconnect their Finnie wallet and also send 0.1 KOII to another account.

You can find the source code of the project [here](https://github.com/koii-network/finnie-test-dapp).

:::info

If you encounter any difficulties, feel free to contact us at [Koii support](https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg) or chat with us at [Discord](https://discord.com/invite/koii).

:::
