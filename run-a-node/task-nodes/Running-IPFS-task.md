---
title: Running an IPFS Task
description: Running an IPFS Task on Your VPS
sidebar_label: Running an IPFS Task
---

## Running an IPFS Task on Your VPS

To ensure smooth operation of IPFS tasks on your VPS node, please follow the steps below. This guide will help you configure your environment and expose the necessary ports.

### Step 1: Expose Port 30017

Ensure that your VPS has port `30017` exposed. If you prefer to use a different port, set it accordingly in the environment variables.

### Step 2: Update Environment Variables

1. **Set the Server Port:**
   Add the `SERVER_PORT` variable to your environment configuration. If you are using port `30017`, it should look like this:
   ```sh
   SERVER_PORT=30017
   ```

   :::tip

    If you are using a different port, replace `30017` with your chosen port number.
    

2. **Add the IPFS Task ID:**
    Include the `IPFS_Task_ID` in your environment configuration:

    ```sh
    IPFS_TASK_ID=E2yxYLgVmPDNXxiKsdNZsDV5vnNZDwWSssKFbn24tMu2
    ```

3. **Update the Service URL:**
    Set the `SERVICE_URL` variable to point to your VPS IP address and the chosen port:

    ```sh
    SERVICE_URL="http://<YOUR_IP_ADDRESS>:30017"
    ```

### Step 3: Verify Task Endpoint Accessibility
After updating your environment variables and starting your service, ensure that the task endpoint is accessible over the internet:

1. **Open a browser or use a tool like curl to access the following URL:**

```sh
http://<YOUR_IP_ADDRESS>:30017/tasks
```
2. **Check that the IPFS task appears in the list displayed at this endpoint.**

If you follow these steps, your IPFS task should be correctly configured and accessible from the internet.

