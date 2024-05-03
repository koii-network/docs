---
title: Validator Setup
description: WRITE THIS
image: img/thumbnail.png
sidebar_label: Validator Setup
---
<!-- TODO: write description -->

We highly recommend setting up at least two nodes on high-grade computers/cloud instances, upgrading to newer versions promptly, and keeping an eye on service operations with a bundled monitoring tool.

This setup enables you:

-to have a self-administered gateway to the Solana mainnet-beta cluster to get data and submit withdrawal transactions
-to have full control over how much historical block data is retained
-to maintain your service availability even if one node fails

Solana nodes demand relatively high computing power to handle our fast blocks and high TPS. For specific requirements, please see [hardware recommendations](https://docs.solanalabs.com/operations/requirements).

To run an api node:

1. [Install the Solana command-line tool suite](https://docs.solanalabs.com/cli/install)
2. Start the validator with at least the following parameters:

```console
    solana-validator \
      --ledger <LEDGER_PATH> \
      --identity <VALIDATOR_IDENTITY_KEYPAIR> \
      --entrypoint <CLUSTER_ENTRYPOINT> \
      --expected-genesis-hash <EXPECTED_GENESIS_HASH> \
      --rpc-port 8899 \
      --no-voting \
      --enable-rpc-transaction-history \
      --limit-ledger-size \
      --known-validator <VALIDATOR_ADDRESS> \
      --only-known-rpc
```

Customize `--ledger` to your desired ledger storage location, and `--rpc-port` to the port you want to expose.

The `--entrypoint` and `--expected-genesis-hash` parameters are all specific to the cluster you are joining. [Current parameters for Mainnet Beta](https://docs.solanalabs.com/clusters/available#example-solana-validator-command-line-2)

The `--limit-ledger-size` parameter allows you to specify how many ledger [shreds](/docs/terminology#shred) your node retains on disk. If you do not include this parameter, the validator will keep the entire ledger until it runs out of disk space. The default value attempts to keep the ledger disk usage under 500GB. More or less disk usage may be requested by adding an argument to `--limit-ledger-size` if desired. Check `solana-validator --help` for the default limit value used by `--limit-ledger-size`. More information about selecting a custom limit value is [available here](https://github.com/solana-labs/solana/blob/583cec922b6107e0f85c7e14cb5e642bc7dfb340/core/src/ledger_cleanup_service.rs#L15-L26).

Specifying one or more `--known-validator` parameters can protect you from booting from a malicious snapshot. [More on the value of booting with known validators](https://docs.solanalabs.com/operations/guides/validator-start#known-validators)

Optional parameters to consider:

- `--private-rpc` prevents your RPC port from being published for use by other nodes
- `--rpc-bind-address` allows you to specify a different IP address to bind the RPC port

## Automatic Restarts and Monitoring

We recommend configuring each of your nodes to restart automatically on exit, to ensure you miss as little data as possible. Running the solana software as a systemd service is one great option.

For monitoring, we provide [`solana-watchtower`](https://github.com/solana-labs/solana/blob/master/watchtower/README.md), which can monitor your validator and detect with the `solana-validator` process is unhealthy. It can directly be configured to alert you via Slack, Telegram, Discord, or Twillio. For details, run `solana-watchtower --help`.

```console
    solana-watchtower --validator-identity <YOUR VALIDATOR IDENTITY>
```

Info

You can find more information about the [best practices for Solana Watchtower](https://docs.solanalabs.com/operations/best-practices/monitoring#solana-watchtower) here in the docs.

### New Software Release Announcements

We release new software frequently (around 1 release / week). Sometimes newer versions include incompatible protocol changes, which necessitate timely software update to avoid errors in processing blocks.

Our official release announcements for all kinds of releases (normal and security) are communicated via a [discord](/discord) channel called `#mb-announcement` (`mb` stands for `mainnet-beta`).

Like staked validators, we expect any exchange-operated validators to be updated at your earliest convenience within a business day or two after a normal release announcement. For security-related releases, more urgent action may be needed.

## Ledger Continuity

By default, each of your nodes will boot from a snapshot provided by one of your known validators. This snapshot reflects the current state of the chain, but does not contain the complete historical ledger. If one of your node exits and boots from a new snapshot, there may be a gap in the ledger on that node. In order to prevent this issue, add the `--no-snapshot-fetch` parameter to your `solana-validator` command to receive historical ledger data instead of a snapshot.

Do not pass the `--no-snapshot-fetch` parameter on your initial boot as it's not possible to boot the node all the way from the genesis block. Instead boot from a snapshot first and then add the `--no-snapshot-fetch` parameter for reboots.

It is important to note that the amount of historical ledger available to your nodes from the rest of the network is limited at any point in time. Once operational if your validators experience significant downtime they may not be able to catch up to the network and will need to download a new snapshot from a known validator. In doing so your validators will now have a gap in its historical ledger data that cannot be filled.

## Minimizing Validator Port Exposure

The validator requires that various UDP and TCP ports be open for inbound traffic from all other Solana validators. While this is the most efficient mode of operation, and is strongly recommended, it is possible to restrict the validator to only require inbound traffic from one other Solana validator.

First add the `--restricted-repair-only-mode` argument. This will cause the validator to operate in a restricted mode where it will not receive pushes from the rest of the validators, and instead will need to continually poll other validators for blocks. The validator will only transmit UDP packets to other validators using the _Gossip_ and _ServeR_ ("serve repair") ports, and only receive UDP packets on its _Gossip_ and _Repair_ ports.

The _Gossip_ port is bi-directional and allows your validator to remain in contact with the rest of the cluster. Your validator transmits on the _ServeR_ to make repair requests to obtaining new blocks from the rest of the network, since Turbine is now disabled. Your validator will then receive repair responses on the _Repair_ port from other validators.

To further restrict the validator to only requesting blocks from one or more validators, first determine the identity pubkey for that validator and add the `--gossip-pull-validator PUBKEY --repair-validator PUBKEY` arguments for each PUBKEY. This will cause your validator to be a resource drain on each validator that you add, so please do this sparingly and only after consulting with the target validator.

Your validator should now only be communicating with the explicitly listed validators and only on the _Gossip_, _Repair_ and _ServeR_ ports.
