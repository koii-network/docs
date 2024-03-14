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

## This Hello World example demonstrates the basic flow of storing the string "hello world".

# Submission.js

* Normally, the **task()** function performs an operation and stores the result externally, for instance on IPFS, yielding a CID (Content Identifier). However, in this simple case, we will return the literal value instead of a CID.

* The **submitTask()** function is designed to save the CID as the submission record for later retrieval. Here, it will save the value directly.

**See the functions task() and submitTask() in this example submission.js file:**

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

  // Write the logic to fetch the submission values here 
  // Note: if you were using IFPS you would return a CID
  async fetchSubmission(round) {

    // The code below shows how you can fetch your stored value
    const value = await namespaceWrapper.storeGet("value"); // retrieves the value from NeDB
    return value;

  }
}
const submission = new Submission();
module.exports = { submission };
```
# audit.js

* `audit.js`: Within the **validateNode()** function, you would typically use the CID to retrieve and validate the result, casting a vote on its validity. For this example, the validation is straightforward as we're dealing with the value directly.

```javascript
class Audit {
  async validateNode(submission_value, round) {
    // Write your logic for the validation of submission value here and return a boolean value in response

    // The sample logic can be something like mentioned below to validate the submission
    let vote;

    try {
      if (submission_value == 'Hello, World!') {
        // For successful flow we return true (Means the audited node submission is correct)
        vote = true;
      } else {
        // For unsuccessful flow we return false (Means the audited node submission is incorrect)
        vote = false;
      }
    } catch (e) {
      console.error(e);
      vote = false;
    }
    return vote;
  }

  async auditTask(roundNumber) {
    await namespaceWrapper.validateAndVoteOnNodes(
      this.validateNode,
      roundNumber,
    );
  }
}
const audit = new Audit();
module.exports = { audit };
```

# distribution.js

* `distribution.js`: This script is responsible for distributing rewards to valid submissions. 

* While no changes are necessary for this example, you have the option to modify the distribution logic if needed.