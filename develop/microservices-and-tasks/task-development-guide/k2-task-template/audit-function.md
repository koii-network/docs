---
title: Audit Functions
description: Audit functions are defined to validate a node's submission, vote on audits, and verify the distribution list submitted to K2.
image: static/img/thumbnail.png
sidebar_label: Audit Functions
---

import ContentLink from "@site/src/components/contentLink";

# Audit Functions

Audit functions are defined to validate a node's submission, vote on audits, and verify the distribution list submitted to K2.

## Audit Node Submissions

Each participating node's submission must be audited by other nodes, and this is handled by two functions:

### validateNode()

This function contains the core logic of how a node's submission should be verified. It accepts a node's submission value as a parameter, validates it, and returns a boolean.

For the sample task on the template, to validate a node's submission, the first character of its submission value (CID) is checked to see if it falls within the first 23 letters of the alphabet. If it does, the function returns `true`, validating the node's submission; if it does not, the node's submission is deemed invalid, and their stake is slashed

```javascript
/**
 * @description Contains logic for the validation of submission value
 *
 * @param {string} submissionValue
 * @returns {boolean} The validity of the submission
 */
async function validateNode(submissionValue) {
  console.log("Validating Submission Value", submissionValue);
  const cid = submissionValue; // Retrieve node's submission value

  const char = cid.charAt(0);
  // If the first character of cid is in the first 23 letters of the alphabet, return true
  if (char.match(/[a-w]/i)) {
    return true;
  } else {
    return false;
  }
}
```

The validation of a node's submission is determined by your definition of a valid submission for your task. Nodes with invalid or malicious submissions will be rewarded at the end of the task cycle if the logic of your `validateNode` function does not perform a proper check on a node's submission value.

As a result, ensure that you write proper logic that verifies each submission value and filters out nodes with invalid submissions.

### auditTask()

This function takes the `roundNumber` as a parameter and calls a helper function `validateAndVoteOnNodes` that takes the `validateNode` function and the `roundNumber` as parameters.

```javascript
/**
 * @description Submits validateNode function with roundNumber
 *
 * @param {number} roundNumber Current round number of the task
 */
async function auditTask(roundNumber) {
  console.log("auditTask called with round", roundNumber);
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
  await namespaceWrapper.validateAndVoteOnNodes(validateNode, roundNumber);
}
```

Click the link below to learn about the distribution list, and then return to this page to learn about auditing the distribution list.

<ContentLink title="Distribution Functions" link="./distribution-functions" iconType="copy"/>

## Audit Distribution List

The distribution list is audited by the other nodes after it has been submitted on-chain by the selected node. If the distribution list is found to be invalid after auditing, a newly selected node generates a new distribution list and submits it to the chain.

Two functions are involved in the validation of the distribution list:

### validateDistribution()

This function contains the core logic of how the distribution list should be verified. It takes the distribution list as a parameter, confirms its validity, and returns a boolean value.

```javascript
/**
 * @description Contains logic for the validation of distribution list
 *
 * @param {string} distributionList
 * @returns {boolean} The validity of the distribution list
 */
async function validateDistribution(distributionList) {
  console.log("Validating Distribution List", distributionList);

  let val = Math.random();
  if (val < 0.5) {
    console.log("sending true");
    return true;
  } else {
    console.log("sending false");
    return false;
  }
}
```

### auditDistribution()

This function takes the `roundNumber` as a parameter and calls a helper function `validateAndVoteOnDistributionList` which takes the `validateDistribution` function and the `roundNumber` as parameters.

```javascript
/*
 * @description Submits validateDistribution function with roundNumber
 *
 * @param {number} roundNumber Current round number of the task
 */
async function auditDistribution(roundNumber) {
  console.log("auditDistribution called with round", roundNumber);
  await namespaceWrapper.validateAndVoteOnDistributionList(
    validateDistribution,
    roundNumber
  );
}
```

When creating a task, the `auditTask` and `auditDistribution` functions typically don't require any modification. However, the `validateNode` and `validateDistribution` functions do because they contain the essential logic for how the submissions from nodes and the distribution list should be verified.
