---
title: Validator Setup
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Validator Setup
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

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

The authorized-withdrawer keypair is the ultimate authority over your validator. This keypair will be able to withdraw from your vote account and will have additional permission to change all other aspects of your vote account.

This is a very important keypair. Anyone in possession of it has the ability to permanently take control of your vote account and make any changes they please. Therefore, it's crucial to store your authorized-withdrawer keypair in a secure location.

It doesn't have to be stored on your validator and it shouldn't be stored anywhere where an unauthorized person could access it.

It's recommended that you use `systemctl` to manage the validator process. To set up the validator service you can complete the following steps.

## Step 1: Create a Systemctl Service File for the Validator

Write a service configuration using the editor of your choice (nano, vim, etc.). Do this as a system user with root permissions, not your validator user.

```bash
sudo nano /etc/systemd/system/koii-validator.service
```

Paste the service configuration below into your editor.

```makefile
[Unit]
Description=Koii Validator
After=network.target

[Service]
User=koii
Group=koii
Environment="PATH=/home/koii/.local/share/koii/install/active_release/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
ExecStart=/home/koii/.local/share/koii/install/active_release/bin/koii-validator --identity /home/koii/validator-keypair.json --ledger /home/koii/validator-ledger --accounts /home/koii/validator-accounts --rpc-bind-address 0.0.0.0 --dynamic-port-range 10000-10500 --rpc-port 10899 --gossip-port 10001 --log - --limit-ledger-size --enable-rpc-transaction-history --enable-cpi-and-log-storage --no-os-network-limits-test --no-poh-speed-test --full-rpc-api --entrypoint testnet-validator-1.koii.network:10001 --known-validator CVYuw3N4wjfh5gwDTjcyz1UqQAT9tRLcqZJjEpuc4vf3

Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Save and close your editor.

## Step 2: Create a Vote Account

:::caution

You will need your validator keypair to be funded with KOII tokens before continuing.

:::

For the remainder of the steps please elevate your user to your validator account.

```bash
sudo su koii
```

Using the keys created in the first portion of this guide, create a vote account.

```bash
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/withdrawer-keypair.json
```

## Step 3: Create a Stake Account

Create the staking account using the validator's identity keypair and the authorized withdrawer keypair.

```bash
koii create-stake-account ~/stake-account-keypair.json <AMOUNT_TO_STAKE> --stake-authority ~/validator-keypair.json --withdraw-authority ~/withdrawer-keypair.json
```

Where <AMOUNT_TO_STAKE> is the number of tokens you want to stake with.

## Step 4: Delegate Your Stake

Delegate the stake to the validator using the staking account and validator's identity keypair. You will have to use the `--force` option in order to bypass the warning that your vote account has no root slot.

```bash
koii delegate-stake ~/stake-account-keypair.json ~/vote-account-keypair.json --stake-authority ~/validator-keypair.json --force
```

Replace `<VALIDATOR_VOTE_ACCOUNT_ADDRESS>` with the validator's public address. That address can be found using the `koii validator-info get` command.

## Step 5: Enable and Start the Koii Validator Service
From the system user with root permissions, enable and start the validator service.

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


## Step 6: Check Your Stake
Because your validator will not show up in the `koii validators` list for 12 to 24 hours, you can check your stake to make sure it as properly delegated by running `koii stake-account ~/stake-account-keypair.json` which should output something similar to the following:
```bash
Balance: 500 KOII
Rent Exempt Reserve: 0.00228288 KOII
Delegated Stake: 0 KOII
Activating Stake: 499.99771712 KOII
Delegated Vote Account Address: <pubkey>
Stake Authority: <pubkey>
Withdraw Authority: <pubkey>
```
If you see a value in `Activating Stake` then you should be successfully voting within two epochs (about 24 hours)