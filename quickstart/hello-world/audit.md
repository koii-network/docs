---
title: Audit
description: Audit
image: img/thumbnail.png
sidebar_label: Audit
---

In this section, our focus is on implementing the logic to verify the node's submission value to K2. This verification process is commonly referred to as an audit. Typically, a submission is made in each round, and the corresponding audit takes place in the subsequent round. Consequently, for a given round n, we perform an audit on the submission made in round n-1.

To achieve this, we will be editing the following methods in `audit.js` under the `task` directory : `validateNode()` and `auditTask()`

## `validateNode()`

The purpose of the `validateNode()` method is to verify whether a node has submitted the correct value, which in this case is "Hello, World!". The method returns true if the value is correct, and false otherwise.

To update the `validateNode()` method, replace it with the following code block:

```js
async validateNode(submission_value, round) {
    let vote;
    console.log("SUBMISSION VALUE", submission_value, round);

    try {
      if (submission_value == "Hello, World!") {
        vote = true;
      } else {
        vote = false;
      }
    } catch (e) {
      console.error(e);
      vote = false;
    }

    return vote;
}
```

## `auditTask()`

The `auditTask()` function calls `namespaceWrapper.validateAndVoteOnNodes()` and passes the `validateNode()` method we created initially, along with the current round number.

During each round, participating nodes execute the `auditTask()` method on each node to verify the validity of the submitted value. In our case, a valid submission value is `"Hello, World!"`. If a node submits a different value, an audit is triggered on K2, and the node responsible may have their stake confiscated.

```js
  async auditTask(roundNumber) {
    await namespaceWrapper.validateAndVoteOnNodes(
      this.validateNode,
      roundNumber,
    );
  }
```

While the nodes are verifying the data submitted on-chain, they also monitor for any audits raised against a node. They can then vote in favor or against the audit accordingly.
