---
title: REST API
image: img/thumbnail.png
sidebar_label: REST API
---

## **How to setup rest APIS**

Rest API helps nodes between nodes have specific data requests. It also provides useful tools for frontend developers to collect and gather data. 

To create your rest APIs. Check the routes module `./routes.js`, it contains the layout of what the API needs.


### **Modules explained**



* Module db. It will call `db_model` to use leveldb store or get data from nodes database

    Check [Data Stored - LevelDB](/develop/microservices-and-tasks/linktree-task/data-stored) to get more information.

* Module fs. fs is a Nodejs module system that allows you to write or read the module to your nodes.

    Check [here](https://nodejs.org/api/fs.html) to get more usage.

* Module namespaceWrapper. This module has several useful functions called the Koii task node with a powerful tool to get the specific task status you might need. Check [here](/develop/microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/customizing-the-namespace) to learn more about customize namespaceWrapper.


### Create an endpoint

To create your own endpoint, you can follow the explanation of the example code below.

Example: 

This is the GET endpoint that returns the specific linktree data by publicKey. The GET url is 

```
<nodeUrl>/task/<taskID>/linktree/get/<publicKey>
```

 Nodes will use publicKey to call leveldb and return the linktree data. If publicKey not found, it will return “[ ]”

 ```javascript
router.get('/linktree/get/:publicKey', async (req, res) => {
   const { publicKey } = req.params;
   let linktree = await db.getLinktree(publicKey);
   linktree = linktree || '[]';
   return res.status(200).send(linktree);
   });
 ```

### APIs you might need

In your Koii task, providing more APIs helps each node easily get the useful information. Here is a list of the endpoints you might need:



* GET: /logs. It should return the log of the node that helps you debug your code
* GET: /taskState. It should return your task status, which contains the information such as nodes list, distribution list and stake list.

:::tip
you can use the code below to get the task state
```javascript
await namespaceWrapper.getTaskState();
```
:::

* GET or POST:  /data, /data/list, /data/get/:data

    For all types of information you might need or generated in your task, it should have the API for it. For example, in linktree task we have POST /linktree for processing data, GET linktree/list to return all of the linktree data and GET linktree/get/:publicKey to return specific linktree data. Same to proofs and authlist.



### Testing your API

To test your API, run `yarn start` to start a local server. It won’t run the task. If you have the GET API called `/linktree/list`, your testing url should be `localhost:10000/linktree/list`. You can create a testing module using axios or use Postman to test your API.

In the test folder, we provided a module named “test_endpoint.js” that already has the axios setup. You can use it to test your GET or POST endpoint.


