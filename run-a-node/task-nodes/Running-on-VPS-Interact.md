---
title: Interact with Running Nodes
description: Running on VPS
sidebar_label: Interact with Running Nodes
---

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









### How to launch Koii Network Task Node on VPS
[by C-Diamond](https://www.youtube.com/@c-diamond/videos)
<ReactPlayer width="100%" alt="youtube video embed by C-Diamond" controls url="https://youtu.be/fkcl98CYXWU?si=GGBxxkCY9RBVo1X4" />

### Complete Guide to Setting Up a Koii Node on a Debian VPS: From Zero to Earning Rewards
[by Pewd_Crypto](https://www.youtube.com/@pewdcrypto3985/videos)
<ReactPlayer width="100%" alt="youtube video embed by Pewd_Crypto" controls url="https://youtu.be/h9LkcSo29IA?si=rWZYygrQd0UZMUIJ" />