
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

Then, use this code to run the task node in Docker

   ```bash
   docker-compose up
   ```
   This command creates a staking wallet, stakes on the tasks, and then runs the tasks.

Now your Node is running in Docker

### Executing Tasks & Managing Stakes

- Use this code to load your pubkey to docker

   ```bash
   docker run -v /your/path/of/id.json:/wallet your-image-name
   ```
   
- Use this code to Managing Stakes in your node task

   ```bash
    exec task node npx @ koii/create-task-cli@latest
   ```

These steps provide a detailed guide to setting up a VPS for running automated tasks, managing stakes, and claiming rewards in a K2 node and Koii network environment. Always refer to the specific documentation for the tools and platforms you are using for the most accurate and up-to-date information.