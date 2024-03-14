---
title: Execute Task
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Execute Task
---

# Execute Task

Execute task contains the main job function that is responsible for processing the user's submission and returning the result. 

## Task Main Job Function

The `task` function is the main function that is called when a user run a task. This function is responsible for preparing the user's submission and returning the result.

```javascript

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

```javascript
async submitTask(roundNumber) {
  /* This function is called when a user submits a task.
  / The result/value should be string format.
  */
  const submission = await namespaceWrapper.storeGet('value');
  return submission;
  }
```
