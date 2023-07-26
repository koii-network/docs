---
title: REST APIs
description: Express is the most popular Node web framework, which also serves as an underlying library for other popular Node web frameworks.
image: img/thumbnail.png
sidebar_label: REST APIs
---

import Tooltip from "@site/src/components/tooltip";

# REST APIs

[Express](https://expressjs.com/) is the most popular node web framework, which also serves as an underlying library for other popular node web frameworks. It offers mechanisms for:

- Write handlers for requests using various HTTP verbs at different URL paths/routes.
- Establish standard web application settings, such as the port to use for connection and the location of templates used for response rendering.
- Add additional request processing <Tooltip text="middleware"/> at any point within the request handling pipeline.

The namespace object provides an `app` method for the configuration of an Express app.

```javascript
if (namespace.app) {
  // Express app for configuration
  // Write your Express Endpoints here.
  //For Example
  namespace.express("post", "/accept-cid", async (req, res) => {});
}
```

The `namespace.express()` method represents the namespace wrapper over express app methods. It takes in 3 arguments:

- `method` — This is the HTTP method: `post`, `get`, `put`, or `delete`.
- `path` — This is the endpoint path appended to `namespace`.
- `callback` — Callback function to be called.

Example:

```javascript
namespace.express("post", "/accept-cid", async (req, res) => {
  try {
    const cid = req.body.cid;
    if (cid) {
      console.log("CID =" + cid);
      res.status(200).json({ message: "CID" });
    }
  } catch (err) {
    console.log("CATCH IN ACCEPT CID", err);
  }
});
```

Express endpoints can be defined at the end of your executable file:

```javascript
// import app from init.js file
const { app } = require("./init");
const { namespaceWrapper } = require("./namespaceWrapper");

async function setup() {
  console.log("IN SETUP");
  await namespaceWrapper.defaultTaskSetup();
}

async function execute() {
  {
    /*EXECUTE FUNCTION GOES HERE*/
  }
}

setup().then(execute);

if (namespace.app) {
  namespace.express("post", "/accept-cid", doSomething());
}
```
