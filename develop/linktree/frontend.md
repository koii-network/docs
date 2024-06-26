---
title: Connect the Frontend
image: img/thumbnail.png
sidebar_label: Connect the Frontend
---

:::warning
This project was developed on the legacy testnet. If you have any questions about this project, please don't hesitate to contact us on Discord.
:::

Connecting the frontend and backend of a project is an essential step in creating a fully functional web application by enabling data communication and interaction between the user interface and the server.

In this section, you'll learn how to connect the frontend of your project to the Linktree task. Connecting a frontend to a deployed Koii task is no different from connecting
to a regular backend; it can be easily done by following these steps:

### 1. Implement API Functions

API functions serve the purpose of sending HTTP requests and interacting with the backend's endpoints (e.g., GET, POST, PUT, DELETE). Begin by creating API functions for the various HTTP requests.

Here is an example illustrating how the **POST** request method is implemented in the [Linktree project](https://github.com/koii-network/linktree-app/blob/main/src/api.js#L143):

```js
async function setLinktree(data, publicKey, nodeList, username) {
    let result;
    while (!result && nodeList[nodeListIndex]) {
      try {
        // Send a POST request using axios to the specified endpoint
        const response = await axios.post(
          `${nodeList[nodeListIndex]}/task/${TASK_ADDRESS}/linktree`, {payload,}
        );
        result = response.data;

 // ... check the repository for the full code
```

:::note
The backend endpoint is `${node}/task/${TASK_ADDRESS}/linktree/`

- **`node`** refers to the first node that sends a successful response.
- **`TASK_ADDRESS`** is the address to which the task was deployed.

In the above code block, we iterate through the `nodeList` until a successful response is received. If you use a `console.log` for the backend endpoint, you may retrieve a link similar to this: "**https://tasknet.koii.live/task/A2J2vyYqzuXBCftRMfwx5qcq5JGE9632FzceTvC2suZ9/linktree/**"
:::

### 2. Integrate User Interface

Integrate the API function into the user interface as shown below:

```js
import { setLinktree } from "../api";

const CreateLinktree = () => {
 // ... check the repository for the full code

 const res = await setLinktree(
      payload,
      publicKey,
      nodeList,
      username
    );

// Component JSX and logic
```

By following these steps, your frontend will seamlessly interact with the backend, enabling a smooth flow of data and enhancing the overall functionality of your web application.

Please refer to the [repository](https://github.com/koii-network/linktree-app) for comprehensive code examples and further details.
