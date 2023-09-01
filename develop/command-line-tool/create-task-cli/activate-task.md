---
title: Activate/Deactivate Task
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Activate/Deactivate Task
---

This section provides clear instructions on how to activate and deactivate a Koii task, ensuring smooth task management.

## 1. Activate a Task

- To activate a task, select the `Activate/Deactivate task` option as shown below:

    ```bash
    ? Select operation › - Use arrow-keys. Return to submit.
        Create a new task
        update existing task
    ❯   Activate/Deactivate task
        Claim reward
        Fund task with more KOII
        Withdraw staked funds from task
        upload assets to IPFS(metadata/local vars)
    ```

- Enter your task ID:

    ```bash
    ? Enter the task id › 5ZsWFdZhwaQ2PA5mq92z8aeozxYHHsnYSTSkSTWcnmfS
    ```

- Select `Active`:

    ```bash
    ? Do you want to set the task to Active or Inactive? › - Use arrow-keys. Return to submit.
    ❯   Active - Set the task active
        Inactive
    ```
Upon successful activation, you should see an output similar to this:
    ```bash
    Calling SetActive
    ✔ Enter the task id … 5ZsWFdZhwaQ2PA5mq92z8aeozxYHHsnYSTSkSTWcnmfS
    ✔ Do you want to set the task to Active or Inactive? › Active
    Success
    ```

## 2. Deactivate a Task

- To deactivate a task, select the `Activate/Deactivate task` option as shown below:

    ```bash
    ? Select operation › - Use arrow-keys. Return to submit.
        Create a new task
        update existing task
    ❯   Activate/Deactivate task
        Claim reward
        Fund task with more KOII
        Withdraw staked funds from task
        upload assets to IPFS(metadata/local vars)
    ```

- Enter your task ID:

    ```bash
    ? Enter the task id › 5ZsWFdZhwaQ2PA5mq92z8aeozxYHHsnYSTSkSTWcnmfS
    ```

- Select `Inactive`:

    ```bash
    ? Do you want to set the task to Active or Inactive? › - Use arrow-keys. Return to submit.
    ❯   Active - Set the task active
        Inactive
    ```
Upon successful deactivation, you should see an output similar to this:
    ```bash
    Calling SetActive
    ✔ Enter the task id … 5ZsWFdZhwaQ2PA5mq92z8aeozxYHHsnYSTSkSTWcnmfS
    ✔ Do you want to set the task to Active or Inactive? › Inactive
    Success
    ```
