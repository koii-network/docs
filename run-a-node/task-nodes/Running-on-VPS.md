---
title: VPS Tutorial
description: Running on VPS
sidebar_label: VPS Tutorial
---

import ReactPlayer from "react-player";


## Before you start
Setting up and maintaining a Koii Node requires a basic level of technical knowledge, basic experience with Linux is advisable. Anyway we will guide you through the entire process step-by-step, in case you will encounter some obstacles please reach out to **#node-vps channel** in our [Discord](https://discord.gg/koii-network).

Make sure your hardware and internet speeds meet the minimum requirements for a Koii Node which are very minimal (similiar to Desktop version) but at least 2GB RAM and >1GHz processor and stable internet.

If you decide running a node on VPS isn't for you there are other options available, like Dekstop version. Go to our website where you will be able to download [Desktop Node](https://www.koii.network/node)

## Operating System
Using Ubuntu Server 20.04.xx LTS is highly recommended for running Koii Nodes due to its stability and compatibility. The acronym LTS stands for "Long Term Support" which signifies that Ubuntu will provide updates and patches for this operating system until 2030.

## Koii Node Installation   
**Connect with SSH**

If you are renting a server or need to connect to your home-hosted server remotely, you will require an SSH client or terminal to communicate with your Koii node. If you have a preferred terminal please use that. Otherwise, Windows Command Prompt or the built-in terminal for MacOS and Linux users can be used. Putty is a free SSH client available for Windows users who prefer a graphical interface, it can be downloaded from [Here](www.putty.org). To establish a remote connection to your Koii node, you will utilize SSH, also known as Secure Shell. This enables two computers to communicate over the internet. Initially, you will require your Koii node's IP address: If you are hosting from home, this will be your public IP address. If you are renting a server, your provider will give you an IP address.

We will begin by connecting as the root user, although some server providers may use ubuntu or admin instead.

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

Before deploying Koii Node on your server you should install the most recent updates and security patches for your operating system. To accomplish this, use your terminal to execute the following command:

```bash
sudo apt update && sudo apt dist-upgrade -y
```

The updates will now begin downloading and installing. This process may take some time, depending on your server hardware and download speed. When the updates are completed, you will be returned to your command line.

2. **Retrieve all the necessary files for Koii node on VPS (Cloning Main Repository)**

In order to succesfully launch a Koii Node there are perequisites which has to be stored in your server for Koii Node to function.

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

Update the `TASKS` field with the task IDs you want to run, seperataed by commas, no space between! Full list of Tasks and their details (i.e. min stakes) found here.

Update `TASK_STAKES` field with the minimum or greater stake amounts corresponding to each task in TASKS, seperated by commas.

Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the Staking wallet. This should be greater than the SUM of all `TASK_STAKES` + 1 KOII for covering gas.

Remember this must be less than 1 KOII of what you will have in your Main wallet (i.e. you set `TASK_STAKES=2,2` and `INITIAL_STAKING_WALLET_BALANCE= 5` then you must have in your main wallet 6 KOII so there is enough for covering gas)

```bash
Ctrl +S = Save
Ctrl +X = Exit
```

4. **Install dependencies**
 - Ensure Koii CLI is Installed. Documentation [here](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli)

 - Wallet setup (Set up New Koii Publick Key/New wallet) Documentation [here](https://docs.koii.network/develop/command-line-tool/koii-cli/create-wallet)

:::tip
Don't forget to run this after installed Cli
```bash
koii config set --url https://testnet.koii.live
```
:::




```bath
koii balance
```

It will show: "Error: Dynamic program error: No default signer found, run "koii-keygen new -o ....." to create a new one" Please copy the command from the "" which is automatically generated path, as that will set the wallet keys in correct place.

```bath
koii-keygen new -o /YOUR-USER/.config/koii/id.json
```

To improve security, system want you to set up BIP39 Passphrase - additional layer for securing your account, please fill it in. **SAVE the generated SEED PHRASE in order for you to recover your funds later!**


Check what is your Wallet address and Transfer some KOII in it! at least 4 KOII to launch your first Free Token Task

```bash
koii address
```

For getting started Koii Foundation have created a Koii Faucet in order to receive first KOII - start from [here](https://docs.koii.network/develop/command-line-tool/koii-cli/send-and-receive-tokens)

- **Installing Docker**

```bash
sudo apt install docker
```
```bash
sudo apt install docker-compose
```

## Run the Docker Compose in order to launch your node

```bash
cd VPS-task
docker-compose up
```

This command creates a staking wallet, stakes on the tasks, and then runs the tasks.

:::tip
If you encounter "TypeError [ERR_INVALID_URL]: Invalid URL" error, please verify Docker version!
```bash
docker-compose --version
```

If you have version below 1.29, please execute next commands:

```bash
which docker-compose 
```
:::

Update the docker-compose library. Make sure that path in the end is the same as you retrieved from previous command.

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Give the system ther permission

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

## Run the Docker Compose again in order to launch sucessfuly your node

```bash
cd VPS-task
docker-compose up
```

**After completing this step you have your node sucessfully running**

In order to verify this:

```bash
docker logs -f --tail 100 task_node
```

If the logs return, something like i.e.

```bash
task_node    | [ '4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is' ] [ '2' ]
task_node    | Staking wallet already exists
task_node    | { isStakingWalletExists: true }
task_node    | Staked 2 on 4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is
.....
Cluster RPC URL: https://testnet.koii.live
task_node  | *********************ENDPOINTS*********************
task_node  | /attention*
task_node  | /
task_node  | /nodes/:taskId
task_node  | /register-node/:taskId
task_node  | /get-all-running-tasks
task_node  | /namespace-wrapper
task_node  | /tasks
task_node  | *********************END ENDPOINTS*********************
task_node  | currentInterval undefined
task_node  | running tasks now...
task_node  | SETTING UP EXPRESS
task_node  | setup function called
task_node  | Free Token Task! listening on port 10000
task_node  | getTaskLevelDBPath
```

It is success!

## How to interact now with the running Node?

1. Install dependencies (NodeJS + NPM)

```bash
sudo apt install npm
```

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm@latest
```

Execute the command 'create-task-cli' and you will see an interactive menu


```bash
npx @_koii/create-task-cli@latest

```

```
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a new task
    update existing task
    Activate/Deactivate task
    Claim reward
    Fund task with more KOII
    Withdraw staked funds from task
    upload assets to IPFS(metadata/local vars)
```

## Example how to claim rewards from the "Free Token Task!"

```
Calling ClaimReward
✔ Enter the task id … 4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is
✔ Enter the stakePotAccount address … stakepotaccountsP9iQfvCxMeS7RNNgrSVTDyxJRPQ
✔ Enter the beneficiaryAccount address (Address that the funds will be transferred to) … HERE_YOUR_WALLET_PUBLIC_ADDRESS
✔ Enter the path to Claimer wallet … /home/koii/koii-node/namespace/staking_wallet.json
Success
```

4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is represents the Task ID
stakepotaccountsP9iQfvCxMeS7RNNgrSVTDyxJRPQ represents the Stake Pot Account
HERE_YOUR_WALLET_PUBLIC_ADDRESS represents the Wallet that will receive the claimed Coins
/home/koii/koii-node/namespace/staking_wallet.json represents the default path to your staking wallet

## Example how to Unstake from the "Free Token Task!"

```
1. Calling Withdraw staked funds from task
✔ Enter the task id … 4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is
✔ Enter the submitter wallet path address … /home/koii/koii-node/namespace/staking_wallet.json

Gives error but don't worry, follow on with next step ->

2.Calling ClaimReward
✔ Enter the task id … 4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is
✔ Enter the stakePotAccount address … stakepotaccountUSDX2sDSAcq8ZEvA3Tiv7tRpJ1Dv
✔ Enter the beneficiaryAccount address (Address that the funds will be transferred to) … HERE_YOUR_WALLET_PUBLIC_ADDRESS
✔ Enter the path to Claimer wallet … /home/koii/koii-node/namespace/staking_wallet.json
Success
```

4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is represents the Task ID
stakepotaccountsP9iQfvCxMeS7RNNgrSVTDyxJRPQ represents the Stake Pot Account
HERE_YOUR_WALLET_PUBLIC_ADDRESS represents the Wallet that will receive the claimed Coins
/home/koii/koii-node/namespace/staking_wallet.json represents the default path to your staking wallet


## Additional way to claim rewards using Koii_claimer:

In order to have an semi-automatic way to claim $KOII rewards, first need to get perequisites which has to be stored in your server for Koii CLaimer to function.

```bash
git clone https://github.com/eviangel/Koii_claimer

```

Then we enter that exact directory where the installation files can be found.
```bash
cd Koii_claimer
```

Then we need to create json file that contains the task configurations in order to claim rewards correctly

```bash
nano params.json
```

This will create a json file now you need to fill in some information for example:

```bash
{"taskStateInfoAddress": "4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is",

"stakePotAccount": "stakepotaccountsP9iQfvCxMeS7RNNgrSVTDyxJRPQ",

"beneficiaryAccount": "HERE_YOUR_WALLET_PUBLIC_ADDRESS",

"claimerKeypairPath": "VPS-task/namespace/staking_wallet.json"}
```

Please change the beneficiaryAccount here to make it your wallet public address.

Then all you need is to call :


```bash
npx koii_claimrewards@latest params.json
```

## Additional helpful commands you should know

```bash
koii -u https://testnet.koii.live balance
koii --version
koii address
koii-keygen pubkey staking_wallet.json /or/ id.json
```

If you encounter after server restart that your "koii" commands is not working, you should set PATH again in order to fully functioning KOII CLI!

```bash
export PATH="/root/.local/share/koii/install/active_release/bin:$PATH" --check verify what is your correct path in certain server!
```

Feel free to reach out to us in [Discord](https://discord.gg/koii-network) if you have any further questions or need assistance.

Thing to note: You should always have to keep your Staking_Public_Key balance filled.

**Full list of Tasks can be found [here](https://docs.koii.network/faq/pagethree/#full-list-of-tasks-for-vps)**



### How to launch Koii Network Task Node on VPS
[by C-Diamond](https://www.youtube.com/@c-diamond/videos)
<ReactPlayer width="100%" alt="youtube video embed by C-Diamond" controls url="https://youtu.be/fkcl98CYXWU?si=GGBxxkCY9RBVo1X4" />

### Complete Guide to Setting Up a Koii Node on a Debian VPS: From Zero to Earning Rewards
[by Pewd_Crypto](https://www.youtube.com/@pewdcrypto3985/videos)
<ReactPlayer width="100%" alt="youtube video embed by Pewd_Crypto" controls url="https://youtu.be/h9LkcSo29IA?si=rWZYygrQd0UZMUIJ" />


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
**this path will automaticly generated**.

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