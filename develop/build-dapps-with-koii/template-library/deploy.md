---
title: 🚀 Deploy
description: Deploy both Your Koii-X (Leaderboard) and the Crowdfunding portal
image: ../img/Build_&_Deploy.png
sidebar_label: 🚀 Deploy
---

import Description from "@site/src/components/description";
import ContentLink from "@site/src/components/contentLink";

# 🚀 Deploy

![Banner](../img/Build_&_Deploy.png)

<Description
  text="Deploy both Your Koii-X (Leaderboard) and the Crowdfunding portal"
/>

## Deploy to Arweave

Follow these simple steps to deploy to your Leaderboard or Crowdfunding portal to Arweave:

:::info
**First of all** :bell:&#x20;

Get your wallet.json file ready and put it in your dApp root folder

For the Leaderboard:

📦KoiiX  
┗ 📜wallet.json

For Crowdfunding:

📦Fundraiser-Portal  
┗ 📜wallet.json
:::

1. Install [arkb](https://github.com/textury/arkb) globally on your machine. arkb runs using NodeJS and NPM. You must have both installed on your machine for it to work.

   `npm install -g arkb`

   Or head to [arkb](https://github.com/textury/arkb#how-to-use) installation guide.

2. Finally, Run:

   `yarn deploy`

`yarn deploy` is a shortcut of  
`yarn build && arkb deploy build -w wallet.json --timeout=50000 --debug`

Check if everything looks good, then enter "Y" to confirm upload.  
Give it a second for your dApp to deploy to Arweave and you will receive your transaction ID.

:::caution

- You will need around 0.01 AR to deploy.
- Please make sure your node version is higher than v16.13.1
- Check your node version: `node -v`

:::

### Track attention of your deployment

To track the attention of your deployed DApp:

1. Get the transaction `id`  
   You should get this `id` after the deployment is done. It follows this format `https://arweave.net/<txid>`&#x20;
2. Import the port. Or create your own like [this](https://github.com/koii-network/koii.X/blob/main/src/services/port/index.js).  
   `import port from "services/port";`
3. Submit your transaction `id` to the port to track it.  
   `port.propagatePoRT(id)`

### After Deployment

- Arweave info  
  To check your dApp. Please visit: [**https://arweave.net/** `<txid>`](https://arweave.net/bfBeXkcccukv7DXbllIv1wBU69jZCN9YX3tL3V-TAas)
- What is decentralized storage? Learn more with We Teach Blockchain:

<ContentLink title="What is Decentralized Storage?" description="weteachblockchain.org" link="https://weteachblockchain.org/faq/decentralized-storage" imageLink="https://weteachblockchain.org/assets/img/logoFiles/cropped-android-chrome-256x256-192x192.png" />
<br />
One more option, you can deploy your dApp by using Spheron:

### Deploying your Koii-X template with Spheron

_Spheron makes deploying your dApp directly from GitHub easy._&#x20;

#### How to deploy with Spheron

Check our [**blog**](https://blog.koii.network/Deploying-your-Koii-X-template-with-Spheron/) for a full write-up on how to deploy your Koii-X template using Spheron.&#x20;

:::info
You can [**configure a custom domain**](https://docs.spheron.network/quick-start/configure-domain) to point at your newly deployed dApp right from within Spheron
:::
<br />

<ContentLink title="Spheron Protocol" description="Spheron Protocol - Best decentralized cloud storage in 3 clicks" link="https://spheron.network" imageLink="https://spheron.network/favicon.ico" />

<br/>

[**Koii developers can get whitelisted for access to the new Spheron web app here**](https://docs.google.com/forms/d/e/1FAIpQLSet47mE7L12hBuG_9a0baGvPpsYbEttK_xEgUO4qfg4RSDORw/viewform) **👈**
