---
title: System Setup
description: This section provides a guide for how to configure your Ubuntu system
image: img/thumbnail.png
sidebar_label: System Setup
---

import Description from "@site/src/components/description";

# System Setup

<Description
  text="This section provides a guide for how to configure your Ubuntu system"
/>

Before continuing with this section you should ensure that your environment is up to date

```bash
sudo apt update
sudo apt upgrade
```

After updating your environment you will need to install the required packages

```bash
sudo apt install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang
```

## Step 1: Create a new user

We recommend running the validator under a user that is not `root` for security reasons. Create a user to run the validator

```bash
sudo adduser koii
sudo usermod -aG sudo koii
```

Elevate into the user

```bash 
sudo su koii
```

## Step 2: Install the Koii software

We host an install script that will install and configure the Koii validator software. Run it with the following command

```bash
sh -c "$(curl -sSfL https://koi-node-releases.s3.us-east-2.amazonaws.com/koii-install-init.sh)"
```

This script will install and configure the validator software with an identity key and the `koii` cli configured for `testnet`. It is important to note that this identity key created **is not** your validator identity. If you have a private key which is funded for staking with a validator you can replace the one generated with this script. 

If everything is configured correctly you can test it by running `koii balance` which will return the balance of the local key.

## Step 3: Run the System Tuner

This will configure certain aspects of your system to better support the validator.

```bash
koii-sys-tuner --user koii
```
