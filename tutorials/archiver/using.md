---
title: Using the Crawler
image: img/thumbnail.png
sidebar_label: Using the Crawler
---

# Using The Crawler

To modify the crawler query, or change how it uses the local database, check-out `twitter-task.js`.

The `query` object manages the key parts of the crawler.

```javascript
let searchTerm = "#koii";
let query = {
    limit: 100, // total number of records to return
    searchTerm: searchTerm, // the keyword to look for
    query: `https://twitter.com/search?q=${ searchTerm }&src=typed_query`, // the query string (including said keyword)
    depth: 3, // the depth of recursive layers to follow
    recursive: true, // descend recursively?
    updateRound: () => {} // a function that returns the current round
    round: 1 // the current round
}
```

## Interacting with Task Runners (config-task.yaml)

#### Environment Variables:

Your task runners will populate this via Koii Node. We need:

- Username
- Password
- Web3 storage token

A Web3 Storage Token is required from the task-runner as it is used to upload data to InterPlanetary File System protocol.

#### Task Id:

Do not provide a task_id for the first deployment, as it would be assigned automatically when you create your task.

#### Secret Web3 Storage Key:

Be sure to provide a secret_web3_storage_key , as we are using the IPFS to deploy our application; we need a storage space for it.

#### Other Variables:

Don't forget to edit the task_name, task_description, total_bounty_amount and bounty_amount_per_round before deployment, as these would be directly visible by potential task runners in Koii Node.

## Creating a Webpack & Deployment To IPFS
Before deploying our task, we must first convert it to webpack format with by typing yarn webpack in our terminal.

We can use use create-task-cli package to deploy our webpacked application to IPFS.type npx @\_koii/create-task-cli@latest

Voila! Now you have your crawler deployed on Koii. Be sure to save the returned task id, as you will need it in Koii Node.

Within Koii Node, head over to My Node. Click “Advanced”, (at the bottom of the interface). Copy your Task Id and start running the task! Do not forget that in order to have the audit step working, you need at least two people. So invite a friend of yours to test your application in deployment.
