---
title: Key Components
description: When a task is created, there are two key components that must be uploaded to the Koii Network to initiate the task.
image: static/img/thumbnail.png
sidebar_label: Key Components
---

import Description from "@site/src/components/description";

# Key Components

<Description
  text="When a task is created, there are two key components that must be uploaded to
  the Koii Network to initiate the task."
/>

## Executable

Every task is compiled into a single JavaScript executable file that contains all of the functions required to run the task. We go into detail throughout the tutorial. Three functions are required to be defined:

- **Task function** — This function contains the core logic of the task executable and submits the proof of the work done by participating nodes to K2. [Learn more](./key-components)
- **Audit function** — This function audits other participating nodes. [Learn More](../task-development-guide/executable-structure/validate-node)
- **Distribution function** — This function creates the distribution list and submits it on-chain. [Learn More](./key-components)

## Metadata

The task metadata is structured data that contains information about a Koii task. Node operators can easily learn more details about a specific task by looking at its metadata.&#x20;

Task Metadata Sample:

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
  }
}
```

There are two types of task metadata:

1. Data that is stored in an IPFS Metadata file - which is done on task creation

   - Task Manager — K2 wallet address of [task creator](../../koii-software-toolkit-sdk/using-the-cli.md#create-a-koii-wallet).
   - Task description — An optional field for adding a detailed description of the task.
   - Task Name — Name of the task.

2. Data that are stored on K2 - updated over time and reflect the latest state of the task
