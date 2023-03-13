# Task Functions

# task()

The `task` function contains the core logic of a Koii task, so when developing a new task, the logic for the main work to be performed by nodes will be written here. The proof of work done, which is usually a CID or hash, will be stored on [levelDB](/develop/microservices-and-tasks/task-development-kit-tdk/using-the-task-namespace/leveldb).

The core logic for the sample task on the template is straightforward: a random number is generated, then it is converted to a string, and then a hash (or CID). The hash is a node's result, sent to K2 for auditing.

```javascript
/**
 * @description Contains the logic to do the work required
 * for submitting the values and optionally storing the result on levelDB
 */
async function task() {
  const x = Math.random().toString(); // generate random number and convert to string
  const cid = crypto.createHash("sha1").update(x).digest("hex"); // convert to CID
  console.log("HASH:", cid);

  if (cid) {
    await namespaceWrapper.storeSet("cid", cid); // store CID on levelDB
  }
}
```

# fetchSubmission()
The `fetchSubmission` function retrieves a node's submission value(CID) from levelDB.

```javascript
/**
 * @description Fetch's submission from levelDB
 * @returns {string} The CID
 */
async function fetchSubmission() {
  const cid = await namespaceWrapper.storeGet("cid"); // retrieves the cid
  return cid;
}
```

# submitTask()

The `submitTask` function calls the `fetchSubmission` function to retrieve the CID and submits it to K2.
To submit results on-chain, it calls the `checkSubmissionAndUpdateRound` helper function from `namespace` and adds the CID and current round number as parameters.

```javascript
/**
 * @description Submits a node's result to K2
 * @param {number} roundNumber Current round number of the task
 */
async function submitTask(roundNumber) {
  console.log("submitTask called with round", roundNumber);
  try {
    const cid = await fetchSubmission(); // retrieve CID
    await namespaceWrapper.checkSubmissionAndUpdateRound(cid, roundNumber); // submit to K2
    console.log("after the submission call");
  } catch (error) {
    console.log("error in submission", error);
  }
}
```

After the off-chain work is completed and the results are submitted on-chain. The following window is for reviewing the submitted results.
 
In the following section, we will learn about audit functions.






