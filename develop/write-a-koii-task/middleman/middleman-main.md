---
title: Main Functions of Koii Middleman Server
image: img/thumbnail.png
sidebar_label: Middleman Main
---

# Function Overview: Main Task Data Fetching and Processing

## Imports
```javascript
const getTaskData = require("./helpers/getTaskData");
const { queueCID } = require("./queue");
require("dotenv").config();
```

- **getTaskData**: A helper function that retrieves task data based on the provided `taskId` and `round`.
- **queueCID**: A function responsible for handling submissions by queuing them for further processing. Include read data from IPFS and write data to MongoDB.
- **dotenv**: Used to load environment variables from a `.env` file.

## Variables
```javascript
let round = 0;
const taskId = process.env.TASK_ID;
```

- **round**: Tracks the current round of task data being processed, initialized to `0`.
- **taskId**: The ID of the task, loaded from environment variables.

## Main Function

```javascript
async function main() {
    const getTaskDataWrapper = async (taskId, round) => {
        let wrappedTaskData = await getTaskData(taskId, round);
        if (wrappedTaskData === false) {
            console.log("No new round found. Retrying in 60 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 60000));
            return await getTaskDataWrapper(taskId, round);
        } else {
            return wrappedTaskData;
        }
    };
    
    const taskData = await getTaskDataWrapper(taskId, round);

    if (round < taskData.maxRound) {
        round = taskData.maxRound;
        console.log("Current round is", round, "...");
        const submissionList = taskData.submissions;
        const tweetList = await queueCID(submissionList);
        
        console.log("Operation complete, calling the function again.");
        main();
    } else {
        const roundTimeInMS = taskData.roundTime * 408;
        console.log(
            "No new round... Checking again in",
            (roundTimeInMS / 60000).toFixed(2),
            "Minutes"
        );
        setTimeout(main, roundTimeInMS);
    }
}

main();
```

### Description
This script continuously fetches task data from the Koii network, processes submissions, and handles rounds.

1. **getTaskDataWrapper**: A recursive function that keeps trying to fetch task data until a new round is detected.
   - If no new round is found, it waits for 60 seconds before retrying.
   - Once new data is found, it returns the task data.

2. **main()**:
   - Calls `getTaskDataWrapper` to get the latest task data.
   - If the current round is less than the maximum round (`taskData.maxRound`), it updates the `round` variable and processes the submissions by queuing them with `queueCID`.
   - If the round hasn't updated, it calculates the next check time based on `taskData.roundTime` and retries after that interval.
   - The process repeats indefinitely by recursively calling `main()`.

### Execution
The script is initiated by calling `main()`, which enters a loop of fetching, processing, and waiting for new task data.

### Notes
- The script is designed to handle long-running processes and automatically retries until new task data is available.
- Each round time unit is approximately 408 milliseconds, which is used to calculate waiting times between rounds.