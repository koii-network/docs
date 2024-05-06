---
title: What is Rent?
description: Fast transaction settlement and timestamps.
image: img/thumbnail.png
sidebar_label: Rent
---

import Tooltip from "@site/src/components/tooltip";

Rent is the fee paid by accounts and programs to store their data on K2.

As the blockchain cluster needs to actively maintain data to process any upcoming transactions, all K2 Accounts and Programs must keep their [balances](https://docs.solana.com/developing/intro/rent) high enough to qualify for rent exemption and to stay on the K2 blockchain.

# What is Rent Exemption?

An account or program executable with at least two years' worth of rent, is regarded as rent-exempt. Every time an account's balance is decreased, this is checked, and transactions that would bring the balance down to the required minimum will be rejected.

The runtime requires that program executable accounts be rent-exempt to prevent them from being deleted. This procedure is known as the Garbage Collection.

# How to Estimate Rent?

Rent fee can be estimated using the `koii rent` <Tooltip text="Koii CLI"/> subcommand.

```
koii-rent
Calculate rent-exempt-minimum value for a given account data field length.

USAGE:
    koii rent [FLAGS] [OPTIONS] <DATA_LENGTH_OR_MONIKER>

FLAGS:
    -h, --help                           Prints help information
        --roe                       Display rent in roe instead of KOII
        --no-address-labels              Do not use address labels in the output
        --skip-seed-phrase-validation    Skip validation of seed phrases. Use this if your phrase does not use the BIP39
                                         official English word list
        --use-quic                       Use QUIC when sending transactions.
        --use-udp                        Use UDP when sending transactions.
    -V, --version                        Prints version information
    -v, --verbose                        Show additional information

OPTIONS:
        --commitment <COMMITMENT_LEVEL>    Return information at the selected commitment level [possible values:
                                           processed, confirmed, finalized]
    -C, --config <FILEPATH>                Configuration file to use [default: ~/.config/koii/cli/config.yml]
    -u, --url <URL_OR_MONIKER>             URL for Koii's JSON RPC or moniker (or their first letter): [mainnet-beta,
                                           testnet, devnet, localhost]
    -k, --keypair <KEYPAIR>                Filepath or URL to a keypair
        --output <FORMAT>                  Return information in specified output format [possible values: json, json-
                                           compact]
        --ws <URL>                         WebSocket URL for the koii cluster

ARGS:
    <DATA_LENGTH_OR_MONIKER>    Length of the data field in the account to calculate rent for, or moniker: [nonce,
                                stake, system, vote]
```

Example usage:

```
$ koii rent 15000
Rent per byte-year: 0.00000348 KOII
Rent per epoch: 0.000072069 KOII
Rent-exempt minimum: 0.10529088 KOII
```
