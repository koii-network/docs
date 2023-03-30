---
title: 🚚 Template Library
description: Get started fast with easy to use JavaScript templates.
image: img/Template_Library.png
sidebar_label: 🚚 Template Library
---

import Description from "@site/src/components/description";

# 🚚 Template Library

![Banner](../img/Template_Library.png)

<Description
  text="Get started fast with easy to use JavaScript templates"
/>

The Koii-X Library currently has two main templates:

1. **Content-based Leaderboard App**  
   Almost every social media and forum app on the web runs with the same structure, a leaderboard as a home page, user profile pages, and detail pages for full screen views of content. Koii-X gives you the same tools out of the box, built 100% on-chain with NFTs and Koii's proprietary storage-based DIDs.

2. **Crowdfunding Portal**  
   Bootstrap a new project with a clean and fully decentralized portal that tracks funds received and streamlines wallet interactions.

While both of these templates contain a number of components that can be copied entirely or borrowed in parts, we recommend starting by building from one of them and customizing from there.&#x20;

### Selecting a Template

We're working on expanding the template library and will provide multiple CLI commands with configuration options for each template in the future. In the meantime, you can run the following command to generate an app with both the Leaderboard and Crowdfunding templates contained within.

```
npx create-koii-app
```

### **Deploying to Decentralized Storage**

All templates are optimized out of the box for deployment to a storage network. Most notably, this means that they are:

- Built to single files - just run `yarn build` to output a single build file in `/pkg/index.html`
- Optimized in-line JavaScript and CSS reduce risks of broken deployments if links die over time
- Light by design - we have minimized the use of images and supporting libraries to keep these builds as small as possible to reduce your storage fees
