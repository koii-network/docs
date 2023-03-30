---
title: LevelDB
description: LevelDB is a key-value storage library that provides an ordered mapping from string keys to string values.
image: static/img/thumbnail.png
sidebar_label: LevelDB
---

# LevelDB

[LevelDB](https://github.com/google/leveldb) is a key-value storage library that provides an ordered mapping from string keys to string values. It provides `Put`, `Delete`, and `Get` methods to modify/query the database.

The `namespaceWrapper` class provides some methods that utilize levelDB's `Put(key,value) and` `Get(key)` basic operations for storing and retrieving data respectively.

## storeSet

This is the Namespace wrapper call for levelDB `Put` method

```typescript
async storeSet(key, value): Promise<void> {
  return (await genericHandler('storeSet', key, value));
}
```

Example:

```javascript
await namespaceWrapper.storeSet("round", "-1"); // store data
const round_task = await namespaceWrapper.storeGet("round"); // retrieve data with key
console.log("ROUND OF TASK SET TO", round_task);
```

## storeGet

This is the Namespace wrapper call for levelDB `Get` method

```typescript
async storeGet(key): Promise<string> {
  return (await genericHandler('storeGet', key));
}
```

Example:

```javascript
async function execute() {
  console.log("ROUND", await namespaceWrapper.storeGet("round"));
}
```
