---
title: Let's Deploy
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Let's Deploy
---

After creating a Koii Task, it is highly recommended that you include a detailed description of the task so that node operators who wish to run your task have all the necessary information.

The configuration file `config-task.yml` contains information about your task. A sample `config-task.yml` file can be found in the root directory of your task folder.

:::info
The `secret_spheron_storage_key` variable requires you to have a Spheron Key, either set it up in your Koii Node App, see [tutorial](https://docs.koii.network/faq/pagetwo/#tutorial-step-by-step-guide-to-getting-a-spheron-storage-key), or if you prefer set it up from CLI using [Spheron API](https://docs.spheron.network/rest-api/#creating-an-access-token). If you already have the key setup in the Koii App you can find it in settings. 
:::

- Run the below command to clone.

```bash
git clone https://github.com/koii-network/task-template.git
```

## Configure Environment Variables:
   - Update the `TASKS` field with the task IDs you want to run, separated by commas.
   - Update the `TASK_STAKES` field with the stake amounts corresponding to each task in `TASKS`, separated by commas.
   - Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the staking wallet. This should be greater than the sum of all `TASK_STAKES` plus a buffer of at least 1 KOII for rent.
   - Add any specific task variables required for the tasks at the end of the file.

   ---

:::tip 
Multi-task example
   ```
   TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3, AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
   TASK_STAKES= 5, 2
   ```
:::

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

- Run the below command to install npm.

```bash
npm install
```

Follow the instructions in the file and fill in your task's information:  
You can find this code in: "**.env.local**"

```yml
# Location of main wallet Do not change this, it mounts the ~/.config/koii:/app/config if you want to change, update it in the docker-compose.yml
WALLET_LOCATION="/app/config/id.json"
# Node Mode
NODE_MODE="service"
# The nodes address
SERVICE_URL="http://localhost:8080"
# Intial balance for the distribution wallet which will be used to hold the distribution list. 
INITIAL_DISTRIBUTION_WALLET_BALANCE= 2
# Global timers which track the round time, submission window and audit window and call those functions
GLOBAL_TIMERS="true"
# HAVE_STATIC_IP is flag to indicate you can run tasks that host APIs
# HAVE_STATIC_IP=true
# To be used when developing your tasks locally and don't want them to be whitelisted by koii team yet
RUN_NON_WHITELISTED_TASKS=true
# The address of the main trusted node
# TRUSTED_SERVICE_URL="https://k2-tasknet.koii.live"
######################################################
################ DO NOT EDIT ABOVE ###################
######################################################

# For the purpose of automating the staking wallet creation, the value must be greater 
# than the sum of all TASK_STAKES, the wallet will only be created and staking on task 
# will be done if it doesn't already exist
INITIAL_STAKING_WALLET_BALANCE=10

# environment
ENVIRONMENT="development"

# Location of K2 node
K2_NODE_URL="https://testnet.koii.live"

# Tasks to run and their stakes. This is the varaible you can add your Task ID to after
# registering with the crete-task-cli. This variable supports a comma separated list:
# TASKS="id1,id2,id3"
# TASK_STAKES="1,1,1"
TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
TASK_STAKES=5

# User can enter as many environment variables as they like below. These can be task
# specific variables that are needed for the task to perform it's job. Some examples:
WEB3_STORAGE_KEY=""
SCRAPING_URL=""

```

**Ensure Koii CLI is Installed**:
   The task node will use the wallet pointed to in the Koii configuration.  [Click here for the installation steps](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli).

:::note Create Wallet
Before proceeding,  create a [Koii wallet](/develop/command-line-tool/koii-cli/create-wallet), and fund your [wallet](/develop/command-line-tool/koii-cli/send-and-receive-tokens).
:::

---
The `create-task-cli` is used to register a new task on K2.


**After setting up the KOII CLI and funding your Koii wallet**, follow the steps below to create and register your task on K2:

- Run the below command to compile your task code.

```bash
npm webpack
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

Don't have a Koii wallet yet? Check [here](/develop/command-line-tool/koii-cli/create-wallet) and generate one quickly. Remember to save your wallet path.
:::

- Next, you will be prompted with seven options, select `Create a new task` to create a new task:

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
