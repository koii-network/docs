---
title: Technical Overview
image: img/thumbnail.png
sidebar_label: Technical Overview
---

# Technical Overview

## Components
### `twitterLogin`
This asynchronous method is used to log into Twitter by navigating to the login page and filling in the credentials.
- **Parameters**: None
- **Returns**: Boolean value indicating session validity (`this.sessionValid`).

### `isPasswordCorrect`
Checks if the entered password is correct by comparing the new URL with the current URL after login attempt.
- **Parameters**: Page, currentURL
- **Returns**: Boolean value (`true` if the password is correct, `false` otherwise).

### `parseItem`
Parses individual tweets from a given URL based on the query object passed.
- **Parameters**: url, query
- **Returns**: An object containing parsed tweet information.

### `fetchList`
Fetches a list of tweet URLs from a given search page.
- **Parameters**: url
- **Returns**: An array of unique tweet URLs.

## TwitterTask Class
This class manages the Twitter crawler and its associated tasks. Twhe main functionalities include:
- Crawler control (`start`, `stop`)
- Data validation (`validate`)
- Round management (`updateRound`, `getRoundCID`)

### Methods:
#### `constructor(getRound, round)`
- **Parameters**: 
  - `getRound`: Function that returns the current round.
  - `round`: Current round.
  
#### `setAdapter()`
- **Parameters**: None
- **Returns**: None
- Initializes Twitter credentials for the adapter.

#### `updateRound()`
- **Parameters**: None
- **Returns**: Updated round.
- Updates the round if a minute has passed since the last round check.

#### `start()`
- **Parameters**: None
- **Returns**: None
- Starts the Twitter crawler.

#### `stop()`
- **Parameters**: None
- **Returns**: None
- Stops the Twitter crawler.

#### `getRoundCID(roundID)`
- **Parameters**: 
  - `roundID`: ID of the round.
- **Returns**: CID of the round.

#### `getJSONofCID(cid)`
- **Parameters**: 
  - `cid`: Content Identifier.
- **Returns**: JSON of the CID.

#### `validate(proofCid)`
- **Parameters**: 
  - `proofCid`: CID for validation.
- **Returns**: Boolean (`true` if validation is successful, `false` otherwise).

## Dependencies
- **Cheerio**: For parsing HTML content.
- **Axios**: For making HTTP requests.
- **Web3.Storage**: For interacting with IPFS.
- **Twitter Adapter** (`./adapters/twitter/twitter.js`): To authenticate and crawl Twitter.
- **Database Helper** (`./helpers/db`): To populate the database with crawl results.
- **Data Model** (`./model/data`): Model for the data.
- **.env** (`dotenv`): To load environment variables.