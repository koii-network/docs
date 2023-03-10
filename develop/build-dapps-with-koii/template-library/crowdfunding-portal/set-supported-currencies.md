---
description: The currency options for your crowdfunding portal
---

# Currencies & Wallets

To change the current currency, head to [**funding-config.tsx**](https://github.com/koii-network/koii.X/blob/main/src/components/funding/funding-config.tsx) file in your app, you'll notice a `config` with `paymentType` property. Here you can change which currency you are accepting.

```
const config = {
  // ... rest of funding portal config
  paymentType: "ar"
};
export default config;
```

{% hint style="warning" %}
* Currently we only support Ethereum (ETH) and Arweave (AR). KOII and other currencies are coming soon.
* If you change the payment type to ETH, make sure to change your fundAddress to an ETH address as well. &#x20;
{% endhint %}

