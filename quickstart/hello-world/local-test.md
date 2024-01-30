---
title: Test your Task
description: Task
image: img/thumbnail.png
sidebar_label: Test your Task
---

To test our task locally, we can use the following command in the terminal:

```bash
npm test
```
:::tip 
If you can't run test you may have skipped the step to install packages:

```bash
npm install
```
:::

Executing this command will simulate a single round, encompassing all the functions performed in an actual deployed task. If the task passes the test, the output should resemble the following:

```js
  PASS  tests/main.test.js
  Performing the task
    √ should performs the core logic task (288 ms)
    √ should make the submission to k2 for dummy round 1 (59 ms)
    √ should make the make an audit on submission (42 ms)
    √ should make the distribution submission to k2 for dummy round 1 (44 ms)
    √ should make the make an audit on distribution submission (33 ms)
    √ should make sure the submitted distribution list is valid (15 ms)
    √ should test the endpoint (129 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        4.657 s
Ran all test suites.
```

If your test fails, it is advisable to review your code for any potential errors that may have occurred.
