---
title: Setup Process
description: To run the K2 node, first, you have to install the Koii command-line tools
image: img/thumbnail.png
sidebar_label: Setup Process
---

import ContentLink from "@site/src/components/contentLink";

# Setup Process

To run the K2 node, first, you have to [install the Koii command-line tools](../../microservices-and-tasks/task-development-guide/task-development-flow/koii-cli).

### Download the Latest Release

K2 Releases are published on our github. Click the link below to get the latest version.

<ContentLink title="GitHub - koii-network/k2-release" link="https://github.com/koii-network/k2-release" imageLink="https://github.com/fluidicon.png" />

### Configure Koii CLI

The Koii CLI includes `get` and `set` configuration commands to automatically set the `--url` argument for CLI commands. For example:

```
koii config set --url https://k2-testnet.koii.live
```

Next, set the koii configuration to use your validator keypair:

```
koii config set --keypair <YOUR_WALLET_PATH>
```

Example:

```
koii config set --keypair /Users/<YOUR_HOME>/.config/koii/id.json
```

You should see an output similar to this:

```
Config File: /Users/<YOUR_HOME>/.config/koii/cli/config.yml
RPC URL: http://localhost:8899
WebSocket URL: ws://localhost:8900/ (computed)
Keypair Path: /Users/<YOUR_HOME>/.config/koii/id.json
Commitment: confirmed
```

### Airdrop & Check Validator Balance

Airdrop yourself some KOII to get started:

```
koii airdrop 400
```

To view your current balance:

```
koii balance
```

### Create an Authorized Withdrawer Account

If you haven't created one before now, create an authorized-withdrawer keypair to be used as the ultimate authority over your validator. This keypair will be able to withdraw from your vote account and will have additional permission to change all other aspects of your vote account.&#x20;

This is a very important keypair since anyone in possession of it has the ability to permanently take control of your vote account and make any changes they please. Therefore, it's crucial to store your authorized-withdrawer keypair in a secure location.

It doesn't have to be stored on your validator, and it shouldn't be stored anywhere where unauthorized people could access it. To create your authorized-withdrawer keypair:

```
koii-keygen new -o ~/authorized-withdrawer-keypair.json
```

### Create Vote Account

Create a vote-account keypair and create the vote account on the network.&#x20;

To create a vote-account keypair:

```
koii-keygen new -o ~/vote-account-keypair.json
```

To create a vote account:

```
koii create-vote-account <PATH_TO_VOTE_ACCOUNT_KEYPAIR> <PATH_TO_VALIDATOR_KEYPAIR> <PATH_TO_AUTHORIZED_WITHDRAWER_KEYPAIR>
```

Example:

```
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/authorized-withdrawer-keypair.json
```

The command above will create your vote account on the blockchain with all the default options.

Remember to move your authorized withdrawer keypair into a very secure location after running the `create-vote-account` command.

### Connect Your Validator

Connect to the cluster by running:

```
koii-validator \
  --identity ~/validator-keypair.json \
  --vote-account ~/vote-account-keypair.json \
  --rpc-port 8899 \
  --entrypoint k2-testnet.koii.live:8001 \
  --limit-ledger-size \
  --log ~/koii-validator.log
```
