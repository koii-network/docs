---
title: Network and Task Handling
description: Methods for retrieving network data, managing tasks, and logging operations.
image: img/thumbnail.png
sidebar_label: Network and Task Handling
---

import Tooltip from "@site/src/components/tooltip";

## getNodes

Retrieves information about network nodes

- **Inputs**:
  - url: API endpoint URL
- **Outputs**: An array of objects representing the node information, directly returned by the function.
- **Example Usage and Output**:

```typescript
const nodes = await namespaceWrapper.getNodes("https://api.koii.network/");
console.log(nodes);
// Output:
// [
//   {
//    data: {
//      url: string | undefined,    // Node URL
//      timestamp: number           // Last update timestamp
//    },
//    signature: string,             // Node signature
//    owner: string,                 // Node owner
//    submitterPubkey: string        // Submitter's public key
//    task: string                   // task ID
//   }, ...
// ]
```

## getRpcUrl

Gets the current RPC URL for the Koii network

- **Outputs**: Promise resolving to the RPC URL
- **Example Usage and Output**:

```typescript
const rpcUrl = await namespaceWrapper.getRpcUrl();
console.log(rpcUrl);

// Output: "https://mainnet.koii.network"
```

## getTaskDBPath

Gets the path to the task's NeDB database

- **Outputs**: Promise resolving to database path
- **Example Usage**:

```typescript
const dbPath = await namespaceWrapper.getTaskLevelDBPath();

console.log(dbPath);
// Output:
//   - string ("your_local_path/namespace/TASK_ID/KOIIDB") // DB path
```

## getBasePath

Gets the base path to the task folder for performing file operations

- **Outputs**: Promise resolving to base path
- **Example Usage**:

```typescript
const basePath = await namespaceWrapper.getBasePath();

console.log(basePath);
// Output:
//   - string ("your_local_path/namespace/TASK_ID/")
```

## getRound

Gets the current round number

- **Outputs**: Promise resolving to current round number
- **Example Usage**:

```typescript
const currentRound = await namespaceWrapper.getRound();

console.log(currentRound);
// Output:
//   - number (1 or current number of that specific round)
```

## getSubmitterAccount

Gets the submitter's account Keypair

- **Outputs**: Promise resolving to submitter's Keypair
- **Example Usage**:

```typescript
const submitterKey = await namespaceWrapper.getSubmitterAccount();

// Output:
// - Keypair { secretKey: Uint8Array(64) [/* secret key bytes */], publicKey: PublicKey { /* public key */ } }
```

## getMainAccountPubkey

Gets the main account's public key

- **Outputs**: Promise resolving to main account public key
- **Example Usage**:

```typescript
const mainPubkey = await namespaceWrapper.getMainAccountPubkey();

// Output: '5Hh7i4K6Qhb9P3hLk9mnEJzLbxnsXjdJ6sWxYbR4tT5z' | null
```

## logger

Logs messages based on specified log level (log, warn, error).

- **Inputs**:
  - level: log, warn or error
  - message: a string value
  - action: a string value
- **Output**: A boolean value
- **Example Usage**:

```typescript
try {
  // Log a normal message (log level)
  const logSuccess = await namespaceWrapper.logger(
    "log",
    "Task has been successfully completed!",
    "TaskCompletion",
  );
  console.log("Log success:", logSuccess); // Expected output: true

  // Log a warning message (warn level)
  const warnSuccess = await namespaceWrapper.logger(
    "warn",
    "Task took longer than expected!",
    "TaskWarning",
  );
  console.log("Warn success:", warnSuccess); // Expected output: true

  // Log an error message (error level)
  const errorSuccess = await namespaceWrapper.logger(
    "error",
    "Task failed due to an unknown error!",
    "TaskError",
  );
  console.log("Error success:", errorSuccess); // Expected output: true

  // Log with an invalid log level
  const invalidLogSuccess = await namespaceWrapper.logger(
    "invalid",
    "This should fail",
    "TaskFailure",
  );
  console.log("Invalid log success:", invalidLogSuccess); // Expected output: false
} catch (error) {
  console.log(error);
}
```

## getSlot

Get the current slot number

- **Output**: returns a number
- **Example Usage**:

```typescript
try {
  const slot = await getSlot();
  console.log(slot); // Output: 500

  const slot = await getSlot();
  console.log(slot); // Output: 0, and logs "Error getting slot: {}"

  const slot = await getSlot();
  console.log(slot); // Output: 100
} catch (error) {
  console.log(error);
}
```

## getAverageSlotTime()

Gets average slot time for the network

- **Outputs**: Promise resolving to slot time in milliseconds
- **Example Usage and Output**:

```typescript
try {
  const averageSlotTime = await myService.getAverageSlotTime();
  console.log(averageSlotTime); // Expected output: 150
} catch (error) {
  console.log(error);
}
```

## Next Steps

To learn more about specific features, check out these guides:

- [Audit and Distribution](./audit-distribution-operations.md) - Manage network data and tasks.
