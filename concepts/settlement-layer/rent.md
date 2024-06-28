---
title: What is Rent?
description: Fast transaction settlement and timestamps.
image: img/thumbnail.png
sidebar_label: Rent
---

import Tooltip from "@site/src/components/tooltip";

Rent is the fee paid by accounts and programs to store their data on K2.

As the blockchain cluster needs to actively maintain data to process any upcoming transactions, all K2 Accounts and Programs must keep their [balances](https://docs.solana.com/developing/intro/rent) high enough to qualify for rent exemption and to stay on the K2 blockchain.

## What is Rent Exemption?

An account or program executable with at least two years' worth of rent, is regarded as rent-exempt. Every time an account's balance is decreased, this is checked, and transactions that would bring the balance down to the required minimum will be rejected.

The runtime requires that program executable accounts be rent-exempt to prevent them from being deleted. This procedure is known as the Garbage Collection.

## How to Estimate Rent?

Rent fee can be estimated using the `koii rent` <Tooltip text="Koii CLI"/> subcommand:

```sh
koii rent <DATA_LENGTH_OR_MONIKER> --config <FILEPATH>
```

### Example usage

```sh
koii rent 15000
```

### Output

```sh
Rent per byte-year: 0.00000348 KOII
Rent per epoch: 0.000072069 KOII
Rent-exempt minimum: 0.10529088 KOII
```
