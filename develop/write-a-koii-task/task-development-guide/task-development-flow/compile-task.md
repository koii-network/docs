---
title: Compile Task
description: After you've created a task using the K2 task template as a guide, you'll need to compile it with Webpack into a single executable file.
image: img/thumbnail.png
sidebar_label: Compile Task
---

# Compile Task

After you've created a task using the K2 task template as a guide, you'll need to compile it with Webpack into a single executable file.

Open up your terminal and in the directory of your task:

- Run `npm install` to install all dependencies
- Run `npm run webpack` to compile code
- You should see a new directory `/dist`
- Your compiled executable is located in `/dist/main.js`

That's it! You've successfully compiled your task into a single executable file.
