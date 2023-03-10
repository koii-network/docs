---
description: Integrate with MetaMask wallet
cover: ../../.gitbook/assets/Integrating Metamask.png
coverY: 0
---

# Ethereum (Metamask)

To connect to MetaMask Wallet, import [**`connectToMetaMask`**](https://github.com/koii-network/crowdfunding/blob/master/src/api/wallet.ts)**``**

```
import { connectToMetaMask } from "api/wallet";
```

Call it whenever you want to trigger a MetaMask connection.

```
const doConnectToMetaMask = async () => {
    await connectToMetaMask()
      .then(async res => {
        const address = res?.ethAddress;
        // your address is ready inside resEthAddress
      })
      .catch(err => {
        // An error occurred while connecting to metamask
      });
  };
```

Connect the function to a button.

```
<button onClick={doConnectToMetaMask}>Connect to Finnie</button>
```

And that's it. Your connection is ready and you have the address.
