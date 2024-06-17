---
title: How to develop an OrcaPod
description: The purpose of this guide is to show how to integrate ORCA with Koii. Basically we will be focusing and simplifying so that developer can come to this guide, they can start developing and running KOII-ORCA task.
image: img/thumbnail.png
sidebar_label: Develop an OrcaPod
---

import Description from "@site/src/components/description";

# How to develop an OrcaPod

## Objective

The purpose of this guide is to show how to integrate ORCA with Koii. Basically we will be focusing and simplifying so that developer can come to this guide, they can start developing and running KOII-ORCA task.

## Prerequisites

- [NodeJS>=16.0.0](https://nodejs.org/en)
- [Docker-Compose](https://docs.docker.com/)
- [Orca Node](https://docs.orcacompute.com/orcaNode)

## Install the KOII CLI

To interact with the K2 locally, you need to install the Koii CLI. [Click here](/develop/command-line-tool/koii-cli/install-cli) to follow the instructions.

## Create a Koii Wallet

Koii supports a file system wallet that can be used to interface directly with the Koii command-line tools.

:::info

A file system wallet, aka an FS wallet, is a directory in your computer’s file system. Each file in the directory holds a keypair.

Source [Solana](https://solana.com/docs/intro/wallets#file-system-wallet)

:::

To generate a file system wallet keypair, use Koii’s command-line tool `koii-keygen`. Run the following command:

```bash
koii-keygen new --outfile ~/.config/koii/id.json
```

:::warning

This file contains your unencrypted keypair, protect this file as it grants access to all tokens sent to its public key. Do not distribute the file; share only the public key to maintain security.

:::

The public key of the keypair file is your wallet address. To display your public key, run:

```bash
koii address
```

It will return a string of characters like:

```bash
2kG7HNGGZHZPhdbHNzvQNQUjNNNNiQvxshLu47UvnpBq
```

Congratulations! You now have a Koii wallet, Next, let’s airdrop some KOII in your wallet. [Click Here](/develop/command-line-tool/koii-cli/send-and-receive-tokens)

## Clone repository

- Clone task-template github repository from the given [Link](https://github.com/koii-network/task-template)
- Navigate to the `task-template` folder
- Create a new directory

```bash
sudo mkdir -p config/koiii
```

- Copy the `id.json` to the `config/koii`

```bash
sudo cp ~/.config/koii/id.json config/koii

```

## Web3Storage API Token

You’ll be required to add your web3.storage API key, visit [here](https://web3.storage/) to create a web3.storage account. After creating an account, create an API Token for your project, paste the API token on this prompt

## Edit the config-task.yaml

Replace the value of the given keys

1. task_name - `anything according to you`
2. task_execution_network - Should be `DEVELOPMENT`
3. task_audit_program_id - `main`

```yaml
# Name and metadata of your task
task_name: "cd-demo-task"
author: "koii"
description: "This will be description of your task"
repositoryUrl: "https://github.com/koii-network/task-examples"
imageUrl: "imageUrl"
# network value can be DEVELOPMENT , ARWEAVE or IPFS, Recommended IPFS as the cli automatically takes care of uploading the executable with the help of web3.js key
task_executable_network: "DEVELOPMENT"
# Path to your executable webpack if the selected network is IPFS otherwise leave blank
task_audit_program: ""
# Total round time of your task : it must be given in slots and each slot is rougly equal to 4ms
round_time: 500
audit_window: 200
submission_window: 200
# Amounts in KOII
minimum_stake_amount: 2
# total_bounty_amount cannot be grater than bounty_amount_per_round
# total bounty is not accepted in case of update task
total_bounty_amount: 10
bounty_amount_per_round: 1
#Number of times allowed to re-submit the distribution  list in case the distribution list is audited
allowed_failed_distributions: 3
#Space in MBs for the account size, that holds the task data
space: 1
# Note that the value field in RequirementTag is optional, so it is up to you to include it or not based on your use case.
# To add more global variables and task variables, please refer the type,value,description format shown below
requirementsTags:
  - type: CPU
    value: "4-core"
  - type: RAM
    value: "5 GB"
  - type: STORAGE
    value: "5 GB"
  - type: NETWORK
    value: "testnet"
  - type: ARCHITECTURE
    value: "M1"
  - type: OS
    value: "OSX"
# OPTIONAL variables below
# OPTIONAL Only provide the taskId if you are updating the task otherwise leave blank
task_id: ""
# OPTIONAL only Provide your transaction ID in case of ARWEAVE and in case of DEVELOPMENT give your executable name as main otherwise leave blank
task_audit_program_id: "main"
```

## Create the Koii Task

:::info

Make sure `nodeJS` must be install in your system.

:::

Run the following command to create the task:

```bash
npx @_koii/create-task-cli
```

## Integrate Orca-Pulse with Koii and create Simple task

​

### Install Orca-pulse

It is basically JS NPM package. Which used to communicate with ORCA.

```bash
npm i orca-pulse
```

### Creating an instance of orca-pulse

Import orca-pulse in the `index.js`

```javascript
const { OrcaPulse } = require('orca-pulse')
```

Create an instance of orca-pulse in the `index.js` inside setup function.

```javascript
const orcaPulse = new OrcaPulse()
await orcaPulse.initialize(
    'userContainerImageUrl',
    'taskId',
    'OrcaUrl',
    'certificate' //Optinal, Need to pass when ORCA is running with SSL Mode.
    )
```

### Create simple-task.js

```javascript
class SimpleTask {
    constructor(orcaPulse) {
        this.start(orcaPulse)
    }
    async start(orcaPulse) {
        orcaPulse.podCall('collect', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                'datatype': 'blocks',
                'start_block': '100000',
                'end_block': '100005',
                'rpc_url': "https://internal.ethereum.n.chaindeck.io/278e1b2ab91f2ca96f7b8761bf65b9b2"
            },
        }).then(collect => {
            console.log("etl data", collect)
        }).catch(err => {
            console.log("error is in collect podcall", err)
        })
    }
}
module.exports = SimpleTask

```

### Make change in CoreLogic.js

Import the simple-task

```javascript
const SimpleTask = require('./simple-task');
```

Create instance of the simple task class

```javascript
 const result = await new SimpleTask(orcaPulse)
```

## Edit .env.local file

Replace the value of the Given keys

1. TASK_ID
2. SECRET_WEB3_STORAGE_KEY

```bash
######################################################
################## DO NOT EDIT BELOW #################
######################################################
# Location of main wallet Do not change this, it mounts the ~/.config/koii:/app/config if you want to change, update it in the docker-compose.yml
WALLET_LOCATION="/app/config/id.json"
# Node Mode
NODE_MODE="service"
# The nodes address
SERVICE_URL="http://localhost:8080"
# For CI/CD purpose to automate the staking wallet creation
INITIAL_STAKING_WALLET_BALANCE=1
# Intial balance for the distribution wallet which will be used to hold the distribution list.
INITIAL_DISTRIBUTION_WALLET_BALANCE=1
# Global timers which track the round time, submission window and audit window and call those functions
GLOBAL_TIMERS="true"
# environment
ENVIRONMENT="development"
# HAVE_STATIC_IP is flag to indicate you can run tasks that host APIs
# HAVE_STATIC_IP=true
# To be used when developing your tasks locally and don't want them to be whitelisted by koii team yet
RUN_NON_WHITELISTED_TASKS=true
# The address of the main trusted node
# TRUSTED_SERVICE_URL="https://k2-tasknet.koii.live"
######################################################
################ DO NOT EDIT ABOVE ###################
######################################################
# Location of K2 node
K2_NODE_URL="https://k2-testnet.koii.live"
# Tasks to run and their stakes. This is the varaible you can add your Task ID to after
# registering with the crete-task-cli. This variable supports a comma separated list:
# TASKS="id1,id2,id3"
# TASK_STAKES="1,1,1"
TASKS="13bDLMwg5k78S9dgF9qXCP44nk35rpXoN4SRVjWSojmR"
TASK_STAKES=10
# User can enter as many environment variables as they like below. These can be task
# specific variables that are needed for the task to perform it's job. Some examples:
# Secrets must follow this convention for task to be able to use it (SECRET_<secret name>)
SECRET_WEB3_STORAGE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc0RDUwZTVlNkNGRDA0NGQyNzkzNTk5YkU3NzNmMDE0YmFkZDI4MDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODg5OTAyMzA4MjAsIm5hbWUiOiJjZC1kLWMifQ.c9Ufb7tZTgFVcZ8J0RRJdap0rvokWqXeq21eUM5-qVg"
```

## Compile the task

After you’ve created a task using the K2 task template as a guide, you’ll need to compile it with Webpack into a single executable file. Open up your terminal, and in the directory of your task:

- Run `yarn` to install all dependencies
- Run `yarn webpack` to compile code
- You should see a new directory `/dist`
- Your compiled executable is located in `/dist/main.js` That’s it! You’ve successfully compiled your task into a single executable file.
  ​

## Run the task

Make sure you are in the task-template location Run task-template using docker compose

```bash
docker compose up
```
