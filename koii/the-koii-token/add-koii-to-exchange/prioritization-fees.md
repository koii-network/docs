---
title: Prioritization Fees and Compute Unit
description: Instructions for implementing Koii priority fees on an cryptocurrency exchange.
image: img/thumbnail.png
sidebar_label: Prioritization Fees
---

:::warning
Priority fees help avoid dropped transactions and network disruptions. It is **highly** recommended to to implement prioritization fees.
:::

## What is a Prioritization Fee?

It is possible for valid transactions on Koii to be delayed or dropped when demand is high if prioritization fees are not implemented. This is because a transaction may expire before a validator adds it to their block because other transactions have a higher value. It is therefore vital to implement prioritization fees correctly.

Every transaction is charged a base transaction fee of 500,000 Roe. Prioritization fees are an additional fee that can be added on top of this base fee to ensure a transaction is included in a block, helping to ensure deliverability.

Priority fees are priced in micro-Roe per Compute Unit and added to transactions to make them more attractive to validators.

## How much should the Prioritization Fee be?

:::info
The optimal prioritization fee can only be known after the fact, because it is determined dynamically by network activity and the bids placed by all participants.
:::

There is no one way to determine the prioritization fees you wish to charge, but a good first step is to get recent fee amounts by querying the [`getRecentPrioritizationFees`](/develop/rpcapi/http/getrecentprioritizationfees) RPC method. You can use this information along with your pricing strategy to calculate the priority fee.

For example, you might decide to set a target transaction success rate and then adjust fees based on recent pricing.

The `getRecentPrioritizationFees` uses account pubkeys as parameters, gets the minimum prioritization fees for these accounts, and returns the largest fee found. However, if no account is specified, the API will return the lowest fee theoretically needed to have the transaction included. This is usually zero, unless the block is full. This may not always be a useful approximation of the current prioritization fee to use. In order to avoid this, query the RPC endpoint with the accounts that the transaction is going to write-lock.

## How to Implement Prioritization Fees

To add a priority fee, two Compute Budget instructions must be prepended to the transaction. The first sets the compute unit price, and the second sets the compute unit limit.

<!-- #### Info

Here, you can also find a more detailed developer [guide on how to use priority fees](/developers/guides/advanced/how-to-use-priority-fees) which includes more information about implementing priority fees. -->

Create a `setComputeUnitPrice` instruction to add a Prioritization Fee above the Base Transaction Fee (500,000 Roe).

<!-- TODO: These need to be updated to Koii but at the time of the writing our k2-web3.js doesn't include them -->
<!--     // import { ComputeBudgetProgram } from "@solana/web3.js" -->

```js
ComputeBudgetProgram.setComputeUnitPrice({ microRoes: number });
```

To get the prioritization fee, the Compute Unit (CU) budget will be multiplied by the supplied value in micro-Roe. For example, a CU budget of 5M with `microRoes` set to 1000 would set the prioritization fee to 5000 Roe. Added to the base transaction fee of 500,000 Roe, the total fee would be 505,000 Roe.

To set the CU budget, you can use `setComputeUnitLimit`. The `units` value will replace the default compute budget:

<!-- TODO: These need to be updated to Koii but at the time of the writing our k2-web3.js doesn't include them -->
<!-- // import { ComputeBudgetProgram } from "@solana/web3.js" -->

```js
ComputeBudgetProgram.setComputeUnitLimit({ units: number });
```

:::info
In order to minimize prioritization fees, you should set the lowest CU required for execution. To determine the CU needed, you can send the transaction on testnet.
:::

<!-- TODO: These need to be updated to Koii but at the time of the writing our k2-web3.js doesn't include them -->
<!-- // import { ... } from "@solana/web3.js" -->

```js
const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
  // set this to the lowest CU needed
  units: 150,
});

const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
  // set this to the priority fee you want to charge
  microRoes: 10,
});

const transaction = new Transaction()
  .add(modifyComputeUnits)
  .add(addPriorityFee)
  .add(
    SystemProgram.transfer({
      // details of transfer
    }),
  );
```

## Prioritization Fees And Durable Nonces

:::warning
If prioritization fees are not correctly configured in combination with durable nonce transactions, transactions will not be recognized as durable nonce.
:::

When using [durable nonce transactions](/koii/the-koii-token/add-koii-to-exchange/durable-tranasction-nonces) with prioritization fees, the first instruction **must** be the `AdvanceNonceAccount` instruction, ahead of any compute budget instructions.
