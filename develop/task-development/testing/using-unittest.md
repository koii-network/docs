---
title: Using unitTest
description: unitTest.js helps you to test your task steps separately.
image: img/thumbnail.png
sidebar_label: Unit tests
---

# Using unitTest

In the `/tests` folder, we also provide a unitTest.js file. It helps you to test your task steps separately. You can run the unitTest.js file by:

```sh
node tests/unitTest.js
```

In this file, we provide a simple example of how to use the unitTest.js file. You can use it as a reference to write your unit test. Here are the functions that we provide:

## coreLogic

This function is the main loop function of your task. It should contain all the core logic of your task. First, we run `coreLogic.task()`

```js
await coreLogic.task();
```

This function usually creates the cid or proof and stores it in the database. Then we check and fetch the result of the cid. In the next function, we should upload the cid to k2.

```js
const submission = await coreLogic.fetchSubmission();
```

Submission is the cid of this round. The next step is to check the validity of the submission. If the submission is valid, the task will use dummyTaskState to simulate the distribution list and upload it to k2.


You can customize your unit test to save your testing time or fit it to your task. Happy coding!
