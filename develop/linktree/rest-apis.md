---
title: REST APIs
image: img/thumbnail.png
sidebar_label: REST APIs
---

Creating REST APIs is a crucial part of any Koii task. For the Linktree task, we have several APIs to handle incoming requests, process data, and return appropriate responses to the client.

These APIs are contained in the `router.js` module.

Let’s look at the implementation of how to create an API:

To create an API, we first need to create a route using the [Express](https://www.npmjs.com/package/express) Router module. For example, to create a `GET` endpoint that returns specific Linktree data by `publicKey`, we can use the following code:

```js
router.get("/linktree/get/:publicKey", async (req, res) => {
  const { publicKey } = req.params;
  let linktree = await db.getLinktree(publicKey);
  linktree = linktree || "[]";
  return res.status(200).send(linktree);
});
```

In the above example, nodes will use `publicKey` to call levelDB and return the Linktree data. If publicKey is not found, it will return an empty array.

Similarly, the `router.post('/linktree')` route registers the Linktree by writing it to a file and storing it in the database along with proof that includes a public key and a signature.

Other APIs include `GET /logs`, which returns the log of the node to help debug the code, and `GET /taskState`, which returns the task status containing information such as nodes list, distribution list, and stake list.

For all types of information you might need or generate in your task, it's essential to have an API for it.

## How to test APIs

To test your APIs, run:

```js
npm start
```

This will start a local server but won't run the task. For example, If you have a GET API called `/linktree/list`, your URL should be `localhost:10000/linktree/list`. You can create a testing module using Axios or use Postman to test your API.

In the [Linktree task’s test folder](https://github.com/koii-network/linktree-app/tree/main/task-template-linktree/test), we have provided a module named `test_endpoint.js` that already has the Axios setup. You can use it to test your `GET` or `POST` endpoint.
