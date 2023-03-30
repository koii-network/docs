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
async function task() {
  const browser = await puppeteer.launch(); // launch browser
  const page = await browser.newPage(); // new page
  await page.goto("https://www.google.com/doodles"); // visit https://www.google.com/doodles'

  let bodyHTML = await page.evaluate(() => document.documentElement.outerHTML);
  const $ = cheerio.load(bodyHTML); // parse HTML

  let scrapedDoodle = $(".latest-doodle.on")
    .find("div > div > a > img")
    .attr("src"); // get link for latest doodle using the HTML element
  if (scrapedDoodle.substring(0, 2) == "//") {
    scrapedDoodle = scrapedDoodle.substring(2, scrapedDoodle.length);
  } // extract link

  console.log("SUBMISSION VALUE", scrapedDoodle);
  const stringfy = JSON.stringify(scrapedDoodle);

  // store this work of fetching googleDoodle to levelDB
  try {
    await namespaceWrapper.storeSet("doodle", stringfy); // store on levelDB
  } catch (err) {
    console.log("error", err);
  }
}
```

Let's break down the logic above, we:

- Launched a browser using Puppeteer, created anew page and visited [Google doodle](https://www.google.com/doodles)
- Parsed the HTML document with Cheerio
- Extracted the link of the latest google doodle from the parsed HTML document
- Converted the link to JSON and stored it on levelDB using the `storeSet` helper function

# fetchSubmission()

The `fetchSubmission` function with fetch and return the value from levelDB using the `storeGet` helper function.

```javascript
async function fetchSubmission() {
  try {
    const scrappedDoodle = JSON.parse(
      await namespaceWrapper.storeGet("doodle")
    ); // retrieve value
    console.log("Received Doodle", scrappedDoodle);
    return scrappedDoodle;
  } catch (err) {
    console.log("Error", err);
    return err;
  }
}
```

# submitTask()

The `submitTask` function calls the `fetchSubmission()` to retrieve the value from levelDB and submits it to K2 using the `checkSubmissionAndUpdateRound` helper function.

```javascript
async function submitTask(roundNumber) {
  console.log("submitTask called with round", roundNumber);
  try {
    const value = await fetchSubmission(); // retrieve value from levelDB
    console.log("value", value);
    await namespaceWrapper.checkSubmissionAndUpdateRound(value, roundNumber); // submit to K2
    console.log("after the submission call");
  } catch (error) {
    console.log("error in submission", error);
  }
}
```
