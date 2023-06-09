---
title: Executable Structure
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Executable Structure
---

# Executable Structure

A Koii **task executable** is a single JavaScript file that contains all of the functions for a Koii task to function properly. The task function, audit function, and distribution function were mentioned in the previous section; these are the core functions that task creators must modify.&#x20;

**Example executable file:**

```javascript
const coreLogic = require("./coreLogic");
const { app } = require("./init");
const { namespaceWrapper } = require("./namespaceWrapper");

/**
 * @description Setup function is the first  function that is called in executable to setup the node
 */
async function setup() {
  console.log("setup function called");
  // Run default setup
  await namespaceWrapper.defaultTaskSetup();
  process.on("message", (m) => {
    console.log("CHILD got message:", m);
    if (m.functionCall == "submitPayload") {
      console.log("submitPayload called");
      coreLogic.submitTask(m.roundNumber);
    } else if (m.functionCall == "auditPayload") {
      console.log("auditPayload called");
      coreLogic.auditTask(m.roundNumber);
    } else if (m.functionCall == "executeTask") {
      console.log("executeTask called");
      coreLogic.task();
    } else if (m.functionCall == "generateAndSubmitDistributionList") {
      console.log("generateAndSubmitDistributionList called");
      coreLogic.submitDistributionList(m.roundNumber);
    } else if (m.functionCall == "distributionListAudit") {
      console.log("distributionListAudit called");
      coreLogic.auditDistribution(m.roundNumber);
    }
  });
}

/**
 * @description Task function contains the core logic of the Koii task
 */
async function task() {
  // Write the logic to do the work required for submitting the values and optionally store the result in levelDB
}
async function submitTask(roundNumber) {
  console.log("submitTask called with round", roundNumber);
  try {
    await namespaceWrapper.checkSubmissionAndUpdateRound(cid, roundNumber);
    console.log("after the submission call");
  } catch (error) {
    console.log("error in submission", error);
  }
}

/**
 * @description Used to validate an individual node. Returns true if node is valid
 *
 * The value passed to this function contains the value submitted on-chain
 * and optionally the url for the node
 */
async function validateNode(node) {
  // Write your logic for the validation of submission value here and return a boolean value in response
  console.log("Validating Node", node);
  return true;
}

async function validateDistribution(node) {
  // Write your logic for the validation of submission value here and return a boolean value in response
  // this logic can be same as generation of distribution list function and based on the comparision will final object , decision can be made
  console.log("Validating Distribution List", node);
  return true;
}

async function auditTask(roundNumber) {
  console.log("auditTask called with round", roundNumber);
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
  await namespaceWrapper.validateAndVoteOnNodes(validateNode, roundNumber);
}

async function auditDistribution(roundNumber) {
  console.log("auditDistribution called with round", roundNumber);
  await namespaceWrapper.validateAndVoteOnDistributionList(
    validateDistribution,
    roundNumber
  );
}

/**
 * @description This function generates a distribution list and submits it on-chain.
 */
async function generateDistributionList() {
  console.log("GenerateDistributionList called");
  console.log("I am selected node");
  // Write the logic to generate the distribution list here by introducing the rules of your choice
}

async function submitDistributionList(round) {
  console.log("SubmitDistributionList called");
  const distributionList = await generateDistributionList();

  const decider = await namespaceWrapper.uploadDistributionList(
    distributionList,
    round
  );
  console.log("DECIDER", decider);

  if (decider) {
    const response = await namespaceWrapper.distributionListSubmissionOnChain(
      round
    );
    console.log("RESPONSE FROM DISTRIBUTION LIST", response);
  }
}

setup();

if (app) {
  //  Write your Express Endpoints here.
  //  For Example
  //  namespace.express('post', '/accept-cid', async (req, res) => {})
}
```
