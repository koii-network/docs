---
title: VPS Configuration
description: Running on VPS
sidebar_label: VPS Configuration
---

import ReactPlayer from "react-player";


## Before you start
Setting up and maintaining a Koii Node requires a basic level of technical knowledge, basic experience with Linux is advisable. Anyway, we will guide you through the entire process step-by-step, in case you will encounter some obstacles please reach out to **#node-vps channel** in our [Discord](https://discord.gg/koii-network).

Make sure your hardware and internet speeds meet the minimum requirements for a Koii Node which are very minimal (similar to the Desktop version) but at least 2GB RAM and >1GHz processor and stable internet.

If you decide running a node on VPS isn't for you there are other options available, like the Desktop version. Go to our website where you will be able to download the [Desktop Node](https://www.koii.network/node)

## Operating System
Using **Ubuntu Server 20.04.xx LTS** is highly recommended for running Koii Nodes due to its stability and compatibility. The acronym LTS stands for "Long Term Support" which signifies that Ubuntu will provide updates and patches for this operating system until 2030.


## Rented VPS Node or Rented Dedicated Server
A Virtual Private Server (VPS) is a type of hosting service that simulates a dedicated server environment but with shared hardware resources among multiple users. A dedicated server (DS) is a type of physical server that offers complete control over its hardware resources. This allows you to utilize all of the CPU, RAM, and storage available on the server without having to share it with other users. If your dedicated server has the necessary hardware to satisfy the combined requirements of multiple Koii Nodes, you may operate them on a single dedicated server.

Due to the variations in the ordering process and customer dashboard for each server provider, we cannot provide detailed instructions for each one. We suggest installing Ubuntu 20.04 as your operating system, but if you prefer to use a different operating system then you do that at your own risk.



## Koii Node Installation
**Connect with SSH**

If you are renting a server or need to connect to your home-hosted server remotely, you will require an SSH client or terminal to communicate with your Koii node. If you have a preferred terminal please use that. Otherwise, Windows Command Prompt or the built-in terminal for MacOS and Linux users can be used. Putty is a free SSH client available for Windows users who prefer a graphical interface, it can be downloaded from [Here](https://www.putty.org/). To establish a remote connection to your Koii node, you will utilize SSH, also known as Secure Shell. This enables two computers to communicate over the internet. Initially, you will require your Koii node's IP address: If you are hosting from home, this will be your public IP address. If you are renting a server, your provider will give you an IP address.

We will begin by connecting as the root user, although some server providers may use Ubuntu or admin instead.

To connect to your server, type the following command in your SSH client and then enter your server's password when prompted (replacing 11.111.11.11 with your server's IP address):

```bash
ssh root@11.111.11.11
```
Once you have successfully logged in, you will be presented with a command line that appears similar to:

```bash
root@servername:~$
```

## Setting Up the Environment on VPS

1. **Install OS Updates**

Before deploying Koii Node on your server you should **install the most recent updates and security patches for your operating system**. To accomplish this, use your terminal to execute the following command:

```bash
sudo apt update && sudo apt dist-upgrade -y
```

The updates will now begin downloading and installing. This process may take some time, depending on your server hardware and download speed. When the updates are completed, you will be returned to your command line.

2. **Retrieve all the necessary files for thr Koii node on VPS (Cloning Main Repository)**

In order to successfully launch a Koii Node there are prerequisites which have to be stored in your server for Koii Node to function.

```bash
git clone https://github.com/koii-network/VPS-task
```

Then we enter that exact directory where the installation files can be found.

```bash
cd VPS-task
```

3. **Configure the Environment Variables**

Update main configuration file:

```bash
nano .env-local
```

Set `ENVIRONMENT` to `"production"`




<!-- 1. **Clone the Task-Template Repository**:
   ```bash
   git clone https://github.com/koii-network/VPS-task
   cd VPS-task
   ```

2. **Configure Environment Variables**:
   - Update the `.env.local` file.
     - Set the `ENVIRONMENT` field to `"production"`.
   - Update the `TASKS` field with the task IDs you want to run, separated by commas.
   - Update the `TASK_STAKES` field with the stake amounts corresponding to each task in `TASKS`, separated by commas.
   - Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the staking wallet. This should be greater than the sum of all `TASK_STAKES` plus a buffer of at least 1 KOII for rent.
   - Add any specific task variables required for the tasks at the end of the file.

   :::info Example
   After you enter a task Id needs your information, you can add them as environment variables,
   please add them under the SCRAPING_URL=""
   for example: TWITTER_USERNAME=""
   :::
   ---

   :::tip Multi-task example
      ```bash
   TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3, AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
   TASK_STAKES= 5, 2
   ```
   :::

3. **Ensure Koii CLI is Installed**:
   The task node will use the wallet pointed to in the Koii configuration.  [Click here for the installation steps](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli).

---

### Set up New Koii Pubkey

   ```bash
   koii balance
   ```
It will shows "Error: Dynamic program error: No default signer found, run "koii-keygen new -o /your/path/of/id.json" to create a new one"
**this path will automatically generated**.

   ```bash
   koii-keygen new -o /your/path/of/id.json
   ```

- After that the system will generated a new account for you, associate with your account address.

- To improve security, system want you set up BIP39 Passphrase, you can leave it for empty.

- Then you will have your new pubkey, **transfer some tokens to this account using [Finnie Wallet](https://chromewebstore.google.com/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj)**.

---

### Run Docker Compose:

- First, [Install](https://docs.docker.com/get-docker/) the **Docker** to your computer.

- Then, use this code to run the task node in Docker

   ```bash
   docker-compose up
   ```
   This command creates a staking wallet, stakes on the tasks, and then runs the tasks.

- Now your Node is running in Docker

---

### Managing Stakes

- Use this code to load your wallet to docker

   ```bash
   docker run -v /your/path/of/wallet:/wallet your-image-name
   ```

:::tip
you can find you wallet path in `.env.local`, and looking for `WALLET_LOCATION`
:::

- In this case, the image name is `public.ecr.aws/koii-network/task_node`, you can always find your image name by using:

 ```bash
   docker images ls
   ```

- Use this code to Unstake, Claim rewards in your node task:

   ```bash
    exec task node npx @ koii/create-task-cli@latest
   ```
**The option will looks like:**

 Wallet path:`/your/path/of/wallet/id.json?`
  Select operation
   - Create a new task
   - update existing task
   - Activate/Deactivate task
   - Claim reward
   - Fund task with more KOII
   - Withdraw staked funds from task
   - upload assets to IPFS(metadata/local vars) -->
## Video Guides
### How to launch a Koii Task Node on VPS
[by C-Diamond](https://www.youtube.com/@c-diamond/videos)
<ReactPlayer width="100%" alt="youtube video embed by C-Diamond" controls url="https://youtu.be/fkcl98CYXWU?si=GGBxxkCY9RBVo1X4" />

### Complete Guide to Setting Up a Koii Node on a Debian VPS: From Zero to Earning Rewards
[by Pewd_Crypto](https://www.youtube.com/@pewdcrypto3985/videos)
<ReactPlayer width="100%" alt="youtube video embed by Pewd_Crypto" controls url="https://youtu.be/h9LkcSo29IA?si=rWZYygrQd0UZMUIJ" />
