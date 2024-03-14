---
title: Executable Structure
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Executable Structure
---

import Description from "@site/src/components/description";

# Executable Structure

The Koii **task template** includes three JavaScript files: `submission.js`, `audit.js`, and `distribution.js`. Together they contain the essential functions for a task's operation.

Find these files in the 'task' directory of the template, where `submission.js` handles the task execution, `audit.js` is for verifying task completion, and `distribution.js` manages reward allocation.

![banner](../../img/Runtime%20Flow.svg)

<Description
  text="Execute ➡ Validate Node ➡ Distribute Rewards"
/>

**Example submission.js file:**

```javascript
class Submission {
  
  // Task logic for doing work, submitting the values and optionally store the result in levelDB
  async task(round) {

    // Example : Store "Hello, World!" on NeDB
    try {
      const value = "Hello, World!";

      if (value) {
        // store value on NeDB
        await namespaceWrapper.storeSet("value", value);
      }
      return value;
    
    } catch (err) {
      return "ERROR IN EXECUTING TASK" + err;
    }
  }

  async submitTask(roundNumber) {
    try {
      // get the submission
      const submission = await this.fetchSubmission(roundNumber);
      
      // check submission and update round
      await namespaceWrapper.checkSubmissionAndUpdateRound(
        submission,
        roundNumber
      );

      return submission;
    
    } catch (error) {
      console.log("error in submission", error);
    }
  }

  // Write the logic to fetch the submission values here and return the cid string
  async fetchSubmission(round) {

    // The code below shows how you can fetch your stored value from level DB
    const value = await namespaceWrapper.storeGet("value"); // retrieves the value
    return value;

  }
}
const submission = new Submission();
module.exports = { submission };
```
