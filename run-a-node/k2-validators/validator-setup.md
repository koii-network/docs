---
title: Validator Setup
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Validator Setup
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

# Validator Setup

:::warning

Our validators are currently under maintenance. Running a validator is not recommended at this time. Please wait for further instructions. Thank you for your patience.

:::

The following guide describes how to set up a validator on Ubuntu.

## Identity Setup

You will need to create the following keys on your system:

```bash
koii-keygen new --outfile ~/validator-keypair.json
koii-keygen new --outfile ~/withdrawer-keypair.json
koii-keygen new --outfile ~/stake-account-keypair.json
koii-keygen new --outfile ~/vote-account-keypair.json

```

The authorized withdrawer keypair is the ultimate authority over your validator. This key pair will be able to withdraw from your vote account and will have additional permission to change all other aspects of your vote account.

This is a very important keypair. Anyone in possession of it can permanently take control of your vote account and make any changes they please. Therefore, it's crucial to store your authorized-withdrawer keypair in a secure location.

It doesn't have to be stored on your validator and it shouldn't be stored anywhere where an unauthorized person could access it.

It's recommended that you use `systemctl` to manage the validator process. To set up the validator service you can complete the following steps.

## Step 1: Create a Systemctl Service File for the Validator

Write a service configuration using the editor of your choice (nano, vim, etc.). Do this as a system user with root permissions, not your validator user.

```bash
sudo nano /etc/systemd/system/koii-validator.service
```

Paste the service configuration below into your editor.

:::note
If the file is already existing, you can save and close it directly.
:::

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
:::warning

Please make sure your `koii` CLI is configured for `testnet.koiinetwork` and using your validator identity before continuing:

`koii config set --url https://testnet.koii.network --keypair ~/validator-keypair.json`

:::

For the remainder of the steps please elevate your user to your validator account.

```bash
sudo su koii
cd ~
```

:::tip
Please make sure you are in the home directory of the user you created before continuing to
check by running `pwd` and it should return `/home/koii`
:::

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

## Step 4: Enable and Start the Koii Validator Service

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

## Step 5: Check Your Stake

Because your validator will not show up in the `koii validators` list for 12 to 24 hours, you can check your stake to make sure it as properly delegated by running `koii stake-account ~/stake-account-keypair.json` which should output something similar to the following:

```bash
Balance: <Amount of KOII>
Rent Exempt Reserve: <Amount of KOII>
Delegated Stake: <Amount of KOII>
Activating Stake: <Amount of KOII>
Delegated Vote Account Address: <pubkey>
Stake Authority: <pubkey>
Withdraw Authority: <pubkey>
```

If you see a value in `Activating Stake` then you should be successfully voting within two epochs (about 24 hours)

## Step 6: Delegate Your Stake

If your delegated stake is not showing up, you can delegate the stake to the validator using the staking account and validator's identity key pair. You will have to use the `--force` option in order to bypass the warning that your vote account has no root slot.

```bash
koii delegate-stake ~/stake-account-keypair.json ~/vote-account-keypair.json --stake-authority ~/validator-keypair.json --force
```

To get your validator identity id and more details, please use the `koii validator-info get` command.
