---
title: Running on Raspberry
description: Running on Raspberry
sidebar_label: Running on Raspberry Pi
---
Raspberry Pi OS has a Desktop version and a Lite version. Reference the steps to install the Raspberry Pi OS [here](https://www.raspberrypi.com/documentation/computers/getting-started.html#install-an-operating-system). 

## **Set Up Your Raspberry Pi**

- Connect your Raspberry Pi to the monitor, keyboard, and mouse.
- Insert the SD card with Raspbian OS into the Raspberry Pi.
- Power up the Raspberry Pi and complete the initial setup, including connecting to the internet.

## **Raspberry Pi OS with desktop**

### **Step 1: Update Your System**

- Open a terminal window and type the following commands to update your system:
    
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
    

### **Step 2: Install a Web Browser**

- If your Raspberry Pi does not already have a web browser like Chromium installed, you can install it by running:
    
    ```bash
    sudo apt install chromium-browser
    ```
    

### **Step 3: Open a Tab**

- Once the browser is installed, you can start it from the terminal by typing:
    
    ```bash
    chromium-browser
    ```
    

### **Step 4: Download the `.deb` File**

1. Open your browser and go to https://www.koii.network/.
2. Click on the "Pay Me" button to download the **`.deb`** installation package.

### **Step 5: Install the `.deb` File**

1. Open a terminal window.
2. Change to the **`Downloads`** directory by typing **`cd ~/Downloads`**.
3. Install the downloaded **`.deb`** file using the command: `sudo dpkg -i <Downloaded Koii Node>.deb`

## **Raspberry Pi OS Lite**

Please refer to our [VPS](https://docs.koii.network/run-a-node/task-nodes/Running-on-VPS-Docker) tutorial.