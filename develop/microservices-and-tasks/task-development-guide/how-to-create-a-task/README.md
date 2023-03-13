---
description: Learn how to create a simple Koii task
---

# How to Create a Task

Your interest in learning how to create a Koii task is justified, and if you're willing to get your hands dirty with some code, you've come to the right section of the documentation. Moving forward, we will build a simple Koii task that we'll name "**Sample Task."** This task will have a very minimalistic logic to keep the task building process as simple as possible.

Let's first understand the logic behind the task before moving on to the coding aspect.

## **Sample Task Logic**

The task's core logic is very simple: a random number is generated, then it is converted to a string, and finally to a hash (or CID). The hash serves as the task's output and is sent to K2 for auditing.

To validate a node's submission, the first character of the hash (CID) sent to K2 is checked to see if it falls within the first 23 letters of the alphabet. If it does, the node's submission is valid; if it doesn't, it is invalid.

Simple right? Let's break it down further:

* Generate a random number
* Convert the number to a string
* Convert the string to a hash (CID)
* Send the hash to K2 as the result from running the task
* Check if first character of hash is between A - W (first 23 alphabets)
  * If `true`, the node's submission is considered as valid
  * If `false`, the node's submission is considered as invalid

## **Task Design**

Every task is written as a single executable file containing all the functions needed to complete your task. We go into detail throughout the tutorial. The following functions are required to be defined:

* Task
* Audit
* Distribution&#x20;

