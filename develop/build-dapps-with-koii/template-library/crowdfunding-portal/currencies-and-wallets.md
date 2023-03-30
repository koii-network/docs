---
title: Currencies & Wallets
description: The currency options for your crowdfunding portal.
image: img/thumbnail.png
sidebar_label: Currencies & Wallets
---

import Description from "@site/src/components/description";

# Currencies & Wallets

<Description
  text="The currency options for your crowdfunding portal"
/>

To change the current currency, head to [**funding-config.tsx**](https://github.com/koii-network/koii.X/blob/main/src/components/funding/funding-config.tsx) file in your app, you'll notice a `config` object with a `paymentType` property. Here you can change which currency you are accepting.

```jsx
const config = {
  // ... rest of funding portal config
  paymentType: "ar",
};
export default config;
```

:::caution

- Currently, we only support Ethereum (ETH) and Arweave (AR). KOII and other currencies are coming soon.
- If you change the payment type to ETH, make sure to change your `fundAddress` to an ETH address as well. &#x20;
  :::
