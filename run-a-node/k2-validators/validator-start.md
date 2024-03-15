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

## Create Authorized Withdrawer Account

If you haven't already done so, create an authorized-withdrawer keypair to be used as the ultimate authority over your validator. This keypair will have the authority to withdraw from your vote account, and will have the additional authority to change all other aspects of your vote account. Needless to say, this is a very important keypair as anyone who possesses it can make any changes to your vote account, including taking ownership of it permanently. So it is very important to keep your authorized-withdrawer keypair in a safe location. It does not need to be stored on your validator, and should not be stored anywhere from where it could be accessed by unauthorized parties. To create your authorized-withdrawer keypair:

```bash
koii-keygen new -o ~/authorized-withdrawer-keypair.json
```

## Create Vote Account

If you haven’t already done so, create a vote-account keypair and create the vote account on the network. If you have completed this step, you should see the “vote-account-keypair.json” in your Koii runtime directory:

```bash
koii-keygen new -o ~/vote-account-keypair.json
```

The following command can be used to create your vote account on the blockchain with all the default options:
```bash
koii create-vote-account ~/vote-account-keypair.json ~/validator-keypair.json ~/authorized-withdrawer-keypair.json
```

Remember to move your authorized withdrawer keypair into a very secure location after running the above command.

## Known validators

If you know and respect other validator operators, you can specify this on the command line with the `--known-validator <PUBKEY>` argument to `koii-validator`. You can specify multiple ones by repeating the argument `--known-validator <PUBKEY1> --known-validator <PUBKEY2>`. This has two effects, one is when the validator is booting with `--only-known-rpc`, it will only ask that set of known nodes for downloading genesis and snapshot data. Another is that in combination with the `--halt-on-known-validators-accounts-hash-mismatch` option, it will monitor the merkle root hash of the entire accounts state of other known nodes on gossip and if the hashes produce any mismatch, the validator will halt the node to prevent the validator from voting or processing potentially incorrect state values. At the moment, the slot that the validator publishes the hash on is tied to the snapshot interval. For the feature to be effective, all validators in the known set should be set to the same snapshot interval value or multiples of the same.

It is highly recommended you use these options to prevent malicious snapshot state download or account state divergence.

## Connect Your Validator

Connect to the cluster by running:

```bash
koii-validator \
  --identity ~/validator-keypair.json \
  --vote-account ~/vote-account-keypair.json \
  --rpc-port 8899 \
  --entrypoint testnet.koii.network:8001 \
  --limit-ledger-size \
  --log ~/koii-validator.log
```

To force validator logging to the console add a `--log` argument, otherwise the validator will automatically log to a file.

The ledger will be placed in the `ledger/` directory by default, use the -`-ledger` argument to specify a different location.

:::note
You can use a paper wallet seed phrase for your `--identity` and/or `--authorized-voter` keypairs. To use these, pass the respective argument as `koii-validator --identity ASK ... --authorized-voter ASK ...` and you will be prompted to enter your seed phrases and optional passphrase.
:::

Confirm your validator is connected to the network by opening a new terminal and running:

koii gossip

If your validator is connected, its public key and IP address will appear in the list.