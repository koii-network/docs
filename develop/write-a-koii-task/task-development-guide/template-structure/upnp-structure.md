---
title: UPNP Structure
image: img/thumbnail.png
sidebar_label: UPNP Structure
---
To get started, clone the [task template](https://github.com/koii-network/task-template) , and switch to `@feature/upnp` branch.

## What is UPNP?

UPnP (Universal Plug and Play) is a network protocol that allows apps and devices to open and close ports automatically in order to connect with each other. UPnP requires zero configuration — you can add a new device to your network and have it automatically connect with your other devices.

## What can UPNP bring to Koii?

- **Simplify node connectivity:** Koii nodes need to discover and establish connections with each other across the Internet to synchronize data. With UPnP, it is easier for nodes to automatically discover other nodes in the network and open the necessary network ports, which reduces the need for manual configuration and makes node setup and maintenance easier.
- **Enhanced network penetration:** Many individual users' devices sit behind home or business networks, often protected by firewalls or NAT (Network Address translation) devices. These devices may block inbound connections, limiting the node's reachability. UPnP can help these nodes automatically configure network devices, such as routers, to open specific ports, allowing external connections and enhancing the connectivity of the overall network.
- **Promote decentralization:** Because UPnP lowers the technical threshold for node operation, more users may be encouraged to run their own full nodes, which can increase the degree of decentralization of the network.

## Template Explanation

### `_koiiNode.js`

ip_address_list was added in the task state variable.

### **`submission.js`**

| Method Modified | Details |
| --- | --- |
| task() | Random select and fetch a node's data, the route is by default `/value`.  |
| getAddressArray() | Return all the ip addresses in the task state.  |

### `config-task.yml`

| Part Modified | Details |
| --- | --- |
| requirementsTags - TASK_VARIABLE  | Information people want to store in the task. |
| requirementsTags - ADDON | Set to 'REQUIRE_INTERNET’ to make it fully functional |

### **`routes.js`**

| Method Modified | Details |
| --- | --- |
| setupRoutes(app)  | Create routes for other nodes to use |
