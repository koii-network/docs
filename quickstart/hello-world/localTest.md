---
title: Test your task
description: Task
image: img/thumbnail.png
sidebar_label: Test your task
---

To test our task locally, we can use the following command in the terminal:

```bash
yarn test
```

Executing this command will simulate a single round, encompassing all the functions performed in an actual deployed task. If the task passes the test, the output should resemble the following:

```js
 PASS  tests/main.test.js (7.049 s)
  Performing the task
    √ should performs the core logic task (89 ms)
    √ should fetch the submission (3 ms)
    √ should make the submission to k2 for dummy round 1 (8 ms)
    √ should make the make an audit on submission (20 ms)
    √ should make the distribution submission to k2 for dummy round 1 (33 ms)
    √ should make the make an audit on distribution submission (21 ms)
    √ should make sure the submitted distribution list is valid (5 ms)
    √ should test the endpoint (67 ms)

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        7.667 s
Ran all test suites.
Done in 15.69s.
```

If your test fails, it is advisable to review your code for any potential errors that may have occurred.
