---
title: Continuous Integration and Continuous Delivery
image: img/thumbnail.png
sidebar_label: CI/CD
---
This section provides guidelines for integrating create-task-cli into your CI/CD pipeline, ensuring seamless task creation, funding, and management. 
# Exported Functions
- Koii Operations
export { FundTask, establishConnection, checkProgram, createTask, updateTask, SetActive, FundTaskFromMiddleAccount, Withdraw, ClaimReward, establishPayer }; 
- KPL Operations
export { KPLFundTask, KPLEstablishPayer, KPLEstablishConnection, KPLCheckProgram, KPLCreateTask, KPLClaimReward, KPLSetActive, KPLWithdraw, KPLUpdateTask }; 
# Environment Set up
## Env Variables
Through CI/CD, you will need to use your wallet keypair as your environment variables. It is essential for you to ensure that your Keypair is safe. 
## Initialize Create-Task-CLI
If you want to make Koii Task Related operations, you need to use 
```
await establishConnection(connection);
await checkProgram();
```
If you want to make KPL Task Related operations, you need to use 
```
await KPLEstablishConnection(connection);
await KPLCheckProgram();
```

# Operation Inputs
## Koii Task Functions
| Function Name                    | Input Parameters                                                                                                              |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **establishConnection**          | None                                                                                                                           |
| **establishPayer**               | `payerWallet: Keypair`                                                                                                         |
| **checkProgram**                 | None                                                                                                                           |
| **createTask**                   | `payerWallet: Keypair`, `task_name: string`, `task_audit_program: string`, `total_bounty_amount: number`, `bounty_amount_per_round: number`, `space: number`, `task_description: string`, `task_executable_network: string`, `round_time: number`, `audit_window: number`, `submission_window: number`, `minimum_stake_amount: number`, `task_metadata: string`, `local_vars: string`, `koii_vars: string`, `allowed_failed_distributions: number` |
| **updateTask**                   | `payerWallet: Keypair`, `task_name: string`, `task_audit_program: string`, `bounty_amount_per_round: number`, `space: number`, `task_description: string`, `task_executable_network: string`, `round_time: number`, `audit_window: number`, `submission_window: number`, `minimum_stake_amount: number`, `task_metadata: string`, `local_vars: string`, `allowed_failed_distributions: number`, `taskAccountInfoPubKey: PublicKey`, `statePotAccountPubKey: PublicKey` |
| **SetActive**                    | `payerWallet: Keypair`, `taskStateInfoAddress: PublicKey`, `setActive: boolean`                                                |
| **ClaimReward**                  | `payerWallet: Keypair`, `taskStateInfoAddress: PublicKey`, `stakePotAccount: PublicKey`, `beneficiaryAccount: PublicKey`, `claimerKeypairPath: string` |
| **FundTask**                     | `payerWallet: Keypair`, `taskStateInfoAddress: PublicKey`, `stakePotAccount: PublicKey`, `amount: number`                      |
| **FundTaskFromMiddleAccount**    | `payerWallet: Keypair`, `taskStateInfoAddress: PublicKey`, `stakePotAccount: PublicKey`, `amount: number`, `funderKeypair: Keypair` |
| **Withdraw**                     | `payerWallet: Keypair`, `taskStateInfoAddress: PublicKey`, `submitterKeypair: Keypair`                                         |
## KPL Task Functions
Coming Soon...

# ChatOps

With ChatOps, you can make calls to task operations within other communication software. 

Below is an example main.js file for ChatOps Funding. 

```
const { FundTask } = require('@_koii/create-task-cli');
const { establishConnection, checkProgram } = require('@_koii/create-task-cli');
const { PublicKey, Connection, Keypair } = require('@_koii/web3.js');
require('dotenv').config();

async function main() {
    // Retrieve input from environment variable
    const chat_input = process.env.CHAT_INPUT;
    console.log(process.env.CHAT_INPUT);

    // Split the input into parts to extract TASK_ID and AMOUNT
    let parts = chat_input.split(' ');
    let TASK_ID = parts[0].trim();
    let AMOUNT = parts[1].trim();

    // Log the task funding initiation details
    console.log("Start Funding:");
    console.log("Funding task with Id: ", TASK_ID);
    console.log("Funding amount: ", AMOUNT);

    // Convert the funder's keypair from environment variable into Keypair object
    const payerKeypairString = process.env.funder_keypair;
    const payerKeypairArray = JSON.parse(payerKeypairString); // Parse JSON string to array
    const payerWallet = Uint8Array.from(payerKeypairArray); // Convert array to Uint8Array
    const payerKeypair = Keypair.fromSecretKey(payerWallet); // Create Keypair from secret key

    // Create PublicKey object for the task using TASK_ID
    const taskStateInfoAddress = new PublicKey(TASK_ID);

    // Establish connection to the Solana network (Koii testnet in this case)
    const connection = new Connection("https://testnet.koii.network", 'confirmed');

    // Retrieve account information for the task
    const accountInfo = await connection.getAccountInfo(
        new PublicKey(taskStateInfoAddress)
    );

    // Validate if the task exists
    if (accountInfo == null) {
        console.error("No task found with this Id");
    }

    // Parse task state information from account data
    const rawData = accountInfo.data + "";
    const state = JSON.parse(rawData);

    // Extract the stake pot account address from the task state
    const stakePotAccount = new PublicKey(state.stake_pot_account);

    // Convert the funding amount to an integer
    const amount = parseInt(AMOUNT);

    // Establish a connection with the Solana network through the create-task-cli package
    await establishConnection(connection);

    // Check if the Solana program is deployed and accessible
    await checkProgram();

    // Perform the funding action for the task
    await FundTask(payerKeypair, taskStateInfoAddress, stakePotAccount, amount);

    // Log success message upon successful funding
    console.log("Success");
}   

// Invoke the main function to execute the funding process
main();

```
And prepare a gitlab CI/CD file here. 
```
stages:
  - fund

image: node:latest

cache:
  paths:
    - node_modules/

build:
  stage: fund
  script:
    - yarn install
    - yarn build
    - node main.js
  artifacts:
    paths:
      - ./funder-keypair-*.json
    when: always
```
Then you can use the following command in Slack to trigger the funding. 
```
/gitlab <group name/repo name>  run build <Task ID> <Amount>
```


