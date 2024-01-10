
### Setting Up the Environment on VPS

1. **Clone the Task-Template Repository**:
   ```bash
   git clone https://github.com/koii-network/VPS-task
   cd VPS-task
   ```

2. **Configure Environment Variables**:
   - Update the `.env.local` file.
   - Set the `ENVIRONMENT` field to `"production"`.
   - Update the `TASKS` field with the task IDs you want to run, separated by commas.
   - Update the `TASK_STAKES` field with the stake amounts corresponding to each task in `TASKS`, separated by commas.
   - Set `INITIAL_STAKING_WALLET_BALANCE` to the amount of KOII you want in the staking wallet. This should be greater than the sum of all `TASK_STAKES` plus a buffer of at least 1 KOII for rent.
   - Add any specific task variables required for the tasks at the end of the file.

   ---

   :::tip Multi-task example
      ```bash
   TASKS="AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3, AXcd6MctmDUQo3XDeBNa4NBAi4tfBYDpt4Adxyai3Do3"
   TASK_STAKES= 5, 2
   ```

   :::

3. **Ensure Koii CLI is Installed**:
   The task node will use the wallet pointed to in the Koii configuration.  [Click here for the installation steps](https://docs.koii.network/develop/command-line-tool/koii-cli/install-cli)

4. **Run koii and set up new pubkey**

   ```bash
   koii balance
   ```
It will shows "Error: Dynamic program error: No default signer found, run "koii-keygen new -o /your/path/of/id.json" to create a new one"
**this path will automaticly generated**

   ```bash
   koii-keygen new -o /your/path/of/id.json
   ```

After that the system will generated a new account for you, associate with your account address

To improve security, system want you set up BIP39 Passphrase, you can leave it for empty.

Then you will have your new pubkey

Then transfer some tokens to this account using [Finnie Wallet](https://chromewebstore.google.com/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj).

5. **Run Docker Compose**:

First, [Install](https://docs.docker.com/get-docker/) the **Docker** to your computer.

   ```bash
   docker-compose up
   ```
   This command creates a staking wallet, stakes on the tasks, and then runs the tasks.

### Running the Node

1. Navigate to the K2 Node Directory:
   ```bash
   cd path/to/k2-node
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Start the Node:
   ```bash
   node app.js
   ```

### Verifying Node Status

1. **Check Logs**: Look for startup logs in the command line. They should indicate that the node has started successfully and is running.

2. **Status Check Command**:
   Use a command like the following to check the node's status:
   ```bash
   curl http://localhost:3000/status
   ```

### Executing Tasks

1. **Identify the Task Requirements**: Understand what the task requires in terms of resources and dependencies.

2. **Configure Task Environment**: Install necessary packages and configure settings as needed.

3. **Start the Task**:
   ```bash
   node run-task.js
   ```

   Replace `run-task.js` with the specific script for your task.

### Managing Stakes

1. **Log in to Node or Wallet**: Access your node or wallet where the tasks are managed.

2. **Choose the Task for Staking**.

3. **Stake or Unstake Tokens**:
   - To stake:
     ```bash
     npx create-task-cli stake --task <task_id> --amount <amount>
     ```
   - To unstake:
     ```bash
     npx create-task-cli unstake --task <task_id> --amount <amount>
     ```

   Replace `<task_id>` with the task identifier and `<amount>` with the number of tokens.

### Claiming Rewards

1. **Verify Task Completion and Reward Generation**.

2. **Log in to Node or Wallet**.

3. **Claim Rewards**:
   ```bash
   npx create-task-cli claim-reward --task <task_id>
   ```

   Replace `<task_id>` with the identifier of the task you completed.

These steps provide a detailed guide to setting up a VPS for running automated tasks, managing stakes, and claiming rewards in a K2 node and Koii network environment. Always refer to the specific documentation for the tools and platforms you are using for the most accurate and up-to-date information.