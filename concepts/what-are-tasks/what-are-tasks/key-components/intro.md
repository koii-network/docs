---
title: Key Components
description: When a task is created, there are two key components that must be uploaded to the Koii Network to initiate the task.
image: img/thumbnail.png
sidebar_label: Key Components
---

import Description from "@site/src/components/description";

# Key Components

![banner](../../img/Key%20components.svg)

<Description
  text="When a task is created, there are two key components that must be uploaded to
  the Koii Network to initiate the task."
/>

## Executable

Every task is compiled into a single JavaScript executable file that contains all of the functions required to run the task. We go into detail throughout the tutorial. Three functions are required to be defined:

- **Task Function** — This function contains the core logic of the task executable and submits the proof of the work done by participating nodes to K2. [Learn more](/develop/write-a-koii-task/task-development-guide/k2-task-template/task-function)
- **Audit Function** — This function audits other participating nodes. [Learn More](/develop/write-a-koii-task/task-development-guide/k2-task-template/audit-function)
- **Distribution Function** — This function creates the distribution list and submits it on-chain. [Learn More](/develop/write-a-koii-task/task-development-guide/k2-task-template/distribution-functions)

## Metadata


Task metadata is essential structured data that provides valuable information about a Koii task. By examining the metadata, node operators can gain a comprehensive understanding of a specific task. It is highly recommended to include key details such as the minimum computer specifications and reward structure within the metadata. This inclusion allows node operators to have a clear understanding of how rewards will be distributed, minimizing any potential confusion or uncertainty when executing your task. &#x20;

Task metadata sample:

```javascript
{
  name: 'Sample Task',
  description: 'This a demo task',
  author: 'KOII-networks',
  githubURL: 'https://github.com',
  imageURL: 'image.png',
  createdAt: '',
  nodeSpec: {
    storage: '',
    cpu: '4',
    memory: '8',
    os: [ 'Linux', 'Windows', 'MacOS' ],
    network: '20'
  },
  bountyStructure: {
    "minimum stake amount": '5',
    "total bounty amount" : '10000000',
    "bounty amount per round": '10',
  },
  distributionStructure: {
    "distribution per round": '0.15',
    "distribution mechanism": "every node gets fixed amount of reward every round",
    "stake dependence": "rewards do not depend on stake",
    "time dependence": "longer staking does not mean more reward"
 }  
}
```

There are two types of task metadata:

1. Data that is stored on an IPFS metadata file - which is done on task creation

   - Task manager — K2 wallet address of task creator.
   - Task description — An optional field for adding a detailed description of the task.
   - Task name — Name of the task.

2. Data that are stored on K2 - updated over time and reflect the latest state of the task
