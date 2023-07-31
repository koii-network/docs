---
title: Node Default API Endpoints
description: Every node will have the following endpoints available by default at the defined service node address.
image: img/thumbnail.png
sidebar_label: Node Default API Endpoints
---

# Node Default API Endpoints

Every node will have the following endpoints available by default at the defined service node address:

```js
app.get("/", heartbeat);
app.get("/nodes/:taskId", nodes);
app.post("/register-node/:taskId", registerNode);
app.get("/get-all-running-tasks", getAllRunningTasks);
```

To only test your endpoint locally, you can use the following command:

```bash
npm run start
```

or

```bash
npm start
```

:::note
`registerNode` is used by node discovery to automatically register your node to other nodes and vice versa.
:::
