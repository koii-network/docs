---
title: Main function
description: This part incluede the main function of the task.
image: img/thumbnail.png
sidebar_label: Main function
---

# Main function

The main function is the entry point of the task. It is the function that will be called when the task is executed. The main function is where the logic of the task is written.

The main function is defined in the `special_main.js` file. The file is located in the root folder. The main function is exported from the file and imported into the `submission.js` file.

In this task, it used jsdom and axios to scrape the specials. The data is then stored on the IPFS. The main function is where the scraping and storing logic is written.

## Use puppeteer to scrape data from Steam

```js
  const gameSales = await axios.get('https://store.steampowered.com/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
    },
    timeout: 10000,
    })
    .then(response => {
      const dom = new JSDOM(response.data);
      const salesList = dom.window.document.querySelectorAll('#tab_specials_content .tab_item');
      /*
      * Scrape data from Steam
      */
      return {
          name,
          originalPrice,
          finalPrice,
          topTags,
        };
      });

      // console.log(gameSales);
      return gameSales;
```

## Store data on IPFS

To store data on IPFS, we need to use the [Spheron](https://docs.spheron.network/sdk/storage-v2/) library. It also requires a secret key to access the Spheron API. The secret key is stored in the `.env` file. To get your secret key, either set it up in your Koii Node App, see [tutorial](https://docs.koii.network/koii/faq#tutorial-step-by-step-guide-to-getting-a-spheron-storage-key), or if you prefer set it up from CLI using [Spheron API](https://docs.spheron.network/rest-api/#creating-an-access-token). If you already have the key setup in the Koii App you can find it in settings. 

# Tutorial being updated to use Spheron, in meantime see [Spheron SDK Docs](https://docs.spheron.network/sdk/storage-v2/)

<!-- 
```js
const { Web3Storage, File } = require("web3.storage");
const storageClient = new Web3Storage({
  token: process.env.SECRET_WEB3_STORAGE_KEY,
});

const gameSalesJson = JSON.stringify(gameSales);
const file = new File([gameSalesJson], filename, {
  type: "application/json",
});

const cid = await storageClient.put([file]);
```
-->

:::info
`cid` is the content identifier of the file. It is the hash of the file. It is used to retrieve the file from the IPFS.
::: 
