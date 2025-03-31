---
title: Choose Your Tasks
description: Running on VPS
sidebar_label: Choose Your Tasks
---

## NOW Choose your Tasks

Update the `TASKS` field with the task IDs you want to run, **separated by commas, no space between!** A full list of Tasks and their details (i.e. min stakes) is found here.

**A full list of Tasks can be found [HERE](/faq/whitelisted-tasks)**

Update `TASK_STAKES` field **with the minimum or greater stake amounts** corresponding to each task in TASKS, separated by commas.

Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the Staking wallet. This **should be greater than the SUM of all `TASK_STAKES` + 1 KOII** for covering gas.

   - Add any specific task variables required for the tasks at the end of the file.

   :::info Example
   After you enter a task Id that needs your information, you can add them as environment variables,
   please add them under the `SCRAPING_URL=""`
   for example: `TWITTER_USERNAME=""`
   :::
   ---

   :::tip Multi-task example

      ```sh
   TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3, AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
   TASK_STAKES= 5, 2
   ```

   :::

Remember this must be less than 1 KOII of what you will have in your Main wallet (i.e. you set `TASK_STAKES=2,2` and `INITIAL_STAKING_WALLET_BALANCE= 5` then you must have in your main wallet 6 KOII so there is enough for covering gas)

```sh
Ctrl/Command +S = Save
Ctrl/Command +X = Exit
```

---

**Install dependencies**
 - Ensure **Koii CLI** is Installed. Documentation [here](/develop/command-line-tool/koii-cli/install-cli)

 - **Wallet setup** (Set up New Koii Public Key/New wallet) Documentation [here](/develop/command-line-tool/koii-cli/create-wallet)

:::tip
Don't forget to run this after installing CLI

```sh
koii config set --url https://mainnet.koii.network
```

:::

```sh
koii balance
```

It will show: "Error: Dynamic program error: No default signer found, run "koii-keygen new -o ....." to create a new one" Please copy the command from the "" which is automatically generated path, as that will set the wallet keys in the correct place. It will usually look like this:

```sh
koii-keygen new -o /YOUR-USER/.config/koii/id.json
```

To improve security, the system wants you to set up BIP39 Passphrase - an additional layer for securing your account, please fill it in. **SAVE the generated SEED PHRASE in order for you to recover your funds later!**

Check what is your Wallet address and Transfer some KOII in it! at least 4 KOII to launch your first Free Token Task

```sh
koii address
```

To get started Koii Foundation has created a Koii Faucet in order to receive the first KOII - start from [here](/develop/command-line-tool/koii-cli/send-and-receive-tokens)
