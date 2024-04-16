---
title: Jest Configuration
description: Depending on the types of tasks you are developing, you may require custom configuration of your jest testing file.
image: img/thumbnail.png
sidebar_label: Jest Configuration
---

# Testing Configuration

Depending on the types of tasks you are developing, you may require a custom configuration of your jest testing file. There will be an `main.test.js` file which will allow you to custom variables to the jest testing file.

## Long run task

If you have a long-run task such as web scraping or machine learning, you may need to increase the timeout of the jest testing. You can update it to the following code in the `main.test.js`` file, lines 11 to 14:

```javascript
it("should performs the core logic task", async () => {
  const result = await coreLogic.task();
  expect(result).not.toContain("ERROR IN EXECUTING TASK");
}, 2000000); // 2000000 is the timeout in milliseconds
```

The test will wait for at most 2000000 milliseconds (2000 seconds) before it fails.

## Submission rules

If you have a submission rule that requires a specific format or round of the submission, you can update the `main.test.js` file, lines 21 to 45:

```javascript
const round = 1; // the round of the submission
...
Joi.object({
            submission_value: Joi.string().required(), // the submission value format rules
            slot: Joi.number().integer().required(),
            round: Joi.number().integer().required(),
          }),
```

:::tip
Please note after you deploy the task, the `round` variable is the round of the submission, not the round of the task. The round of the task is the round of the submission plus one.
:::

:::danger
Please node after you deploy the task, make sure `submission_value` is the cid which is the string format of the IPFS hash.
:::