---
title: Running an IPFS Task
description: Running an IPFS Task on Your VPS
sidebar_label: Running an IPFS Task
---

## Running an IPFS Task on Your VPS

To ensure smooth operation of IPFS tasks on your VPS node, please follow the steps below. This guide will help you configure your environment and expose the necessary ports.

### Step 1: Expose Port 30017

Ensure that your VPS has port `30017` exposed. If you prefer to use a different port, set it accordingly in the environment variables. Additionally, ensure that the port is exposed from your cloud provider (e.g., AWS, GCP, Azure).

### Step 2: Update Environment Variables

1. **Set the Server Port:**
   If you are using a port **other** than `30017`, add the `SERVER_PORT` variable to your environment configuration. For example, if you are using port `4000`, it should look like this:

   ```sh
   SERVER_PORT=4000
   ```

   :::tip

    If you are using the default port `30017`, there is no need to set the `SERVER_PORT` variable.

2. **Add the IPFS Task ID:**
    Include the `Task` in your environment configuration with your IPFS Task ID, and comma separated each tasks:

    ```sh
    TASKS=E2yxYLgVmPDNXxiKsdNZsDV5vnNZDwWSssKFbn24tMu2,<any other tasks you were running before>
    ```

3. **Update the Service URL:**
    Set the `SERVICE_URL` variable to point to your VPS IP address and the chosen port:

    ```sh
    SERVICE_URL="http://<YOUR_IP_ADDRESS>:30017"
    ```

4. **Set the Static IP Flag:**
    Add the `HAVE_STATIC_IP` variable to indicate that your VPS has a static IP:

    ```sh
    HAVE_STATIC_IP=true
    ```

5. **Enable Non-Whitelisted Tasks:**
    Add the `RUN_NON_WHITELISTED_TASKS` variable to allow running non-whitelisted tasks:

    ```sh
    RUN_NON_WHITELISTED_TASKS=true
    ```

### Step 3: Verify Task Endpoint Accessibility
After updating your environment variables and starting your service, ensure that the task endpoint is accessible over the internet:

1. **Open a browser or use a tool like curl to access the following URL:**

```sh
http://<YOUR_IP_ADDRESS>:30017/tasks
```

2. **Check that the IPFS task appears in the list displayed at this endpoint.**

If you follow these steps, your IPFS task should be correctly configured and accessible from the internet.
