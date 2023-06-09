---
title: Validate Node
description: The validate node function is passed to a helper function called `validateAndVoteOnNodes` where it will be run for each node that has made a submission. The validate node function will return true if the node is valid.
image: img/thumbnail.png
sidebar_label: Validate Node
---

# Validate Node

The validate node function is passed to a helper function called `validateAndVoteOnNodes` where it will be run for each node that has made a submission. The validate node function will return true if the node is valid. The validate node function will be given the following params to validate a node:

- K2 Submission data
- Node Service URL (if present)

## Types of Audits

- Checking signed and uploaded data on IPFS using a CID submitted to K2
- Checking status of API endpoints on node
- Checking proof stored on nodes provided API endpoint

## Example

One of the most common methods of validating other nodes is calling the other nodes "/proofs" endpoint in order to validate the data that they are providing. This is a simplified example of how an API endpoint validation would work:

```javascript
// Executable File
validateNode(node) {
 axios({
      method: 'get',
      url: `${node.url}/proofs`
    }).then(async (response) => {
      if (
      response.data &&
      response.data == "EXAMPLE CORRECT DATA"
      ) {
        return true;
      } else {
        return false;
      }
    }).catch(err => {
      return false;
    })
}

// Abbreviated executable function
async function execute() {
  cronArray.push(
   cron.schedule(
    '*/1 * * * *',
    () => { namespace.validateAndVoteOnNodes(validateNode) }
   ));
  return cronArray;
}
```

For reference, this is what the `validateAndVoteOnNodes` function does

```javascript
// validateAndVoteOnNodes found in namespaced helper file
async validateAndVoteOnNodes(validate: (node: any) => boolean) {
 await this.checkVoteStatus();
    const taskAccountDataJSON = await this.getTaskState();
    const current_round = taskAccountDataJSON.current_round;
    const expected_round = current_round - 1;

    const status = taskAccountDataJSON.status;
    const stat_val = Object.keys(status)[0];

    const voteStatus = await this.redisGet('voteStatus');

    if (!process.env.SERVICE_URL) console.warn('SERVICE_URL not set');
    const nodes = await getNodes(process.env.SERVICE_URL || '');

    if (
      voteStatus == 'true' &&
      stat_val == 'Voting' &&
      Object.keys(taskAccountDataJSON.submissions).length > 0
    ) {
      const submissions = {};
      for (const id in taskAccountDataJSON.submissions) {
        console.log(
          'round - expected',
          taskAccountDataJSON.submissions[id].round,
          expected_round,
        );
        if (taskAccountDataJSON.submissions[id].round == expected_round) {
          submissions[id] = taskAccountDataJSON.submissions[id];
        }
      }
      const values: any = Object.values(submissions);
      const keys = Object.keys(submissions);
      const size = values.length;

      for (let i = 0; i < size; i++) {
        const candidatePublicKey = keys[i];
        const candidateKeyPairPublicKey = new PublicKey(keys[i]);
        if (candidatePublicKey == this.submitterPubkey) {
          console.log('YOU CANNOT VOTE ON YOUR OWN SUBMISSIONS');
        } else {
          // LOGIC for voting function
          const node = nodes.find((e: any) => e.submitterPubkey == keys[i]);
          const nodeData = node
            ? {
                url: node.data.url,
                ...values[i],
              }
            : values[i];
          const isValid = validate(nodeData);
          console.log(`Voting ${isValid} to ${candidatePublicKey}`);
          try {
            const response = await this.voteOnChain(
              this.connection,
              this.taskStateInfoPublicKey,
              candidateKeyPairPublicKey,
              this.submitterAccountKeyPair,
              isValid,
            );
          } catch (error) {
            console.warn('ERROR FROM VOTING FUNCTION', error);
          }
        }
      }
```
