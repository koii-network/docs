---
title: Available Koii Clusters
sidebar_label: Koii Clusters
pagination_label: Available Koii Clusters
---

Koii maintains several different clusters with different purposes.

Before you begin make sure you have first
[installed the Koii command line tools](https://www.koii.network/docs/develop/command-line-tool/koii-cli/install-cli)

Explorer:

- [http://explorer.koii.live/](https://explorer.koii.live).

## Devnet

- Devnet serves as a playground for anyone who wants to take Koii for a
  test drive, as a user, token holder, app developer, or validator.
- Application developers should target Devnet.
- Potential validators should first target Devnet.
- Key differences between Devnet and Mainnet Beta:
  - Devnet tokens are **not real**
  - Devnet includes a token faucet for airdrops for application testing
  - Devnet may be subject to ledger resets
  - Devnet typically runs the same software release branch version as Mainnet Beta,
    but may run a newer minor release version than Mainnet Beta.
- Gossip entrypoint for Devnet: `entrypoint.devnet.Koii.com:8001`
- Metrics environment variable for Devnet:

```bash
export Koii_METRICS_CONFIG="host=https://metrics.Koii.com:8086,db=devnet,u=scratch_writer,p=topsecret"
```

- RPC URL for Devnet: `https://api.devnet.Koii.com`

##### Example `Koii` command-line configuration

```bash
Koii config set --url https://api.devnet.Koii.com
```

##### Example `Koii-validator` command-line

```bash
$ Koii-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --known-validator dv1ZAGvdsz5hHLwWXsVnM94hWf1pjbKVau1QVkaMJ92 \
    --known-validator dv2eQHeP4RFrJZ6UeiZWoc3XTtmtZCUKxxCApCDcRNV \
    --known-validator dv4ACNkpYPcE3aKmYDqZm9G5EB3J4MRoeE7WNDRBVJB \
    --known-validator dv3qDFk1DTF36Z62bNvrCXe9sKATA6xvVy6A798xxAS \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.devnet.Koii.com:8001 \
    --entrypoint entrypoint2.devnet.Koii.com:8001 \
    --entrypoint entrypoint3.devnet.Koii.com:8001 \
    --entrypoint entrypoint4.devnet.Koii.com:8001 \
    --entrypoint entrypoint5.devnet.Koii.com:8001 \
    --expected-genesis-hash EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

The [`--known-validator`s](../operations/guides/validator-start.md#known-validators)
are operated by Koii Labs

## Testnet

- Testnet is where the Koii core contributors stress test recent release features on a live
  cluster, particularly focused on network performance, stability and validator
  behavior.
- Testnet tokens are **not real**
- Testnet may be subject to ledger resets.
- Testnet includes a token faucet for airdrops for application testing
- Testnet typically runs a newer software release branch than both
  Devnet and Mainnet Beta
- Gossip entrypoint for Testnet: `entrypoint.testnet.Koii.com:8001`
- Metrics environment variable for Testnet:

```bash
export Koii_METRICS_CONFIG="host=https://metrics.Koii.com:8086,db=tds,u=testnet_write,p=c4fa841aa918bf8274e3e2a44d77568d9861b3ea"
```

- RPC URL for Testnet: `https://api.testnet.Koii.com`

##### Example `Koii` command-line configuration

```bash
Koii config set --url https://api.testnet.Koii.com
```

##### Example `Koii-validator` command-line

```bash
$ Koii-validator \
    --identity validator-keypair.json \
    --vote-account vote-account-keypair.json \
    --known-validator 5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on \
    --known-validator dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs \
    --known-validator Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN \
    --known-validator eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ \
    --known-validator 9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.testnet.Koii.com:8001 \
    --entrypoint entrypoint2.testnet.Koii.com:8001 \
    --entrypoint entrypoint3.testnet.Koii.com:8001 \
    --expected-genesis-hash 4uhcVJyU9pJkvQyS88uRDiswHXSCkY3zQawwpjk2NsNY \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

The identities of the
[`--known-validator`s](../operations/guides/validator-start.md#known-validators) are:

- `5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on` - Koii Labs
- `dDzy5SR3AXdYWVqbDEkVFdvSPCtS9ihF5kJkHCtXoFs` - MonkeDAO
- `Ft5fbkqNa76vnsjYNwjDZUXoTWpP7VYm3mtsaQckQADN` - Certus One
- `eoKpUABi59aT4rR9HGS3LcMecfut9x7zJyodWWP43YQ` - SerGo
- `9QxCLckBiJc783jnMvXZubK4wH86Eqqvashtrwvcsgkv` - Algo|Stake

## Mainnet Beta

A permissionless, persistent cluster for Koii users, builders, validators and token holders.

- Tokens that are issued on Mainnet Beta are **real** SOL
- Gossip entrypoint for Mainnet Beta: `entrypoint.mainnet-beta.Koii.com:8001`
- Metrics environment variable for Mainnet Beta:

```bash
export Koii_METRICS_CONFIG="host=https://metrics.Koii.com:8086,db=mainnet-beta,u=mainnet-beta_write,p=password"
```

- RPC URL for Mainnet Beta: `https://api.mainnet-beta.Koii.com`

##### Example `Koii` command-line configuration

```bash
Koii config set --url https://api.mainnet-beta.Koii.com
```

##### Example `Koii-validator` command-line

```bash
$ Koii-validator \
    --identity ~/validator-keypair.json \
    --vote-account ~/vote-account-keypair.json \
    --known-validator 7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2 \
    --known-validator GdnSyH3YtwcxFvQrVVJMm1JhTS4QVX7MFsX56uJLUfiZ \
    --known-validator DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ \
    --known-validator CakcnaRDHka2gXyfbEd2d3xsvkJkqsLw2akB3zsN1D2S \
    --only-known-rpc \
    --ledger ledger \
    --rpc-port 8899 \
    --private-rpc \
    --dynamic-port-range 8000-8020 \
    --entrypoint entrypoint.mainnet-beta.Koii.com:8001 \
    --entrypoint entrypoint2.mainnet-beta.Koii.com:8001 \
    --entrypoint entrypoint3.mainnet-beta.Koii.com:8001 \
    --entrypoint entrypoint4.mainnet-beta.Koii.com:8001 \
    --entrypoint entrypoint5.mainnet-beta.Koii.com:8001 \
    --expected-genesis-hash 5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d \
    --wal-recovery-mode skip_any_corrupted_record \
    --limit-ledger-size
```

:::info
The above four [`--known-validator`s](../operations/guides/validator-start.md#known-validators)
are operated by Koii Labs.
:::


<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>