---
title: Execute Task
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Execute Task
---

Execute task, `task/submission.js` contains the main job function that is responsible for processing the user's submission and returning the result.

## Task Main Job Function

The `task` function is the main function that is called when a user runs a task. This function is responsible for preparing the user's submission and returning the result.

For example, following is a simple `task` function that stores a value in the database and returns a string:

```js
async task(round) {
  /* This is the main task job logic.
  / The result/value should be stored in DB.
  */
  const result = 'Hello, World!';
  await namespaceWrapper.storeSet('value', value);
  return result;
}
```

## Submission Function

Then in next round, the `submitTask` function will be called with the round number as the parameter. The `submitTask` function is responsible for get user's submission value and upload to K2. Here is an example of a `submitTask` function:

```js
async submitTask(round) {
  /* This function is called when a user submits a task.
  / The result/value should be string format.
  */
  const submission = await namespaceWrapper.storeGet('value');
  return submission;
  }
```

:::tip
submitTask function will called next round after task function is called. For example, if task function is called with `round` value 5, then submitTask function will be called with `round` value 4.

So if your submission value might different in each round, you should store the value with the round number in the database and then the submitTask function will get the value based on the round number.
:::
