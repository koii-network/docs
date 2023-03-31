---
title: Services
description: Shared services such as Axios, Koii PoRT & utility functions. You can find more useful functions in utils/index.ts
image: img/thumbnail.png
sidebar_label: Services
---

import Description from "@site/src/components/description";

# Services

<Description
  text="Shared services such as Axios, Koii PoRT & utility functions. You can find
  more useful functions in utils/index.ts"
/>

### General Structure

```
📦services
 ┣ 📂axios
 ┃ ┗ 📜index.ts
 ┣ 📂port
 ┃ ┗ 📜index.js
 ┗ 📂utils
 ┃ ┗ 📜index.ts

```

### Axios

The Axios service is responsible for creating the default `axios` config that's been used for every single API call. For example:

```jsx
import axios from "axios";
const customAxios = axios.create({
  // The base URL of your api endpoint.
  baseURL: process.env.REACT_APP_BUNDLER_API_URL,
});

// Global axios headers used in every single api call.
customAxios.defaults.headers.common["Content-Type"] = "application/json";
customAxios.defaults.headers.post["Content-Type"] = "application/json";
customAxios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default customAxios;
```

### PoRT

Implementation of the [**Koii-Port**](https://github.com/koii-network/koi-PoRT)

```jsx
import { PoRT } from "@_koi/port";

let port = new PoRT({
  trustedNodeAddress: process.env.REACT_APP_NODE_URL,
  node: 5,
});

export default port;
```

and this is to be used when you want to trigger an attention to the PoRT using `propagatePoRT`

```jsx
import port from "services/port";
const nftId = -1BzhktwhTdIKDeQNOM5jW6LALHUSpoOMFUJAd_s1KY; // Random nft id
port.propagatePoRT(nftId);
```

### Utils

Collection of different utility functions that you can add to. e.g [**services/utils**](https://github.com/koii-network/koii.X/blob/main/src/services/utils/index.ts) &#x20;
