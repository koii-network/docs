---
title: Migrating from a Node.js App to a Koii Task; Transforming a Web Scraper
image: img/thumbnail.png
sidebar_label: Migrate a Web Scraper
---

# Migrating from a Node.js App to a Koii Task: Transforming a Web Scraper

This guide provides a step-by-step walkthrough of the process to convert a basic Node.js web scraper into a Koii Task. By following these steps, you'll adapt an existing web scraper to operate as a Koii Task, tapping into the benefits of decentralized hosting and incentivization on the Koii network.

# Getting Started

To start the migration process, let's examine the existing Node.js web scraper that retrieves the latest news headlines from the [CoinMarketCap](https://coinmarketcap.com/headlines/news) website.

Below is the code for the web scraper. In the `fetchLatestNews` function, an HTTP GET request is initiated using the `axios` library. The `cheerio` library is utilized to load, parse HTML content, and select elements with specific classes. The `.each` function iterates through selected elements to extract news titles and URLs.

```js
// Dependencies
const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const PORT = 8000;
const app = express();

// URL to Scrape
const URL = "https://coinmarketcap.com/headlines/news";

// Fetch Latest News Headlines
async function fetchLatestNews() {
  try {
    const latestNews = [];
    const response = await axios(URL);
    const html = response.data; // Extract HTML content from response
    const $ = cheerio.load(html); // Load HTML content for parsing

    // Iterate through elements to extract news titles and URLs
    $(`.uikit-row .uikit-col-sm-10 .cmc-link`, html).each(function () {
      const title = $(this).text(); // Extract news title
      const url = $(this).attr("href"); // Extract URL
      latestNews.push({
        title,
        url,
      });
    });
    console.log("LATEST NEWS FETCHED", latestNews);
    return latestNews;
  } catch (error) {
    console.log(error);
  }
}

fetchLatestNews();
```

## Converting to a Koii Task

Now, let's walk through the steps to transform this Node.js web scraper into a Koii Task:

1. **Clone the Task Template Repository:** Begin by cloning the [Task Template](https://github.com/koii-network/task-template) repository. Then, execute `yarn && yarn add cheerio` to install the required dependencies.

2. **Include Helper Functions:** To assist with various operations throughout the tutorial, we'll be using helper functions that facilitate file manipulation and data retrieval from IPFS using Spheron. To set up these functions, follow these steps:

  a. Create a new file named `helpers.js` in the root of the task folder.

  b. Open this [helpers.js file](https://github.com/Giftea/web-scraper/blob/main/koii-task/helpers.js) in your browser.

  c. Copy the entire content of the helpers.js [file](https://github.com/Giftea/web-scraper/blob/main/koii-task/helpers.js).

  d. Paste the copied content into the newly created `helpers.js` file in your task folder.

  e. Update the `helpers.js` file to use Spheron as shown in our **[Spheron Infrastructure](/develop/write-a-koii-task/task-development-guide/scaling-tasks/spheron-infrastructure)** tutorial.

3. **Update Dependency Imports:** Navigate to the `task/submission.js` file, which houses the core logic of your Koii Task. You'll need to update the dependency imports to include the necessary libraries. Specifically, import `dotenv` for configuration, `namespaceWrapper` for interaction with Koii's namespace, `axios` and `cheerio` for web scraping, `fs` for file system operations, and `@spheron/storage` for IPFS interactions. You should have implemented functions to interact with Spheron in your helpers file.

```js title="/task/submission.js"
  require("dotenv").config();
  const { namespaceWrapper } = require("../_koiiNode/koiiNode");
  const axios = require("axios");
  const cheerio = require("cheerio");
  const fs = require("fs");
  const { createFile, deleteFile , makeFileFromObjectWithName, storeFiles} = require("../helpers");
  ```

:::warning   Ensure you have a Spheron Key

   Either set it up in your Koii Node App, see [tutorial](https://docs.koii.network/koii/faq#tutorial-step-by-step-guide-to-getting-a-spheron-storage-key), or if you prefer set it up from CLI using [Spheron API](https://docs.spheron.network/rest-api/#creating-an-access-token). If you already have the key setup in the Koii App you can find it in settings.  Then store it as an environment variable, specifically `SECRET_SPHERON_STORAGE_KEY`, within a `.env` file.

:::

4. **Update Main Logic:** Replace the default `task()` method with the code below. The web scraper logic remains intact, but now it involves uploading the `latestNews` to IPFS using Spheron and sending the resulting CID to K2 (Koii's Settlement Layer) as proof of the task's execution.

For more details on Spheron see our tutorial on **[Spheron Infrastructure](/develop/write-a-koii-task/task-development-guide/scaling-tasks/spheron-infrastructure)**.

```js title="/task/submission.js"
  // Existing code...
  async function task(round) {
    try {
      const URL = "https://coinmarketcap.com/headlines/news"; // URL to scrape
      const latestNews = [];
      let proof_cid; // CID for proof of work
      const response = await axios(URL);
      const html = response.data;
      const $ = cheerio.load(html);

      $(`.uikit-row .uikit-col-sm-10 .cmc-link`, html).each(function () {
        const title = $(this).text();
        const url = $(this).attr("href");
        latestNews.push({
          title,
          url,
        });
      });

      if (latestNews !== null && latestNews.length !== 0) {
        const path = `./Latest_news/proofs.json`; // Path to store file

        if (!fs.existsSync("./Latest_news")) fs.mkdirSync("./Latest_news"); // Create directory if not exists

        // Create file with latest news
        await makeFileFromObjectWithName({blob,'submission.json' }); 

        try {
          const file = await getFilesFromPath(path);
          proof_cid = storeFiles(file) // Upload file to IPFS

          // Delete the file from filesystem once uploaded to IPFS
          await deleteFile(path);

          // Store value on NeDB
          await namespaceWrapper.storeSet("value", JSON.stringify(proof_cid)); // Store CID
          console.log("LATEST NEWS CID", proof_cid);
        } catch(error) {
          console.log("ERROR STORING FILE", error);
        }
      }
      return proof_cid; // Return the proof CID
    } catch (err) {
      console.log("ERROR IN EXECUTING TASK", err);
      return "ERROR IN EXECUTING TASK" + err;
    }
  }
  // Existing code...
  ```

5. **Update Audit Logic:** In the `task/audit.js` file, within the `validateNode()` method, modify the audit condition to accommodate the web scraper's behavior. This involves extracting the stored news data from the CID using the [**`dataFromCid`**](https://github.com/Giftea/web-scraper/blob/main/koii-task/helpers.js#L27) helper function. The validation checks whether the data is not false and has a non-zero length.

```js title="/task/audit.js"
  // Existing imports...
  const { getJSONFromCID } = require('../helpers');

  // Existing code...
      const output = await getJSONFromCID(submission_value); // Extract news from CID

      try {
        if (output !== false && JSON.parse(output).length !==

  0) {
          // For a successful audit, return true (indicating the audited node submission is correct)
          vote = true;
        } else {
          // Existing code...
        }
  // Existing code...
  ```

6. **Validate the Koii Task:** After making these updates, validate the Koii Task by executing `yarn test`. A successful validation will generate output similar to the one shown in the image below:

  ![Test](./img/test.png)

Congratulations! You've successfully transformed a Node.js application into a Koii Task.

For access to the source code of both the original Node.js application and the converted Koii Task, visit the [GitHub repository](https://github.com/Giftea/web-scraper).

By following these steps, you've harnessed the benefits of the Koii network's decentralized hosting and incentivization, making your web scraper more cost-effective and secure.

:::warning Older Project Repos still use web3.storage

The standard for IPFS storage on Koii is Spheron. Some older project examples haven't been updated from web3.storage to Spheron, follow the [Spheron Infrascructure](/develop/write-a-koii-task/task-development-guide/scaling-tasks/spheron-infrastructure) tutorial to update. 

For more information why we moved to using Spheron see our [FAQ](/faq/questions/platform/#q-didnt-koii-use-to-use-web3storage-why-did-we-switch-to-spheron).

:::
