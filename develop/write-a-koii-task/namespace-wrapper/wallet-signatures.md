---
title: Wallet Signatures
description: There are three different wallet options available to node operators of Koii who want to sign transactions, store, stake, send, and receive Koii Tokens on K2.
image: img/thumbnail.png
sidebar_label: Wallet Signatures
---

import Tooltip from "@site/src/components/tooltip";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Wallet Signatures

In certain scenarios, tasks may require access to a Koii node's wallet for writing records to a blockchain or directly to K2 as part of managing [Gradual Consensus](/concepts/what-are-tasks/what-are-tasks/gradual-consensus) flows. Examples include tasks like bridging, minting NFTs, and on-chain asset management.

To enable this functionality, node operators can choose to allow their wallets to be used by tasks, offering a greater reward. However, tasks of this nature must first undergo a <Tooltip text="whitelisting process"/>, ensuring proper code auditing before being promoted to the community.

This documentation provides an overview of utilizing node operators' wallets to sign transactions. There are three wallet types available:

**1. Main KOII Wallet**: The primary wallet for node operators responsible for funding other wallets with KOII tokens. Its signature key is necessary for paying transaction fees in Koii tasks.

**2. Staking Wallet**: Specifically designed for staking on Koii tasks. Node operators create a staking wallet and fund it with tokens from their main wallet. Tokens held in the staking wallet can be used for staking on Koii tasks.

**3. Distribution Wallet**: Required when a node needs to submit a distribution list to K2. Nodes create and fund the distribution wallet using their main wallet.

## How to Sign Transactions with the Main Wallet?

There are two methods provided by the `namespaceWrapper` for signing transactions:

### 1. sendAndConfirmTransactionWrapper()

Transactions are groups of instructions that are accompanied by signatures. To interact with programs on the K2 network, it is necessary to **create** and **sign** transactions before sending and confirming them on the Koii network.

:::note
The main feature of the wrapper is that it manages the connection process seamlessly, eliminating the need for manual connection handling.
:::

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";
    import {
      Transaction,
      SystemProgram,
      Keypair,
      PublicKey,
    } from '@_koii/web3.js';

    // Function to create a KOII transaction
    async function createKoiiTransaction(sender: Keypair, recipient: PublicKey): Promise<Transaction> {
      // Create a new transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: sender.publicKey,
          toPubkey: recipient,
          lamports: 100000000, // Amount to send (0.1 KOII)
        })
      );

      return transaction;
    }

    // Main function to execute the KOII transaction
    async function main() {
      const sender = Keypair.generate(); // Replace with a valid KOII keypair
      const recipient = new PublicKey('6D9y3T7c6PjFn4DapV7BFbiPSfshgLSLJmfYi7xW5hWa'); // Replace with a KOII wallet

      // Create and send the transaction
      const transaction = await createKoiiTransaction(sender, recipient);
      const result = await namespaceWrapper.sendAndConfirmTransactionWrapper(transaction, [
        sender,
      ])
      console.log(result)
      // Output: "4Gf4kP3Qs4GpFASdeEweJnzR..." (Transaction signature as a string)
    }

    main().catch(console.error);
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");
    const {
      Transaction,
      SystemProgram,
      Keypair,
      PublicKey,
    } = require("@_koii/web3.js");

    // Function to create a KOII transaction
    async function createKoiiTransaction(sender, recipient) {
      // Create a new transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: sender.publicKey,
          toPubkey: recipient,
          lamports: 100000000, // Amount to send (0.1 KOII)
        })
      );

      return transaction;
    }

    // Main function to execute the KOII transaction
    async function main() {
      const sender = Keypair.generate(); // Replace with a valid KOII keypair
      const recipient = new PublicKey("6D9y3T7c6PjFn4DapV7BFbiPSfshgLSLJmfYi7xW5hWa"); // Replace with a KOII wallet

      try {
        // Create and send the transaction
        const transaction = await createKoiiTransaction(sender, recipient);
        const result = await namespaceWrapper.sendAndConfirmTransactionWrapper(transaction, [
          sender,
        ]);
        console.log(result);
        // Output: "4Gf4kP3Qs4GpFASdeEweJnzR..." (Transaction signature as a string)
      } catch (error) {
        console.error("Transaction failed:", error);
      }
    }

    main().catch(console.error);
    ```

  </TabItem>
</Tabs>

Example of signing a `createAccount` transaction:

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";
    import {
      Transaction,
      SystemProgram,
      Keypair,
      PublicKey,
    } from '@_koii/web3.js';

    const uploadAccount: Keypair = new Keypair();

    const createTransaction: Transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: mainSystemAccountPubkey as PublicKey, // Sender account
        newAccountPubkey: uploadAccount.publicKey, // Public key of the created account
        lamports: 1000000, // Amount to be transferred
        programId: new PublicKey("32xatJZj7XLfKueB5UUiho5Rhx5iQe4Ryp4ckrqFpCQS"), // PublicKey of the program to assign as the owner of the created account
        space: 5242880, // Amount of space in bytes to allocate to the created account
      })
    );

    // Sign and send transaction to K2
    const signature: string = await namespaceWrapper.sendAndConfirmTransactionWrapper(
      createTransaction,
      [uploadAccount] // mainSystemAccount will be injected as the first parameter here
    );
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const uploadAccount = new Keypair();
    const createTransaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: mainSystemAccountPubkey, // Sender account
        newAccountPubkey: uploadAccount.publicKey, // Public key of the created account
        lamports: 1000000, // Amount to be transfered
        programId: new PublicKey("32xatJZj7XLfKueB5UUiho5Rhx5iQe4Ryp4ckrqFpCQS"), // Publickey of the program to assign as the owner of the created account
        space: 5242880, // Amount of space in bytes to allocate to the created account
      }),
    );

    // Sign and send transaction to K2
    const signature = await namespaceWrapper.sendAndConfirmTransactionWrapper(
      createTransaction,
      [uploadAccount], // mainSystemAccount will be injected as the first parameter here
    );
    ```

  </TabItem>
</Tabs>

### 2. payloadSigning()

This method signs a payload for blockchain transactions using the main wallet's public key.

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    type Payload = {
      data: string;
      timestamp: number;
      nonce: number;
    };

    const payload: Payload = {
      data: 'Hello World',
      timestamp: Date.now(),
      nonce: Math.random(),
    };

    try {
      const signedPayload: string = await namespaceWrapper.payloadSigning(payload);
      console.log(signedPayload);
    } catch (error) {
      console.error(error);
    }

    // Error case (invalid payload)
    try {
      const signedPayload = await namespaceWrapper.payloadSigning(undefined);
    } catch (error) {
      console.error(error);
    }

    // Error case (missing key)
    try {
      const signedPayload = await namespaceWrapper.payloadSigning({} as Payload);
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
      const payload = {
      data: 'Hello World',
      timestamp: Date.now(),
      nonce: Math.random(),
    };

    try {
      const signedPayload = await namespaceWrapper.payloadSigning(payload);
      console.log(signedPayload);
    } catch (error) {
      console.error(error);
    }

    // Error case (invalid payload)
    try {
      const signedPayload = await namespaceWrapper.payloadSigning(undefined);
    } catch (error) {
      console.error(error);
    }

    // Error case (missing key)
    try {
      const signedPayload = await namespaceWrapper.payloadSigning({});
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>
</Tabs>

### 3. verifySignature()

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    const signedMessage: string = '2J7PRqTxj1NVnYzgx2KBGz4KRJHEwzT8GJkHxb6J1q9B4K8rYt5JvKq7rz3vXqH...';
    const pubKey: string = 'koiiX8UPJY6gCMqD1RfNoQhWiJzyPwXX2Cj7vqWe9mV';

    try {
      const result: any = await namespaceWrapper.verifySignature(
        signedMessage,
        'koiiX8UPJY6gCMqD1RfNoQhWiJzyPwXX2Cj7vqWe9mV',
      );

      if (!result) {
        console.error('Signature verification failed.');
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }

    // Error case (invalid signature)
    try {
      const invalidResult: any = await namespaceWrapper.verifySignature(
        'invalidSignature',
        pubKey,
      );
      console.log(invalidResult);
    } catch (error) {
      console.error(error);
    }

    // Error case (mismatched public key)
    try {
      const mismatchResult: any = await namespaceWrapper.verifySignature(
        signedMessage,
        pubKey,
      );
      console.log(mismatchResult);
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const signedMessage = '2J7PRqTxj1NVnYzgx2KBGz4KRJHEwzT8GJkHxb6J1q9B4K8rYt5JvKq7rz3vXqH...';
    const pubKey = 'koiiX8UPJY6gCMqD1RfNoQhWiJzyPwXX2Cj7vqWe9mV';

    try {
      const result = await namespaceWrapper.verifySignature(
        signedMessage,
        pubKey,
      );

      if (!result) {
        console.error('Signature verification failed.');
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }

    // Error case (invalid signature)
    try {
      const invalidResult = await namespaceWrapper.verifySignature(
        'invalidSignature',
        pubKey,
      );
      console.log(invalidResult);
    } catch (error) {
      console.error(error);
    }

    // Error case (mismatched public key)
    try {
      const mismatchResult = await namespaceWrapper.verifySignature(
        signedMessage,
        pubKey,
      );
      console.log(mismatchResult);
    } catch (error) {
      console.error(error);
    }
    ```

  </TabItem>
</Tabs>

## Additional Useful Functions

### sendTransaction

Sends a transaction between accounts

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    try {
      const txSignature = await namespaceWrapper.sendTransaction(
        new PublicKey('serviceNode123...'), // sender's public key
        new PublicKey('recipient456...'), // receiver's public key
        100,
      );
      console.log(`Transaction successful! Signature: ${txSignature}`);
    } catch (error) {
      console.error(`Transaction failed: ${error.message}`);
    }
    ```
  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    try {
      const senderPubKey = new PublicKey('serviceNode123...'); 
      const recipientPubKey = new PublicKey('recipient456...');

      const txSignature = await namespaceWrapper.sendTransaction(senderPubKey, recipientPubKey, 100);
      console.log(`Transaction successful! Signature: ${txSignature}`);
    } catch (error) {
      console.error(`Transaction failed: ${error.message}`);
    }
    ```

  </TabItem>
</Tabs>

### getProgramAccounts

Retrieves all program accounts associated with the task

```typescript
// Retrieves all program accounts.
const accounts = await namespaceWrapper.getProgramAccounts();
console.log(accounts);
// Output:
Output: Array<{
  pubkey: PublicKey; // Account public key
  account: AccountInfo<Buffer>; // Account information
}>;
```

### claimReward

Claims rewards for a specific round

```typescript
// Successful claim
try {
  const stakePotAccount = new PublicKey("YourStakePotAccountPublicKeyHere");
  const beneficiaryAccount = new PublicKey(
    "YourBeneficiaryAccountPublicKeyHere",
  );
  const claimerKeypair = Keypair.fromSecretKey(
    new Uint8Array([...yourSecretKeyArray]),
  );

  const txSignature = await namespaceWrapper.claimReward(
    stakePotAccount,
    beneficiaryAccount,
    claimerKeypair,
  );
  console.log(txSignature); // Transaction signature
} catch (error) {
  console.error(error);
}
```

### stakeOnChain

Stakes tokens for a task.

```Typescript
try {
  const taskStateInfoPublicKey = new PublicKey('YourTaskStateInfoPublicKeyHere'); // The public key associated with the task
  const stakingAccKeypair = Keypair.generate(); // Replace with the actual staking account keypair
  const stakePotAccount = new PublicKey('YourStakePotAccountPublicKeyHere'); // The stake pot account public key
  const stakeAmount = 100; // Example stake amount in KOII (replace with your desired amount)

  // Call the function
  const transactionSignature = await stakeOnChain(
    taskStateInfoPublicKey,
    stakingAccKeypair,
    stakePotAccount,
    stakeAmount
  );

  console.log('Stake Successful! Transaction Signature:', transactionSignature);
} catch (error) {
  console.error('Error staking on-chain:', error);
}
```
