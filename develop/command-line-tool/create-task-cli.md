---
title: Create Task CLI
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Create Task CLI
---

# Create Task CLI

![Banner](../img/Create%20Task%20CLI.svg)

We provide `create-task-cli` tool for task creators to easily:

- Create a new task
- Update an existing task
- Activate a task
- Claim reward
- Fund a task with more KOII
- Withdraw staked funds from a task
- Upload assets to IPFS

![Image](../img/DEV%20koii%20task%20for%20docs.svg)

To get started with the installation process and its usage, follow the steps provided below:

## Install Create-Task-CLI

- Run the command below in your terminal within the task directory to install and run the create-task-cli:

```bash
npx @_koii/create-task-cli@latest
```

- It prompts for your wallet path:

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
```

:::tip
Run `koii config get` in another terminal, the “**Keypair Path**” is your wallet path.

Don't have a Koii wallet yet? Check [here](/quickstart/command-line-tool/koii-cli/create-wallet) and generate one quickly.
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

- There are two options to create a new task, the next prompt asks you to select how you want to create your task:

```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   using CLI
    using config YML
```

To create a task, we recommend using the `config-task.yml` file, which can be easily edited in your task folder and contains more information about your task.

### Using config YML

The `config-task.yml` is the configuration file that contains the information needed to create a task. You can find a sample `config-task.yml` in the root directory of your task folder.

The `config-task.yml` should look like this:

```yaml
# Provide the taskId if you are updating the task
task_id: ""
# Name and description of your task
task_name: "Your-task-name"
task_description: "This task is to test out the namespace function"

# Network value can be DEVELOPMENT, ARWEAVE or IPFS
task_executable_network: "DEVELOPMENT"

# Provide your web3.storage key as it is needed for uploading your metadata
secret_web3_storage_key: ""

# Path to your executable webpack if the selected network is IPFS otherwise leave blank
task_audit_program: ""

# Provide your transaction ID in case of ARWEAVE and in case of DEVELOPMENT give your executable name as main otherwise leave blank
task_audit_program_id: "main"

# Total round time of your task: it must be given in slots and each slot is roughly equal to 4ms
round_time: 600

audit_window: 200
submission_window: 200

# Amounts in KOII

minimum_stake_amount: 5

# Total_bounty_amount cannot be greater than bounty_amount_per_round
# Total bounty is not accepted in case of updating a task
total_bounty_amount: 10

bounty_amount_per_round: 1

# Number of times allowed to re-submit the distribution list in case the distribution list is audited
allowed_failed_distributions: 3

#Space in MBs
space: 1

# Note that the value field in RequirementTag is optional, so it is up to you to include it or not based on your use case.
# To add more global variables and task variables, please refer to the type, value, and description format shown below

author: "Your name"
description: "task-description"
repositoryUrl: "Github/Gitlab link"
imageUrl: "Enter you image URL"
requirementsTags:
  - type: TASK_VARIABLE
    value: "SECRET_WEB3_STORAGE_KEY"
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

- Follow the instructions and fill in your task's information.

:::caution
Please make sure all of your environment variables are included in the `requirementsTags` section. Otherwise, the task will not be able to run.

For example:
If you have something like:

```javascript
const username = process.env.TWITTER_USER_NAME;
```

Then in your `yml` file should have:

```yaml
- type: TASK_VARIABLE
  value: "TWITTER_USER_NAME"
  description: "used to connect twitter"
```

Make sure to set your environment variable `type` as `TASK_VARIABLE`.

The `value` name should be the same as your environment variable name. The vital thing to remember is that the value is the actual JavaScript valid property identifier, so it needs to follow the naming <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#accessing_properties" target="_blank"> rules</a>.

User will setup their key of the `value` in the desktop node's `Settings -> Task Settings`

![Code Sample](../img/setting_env_key.png)

So, if you have more than one environment variable, your `requirementsTags` section should look like this:

```yml
requirementsTags:
  - type: TASK_VARIABLE
    value: "SECRET_WEB3_STORAGE_KEY"
    description: "used to connect web3.storage"
  - type: TASK_VARIABLE
    value: "TWITTER_USER_NAME"
    description: "used to connect twitter"
```

With each environment variable having their `type` set as `TASK_VARIABLE`, a unique `value` and a short `description`.

:::

- After updating the config file, run `npx @_koii/create-task-cli@latest` again and choose "using config YML".
- If there is an error, follow the instructions to correct it. If it was successful, your terminal should display an output similar to this:

```bash
Your MetaData CID is bafybeibjbtiendwzxq3ou5hsgauyym4wcg4gtodbhssh4cxhxdipqibrrm/metadata.json

Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) ›
```

- Hit `y` to deduct the necessary amount of KOII for your task creation.
- Finally, the details of your task, including the "Task Id" and "Stake Pot Account Pubkey" are returned.

### Using the CLI

When you use this method to create a new task, you will be prompted to enter the information needed to create your task.

Fill in the necessary information by following the instructions below:

- **Enter the name of the task:** Any Name .. Seriously your choice! E.g: `Blazing-Fast-Execution`

- **Enter a short description of your task:** A brief explanation of the task you're creating.
  :::caution
  The description should not be longer than 64 characters.
  :::

- **Please select the type of network: ** Choose _IPFS_ or _ARWEAVE_ for storage of your executable file, or _DEVELOPMENT_ if you want to test in development environment.
  :::note
  The next prompt depends on your answer to the prompt above.
  :::

- [For IPFS] **Enter the web3.storage API key:** Add a web3.storage API key to store your task executable on IPFS. E.g: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....`
  :::tip
  Visit [Web3.storage](https://web3.storage/), create an account, create an API token for your project, copy your token, and paste it on this prompt.
  :::

- [For Arweave] **Enter Arweave id of the deployed Koii task executable program:** Upload your executable file to [Arweave](https://www.arweave.org/) and enter its ID into this prompt.

- [For DEVELOPMENT] **Enter the name of executable you want to run on task-nodes:** Enter a desired name for your task executable, this will be the same name of the executable file that will exist in the task node's executables folder.
  :::caution
  The name should not contain `.js`. For example, if you want to run `task-mytask.js`, you should enter `task-mytask` as the executable name.
  :::

- [For IPFS and ARWEAVE] **Enter the path to your executable webpack:** Add the absolute path to your executable file. E.g: `/Users/<YOUR_HOME>/Documents/testing-task/dist/main.js`

- **Enter the round time in slots:** The preferred number of slots per round for the task. E.g: `1000`

- **Enter the audit window in slots:** The number of slots to be allocated to the audit window. E.g: `500`

- **Enter the submission window in slots:** The number of slots to be allocated to the submission window. E.g: `300`
  :::caution
  The number of slots in the audit window and submission must be lower than the number of slots per round.
  :::

- **Enter the minimum staking amount for the task (in KOII):** Add the minimum amount node operators should be able to stake on the task. E.g: `50`

- **Enter the total bounty you want to allocate for the task (In KOII):** Any amount not more than what you have in your wallet though. E.g: `1000` (We suggest the amount could be run at least 4 epochs)

- **Enter the bounty amount per round (In KOII):** Total amount would be divided equally for each node until the bounty fund is exhausted. E.g: `10`

- **Enter the number of distribution list submission retry in case it fails:** Enter the number of accepted trials to resubmit the distribution list if the first attempt to submit it fails.

- **Enter TaskMetadata CID hosted on IPFS (Leave empty for None):** If you've hosted the task's metadata on IPFS, enter the CID here; otherwise, leave this field empty. Use the "Upload Files" button on your web3.storage account to upload a JSON file containing the metadata for your task. Add the uploaded file's CID to this prompt.

- **Enter the space, you want to allocate for task account (in MBs):** Each task would need some storage for persistence, in general in MBs. E.g: `10`
- **Your account will be deducted 16.96090088 KOII for creating the task, which includes the rent exemption(6.96090088 KOII) and bounty amount fees (10 KOII) › ** y/n

After the final confirmation of `y`, your task would be created along with a `taskStateInfoKeypair.json` which is used to control the task state info.

:::danger
Strong measures should be taken to protect this JSON file.
:::

The output of the command should be similar to the following.

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
✔ Select operation › Create a new task
create-task
CONFIG {
  json_rpc_url: 'https://k2-testnet.koii.live',
  websocket_url: '',
  keypair_path: '/Users/<YOUR_HOME>/.config/koii/id.json',
  address_labels: { '11111111111111111111111111111111': 'System Program' },
  commitment: 'confirmed'
}
Connection to cluster established: https://k2-testnet.koii.live { 'feature-set': 167192737, 'solana-core': '1.10.0' }
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 201.98930624 SOL to pay for fees
Using program Koiitask22222222222222222222222222222222222
✔ Select operation › using CLI
create-task-cli
✔ Enter the name of the task … my-new-task
✔ Enter a short description of your task … This is a simple task
✔ Please select the type of network › IPFS
✔ Enter the web3.storage API key … eyOiJkaWQ6ZXRocjoweDNhMzJGMjdGZUFENTU0RGRDRDAyRGVFRTZmNzcyRjQxN0MzYzdkMTsIm5hbWUiOiJzYXZpbmdIaX
✔ Enter the path to your executable webpack … /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
FILEPATH /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
✔ Enter the round time in slots … 600
✔ Enter the audit window in slots … 200
✔ Enter the submission window in slots … 200
✔ Enter the minimum staking amount for the task (in KOII) … 5
✔ Enter the total bounty you want to allocate for the task (In KOII) … 10
✔ Enter the bounty amount per round (In KOII) … 1
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
