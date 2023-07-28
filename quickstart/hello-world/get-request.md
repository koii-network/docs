---
title: REST APIs
description: Introduction
image: img/thumbnail.png
sidebar_label: REST APIs
---


To enhance our workflow, we will implement a REST API to retrieve the data stored in NeDB. This can be achieved by creating a GET request. To accomplish this, we navigate to the index.js file and add our GET endpoint at the end of the file, utilizing the exposed app object, similar to how we do it in an Express app.

In the template there is a block of if statement, within which we will define our endpoint.

To retrieve the stored value from our local DB, which was stored with the key `value`, we will utilize the `namespaceWrapper.storeGet()` method. Finally, we will then send this value as a JSON response for the created endpoint.

```js
if (app) {
  //  Write your Express Endpoints here.
  //  For Example
  //  app.post('/accept-cid', async (req, res) => {})

  // Sample API that return your stored value from the local DB

  app.get("/value", async (req, res) => {
    const value = await namespaceWrapper.storeGet("value");
    console.log("value", value);

    res.status(200).json({ value: value });
  });
}
```
