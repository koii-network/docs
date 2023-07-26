---
title: Simulating a Round
description: The following sections detail the use of Koii's Task Development Kit, which provides key components that will make it much easier to get started.
image: img/thumbnail.png
sidebar_label: Simulating a Round
---

You can also simulate a round via adding this code to your tests folder:

```
const { coreLogic } = require('../coreLogic');

const run = async () => {
let delay = 60000;
let round = 4;
console.log('Started a new task at round', round);

setTimeout(async () => {
console.log('Stopping task at round', round);
let proof_cid = await coreLogic.fetchSubmission(round - 1);
console.log('Got round result', proof_cid);
let output = await coreLogic.validateNode(proof_cid, round);
console.log('Validated round result', output);
}, delay);
};
run();

```
