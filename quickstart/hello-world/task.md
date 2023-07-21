---
title: The Task
description: Task
image: img/thumbnail.png
sidebar_label: The Task
---

To create our initial task, we will customize the methods within `submission.js` located inside the `task` directory. Join us as we delve into each method to gain a deeper understanding of their functionalities and implementation details.

In this section, we will write the logic for our task and make a submission to K2 using the following methods in `submission.js`: `task()`, `fetchSubmission()`, and `submitTask()`. These methods will define the core functionality of our task and the process of submitting its results to K2.

## `task()`

The purpose of this method is to outline the main objective of our task. As previously mentioned, our task aims to submit the value `Hello, World!` to K2. To achieve this, we will utilize the `namespaceWrapper.storeSet()` function, which allows us to store the value in NeDB.

Update `task()` with the code block below to fulfill the task's logic:

```js
const { namespaceWrapper } = require("../_koiiNode/koiiNode");

async function task() {
  try {
    const value = "Hello, World!";

    if (value) {
      // store value on NeDB
      await namespaceWrapper.storeSet("value", value);
    }
    return value;
  } catch (err) {
    console.log("ERROR IN EXECUTING TASK", err);
  }
}
```

## `fetchSubmission()`

Upon task completion, the generated results or work will be stored on either IPFS or NeDB. To access the stored data, this method retrieves it from the respective storage location. As we have stored our value `Hello World` to NeDB, we will fetch it using the `namespaceWrapper.storeGet()` method.

To do the same, update `fetchSubmission()` with the code block below:

```js
async fetchSubmission() {
    const value = await namespaceWrapper.storeGet("value"); // retrieves the value
    console.log("VALUE", value);
    return value;
}
```

## `submitTask()`

In this method, a `namespace` function is invoked to submit the task's results/work to K2. Accordingly, the `submitTask()` method utilizes `fetchSubmission()` to retrieve the submission value from NeDB. Subsequently, it sends this value, along with the current roundNumber, to K2 as the task's submission.

We can achieve this using the below code in the `submitTask()` method:

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
