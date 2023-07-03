---
title: Using unitTest
description: unitTest.js helps you to test your task steps separately.
image: img/thumbnail.png
sidebar_label: Using unitTest
---

# Using unitTest

In tests folder, we also provide a unitTest.js file. It helps you to test your task steps separately. You can run the unitTest.js file by:

```bash
node tests/unitTest.js
```

In this file, we provide a simple example of how to use the unitTest.js file. You can use it as a reference to write your own unit test. Here are the functions that we provide:

## coreLogic

This function is the main loop function of your task. It should contain all the core logic of your task. First we run `coreLogic.task()`

```javascript
await coreLogic.task();
```

This function usually create the cid or proof and store in database. Then we check and fetch the result of the cid. In next function we should upload the cid to k2.

```javascript
const submission = await coreLogic.fetchSubmission();
```

Submission is the cid of this round. The next step is to check the valid of the submission. If the submission is valid, the task will use dummyTaskState to simulate the distribution list and upload to k2.

```javascript
const vote = await coreLogic.validateNode(submission, 1);
```

You can common or customize your own unit test to save your testing time or fit it to your task. Happy coding!
