---
title: NeDB
description: NeDB is a key-value storage library that provides an ordered mapping from string keys to string values.
image: img/thumbnail.png
sidebar_label: NeDB
---

# NeDb

[NeDB](https://www.npmjs.com/package/nedb) is a key-value storage library that provides an ordered mapping from string keys to string values. Embedded persistent or in-memory database for Node.js, nw.js, Electron and browsers, 100% JavaScript, no binary dependency.

The `namespaceWrapper` class provides some methods that use NeDB's `insert(key,value)` and `findOne(key)` basic operations for storing and retrieving data respectively.

## Setup explained

This code is setting up a wrapper class for a NeDB database using the nedb-promises library. The nedb-promises library is a version of NeDB with Promises support, which makes it easier to work with asynchronous operations.

```javascript
  db;

  constructor() {
    if(taskNodeAdministered){
      this.getTaskLevelDBPath().then((path)=>{
        this.db = Datastore.create(path);
      }).catch((err)=>{
        console.error(err)
        this.db = Datastore.create(`../namespace/${TASK_ID}/KOIILevelDB.db`);
      })
    }else{
      this.db = Datastore.create('./localKOIIDB.db');
    }
  }
```

It will connect to the database in the `_koiiNode` folder if the task is administered by a task node, otherwise it will connect to a local database.

## Built-in methods

The `_koiiNode` directory contains the `namespaceWrapper` object, which offers built-in methods to support NeDB operations in your tasks. Below are the explanations and usage examples of the provided methods:

### getDB

The `getDB` method is used to obtain the instance of your database object. This instance can be utilized for more customized database operations tailored to your specific needs.
Usage example:

```js
const { namespaceWrapper } = require("./_koiiNode/koiiNode");

const db = await namespaceWrapper.getDB();
```

### storeSet

This is the namespace wrapper call for NeDB `insert` method

```javascript
async storeGet(key) {
 try {
      console.log({ [key]: value, key });
      await this.db.insert({ [key]: value, key });
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
```

Usage example:

```javascript
await namespaceWrapper.storeSet("round", "-1"); // store data
const round_task = await namespaceWrapper.storeGet("round"); // retrieve data with key
console.log("ROUND OF TASK SET TO", round_task);
```

:::info
You can prevent duplicate entries in NeDB by creating a unique index on the field(s) that should be unique. Here's a simple example:

```javascript
const db = await namespaceWrapper.getDB();

// Ensure index
db.ensureIndex({ fieldName: "uniqueField", unique: true }, function (err) {
  if (err) console.log(err); // If there are duplicate values when you apply the unique index, you'll get an error.
});
```

:::

### storeGet

This is the namespace wrapper call for levelDB `findOne` method

```javascript
async storeGet(key): Promise<string> {
   try {
      const resp = await this.db.findOne({ key: key });
      if (resp) {
        return resp[key];
      } else {
        return null;
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  }
```

Usage example:

```javascript
async function execute() {
  console.log("ROUND", await namespaceWrapper.storeGet("round"));
}
```

## Setup more functions in your task

You can add more functions to your task by adding them to the `namespaceWrapper` class or create your `db-model` file, just make sure it's calling the db model from `namespaceWrapper`. For example, if you want to get a list of objects, you can add a function like this:

```javascript
const { namespaceWrapper } = require("./_koiiNode/koiiNode");

const db = await namespaceWrapper.getDB();
  // return items by name
  async getList() {
  const itemList = await db.find({});
  return itemList.map(value => value.item);
  }
```

Exaample:

```javascript
const datadb = require("./db-model");

let testlist = await datadb.getList();
console.log("test list is ", testlist);
```
