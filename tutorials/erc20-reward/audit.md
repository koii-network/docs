---
title: "Audit Function"
description: Experiment with your Koii task
image: img/thumbnail.png
sidebar_label: Audit Function
---



```js title="/task/audit.js"
  async validateNode(submission_value, round) {
    let vote;
    console.log('SUBMISSION VALUE', submission_value, round);
    const output = await retrieveFromCid(submission_value);

    try {
      if (output.value == 'Hello, World!') {
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
