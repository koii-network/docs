---
title: Dive into the Code
description: What's in the Hello-World template?
image: img/thumbnail.png
sidebar_label: Dive into the Code
---

If you skipped it before, clone the repo and dive in:

```bash
 git clone https://github.com/koii-network/task-template.git hello-world
 cd hello-world
```

Make sure you have [node](https://nodejs.org/en/), npm, and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed before going forward.

## What's in the template?

- `index.js` — is the hub of your app, and ties together the other pieces. This will be the entry point when your task runs on task nodes.

- `namespaceWrappers.js` — contains the interfaces to make API calls to the core of the task-node. It contains all the necessary functions required to submit and audit the work, as well as the distribution lists. Check [here](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/) to learn more Namespace functions.

- `coreLogic.js` — is where you'll define your task, audit, and distribution logic, and controls the majority of task functionality. You can of course break out separate features into sub-files and import them into the core logic before web-packing.
  Check [here](/develop/write-a-koii-task/task-development-kit-tdk/)

<!-- ## The `coreLogic.js`

There are in total 9 methods in `CoreLogic` which you can modify according to your needs:

| Method      | Description |
| ----------- | ----------- |
| `task()`      | The logic for what your task should do goes here.     |
| `fetchSubmission()`   | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored.        |
| `submitTask()`   | This method calls a `namespace` method and submits the task's results/work to K2.        |
| `generateDistributionList()`   | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample logic that rewards 1 KOII to all the nodes with valid submissions for that round.|
| `submitDistributionList()`   | Makes a call to a `namespace` method of the task-node to upload the distribution list to K2      |
| `validateNode()`   | This method contains logic to verify a node's submission value.    |
| `validateDistribution()`   | The logic to validate the distribution list goes here and the method will receive the distribution list submitted from the task-state.        |
| `auditTask()`   | Makes a call to the `namespace` of task-node to raise an audit against the submission value if the validation fails.        |
| `auditDistribution()`   | Makes a call to the `namespace` of task-node to raise an audit against the distribution list if the validation fails.        |

Now that's out of the way, let's move forward to writing the task.

:::info
The source code to the hello-world task can be found [here](https://github.com/koii-network/hello-world).

If you encounter any difficulties, feel free to contact us at [Koii support](https://share.hsforms.com/1Nmy8p6zWSN2J2skJn5EcOQc20dg) or chat with us at [Discord](https://discord.com/invite/koii).

:::

 -->

## Let's start building our task.

In order to create our initial task, we will make modifications to the methods within coreLogic.js. Join us as we delve into each method to gain a deeper understanding of their functionalities and implementation details.

:::info

When creating a task using the Task Template, there's usually no need to edit the following methods: `auditTask()`, `auditDistribution()`, and `submitDistributionList()`.

:::

## `task()`

The main function of the task is to submit `"Hello, World!"` to K2. We will be using the `namespaceWrapper.storeSet()` function to store the value to NeDB.

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

The `fetchSubmission()` method will fetch and return the submission value from NeDB using the `namespaceWrapper.storeGet()` method.

Update `fetchSubmission()` with the code block below:

```js
async fetchSubmission() {
    const value = await namespaceWrapper.storeGet("value"); // retrieves the value
    console.log("VALUE", value);
    return value;
}
```

## `submitTask()`

The `submitTask()` method calls `fetchSubmission()` to retrieve the submission value from NeDB and submits it to K2 along with the current `roundNumber`.

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

The purpose of the `validateNode()` method is to verify whether a node has submitted the correct value, which in this case is "Hello, World!". The method returns true if the value is correct, and false otherwise.

To update the `validateNode()` method, replace it with the following code block:

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

## `auditTask()`

The `auditTask()` function calls `namespaceWrapper.validateAndVoteOnNodes()` and passes the `validateNode()` method we created initially, along with the current round number.

During each round, participating nodes execute the `auditTask()` method on each node to verify the validity of the submitted value. In our case, a valid submission value is `"Hello, World!"`. If a node submits a different value, an audit is triggered on K2, and the node responsible may have their stake confiscated.

```js
  async auditTask(roundNumber) {
    await namespaceWrapper.validateAndVoteOnNodes(
      this.validateNode,
      roundNumber,
    );
  }
```

While the nodes are verifying the data submitted on-chain, they also monitor for any audits raised against a node. They can then vote in favor or against the audit accordingly.

## `generateDistributionList()`

The Task Template contains a sample logic for the `generateDistributionList()`, which rewards **1 KOII** to all the nodes with valid submissions for that round. We'd retain the logic for the Hello World project.

In the sample code:

- An empty distribution list is initialized
- The task's data is retrieved using the `getTaskState` helper function
- All submissions are fetched from the task's data
- The `submissions_audit_trigger` is also retrieved from the task's data; this object contains information about the audited submissions
- An empty distribution list is returned if `submissions` is null. Otherwise, the keys and values of `submissions` are grouped separately, and in a loop, it calculates the audits on each submission and the number of votes on the audit and then generates a distribution list based on that.

## `validateDistribution()`

In the sample code present in the template:

- The distribution list is fetched
- If the distribution list is not null, it is parsed and stored in the variable `fetchedDistributionList`
- The distribution list is re-generated by calling the `generateDistributionList` method with the current round number and task state as parameters
- The generated distribution list is stored in the variable `generatedDistributionList`
- Finally, `fetchedDistributionList` and `generatedDistributionList` are compared to see if they are equal. If they are, this method returns `true`, otherwise `false`.

The source code to the hello-world task can be found [here](https://github.com/koii-network/hello-world).
