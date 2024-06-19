---
title: Connect to a Cluster
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Connect to a Cluster
---

The `koii config` command is used to update the Koii CLI configuration settings.

To print the file location of the config, run:

```sh
koii config get
```

The output of the command should be similar to the following:

```sh
Config File: /Users/<YOUR_HOME>/.config/koii/cli/config.yml
RPC URL: https://testnet.koii.network/
WebSocket URL: wss://testnet.koii.network/ (computed)
Keypair Path: /Users/<YOUR_HOME>/.config/koii/id.json
Commitment: confirmed
```

The RPC URL can be toggled between testnet and mainnet by pointing the RPC URL to the corresponding node URL.

The command below is an example of how to switch to testnet:

```sh
koii config set --url https://testnet.koii.network/
```

The wallet default URL can also be updated, the default URL lives in `/Users/<YOUR_HOME>/.config/koii/id.json ` and it can be updated with this config command:

```sh
koii config set --keypair <PATH_TO_KEYPAIR>
```
