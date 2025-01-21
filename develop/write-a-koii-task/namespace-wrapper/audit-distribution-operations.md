---
title: Audit and Distribution Operations
description: Efficient auditing & distribution
image: img/thumbnail.png
sidebar_label: Audit and Distribution Operations
---

import Tooltip from "@site/src/components/tooltip";

:::note
If you are using the [task template](https://github.com/koii-network/task-template) these functions are automatically managed by the task manager package, and you do not need to call them manually.
:::

## auditSubmission

Audits a submission for a specific round

- **Inputs**:
  - candidatePubkey: PublicKey
  - isValid: boolean
  - voterKeypair: Keypair
  - round: number
- **Outputs**: Audit result
- **Example Usage and Output**:

```typescript
const candidatePubkey = new PublicKey("..."); // The public key of the candidate being audited
const isValid = true; // Whether the submission is valid
const voterKeypair = Keypair.generate(); // A Keypair for the voter (can be a new or existing one)
const round = 1; // Current round of auditing

await auditSubmission(candidatePubkey, isValid, voterKeypair, round);
```

## distributionListSubmissionOnChain

Submits distribution list to the blockchain

- **Inputs**:
  - round: Round number
- **Example Usage**:

```typescript
try {
  const round = 1; // Current round of distribution submission
  const result = await distributionListSubmissionOnChain(round);
  console.log(result);
  // Output:
  // -"5eZGF6A3g7K......."; // (transaction signature (a string))
} catch (error) {
  console.log(error);
}
```

## uploadDistributionList

Uploads a distribution list for a round

- **Inputs**:
  - distributionList: Object containing distribution data
  - round: number (the round number)
- **Example Usage and Output**:

```typescript
// Uploads a distribution list for a specific round.
try {
  const distributionList = {
    candidate1: { value: 100 },
    candidate2: { value: 200 },
  };
  const round = 1;

  const result = await uploadDistributionList(distributionList, round);
  console.log(result); // Output: true (if everything works as expected)
} catch (error) {
  console.error(error);
}
```

## distributionListAuditSubmission

Audits a distribution list submission

- **Inputs**:
  - candidatePubkey: PublicKey (the candidate's public key)
  - isValid: boolean (whether the distribution is valid)
  - voterKeypair: Keypair
  - round: number (the round number)
- **Outputs**: Audit result
- **Example Usage and Output**:

```typescript
// Successful audit
try {
  const candidatePubkey = new PublicKey("candidate-public-key");
  const isValid = true; // The vote is in favor of the candidate
  const voterKeypair = Keypair.generate(); // Generate a random voter keypair
  const round = 1; // Round number

  await distributionListAuditSubmission(
    candidatePubkey,
    isValid,
    voterKeypair,
    round,
  );
} catch (error) {
  console.error(error);
}
```

## validateAndVoteOnDistributionList

Validates and votes on distribution lists

- **Inputs**:
  - validateDistribution: Validation function
  - round: Round number
- **Example Usage**:

```typescript
try {
  const round = 1; // The round to validate
  await validateAndVoteOnDistributionList(this.validateDistribution, round);
} catch (error) {
  console.log(error);
}
```

## getDistributionList

Gets the distribution list for a specific round

- **Inputs**:
  - publicKey: string
  - round: Round number
- **Outputs**: Distribution list
- **Example Usage and Output**:

```typescript
try {
  const publicKey = "somePublicKey";
  const round = 1;

  // Call getDistributionList method
  const distributionList = await myService.getDistributionList(
    publicKey,
    round,
  );
  console.log("Distribution List:", distributionList); // Distribution List: {"reward": 100, "user": "someUser"}
} catch (error) {
  console.log(error);
}
```

## nodeSelectionDistributionList

Selects nodes for distribution

- **Inputs**:
  - round: Round number
  - isPreviousFailed: Whether previous attempt failed
- **Outputs**: Selected node public key
- **Example Usage**:

```typescript
try {
  // Example values for the round and isPreviousFailed flag
  const round = 5;
  const isPreviousFailed = false; // Adjust based on the scenario

  // Calling the nodeSelectionDistributionList function
  const selectedNodePubkey = await myService.nodeSelectionDistributionList(
    round,
    isPreviousFailed,
  );
  console.log("Selected Node Public Key:", selectedNodePubkey);
} catch (error) {
  console.log(error);
}
```

## payoutTrigger

Triggers payout for a specific round

- **Inputs**:
  - round: Round number
- **Example Usage**:

```typescript
try {
  await namespaceWrapper.payoutTrigger(currentRound);
} catch (error) {
  console.log(error);
}
```

## selectAndGenerateDistributionList

Generates and selects distribution list

- **Inputs**:
  - round: Round number
- **Example Usage**:

```typescript
try {
  const round = 4; // current round
  const isPreviousRoundFailed = true; // boolean value only

  await namespaceWrapper.selectAndGenerateDistributionList(
    this.submitDistributionList,
    round,
    isPreviousRoundFailed,
  );
} catch (error) {
  console.log(error);
}
```

## validateAndVoteOnNodes

Validates and votes on node submissions

- **Inputs**:
  - validate: Validation function
  - round: Current round number
- **Outputs**: Void if no issue, otherwise a string indicating validation status
- **Example Usage**:

```typescript
// Validates and votes on nodes
await namespaceWrapper.validateAndVoteOnNodes(
  async (submission, round, nodePublicKey) => true,
  currentRound,
);
```

## checkSubmissionAndUpdateRound

Verifies submissions and updates the current round

- **Input**: Add the submission and the roundNumber
- **Outputs**: Void once complete
- **Example Usage**:

```typescript
if (submission) {
  await namespaceWrapper.checkSubmissionAndUpdateRound(submission, roundNumber);
}
```

## Next Steps

To learn more about specific features, check out these guides:

- [Koii IPFS Storage SDK](/develop/write-a-koii-task/koii-ipfs-storage/koii-storage) - Learn Decentralized Storage
