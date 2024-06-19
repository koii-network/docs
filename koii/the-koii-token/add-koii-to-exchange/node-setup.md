---
title: RPC Node Setup
description: Learn how to set up a Koii RPC node for use with a cryptocurrency exchange.
image: img/thumbnail.png
sidebar_label: RPC Node Setup
---

:::info
It is strongly recommended to set up at least two nodes with high-grade compute, keep the version up-to-date, and use a bundled monitoring tool.

This setup is recommended because:

- you will have a gateway to the Koii mainnet that you can administer yourself, allowing you to get data and submit transactions
- you can control how much historical block data you store
- you can maintain availability if one node fails

Please see our [hardware recommendations](/run-a-node/k2-validators/validator-requirements#hardware-requirements) before getting started.

:::

To run an RPC Node:

1. [Install the Koii command-line tool suite](/develop/command-line-tool/koii-cli/install-cli)
2. Start the validator with at least the following parameters:

```sh
    koii-validator \
      --ledger <LEDGER_PATH> \
      --identity <VALIDATOR_IDENTITY_KEYPAIR> \
      --entrypoint <CLUSTER_ENTRYPOINT> \
      --expected-genesis-hash <EXPECTED_GENESIS_HASH> \
      --rpc-port 10899 \
      --no-voting \
      --enable-rpc-transaction-history \
      --limit-ledger-size \
      --known-validator <VALIDATOR_ADDRESS> \
      --only-known-rpc
```

Customize `--ledger` to your desired ledger storage location, and `--rpc-port` to the port you want to expose.

<!-- TODO: Update when mainnet launched -->
The `--entrypoint` and `--expected-genesis-hash` parameters are both specific to the cluster you are joining. The parameters for mainnet are coming soon.

To specify the number of ledger shreds your node stores, you can specify the `--limit-ledger-size` parameter. Its default value is 200,000,000 shreds, which will limit the disk usage to 400GB.

 More information about selecting a custom limit value is [available here](https://github.com/solana-labs/solana/blob/583cec922b6107e0f85c7e14cb5e642bc7dfb340/core/src/ledger_cleanup_service.rs#L15-L26).

:::warning
It is recommended to use [known validators](/run-a-node/k2-validators/validator-start#known-validators) when booting from a snapshot. This can be specified with the `--known-validators` parameter.
:::

Optional parameters to consider:

- `--private-rpc` don't publish your RPC port
- `--rpc-bind-address` specify a different IP to bind the RPC port

## Automatic Restarts

We recommend configuring each of your nodes to restart automatically on exit, to ensure you miss as little data as possible. Running the Koii software as a systemd service is one great option.

## Monitoring

You can monitor your node's health using `koii-watchtower`, and can configure it to send you alerts via Slack, Discord, Telegram, or Twillio. For details on usage, run `koii-watchtower --help`.

```sh
    koii-watchtower --validator-identity <YOUR VALIDATOR IDENTITY>
```

<!-- TODO: THESE DOCS DON'T EXIST FOR US -->
<!-- Info
You can find more information about the [best practices for Koii Watchtower](https://docs.solanalabs.com/operations/best-practices/monitoring#solana-watchtower) here in the docs. -->

### New Releases

New software releases will be announced on the [K2 releases Github repository](https://github.com/koii-network/k2-release).

:::warning
We expect RPC nodes to be updated within 1-2 business days of a new release; sooner if it's a security update.
:::

## Maintaining Ledger Continuity

When a node boots, it will use a snapshot provided by a known validator. Snapshots do not contain the entire history record of transactions, so when a node reboots it may load from a new snapshot that creates a gap in the ledger. You can add the `--no-snapshot-fetch` flag to `koii-validator` to get the entire ledger.

:::warning
On initial boot of your node, boot from a snapshot. Only use `--no-snapshot-fetch` for reboots.
:::

Please note that the historical data available may not be complete. If your node is down for an extended period, you may need to download a new snapshot, which will create a gap in the ledger that cannot be filled.

## Optional: Reducing Port Exposure

It is recommended to keep open the UDP and TCP ports needed for receiving inbound traffic from all other validators, but it is possible to restrict the traffic.

To do so, add the `--restricted-repair-only-mode` flag.

First add the `--restricted-repair-only-mode` argument. Your node will no longer receive pushes from other validators; instead it will have to poll for blocks. It will transmit and receive on the _Gossip_ port, transmit only on the _ServeR_ ("serve repair") port, and receive only on the _Repair_ port.

The _Gossip_ port is used to keep in contact with the cluster. Repair requests are sent by your node via the _ServeR_ port and the repair responses are received on the _Repair_ port.

If you wish to restrict traffic to certain validators, you can add `--gossip-pull-validator PUBKEY --repair-validator PUBKEY` using the identity public key for each validator you wish to add. This does cause a resource drain on the validators you add, so use this option with caution and consult with the target validators.
