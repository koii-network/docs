---
title: Whitelist a Koii Task
description: Contact the development team on the Koii Discord
image: img/thumbnail.png
sidebar_label: Whitelist your Task
---

## How to Whitelist Your Task

To get your task whitelisted, follow these steps:

### 1. Test Locally

Begin by testing your task on your local environment to ensure it functions correctly. Check how to test your task [here](/develop/category/testing).

### 2. Use the Advanced Task Feature

It's recommended to make use of the Advanced Task feature available on the node. This functionality enables you to design and run your own custom task even before you receive official whitelisting. To initiate your task, navigate to the **Add Task** section and choose the **+ Advanced** option. We recommend you begin by publishing your task in test mode first; share your task with a few friends and make sure everything is running as expected. Once you're confident the task is working well, publish it in production mode to make it available as a non-verified task in the Desktop Node. This will allow interested node runners to try it out before the whitelisting process is complete.

### 3. Distribute initial tokens

If you are running a KPL task, you'll need to distribute some tokens to node runners so they can stake on the task. You can distribute tokens through our special Token Miner task. To add your token to the Miner, simply send the amount you want to distribute to the wallet `FnQm11NXJxPSjza3fuhuQ6Cu4fKNqdaPkVSRyLSWf14d`.

### 3. Apply for Whitelisting

To have your task appear on the whitelisted tasks list, take the following actions:

- Make your repository **public**.
- Make sure your task metadata is complete:

  - A task name (maximum 24 characters)
  - An informative description in text (enter directly in the config-task.yml) or markdown (preferred, edit TaskDescription.md).
  - Author name (can be a person or organization)
  - Link to your public Github repository
  - Link to your Koii Ocean page (infoURL)
  - A task image of size 230x86 with your logo/icon in a circle on the left. Example:

    ![KPL Miner Task Image](/img/develop/write-task/kpl_miner_task.png)

- Set the `space` in config-task.yml to at least 2mb (about 140 KOII rent exemption needed).
- If you are deploying a KPL task, make sure the token has a square token image of at least 200x200 size in SVG format. The image will be cropped to a circle so take this into account when designing the image. Additionally, it is recommended to avoid highly detailed images as the icon will be displayed at small resolutions (minimum 15x15 pixels).
- Open a **support ticket on [Discord](https://discord.com/invite/koii-network)** to initiate the whitelisting process. Please also provide the link to your public repository as well as your Task ID.
