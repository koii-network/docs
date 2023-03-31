---
title: Ethereum (Metamask)
description: Integrate with MetaMask wallet
image: img/thumbnail.png
sidebar_label: Ethereum (Metamask)
---

import Description from "@site/src/components/description";

# Ethereum (Metamask)

![Banner](./img/Integrating_Metamask.png)

<Description
  text="Integrate with MetaMask wallet"
/>

To connect to MetaMask Wallet, import [**`connectToMetaMask`**](https://github.com/koii-network/crowdfunding/blob/master/src/api/wallet.ts)

```jsx
import { connectToMetaMask } from "api/wallet";
```

Call it whenever you want to trigger a MetaMask connection.

```jsx
const doConnectToMetaMask = async () => {
  await connectToMetaMask()
    .then(async (res) => {
      const address = res?.ethAddress;
      // your address is ready inside resEthAddress
    })
    .catch((err) => {
      // An error occurred while connecting to metamask
    });
};
```

Connect the function to a button.

```jsx
<button onClick={doConnectToMetaMask}>Connect to Finnie</button>
```

And that's it. Your connection is ready and you have the address.
