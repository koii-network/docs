---
title: Database Operations
description: NeDB is a key-value storage library that provides an ordered mapping from string keys to string values.
image: img/thumbnail.png
sidebar_label: Database Operations
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# NeDB Storage

[NeDB](https://www.npmjs.com/package/nedb) is a key-value storage library that provides an ordered mapping from string keys to string values. It is an embedded persistent or in-memory database for Node.js, nw.js, Electron, and browsers. Written in 100% JavaScript with no binary dependencies.

## Overview

The **Namespace Wrapper** provides a standardized interface to NeDB, ensuring consistent data handling.

## Core Database Operations

### Getting Database Instance

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    ```typescript
    import { namespaceWrapper } from "@_koii/namespace-wrapper";

    // Getting Database Instance
    const db: any = await namespaceWrapper.getDB(); // Type it based on the actual database interface
    ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const { namespaceWrapper } = require("@_koii/namespace-wrapper");

    // Getting Database Instance
    const db = await namespaceWrapper.getDB();  // Type it based on the actual database interface
    ```

  </TabItem>
</Tabs>

### Storing Data

```typescript title="TypeScript"
await namespaceWrapper.storeSet("userCount", "42");
await namespaceWrapper.storeSet(
  "config",
  JSON.stringify({
    taskName: "ImageProcessing",
    version: "1.0.0",
    settings: { maxRetries: 3, timeout: 5000 },
  }),
);
```

### Retrieving Data

<Tabs>
<TabItem value="typescript" label="TypeScript">
    ```typescript
    const count: string | null = await namespaceWrapper.storeGet("userCount");
    console.log("User count:", count);

    const configStr: string | null = await namespaceWrapper.storeGet("config");
    const config = JSON.parse(configStr!);
    console.log("Task name:", config.taskName);
    ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const count = await namespaceWrapper.storeGet("userCount");
    console.log("User count:", count);
    ```
  </TabItem>
</Tabs>

## Advanced Database Operations

### Querying Data

<Tabs>
  <TabItem value="typescript" label="TypeScript">
      ```typescript
      const db: any = await namespaceWrapper.getDB();
      const allDocs = await db.find({});
      const activeTasks = await db.find({ status: "active" });
      const task = await db.findOne({ taskId: "123" });
      ```
    </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    const db = await namespaceWrapper.getDB();
    const allDocs = await db.find({});
    ```
  </TabItem>
</Tabs>

### Inserting Data

```typescript
await db.insert({ taskId: "123", status: "active", timestamp: Date.now() });
await db.insert([
  { taskId: "124", status: "pending" },
  { taskId: "125", status: "completed" },
]);
```

### Updating Data

```typescript
await db.update({ taskId: "123" }, { $set: { status: "completed" } });
await db.update(
  { status: "pending" },
  { $set: { status: "active" } },
  { multi: true },
);
```

### Removing Data

```typescript
await db.remove({ taskId: "123" });
await db.remove({ status: "completed" }, { multi: true });
```

## Indexing

```typescript
const db: any = await namespaceWrapper.getDB();
await db.ensureIndex({ fieldName: "taskId", unique: true });
await db.ensureIndex({ fieldName: "status" });
```

## Best Practices

### Error Handling

```typescript
try {
  await namespaceWrapper.storeSet("key", "value");
} catch (error) {
  console.error("Database operation failed:", error);
}
```

### Data Validation

```typescript
function validateData(data: { taskId: string }) {
  if (!data.taskId || typeof data.taskId !== "string") {
    throw new Error("Invalid taskId");
  }
}

try {
  const data = { taskId: "123" };
  validateData(data);
  await db.insert(data);
} catch (error) {
  console.error("Validation failed:", error);
}
```

### Atomic Operations

```typescript
await db.update({ counter: { $lt: 10 } }, { $inc: { counter: 1 } });
```

### Indexing Strategy

```typescript
await db.ensureIndex({ fieldName: "timestamp" });
await db.ensureIndex({ fieldName: "taskId", status: 1 });
```

## Common Patterns

### Caching Results

```typescript
let cachedData: any[] | null = null;
let cacheTimestamp: number = 0;

async function getCachedData(): Promise<any[]> {
  const now = Date.now();
  if (!cachedData || now - cacheTimestamp > 60000) {
    cachedData = await db.find({ status: "active" });
    cacheTimestamp = now;
  }
  return cachedData;
}
```

### Batch Operations

```typescript
async function batchInsert(records: any[]): Promise<void> {
  const batchSize = 100;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    await db.insert(batch);
  }
}
```

### Data Migration

<Tabs>
  <TabItem value="typescript" label="TypeScript">
    ```typescript
    async function migrateData(): Promise<void> {
      const oldRecords = await db.find({ version: "1.0" });
      for (const record of oldRecords) {
        const newRecord = transformRecord(record);
        await db.update({ _id: record._id }, { $set: newRecord });
      }
    }
    ```
  </TabItem>    
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    async function migrateData() {
      const oldRecords = await db.find({ version: "1.0" });
      for (const record of oldRecords) {
        const newRecord = transformRecord(record);
        await db.update({ _id: record._id }, { $set: newRecord });
      }
    }
    ```
  </TabItem>
</Tabs>

## Troubleshooting

### Database Corruption

<Tabs>
  <TabItem value="typescript" label="TypeScript">
      ```typescript
      async function repairDatabase(): Promise<void> {
        const db: any = await namespaceWrapper.getDB();
        await db.loadDatabase();
        console.log("Database reloaded");
      }
      ```
    </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    async function repairDatabase() {
      const db = await namespaceWrapper.getDB();
      await db.loadDatabase();
      console.log("Database reloaded");
    }
    ```
  </TabItem>
</Tabs>

### Performance Issues

```typescript
const startTime = Date.now();
const results = await db.find({});
const duration = Date.now() - startTime;
if (duration > 100) {
  console.warn(`Slow query detected: ${duration}ms`);
}
```

## Next Steps

For more information, refer to:

- [Task State Management](./task-state.md)
- [Filesystem Access](./filesystem-access.md)
- [REST APIs](./rest-apis.md)
