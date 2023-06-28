---
title: Install the Koii CLI Suite
description: To interact with the K2 locally, you need to install the Koii CLI.
image: img/thumbnail.png
sidebar_label: Install the Koii CLI Suite
---

import Description from "@site/src/components/description";

<Description
  text="To interact with the K2 locally, you need to install the Koii CLI."
/>

# MacOS & Linux

- Run the command below in your terminal to install the Koii command-line tools:

```
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init.sh)"
```

- Depending on your system, you may get this prompt:

```
Please update your PATH environment variable to include the Koii programs:
```

- If you get the above message, copy and run the command beneath this prompt to update your `PATH` environment.

- To confirm your `PATH` environment has been updated run `echo $PATH`

- Run the command below to confirm that the CLI was successfully installed:

```
koii --version
```

:::info

For Mac users, you might find if you open another terminal the Koii CLI would not work. Follow these steps to update PATH.

- After installing Koii CLI, copy the PATH first
- run command `vi ~/.zshrc`
- Insert "export <_paste your path here>_"
- Save and close exit it, and you are good to go!

:::

To run the test validator, use the command:

```
koii-test-validator
```

# Windows

- Run the command below to install the Koii command-line tools:

```
curl https://github.com/koii-network/k2-release/releases/download/v1.15.0/koii-install-init-x86_64-pc-windows-msvc.exe --output C:\koii-install-tmp\koii-install-init.exe --create-dirs
```

- Copy and paste the following command, then click "Enter" to install the latest version of the Koii CLI. If you see a security pop-up in your system, please select to allow the program to run.

After the program has been downloaded, locate the program on your device and grant it full permission.

Next, run the command below as an administrator:
```
C:\koii-install-tmp\koii-install-init.exe v1.15.0
```

- When the installer is finished, click "Enter".

- Close the command prompt window and open a new one as a normal user.
- Run `koii --version` to confirm that the CLI was successfully installed.

```
koii-cli 1.15.0
```
