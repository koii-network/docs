---
title: Task Structure & Final Steps
image: img/thumbnail.png
sidebar_label: The Task Structure & Final Steps
---

### **Overview:**

The `TwitterTask` class, found in `twitter-task.js` provides functionality for non-profits to crawl Twitter based on a search term, populate a database with the crawl results, validate submissions of other nodes using the database, and manage CID (Content Identifier) submissions.

:::tip
Edit `searchTerm` (defaulted to 'Web3') to customize your extractor.
:::

### **Methods:**

#### 1. **setAdapter()**

Sets up the Twitter adapter with the necessary credentials (from environment variables) for the extractor.

- **Throws**: Error if `TWITTER_USERNAME` or `TWITTER_PASSWORD` are not set in environment variables.

#### 2. **updateRound()**

Updates the current round. If more than one minute has passed since the last round check, it fetches the current round using the provided `getRound` function.

- **Returns**: The current round.

#### 3. **start()**

Initializes the adapter and starts the Extractor.

#### 4. **stop()**

Stops the Extractor.

#### 5. **getRoundCID(roundID)**

Prepares and retrieves the submission CID for the specified round.

- **Parameters**:
  - `roundID`: ID of the round for which CID is to be fetched.
- **Returns**: CID for the given round.

#### 6. **getJSONofCID(cid)**

Fetches the JSON data of the specified CID from IPFS.

- **Parameters**:
  - `cid`: The Content Identifier.
- **Returns**: JSON data of the specified CID.

#### 7. **validate(proofCid)**

Validates the results of a specified round from another node by comparing the CID results with actual results on Twitter.

- **Parameters**:
  - `proofCid`: CID of the results to validate.
- **Returns**: `true` if the validation is successful, otherwise `false`.

### **External Function:**

#### **getJSONFromCID(cid)**

Fetches the JSON data from a CID.

- **Parameters**:
  - `cid`: The Content Identifier.
- **Returns**: Promise that resolves with the JSON data of the specified CID.

### **Implementation Details:**

- The adapter takes the environment variables `TWITTER_USERNAME` and `TWITTER_PASSWORD` to authenticate a login session.

- To validate a round of results from another node, the class retrieves the data from the provided CID. It then performs a random check on a predefined threshold of the records against the actual content. If any check fails, the validation returns `false`. We are using this for our audit step.

### **Dependencies:**

- Adapter (`./adapters/twitter/twitter.js`): To authenticate and crawl the site.
- Database Helper (`./helpers/db`): To populate the database with crawl results.
- Data Model (`./model/data`): Model for the data.
- dotenv (`dotenv`): To load environment variables.
- axios (`axios`): To make HTTP requests.

### **Final Notes:**

Check out `coreLogic.js` to see how it utilizes these functions for the task & audit steps. After testing your application thoroughly in your local environment, you can deploy it to Koii.

## Creating a Webpack & Deployment To IPFS

Before deploying our task, we must first convert it to
webpack format by typing `yarn webpack` in our terminal.

We can use use create-task-cli package to deploy our webpacked application to IPFS:

```sh
npx @\_koii/create-task-cli@latest
```

Voila! Now you have your extractor deployed on Koii. Be sure to save the returned task id, as you will need it in Koii Node.

Within Koii Node, head over to My Node. Click “Advanced”, (at the bottom of the interface). Copy your Task Id and start running the task!

Do not forget that in order to have the audit step working, you need at least two people. So invite a friend of yours to test your application in deployment.
