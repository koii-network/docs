
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

4. **Set up new koii pubkey**

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

Then you will have your new pubkey, transfer some tokens to this account using [Finnie Wallet](https://chromewebstore.google.com/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj).

5. **Run Docker Compose**:

First, [Install](https://docs.docker.com/get-docker/) the **Docker** to your computer.

Then, use this code to run the task node in Docker

   ```bash
   docker-compose up
   ```
   This command creates a staking wallet, stakes on the tasks, and then runs the tasks.

Now your Node is running in Docker

### Managing Stakes

- Use this code to load your wallet to docker



   ```bash
   docker run -v /your/path/of/wallet:/wallet your-image-name
   ```

:::tip
you can find you wallet path in `.env.local`
:::

- In this case, the image name is `public.ecr.aws/koii-network/task_node`, you can always find your image name by:

 ```bash
   docker images ls
   ```

- Use this code to Unstake, Claim rewards in your node task

   ```bash
    exec task node npx @ koii/create-task-cli@latest
   ```

