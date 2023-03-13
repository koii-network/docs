import Description from "@site/src/components/description";

# Accepting Payments

![Banner](./img/Accepting%20Payments%20(1).png)

<Description
  text="Configuring & Connecting Wallets and Managing Identities"
/>

The best way to see the payments hooks in action is to try out the Crowdfunding Portal Template, which provides examples of all major wallet hooks. If you're not accustomed to crypto, it can be a bit overwhelming to configure and manage a set of wallets, but we've got you covered. We'll start small and help you expand as you need to.&#x20;

### Sending ETH through MetaMask

The funding process used in the Crowdfunding portal is to send `eth` from the user's address to the funding address. [**Full example here.**](https://github.com/koii-network/crowdfunding/blob/master/src/components/modals/FundingModal.tsx)

First import the `sendEth` function inside wallet.ts

```jsx
import { sendEth } from "api/funding";
```

Call it whenever you need to send the `eth`

```jsx
const doSendToken = async () => {
    try {
      await sendEth({
        from: fundModal.ethAddress, User's metamask address
        to: config.fundAddress,
        amount: fundModal.tokenAmount // Fund amount in Wei
      }).then(() => {
        // Success.
      });
    } catch (error) {
      // Handle your error.
    }
  };
```

:::info
To get values from your funding-config.ts use the [**useFunding**](../template-library/crowdfunding-portal/customization#usefunding) hook.
:::

### Sending KOII using Finnie

Another example is using Finnie to send KOII [**from your wallet to another address**](./finnie-wallet#finnie-wallet-api).
