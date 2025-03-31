---
title: 'Validator Guide: Starting a Validator'
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Starting a Validator
---

## Configure Koii CLI

The Koii cli includes `get` and `set` configuration commands to automatically set the `--url` argument for cli commands. For example:

```sh
koii config set --url https://mainnet.koii.network
```

While this section demonstrates how to connect to the Testnet cluster, the steps are similar for the other [Koii Clusters](/develop/command-line-tool/koii-cli/connect-cluster).

## Confirm the Cluster is Reachable

Before attaching a validator node, sanity check that the cluster is accessible to your machine by fetching the transaction count:

```sh
koii transaction-count
```

## System Tuning

### Linux

If you would prefer to manage system settings on your own, you may do so with the following commands.

#### Optimize sysctl knobs

```sh
sudo bash -c "cat >/etc/sysctl.d/21-koii-validator.conf <<EOF
# Increase UDP buffer sizes
net.core.rmem_default = 134217728
net.core.rmem_max = 134217728
net.core.wmem_default = 134217728
net.core.wmem_max = 134217728

# Increase memory mapped files limit
vm.max_map_count = 1000000

# Increase number of allowed open file descriptors
fs.nr_open = 1000000
EOF"
```

```sh
sudo sysctl -p /etc/sysctl.d/21-koii-validator.conf
```

#### Increase systemd and session file limits

Add

```sh
LimitNOFILE=1000000
```

to the `[Service]` section of your systemd service file, if you use one, otherwise add

```sh
DefaultLimitNOFILE=1000000
```

to the `[Manager]` section of `/etc/systemd/system.conf`.

```sh
sudo systemctl daemon-reload
```

```sh
sudo bash -c "cat >/etc/security/limits.d/90-koii-nofiles.conf <<EOF
# Increase process file descriptor count limit
* - nofile 1000000
EOF"
```

Close all open sessions (log out then, in again)

#### System Clock

Large system clock drift can prevent a node from properly participating in Koii's gossip protocol. Ensure that your system clock is accurate. To check the current system clock, use:

```sh
timedatectl
```

Operators commonly use an ntp server to maintain an accurate system clock.

## Generate identity

Create an identity keypair for your validator by running:

```sh
koii-keygen new -o ~/validator-keypair.json
```

The identity public key can now be viewed by running:

```sh
koii-keygen pubkey ~/validator-keypair.json
```

:::note
The "validator-keypair.json” file is also your (ed25519) private key.
:::

### Paper Wallet identity

You can create a paper wallet for your identity file instead of writing the keypair file to disk with:

```sh
koii-keygen new --no-outfile
```

The corresponding identity public key can now be viewed by running:

```sh
koii-keygen pubkey ASK
```

and then entering your seed phrase.

## More Koii CLI Configuration

Now that you have a keypair, set the koii configuration to use your validator keypair for all following commands:

```sh
koii config set --keypair ~/validator-keypair.json
```

You should see the following output:

```sh
Config File: /home/koii/.config/koii/cli/config.yml
RPC URL: https://mainnet.koii.network
WebSocket URL: wss://mainnet.koii.network/ (computed)
Keypair Path: /home/koii/validator-keypair.json
Commitment: confirmed
```

## Airdrop & Check Validator Balance

Airdrop yourself some KOII to get started:

```sh
koii airdrop 1
```

Note that airdrops are only available on Testnet. Both are limited to 1 KOII per request.

To view your current balance:

```sh
koii balance
```

Or to see in finer detail:

```sh
koii balance --roe
```

:::info
If the airdrop fails, you may need to wait a few minutes and try again. If you still don't receive the air drop, please reach out to the Koii team on [Discord](https://discord.gg/koii-network).
:::

## Create Authorized Withdrawer Account

If you haven't already done so, create an authorized-withdrawer keypair to be used as the ultimate authority over your validator. This keypair will have the authority to withdraw from your vote account, and will have the additional authority to change all other aspects of your vote account. Needless to say, this is a very important keypair as anyone who possesses it can make any changes to your vote account, including taking ownership of it permanently. So it is very important to keep your authorized-withdrawer keypair in a safe location. It does not need to be stored on your validator, and should not be stored anywhere from where it could be accessed by unauthorized parties. To create your authorized-withdrawer keypair:

```sh
koii-keygen new -o ~/authorized-withdrawer-keypair.json
```

## Create Vote Account

If you haven’t already done so, create a vote-account keypair and create the vote account on the network. If you have completed this step, you should see the “vote-account-keypair.json” in your Koii runtime directory:

```sh
koii-keygen new -o ~/vote-account-keypair.json
```

The following command can be used to create your vote account on the blockchain with all the default options:

```sh
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/authorized-withdrawer-keypair.json
```

Remember to move your authorized withdrawer keypair into a very secure location after running the above command.

## Known validators

If you know and respect other validator operators, you can specify this on the command line with the `--known-validator <PUBKEY>` argument to `koii-validator`. You can specify multiple ones by repeating the argument `--known-validator <PUBKEY1> --known-validator <PUBKEY2>`. This has two effects, one is when the validator is booting with `--only-known-rpc`, it will only ask that set of known nodes for downloading genesis and snapshot data. Another is that in combination with the `--halt-on-known-validators-accounts-hash-mismatch` option, it will monitor the merkle root hash of the entire accounts state of other known nodes on gossip and if the hashes produce any mismatch, the validator will halt the node to prevent the validator from voting or processing potentially incorrect state values. At the moment, the slot that the validator publishes the hash on is tied to the snapshot interval. For the feature to be effective, all validators in the known set should be set to the same snapshot interval value or multiples of the same.

It is highly recommended you use these options to prevent malicious snapshot state download or account state divergence.

## Connect Your Validator

Connect to the cluster by running:

```sh
#!/usr/bin/env bash

exec koii-validator \
  --identity /home/koii/validator-keypair.json \
  --vote-account vote-account-keypair.json \
  --ledger /home/koii/validator-ledger \
  --accounts /home/koii/validator-accounts \
  --rpc-bind-address 0.0.0.0 \
  --dynamic-port-range 10000-10500 \
  --rpc-port 10899 --gossip-port 10001 \
  --log /home/koii/koii-validator.log \
  --limit-ledger-size \
  --only-known-rpc \
  --entrypoint mainnet-validator-1.koii.network:10001 \
  --known-validator Bs3LDTq3rApDqjU4vCfDrQFjixHk1cW8rYoyc47bCog6 \
  --expected-genesis-hash 3J1UybSMw4hCdTnQoVqVC3TSeZ4cd9SkrDQp3Q9j49VF \
  --wal-recovery-mode skip_any_corrupted_record
```

To force validator logging to the console add a `--log` argument, otherwise the validator will automatically log to a file.

The ledger will be placed in the `ledger/` directory by default, use the -`-ledger` argument to specify a different location.

:::note
You can use a paper wallet seed phrase for your `--identity` and/or `--authorized-voter` keypairs. To use these, pass the respective argument as `koii-validator --identity ASK ... --authorized-voter ASK ...` and you will be prompted to enter your seed phrases and optional passphrase.
:::

Confirm your validator is connected to the network by opening a new terminal and running:

```sh
koii gossip
```

If your validator is connected, its public key and IP address will appear in the list.

### Controlling local network port allocation

By default the validator will dynamically select available network ports in the 10000-10500 range, and may be overridden with `--dynamic-port-range`. For example, `koii-validator --dynamic-port-range 10000-10500 ...` will restrict the validator to ports 10000-10500.

### Limiting ledger size to conserve disk space

The `--limit-ledger-size` parameter allows you to specify how many ledger shreds your node retains on disk. If you do not include this parameter, the validator will keep all received ledger data until it runs out of disk space. Otherwise, the validator will continually purge the oldest data once to stay under the specified `--limit-ledger-size` value.

The default value attempts to keep the blockstore (data within the rocksdb directory) disk usage under 500 GB. More or less disk usage may be requested by adding an argument to `--limit-ledger-size` if desired. More information about selecting a custom limit value is available here.

Note that the above target of 500 GB does not account for other items that may reside in the ledger directory, depending on validator configuration. These items may include (but are not limited to):

- Persistent accounts data
- Persistent accounts index
- Snapshots

### Systemd Unit

Running the validator as a systemd unit is one easy way to manage running in the background.

Assuming you have a user called `koii` on your machine, create the file `/etc/systemd/system/koii.service` with the following:

```sh
[Unit]
Description=Koii Validator
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
User=koii
LimitNOFILE=1000000
LogRateLimitIntervalSec=0
Environment="PATH=/bin:/usr/bin:/home/koii/.local/share/koii/install/active_release/bin"
ExecStart=/home/koii/bin/validator.sh

[Install]
WantedBy=multi-user.target
```

Now create `/home/koii/bin/validator.sh` to include the desired `koii-validator` command-line. Ensure that the 'exec' command is used to start the validator process (i.e. "exec koii-validator ..."). This is important because without it, logrotate will end up killing the validator every time the logs are rotated.

Ensure that running `/home/koii/bin/validator.sh` manually starts the validator as expected. Don't forget to mark it executable with `chmod +x /home/koii/bin/validator.sh`

Start the service with:

```sh
sudo systemctl enable --now koii
```

### Logging

#### Log output tuning

The messages that a validator emits to the log can be controlled by the `RUST_LOG` environment variable. Details can by found in the documentation for the `env_logger` Rust crate.

Note that if logging output is reduced, this may make it difficult to debug issues encountered later. Should support be sought from the team, any changes will need to be reverted and the issue reproduced before help can be provided.

#### Log rotation

The validator log file, as specified by `--log ~/koii-validator.log`, can get very large over time and it's recommended that log rotation be configured.

The validator will re-open its log file when it receives the `USR1` signal, which is the basic primitive that enables log rotation.

If the validator is being started by a wrapper shell script, it is important to launch the process with `exec (exec koii-validator ...)` when using logrotate. This will prevent the `USR1` signal from being sent to the script's process instead of the validator's, which will kill them both.

#### Using logrotate

An example setup for the `logrotate`, which assumes that the validator is running as a systemd service called `koii.service` and writes a log file at `/home/koii/koii-validator.log`:

```sh
# Setup log rotation

cat > logrotate.koii <<EOF
/home/koii/koii-validator.log {
  rotate 7
  daily
  missingok
  postrotate
    systemctl kill -s USR1 koii.service
  endscript
}
EOF
sudo cp logrotate.koii /etc/logrotate.d/koii
systemctl restart logrotate.service
```

As mentioned earlier, be sure that if you use logrotate, any script you create which starts the koii validator process uses "exec" to do so (example: "exec koii-validator ..."); otherwise, when logrotate sends its signal to the validator, the enclosing script will die and take the validator process with it.
