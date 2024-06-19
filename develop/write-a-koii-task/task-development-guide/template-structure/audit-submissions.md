---
title: Audit Submissions
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Audit Submissions
---

# Audit Submissions

Audit submissions, `task/audit.js` contains the main job function that is responsible for auditing the user's submission and returning the result.


In the past executed rounds, we have a example that user submit a string "Hello, World!" in the `submitTask` function. In the `auditTask` function, we can check if the user's submission is valid or not. Here is an example of a `auditTask` function:

```js
async auditTask(roundNumber) {
    await namespaceWrapper.validateAndVoteOnNodes(
        this.validateNode,
        roundNumber,
    );
}
```

In this flow, `auditTask` function will be called in each round to audit the user's submission. The `validateNode` function is passed to a helper function called `validateAndVoteOnNodes` where it will be run for each node that has submitted. The `validateNode` function should return true/false to vote the node's submissions. The `validateNode` function will be given the following params to validate a node:

```js
async validateNode(submission_value, round) {
    // Write your logic for the validation of submission value here and return a boolean value in response
    // The sample logic can be something like mentioned below to validate the submission
    let vote;
    try {
      if (submission_value == 'Hello, World!') {
        // For successful flow we return true (Means the audited node submission is correct)
        vote = true;
      } else {
        // For unsuccessful flow we return false (Means the audited node submission is incorrect)
        vote = false;
      }
    } catch (e) {
      console.error(e);
      vote = false;
    }
    return vote;
}
```

:::tip
The audit part is a crucial part of the task execution. It is important to validate the submission value and vote the node's submission based on the validation.

If you have any confusion or need help, you can always reach out to the Koii team on [Discord](https://discord.gg/koii-network).
:::
