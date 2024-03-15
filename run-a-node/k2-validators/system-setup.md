---
title: System Setup
description: Application layer nodes are one of the most-needed commodities in Web3.
image: img/thumbnail.png
sidebar_label: System Setup
---

import Description from "@site/src/components/description";
import Tooltip from "@site/src/components/tooltip";

# System Setup

:::warning

Our validators are currently under maintenance. Running a validator is not recommended at this time. Please wait for further instructions. Thank you for your patience.

:::

<Description
  text="This section provides a guide on how to configure your Ubuntu system"
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

Elevate the user

```bash
sudo su koii
cd ~
```

:::tip
Please make sure you are in the home directory of the user you created before continuing to
check by running `pwd` and it should return `/home/koii`
:::


## Step 2: Install the Koii software

We host an install script that will install and configure the Koii validator software. Run it with the following command

```bash
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init_v1.14.19.sh)"
```

:::tip
You may need to update the PATH environment variable. You can do this by running 
```bash
echo 'export PATH="/home/koii/.local/share/koii/install/active_release/bin:$PATH"' >> ~/.bashrc
```
:::

This script will install and configure the validator software with an identity key and the `koii` cli configured for `testnet`. It is important to note that this identity key created **is not** your validator identity. If you have a private key that is funded for staking with a validator you can replace the one generated with this script.

## Step 3: Allow traffic on ports

If you have firewall software installed you will need to allow traffic on the following ports:

**TCP and UDP for ports 10000-10500**

**TCP for port 10899**
