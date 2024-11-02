---
title: Validator Setup
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Validator Setup
---

## 1. Systemd service setup

- Copy the following code to `/home/koii/validator.sh` and make it executable

```sh
#!/bin/sh
exec /home/koii/.local/share/koii/install/active_release/bin/koii-validator \
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
```

- Create a systemd unit file at `/etc/systemd/system/koii-validator.service`

```sh
[Unit]
Description=Koii Validator
After=network.target
Wants=systuner.service
StartLimitIntervalSec=0
[Service]
User=koii
Group=koii
LimitNOFILE=1000000
LogRateLimitIntervalSec=0
Environment="PATH=/home/koii/.local/share/koii/install/active_release/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
ExecStart=/home/koii/validator.sh
Restart=on-failure
RestartSec=10
[Install]
WantedBy=multi-user.target
```

### 2. Create a vote account

- You will need your validator keypair account to be funded with KOII tokens before continuing. You can check the balance of a wallet by running

```sh
koii balance <path_to_wallet>
```

- Please make sure your Koii CLI is configured for `testnet.koii.network` and using your validator identity before continuing:

```sh
koii config set --url https://testnet.koii.network/ --keypair ~/validator-keypair.json
```

- You can confirm your configuration with:

```sh
koii config get
```

- Run the following command to create a vote-account on the network:

```sh
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/authorized-withdrawer-keypair.json
```

### 3. Enable and Start the Koii validator

```sh
sudo systemctl enable koii-validator.service
sudo systemctl start koii-validator.service
sudo systemctl status koii-validator.service
```

## Staking KOII in the validator

:::info
Commands in this section are to be run on the computer which has the stake account key pair (**NOT ON VALIDATOR**)
:::

### 1. Create a stake account

Run the following command, replacing `<AMOUNT_TO_STAKE>` with your stake amount.

```sh
koii create-stake-account ~/stake-account-keypair.json <AMOUNT_TO_STAKE> --stake-authority ~/validator-keypair.json --withdraw-authority ~/authorized-withdrawer-keypair.json
```

### 2. Delegate the stake to your validator

```sh
koii delegate-stake ~/stake-account-keypair.json ~/vote-account-keypair.json --stake-authority ~/validator-keypair.json --force
```

### 3. Check your delegated stake’s status

Your validator will not show up in the koii validators list for 12 to 24 hours, you can check your stake to make sure it is properly delegated by running the following command

```sh
koii stake-account ~/stake-account-keypair.json
```

Expected output:

```sh
Balance: <Amount of KOII>
Rent Exempt Reserve: <Amount of KOII>
Delegated Stake: <Amount of KOII>
Activating Stake: <Amount of KOII>
Delegated Vote Account Address: <pubkey>
Stake Authority: <pubkey>
Withdraw Authority: <pubkey>
```

If you see a value in “Activating Stake” then you should be successfully voting within 24 hours
