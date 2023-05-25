---
title: Task Functions
description: The task function contains the core logic of the task and we will update the code sample on the template.
image: img/thumbnail.png
sidebar_label: Task Functions
---

# Task Functions

# task()

The `task` function contains the core logic of the task and we will update the code sample on the template with the code block below:

```javascript
 async task() {
    const browserFetcher = puppeteer.createBrowserFetcher({
      product: "firefox",
    }); // download a headless version of Firefox
    const browserRevision = "114.0a1"; // browser version

    let revisionInfo = await browserFetcher.download(browserRevision);
    const browser = await puppeteer.launch({
      executablePath: revisionInfo.executablePath,
      product: "firefox",
      headless: "new", // other options can be included here
    }); // launch browser

    const page = await browser.newPage(); // new page
    await page.goto("https://www.google.com/doodles");  // visit https://www.google.com/doodles'

    let bodyHTML = await page.evaluate(
      () => document.documentElement.outerHTML
    );
    const $ = cheerio.load(bodyHTML);  // parse HTML

    let scrapedDoodle = $(".latest-doodle.on")
      .find("div > div > a > img")
      .attr("src");  // get the link for the latest doodle using the HTML element
    if (scrapedDoodle.substring(0, 2) == "//") {
      scrapedDoodle = scrapedDoodle.substring(2, scrapedDoodle.length);
    }  // extract link

    const stringify = JSON.stringify(scrapedDoodle);

    // store the doodle on NeDB
    try {
      await namespaceWrapper.storeSet("doodle", stringify); // store on NeDB
    } catch (err) {
      console.log("error", err);
    }
    browser.close(); // close browser
  }
```

Let's break down the logic above, we:

- Used `puppeteer.createBrowserFetcher()` to download a browser instance, Firefox in our case.
  - `browserRevision` is the browser version we want to download.
- Launched the browser, created a new page, and visited [Google Doodle](https://www.google.com/doodles).
- Parsed the HTML document with Cheerio.
- Extracted the link of the latest Google Doodle from the parsed HTML document.
- Converted the link to JSON and stored it on NeDB using the `storeSet()` from `namespaceWrapper`.

# fetchSubmission()

The `fetchSubmission` function fetches and returns the value from NeDB using the `storeGet` helper function.

```javascript
async function fetchSubmission() {
  try {
    const scrapedDoodle = JSON.parse(await namespaceWrapper.storeGet("doodle")); // retrieve value
    console.log("Received Doodle", scrapedDoodle);
    return scrapedDoodle;
  } catch (err) {
    console.log("Error", err);
    return err;
  }
}
```

# submitTask()

The `submitTask` function calls the `fetchSubmission()` to retrieve the value from NeDB and submits it to K2 using the `checkSubmissionAndUpdateRound` helper function.

```javascript
async function submitTask(roundNumber) {
  console.log("submitTask called with round", roundNumber);
  try {
    const value = await fetchSubmission(); // retrieve value from NeDB
    console.log("value", value);
    await namespaceWrapper.checkSubmissionAndUpdateRound(value, roundNumber); // submit to K2
    console.log("after the submission call");
  } catch (error) {
    console.log("error in submission", error);
  }
}
```
