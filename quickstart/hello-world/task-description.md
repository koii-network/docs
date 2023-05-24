---
title:  Task Description
description: Your one-stop shop for cross-chain user-engagement.
image: img/thumbnail.png
sidebar_label:  Task Description
---

After creating a Koii Task, it is highly recommended that you include a detailed description of the task so that node operators who wish to run your task have all the necessary information.

The configuration file `config-task.yml` contains information about your task. A sample `config-task.yml` file can be found in the root directory of your task folder.

:::info
The `secret_web3_storage_key` variable requires you to have a [Web3.storage account](https://web3.storage/); create an account and provide your API secret key into it.
:::

Follow the instructions in the file and fill in your task's information:

```yml
# Provide the taskId if you are updating the task
task_id: ''
# Name and description of your task
task_name: 'hello-world'
task_description: 'This is a simple task that returns "Hello, World!"'

# network value can be DEVELOPMENT , ARWEAVE or IPFS
task_executable_network: 'DEVELOPMENT'

# Provide your web3.storage key as it is needed for uploading your metadata
secret_web3_storage_key: 'eyJhbGciOiJIU1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNhMzJGMjdGZUFENTU0RGRDRDAyRGVFRTZmNzcyRjQxN0MzYzdkMTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODMyOTU4MTQ0MjcsIm5hbWUiOiJrb2lpLXRvZG8ifQ.Pp2ziiA4h5QcSVLLwA7am4vAQdUor6ad3qe2M3_0N8k'

# Path to your executable webpack if the selected network is IPFS otherwise leave blank
task_audit_program: ''

# Provide your transaction ID in case of ARWEAVE and in case of DEVELOPMENT leave your executable name as "main" otherwise leave blank
task_audit_program_id: 'main'

# Total round time of your task : it must be given in slots and each slot is rougly equal to 4ms
round_time: 600

audit_window: 200
submission_window: 200

# Amounts in KOII

minimum_stake_amount: 5

# total_bounty_amount cannot be grater than bounty_amount_per_round
# total bounty is not accepted in case of update task
total_bounty_amount: 10

bounty_amount_per_round: 1

#Number of times allowed to re-submit the distribution  list in case the distribution list is audited
allowed_failed_distributions: 3

#Space in MBs
space: 1

# Note that the value field in RequirementTag is optional, so it is up to you to include it or not based on your use case.
# To add more global variables and task variables, please refer the type,value,description format shown below

author: 'Jane Doe'
description: 'This is a simple task that returns "Hello, World!"'
repositoryUrl: 'Github/gitlab link'
imageUrl: 'Enter you image URL'
requirementsTags:
  - type: TASK_VARIABLE
    value: SECRET_WEB3_STORAGE_KEY
    description: 'used to connect web3.storage'
  - type: TASK_VARIABLE
    value: 'SCRAPING_URL'
    description: 'url from which you want to scrape'
  - type: CPU
    value: '4-core'
  - type: RAM
    value: '5 GB'
  - type: STORAGE
    value: 'test'
  - type: NETWORK
    value: 'test'
  - type: ARCHITECTURE
    value: 'AMD'
  - type: OS
    value: 'OSX'

```