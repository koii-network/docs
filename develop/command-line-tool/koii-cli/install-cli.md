---
title: Install the Koii CLI Suite
description: To interact with the K2 locally, you need to install the Koii CLI.
image: img/thumbnail.png
sidebar_label: Install the Koii CLI Suite
---

import Description from "@site/src/components/description";

<!-- <Description
  text="To interact with the K2 locally, you need to install the Koii CLI. The Koii CLI provides a set of valuable features, including:Generating a Koii wallet,Running Koii test validator."
/> -->

To interact with the K2 network locally, you must install the Koii CLI. The Koii CLI is equipped with a range of essential features, such as:

1. Generating a Koii wallet: With the Koii CLI, you can easily create a wallet specifically designed for Koii interactions.

2. Running Koii test validator: The Koii CLI allows you to execute a test validator, enabling you to test and validate your Koii-related functionalities locally.

By using the Koii CLI, you can seamlessly interact with the K2 network within your local development environment, empowering you to build and test your applications efficiently.

The KOII CLI can be installed in various ways based on your operating system:

# MacOS & Linux

1. Open your terminal and execute the following command:

```
sh -c "$(curl -sSfL https://raw.githubusercontent.com/koii-network/k2-release/master/k2-install-init.sh)"
```

This command will download and install the necessary Koii tools.

2. Depending on your operating system, you may receive the following prompt:

```
Please update your PATH environment variable to include the koii programs:
```

If you encounter this message, proceed to the next step. Otherwise, move on to step 4.

3. Copy and run the command provided below the prompt. This command will update your `PATH` environment variable to include the Koii programs.

4. To confirm that your `PATH` environment variable has been successfully updated, run the following command:

   ```
   echo $PATH
   ```

5. To confirm that the Koii CLI was successfully installed, run the following command:

```
koii --version
```

- You should see the version information similar to this:
  ```
  koii-cli 1.15.0
  ```

### **Additional Steps for Mac Users**

Mac users may encounter issues with the Koii CLI not working in a new terminal session. To resolve this, follow these steps:

1. After installing the Koii CLI, copy the `PATH` value.

2. In your terminal, run the command `vi ~/.zshrc`.

3. This will open the `~/.zshrc` file in the vi text editor. Insert the following line, replacing `<_paste your path here>_` with the copied `PATH` value:

   ```
   export <_paste your path here>_
   ```

   This line will add the Koii CLI path to your shell configuration.

4. Save and exit the editor. You can do this by pressing the Esc key, typing `:wq`, and then pressing Enter.

5. Now, the Koii CLI should work correctly in any new terminal session.

Feel free to [reach out](https://discord.gg/koii) if you have any further questions or need assistance.

# Windows

1. Open a Command Prompt (cmd.exe) as an Administrator:

   - In the Windows search bar, type "Command Prompt."
   - When the Command Prompt app appears, right-click on it and select "Open as Administrator."
   - If a pop-up window asks, "Do you want to allow this app to make changes to your device?," click "Yes."

2. Download the Koii installer into a temporary directory:

   - Copy and paste the following command into the Command Prompt, then press Enter:

     ```
     cmd /c "curl https://github.com/koii-network/k2-release/releases/download/v1.15.0/koii-install-init-x86_64-pc-windows-msvc.exe --output C:\koii-install-tmp\koii-install-init.exe --create-dirs"
     ```

     :::note

     - If the above step doesn't work, you can manually download the .exe program from this URL: (https://github.com/koii-network/k2-release/releases/download/v1.15.0/koii-install-init-x86_64-pc-windows-msvc.exe).
     - Your browser may display a warning about the file being potentially harmful. Please accept to keep the file.
     - After downloading, copy and paste the downloaded file to the location `C:\koii-install-tmp\` and rename it to "koii-install-init.exe."
       :::

3. Install the latest version of the Koii CLI:

   - Copy and paste the following command into the Command Prompt, then press Enter.

   ```
   C:\koii-install-tmp\koii-install-init.exe v1.15.0
   ```

   - If your system displays a security pop-up, select "Allow" to run the program.

4. Wait for the installer to complete, and then press Enter.

5. Close the Command Prompt window and open a new one as a normal user.

6. To confirm that the Koii CLI was successfully installed, run the following command:
   ```
   koii --version
   ```
   - You should see the version information similar to this:
     ```
     koii-cli 1.15.0
     ```
