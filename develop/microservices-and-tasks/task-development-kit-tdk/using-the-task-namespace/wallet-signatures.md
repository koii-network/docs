---
title: Wallet Signatures
description: There are three different wallet options that are available to node operators of Koii who want to be able to sign transactions, store, stake, send and receive Koii Tokens on K2.
image: static/img/thumbnail.png
sidebar_label: Wallet Signatures
---

# Wallet Signatures

There are three different wallet options that are available to node operators of Koii who want to be able to sign transactions, store, stake, send and receive Koii Tokens on K2. The three wallet options are:

### 1. Main KOII Wallet

As suggested by the name, this is a node operator's main wallet; it is responsible for funding the other wallets with KOII tokens and its signature key is necessary to pay transaction fees in a Koii Task.

### 2. Staking Wallet&#x20;

The primary purpose of this wallet is to stake on Koii tasks. Node operators who wish to run a particular task have to create a staking wallet and fund the staking wallet with their main wallet; tokens in the staking wallet can in turn be used to stake on a Koii task.

### 3. Distribution Wallet&#x20;

The distribution wallet is required if a node needs to submit a distribution list to K2. The node creates and funds the distribution wallet from the main wallet so there can be a rent exemption.

## How Can the Main Wallet Sign Transactions ?

Yes! as you probably already guessed, the Namespace wrapper offers a method that injects the main system wallet as the first signer for making transaction fees payments. The `sendAndConfirmTransactionWrapper` method is in charge of this.

### Wallet Security

This might seem a bit odd - why would a Koii node allow a task to use it's wallet? <br />
Well, in many cases, a task will need to write records to a blockchain, or to K2 directly (all tasks do this to manage [Gradual Consensus](../../what-are-tasks/gradual-consensus) flows). Some examples might include bridging, minting NFTs, or other on-chain asset management.&#x20;

In these cases, the task operator can opt into allowing their wallet to be used by a task directly, in exchange for a greater reward. Most tasks of this nature must follow the [whitelisting process](../../task-development-guide/task-development-flow/whitelist-task), ensuring that the code is properly audited before a task is promoted to the community.

### sendAndConfirmTransactionWrapper Method

The `sendAndConfirmTransactionWrapper` takes in two parameters:

- `transaction` : Endpoint path to append to `namespace`
- `singers`: Other wallets signatures

```javascript
  async sendAndConfirmTransactionWrapper(
    transaction: any,
    signers: any[],
  ): Promise<string> {
    signers = signers.map((e) =>
      Keypair.fromSecretKey(
        Uint8Array.from(Object.values(e._keypair.secretKey)),
      ),
    );
    const response = await sendAndConfirmTransaction(
      this.connection,
      Transaction.from(transaction.data),
      [this.#mainSystemAccount, ...signers],
    );
    return response;
  }
```

Example:

```javascript
const result = await sendAndConfirmTransactionWrapper(
  this.connection,
  new Transaction().add(instruction),
  [
    this.#mainSystemAccount,
    this.submitterAccountKeyPair,
    this.distributionAccountKeyPair,
  ]
);
```
