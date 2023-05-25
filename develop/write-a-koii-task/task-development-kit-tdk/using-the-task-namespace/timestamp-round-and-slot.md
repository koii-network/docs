---
title: Timestamp, Round, and Slot
description: Timestamp, Round and Slot
image: img/thumbnail.png
sidebar_label: Timestamp, Round, and Slot
---

# Timestamp, Round, and Slot

### What is timestamp and slot?

Timestamp is just a way of representing time, not related to k2. When the user sends data or receives data between K2, the slot can be used to record the time point of receiving or sending, which is a timestamp.

A **slot** is a unit used to measure the current progress of K2. A slot is approximately 400ms is the time that each leader takes to process transactions and produce a block. The progress of a slot is very fast, which can effectively ensure the speed and accuracy of verification.

:::success

Timestamp used in REST API:

1. User received a request from the server
2. User sends back the result with the slot as a timestamp
3. Server receives the result. By verifying and comparing whether there is a timestamp, the server can know the specific time and time spent on task completion, and use it for the next audit process.

:::

### What is round?

Round is made up for Koii tasks in terms of K2. A **round** represents the entire process of a round of tasks. One round should contain the submission phase, audit phase, and distribution phase. Check [Runtime Flow](/develop/koii-task-101/what-are-tasks/gradual-consensus) for more details.

### How to get a slot?

Here's the example code for getting the current slot in Namespace:

```javascript
async function getSlot() {
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
}
```

You can also use this function in the audit or submit process and return the result, which would be the timestamp for your task:

```javascript
async function auditTask(roundNumber) {
  console.log("auditTask called with round", roundNumber);
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
  await namespaceWrapper.validateAndVoteOnNodes(validateNode, roundNumber);
}
```

### What can be submitted for auditing?

Not all tasks need to be audited through timestamp. But if your Koii task involves REST API, we strongly recommend you use a timestamp to conduct a more accurate audit and confirm your API health status. In addition, if your Koii task needs to be carried out at an accurate point in time, `getSlot` is also one of the options.
