# Submit Distribution

During the distribution period of running a task, a selected node is tasked with the responsibility of generating and submitting a distribution list on-chain. Following the submission of the list, other participating nodes audit it to ensure its validity; if the distribution list is valid, rewards are distributed among nodes.

**What is a Distribution List?**

A distribution list is a JSON object containing a key-value pair, where the `key` is the public key of the node that submitted and the `value` is the number of KOII tokens to be rewarded to the node.

Distribution list example:

```javascript
 const distributionList = {
   "29SSj6EQARvATESSQbBcmSE3A1iaWwqXFunzAEDoV7Xj": 100,
   "3KUfsjpjCSCjwCBm4TraM5cGx6YzEUo9rrq2hrSsJw3x": 200,
    Avxvdc2efsPqysBZt4VKDSgiP4iuJ8GaAWhsNVUAi5CZ: 300,
   };
```

In the `submitDistribution` function below, an empty array is initialized, and the submissions of participating nodes are retrieved. A loop is then created to check each submission for validity; if it is pushed into the `distributionList` array, then that's a reward of 1 KOII token.

Finally, the `distributionList` is submitted on-chain.

```javascript
async function generateAndSubmitDistributionList(round) {
  console.log("generateAndSubmitDistributionList called");

    console.log("I am the selected node");
    let distributionList = {};
    const taskAccountDataJSON = await namespaceWrapper.getTaskState();
    const submissions = taskAccountDataJSON.submissions[round];
    const submissions_audit_trigger =
                  taskAccountDataJSON.submissions_audit_trigger[round];
    if (submissions == null) {
      console.log("No submissions found in N-2 round");
      return distributionList;
    } else {
      const keys = Object.keys(submissions);
      const values = Object.values(submissions);
      const size = values.length;
      console.log("Submissions from last round: ", keys, values, size);
      for (let i = 0; i < size; i++) {
        const candidatePublicKey = keys[i];
        if (submissions_audit_trigger && submissions_audit_trigger[candidatePublicKey]) {
          console.log(submissions_audit_trigger[candidatePublicKey].votes, "distributions_audit_trigger votes");
          const votes = submissions_audit_trigger[candidatePublicKey].votes;
          let numOfVotes = 0;
          for (let index = 0; index < votes.length; index++) {
            if(votes[i].is_valid)
              numOfVotes++;
            else numOfVotes--;
          }
          if(numOfVotes < 0)
            continue;
        }
        distributionList[candidatePublicKey] = 1;  
      }
    }
    
    const decider = await namespaceWrapper.uploadDistributionList(
      distributionList, round
    );
    console.log("DECIDER", decider);
  
    if (decider) {
      const response = await namespaceWrapper.distributionListSubmissionOnChain(round);
      console.log("RESPONSE FROM DISTRIBUTION LIST", response);
    }
}
```

The task owner has the freedom to create logic that chooses how many KOII tokens to award to each node based on priority. A task owner might want to give more KOII tokens to a node that worked harder to complete the task or to a node that staked the most KOII tokens.
