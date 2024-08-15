---
title: Koii Middleman Helpers
image: img/thumbnail.png
sidebar_label: Helpers
---

# Helper Functions for Koii Middleman Server

## Overview

The Koii Middleman Server template provides a set of helper functions to streamline the processing of tasks. These functions are designed to simplify common operations such as fetching task data, queuing submissions, and handling task rounds efficiently. By leveraging these helper functions, developers can focus on building the core functionality of their middleman servers without worrying about the underlying details.

## Helper Functions

### getTaskData

Here’s a detailed explanation of the provided `getTaskData` function in markdown format:

```javascript
const { Connection, PublicKey } = require("@_koii/web3.js");
```

- **Connection**: Establishes a connection to the Koii network.
- **PublicKey**: Represents the public key of the task account.

#### Description

This asynchronous function retrieves the latest task data from the Koii network. It checks for new rounds of submissions and returns relevant data if a new round is found.

#### Parameters

- **taskID**: The unique identifier for the task, typically loaded from environment variables.
- **round**: The current round number that the server is tracking.

#### Function Workflow

1. **Establish Connection**:

   ```javascript
   const connection = new Connection("https://testnet.koii.network");
   ```

   - A connection to the Koii testnet is established using the `Connection` class.

2. **Retrieve Latest Task Data**:

   ```javascript
   async function getLatestTaskData() {
     const accountInfo = await connection.getAccountInfo(new PublicKey(taskID));
     taskState = JSON.parse(accountInfo.data);
     submissionList = [];
     maxRound = Math.max(...Object.keys(taskState.submissions).map(Number));
   }
   ```

   - The `getLatestTaskData` function fetches the latest account information for the given `taskID`.
   - The data is parsed, and the `maxRound` is determined by finding the highest round number in the submissions.

3. **Check for New Round**:

   ```javascript
   if (round < maxRound) {
     console.log(`A new round, ${maxRound} has been detected.`);
     console.log("Waiting 2 Minutes for the potential submission period.");
     await new Promise((resolve) => setTimeout(resolve, 600));
     console.log("2 Minutes has passed, re-starting the operation.");
     await getLatestTaskData();
   } else {
     return false;
   }
   ```

   - If a new round (`maxRound`) is detected, the function waits for 2 minutes before re-fetching the data.
   - If no new round is found, the function returns `false`.

4. **Return Task Data**:
   ```javascript
   return {
     submissions: submissionList,
     maxRound: maxRound,
     roundTime: taskState.round_time,
   };
   ```
   - The function returns an object containing:
     - `submissions`: A list of all submission values in the latest round.
     - `maxRound`: The highest round number detected.
     - `roundTime`: The time associated with each round.

#### Exports

```javascript
module.exports = getTaskData;
```

- The `getTaskData` function is exported for use in other parts of the application.
