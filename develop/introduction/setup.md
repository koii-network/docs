---
title: Setting up your Task
sidebar_label: Setting up your Task
---

## Get a Template

To make the process of writing tasks seamless, we have created a task-template that let's you write code in vanilla Javascript and convert it into a Koii Task.

Clone the repo and dive in:
```bash
 git clone https://github.com/koii-network/task-template.git hello-world
 cd hello-world
```

Let's take a look at what you will find in the template

| Method      | Description |
| ----------- | ----------- |
| `task()`      |  This is where you can trigger the core runtime of your app, configure sub-modules, and start the services that will prepare submission data. For already existing apps, this can usually be left empty, while relying on the existing app to generate and populate a database of proofs.  |
| `fetchSubmission()`   | After completing the task, the results/work will be stored either on [IPFS](https://ipfs.tech/) or [NeDB](https://dbdb.io/db/nedb). This method fetches the results/work from where it was stored, and prepares a compact submission object for SubmitTask().  |
| `submitTask()`   | This method calls a `namespace` method and submits the task's results/work to K2.        |
| `validateNode()`   | This method contains logic to verify a node's submission value.    |

## Managing Distributions
Each round, one node is randomly selected to tally the submissions and submit a distribution event. This is a considerably smaller task than the actual runtime, submission, and audit mechanisms, and is mostly just a matter of summing on-chain submissions and accounting rewards proportional to contribution, or penalties where a submission failed verification by other nodes. 

| Method      | Description |
| ----------- | ----------- |
| `generateDistributionList()`   | This method contains the logic to generate a [distribution list](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions). We have provided a sample logic that rewards 1 KOII to all the nodes with valid submissions for that round.|
| `submitDistributionList()`   | Makes a call to a `namespace` method of the task-node to upload the distribution list to K2      |
| `validateDistribution()`   | The logic to validate the distribution list goes here and the method will receive the distribution list submitted from the task-state.        |
| `auditDistribution()`   | Makes a call to the `namespace` of task-node to raise an audit against the distribution list if the validation fails.        |


