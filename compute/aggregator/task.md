---
title: Creating the Task
image: img/thumbnail.png
sidebar_label: Creating the Task
---

## Introduction

Lets learn how to create a **Extractor Task**. This powerful tool allows you to gather data based on specific queries, populate a database, and validate the data.

---

## Query Configuration

### Basic Configuration

The `query` object is your key to customizing the data you receive from the source website. Here's a basic example:

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

#### Parameters Explained

- `limit`: Total number of records to return.
- `searchTerm`: The keyword to look for.
- `query`: The complete query URL, including the search term.
- `depth`: The depth of recursive layers to follow.
- `recursive`: Whether to descend recursively through layers.
- `updateRound`: A function that returns the current round.
- `round`: The current round.

In the context of web scraping or data collection, a `round` refers to one complete cycle of the task or operation that you're performing. So if you want to collect tweets every hour. Each one-hour session would be considered a `round` of data collection. 

`Rounds` are key to managing rate limits and segmenting the data in a way that makes it easier to analyze later.

If you're looking to scrape only the most recent 50 tweets regarding a particular hashtag, you'd adjust the `limit` and `searchTerm` parameters accordingly. 

To modify the extractor query, or change how it uses the local database, check out the [`twitter-task.js`](https://github.com/somali0128/X-scraper/blob/e0cfff8421fb95dd4fdc123bde38a7293aee5098/twitter-task.js#L33).

----

## Interacting with Task Runners

To offer your query as a task that others can run, you can configure its properties in the `config-task.yaml` file.

- `task_id`: Leave this empty for the first deployment; it will be auto-generated.
- `task_name`, `task_description`, `total_bounty_amount`, and `bounty_amount_per_round`: These are the fields that will be visible to potential task runners, so make sure they are filled out accurately.

---

## Environment Variables

:::info
The Extractor application requires you to have a requires you to have a personal [Account](https://twitter.com/i/flow/signup) and a Spheron Key, either set it up in your Koii Node App, or if you prefer set it up from CLI using [Spheron API](https://docs.spheron.network/rest-api/#creating-an-access-token). If you already have the key setup in the Koii App you can find it in settings.
:::

### Where to Declare

Environment variables should be declared in a `.env` file located at the root of your project directory. Ensure to include:

- **Twitter Username**
- **Twitter Password**
- **Spheron storage token**

_A Spheron Storage Token is required from the task-runner as it is used to upload data to the InterPlanetary File System protocol._

---

## Creating and Deploying a Task

To ensure your Extractor task is deployment-ready, follow the steps below:

### 1. **Preparation: Webpack Conversion**

Before deployment, your application needs to be converted into webpack format. This optimizes your code and ensures compatibility. To do this:

```bash
yarn webpack
```

Run the above command in your terminal.

### 2. **Deployment to IPFS**

Once webpacked, you're ready for deployment. We utilize the `create-task-cli` package to help with this:

```bash
npx @_koii/create-task-cli@latest
```

Executing the above command deploys your webpacked application to IPFS.

### 3. **Final Steps Post-Deployment**

Congratulations! Your customized **Extractor Task** is now deployed on Koii. A task id will be returned upon successful deployment — make sure to save it as it's essential to execute in Koii Node.

To start your task:
- Go to Koii Node and navigate to `My Node`.
- Click on the `Advanced` option, located at the bottom of the interface.
- Paste your saved Task Id and initiate your task.