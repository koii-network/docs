---
title: ℹ Site Meta Data
description: Customize your own site meta data.
image: ../img/Site_Metadata.png
sidebar_label: ℹ Site Meta Data
---

import Description from "@site/src/components/description"

# ℹ Site Meta Data

![Banner](../img/Site_Metadata.png)

<Description text='Customize your own site meta data' />

The first thing you'll want to do to set up your site is to customize the title and project information.

Edit the [src/config.ts](https://github.com/koii-network/koii-X/blob/main/src/config.ts) file to change the basic details about your app. For example:

```jsx
const config = {
  lang: "en", // language of your website
  locale: "en_US", // locale of your website
  title: "Koii.X — Your Koii DApp", // title of your website
  description: "Create Koii DApp", // description of your website
  canonical: "http://koii-x.vercel.app/", // Your production website link
  twitterHandle: "@KoiiNetwork", // Twitter username
  companyName: "Koii", // The name of your company (or yourself, for artists)
};
```

:::info
A canonical tag (aka "rel canonical") is a way of telling search engines that a specific URL represents the master copy of a page. Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs. Practically speaking, the canonical tag tells search engines which version of a URL you want to appear in search results.
:::
