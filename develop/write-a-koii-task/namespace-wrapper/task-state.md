---
title: Task Status
description: Task State
image: img/thumbnail.png
sidebar_label: Task Status
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

A task's state can be retrieved using the namespace methods.

## getTaskState or getTaskStateById

Retrieves the state of the task

- **Inputs**:

  - options: Configuration options for state retrieval

  ```
  const option = {
    is_submission_required?: boolean,
    is_distribution_required?: boolean,
    is_available_balances_required?: boolean,
    is_stake_list_required?: boolean
  };
  ```

- **Outputs**: Task state object or `null`

### **Example Usage of getTaskState**

```typescript
// Data will be included if true, otherwise not shown even if fields are present.
const state = await namespaceWrapper.getTaskState({
  is_submission_required: true,
  is_distribution_required: true,
  is_available_balances_required: true,
  is_stake_list_required: true,
});

console.log(state); // check the The task state object below
```

### **Example Usage of getTaskStateById**

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    ```typescript
    import { namespaceWrapper, TASK_ID } from "@_koii/namespace-wrapper";

    const taskType: string = "KOII" // if it KPL then use "KPL"

    const state: any = await namespaceWrapper.getTaskStateById(TASK_ID, taskType, {
      is_submission_required: true,
      is_distribution_required: true,
      is_available_balances_required: true,
      is_stake_list_required: true,
    })

    console.log(state); // check the The task state object below
    ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const { namespaceWrapper, TASK_ID } = require("@_koii/namespace-wrapper");

    const taskType = "KOII" // if it KPL then use "KPL"

    const state = await namespaceWrapper.getTaskStateById(TASK_ID, taskType, {
      is_submission_required: true,
      is_distribution_required: true,
      is_available_balances_required: true,
      is_stake_list_required: true,
    })

    console.log(state); // check the The task state object below
    ```

  </TabItem>
</Tabs>

## The task state object below

A task's state can be retrieved using the namespace methods. It returns an object containing information about the task. <br />

The task state object:

| Key                             | Description                                                                                                                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| is_allowlisted                  | Boolean value to show if the task is allowlisted                                                                                                                                                            |
| task_name                       | The name of the task                                                                                                                                                                                        |
| task_description                | The description of the task                                                                                                                                                                                 |
| task_manager                    | The public key of the task creator in uint8 format                                                                                                                                                          |
| is_active                       | Boolean value to show if the task is active                                                                                                                                                                 |
| task_audit_program              | The IPFS CID / Arweave ID pointing to the JavaScript executable file of the task                                                                                                                            |
| stake_pot_account               | Account to which all the stakes go                                                                                                                                                                          |
| submissions                     | The values submitted to K2; it also includes the round and slots in which a submission was made                                                                                                             |
| submissions_audit_trigger       | Includes the submission value for a raised audit, also shows who audited it, who submitted the value and the submission value                                                                               |
| total_bounty_amount             | Total KOII added by the task creator to be distributed amongst the nodes                                                                                                                                    |
| bounty_amount_per_round         | KOII to be rewarded per round, this cannot be more than `total_bounty_amount`                                                                                                                               |
| total_stake_amount              | Sum of all the stakes by the nodes running the task                                                                                                                                                         |
| minimum_stake_amount            | Minimum KOII required to run the task                                                                                                                                                                       |
| available_balances              | List of pending rewards of nodes that are available to be claimed                                                                                                                                           |
| stake_list                      | Object of staker `publicKey` mapped with the amount they staked                                                                                                                                             |
| ip_address_list                 | Static IPs of the nodes that are running the current task                                                                                                                                                   |
| round_time                      | The total number of slots it takes for each period of the current task                                                                                                                                      |
| starting_slot                   | The slot at which the task is created                                                                                                                                                                       |
| audit_window                    | Total number of slots given for nodes to perform audit                                                                                                                                                      |
| submission_window               | Total number of slots given for nodes to complete submission                                                                                                                                                |
| task_executable_network         | Either IPFS/DEVELOPMENT/ARWEAVE. It specifies the location to fetch the task executable, if "DEVELOPMENT", then it assumes the `task_audit_program` (executable file) is on the task creator's local device |
| distribution_rewards_submission | Tracks all the distribution submissions submitted to K2 for each round                                                                                                                                      |
| distributions_audit_trigger     | Tracks all the audits raised in each round for distribution submissions in the respective rounds                                                                                                            |
| distributions_audit_record      | Records of payout statuses for the latest finished rounds containing `Uninitialized`, `PayoutSuccessful`, and `PayoutFailed` statuses.                                                                      |
| task_metadata                   | IPFS CID containing metadata for the task                                                                                                                                                                   |
| task_vars                       | not used                                                                                                                                                                                                    |
| koii_vars                       | not used                                                                                                                                                                                                    |
| is_migrated                     | Boolean to show the state of migration, if `true` then `migrated_to` will have the new address                                                                                                              |
| migrated_to                     | New task Id to which the task is migrated                                                                                                                                                                   |
| allowed_failed_distributions    | The number of failed distributions allowed                                                                                                                                                                  |
| task_id                         | task_id                                                                                                                                                                                                     |

Task state sample:

```js
{
  taskName: 'Arweave Verifier',
  taskManager: 'FnQm11NXJxPSjza3fuhuQ6Cu4fKNqdaPkVSRyLSWf14d',
  is_allowlisted: true,
  isActive: true,
  taskAuditProgram: 'bafybeihjtsyty2sjmhriyvqlwxdldz2jkoyjr5pnko3t7jyais4kpgcdhm',
  stakePotAccount: 'stakepotaccounti1drd3maNYcUgyohxwjfNVskco5v',
  totalBountyAmount: 43635761521266,
  bountyAmountPerRound: 1000000000000,
  currentRound: undefined,
  availableBalances: [Object],
  stakeList: [Object],
  startingSlot: 7603543,
  isRunning: false,
  hasError: false,
  metadataCID: 'bafybeiek6a3ymp6xa3wluetm6v6qwsays6swhs4hihg4uzn4h2frqmzsui',
  minimumStakeAmount: 1900000000,
  roundTime: 6000,
  submissions: [Object],
  distributionsAuditTrigger: [Object],
  submissionsAuditTrigger: {},
  isMigrated: false,
  migratedTo: '',
  distributionRewardsSubmission: [Object]
}
```

## getTaskNodeVersion

Gets the task node version

- **Outputs**: Version string
- **Example Usage**:

```typescript
const version = await namespaceWrapper.getTaskNodeVersion();

console.log(version); // Output: "1.11.19";
```

## getTaskSubmissionInfo

Retrieves submission information for the task

- **Inputs**: round: number (current round number)
- **Outputs**: Submission state
- **Example Usage and Output**:

```typescript
// Successful retrieval with multiple submissions
const submissionInfo = await namespaceWrapper.getTaskSubmissionInfo(1);
console.log(JSON.stringify(submissionInfo, null, 2));

// Output:
{
  submissions: SubmissionsPerRound
  submissions_audit_trigger: Record<string, Record<string, AuditTriggerState>>
}

// Error case (no submissions yet)
const emptySubmissionInfo = await namespaceWrapper.getTaskSubmissionInfo(10);
console.log(emptySubmissionInfo);
// Output: or throw error because not found
{
  "submissions": {},
  "submissions_audit_trigger": {}
}

// Error case (network error)
try {
  const info = await namespaceWrapper.getTaskSubmissionInfo(3);
} catch (error) {
  console.error(error);
}
```

## getTaskDistributionInfo

Gets distribution information for the task

- **Input**: round number (current round number)
- **Outputs**: Distribution info
- **Example Usage**:

```typescript
try {
  const round = 1; // current the round number
  const distributionInfo = await getTaskDistributionInfo(round);
  console.log("Distribution Info:", distributionInfo);
  // Expected output:
  // Distribution Info: {
  //   distribution_rewards_submission: SubmissionsPerRound
  //   distributions_audit_trigger: Record<string, Record<string, AuditTriggerState>>
  //   distributions_audit_record: Record<
  //     string,
  //     'Uninitialized' | 'PayoutSuccessful' | 'PayoutFailed'
  //   >
  // }
} catch (error) {
  console.log(error);
}
```

## Next Steps

To learn more about specific features, check out these guides:

- [Network/Task Handling](./network-task-handling.md) - Manage network data and tasks.
- [Audit and Distribution](./audit-distribution-operations.md) - Manage network data and tasks.
