---
title: Wallet Signatures
description: There are three different wallet options that are available to node operators of Koii who want to be able to sign transactions, store, stake, send and receive Koii Tokens on K2.
image: img/thumbnail.png
sidebar_label: Wallet Signatures
---

import Tooltip from "@site/src/components/tooltip";

# Wallet Signatures

In certain scenarios, tasks may require access to a Koii node's wallet for writing records to a blockchain or directly to K2 as part of managing [Gradual Consensus](/concepts/gradual-consensus/runtime-flow) flows. Examples include tasks like bridging, minting NFTs, and on-chain asset management.

To enable this functionality, node operators can choose to allow their wallets to be used by tasks, offering a greater reward. However, tasks of this nature must first undergo a <Tooltip text="whitelisting process"/>, ensuring proper code auditing before being promoted to the community.

This documentation provides an overview of utilizing node operators' wallets to sign transactions. There are three wallet types available:

**1. Main KOII Wallet**: The primary wallet for node operators responsible for funding other wallets with KOII tokens. Its signature key is necessary for paying transaction fees in Koii tasks.

**2. Staking Wallet**: Specifically designed for staking on Koii tasks. Node operators create a staking wallet and fund it with tokens from their main wallet. Tokens held in the staking wallet can be used for staking on Koii tasks.

**3. Distribution Wallet**: Required when a node needs to submit a distribution list to K2. Nodes create and fund the distribution wallet using their main wallet.

# How to Sign Transactions with the Main Wallet?

There are two methods provided by the `namespaceWrapper` for signing transactions:

### 1. sendAndConfirmTransactionWrapper()

Transactions are groups of instructions that are accompanied by signatures. To interact with programs on the K2 network, it is necessary to create, **sign**, and send transactions to the network.

This method signs and sends a transaction to K2. It accepts two parameters:

- **`transaction`**: _Transaction_ — The transaction to be signed.
- **`signers`**: _Keypair[]_ — Array of wallets involved in the transaction.

Example of signing a transfer transaction:

```js
import { namespaceWrapper } from "./namespaceWrapper";
import { Keypair, Transaction, SystemProgram, PublicKey } from "@_koi/web3.js";

const fromKeypair = Keypair.generate();
const toKeypair = Keypair.generate();
const transaction = new Transaction();

// Create a transaction
// A transfer transaction sends KOII from one account to another
const transferTransaction = transaction.add(
  SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey, // Sender account
    toPubkey: toKeypair.publicKey, // Recipient account
    lamports: 100000000, // Amount to send (0.1 KOII)
  })
);

// Sign and send transaction to K2
const signature = await namespaceWrapper.sendAndConfirmTransactionWrapper(
  transferTransaction,
  [] // // mainSystemAccount will be injected here
);
```

Another example of transaction is the `createAccount` transaction which generates a transaction instruction that creates a new account.

Example of signing a `createAccount` transaction:

```js
const uploadAccount = new Keypair();

const createTransaction = new Transaction().add(
  SystemProgram.createAccount({
    fromPubkey: mainSystemAccountPubkey, // Sender account
    newAccountPubkey: uploadAccount.publicKey, // Public key of the created account
    lamports: 1000000, // Amount to be transfered
    programId: new PublicKey("32xatJZj7XLfKueB5UUiho5Rhx5iQe4Ryp4ckrqFpCQS"), // Publickey of the program to assign as the owner of the created account
    space: 5242880, // Amount of space in bytes to allocate to the created account
  })
);

// Sign and send transaction to K2
const signature = await namespaceWrapper.sendAndConfirmTransactionWrapper(
  createTransaction,
  [uploadAccount] // mainSystemAccount will be injected as the first parameter here
);
```

### 2. payloadSigning()

This method signs a payload and returns a signature. It does not involve any interaction with K2.

Example:

```js
const message = "Hello World!";

// Sign payload
const signature = await namespaceWrapper.payloadSigning(message);
```

The signature can be verified using the `verifySignature()` method:

```js
const hash = await namespaceWrapper.verifySignature(signature, publicKey);
```
