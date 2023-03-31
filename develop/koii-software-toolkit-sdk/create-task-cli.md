---
title: Create Task CLI
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Create Task CLI
---

# Create Task CLI

![Banner](./img/DEV_koii_task.png)

We provide create-task-cli to help you easily create and deploy your task.

## Install Create-Task-CLI

Run the command below to install the create-task-cli:

```bash
npm i @_koii/create-task-cli
```

Running `npx @_koii/create-task-cli` in your terminal; it prompts for your wallet path. Use the path to your Koii account `id.json` that we mentioned as input.

:::info
Not yet have a Koii wallet? Check [here](using-the-cli) and generate one quickly. Remember to save your wallet path.
:::

After successful input for the wallet path, the following are the prompts for the creation of the task.

- **Enter the name of the task:** Any Name .. Seriously your choice! E.g: `Blazing-Fast-Execution`

- **Enter a short description of your task:** A brief explanation of the task you're creating. Note: The description should not be longer than 64 characters.

- **Enter the network to be used to upload your executable [IPFS / ARWEAVE / DEVELOPMENT]: ** Choose IPFS or ARWEAVE for storage of your executable file, or DEVELOPMENT if you haven’t developed your task yet.

:::info
Note — The next prompt depends on your answer to the prompt above.
:::

- [For IPFS] **Enter the web3.storage API key:** If you choose to store your task executable on IPFS, you’ll be required to add your web3.storage API key, visit here to create a web3.storage account. After creating an account, create an API Token for your project, paste the API token on this prompt. e.g: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....`

- [For Arweave] **Enter Arweave id of the deployed Koii task executable program:** If you choose your task executable on Arweave, you have to upload your executable on [Arweave](https://www.arweave.org/) and provide the ID to the uploaded file.

- [For DEVELOPMENT] **Enter the name of executable you want to run on task-nodes:** Enter a desired name for your task executable, this will be the same name of the executable file that will exist in the task node's executables folder.

- [For IPFS and ARWEAVE] **Enter the path to your executable webpack:** Add the absolute path to your executable file. E.g: `/Users/<YOUR_HOME>/Documents/testing-task/dist/main.js`

- **Enter the round time in slots:** The preferred number of slots per round for the task. E.g: `1000`

- **Enter the audit window in slots:** The number of slots to be allocated to the audit window. E.g: `500`

- **Enter the submission window in slots:** The number of slots to be allocated to the submission window. E.g: `300`

:::info
Note — The number of slots in the audit window and submission must be lower than the number of slots per round.
:::

- **Enter the minimum staking amount in lamports:** Add the minimum amount node operators should be able to stake on the task. E.g: `50`

- **Enter the total bounty you want to allocate for the task (In KOII):** Any amount not more than what you have in your wallet though. E.g: `1000` (We suggest the amount could be run at least 4 epochs)

- **Enter the bounty amount per round:** Total amount would be divided equally for each number until the bounty fund is exhausted. E.g: `10`

- **Enter TaskMetadata CID hosted on IPFS (Leave empty for None):** If you've hosted the metadata for your task on IPFS, add the CID here; otherwise, leave blank. Use your web3.storage account, click the **Upload Files** button, and then upload a JSON file containing the metadata for your task. Add the CID for the uploaded file to this prompt. Check out a [metadata example](/).

- **Enter CID for environment variables hosted on IPFS (Leave empty for None): **If your task requires environment variables to be run by node runners, upload a JSON file that contains those variables to IPFS using web3.storage. Add the uploaded file's CID to this prompt.

- **Enter the space, you want to allocate for task account (in MBs):** Each task would need some storage for persistence, in general in MBs. E.g: `10`

After the final confirmation of `y`, your task would be created along with a `taskStateInfoKeypair.json` which is used to control the task state info.

:::danger
Strong measures should be taken to protect this JSON file.
:::

The output of the command should be similar to the following.

```bash
> task-contract@0.0.1 start
> ts-node src/main.ts

No wallet found
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/<YOUR_HOME>/.config/koii/id.json
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
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 329.992521 SOL to pay for fees
Using program Koiitask22222222222222222222222222222222222
✔ Enter the name of the task … testing-task-v1
✔ Enter a short description of your task … A simple task with very minimal logic
✔ Enter the network to be used to upload your executable [IPFS / ARWEAVE / DEVELOPMENT] … IPFS
✔ Enter the web3.storage API key … eyOiJkaWQ6ZXRocjoweDNhMzJGMjdGZUFENTU0RGRDRDAyRGVFRTZmNzcyRjQxN0MzYzdkMTsIm5hbWUiOiJzYXZpbmdIaX
✔ Enter the path to your executable webpack … /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
FILEPATH /Users/<YOUR_HOME>/Documents/testing-task/dist/main.js
✔ Enter the round time in slots … 1000
✔ Enter the audit window in slots … 300
✔ Enter the submission window in slots … 200
✔ Enter the minimum staking amount in lamports … 100
✔ Enter the total bounty you want to allocate for the task (In KOII) … 100
✔ Enter the bounty amount per round … 50
✔ Enter TaskMetadata CID hosted on IPFS (Leave empty for None). …
✔ Enter CID for environment variables hosted on IPFS (Leave empty for None). …
✔ Enter the space, you want to allocate for task account (in MBs) … 100
✔ Your account will be subtract 100.00319376 KOII for creating the task, which includes the rent exemption and bounty amount fees … yes
Calling Create Task
Task Id: 9wPqk8BMxRUXGfRYXoFvT9FdhapLH7WbB8V6HCyJ6Rf2
Stake Pot Account Pubkey: stakepotaccountUqTzV1ZMfXvcupUPSBWHwUykCTCW
Note: Task Id is basically the public key of taskStateInfoKeypair.json
Success
```

:::info
Whenever we refer to task account, we mean the task **State Info Pubkey**.
The bounty amount will be present in **Stake Pot Account**
:::
