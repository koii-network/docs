---
title: Koii IPFS Storage SDK
description: Koii Storage for Tasks
image: img/thumbnail.png
sidebar_label: Koii IPFS Storage
---


## Introduction

Koii Storage Task SDK provides a convenient interface for interacting with Koii's decentralized storage. This guide covers the basic usage of the SDK, including uploading and retrieving files using CIDs (Content Identifiers).

## Installation

Ensure you have the required dependencies installed. You can add the SDK to your project by following the installation instructions provided by Koii.

```sh
npm install @_koii/storage-task-sdk
```

## Usage

### Uploading a File

To upload a file to Koii storage, you need to create a KoiiStorageClient instance and provide the staking wallet information.

There are two ways to do this:

A. Using the NamespaceWrapper inside of a Koii Task

```js
const fs = require('fs');
const { Keypair } = require('@_koii/web3.js');
const { KoiiStorageClient } = require('@_koii/storage-task-sdk');

const client = new KoiiStorageClient();
const userStaking = namespaceWrapper.getSubmitterAccount()

(async () => {
  try {
    const fileUploadResponse = await client.uploadFile(filePath, userStaking);
    const cid_returned = fileUploadResponse.cid;
    console.log("File uploaded successfully. CID:", cid_returned);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
})();
```

B. Using a local key file (will only work in local testing)

```js
const fs = require('fs');
const { Keypair } = require('@_koii/web3.js');
const { KoiiStorageClient } = require('@_koii/storage-task-sdk');

const client = new KoiiStorageClient();
const wallet = fs.readFileSync("/path/to/your/stakingWallet.json", "utf-8");
const userStaking = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(wallet)));
const filePath = "path/to/your/file"; // replace with your actual file path

(async () => {
  try {
    const fileUploadResponse = await client.uploadFile(filePath, userStaking);
    const cid_returned = fileUploadResponse.cid;
    console.log("File uploaded successfully. CID:", cid_returned);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
})();
```

### Retrieving a File

Once you have the CID of a file, you can retrieve it using the KoiiStorageClient. The following example demonstrates how to get a file, convert it to text, and parse it as JSON.

```js
const { KoiiStorageClient } = require('@_koii/storage-task-sdk');

const client = new KoiiStorageClient();

async function getFileData(cid, fileName) {
  try {
    const blob = await client.getFile(cid, fileName);
    const text = await blob.text(); // Convert Blob to text
    const data = JSON.parse(text); // Parse text to JSON
    return data;
  } catch (error) {
    console.error("Error retrieving file:", error);
  }
}

// Usage example
const cid = "your-cid-here"; // replace with your actual CID
const fileName = "file.log"; // replace with your actual file name

getFileData(cid, fileName).then(data => {
  console.log("File data:", data);
});
```

### Accessing Files via IPFS Gateway

You can access the uploaded files directly through the IPFS gateway provided by Koii using the following URL format:

```sh
https://ipfs-gateway.koii.live/ipfs/<cid>
```
