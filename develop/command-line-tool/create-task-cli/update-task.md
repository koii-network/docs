---
title: Update Existing Task
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Update Existing Task
---

Now that we have covered creating a task, let's explore the process of updating an existing task.

# Getting Started

- After executing the `npx @_koii/create-task-cli@latest` command, you will be presented with a set of options. To update an existing task, select the following option:

```bash
? Select operation › - Use arrow-keys. Return to submit.
    Create a new local repository
    Deploy a new task
❯   update existing task
    Activate/Deactivate task
    Claim reward
    Fund task with more KOII
    Withdraw staked funds from task
    upload assets to IPFS(metadata/local vars)
```

- Similar to creating a task, there are two options available for updating a task:

```bash
? Select operation › - Use arrow-keys. Return to submit.
❯   using CLI
    using config YML
```

### Using config YML

This is the recommended and simpler option. You can update your task by modifying the information in your `config-task.yml` file and describing the changes made in the [`migrationDescription`](https://github.com/koii-network/task-template/blob/master/config-task.yml#L56) option. For example:

```yaml
# Name and metadata of your task
task_name: "New Name"

# Existing code...

# Provide the description for changes made in new version of task
migrationDescription: "Updated the task name"
```
After making your updates and describing them in `migrationDescription`, select `using config YML` to proceed to the next step.


```
Your MetaData CID is bafybeiafgp57vwmemlthabkrvsxs5je3ichvywum7w4ccfvrsnq3onxbci/metadata.json
? Your account will be deducted 6.96090088 KOII for creating the task, which includes the rent exemption (6.96090088 KOII) and bounty amount fees is taken from the last task › (y/N)
```

- Confirm by entering `y` to deduct the necessary KOII amount for updating the task information.

## Using CLI

When using this option to update a task, you will be prompted to provide the task information sequentially.

- The first information to provide is the task's ID:

```
✔ Enter the ID of the task you want to edit > 
```

- Next, you'll be prompted to provide the new information you want to update the task with:

```bash
✔ Enter the name of the task … Updated task name
✔ Enter a short description of your task … Updated task description
✔ Please select the type of network › DEVELOPMENT
✔ Enter the name of executable you want to run on  task-nodes … main
✔ Enter the round time in slots … 300
✔ Enter the audit window in slots … 100
✔ Enter the submission window in slots … 100
✔ Enter the minimum staking amount for the task (in KOII) … 2
✔ Enter the bounty amount per round (In KOII) … 10
✔ Enter the number of distribution list submission retry in case it fails … 3
✔ Enter TaskMetadata CID hosted on IPFS (Leave empty for None). … 
✔ Enter the space, you want to allocate for task account (in MBs) … 10
? Your account will be deducted 69.60090088 KOII for creating the task, which includes the rent exemption (69.60090088 KOII) and bounty amount fees is taken from the last task › (y/N)
```

Following the steps above, you can efficiently update your existing Koii task, whether using the `config YML` option or the `CLI` option.