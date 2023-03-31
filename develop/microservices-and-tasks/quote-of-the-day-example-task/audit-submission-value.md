---
title: Audit Submission Value
description: A validation function is needed to verify the generated results. This function is passed to the task’s built-in validate node function and executed on each participating node.
image: img/thumbnail.png
sidebar_label: Audit Submission Value
---

# Audit Submission Value

A validation function is needed to verify the generated results. This function is passed to the task’s built-in validate node function and executed on each participating node.

# validateNode()

The `validateNode` function contains the core logic of how a node's submission should be verified.

Update the `validateNode` function with the code block below:

```javascript
/**
 * @description Using to validate an individual node. Returns true if node submission is valid
 */
async function validateNode(submission_value) {
  let vote;
  console.log("SUBMISSION VALUE", submission_value);
  const doodle = submission_value;

  // check the google doodle

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/doodles");
  let bodyHTML = await page.evaluate(() => document.documentElement.outerHTML);
  const $ = cheerio.load(bodyHTML);

  let scrapedDoodle = $(".latest-doodle.on")
    .find("div > div > a > img")
    .attr("src");
  if (scrapedDoodle.substring(0, 2) == "//") {
    scrapedDoodle = scrapedDoodle.substring(2, scrapedDoodle.length);
  }
  console.log({ scrapedDoodle });

  // vote based on the scrapedDoodle

  try {
    if (scrapedDoodle == doodle) {
      vote = true;
    } else {
      vote = false;
    }
  } catch (e) {
    console.error(e);
    vote = false;
  }
  browser.close();
  return vote;
}
```

In the code above, the `validateNode` function takes the submission value as a parameter, repeats the logic of fetching the latest doodle, and finally compares the latest doodle and the submission value. If they're a match, the node's submission is considered valid and the function returns `true`; otherwise the function returns `false`.

# auditTask()

The `auditTask` function submits the `validateNode` function to K2 using the `validateAndVoteOnNodes` helper function.

:::info

No need to edit this function when creating a task

:::
