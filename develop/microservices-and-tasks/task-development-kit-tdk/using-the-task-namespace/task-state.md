---
title: Task State
description: Task State
image: img/thumbnail.png
sidebar_label: Task State
---

# Task State

## getTaskState()

A task's state can be retrieved using the `getTaskState` namespace helper function. It returns an object containing information about the task. <br />
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
task_executable_network: 'ARWEAVE'
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
