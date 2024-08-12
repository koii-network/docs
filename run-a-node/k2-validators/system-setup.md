---
title: System Setup
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: System Setup
---

::: warning
All of the following steps must be run on the **validator server**, unless otherwise specified.
:::

## 1. Ensure your system is up-to-date

Ensure your Ubuntu system is up-to-date and has all the base packages required

```sh
sudo apt update && sudo apt upgrade
sudo apt install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang
```

## 2. Set up a user account

```sh
sudo adduser koii
sudo usermod -aG sudo koii
sudo su koii
cd ~
```

:::info
Please ensure that all the following steps are performed within the home directory of the `koii` user **(/home/koii)**
:::

## 3. Koii CLI setup

- Required both on your secure computer (for keypair generation) and on the validator

```sh
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init.sh)"

# You may need to update PATH variable for the cli to be available
echo 'export PATH="/home/koii/.local/share/koii/install/active_release/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
# Set the koii config to point to the testnet
koii config set --url https://testnet.koii.network
# confirm config
koii config get
```

## 4. Key pair creation

:::info
Run commands for **only this step** on a **secure computer separate from the validator server, with the Koii CLI installed**
:::

We will be creating the following 4 key pairs:

```sh
koii-keygen new --outfile ~/validator-keypair.json
koii-keygen new --outfile ~/vote-account-keypair.json
koii-keygen new --outfile ~/stake-account-keypair.json
koii-keygen new --outfile ~/authorized-withdrawer-keypair.json
# To print your Public key(i.e. Wallet address) for any keypairs
# koii-keygen pubkey <Path to Keypair>
```

### Keypairs

- **validator-keypair.json :** Identity of the validator on the network. Copy this to the remote validator server at `/home/koii/validator-keypair.json`

- **vote-account-keypair.json** : Voting account on the network. Copy this to the remote validator server at `/home/koii/vote-account-keypair.json`

- **stake-account-keypair.json** : Keypair for your staking wallet. Store in a secure location **not on the validator** since this will hold the wallet that you delegate stake from

- **authorized-withdrawer-keypair.json** : Authorized withdrawer keypair, allowed to withdraw funds from your validator vote account. Store in a secure location **not on the validator** since this controls your vote account

:::danger
The **authorized withdrawer keypair** is the ultimate authority over your validator. This keypair will be able to withdraw from your vote account and will have additional permission to change all other aspects of your vote account.
_Anyone in possession of it can permanently take control of your vote account and make any changes as they please._
:::

## 5. Network configuration

If you have firewall software installed you will need to allow traffic on the following ports:

```sh
sudo ufw allow 10000:10500/udp
sudo ufw allow 10000:10500/tcp
sudo ufw allow 10899/tcp
sudo ufw allow 10900/tcp
```

## 6. System tuning setup

- Create a file at `/etc/systemd/system/systuner.service` :

```sh
[Unit]
Description=Koii System Tuner
After=network.target
[Service]
Type=simple
Restart=on-failure
RestartSec=1
ExecStart=/home/koii/.local/share/koii/install/active_release/bin/koii-sys-tuner --user koii
[Install]
WantedBy=multi-user.target
```

- Start and Enable the service to automatically start

```sh
sudo systemctl start systuner
sudo systemctl enable systuner
```
