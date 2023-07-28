---
title: Set Up Database and API
description: This part incluede the database and API function of the task.
image: img/thumbnail.png
sidebar_label: Set Up Database and API
---

## Set Up Database

It use `nedb` to set up database. `nedb` is a lightweight database that can be used in Node.js. It is a file-based database. It is easy to use and does not require a separate database server.

In `db.js` file, it will call `namespaceWrapper.getDb();` before using db, which will initialize the database. It will create a database file `localKOIIDB.db` in the root folder. If the task is running on the desktop node, it will create a database file `KOIIDB.db`.

In this task, it provide three main db functions:

- `setSpecial` for set the data to database.
- `getSpecial` for get the data from database.
- `getSpecialList` for get the data list from database.

```js
const setSpecial = async (cid, round) => {
  const db = await namespaceWrapper.getDb();
  try {
    let existingRound = await db.findOne({ round });
    if (!existingRound) {
      const date = new Date().toISOString().slice(0, 10);
      await db.insert({ date, cid, round });
      console.log("new steam special set");
      return true;
    } else {
      console.log("steam special already set");
      return false;
    }
  } catch (err) {
    return undefined;
  }
};
```

The funcitons will be used in `coreLogic.js` file. For example in `submit` function, it will use `getSpecial` to get the data that stored in `main` function.

## Set Up API

API set up in `index.js` file. It use `express` to set up API. `express` is a web framework for Node.js. It is used to build web applications and APIs. It is easy to use and has a large community.

```js
 app.get('/getSpecialList', async (req, res) => {
  try {
    const specialList = await db.getSpecialList();
    res.send(specialList);
  } catch (err) {
    console.log('ERROR IN GET Special LIST', err);
    res.send('ERROR IN GET Special LIST');
  }
});
```
:::caution
Please make sure use try catch to handle the error.
:::
