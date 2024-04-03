---
title: Install Create-Task-CLI
description: We provide create-task-cli to help you easily create and deploy your task.
image: img/thumbnail.png
sidebar_label: Install the Create-Task-CLI
---

Follow the steps below to install the Create-Task-CLI tool:

- Run the command below in your terminal within your task directory to install and run the create-task-cli:

```bash
npx @_koii/create-task-cli@latest
```

- After you choose some of the options, it prompts for your wallet path:

```bash
✔ Enter the path to your wallet … /Users/<YOUR_HOME>/.config/koii/id.json
```

:::tip
To get your wallet path, run `koii config get` in another terminal, the “**Keypair Path**” is your wallet path.

Don't have a Koii wallet yet? Check [here](/develop/command-line-tool/koii-cli/create-wallet) and generate one quickly.
:::
