---
title: Updating a Deployed Task
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Updating a Deployed Task
---

After deploying a Koii Task, if you wish to update it, follow these steps:

- Firstly, make all the desired changes in your code, implementing the necessary modifications and improvements.
- Navigate to the config-task.yml file located in the root directory of your project.

In the `config-task.yml` file, you will find instructions and fields where you need to fill in your task's updated information. Ensure you include the `task_id` of the task that needs to be re-deployed. This `task_id` is essential to identify the specific task that requires updating.

Additionally, the `migrationDescription` parameter is used specifically for task updates. On the Koii Node, it informs task runners what was changed in the new version of the task. Make sure to describe what has changed so that your community is confident in running the new version of your task.

Once you have made the necessary changes and provided the updated information in the config-task.yml file, you can proceed with the re-deployment of your task.

```yml
#Provide the taskId if you are updating the task
task_id: "<Your Previous Task Id>"
# Name and description of your task
task_name: "web3-revolution"
task_description: 'This is a simple web3 task that returns "Hello, World!"'

migrationDescription: "Optimized CPU and RAM usage"

# Network value can be DEVELOPMENT, ARWEAVE or IPFS
task_executable_network: "IPFS"

# Provide your web3.storage key as it is needed for uploading your metadata
secret_web3_storage_key: ""

# Path to your executable webpack if the selected network is IPFS and in case of DEVELOPMENT  name it as main
task_audit_program: "main"

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

- After updating your code and `config-task.yml`, run the below command to compile your task code.

```bash
npm webpack
```

- Run the following command in your terminal within the task directory to begin deploying your task;

```bash
npx @_koii/create-task-cli@latest
```

- Next, you will be prompted with seven options, select `update existing task` to update your existing task:

```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a new task
    update existing task
    Activate/Deactivate task
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

Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees is taken from the last task›
```

- Hit `y` to subtract the necessary amount of KOII for your task creation.
- Finally, the details of your updated task, including the task ID, are returned.

```bash
Calling Create Task
Task Id: 4b4A15VaMqFtzgtSHxJsJ8UxVaUSQ4vRVEfnqMcFxUPh
Stake Pot Account Pubkey: stakepotaccount6G1XJXA1AZBKbwdhhbTSDi3AGLs7
Note: Task Id is basically the public key of taskStateInfoKeypair.json
Success
```
