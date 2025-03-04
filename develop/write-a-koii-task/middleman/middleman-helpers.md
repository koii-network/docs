---
title: Koii Middleman Helpers
image: img/thumbnail.png
sidebar_label: Helpers
---

# Helper Functions for Koii Middleman Server

## Overview

The Koii Middleman Server template provides a set of helper functions to streamline the processing of tasks. These functions handle task data retrieval, data storage, and IPFS content fetching.

## Helper Functions

### getTaskData

```javascript
const { getTaskStateInfo } = require("@_koii/create-task-cli");
```

#### Description
Retrieves task data from K2 network, including submissions and round information.

#### Parameters
- **connection**: K2 network connection instance
- **taskID**: The task identifier
- **round**: Current round number being tracked

#### Returns
```javascript
{
    submissionFullList: Object,  // Complete submission data for the round
    submissions: Array,          // List of submission values
    submitters: Array,          // List of submitter addresses
    maxRound: Number,           // Current round number
    roundTime: Number           // Round duration
}
```

#### Key Features
- Validates task ID existence
- Fetches latest task state using `getTaskStateInfo`
- Processes submissions for the latest round
- Includes error handling and round validation

### storeData

```javascript
const { MongoClient } = require("mongodb");
```

#### Description
Stores task data in MongoDB database.

#### Parameters
- **taskId**: Task identifier
- **round**: Round number
- **data**: Data to be stored

#### Configuration
```javascript
const client = new MongoClient(process.env.MONGO_URI);
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;
```

Required environment variables:
- `MONGO_URI`: MongoDB connection string
- `DB_NAME`: Database name
- `COLLECTION_NAME`: Collection name

#### Workflow
1. Connects to MongoDB
2. Inserts data with task ID and round information
3. Closes connection after operation

### dataFromCid

```javascript
const { KoiiStorageClient } = require("@_koii/storage-task-sdk");
```

#### Description
Retrieves data from IPFS using Content Identifiers (CIDs).

#### Primary Function: `fetchCidFromGetFile`
```javascript
async function fetchCidFromGetFile(cid, fileName) {
    const blob = await storageClient.getFile(cid, fileName);
    const text = await blob.text();
    return JSON.parse(text);
}
```

#### Parameters
- **cid**: IPFS Content Identifier
- **fileName**: Name of the file to retrieve
- **maxRetries** (optional): Maximum retry attempts (default: 2)
- **retryDelay** (optional): Delay between retries in ms (default: 3000)

#### Features
- Uses Koii Storage SDK for reliable IPFS access
- Includes error handling and retry logic
- Converts IPFS content to JSON format

#### Backup Method: `directFetchCid`
```javascript
async function directFetchCid(cid, fileName) {
    const response = await axios.get(
        `https://ipfs-gateway.koii.live/ipfs/${cid}/${fileName}`,
        { timeout: 530000 }
    );
    return response.data.map((item) => item.data);
}
```

:::note
Direct IPFS gateway fetching is available but not recommended for production use.
:::

#### Usage Example
```javascript
const data = await dataFromCid("bafybei...", "data.json");
if (data) {
    // Process the retrieved data
}
```