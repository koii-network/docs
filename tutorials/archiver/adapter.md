---
title: Adapters
image: img/thumbnail.png
sidebar_label: Adapters
---

Within our template, we are making use adapters.

We are extending the adapter class to interact with Twitter, but you can extend it to interact with any website you want.

Let's take a look at our `adapters/twitter.js` file.

### Modules

We are making use of a database model, puppeteer for web scraping, cheerio for DOM parsing, crypto for potential cryptography tasks, and web3.storage for decentralized storage.

### Session Management

**checkSession Method:**

- If a session is valid, it directly returns true.
- If a session is no longer valid and the last session check was more than 1 minute ago, a new session is negotiated.

**negotiateSession Method:**

- Resolves the path to the Chromium executable.
- Launches a new browser instance.
- Opens a new page.
- Sets the viewport size.
- Then queues the twitterLogin() method to log into - Twitter.

**twitterLogin Method:**

- Navigates to Twitter's main page and then to the login page.
- Fills in the username and password and presses 'Enter' to attempt logging in.
- Includes logic to handle verification.
- After a successful login, it sets the session to valid.

### Data Handling

**getSubmissionCID Method:**

- Returns the CID (Content Identifier) of a submission for a given round. If the submission hasn't been uploaded yet, it uploads the submission and then returns the CID.

**parseItem Method:**

- This method is for scraping data from a Twitter post. It waits for the page to load, extracts data such as tweet text, username, likes, shares, etc., using Cheerio, and then returns the extracted data.

### Crawling Logic

**crawl Method:**

- Initializes a list of URLs to crawl.
  For each URL, it parses the item at the URL and extracts relevant data. If recursive querying is allowed, it fetches more links from each link.

**fetchList Method:**

- This method is tasked with visiting a given URL, waiting for its content to fully load, scraping it, and then returning an array of links found on the page.

**stop Method:**

- This method sets the break variable to true, stopping the crawl.

### Utilities

The final portion of our file contains utility functions:

**makeStorageClient:**

- Returns a new instance of Web3Storage for decentralized storage.

**makeFileFromObjectWithName:**

- Converts an object to a File with a specified name.

**storeFiles:**

- Stores files using the Web3 storage client and returns their CID.

### Summary

The Twitter class in the code provides a framework for crawling Twitter using puppeteer. It manages sessions (logging in to Twitter), extracts data from tweets, manages the crawling queue, and can store the extracted data on decentralized storage using web3.storage.

You can use it as a starting point to develop your own Twitter crawler to your own needs, or you can use it as a reference to develop a crawler for a different website.
