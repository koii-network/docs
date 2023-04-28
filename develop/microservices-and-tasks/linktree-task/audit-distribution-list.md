---
title: Audit Distribution List
image: img/thumbnail.png
sidebar_label: Audit Distribution List
---

## `validateDistribution()`
The `validateDistribution()` method contains the logic of how the distribution list should be audited to check validity.


## `auditDistribution()`

The `auditDistribution()` method takes the `roundNumber` as a parameter and calls the `validateAndVoteOnDistributionList()` helper method which takes in the `validateDistribution()` method and `roundNumber` as parameters.

:::note

We'd retain the current logic for the `validateDistribution()` and `auditDistribution()` methods, so no need to edit them.

:::