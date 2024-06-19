---
title: Testing with Docker
image: img/thumbnail.png
sidebar_label: Testing with Docker
---
# Test with Docker

This guide is specifically tested for Linux-based systems and the Ubuntu 22.04 LTS subsystem on WSL2 for Windows.

# **Prerequisites:**

- Docker is installed.
- Your Koii Node is currently turned off.

# Setup

## For Linux Users

1. **Install Koii CLI**: Ensure you're installing the latest version of the Koii CLI with this command:

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init_v1.16.1.sh)"
```

Modify environment variables as necessary to fit your system's requirements.

1. **Verify Installation**: Check the installed version:

```sh
koii --version
```

Output should show something similar to:

```sh
koii-cli 1.16.1 (src:devbuild; feat:2325450753)`
```

2. **Run Local Validator**: Start your local validator with:

```sh
koii-test-validator
```

Expect outputs similar to:

```sh
$ koii-test-validator
--faucet-sol argument ignored, ledger already exists
Ledger location: test-ledger
Log: test-ledger/validator.log
⠓ Initializing...
Identity: C6b81CysrtrvkTkBKyaP2K9bzvvGYhHy2kA4Rmu5mKAu
Genesis Hash: 6xk3ZJ3gcasDjmKDusSrtNg4vCnLfoF6dioHXmHsPJrs
Version: 1.16.1
Shred Version: 37129
Gossip Address: 127.0.0.1:1024
TPU Address: 127.0.0.1:1027
JSON RPC URL: http://127.0.0.1:10899
⠤ 00:00:06 | Processed Slot: 116529 | Confirmed Slot: 116529 | Finalized Slot: 116496 | Full Snapshot Slot: 116405 | Inc
```

Keep this process running.

## **For Windows Users (Using Ubuntu WSL):**

**Replicate the above steps** in your Ubuntu WSL subsystem. All further operations will be done outside WSL.

# Deploy

1. **Configure Koii CLI**: Switch your Koii CLI to localhost:

```sh
koii config set --url localhost
koii config get
```

Verify the settings:

```sh
Config File: C:\Users\liang\.config\koii\cli\config.yml
RPC URL: http://localhost:10899
WebSocket URL: ws://localhost:10900/ (computed)
Keypair Path: ~/.config/koii/id.json
Commitment: confirmed
```

2. **Airdrop Coins**: Credit your wallet with tokens by running:

```sh
koii airdrop 100000
```

3. **Create a Local Repository**: Use the `Create-task-cli` and select the first option to set up a new local repository. You can find details [here](/develop/command-line-tool/create-task-cli/create-repo).

4. **Setup Docker**: Modify the **`docker-compose.yaml`** to match your actual wallet address. Example:

```sh
~/.config/koii:/app/config
```

5. **Package Files**:

```sh
yarn webpack
```

6. **Run `npx @_koii/create-task-cli@latest`** to deploy a new task using your local validator. Please copy below CID for future renaming.

```sh
CID of executable bafybeidumnguxqqcvgxm7fm46vkdeoqec7sxa46gljvsqobrhycsdnowhe
```

7. **Setup Environment File**: Rename **`.env.local.example`** to **`.env.local`**. Modify the **`K2_NODE_URL`** depending on your system:
    - Linux: **`http://127.0.0.1:10899`**
    - Windows: **`http://host.docker.internal:10899`**

    Add the generated task ID to **`TASKS=`**, and populate all necessary environment variables for your task.

8. Rename the `dist/main.js` file to `<CID>.js`

9. **Run Docker**:

```sh
docker compose up
```

Successful execution should log outputs similar to:

```sh
task_node  | SUBMISSION Hello, World!
task_node  | ******/  IN SUBMISSION /******
task_node  | 113141 inside checkSubmissionAndUpdateRound
task_node  | Submitting to chain: Hello, World! 6
```

# FAQ

1.  ECONNREFUSED error

```sh
task_node  | FetchError: request to http://127.0.0.1:10899/ failed, reason: connect ECONNREFUSED 127.0.0.1:10899
task_node  |     at ClientRequest.<anonymous> (/app/node_modules/node-fetch/lib/index.js:1505:11)
task_node  |     at ClientRequest.emit (node:events:517:28)
task_node  |     at Socket.socketErrorListener (node:_http_client:501:9)
task_node  |     at Socket.emit (node:events:517:28)
task_node  |     at emitErrorNT (node:internal/streams/destroy:151:8)
task_node  |     at emitErrorCloseNT (node:internal/streams/destroy:116:3)
task_node  |     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
task_node  |   type: 'system',
task_node  |   errno: 'ECONNREFUSED',
task_node  |   code: 'ECONNREFUSED'
task_node  | }
```

```sh
Error fetching from [https://bafybeibza332dckxtumnvuv6wyvq5a4jnixc7zwmfvqowpvtaep3o4vcg4.ipfs.dweb.link/metadata.json:](https://bafybeibza332dckxtumnvuv6wyvq5a4jnixc7zwmfvqowpvtaep3o4vcg4.ipfs.dweb.link/metadata.json:) Error: Request timed out
```

Answer: Please switch to the address that recommended for your current system.

2. Transaction Simulation Failed Error

```sh
task_node  | Transaction simulation failed: Attempt to debit an account but found no record of a prior credit.
task_node  |
task_node  | /app/node_modules/@_koi/web3.js/lib/index.cjs.js:6914
task_node  |       throw new SendTransactionError('failed to send transaction: ' + res.error.message, logs);
task_node  |             ^
task_node  |
lib/index.cjs.js:6873:20)
task_node  |     at async Connection.sendTransaction (/app/node_modules/@_koi/web3.js/lib/index.cjs.js:6863:12)
task_node  |     at async sendAndConfirmTransaction (/app/node_modules/@_koi/web3.js/lib/index.cjs.js:4052:21) {
task_node  |   logs: []
task_node  | }
task_node  |
task_node  | Node.js v18.20.2
task_node  | error Command failed with exit code 1.
task_node  | info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
task_node exited with code 1
```

Answer: Please check the whether the wallet folder has correctly projected to docker. For example. for Windows, if you use Koii CLI to create a wallet, it is default inside `C:\Users\<USERNAME>\~\.config\koii\id.json`, but the docker compose file would default reference   `C:\Users\<USERNAME>\.config\koii\id.json`. Therefore, you should copy your original `id.json` file that contains your airdrop tokens to your docker referenced `id.json`.

3. IPFS Error

```sh
Error fetching from https://bafybeibza332dckxtumnvuv6wyvq5a4jnixc7zwmfvqowpvtaep3o4vcg4.ipfs.sphn.link/metadata.json: Error: Request timed out
```

Please check your internet connection and try again later.
