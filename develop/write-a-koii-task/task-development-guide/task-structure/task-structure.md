---
title: Task Structure
description: A Koii task executable is a single JavaScript file that contains all of the functions for a Koii task to function properly.
image: img/thumbnail.png
sidebar_label: Task Structure
---

# Task Structure

The Koii [task template](https://github.com/koii-network/task-template) contains three separate JavaScript files that contain all of the functions for a Koii task to function properly.

The task function, audit function, and distribution function were mentioned in the previous section; you can find `task/submission.js`, `task/audit.js`, and `task/distribution.js` in the task template that contains the functions for each of these steps.

```javascript
📦K2-TASK-TEMPLATE
 ┣ 📂_koiiNode
 ┣ 📂task
 ┣ 📂tests
 ┣ 📜config-task.yml
 ┣ 📜coreLogic.js
 ┗ 📜index.js

 ```