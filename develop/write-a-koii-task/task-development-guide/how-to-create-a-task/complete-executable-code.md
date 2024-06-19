# Complete Executable Code

Putting all of the pieces together, this is the full executable:

```js
const { namespaceWrapper } = require("./namespaceWrapper");
const crypto = require("crypto");

async function task() {
  const x = Math.random().toString(); // generate random number and convert to string
  const cid = crypto.createHash("sha1").update(x).digest("hex"); // convert to CID
  console.log("HASH:", cid);

  if (cid) {
    await namespaceWrapper.storeSet("cid", cid); // store in NeDB
  }
  return false;
}

async function submitTask(roundNumber) {
  console.log("submitTask called with round", roundNumber);
  try {
    console.log(
      await namespaceWrapper.getSlot(),
      "current slot while calling submit"
    );

    const cid = await namespaceWrapper.storeGet("cid"); // retrieves the cid
    await namespaceWrapper.checkSubmissionAndUpdateRound(cid, roundNumber); // submit to K2
    console.log("after the submission call");
  } catch (error) {
    console.log("error in submission", error);
  }
}

async function validateNode(node) {
  console.log("Validating Node", node);
  const cid = node.submission_value; // Retrieve node's submission value
  const char = cid.charAt(0);
  // If first character of cid is in the first 23 letters of the alphabet, return true
  if (char.match(/[a-w]/i)) {
    return true;
  } else {
    return false;
  }
}

async function auditTask(roundNumber) {
  console.log("auditTask called with round", roundNumber);
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
  await namespaceWrapper.validateAndVoteOnNodes(validateNode, roundNumber);
}

/**
 * @description Contains the logic of how the distribution list should be audited to check validity
 */
async function validateDistribution(submissionValue) {
  console.log("Validating Disribution List", submissionValue);
  return true;
}

async function auditDistribution(roundNumber) {
  console.log("auditDistribution called with round", roundNumber);
  await namespaceWrapper.validateAndVoteOnDistributionList(
    validateDistribution,
    roundNumber
  );
}

async function generateAndSubmitDistributionList(round) {
  console.log("generateAndSubmitDistributionList called");

  console.log("I am selected node");
  let distributionList = {};
  const taskAccountDataJSON = await namespaceWrapper.getTaskState();
  const submissions = taskAccountDataJSON.submissions[round];
  const submissions_audit_trigger =
    taskAccountDataJSON.submissions_audit_trigger[round];
  if (submissions == null) {
    console.log("No submisssions found in N-2 round");
    return distributionList;
  } else {
    const keys = Object.keys(submissions);
    const values = Object.values(submissions);
    const size = values.length;
    console.log("Submissions from last round: ", keys, values, size);
    for (let i = 0; i < size; i++) {
      const candidatePublicKey = keys[i];
      if (
        submissions_audit_trigger &&
        submissions_audit_trigger[candidatePublicKey]
      ) {
        console.log(
          submissions_audit_trigger[candidatePublicKey].votes,
          "distributions_audit_trigger votes "
        );
        const votes = submissions_audit_trigger[candidatePublicKey].votes;
        let numOfVotes = 0;
        for (let index = 0; index < votes.length; index++) {
          if (votes[i].is_valid) numOfVotes++;
          else numOfVotes--;
        }
        if (numOfVotes < 0) continue;
      }
      distributionList[candidatePublicKey] = 1;
    }
  }

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

module.exports = {
  task,
  submitDistributionList,
  validateNode,
  validateDistribution,
  submitTask,
  auditTask,
  auditDistribution,
};
```

Follow the instructions [here](../task-development-flow/create-task) to register for this new task.
