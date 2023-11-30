---
title: Sphreon Infrastructure
description: Sphreon Infrastructure
image: img/thumbnail.png
sidebar_label: Sphreon Infrastructure
---

## Introduction

In this tutorial, we will learn how to use IPFS via Spheron Network in our task. While Spheron does support various other protocols, the **IPFS** protocol is mandatory for retrieving Content Identifiers (CIDs).

:::tip Example Task
If you prefer learning by example, check out our [X-Scraper Repo](https://github.com/koii-network/X-scraper). It utilizes Spheron to store data in IPFS.
:::

## Environment Setup

#### YAML Configuration

Let's start from the beginning. How will your task-runners use Spheron on their end? Koii provides a one-click solution for that problem with our parthership with Spheron.

All you need to do is to add the following lines to your `config-task.yml` file.

```yaml
- type: TASK_VARIABLE
value: "SECRET_SPHERON_TOKEN";
description: "used to store the data";
retrievalInfo: "https://faucet-api.koii.network/api/get-spheron-storage-key;GET;SYSTEM_WALLET_PUBLIC_KEY";
```

For testing purposes, Koii Network will automaticially will provide a Spheron token for your task-runners. This way, you can use Spheron in your task without worrying about setting up the infrastructure.

By utilizing this, your task-runners will be able to use the get key button before running your task. Clicking it will internally call the URL provided by the task creator. For production-tier tasks, you will need to provide your own server for this process.

Available retrievalInfo options are:
`URL;GET|POST;SYSTEM_WALLET_PUBLIC_KEY|STAKING_WALLET_PUBLIC_KEY`

#### Required Package

With that out of the way, we can now focus on the code implementation.

First, we need the `@spheron/storage` package.

```bash
npm install @spheron/storage
```

### Task Implementation

Imagine that we have a task that scrapes data from a public website and stores it in a JSON object. Our node has already followed the required steps for web scrapping, and now we want to store this JSON file in IPFS via Spheron, and utilize the CID as a part of our submission.

:::info Important Note
Currently, Spheron does not support direct JSON uploads. Only files are supported. This means that we will need to convert our JSON data into a file before uploading it to Spheron.
:::

In Node.js environments, the absence of the File module (which is a browser-specific API) means that we need to use the `fs` module create a file from our JSON data.

Once written, the file's path is then provided to the client.upload() method in Spheron, along with the specified protocol and file name. This method returns the unique CID for the uploaded file.

Here is a function that facilitates this process:

```javascript
/**
 * Converts a given data object to a JSON file and saves it to the server.
 *
 * @param {Object} data - The data object to be converted into a JSON file.
 * @param {string} [filename='data.json'] - The name of the file to be created. Defaults to 'data.json'.
 * @returns {Promise<string>} A promise that resolves with the filename indicating where the data has been written.
 *
 * @example
 * const data = { key: 'value' };
 * convertToJsonFileAsync(data, 'output.json').then(filename => {
 *   console.log(`File saved as ${filename}`);
 * });
 */

async function convertToJsonFileAsync(data, filename = "data.json") {
  const jsonString = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, jsonString, "utf8");
  return filename;
}
module.exports = {
  convertToJsonFileAsync,
};
async function storeFilesOnSpheron(files) {
  const client = createSpheronClient();
  const CIDs = [];
  for (const file of files) {
    const spheronData = await client.upload(file.path, {
      protocol: ProtocolEnum.IPFS,
      name: file.name,
    });
    CIDs.push(spheronData.cid);
  }
  console.log("Stored files with CID:", cid);
  return CIDs;
}
module.exports = {
  storeFilesOnSpheron,
};
```

Now you have access to the CID of your file. Which is the key to obtain your JSON file from anywhere else. You can use this CID as a part of your submission, which will allow you to retrieve the data back.

### Data Retrieval from IPFS

In order to retrieve the data, we need to know the CID of the file. In our case, we will use the CID as a part of our submission. This way, we can retrieve the data from the CID that is stored in the blockchain.

Here is an example code snippet that retrieves the data from a CID.

```javascript
const getJSONFromCID = async (cid, fileName, maxRetries = 3, retryDelay = 3000) => {
  let url = `https://${cid}.ipfs.dweb.link/${fileName}`;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(`Attempt ${attempt}: Received status ${response.status}`);
      }
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt < maxRetries) {
        console.log(`Waiting for ${retryDelay / 1000} seconds before retrying...`);
        await sleep(retryDelay);
      } else {
        return false; // Rethrow the last error
      }
    }
  }
```

### Final Notes

On order task templates, you might encounter web3storage as an IPFS storage option. Our tasks are compatible with that option, but as we encourage using Spheron as otherwise, you would need your users to provide a storage key.
