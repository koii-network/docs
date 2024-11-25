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
- Key differences between Devnet and Mainnet:
  - Devnet tokens are **not real**
  - Devnet includes a token faucet for airdrops for application testing
  - Devnet may be subject to ledger resets
  - Devnet typically runs the same software release branch version as Mainnet,
    but may run a newer minor release version than Mainnet.
- Gossip entrypoint for Devnet: `entrypoint.devnet.koii.network:8001`
- Metrics environment variable for Devnet:

```bash
export KOII_METRICS_CONFIG="host=https://metrics.koii.network:8086,db=devnet,u=scratch_writer,p=topsecret"
```

- RPC URL for Devnet: `https://devnet.koii.network`

##### Example `koii` command-line configuration

```bash
koii config set --url https://devnet.koii.network
```

##### Example `Koii-validator` command-line

```bash
$ koii-validator \
    --identity /home/koii/validator-keypair.json  \
    --vote-account /home/koii/vote-account-keypair.json \
    --ledger /home/koii/ledger/ledgerdb \
    --accounts /home/koii/accounts/accountdb \
    --log /home/koii/koii-rpc.log \
    --rpc-bind-address 0.0.0.0 \
    --rpc-port 10899 \
    --gossip-port 10001 \
    --dynamic-port-range 10002-10500 \
    --enable-rpc-transaction-history \
    --enable-cpi-and-log-storage \
    --known-validator Bs3LDTq3rApDqjU4vCfDrQFjixHk1cW8rYoyc47bCog6 \
    --entrypoint entrypoint-1.devnet.koii.network:10001 \
    --entrypoint entrypoint-2.devnet.koii.network:10001 \
    --rpc-faucet-address rpc-faucet.devnet.koii.network:9900 \
    --init-complete-file /home/koii/init-completed \
    --no-wait-for-vote-to-start-leader \
    --enable-extended-tx-metadata-storage \
    --maximum-full-snapshots-to-retain 20 \
    --maximum-incremental-snapshots-to-retain 20 \
    --limit-ledger-size 200000000 \
    --only-known-rpc \
    --wal-recovery-mode skip_any_corrupted_record
    --expected-genesis-hash 3J1UybSMw4hCdTnQoVqVC3TSeZ4cd9SkrDQp3Q9j49VF
    --expected-bank-hash 2Yvcz1QWRemddmoFhumBESUzeZiepXA8DZu3g2Z9Kh2J
```

The [`--known-validator`s](../../k2-validators/validator-setup.md#known-validators)
are operated by Koii Labs

## Testnet

- Testnet is where the Koii core contributors stress test recent release features on a live
  cluster, particularly focused on network performance, stability and validator
  behavior.
- Testnet tokens at time of snapshot will be converted to mainnet tokens, see <TODO: Info link> for further details.
- Testnet tokens after snapshot are **not real**
- Testnet may be subject to ledger resets.
- Testnet includes a token faucet for airdrops for application testing
- Testnet typically runs a newer software release branch than Devnet
- Gossip entrypoint for Testnet: `entrypoint.testnet.koii.network:8001`
- Metrics environment variable for Testnet:

```bash
export Koii_METRICS_CONFIG="host=https://metrics.koii.network:8086,db=tds,u=testnet_write,p=c4fa841aa918bf8274e3e2a44d77568d9861b3ea"
```

- RPC URL for Testnet: `https://testnet.koii.network`

##### Example `Koii` command-line configuration

```bash
Koii config set --url https://testnet.koii.network
```

##### Example `Koii-validator` command-line

```bash
$ Koii-validator \
--identity /home/koii/validator-keypair.json  \
    --vote-account /home/koii/vote-account-keypair.json \
    --ledger /home/koii/ledger/ledgerdb \
    --accounts /home/koii/accounts/accountdb \
    --log /home/koii/koii-rpc.log \
    --rpc-bind-address 0.0.0.0 \
    --rpc-port 10899 \
    --gossip-port 10001 \
    --dynamic-port-range 10002-10500 \
    --enable-rpc-transaction-history \
    --enable-cpi-and-log-storage \
    --known-validator Bs3LDTq3rApDqjU4vCfDrQFjixHk1cW8rYoyc47bCog6 \
    --entrypoint entrypoint-1.testnet.koii.network:10001 \
    --entrypoint entrypoint-2.testnet.koii.network:10001 \
    --rpc-faucet-address rpc-faucet.testnet.koii.network:9900 \
    --init-complete-file /home/koii/init-completed \
    --no-wait-for-vote-to-start-leader \
    --enable-extended-tx-metadata-storage \
    --maximum-full-snapshots-to-retain 20 \
    --maximum-incremental-snapshots-to-retain 20 \
    --limit-ledger-size 200000000 \
    --only-known-rpc \
    --wal-recovery-mode skip_any_corrupted_record
    --expected-genesis-hash 3J1UybSMw4hCdTnQoVqVC3TSeZ4cd9SkrDQp3Q9j49VF
    --expected-bank-hash 2Yvcz1QWRemddmoFhumBESUzeZiepXA8DZu3g2Z9Kh2J
```

The identities of the
[`--known-validator`s](../../k2-validators/validator-setup.md#known-validators) are:

- `5D1fNXzvv5NjV1ysLjirC4WY92RNsVH18vjmcszZd8on` - Koii Labs
-
-
-
-


<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>