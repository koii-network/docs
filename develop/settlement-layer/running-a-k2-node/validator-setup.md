---
title: Validator Setup
description: To run the K2 node, first, you have to install the Koii command-line tools
image: img/thumbnail.png
sidebar_label: Validator Setup
---

import ContentLink from "@site/src/components/contentLink";

# Validator Setup

The following guide describes how to setup a validator on Ubuntu.

## Identity Setup
You will need to create the following keys on your system:

```bash
koii-keygen new --outfile ~/validator-keypair.json
koii-keygen new --outfile ~/withdrawer-keypair.json
koii-keygen new --outfile ~/stake-account-keypair.json
koii-keygen new --outfile ~/vote-account-keypair.json

```
The authorized-withdrawer keypair is to be used as the ultimate authority over your validator. This keypair will be able to withdraw from your vote account and will have additional permission to change all other aspects of your vote account.

This is a very important keypair since anyone in possession of it has the ability to permanently take control of your vote account and make any changes they please. Therefore, it's crucial to store your authorized-withdrawer keypair in a secure location.

It doesn't have to be stored on your validator, and it shouldn't be stored anywhere where unauthorized people could access it.

It's reccomended that you use `systemctl` to manage the validator process. To set up the validator service you can complete the following steps

## Step 1: Create a Systemctl Service File for the Validator

Write a service configuration using the editor of your choice (nano, vim, etc). Do this as a system user with root permissions, not your validator user.

```bash
sudo nano /etc/systemd/system/koii-validator.service
```

Paste the service configuration below into your editor

```makefile
[Unit]
Description=Koii Validator
After=network.target

[Service]
User=koii
Group=koii
Environment="PATH=/home/koii/.local/share/koii/install/active_release/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
ExecStart=/home/koii/.local/share/koii/install/active_release/bin/koii-validator --identity /home/koii/validator-keypair.json --ledger /home/koii/validator-ledger --accounts /home/koii/validator-accounts --entrypoint k2-testnet-validator-1.koii.live:10001 --rpc-port 10899 --dynamic-port-range 10000-10500 --limit-ledger-size --gossip-port 10001 --log - --rpc-bind-address 0.0.0.0
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Save and close your editor.

## Step 2: Enable and Start the Koii Validator Service

Enable the service

```bash
sudo systemctl enable koii-validator.service
```

Start the service

```bash
sudo systemctl start koii-validator.service
```

Check the service status

```bash
sudo systemctl status koii-validator.service
```

:::caution

You will need your validator keypair to be funded with Koii tokens and have the validator service running before continuing

:::

## Step 3: Create a Vote Account

For the remainder of the steps please elevate your user to your validator account

```bash
sudo su koii
```

Using the keys created in the first portion of this guide, create a vote account

```bash
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/withdrawer-keypair.json
```

## Step 4: Create a Stake Account

Create the staking account using the validator's identity keypair and the authorized withdrawer keypair:

```bash
koii create-stake-account ~/stake-account-keypair.json <AMOUNT_TO_STAKE> --stake-authority ~/validator-keypair.json --withdraw-authority ~/withdrawer-keypair.json
```

Where <AMOUNT_TO_STAKE> is the number of tokens you want to stake with.

## Step 5: Delegate Your Stake

Delegate the stake to the validator using the staking account and validator's identity keypair:

```bash
koii delegate-stake ~/stake-account-keypair.json <VALIDATOR_VOTE_ACCOUNT_ADDRESS> --stake-authority ~/validator-keypair.json
```

Replace <VALIDATOR_VOTE_ACCOUNT_ADDRESS> with the validator's vote account address, which can be found using the `koii validator-info get` command.
