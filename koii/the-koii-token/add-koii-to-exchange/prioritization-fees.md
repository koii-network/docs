---
title: Prioritization Fees and Compute Unit
description: WRITE THIS
image: img/thumbnail.png
sidebar_label: Prioritization Fees
---
<!-- TODO: write description -->

<!-- TODO: NO DOCS ON PRIORITIZATION FEES -->
In periods of high demand, it’s possible for a transaction to expire before a validator has included such transactions in their block because they chose other transactions with higher economic value. Valid Transactions on Solana may be delayed or dropped if Prioritization Fees are not implemented properly.

<!-- TODO: DOESN'T SEEM TO BE ANYTHING ON BASE TRANSACTION FEES -->
[Prioritization Fees](/docs/terminology#prioritization-fee) are additional fees that can be added on top of the [base Transaction Fee](/docs/core/fees#transaction-fees) to ensure transaction inclusion within blocks and in these situations and help ensure deliverability.

These priority fees are added to transaction by adding a special Compute Budget instruction that sets the desired priority fee to be paid.

#### Important Note

Failure to implement these instructions may result in network disruptions and dropped transactions. It is strongly recommended that every exchange supporting Solana make use of priority fees to avoid disruption.

## What is a Prioritization Fee?

Prioritization Fees are priced in micro-roe per Compute Unit (e.g. small amounts of SOL) prepended to transactions to make them economically compelling for validator nodes to include within blocks on the network.

## How much should the Prioritization Fee be?

The method for setting your prioritization fee should involve querying recent prioritization fees to set a fee which is likely to be compelling for the network. Using the [`getRecentPrioritizationFees`](/develop/rpcapi/http/getrecentprioritizationfees) RPC method, you can query for the prioritization fees required to land a transaction in a recent block.

Pricing strategy for these priority fees will vary based on your use case. There is no canonical way to do so. One strategy for setting your Prioritization Fees might be to calculate your transaction success rate and then increase your Prioritization Fee against a query to the recent transaction fees API and adjust accordingly. Pricing for Prioritization Fees will be dynamic based on the activity on the network and bids placed by other participants, only knowable after the fact.

One challenge with using the `getRecentPrioritizationFees` API call is that it may only return the lowest fee for each block. This will often be zero, which is not a fully useful approximation of what Prioritization Fee to use in order to avoid being rejected by validator nodes.

The `getRecentPrioritizationFees` API takes accounts’ pubkeys as parameters, and then returns the highest of the minimum prioritization fees for these accounts. When no account is specified, the API will return the lowest fee to land to block, which is usually zero (unless the block is full).

Exchanges and applications should query the RPC endpoint with the accounts that a transaction is going to write-lock. The RPC endpoint will return the `max(account_1_min_fee, account_2_min_fee, ... account_n_min_fee)`, which should be the base point for the user to set the prioritization fee for that transaction.

<!-- TODO: DOES THIS APPLY TO US? -->
There are different approaches to setting Prioritization Fees and some [third-party APIs](https://docs.helius.dev/solana-rpc-nodes/alpha-priority-fee-api) are available to determine the best fee to apply. Given the dynamic nature of the network, there will not be a “perfect” way to go about pricing your Prioritization fees and careful analysis should be applied before choosing a path forward.

## How to Implement Prioritization Fees

Adding priority fees on a transaction consists of prepending two Compute Budget instructions on a given transaction:

- one to set the compute unit price, and
- another to set the compute unit limit

#### Info

Here, you can also find a more detailed developer [guide on how to use priority fees](/developers/guides/advanced/how-to-use-priority-fees) which includes more information about implementing priority fees.

Create a `setComputeUnitPrice` instruction to add a Prioritization Fee above the Base Transaction Fee (5,000 roe).

```js
    // import { ComputeBudgetProgram } from "@solana/web3.js"
    ComputeBudgetProgram.setComputeUnitPrice({ microroe: number });
```

The value provided in micro-roe will be multiplied by the Compute Unit (CU) budget to determine the Prioritization Fee in roe. For example, if your CU budget is 1M CU, and you add `1 microLamport/CU`, the Prioritization Fee will be 1 lamport (1M \* 0. 000001). The total fee will then be 5001 roe.

To set a new compute unit budget for the transaction, create a `setComputeUnitLimit` instruction

```js
    // import { ComputeBudgetProgram } from "@solana/web3.js"
    ComputeBudgetProgram.setComputeUnitLimit({ units: number });
```

The `units` value provided will replace the Solana runtime's default compute budget value.

Set the lowest CU required for the transaction

Transactions should request the minimum amount of compute units (CU) required for execution to maximize throughput and minimize overall fees.

You can get the CU consumed by a transaction by sending the transaction on a different Solana cluster, like devnet. For example, a [simple token transfer](https://explorer.solana.com/tx/5scDyuiiEbLxjLUww3APE9X7i8LE3H63unzonUwMG7s2htpoAGG17sgRsNAhR1zVs6NQAnZeRVemVbkAct5myi17) takes 300 CU.

```js
    // import { ... } from "@solana/web3.js"

    const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
      // note: set this to be the lowest actual CU consumed by the transaction
      units: 300,
    });

    const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
      microroe: 1,
    });

    const transaction = new Transaction()
      .add(modifyComputeUnits)
      .add(addPriorityFee)
      .add(
        SystemProgram.transfer({
          fromPubkey: payer.publicKey,
          toPubkey: toAccount,
          roe: 10000000,
        }),
      );
```

## Prioritization Fees And Durable Nonces
<!-- TODO: WHAT IS A NONCE ACCOUNT AND WHAT IS A DURABLE NONCE? -->
If your setup uses Durable Nonce Transactions, it is important to properly implement Prioritization Fees in combination with Durable Transaction Nonces to ensure successful transactions. Failure to do so will cause intended Durable Nonce transactions not to be detected as such.

If you ARE using Durable Transaction Nonces, the `AdvanceNonceAccount` instruction MUST be specified FIRST in the instructions list, even when the compute budget instructions are used to specify priority fees.

You can find a specific code example [using durable nonces and priority fees together](/developers/guides/advanced/how-to-use-priority-fees#special-considerations) in this developer guide.
