---
title: Create Task
description: We need a Koii account and network setup first. We provide the Koii CLI tool to easily set up K2 locally and generate a wallet; check here.
image: img/thumbnail.png
sidebar_label: Deploy Task
---

import ContentLink from "@site/src/components/contentLink";

# Deploy Task

![img](../../img/DEV%20koii%20task.png)

We need a Koii account and network setup first. We provide the Koii CLI tool to easily set up K2 locally and generate a wallet; check here.&#x20;

<ContentLink title="Using the Koii CLI" link="/develop/category/koii-command-line-tool" iconType="copy"/>

<br/>
Now that we have our account and the network setup, let's move on to creating a task and registering it with the network.

Install the [create-koii-task-cli from NPM](https://www.npmjs.com/package/@_koii/create-task-cli) and run the tool by running `npx @_koii/create-task-cli` in your terminal; it prompts for your wallet path. Use the path to your Koii account `id.json` that we mentioned as input.

After successful input for the wallet path, the following are the prompts for the creation of the task.

- **Enter the name of the task**: Any Name .. Seriously your choice! E.g: `Blazing-Fast-Execution`
- **Enter a short description of your task:** A brief explanation of the task you're creating.
- **Enter the network to be used to upload your executable \[IPFS / ARWEAVE / DEVELOPMENT]:** Choose IPFS or ARWEAVE for storage of your executable file, or DEVELOPMENT if you haven’t developed your task yet.

:::info

Note — The next prompt depends on your answer to the prompt above.

:::

- \[For _Arweave_] **Enter Arweave id of the deployed Koii task executable program:** If you choose your task executable on [Arweave](https://www.arweave.org/), you have to upload your executable on Arweave and provide the ID to the uploaded file.
- \[For _DEVELOPMENT_] **Enter the name of executable you want to run on task-nodes:** Enter a desired name for your task executable, this will be the same name of the executable file that will exist in the task node's executables folder.
- \[For _IPFS_ and _ARWEAVE_] **Enter the path to your executable webpack:** Add the absolute path to your executable file. E.g: `/Users/<YOUR_HOME>/Documents/testing-task/dist/main.js`
- **Enter the round time in slots:** The preferred number of slots per round for the task. E.g: `3000`
- **Enter the audit window in slots:** The number of slots to be allocated to the audit window. E.g: `1200`
- **Enter the submission window in slots:** The number of slots to be allocated to the submission window. E.g: `1200`

:::info

Note — The number of slots in the audit window and submission must be lower than the number of slots per round.

:::

- **Enter the minimum staking amount in KOII:** Add the minimum amount node operators should be able to stake on the task. E.g: `1.9`
- **Enter the total bounty you want to allocate for the task (In KOII)**: Any amount not more than what you have in your wallet though. E.g: `1000` (We suggest the amount could be run at least 4 epochs)
- **Enter the bounty amount per round**: Total amount would be divided equally for each number until the bounty fund is exhausted. E.g: `10`
- **Enter TaskMetadata CID hosted on IPFS (Leave empty for None):** If you've hosted the metadata for your task on IPFS, add the CID here; otherwise, leave it blank. Add the CID for the uploaded file to this prompt. Check out a [metadata example](/concepts/what-are-tasks/what-are-tasks/key-components/intro#metadata).
- **Enter CID for environment variables hosted on IPFS (Leave empty for None):** If your task requires environment variables to be run by node runners, upload a JSON file that contains those variables to IPFS, add the uploaded file's CID to this prompt.
- **Enter the space, you want to allocate for task account (in MBs):** Each task would need some storage for persistence, in general in MBs. E.g: `10`

After the final confirmation of `y`, your task would be created along with a `taskStateInfoKeypair.json` which is used to control the task state info.

:::danger

Strong measures should be taken to protect this JSON file.

:::

The output of the command should be similar to the following.

```sh
(base) PS D:\gitD\Koii\k2-task-examples-1\hello-world> create-task-cli
(node:31956) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
undefined
√ Select operation » Deploy a New Task
create-task
CONFIG {
  json_rpc_url: 'https://testnet.koii.network',
  websocket_url: '',
  keypair_path: '~/.config/solana/id.json',
  address_labels: { '11111111111111111111111111111111': 'System Program' },
  commitment: 'confirmed'
}
Connection to cluster established: https://testnet.koii.network { 'feature-set': 2325450753, 'solana-core': '1.14.19' }
Using account FnQm11NXJxPSjza3fuhuQ6Cu4fKNqdaPkVSRyLSWf14d containing 54572.0166631 KOII to pay for fees
Using program Koiitask22222222222222222222222222222222222
√ Select operation » using config YML
create-task-yml
√ Select operation » Using KOII Storage SDK
√ Enter the path to your staking wallet ... C:\Users\liang\Desktop\Herman_stakingWallet.json
TASK CID bafybeidc7u5bmxkw7q7o5rxzq3q4d6o53enkardv43rwmk5e5rtfvlddvq
Your MetaData CID is bafybeibbobapwak5pdhasqr5o4t7xsgateja4k7syruqc4xs6xhrpuntdy/metadata.json
TASK DATA {
  task_name: 'Free Test!',
  task_executable_network: 'IPFS',
  secret_web3_storage_key: undefined,
  task_audit_program: 'dist/main.js',
  task_audit_program_id: 'bafybeidc7u5bmxkw7q7o5rxzq3q4d6o53enkardv43rwmk5e5rtfvlddvq',
  round_time: 2000,
  audit_window: 750,
  submission_window: 750,
  minimum_stake_amount: 1.5,
  total_bounty_amount: 100,
  bounty_amount_per_round: 50,
  allowed_failed_distributions: 3,
  space: 2
}
Metadata {
  author: 'Soma',
  description: "This task submits 'Hello World' to confirm that your node is online. You will earn up to 50 KOII in one day. This task will use around 1.5gb of your RAM.",
  repositoryUrl: 'https://github.com/koii-network/task-examples',
  createdAt: 1718289852003,
  imageUrl: 'https://bafybeiaxjv3wnyeuakhvpeah5aiuomswegn2qfk47w6hrd475gkibflhvy.ipfs.w3s.link/image.png',
  requirementsTags: [
    { type: 'CPU', value: '4-core' },
    { type: 'RAM', value: '5 GB' },
    { type: 'STORAGE', value: '5 GB' }
  ]
}
√ Your account will be deducted 239.2089188 KOII for creating the task, which includes the rent exemption(139.2089188 KOII) and bounty amount fees (100 KOII) ...yes
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
