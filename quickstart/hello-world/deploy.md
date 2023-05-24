---
title:  Deploy Task
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label:  Deploy Task
---

The `create-task-cli` is used to register a new task on K2.

:::note
Before proceeding, download the Koii CLI [here](/quickstart/command-line-tool/koii-cli/install-cli), create a [Koii wallet](/quickstart/command-line-tool/koii-cli/create-wallet), and fund your [wallet](/quickstart/command-line-tool/koii-cli/send-and-receive-tokens).
:::

After setting up the KOII CLI and funding your Koii wallet, follow the steps below to create and register your task on K2:

- Run `npx @_koii/create-task-cli@latest` in your terminal within the task directory; it prompts for your wallet path:

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
```

:::tip
Run `koii config get` to get the information of your wallet path.

Don't have a Koii wallet yet? Check [here](/quickstart/command-line-tool/koii-cli/create-wallet) and generate one quickly. Remember to save your wallet path.
:::

- Next, you will be prompted with seven options, select `Create a new task` to create a new task:
```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a new task
    update existing task
    Activate task
    Claim reward
    Fund task with more KOII
    Withdraw staked funds from task
    upload assets to IPFS(metadata/local vars)
```
- There are two options to create a new task, select "using config YML" as we've updated the `config-task.yml` file with our task information:

```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   using CLI
    using config YML
```
- If there is an error, follow the instructions to correct it. If it was successful, your terminal should display an output similar to this:

```bash
Your MetaData CID is bafybeibjbtiendwzxq3ou5hsgauyym4wcg4gtodbhssh4cxhxdipqibrrm/metadata.json

Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) ›
```
- Hit `y` to subtract the necessary amount of KOII for your task creation.
- Finally, the details of your task, including the task ID, are returned.

```bash
Calling Create Task
Task Id: 4b4A15VaMqFtzgtSHxJsJ8UxVaUSQ4vRVEfnqMcFxUPh
Stake Pot Account Pubkey: stakepotaccount6G1XJXA1AZBKbwdhhbTSDi3AGLs7
Note: Task Id is basically the public key of taskStateInfoKeypair.json
Success
```
**Congratulations!** You've created your first Koii task. See the links below to learn and build more Koii tasks:

- [Google doodle](/develop/task-tutorials/google-doodle-task/)
- [Linktree Task](/develop/task-tutorials/linktree-task/intro)