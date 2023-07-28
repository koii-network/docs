---
title: Main function
description: This part incluede the main function of the task.
image: img/thumbnail.png
sidebar_label: Main function
---

# Main function

The main function is the entry point of the task. It is the function that will be called when the task is executed. The main function is where the logic of the task is written.

The main function is defined in the `special_main.js` file. The file is located in the root folder. The main function is exported from the file and imported in the `submission.js` file.

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

To store data on IPFS, we need to use the [Web3.Storage](https://web3.storage/) client library. It also requires a secret key to access the Web3.Storage API. The secret key is stored in the `.env` file. To get your secret key, check the tutorial <a href="https://blog.koii.network/Introduce-web3-storage/" target="_blank">here</a>

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

:::info
`cid` is the content identifier of the file. It is the hash of the file. It is used to retrieve the file from the IPFS.
:::
