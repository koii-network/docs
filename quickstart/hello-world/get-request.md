---
title: REST APIs
description: Introduction
image: img/thumbnail.png
sidebar_label: REST APIs
---

import Tooltip from "@site/src/components/tooltip";

To enhance our workflow, we will implement a REST API for retrieving the data stored in NeDB. We can achieve this by creating a GET request. To accomplish this, we will navigate to the index.js file and add our GET endpoint using the exposed app object, similar to how we do it in an <Tooltip text="Express"/> app.

In the template there is a block of if statement, within which we will define our endpoint.

To retrieve the stored value from our local DB, which was stored with the key `value`, we will use the `namespaceWrapper.storeGet()` method. Finally, we will then send this value as a JSON response for the created endpoint.

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
