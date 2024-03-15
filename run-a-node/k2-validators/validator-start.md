---
title: 'Validator Guide: Starting a Validator'
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: Starting a Validator
---

## Configure Koii CLI

The Koii cli includes get and set configuration commands to automatically set the `--url` argument for cli commands. For example:

```bash
koii config set --url https://testnet.koii.network 
```

While this section demonstrates how to connect to the Devnet cluster, the steps are similar for the other [Koii Clusters](/develop/command-line-tool/koii-cli/connect-cluster).

## Confirm the Cluster is Reachable

Before attaching a validator node, sanity check that the cluster is accessible to your machine by fetching the transaction count:

```bash
koii transaction-count
```

## System Tuning

### Linux

If you would prefer to manage system settings on your own, you may do so with the following commands.

#### Optimize sysctl knobs

```bash
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
```bash
sudo sysctl -p /etc/sysctl.d/21-koii-validator.conf
```

#### Increase systemd and session file limits

Add

```bash
LimitNOFILE=1000000
```
to the [Service] section of your systemd service file, if you use one, otherwise add

```bash
DefaultLimitNOFILE=1000000
```

to the [Manager] section of /etc/systemd/system.conf.

```bash
sudo systemctl daemon-reload
```
```bash
sudo bash -c "cat >/etc/security/limits.d/90-koii-nofiles.conf <<EOF
# Increase process file descriptor count limit
* - nofile 1000000
EOF"
```
```bash
### Close all open sessions (log out then, in again) ###
```

#### System Clock

Large system clock drift can prevent a node from properly participating in Koii's gossip protocol. Ensure that your system clock is accurate. To check the current system clock, use:

```bash
timedatectl
```
Operators commonly use an ntp server to maintain an accurate system clock.

## Generate identity

Create an identity keypair for your validator by running:

```bash
koii-keygen new -o ~/validator-keypair.json
```

The identity public key can now be viewed by running:

```bash
koii-keygen pubkey ~/validator-keypair.json
```

:::note 
The "validator-keypair.json” file is also your (ed25519) private key.
:::

### Paper Wallet identity
You can create a paper wallet for your identity file instead of writing the keypair file to disk with:

```bash
koii-keygen new --no-outfile
```

The corresponding identity public key can now be viewed by running:

```bash
koii-keygen pubkey ASK
```

and then entering your seed phrase.

## More Koii CLI Configuration
Now that you have a keypair, set the koii configuration to use your validator keypair for all following commands:

```bash
koii config set --keypair ~/validator-keypair.json
```

You should see the following output:

```bash
Config File: /home/koii/.config/koii/cli/config.yml
RPC URL: https://testnet.koii.network 
WebSocket URL: wss://testnet.koii.network/ (computed)
Keypair Path: /home/koii/validator-keypair.json
Commitment: confirmed 
```

## Airdrop & Check Validator Balance
Airdrop yourself some KOII to get started:

```bash
koii airdrop 1
```

Note that airdrops are only available on Devnet and Testnet. Both are limited to 1 KOII per request.

To view your current balance:

```bash
koii balance
```

Or to see in finer detail:

```bash
koii balance --lamports
```