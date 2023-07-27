---
title: Let's Deploy
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Let's Deploy
---

After creating a Koii Task, it is highly recommended that you include a detailed description of the task so that node operators who wish to run your task have all the necessary information.

The configuration file `config-task.yml` contains information about your task. A sample `config-task.yml` file can be found in the root directory of your task folder.

:::info
The `secret_web3_storage_key` variable requires you to have a [Web3.storage account](https://web3.storage/); create an account and provide your API secret key into it.
:::

Follow the instructions in the file and fill in your task's information:

```yml
#Provide the taskId if you are updating the task
task_id: ""
# Name and description of your task
task_name: "web3-revolution"
task_description: 'This is a simple web3 task that returns "Hello, World!"'

# Network value can be DEVELOPMENT, ARWEAVE or IPFS
task_executable_network: "IPFS"

# Provide your web3.storage key as it is needed for uploading your metadata
secret_web3_storage_key: ""

# Path to your executable webpack if the selected network is IPFS otherwise leave blank
task_audit_program: ""

# Provide your transaction ID in case of ARWEAVE and in case of DEVELOPMENT give your executable name as main otherwise leave blank
task_audit_program_id: "main"

# Total round time of your task: it must be given in slots and each slot is roughly equal to 4ms
round_time: 1500

audit_window: 300
submission_window: 300

# Amounts in KOII

minimum_stake_amount: 2

# total_bounty_amount cannot be greater than bounty_amount_per_round
# total bounty is not accepted in case of update task
total_bounty_amount: 15

bounty_amount_per_round: 1

#Number of times allowed to re-submit the distribution  list in case the distribution list is audited
allowed_failed_distributions: 3

#Space in MBs
space: 1

# Note that the value field in RequirementTag is optional, so it is up to you to include it or not based on your use case.
# To add more global variables and task variables, please refer to the type, value, and description format shown below

author: "Cool Dev"
description: 'This is a simple task that returns "Hello, World!"'
repositoryUrl: "https://github.com/koii-network/hello-world"
imageUrl: "Enter you image URL"
requirementsTags:
  - type: TASK_VARIABLE
    value: SECRET_WEB3_STORAGE_KEY (required for this task)
    description: "used to connect web3.storage"
  - type: TASK_VARIABLE
    value: "SCRAPING_URL"
    description: "URL from which you want to scrape"
  - type: CPU
    value: "4-core"
  - type: RAM
    value: "5 GB"
  - type: STORAGE
    value: "test"
  - type: NETWORK
    value: "test"
  - type: ARCHITECTURE
    value: "AMD"
  - type: OS
    value: "OSX"
```

The `create-task-cli` is used to register a new task on K2.

:::note
Before proceeding, download the Koii CLI [here](/quickstart/command-line-tool/koii-cli/install-cli), create a [Koii wallet](/quickstart/command-line-tool/koii-cli/create-wallet), and fund your [wallet](/quickstart/command-line-tool/koii-cli/send-and-receive-tokens).
:::

After setting up the KOII CLI and funding your Koii wallet, follow the steps below to create and register your task on K2:

- Run the below command to compile your task code.

```bash
yarn webpack
```

- Run the following command in your terminal within the task directory to begin deploying your task;

```bash
npx @_koii/create-task-cli@latest
```

- It prompts for your wallet path:

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
   using CLI
 ❯ using config YML
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
