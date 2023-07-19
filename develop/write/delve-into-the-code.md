---
title: Delve into the code
description: Your guide to write a koii task.
image: img/thumbnail.png
sidebar_label: Delve into the code
---

If you skipped it before, clone the repo and dive in:

```bash
 git clone https://github.com/koii-network/task-template.git hello-world
 cd hello-world
```

Make sure you have [node](https://nodejs.org/en/), npm, and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed before going forward.

## What's in the template?

- `index.js` — is the hub of your app, and ties together the other pieces. This will be the entry point when your task runs on task nodes.

- `namespaceWrappers.js` — contains the interfaces to make API calls to the core of the task-node. It contains all the necessary functions required to submit and audit the work, as well as the distribution lists. Check [here](/develop/write-a-koii-task/task-development-kit-tdk/using-the-task-namespace/) to learn more Namespace functions.

- `coreLogic.js` — is where you'll define your task, audit, and distribution logic, and controls the majority of task functionality. You can of course break out separate features into sub-files and import them into the core logic before web-packing.
  Check [here](/develop/write-a-koii-task/task-development-kit-tdk/)
