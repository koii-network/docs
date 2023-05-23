---
title: Task Tutorial
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label: Task Tutorial
---

## `task()`
The main function of the task is to submit `"Hello, World!"` to K2.

Update `task()` with the code block below to fulfill the task's logic:
```js
async task() {
    try {
      const value = "Hello, World!";

      if (value) {
        // store value on NeDB
        await namespaceWrapper.storeSet("value", value);
      }
    } catch (err) {
      console.log("ERROR IN EXECUTING TASK", err);
    }
}
```

## `fetchSubmission()`
The `fetchSubmission` method with fetch and return the value from NeDB using the `namespaceWrapper.storeGet()` method.

Update `fetchSubmission()` with the code block below:
```js
async fetchSubmission() {
    const value = await namespaceWrapper.storeGet("value"); // retrieves the value
    console.log("VALUE", value);
    return value;
}
```

## `submitTask()`
The `submitTask` method calls `fetchSubmission()` to retrieve the submission value from NeDB and submits it to K2 along with the current `roundNumber`.

```js
async submitTask(roundNumber) {
    try {
      const submission = await this.fetchSubmission();
      console.log("SUBMISSION", submission);
      await namespaceWrapper.checkSubmissionAndUpdateRound(
        submission,
        roundNumber,
      );
    } catch (error) {
      console.log("error in submission", error);
    }
}
```

## `validateNode()`
This method will verify that a node submitted the correct value which is `"Hello, World!"`.

Update `validateNode()` with the code block below:
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
