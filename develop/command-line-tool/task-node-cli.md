---
title: Task Node CLI
description: The task node CLI is a helpful tool used by node operators for 4 different reasons.
image: img/thumbnail.png
sidebar_label: Task Node CLI
---

# Task Node CLI

Operations that can be done in the Task Node CLI include:

- Creating a task staking wallet
- Creating a distribution wallet
- Staking tokens on a task
- Getting a list of all tasks

The staking CLI can be started by running the command `yarn stake` in the root directory of the task node. The steps are:

- Clone the [task node repository](https://gitlab.com/koii-network/task-node) if you haven’t already done it.
- Run `yarn build`
- Run `yarn stake` in your terminal
- Enter the path to your wallet
- Next, you will be prompted with four options

```
? Select operation › - Use arrow-keys. Return to submit.
❯   Create a task staking wallet
    Create a task distribution wallet
    Stake tokens on a task
    Show all tasks
```

## Staking Wallet&#x20;

To create a staking wallet, select the "Create a task staking wallet" option and add the amount of KOII tokens you want to fund the wallet with.

```javascript
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/<YOUR_HOME>/.config/koii/id.json
✔ Select operation › Create a task staking wallet
create-task-staking-wallet
Connection to cluster established: https://k2-testnet.koii.live
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 379.99414788 KOII to pay for fees
✔ Enter the amount to add to staking wallet … 20
Success
✨  Done in 586.68s.
```

## Distribution Wallet

To create a distribution wallet, select the "Create a task distribution wallet" option and add the amount of KOII tokens you want to fund the wallet with.

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/<YOUR_HOME>/.config/koii/id.json
✔ Select operation › Create a task distribution wallet
create-task-distribution-wallet
Connection to cluster established: https://k2-testnet.koii.live
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 359.992541 KOII to pay for fees
✔ Enter the amount to add to distribution wallet … 30
Success
✨  Done in 664.06s.
```

## Stake Tokens

To stake tokens on a task, select the "Stake tokens on a task", add the task ID of the task you want to stake on, and enter the amount you want to stake.

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/<YOUR_HOME>/.config/koii/id.json
✔ Select operation › Stake tokens on a task
stake-tokens
Connection to cluster established: https://k2-testnet.koii.live
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 329.992531 KOII to pay for fees
✔ Enter the task id … GUU6Fe765opB2SUMpNo7utMFvyjeY6EPWBjYeHzAbXb8
✔ Enter the stake amount for task … 10
Success
✨  Done in 1039.91s.
```

## Show All Tasks

To view all tasks, select the "Show all tasks" option. You should see an array of tasks with their name and ID.

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
/Users/<YOUR_HOME>/.config/koii/id.json
✔ Select operation › Show all tasks
show-all-tasks
Connection to cluster established: https://k2-testnet.koii.live
Using account 2kG7HBGGVHZEhdbHQzvQGQUjLNGGiQvxshLu47UvnpBs containing 329.992531 KOII to pay for fees
[
  {
    name: 'DID-task-V2',
    taskId: '5RZrTKcumfnJ6z5fVuWSLuZKZCsjQARThQc5DjpF56gc'
  },
  {
    name: 'DDR',
    taskId: '5TK491kDMwSBFCKHxRQGBzV79uNRyYBcDiT5vNgL125g'
  },
  {
    name: 'dryRun',
    taskId: '7smY8E7f5BT5Gn5CKPkbSuro45ghAJtAkrV5WkUXcJ6G'
  },
  {
    name: 'RedesignedTask',
    taskId: 'BDXNWEjqfVFfWHWJfgJYpFVkWsXra8iKizn3v4Q8TdNS'
  },
  {
    name: 'Test1',
    taskId: 'GUU6Fe765opB2SUMpNo7utMFvyjeY6EPWBjYeHzAbXb8'
  }
]
```
