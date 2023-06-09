---
title: Task State
description: Task State
image: img/thumbnail.png
sidebar_label: Task State
---

# Task State

## getTaskState()

A task's state can be retrieved using the `getTaskState()` namespace method. It returns an object containing information about the task. <br />

The task state object:

| Key                             | Description                                                                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| task_name                       | The name of the task                                                                                                                               |
| task_description                | The description of the task                                                                                                                        |
| task_manager                    | The public key of the task creator in uint8 format                                                                                                 |
| is_whitelisted                  | Boolean value to show if the task is whitelisted                                                                                                   |
| is_active                       | Boolean value to show if the task is active                                                                                                        |
| task_audit_program              | The IPFS CID / Arweave ID pointing to the JavaScript executable file of the task                                                                                     |
| stake_pot_account               | Account to which all the stakes go                                                                                                               |
| submissions                     | The values submitted to K2; it also includes the round and slots in which a submission was made                                                   |
| submissions_audit_trigger       | Includes the submission value for a raised audit, also shows who audited it, who submitted the value and the submission value |
| total_bounty_amount             | Total KOII added by the task creator to be distributed amongst the nodes                                                                          |
| bounty_amount_per_round         | KOII to be rewarded per round, this cannot be more than `total_bounty_amount`                                                                        |
| total_stake_amount              | Sum of all the stakes by the nodes running the task                                                                                               |
| minimum_stake_amount            | Minimum KOII required to run the task                                                                                                              |
| available_balances              | List of pending rewards of nodes that are available to be claimed                                                                                      |
| stake_list                      | Object of staker `publicKey` mapped with the amount they staked                                                                                     |
| ip_address_list                 | Static IPs of the nodes that are running the current task                                                                                         |
| round_time                      | The total number of slots it takes for each period of the current task                                                                            |
| starting_slot                   | The slot at which the task is created                                                                                                             |
| audit_window                    | Total number of slots given for nodes to perform audit                                                                                             |
| submission_window               | Total number of slots given for nodes to complete submission                                                                                      |
| task_executable_network         | Either IPFS/DEVELOPMENT/ARWEAVE. It specifies the location to fetch the task executable, if "DEVELOPMENT", then it assumes the `task_audit_program` (executable file) is on the task creator's local device           |
| distribution_rewards_submission | Tracks all the distribution submissions submitted to K2 for each round                                                                            |
| distributions_audit_trigger     | Tracks all the audits raised in each round for distribution submissions in the respective rounds                                                  |
| distributions_audit_record      | Records of payout statuses for the latest finished rounds containing `Uninitialized`, `PayoutSuccessful`, and `PayoutFailed` statuses.             |
| task_metadata                   | IPFS CID containing metadata for the task                                                                                                 |
| task_vars                       | not used                                                                                                                                           |
| koii_vars                       | not used                                                                                                                                           |
| is_migrated                     | Boolean to show the state of migration, if `true` then `migrated_to` will have the new address                                                      |
| migrated_to                     | New task Id to which the task is migrated                                                                                                  |

Task state sample:

```javascript
{
task_name: 'did-task',
task_description: 'This task creates decentralized identities',
task_manager: [
125, 234, 6, 93, 93, 181, 37, 55,
231, 207, 193, 21, 58, 4, 163, 80,
33, 236, 53, 62, 74, 30, 61, 197,
106, 63, 180, 101, 198, 173, 169, 48
],
is_whitelisted: false,
is_active: true,
task_audit_program: 'did.js',
stake_pot_account: [
13, 9, 93, 69, 120, 6, 193, 51,
83, 187, 162, 11, 233, 108, 147, 55,
163, 157, 89, 111, 152, 156, 14, 213,
165, 233, 165, 91, 4, 203, 199, 201
],
submissions: {},
submissions_audit_trigger: {},
total_bounty_amount: 1000000000000,
bounty_amount_per_round: 10000000000,
total_stake_amount: 0,
minimum_stake_amount: 100,
available_balances: {},
stake_list: {},
ip_address_list: {},
round_time: 650,
starting_slot: 43357,
audit_window: 240,
submission_window: 240,
task_executable_network: 'DEVELOPMENT'
distribution_rewards_submission: {},
distributions_audit_trigger: {},
distributions_audit_record: {},
task_metadata: "",
task_vars: "",
koii_vars: "",
is_migrated: false,
migrated_to: ""
}
```

Example showing how to get the number of staked nodes:

```javascript
const taskAccountDataJSON = await namespaceWrapper.getTaskState();
const listOfStakedNodes = taskAccountDataJSON.stake_list;
```
