---
title: The Namespace Object
description: Namespacing is the act of wrapping a set of entities, variables, functions, and objects under a single umbrella term.
image: img/thumbnail.png
sidebar_label: The Namespace Object
---

import Tooltip from "@site/src/components/tooltip";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# The Namespace Object

The **Koii Namespace Wrapper** is a utility that helps Koii tasks interact with the network effortlessly. It handles task data, blockchain interactions, file operations, and node communication, so developers can focus on their core logic.

## Core Features

### 1. State Management

Store and retrieve task data reliably:

```typescript
// Store data
await namespaceWrapper.storeSet("key", "value");

// Retrieve data
const value = await namespaceWrapper.storeGet("key");
```

### 2. Blockchain Integration

Securely interact with the Koii Network:

```typescript
// Send a transaction
const tx = await namespaceWrapper.sendTransaction(
  senderAccount,
  receiverAccount,
  amount,
);

// Get network status
const nodes = await namespaceWrapper.getNodes();
```

### 3. File System Operations

Handle files consistently across environments:

```typescript
// Create a directory
await namespaceWrapper.fs("mkdir", "data");

// Write a file
await namespaceWrapper.fs("writeFile", "data/config.json", "{}");

// Read a file
const content = await namespaceWrapper.fs("readFile", "data/config.json");
```

### 4. Task Management

Manage task state and rounds:

```typescript
// Get current round
const round = await namespaceWrapper.getRound();

// Submit task results
await namespaceWrapper.checkSubmissionAndUpdateRound(submission, round);
```

## Benefits of Using the Namespace Wrapper

1. **Simplified Development**

   - No need to handle low-level infrastructure
   - Consistent APIs across different operations
   - Built-in error handling and security

2. **Better Code Organization**

   - Clear separation of concerns
   - Standardized interfaces
   - Modular architecture

3. **Enhanced Security**

   - Secure blockchain interactions
   - Protected file system access
   - Safe state management

4. **Improved Reliability**
   - Automatic error handling
   - Built-in retries for network operations
   - Data persistence

## Common Use Cases

### 1. Data Storage

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    async function saveUserData(userId: string, data: object) {
      try {
        // Store user data
        await namespaceWrapper.storeSet(`user_${userId}`, JSON.stringify(data));
        // Verify storage
        const stored = await namespaceWrapper.storeGet(`user_${userId}`);
        return JSON.parse(stored);
      } catch (error) {
        console.error("Failed to save user data:", error);
        throw error;
      }
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    async function saveUserData(userId, data) { 
      try { 
        // Store user data 
        await namespaceWrapper.storeSet(`user_${userId}`, JSON.stringify(data));
        // Verify storage  
        const stored = await namespaceWrapper.storeGet(`user_${userId}`);  
        return JSON.parse(stored);  
      } catch (error) {  
        console.error("Failed to save user data:", error);  
        throw error;  
      }  
    }  
    ```

  </TabItem>
</Tabs>

### 2. Task Submissions

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    async function submitTaskResult(submission: string) {
      try {
        const round = await namespaceWrapper.getRound();
        await namespaceWrapper.checkSubmissionAndUpdateRound(submission, round);
        console.log("Task result submitted for round:", round);
      } catch (error) {
        console.error("Submission failed:", error);
        throw error;
      }
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    async function submitTaskResult(submission) { 
      try { 
        const round = await namespaceWrapper.getRound(); 
        await namespaceWrapper.checkSubmissionAndUpdateRound(submission, round);
        console.log("Task result submitted for round:", round);  
      } catch (error) {  
        console.error("Submission failed:", error);  
        throw error;  
      }  
    }  
    ```

  </TabItem>
</Tabs>

### 3. File Management

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    async function processDataFile(filename: string) {
      try {
        // Read input file
        const data = await namespaceWrapper.fs("readFile", filename, "utf8");

        // Process data
        const processed = await processData(data);

        // Save results
        await namespaceWrapper.fs("writeFile", `processed_${filename}`, processed);
      } catch (error) {
        console.error("File processing failed:", error);
        throw error;
      }
    }
    ```

  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    async function processDataFile(filename: string) {
       try { 
        // Read input file 
        const data = await namespaceWrapper.fs("readFile", filename, "utf8");
        // Process data  
        const processed = await processData(data);

        // Save results
        await namespaceWrapper.fs("writeFile", `processed_${filename}`, processed);
      } catch (error) {
        console.error("File processing failed:", error);
        throw error;
      }
    }
    ```

  </TabItem>
</Tabs>

## Best Practices

1. **Always Use Error Handling**

```typescript
try {
  await namespaceWrapper.storeSet("key", "value");
} catch (error) {
  console.error("Operation failed:", error);
  // Implement appropriate error recovery
}
```

2. **Validate Input Data**

<Tabs>
  <TabItem value="typescript" label="Typescript">
    ```typescript
    function validateData(data: any) {
      if (!data || typeof data !== "object") {
        throw new Error("Invalid data format");
      }
      // Add more validation as needed
    }
    ```
  </TabItem>  
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    function validateData(data) {
      if (!data || typeof data !== "object") {
        throw new Error("Invalid data format");
      }
      // Add more validation as needed
    }
    ```
  </TabItem>
</Tabs>

3. **Log Important Operations**

```typescript
await namespaceWrapper.logger(
  "log",
  "Task completed successfully",
  "TaskCompletion",
);
```

## Next Steps

To learn more about specific features, check out these guides:

- [Installation Guide](./installing-namespace-wrapper.md) - Get started with the wrapper
- [Namespace Wrapper Methods](./methodName.md) - For interacting with tasks and the blockchain
- [REST APIs](./rest-apis.md) - Build HTTP endpoints
- [Database Operations](./nedb.md) - Learn about data storage
- [File System](./filesystem-access.md) - Handle files and directories
- [Blockchain/Transaction Operations](./wallet-signatures.md) - Work with Blockchain Operations and Transaction Operations
- [Task Management](./task-state.md) - Manage task state
- [Network Operations](./network-operations.md) -
