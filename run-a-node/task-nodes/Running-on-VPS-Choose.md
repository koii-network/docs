---
title: Choose Your Tasks
description: Running on VPS
sidebar_label: Choose Your Tasks
---

## NOW Choose your Tasks

Update the `TASKS` field with the task IDs you want to run, **seperataed by commas, no space between!** Full list of Tasks and their details (i.e. min stakes) found here.

**Full list of Tasks can be found [HERE](https://docs.koii.network/faq/documentations/#full-list-of-tasks-for-vps)**

Update `TASK_STAKES` field **with the minimum or greater stake amounts** corresponding to each task in TASKS, seperated by commas.

Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the Staking wallet. This **should be greater than the SUM of all `TASK_STAKES` + 1 KOII** for covering gas.

   - Add any specific task variables required for the tasks at the end of the file.
   
   :::info Example
   After you enter a task Id needs your information, you can add them as environment variables,
   please add them under the `SCRAPING_URL=""`  
   for example: `TWITTER_USERNAME=""`
   :::
   ---

   :::tip Multi-task example
      ```bash
   TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3, AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
   TASK_STAKES= 5, 2
   ```
   :::

Remember this must be less than 1 KOII of what you will have in your Main wallet (i.e. you set `TASK_STAKES=2,2` and `INITIAL_STAKING_WALLET_BALANCE= 5` then you must have in your main wallet 6 KOII so there is enough for covering gas)

```bash
Ctrl/Command +S = Save
Ctrl/Command +X = Exit
```
---

**Install dependencies**
 - Ensure **Koii CLI** is Installed. Documentation [here](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli)

 - **Wallet setup** (Set up New Koii Publick Key/New wallet) Documentation [here](https://docs.koii.network/develop/command-line-tool/koii-cli/create-wallet)

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