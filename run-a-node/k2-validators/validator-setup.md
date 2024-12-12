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
    --wal-recovery-mode skip_any_corrupted_record \
    --expected-genesis-hash 3J1UybSMw4hCdTnQoVqVC3TSeZ4cd9SkrDQp3Q9j49VF \
    --expected-bank-hash 2Yvcz1QWRemddmoFhumBESUzeZiepXA8DZu3g2Z9Kh2J
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

:::warning

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

:::

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

Run the following command, AFTER replacing `<AMOUNT_TO_STAKE>` with your stake amount.

```sh
koii create-stake-account ~/stake-account-keypair.json <AMOUNT_TO_STAKE> --stake-authority ~/stake-authority-keypair.json --withdraw-authority ~/stake-authority-keypair.json
```

:::info
 If you don't have ```stake-account-keypair.json``` and ```stake-authority-keypair.json``` just create them using: ```koii-keygen new --outfile ~/stake-account-keypair.json```  and ```koii-keygen new --outfile ~/stake-authority-keypair.json```
:::

### 2. Delegate the stake to your validator

```sh
koii delegate-stake ~/stake-account-keypair.json <VALIDATOR VOTE ACCOUNT FOR TOKEN DELEGATION> --stake-authority ~/validator-keypair.json --force
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


## Known validators

If you know and respect other validator operators, you can specify this on the command line with the `--known-validator <PUBKEY>`
argument to `koii-validator`. You can specify multiple ones by repeating the argument `--known-validator <PUBKEY1> --known-validator <PUBKEY2>`.
This has two effects, one is when the validator is booting with `--only-known-rpc`, it will only ask that set of
known nodes for downloading genesis and snapshot data. Another is that in combination with the `--halt-on-known-validators-accounts-hash-mismatch` option,
it will monitor the merkle root hash of the entire accounts state of other known nodes on gossip and if the hashes produce any mismatch,
the validator will halt the node to prevent the validator from voting or processing potentially incorrect state values. At the moment, the slot that
the validator publishes the hash on is tied to the snapshot interval. For the feature to be effective, all validators in the known
set should be set to the same snapshot interval value or multiples of the same.

It is highly recommended you use these options to prevent malicious snapshot state download or
account state divergence.


---

<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>


