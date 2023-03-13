# Audit Distribution List

# validateDistribution()
The `validateDistribution` function contains the logic of how the distribution list should be audited to check validity:

```javascript
async function validateDistribution(submissionValue) {
  console.log("Validating Disribution List", submissionValue);
  return true;
}
```

# auditDistribution()

 The `auditDistribution` function takes the `roundNumber` as a parameter and calls the `validateAndVoteOnDistributionList` helper function which takes in the `validateDistribution`  function and `roundNumber` as parameters.

:::info

No need to edit this function when creating a task

:::

