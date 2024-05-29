---
title: Using the Extractor
image: img/thumbnail.png
sidebar_label: Using the Extractor
---

# Using The Extractor

To modify the extractor query, or change how it uses the local database, check out `twitter-task.js`.

The `query` object passes the fundamental instructions to our extractor.

```javascript
let searchTerm = "#koii";
let query = {
    limit: 100, // total number of records to return
    searchTerm: searchTerm, // the keyword to look for
    query: `https://twitter.com/search?q=${ searchTerm }&src=typed_query`, // the query string (including said keyword)
    depth: 3, // the depth of recursive layers to follow
    recursive: true, // descend recursively?
    updateRound: () => {} // a function that returns the current round
    round: 1 // the current round
}
```

## Testing the Extractor

Within the tests folder, you will find multiple pre-written tests. By utilizing these, you can see how your extractor will behave in deployment.

One of the files that you will find useful is the `test-one-round.js`. This test will locally simulate running the extractor for one round and will output the results in the console.

You can run it with:

`node test/test-one-round.js`

## Interacting with Task Runners

Within `config-task.yaml`, you can edit how your task is presented to potential task-runners.

#### Environment Variables:

Your task runners will populate this via Koii Node. We need the following:

- Twitter Username
- Twitter Password


#### Task Id:

Do not provide a `task_id` for the first deployment, as it will be assigned automatically when you create your task.


#### Other Variables:

Don't forget to edit the task_name, `task_description`, `total_bounty_amount`, and `bounty_amount_per_round` before deployment, as these would be directly visible to potential task runners in Koii Node.
