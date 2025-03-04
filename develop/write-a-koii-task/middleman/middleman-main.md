---
title: Main Functions of Koii Middleman Server
image: img/thumbnail.png
sidebar_label: Middleman Main
---

# Function Overview: Main Task Data Fetching and Processing

## Imports
```javascript
const getTaskData = require("./helpers/getTaskData");
const storeData = require("./helpers/storeData");
const dataFromCid = require("./helpers/dataFromCid");
const { Connection } = require("@_koii/web3.js");
require("dotenv").config();
```

- **getTaskData**: A helper function that retrieves task data from the K2
- **storeData**: Handles storing processed data
- **dataFromCid**: Retrieves data from IPFS using Content Identifiers (CIDs)
- **Connection**: K2 connection handler
- **dotenv**: Loads environment variables from a `.env` file

## Configuration
```javascript
let round = 0;
const taskId = process.env.TASK_ID;
const fileName = process.env.FILE_NAME;
const INTERVAL = 15 * 60 * 1000; // 15 minutes in milliseconds
```

- **round**: Tracks the current processing round
- **taskId**: Task identifier from environment variables
- **fileName**: Name of the file to process from environment variables
- **INTERVAL**: Polling interval set to 15 minutes

## Main Function

```javascript
async function main() {
    const connection = new Connection("https://mainnet.koii.network");

    while (true) {
        try {
            // ... processing logic ...
        } catch (error) {
            console.error("Error in main loop:", error);
        }

        // Wait for the next interval
        await new Promise((resolve) => setTimeout(resolve, INTERVAL));
    }
}
```

### Description
This script continuously monitors and processes task data from the Koii network with the following features:

1. **Continuous Monitoring**: 
   - Runs in an infinite loop with a 15-minute interval between checks
   - Maintains a persistent connection to the Koii mainnet

2. **Data Processing**:
   - Fetches task data for the specified task ID
   - Validates if submissions are CID-based
   - Processes CIDs in batches, retrieving data from IPFS
   - Stores processed data using the storeData helper

3. **Error Handling**:
   - Implements try-catch blocks for robust error handling
   - Continues operation even if individual cycles fail
   - Includes graceful shutdown handlers for SIGINT and SIGTERM signals

4. **Rate Limiting**:
   - Implements a 1-second delay between CID processing
   - Uses a 15-minute interval between main processing cycles

### Execution
The script starts by calling `main()` and runs indefinitely until manually stopped. It includes graceful shutdown handlers for clean termination:

```javascript
process.on("SIGINT", () => {
    console.log("Gracefully shutting down...");
    process.exit(0);
});

process.on("SIGTERM", () => {
    console.log("Gracefully shutting down...");
    process.exit(0);
});

main().catch(console.error);
```

### Notes
- The script is designed for production environments with proper error handling
- Implements rate limiting to prevent overwhelming IPFS or network resources
- Processes submissions in batches for improved efficiency
- Supports both CID and non-CID based submissions