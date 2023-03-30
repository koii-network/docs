---
title: Finnie Wallet
description: Integrate your dApp with Finnie wallet
image: ./img/Finnie_Wallet_(1).png
sidebar_label: Finnie Wallet
---

import Description from "@site/src/components/description";

# Finnie Wallet

![Banner](<./img/Finnie_Wallet_(1).png>)

<Description
  text="Integrate your dApp with Finnie wallet"
/>

### useFinnie

To integrate with Finnie use the [**`useFinnie`**](https://github.com/koii-network/koii.X/blob/main/src/components/finnie/index.tsx) hook and import it is as easy as:

```jsx
import { useFinnie } from "components/finnie";
```

`useFinnie` hook exports many variables and helpers to integrate with Finnie.

```jsx
const {
  state: {
    connectFinnie,
    disconnectFinnie,
    walletAddress,
    walletBalance,
    isFinnieConnected,
    isLoading,
    isError,
  },
} = useFinnie();
```

`connectFinnie` a function to call to try to connect to Finnie. e.g:

```jsx
<button onClick={connectFinnie}>Connect to finnie</button>
```

When `connectFinnie` succeed you'll have:

1. Your Finnie address in `walletAddress`
2. Both your KOII and Arweave balance in `walletBalance`
3. isFinnieConnected set to `true`

When `connectFinnie` fail you'll have:

1. `isError` set to `false`
2. `isFinnieConnected` set to `false`

When you're still in the process of connecting to Finnie you'll have `isLoading` set to `true`

e.g:

```jsx
import { useFinnie } from "components/finnie";

function Component() {
  const {
    state: {
      connectFinnie,
      isLoading,
      isError,
      walletAddress,
      isFinnieConnected,
    },
  } = useFinnie();

  return (
    <>
      <button onClick={connectFinnie}>
        {isLoading
          ? "Connecting..."
          : isFinnieConnected
          ? "Connected ✓"
          : "Connect to finnie"}
      </button>

      {isFinnieConnected && (
        <p>
          Connected. Your wallet address is: <code>{walletAddress}</code>
        </p>
      )}

      {isError && <p>An error occurred while connecting to finnie.</p>}
    </>
  );
}
```

Calling `disconnectFinnie` will disconnect the connection to Finnie.&#x20;

### Finnie Wallet API

When you're connected to Finnie, you can interact with any Finnie exposed API. e.g: The [**`sendKoiiTip`**](https://github.com/koii-network/koii.X/blob/main/src/api/finnie.ts#L45) function inside [**`api/finnie.ts`**](https://github.com/koii-network/koii.X/blob/main/src/api/finnie.ts) used to send KOII from your wallet to another address.

```jsx
export const sendKoiiTip = async (artistAddress: string, amount: number) => {
  const extension = window.koiiWallet;
  return await extension.sendKoii(artistAddress, amount);
};
```
