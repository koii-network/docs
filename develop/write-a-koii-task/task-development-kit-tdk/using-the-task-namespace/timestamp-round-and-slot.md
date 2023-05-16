---
title: Timestamp, Round and Slot
description: Timestamp, Round and Slot
image: img/thumbnail.png
sidebar_label: Timestamp, Round and Slot
---

# Timestamp, Round and Slot

### What is timestamp and slot?

Timestamp is just a way of representing time, not related to k2. When the user sends data or receives data between K2, the slot can be used to record the time point of receiving or sending, which is a timestamp.

Slot is a unit used to measure the current progress of K2. A slot is approximately 400ms is the time which each leader takes to process transactions and produce a block. The progress of slot is very fast, which can effectively ensure the speed and accuracy of verification.

:::success

Timestamp used in REST API:

1. User received a request from server
2. User send back the result with the slot as timestamp
3. Server receive the result. By verifying and comparing whether there is a timestamp, the server can know the specific time and time spent on task completion, and use it for the next audit process.

:::

### What is round?

Round is made up for koii tasks in terms of K2. Round represents the entire process of a round of tasks. One round should contain work period, audit period and distribution period. Check [Runtime Flow](/develop/koii-task-101/what-are-tasks/gradual-consensus) for more details.

### How to get a slot?

Here's the example code of getting the current slot in Namespace:

```javascript
async function getSlot() {
  console.log(
    await namespaceWrapper.getSlot(),
    "current slot while calling auditTask"
  );
}
```

You can also use this function in audit or submit process and return the result, which would be the timestamp for your task:

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

### What should be submit and audit?

Not all tasks need to be audited through timestamp. But if your Koii task involves REST API, we strongly recommend you to use timestamp to conduct a more accurate audit and confirm your API health status. In addition, if your Koii task needs to be carried out at an accurate point in time, `getSlot` is also one of the options.
