---
title: Wallet Signatures
description: There are three different wallet options that are available to node operators of Koii who want to be able to sign transactions, store, stake, send and receive Koii Tokens on K2.
image: img/thumbnail.png
sidebar_label: Wallet Signatures
---

# Wallet Signatures

In certain scenarios, tasks may require access to a Koii node's wallet for writing records to a blockchain or directly to K2 as part of managing [Gradual Consensus](/develop/koii-task-101/what-are-tasks/gradual-consensus) flows. Examples include tasks like bridging, minting NFTs, and on-chain asset management.

To enable this functionality, node operators can choose to allow their wallets to be used by tasks, offering a greater reward. However, tasks of this nature must first undergo a [whitelisting process](/develop/write-a-koii-task/task-development-guide/task-development-flow/whitelist-task), ensuring proper code auditing before being promoted to the community.

This documentation provides an overview of utilizing node operators' wallets to sign transactions. There are three wallet types available:

**1. Main KOII Wallet**: The primary wallet for node operators responsible for funding other wallets with KOII tokens. Its signature key is necessary for paying transaction fees in Koii tasks.

**2. Staking Wallet**: Specifically designed for staking on Koii tasks. Node operators create a staking wallet and fund it with tokens from their main wallet. Tokens held in the staking wallet can be used for staking on Koii tasks.

**3. Distribution Wallet**: Required when a node needs to submit a distribution list to K2. Nodes create and fund the distribution wallet using their main wallet to benefit from rent exemption.

# How to Sign Transactions with the Main Wallet?

There are two methods provided by the `namespaceWrapper` for signing transactions:

### 1. sendAndConfirmTransactionWrapper()

This method signs and sends a transaction to K2. It accepts two parameters:

- **`transaction`**: _Transaction_ — The transaction to be signed.
- **`signers`**: _Keypair[]_ — Array of wallets involved in the transaction.

Example:

```js
import { namespaceWrapper } from "./namespaceWrapper";
import { Keypair, Transaction, SystemProgram, PublicKey } from "@_koi/web3.js";

const uploadAccount = new Keypair();

const signTransaction = async () => {
  const createTransaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: mainSystemAccountPubkey,,
      newAccountPubkey: uploadAccount.publicKey,
      lamports: 1000000,
      space: 5242880,
      programId: new PublicKey("32xatJZj7XLfKueB5UUiho5Rhx5iQe4Ryp4ckrqFpCQS"),
    })
  );

  const signature = await namespaceWrapper.sendAndConfirmTransactionWrapper(
    createTransaction,
    [uploadAccount]
  );
};
```

### 2. payloadSigning()

This method signs a payload and returns a signature. It does not involve any interaction with K2.

Example:

```js
const message = "Hello World!";

const signature = await namespaceWrapper.payloadSigning(message);
```
