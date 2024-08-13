---
title: Deploy a New Task
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Deploy a New Task
---


# Getting Started:

- To deploy a new task, select the following option:

```sh
? Select operation › - Use arrow-keys. Return to submit.
    Create a new local repository
❯   Deploy a new task
    update existing task
    Activate/Deactivate task
    Claim reward
    Fund task with more KOII
    Withdraw staked funds from task
    upload assets to IPFS(metadata/local vars)
```

- There are two options to deploy a new task, the next prompt asks you to select how you want to deploy your task:

```sh
? Select operation › - Use arrow-keys. Return to submit.
❯   using CLI
    using config YML
```

:::tip
For deploying a task, it's recommended to use the `using config YML` option, which offers a more structured approach and contains comprehensive information about your task.
:::

To deploy a task, we recommend using the `config-task.yml` file, which can be easily edited in your task folder and contains more information about your task.

### Using config YML

The `config-task.yml` is the configuration file that contains the information needed to create a task. You can find a sample `config-task.yml` in the root directory of your task folder.

The `config-task.yml` should look like this:

```yaml
# Name and metadata of your task
task_name: 'task name'
author: 'Koii'
description: 'description'
repositoryUrl: 'https://github.com/koii-network/task-template' # Replace with your own repo URL
imageUrl: 'imageUrl'
infoUrl: 'infoUrl'

# Task executable network: DEVELOPMENT, ARWEAVE, or IPFS
# IPFS is the default value, as the CLI automatically manages the upload process via the Koii Storage SDK.
task_executable_network: 'IPFS'

# Task audit program: Path to your executable webpack if the selected network is IPFS. In the case of DEVELOPMENT, name it as main.
task_audit_program: 'dist/main.js'

# Round time: The total duration of your task, measured in slots (with each slot approximately equal to 408ms).
round_time: 1500

# Audit window: The audit window should be greater than 1/3 of the round time.
audit_window: 350

# Submission window: The submission window should be greater than 1/3 of the round time.
submission_window: 350

# Minimum stake amount: The minimum amount of KOII that a user must stake in order to participate in the task.
minimum_stake_amount: 1.9

# Task Bounty Type: KOII, KPL
task_type: 'KOII'

# OPTIONAL (ONLY IF Task Type = KPL) : Token Mint Address, Fire Token as an example here. 
token_type: "FJG2aEPtertCXoedgteCCMmgngSZo1Zd715oNBzR7xpR"

# Total bounty amount: The total bounty amount that will be distributed to the task. (Not accepted in case of update task).
total_bounty_amount: 10
bounty_amount_per_round: 0.1

# Allowed failed distributions: Number of times re-submission is allowed for the distribution list in case of an audit.
# It is also the number of rounds submission will be kept.
allowed_failed_distributions: 3

# Space: Space in MBs for the account size, that holds the task data.
# For testing tasks this can be set to 0.1, but for production it should be set to at least 1.
space: 0.1

# Note that the value field in RequirementTag is optional, so it is up to you to include it or not based on your use case.
# To add more global variables and task variables, please refer to the type, value, description format shown below.

requirementsTags:
  - type: CPU
    value: '4-core'
  - type: RAM
    value: '5 GB'
  - type: STORAGE
    value: '5 GB'

# OPTIONAL variables for creating task / REQUIRED variables for updating task

# ONLY provide the task_id and migrationDescription if you are updating the task, otherwise leave blank.
# Task_id: Previous task ID.
task_id: ''

# Migration description: Provide the description for changes made in the new version of the task.
migrationDescription: ''

```

- Follow the instructions on the file and fill in your task's information.

:::caution
Please make sure all of your environment variables are included in the `requirementsTags` section. Otherwise, the task will not be able to run.

For example:
If you have something like:

```js
const username = process.env.TWITTER_USER_NAME;
```

Then your `yml` file should have:

```yaml
- type: TASK_VARIABLE
  value: "TWITTER_USER_NAME"
  description: "used to connect twitter"
```

Make sure to set your environment variable `type` as `TASK_VARIABLE`.

The `value` name should be the same as your environment variable name. The vital thing to remember is that the value is the actual JavaScript valid property identifier, so it needs to follow the naming <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#accessing_properties" target="_blank"> rules</a>.

User will setup their key of the `value` in the Koii Node's `Settings -> Task Settings`

![Code Sample](/img/develop/setting-env-key.png)

So, if you have more than one environment variable, your `requirementsTags` section should look like this:

```yaml
requirementsTags:
  - type: TASK_VARIABLE
    value: "TWITTER_USER_NAME"
    description: "used to connect twitter"
```

With each environment variable having their `type` set as `TASK_VARIABLE`, a unique `value` and a short `description`.

:::

- After updating the config file, run:

```sh
npx @_koii/create-task-cli@latest
```

again and choose "using config YML".

- If an error occurs, follow the provided instructions for correction. If successful, your terminal will display an output similar to this:

```sh
Your MetaData CID is bafybeibjbtiendwzxq3ou5hsgauyym4wcg4gtodbhssh4cxhxdipqibrrm/metadata.json

Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) ›
```

- Confirm by entering `y` to deduct the necessary KOII amount for task creation.
- You will receive details of your task, including the "Task Id" and "Stake Pot Account Pubkey."

### Using the CLI

When opting for this method to deploy a new task, you will be prompted to enter all the essential information needed for task deployment.

Follow these instructions to input the required details:

- **Enter the name of the task:** Provide a name for your task. Your choice is entirely flexible (e.g., `Blazing-Fast-Execution`).

- **Enter a short description of your task:** Enter a concise description of your task's purpose.
  :::caution
  The description should not exceed 64 characters.
  :::

- **Please select the type of network: ** Choose **IPFS** for storage of your executable file, or **DEVELOPMENT** if you want to test in development environment.
  :::note
  The next prompt depends on your answer to the prompt above.
  :::

- [For DEVELOPMENT] **Enter the name of executable you want to run on task-nodes:** Enter a desired name for your task executable, this will be the same name of the executable file that will exist in the task node's executables folder.
  :::caution
  The name should not contain `.js`. For example, if you want to run `task-mytask.js`, you should enter `task-mytask` as the executable name.
  :::

- [For IPFS] **Enter the path to your executable webpack:** Provide the absolute path to your executable file. E.g: `/Users/<YOUR_HOME>/Documents/testing-task/dist/main.js`

- **Enter the round time in slots:** Define the preferred number of slots per round for your task (e.g., `3000`).

- **Enter the audit window in slots:** Specify the number of slots to be allocated to the audit window (e.g., `1200`).

- **Enter the submission window in slots:** Specify the number of slots to be allocated to the submission window (e.g., `1200`).
  :::caution
  Ensure that the audit and submission window slot numbers are lower than the slots per round.
  :::

- **Enter the minimum staking amount for the task (in KOII):** Set the minimum amount that node operators must stake on your task (e.g., `1.9`).

- **Enter the total bounty you want to allocate for the task (In KOII):** Define the total bounty allocated for your task (e.g., `1000`). It should be an amount that can cover at least 4 epochs.

- **Enter the bounty amount per round (In KOII):** Total amount would be divided equally for each node until the bounty fund is exhausted (e.g., `10`).

- **Enter the number of distribution list submission retry in case it fails:** Specify the number of accepted attempts to resubmit the distribution list if the initial submission fails.

- **Enter TaskMetadata CID hosted on IPFS (Leave empty for None):** If you've hosted the task's metadata on IPFS, enter the CID here; otherwise, leave this field empty.

- **Enter the space, you want to allocate for task account (in MBs):** Each task would need some storage for persistence, in general in MBs (e.g., `10`).
- **Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) › ** y/n

- **Final Confirmation:** Upon final confirmation (typically by entering `y`), your task will be created, and a `taskStateInfoKeypair.json` file will be generated to manage task state information.

:::danger
Strong measures should be taken to protect this JSON file.
:::

The output of the command should be similar to the following.

```sh
✔ Select operation › Deploy a new task
create-task
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
CONFIG {
  json_rpc_url: 'https://testnet.koii.network',
  websocket_url: '',
  keypair_path: '~/validator-keypair.json',
  address_labels: { '11111111111111111111111111111111': 'System Program' },
  commitment: 'confirmed'
}
Connection to cluster established: https://testnet.koii.network { 'feature-set': 167192737, 'solana-core': '1.10.0' }
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 201.98930624 SOL to pay for fees
Using program Koiitask22222222222222222222222222222222222
✔ Select operation › using CLI
create-task-cli
✔ Enter the name of the task … my-new-task
✔ Enter a short description of your task … This is a simple task
✔ Please select the type of network › IPFS
✔ Enter the path to your executable webpack … /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
FILEPATH /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
✔ Enter the round time in slots … 3000
✔ Enter the audit window in slots … 1200
✔ Enter the submission window in slots … 1200
✔ Enter the minimum staking amount for the task (in KOII) … 1.9
✔ Enter the total bounty you want to allocate for the task (In KOII) … 1000
✔ Enter the bounty amount per round (In KOII) … 10
✔ Enter the number of distribution list submission retry in case it fails … 3
✔ Enter TaskMetadata CID hosted on IPFS (Leave empty for None). …
✔ Enter the space, you want to allocate for task account (in MBs) … 5
✔ Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) … yes
Calling Create Task
Task Id: 7Rp5xL2R4jYJqEHEridRJ5kgvJbXo7oGepqKjYJEz3L
Stake Pot Account Pubkey: stakepotaccountTSbnExoJKCoQ3uPBwGtvcSEoGi2Z
Note: Task Id is basically the public key of taskStateInfoKeypair.json
Success
```

:::info
Whenever we refer to task account, we mean the task **State Info Pubkey**.
The bounty amount will be present in **Stake Pot Account**
:::

Once you have created a task, you can proceed to update existing tasks on the [next page](./update-task.md). Make sure you copy your **Task Id** and **Stake Pot Account Pubkey** and keep them safe.
