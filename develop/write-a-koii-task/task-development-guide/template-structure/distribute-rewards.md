---
title: Distribute Rewards
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Distribute Rewards
---

# Distribute Rewards

It's time to distribute the rewards! `task/distribution.js` contains the main job function that is responsible for generating a distribution list and submitting it on-chain.


## Generate DistributionList Function

This function is responsible for generating the distribution list and decide the distribution rules. In the audit part we vote other nodes a true or false for their submission. The function `generateDistributionList` will get result from K2 and determine if the nodes can have rewards or not.

:::tip
If you wanna change the distribution rules, you can modify the `generateDistributionList` function to decide the distribution rules. This example shows how to distribute the rewards equally to all nodes:

```javascript
    const reward = Math.floor(
    taskAccountDataJSON.bounty_amount_per_round /
        distributionCandidates.length,
    );
    for (let i = 0; i < distributionCandidates.length; i++) {
    distributionList[distributionCandidates[i]] = reward;
    }
    return distributionList;
```
You can also hardcode `reward = 1` then all nodes will get 1 KOII token as a reward.

NOTE: The total number of KOII tokens to be distributed should not exceed the bounty amount set in the task configuration.
:::

## Submit Distribution List Function (Optional)

Only one selected node will call the `submitDistributionList` function to submit the distribution list. The `submitDistributionList` function is responsible for generating a distribution list and submitting it to K2. Here is an example of a `submitDistributionList` function:

```javascript
  submitDistributionList = async round => {
    console.log('SUBMIT DISTRIBUTION LIST CALLED WITH ROUND', round);
    try {
      const distributionList = await this.generateDistributionList(round);
      if (Object.keys(distributionList).length === 0) {
        console.log('NO DISTRIBUTION LIST GENERATED');
        return;
      }
      const decider = await namespaceWrapper.uploadDistributionList(
        distributionList,
        round,
      );
      console.log('DECIDER', decider);
      if (decider) {
        const response =
          await namespaceWrapper.distributionListSubmissionOnChain(round);
        console.log('RESPONSE FROM DISTRIBUTION LIST', response);
      }
    } catch (err) {
      console.log('ERROR IN SUBMIT DISTRIBUTION', err);
    }
  };
```

In this flow, `submitDistributionList` function will be called in each round to submit the distribution list. The `generateDistributionList` function is called to generate the distribution list and then it is submitted to K2.

## Audit Distribution Function (Optional)

For other nodes, the `auditDistribution` function will be called to audit the distribution list. The nodes will call `generateDistributionList` function as well to compare if the selected node distribution list correct or not. Here is an example of a `auditDistribution` function:

```javascript
  async auditDistribution(roundNumber) {
    console.log('AUDIT DISTRIBUTION CALLED WITHIN ROUND: ', roundNumber);
    await namespaceWrapper.validateAndVoteOnDistributionList(
      this.validateDistribution,
      roundNumber,
    );
  }

  validateDistribution = async (
    distributionListSubmitter,
    round,
    _dummyDistributionList,
    _dummyTaskState,
  ) => {
    try {
      console.log('DISTRIBUTION LIST SUBMITTER', distributionListSubmitter);
      const rawDistributionList = await namespaceWrapper.getDistributionList(
        distributionListSubmitter,
        round,
      );
      let fetchedDistributionList;
      if (rawDistributionList == null) {
        return true;
      } else {
        fetchedDistributionList = JSON.parse(rawDistributionList);
      }
      console.log('FETCHED DISTRIBUTION LIST', fetchedDistributionList);
      const generateDistributionList = await this.generateDistributionList(
        round,
        _dummyTaskState,
      );

      if(Object.keys(generateDistributionList).length === 0) {
        console.log('UNABLE TO GENERATE DISTRIBUTION LIST');
        return true;
      }
      // Compare distribution list
      const parsed = fetchedDistributionList;
      console.log(
        'COMPARE DISTRIBUTION LIST',
        parsed,
        generateDistributionList,
      );
      const result = await this.shallowEqual(parsed, generateDistributionList);
      console.log('RESULT', result);
      return result;
    } catch (err) {
      console.log('ERROR IN VALIDATING DISTRIBUTION', err);
      return false;
    }
  };
```
